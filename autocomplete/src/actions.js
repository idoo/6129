export const AUTOCOMPLETE_HANDLE_FOCUS = "AUTOCOMPLETE_HANDLE_FOCUS";
export const AUTOCOMPLETE_HANDLE_BLUR = "AUTOCOMPLETE_HANDLE_BLUR";
export const AUTOCOMPLETE_HANDLE_INPUT = "AUTOCOMPLETE_HANDLE_INPUT";
export const AUTOCOMPLETE_HANDLE_SELECT = "AUTOCOMPLETE_HANDLE_SELECT";
export const AUTOCOMPLETE_HANDLE_CLEAR = "AUTOCOMPLETE_HANDLE_CLEAR";
export const USERS_DATA_REQUEST = "AUTOCOMPLETE_DATA_REQUEST";
export const USERS_DATA_SUCCESS = "AUTOCOMPLETE_DATA_SUCCESS";
export const DELETE_HISTORY_ITEM = "DELETE_HISTORY_ITEM";
export const CLEAR_HISTORY = "CLEAR_HISTORY";
export const ARROW_KEY_UP = "ARROW_KEY_UP";
export const ARROW_KEY_DOWN = "ARROW_KEY_DOWN";
export const ENTER_KEY_DOWN = "ENTER_KEY_DOWN";

export const handleInput = event => ({
  type: AUTOCOMPLETE_HANDLE_INPUT,
  payload: event.target.value
});

export const AUTOCOMPLETE_FETCHING = "AUTOCOMPLETE_FETCHING";
export const fetching = () => ({
  type: AUTOCOMPLETE_FETCHING
});

export const handleDataSelect = user => ({
  type: AUTOCOMPLETE_HANDLE_SELECT,
  payload: user,
  date: new Date()
});

export const handleClear = () => ({
  type: AUTOCOMPLETE_HANDLE_CLEAR
});

export const handleFocus = event => ({
  type: AUTOCOMPLETE_HANDLE_FOCUS,
  payload: event
});

export const handleBlur = event => ({
  type: AUTOCOMPLETE_HANDLE_BLUR,
  payload: event
});

export const fetchUsersRequest = query => ({
  type: USERS_DATA_REQUEST,
  payload: query
});

export const fetchUsersSuccess = data => ({
  type: USERS_DATA_SUCCESS,
  payload: data
});

export const deleteHistoryItem = historyItem => ({
  type: DELETE_HISTORY_ITEM,
  payload: historyItem
});

export const clearHistory = () => ({
  type: CLEAR_HISTORY
});

export const arrowUp = index => ({
  type: ARROW_KEY_UP,
  payload: index
});

export const arrowDown = index => ({
  type: ARROW_KEY_DOWN,
  payload: index
});

export const enterDown = user => ({
  type: ENTER_KEY_DOWN,
  payload: user,
  date: new Date()
});
