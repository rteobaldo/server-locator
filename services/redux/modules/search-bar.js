// Actions
const INPUT_TEXT = 'server-locator/search-bar/INPUT_TEXT';

// Reducers
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case INPUT_TEXT:
      return [...state, ...action.payload.item];
    default:
      return state;
  }
}

// Action Creators
export function search(item) {
  return { type: INPUT_TEXT, payload: item };
}

// Side Effects
