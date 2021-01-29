import {
  FETCH_CHARACTERS,
  LOADING_FINISH,
  LOADING_START,
  FETCH_MORE_CHARACTERS,
  FETCH_ONE_CHARACTER,
  LOADING_MORE_START,
  LOADING_MORE_FINISH,
} from "./types";

const initialState = {
  info: {},
  results: [],
  loading: false,
  loadingMore: false,
  showFirst10: true,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        info: action.payload.info,
        results: action.payload.results,
      };
    case FETCH_ONE_CHARACTER:
      return {
        ...state,
        choosedCharacter: action.payload,
      };

    case FETCH_MORE_CHARACTERS:
      return {
        ...state,
        info: state.showFirst10 ? { ...state.info } : action.payload.info,
        results: state.results.concat(
          state.showFirst10
            ? action.payload.results.slice(0, 10)
            : action.payload.results.slice(-10)
        ),
        showFirst10: !state.showFirst10,
      };
    case LOADING_START:
      return { ...state, loading: true };
    case LOADING_FINISH:
      return { ...state, loading: false };
    case LOADING_MORE_START:
      return { ...state, loadingMore: true };
    case LOADING_MORE_FINISH:
      return { ...state, loadingMore: false };

    default:
      return state;
  }
};
