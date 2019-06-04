import { put, debounce } from "redux-saga/effects";
import {
  AUTOCOMPLETE_HANDLE_INPUT,
  fetchUsersSuccess,
  fetching
} from "../actions";

const saga = function*() {
  yield debounce(1000, AUTOCOMPLETE_HANDLE_INPUT, findUsers);
};

function* findUsers({ payload }) {
  yield put(fetching());

  const json = yield fetch(
    `https://api.github.com/search/users?q=${payload}`
  ).then(response => response.json());

  yield put(fetchUsersSuccess(json.items));
}

export default saga;
