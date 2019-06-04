import React from "react";
import { connect } from "react-redux";
import AutoComplete from "./AutoComplete";
import History from "./History";

import { appStyles } from "../styles";

/**
 * AutoComplete application with history
 * @return {object} A JSX object
 */
const App = () => (
  <div style={appStyles}>
    <AutoComplete />
    <History />
  </div>
);

const mapStateToProps = state => ({
  history: state.history
});

export default connect(mapStateToProps)(App);
