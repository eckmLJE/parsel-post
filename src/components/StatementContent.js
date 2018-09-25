import React from "react";
import { connect } from "react-redux";

const StatementContent = props => {
  return (
    <div className="statement-content">{props.statementArray}</div>
  );
};

const mapStateToProps = state => ({
  statementArray: state.statements.statementArray
});

// const mapDispatchToProps = dispatch => ({
//   setCurrentStatement: statementId => dispatch(setCurrentStatement(statementId))
// });

export default connect(
  mapStateToProps,
  null
)(StatementContent);
