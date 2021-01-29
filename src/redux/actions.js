import {
  FETCH_CHARACTERS,
  FETCH_ONE_CHARACTER,
  LOADING_FINISH,
  LOADING_START,
  FETCH_MORE_CHARACTERS,
  LOADING_MORE_START,
  LOADING_MORE_FINISH,
} from "./types";

const url = "https://rickandmortyapi.com/api/character";

export const fetchMoreCharacters = (nextURL) => {
  return async (dispatch) => {
    dispatch(loadingMoreStart());
    const response = await fetch(nextURL);
    const json = await response.json();

    try {
      dispatch({ type: FETCH_MORE_CHARACTERS, payload: json });
      dispatch(loadingMoreFinish());
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const fetchOneCharacter = (id) => {
  return async (dispatch) => {
    dispatch(loadingStart());
    const response = await fetch(`${url}/${id}`);
    const json = await response.json();

    try {
      dispatch({ type: FETCH_ONE_CHARACTER, payload: json });
      dispatch(loadingFinish());
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const fetchCharacters = () => {
  return async (dispatch) => {
    dispatch(loadingStart());
    const response = await fetch(url);
    const json = await response.json();

    try {
      dispatch({ type: FETCH_CHARACTERS, payload: json });
      dispatch(loadingFinish());
    } catch (error) {
      console.log("error", error);
    }
  };
};

export function loadingStart() {
  return {
    type: LOADING_START,
  };
}

export function loadingFinish() {
  return {
    type: LOADING_FINISH,
  };
}

export function loadingMoreStart() {
  return {
    type: LOADING_MORE_START,
  };
}

export function loadingMoreFinish() {
  return {
    type: LOADING_MORE_FINISH,
  };
}
