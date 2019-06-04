import React, { Component } from "react";
import { connect } from "react-redux";

/**
 * FetchingText for AutoComplete
 * @return {object} A JSX object
 */
class FetchingText extends Component {
  render() {
    const { isFetching } = this.props;

    return (
      isFetching && <span className="autocomplete-loading">loading...</span>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.search.fetching
});

export default connect(mapStateToProps)(FetchingText);
