const statementsReducer = (
  state = {
    currentStatement: null,
    availableStatements: [],
    statementLoadingStatus: false
  },
  action
) => {
  switch (action.type) {
    case "START_FETCHING_STATEMENT_REQUEST":
      return {
        ...state,
        statementLoadingStatus: true
      };
    case "FETCHED_STATEMENT":
      return {
        ...state,
        currentStatement: action.statement,
        statementLoadingStatus: false
      };
    default:
      return state;
  }
};

export default statementsReducer;
