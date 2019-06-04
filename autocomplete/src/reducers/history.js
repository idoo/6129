import {
  AUTOCOMPLETE_HANDLE_SELECT,
  DELETE_HISTORY_ITEM,
  CLEAR_HISTORY,
  ENTER_KEY_DOWN
} from "../actions";

const INITIAL_STATE = [];

const historyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTOCOMPLETE_HANDLE_SELECT:
      return [
        ...state,
        {
          user: action.payload.login,
          time: action.date.toLocaleString()
        }
      ];
    case ENTER_KEY_DOWN:
      return [
        ...state,
        {
          user: action.payload.login,
          time: action.date.toLocaleString()
        }
      ];
    case DELETE_HISTORY_ITEM:
      const record = action.payload;
      return state.filter(history => history !== record);
    case CLEAR_HISTORY:
      return INITIAL_STATE;
    default:
      return [...state];
  }
};

export { historyReducer };
