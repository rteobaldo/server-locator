// Actions
const INPUT_TEXT = "server-locator/search-bar/INPUT_TEXT";

const initialState = {
  domain: ""
};

// Reducers
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INPUT_TEXT:
      return {
        ...state,
        domain: action.payload.domain
      };
    default:
      return state;
  }
}

// Action Creators
export const inputText = text => ({ type: INPUT_TEXT, payload: { domain: text } });

// Selectors
export const getSearchInput = state => state.searchBar.domain;

// Side Effects
export function requestDomainInfo(domain) {
  return fetch();
}
