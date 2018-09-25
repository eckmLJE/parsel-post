import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/StatementContainer.css";

import { setCurrentStatement } from "../actions/statements";
import StatementProcessor from "./StatementProcessor"

class StatementContainer extends Component {
  componentDidMount = () => {
    this.props.setCurrentStatement("1");
  };

  render() {
    return (
      <div className="statement-container">
        {this.props.currentStatement && <StatementProcessor />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentStatement: state.statements.currentStatement
});

const mapDispatchToProps = dispatch => ({
  setCurrentStatement: statementId => dispatch(setCurrentStatement(statementId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatementContainer);
