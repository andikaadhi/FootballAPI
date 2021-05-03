const router = require("express").Router();
const services = require("../services");

/**
 * @description get all competitions
 */
router.get("/competitions", async (req, res, next) => {
  try {
    const { country } = req.query;
    const response = await services.getCompetitions({
      country,
    });
    res.send(response);
  } catch (error) {
    next(error);
  }
});

/**
 * @description get all teams from single competition
 */
router.get("/competitions/:competitionid/teams", async (req, res, next) => {
  try {
    const { competitionid } = req.params;
    const response = await services.getCompetitionDetails(
      competitionid,
      "teams"
    );
    res.send(response);
  } catch (error) {
    next(error);
  }
});

/**
 * @description get all matches from single competition
 */
router.get("/competitions/:competitionid/matches", async (req, res, next) => {
  try {
    const { competitionid } = req.params;
    const response = await services.getCompetitionDetails(
      competitionid,
      "matches"
    );
    res.send(response);
  } catch (error) {
    next(error);
  }
});

/**
 * @description get current standings from single competition
 */
router.get("/competitions/:competitionid/standings", async (req, res, next) => {
  try {
    const { competitionid } = req.params;
    const response = await services.getCompetitionDetails(
      competitionid,
      "standings"
    );
    res.send(response);
  } catch (error) {
    next(error);
  }
});

/**
 * @description get all teams
 */
router.get("/teams", async (req, res, next) => {
  try {
    const response = await services.getTeams();
    res.send(response);
  } catch (error) {
    next(error);
  }
});

/**
 * get single team
 */
router.get("/teams/:teamid", async (req, res, next) => {
  try {
    const response = await services.getTeamDetails(req.params.teamid);
    res.send(response);
  } catch (error) {
    next(error);
  }
});

/**
 * get all matches from single team
 */
router.get("/teams/:teamid/matches", async (req, res, next) => {
  try {
    const response = await services.getTeamMatches(
      req.params.teamid,
      req.query
    );
    res.send(response);
  } catch (error) {
    next(error);
  }
});

/**
 * @description get all matches
 */
router.get("/matches", async (req, res, next) => {
  try {
    const response = await services.getMatches(req.query);
    res.send(response);
  } catch (error) {
    next(error);
  }
});

/**
 * @description get single match
 */
router.get("/matches/:matchid", async (req, res, next) => {
  try {
    const response = await services.getMatchDetails(req.params.matchid);
    res.send(response);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
