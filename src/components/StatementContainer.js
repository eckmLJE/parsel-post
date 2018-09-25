import React, { Component } from "react";
import { connect } from "react-redux";

import { setCurrentStatement } from "../actions/statements";

import StatementContent from "./StatementContent";

class StatementContainer extends Component {
  componentDidMount = () => {
    this.props.setCurrentStatement("1");
  };

  render() {
    return (
      <div className="statement-container">
        <StatementContent />
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
