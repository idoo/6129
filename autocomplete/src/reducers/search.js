import {
  AUTOCOMPLETE_HANDLE_INPUT,
  USERS_DATA_SUCCESS,
  AUTOCOMPLETE_HANDLE_SELECT,
  AUTOCOMPLETE_HANDLE_FOCUS,
  AUTOCOMPLETE_HANDLE_BLUR,
  AUTOCOMPLETE_HANDLE_CLEAR,
  AUTOCOMPLETE_FETCHING,
  ARROW_KEY_UP,
  ARROW_KEY_DOWN,
  ENTER_KEY_DOWN
} from "../actions";

const INITIAL_STATE = {
  users: [],
  currentValue: "",
  isOpen: false,
  selectedIndex: 0
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTOCOMPLETE_HANDLE_INPUT:
      return { ...state, currentValue: action.payload };
    case AUTOCOMPLETE_FETCHING:
      return { ...state, fetching: true };
    case USERS_DATA_SUCCESS:
      return {
        ...state,
        users: action.payload,
        isOpen: true,
        fetching: false,
        selectedIndex: -1
      };
    case AUTOCOMPLETE_HANDLE_SELECT:
      return {
        ...state,
        currentValue: "",
        isOpen: false,
        selectedIndex: -1
      };
    case AUTOCOMPLETE_HANDLE_FOCUS:
      if (state.currentValue.length) {
        return {
          ...state,
          isOpen: true
        };
      } else {
        return state;
      }
    case AUTOCOMPLETE_HANDLE_BLUR:
      return {
        ...state,
        isOpen: false,
        selectedIndex: -1
      };
    case AUTOCOMPLETE_HANDLE_CLEAR:
      return {
        ...state,
        currentValue: "",
        isOpen: false,
        selectedIndex: -1
      };
    case ARROW_KEY_UP:
      return {
        ...state,
        selectedIndex: Math.max(state.selectedIndex - 1, -1)
      };
    case ARROW_KEY_DOWN:
      return {
        ...state,
        selectedIndex: Math.min(state.selectedIndex + 1, state.users.length - 1)
      };
    case ENTER_KEY_DOWN:
      return {
        ...state,
        currentValue: "",
        isOpen: false
      };
    default:
      return { ...state };
  }
};
export { searchReducer };
