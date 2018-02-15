import { combineReducers } from 'redux';

import {
  ACTIVE_CARD_SELECT,
  ACTIVE_CARD_FLIP,
  CARD_ADD,
  CARD_DELETE,
  CARD_EDIT,
} from './../actions';

/*
 * Shape of State object
 */
/*
{
  cards: {id: int, word: string, definition: string},
  activeCard: {id: int, isFlipped: boolean},
}
*/

const initialState = {
  cards: [
    {
      id: 1,
      word: 'mouse',
      definition: 'A small mammal that squeeks.',
    },
    {
      id: 2,
      word: 'dog',
      definition: 'An adorable medium mammal that barks.',
    },
  ],
  activeCard: {
    id: 1,
    isFlipped: false,
  },
};

/**
 * Active card reducer
 */
const activeCard = (state = initialState.activeCard, action) => {
  switch (action.type) {
    case ACTIVE_CARD_SELECT:
      return {
        ...state,
        id: action.id,
        isFlipped: false,
      };

    case ACTIVE_CARD_FLIP:
      return {
        ...state,
        isFlipped: true,
      };

    default:
      return state;
  }
};

/**
 * Cards reducer
 */
const cards = (state = initialState.cards, action) => {
  switch (action.type) {
    case CARD_ADD:
      return [
        ...state,
        {
          id: state.length,
          word: action.word,
          definition: action.definition,
        },
      ];

    case CARD_DELETE:
      return state.filter(c => c.id !== action.id);

    case CARD_EDIT:
      return state.map(c => (c.id === action.id ? {
        id: action.id,
        word: action.word,
        definition: action.definition,
      } : c));

    default:
      return state;
  }
};

/**
 * Compose reducers to main reducer
 */
// Can reduce composition code by using `combineReducers` from 'redux' npm module.
// export const appReducer = (state = initialState, action) => ({
//   activeCard: activeCard(state.activeCard, action),
//   cards: cards(state.cards, action),
// });

const appReducer = combineReducers({
  activeCard,
  cards,
});

export default appReducer;
