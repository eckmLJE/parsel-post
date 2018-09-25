const statementsUrl = "http://localhost:3000/statements";

export const setCurrentStatement = statementId => {
  return dispatch => {
    dispatch({ type: "START_FETCHING_STATEMENT_REQUEST" });
    return fetch(statementsUrl + `/${statementId}`)
      .then(res => res.json())
      .then(json => {
        dispatch({ type: "FETCHED_STATEMENT", statement: json });
      });
  };
};
