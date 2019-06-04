import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleDataSelect } from "../../actions";
import { boldifyString } from "./utis";

/**
 * AutoComplete list (dropdown) Component
 * @return {object} A JSX object
 */
class AutoCompleteList extends Component {
  constructor() {
    super();
    this.users = {};
  }

  componentDidUpdate(prevProps) {
    const selectedElement = this.users[this.props.selectedIndex];

    if (
      prevProps.selectedIndex !== this.props.selectedIndex &&
      selectedElement
    ) {
      selectedElement.scrollIntoViewIfNeeded({
        block: "end",
        behavior: "smooth"
      });
    }
  }

  render() {
    const {
      isOpen,
      users,
      currentValue,
      handleDataSelect,
      selectedIndex
    } = this.props;

    if (currentValue.length === 0) {
      return <Fragment />;
    }

    if (typeof users !== "undefined" && users.length) {
      return (
        isOpen && (
          <ul
            id="autocomplete-results"
            className="autocomplete-results"
            role="listbox"
          >
            {users.map((user, index) => (
              <li
                onMouseDown={() => handleDataSelect(user)}
                key={user.id}
                ref={item => {
                  this.users[index] = item;
                }}
                className={
                  index === selectedIndex
                    ? "autocomplete-item autocomplete-item--selected"
                    : "autocomplete-item"
                }
                children={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: boldifyString(user.login, currentValue)
                    }}
                  />
                }
                role="option"
                aria-selected={index === selectedIndex}
                tabIndex="0"
              />
            ))}
            <li />
          </ul>
        )
      );
    } else {
      return (
        <div
          className="autocomplete-results"
          children={<div className="autocomplete-item">No results</div>}
        />
      );
    }
  }

  highlight(string, str) {}
}

const mapStateToProps = state => ({
  users: state.search.users,
  currentValue: state.search.currentValue,
  isOpen: state.search.isOpen,
  selectedIndex: state.search.selectedIndex
});

const mapDispatchToProps = {
  handleDataSelect
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AutoCompleteList);
