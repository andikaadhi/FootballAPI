const filterBuilder = (logic = "and", ...filters) => {
  let filterQuery = logic === "or" ? false : true;
  for (let i = 0; i < filters.length; i++) {
    if (Array.isArray(filters[i])) {
      if (filters[i][0] !== undefined && filters[i][1] !== undefined) {
        const query = filters[i][0] === filters[i][1];
        filterQuery =
          logic === "or" ? filterQuery || query : filterQuery && query;
      }
    } else {
      filterQuery =
        logic === "or" ? filterQuery || filters[i] : filterQuery && filters[i];
    }
  }
  return filterQuery;
};
module.exports = filterBuilder;
