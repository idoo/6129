import React, { Component } from "react";
import { connect } from "react-redux";

import {
  handleInput,
  handleFocus,
  handleBlur,
  handleClear,
  arrowUp,
  arrowDown,
  enterDown
} from "../../actions";

import AutoCompleteList from "./AutoCompleteList";
import FetchingText from "./Fetching";
import "./styles.css";

const ARROW_UP = "ArrowUp";
const ARROW_DOWN = "ArrowDown";
const ENTER = "Enter";

const PLACEHOLDER_TEXT = "Type for user search...";

/**
 * Basic AutoComplete Component with *keyboard* support
 */
class AutoComplete extends Component {
  render() {
    const {
      handleInput,
      handleFocus,
      handleBlur,
      currentValue,
      isOpen
    } = this.props;

    return (
      <div className="autocomplete">
        <label htmlFor="github-username-search">GitHub Search</label>
        <div
          className="autocomplete-input-wrap"
          aria-haspopup="listbox"
          aria-owns="autocomplete-results"
          aria-expanded={isOpen}
        >
          <input
            type="text"
            id="github-username-search"
            onChange={handleInput}
            value={currentValue}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={event => this._handleKeyPress(event)}
            placeholder={PLACEHOLDER_TEXT}
            className="autocomplete-input"
            role="searchbox"
            autoComplete="off"
            aria-controls="autocomplete-results"
            aria-autocomplete="none"
            aria-labelledby="origin-label"
            aria-owns="autocomplete-results"
            aria-activedescendant=""
          />

          <FetchingText />

          {currentValue.length > 0 && this.clearInputButton()}
        </div>

        <AutoCompleteList />
      </div>
    );
  }

  clearInputButton() {
    const { handleClear } = this.props;

    return (
      <button className="remove" onClick={() => handleClear()}>
        ×
      </button>
    );
  }

  /**
   * Key press handlers
   *
   * @param {Event} event
   */
  _handleKeyPress(event) {
    const { arrowUp, arrowDown, enterDown, selectedIndex, users } = this.props;

    switch (event.key) {
      case ARROW_UP:
        arrowUp();
        break;
      case ARROW_DOWN:
        arrowDown();
        break;
      case ENTER:
        const user = users[selectedIndex];
        enterDown(user);
        break;
      default:
    }
  }
}

const mapStateToProps = state => ({
  history: state.history,
  users: state.search.users,
  currentValue: state.search.currentValue,
  isOpen: state.search.isOpen,
  selectedIndex: state.search.selectedIndex
});

const mapDispatchToProps = {
  handleInput,
  handleFocus,
  handleBlur,
  handleClear,
  arrowUp,
  arrowDown,
  enterDown
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AutoComplete);
