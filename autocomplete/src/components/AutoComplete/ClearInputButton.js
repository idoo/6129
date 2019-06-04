import React, { Component } from "react";
import { connect } from "react-redux";

import { handleClear } from "../../actions";

/**
 * Clear button (inside field) for AutoComplete
 * @return {object} A JSX object
 */
class ClearInputButton extends Component {
  render() {
    const { handleClear } = this.props;

    return (
      <button
        className="remove"
        onClick={() => handleClear()}
        aria-label="Clear"
        tabIndex={2}
      >
        ×
      </button>
    );
  }
}

const mapDispatchToProps = {
  handleClear
};

export default connect(
  {},
  mapDispatchToProps
)(ClearInputButton);
