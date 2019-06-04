import React, { Component } from "react";
import { connect } from "react-redux";
import { clearHistory } from "../../actions";
import HistoryList from "./HistoryList";

import "./styles.css";

/**
 * History of searches for Autocomplete
 * @return {object} A JSX object
 */
class HistoryComponent extends Component {
  render() {
    const { history, clearHistory } = this.props;

    if (history.length > 0) {
      return (
        <section className="history">
          <div className="history-header-wrap">
            <header className="history-header">
              <b>Search history</b>
            </header>
            <button className="history-clear" onClick={() => clearHistory()}>
              Clear search history
            </button>
          </div>
          <ul
            className="history-list"
            aria-labelledby="header"
            aria-owns="external_listitem"
            children={<HistoryList />}
          />
        </section>
      );
    } else {
      return <div />;
    }
  }
}

const mapStateToProps = state => ({
  history: state.history
});

const mapDispatchToProps = {
  clearHistory
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryComponent);
