import React, { Component } from "react";
import { connect } from "react-redux";

import StatementContent from "./StatementContent";
import StatementSpan from "./StatementSpan";

import { setStatementArray } from "../actions/statements";

class StatementProcessor extends Component {
  componentDidMount = () => {
    const statementArray = this.processStatement();
    this.props.setStatementArray(statementArray);
  };

  processStatement = () => {
    const statementArray = [];
    const testStatement = this.props.currentStatement;
    statementArray.push(
      <StatementSpan key={testStatement.id} content={testStatement.content} />
    );
    return statementArray;
  };

  render() {
    return <StatementContent />;
  }
}

const mapStateToProps = state => ({
  currentStatement: state.statements.currentStatement
});

const mapDispatchToProps = dispatch => ({
  setStatementArray: statementArray =>
    dispatch(setStatementArray(statementArray))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatementProcessor);
