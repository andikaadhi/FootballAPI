const axios = require("axios");

const FootballAPI = (path) => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get(`https://api.football-data.org/v2${path}`, {
          headers: {
            "X-Auth-Token": "89877952ede34c2f910f27e78820b612",
          },
        })
        .then((res) => resolve(res.data))
        .catch((error) => {
          reject(new Error(error.response.data.message));
        });
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = FootballAPI;
