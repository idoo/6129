import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteHistoryItem } from "../../actions";

import "./styles.css";

/**
 * HistoryItems Component with details of searche
 * @return {object} A JSX object
 */
class HistoryList extends Component {
  render() {
    const { history, deleteHistoryItem } = this.props;

    return history.map((historyItem, index) => {
      return (
        <li key={index} className="history-list-item" aria-level="3">
          <span
            className="history-list-item_user"
            itemScope
            itemType="http://schema.org/Person"
          >
            <span itemProp="additionalName">{historyItem.user}</span>
          </span>
          <span className="history-list-item-right">
            <time
              dateTime={historyItem.time}
              className="history-list-item-right_time"
            >
              {historyItem.time}
            </time>
            <button
              className="history-list-item-right_remove"
              onClick={() => deleteHistoryItem(historyItem)}
            >
              ×
            </button>
          </span>
        </li>
      );
    });
  }
}

const mapStateToProps = state => ({
  history: state.history
});

const mapDispatchToProps = {
  deleteHistoryItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryList);
