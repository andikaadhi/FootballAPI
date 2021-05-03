const moment = require("moment");
const FootballAPI = require("../modules/FootballAPI");
const filterBuilder = require("../modules/filterBuilder");

const services = {
  getCompetitions: async ({ country }) => {
    const response = await FootballAPI("/competitions");
    let comps;
    if (country) {
      comps = response.competitions.filter((comp) => {
        return filterBuilder("and", [comp.area.name, country]);
      });
    } else {
      return response;
    }
    return {
      count: comps.length,
      competitions: comps,
    };
  },
  getCompetitionDetails: (compid, subResource) =>
    FootballAPI(`/competitions/${compid}/${subResource}`),
  getTeams: () => {
    const response = FootballAPI("/teams");
    return response;
  },
  getTeamDetails: (teamid) => {
    const response = FootballAPI(`/teams/${teamid}`);
    return response;
  },
  getTeamMatches: async (teamid, { type, status }) => {
    let filter = {
      status,
      homeTeamID: teamid.toString(),
      awayTeamID: teamid.toString(),
    };
    if (type === "home") delete filter.awayTeamID;
    else if (type == "away") delete filter.homeTeamID;
    const dateFrom = moment().subtract(7, "days").format("YYYY-MM-DD");
    const dateTo = moment().format("YYYY-MM-DD");
    const response = await FootballAPI(
      `/matches?dateFrom=${dateFrom}&dateTo=${dateTo}`
    );
    const matches = response.matches.reduce((matches, match) => {
      if (
        filterBuilder(
          "and",
          [match.status.toLowerCase(), status],
          filterBuilder(
            "or",
            [match.homeTeam.id.toString(), filter.homeTeamID],
            [match.awayTeam.id.toString(), filter.awayTeamID]
          )
        )
      ) {
        return [
          ...matches,
          {
            title: `${match.homeTeam.name} VS ${match.awayTeam.name}`,
            ...match,
          },
        ];
      }
      return [...matches];
    }, []);
    return {
      count: matches.length,
      matches,
    };
  },
  getMatches: async ({ country, status }) => {
    const dateFrom = moment().subtract(7, "days").format("YYYY-MM-DD");
    const dateTo = moment().format("YYYY-MM-DD");
    const response = await FootballAPI(
      `/matches?dateFrom=${dateFrom}&dateTo=${dateTo}`
    );
    const matches = response.matches.reduce((matches, match) => {
      if (
        filterBuilder(
          "and",
          [match.competition.area.name, country],
          [match.status, status]
        )
      ) {
        return [
          ...matches,
          {
            title: `${match.homeTeam.name} VS ${match.awayTeam.name}`,
            ...match,
          },
        ];
      }
      return [...matches];
    }, []);
    return {
      count: matches.length,
      matches,
    };
  },
  getMatchDetails: async (matchid) => {
    const match = await FootballAPI(`/matches/${matchid}`);
    return {
      title: `${match.head2head.homeTeam.name} VS ${match.head2head.awayTeam.name}`,
      ...match,
    };
  },
};

module.exports = services;
