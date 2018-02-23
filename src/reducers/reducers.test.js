import reducer, { initialState } from './index';
import {
  ACTIVE_CARD_SELECT,
  ACTIVE_CARD_FLIP,
  CARD_ADD,
  CARD_DELETE,
  CARD_EDIT,
} from './../actions';

describe('combined reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('active card reducer', () => {
    it('should handle selecting a different active card', () => {
      const id = 2;
      const action = {
        type: ACTIVE_CARD_SELECT,
        id,
      };

      expect(reducer(initialState, action)).toEqual({
        ...initialState,
        activeCard: {
          id,
          isFlipped: false,
        },
      });
    });

    it('should handle flipping the active card', () => {
      const action = {
        type: ACTIVE_CARD_FLIP,
      };

      expect(reducer(initialState, action)).toEqual({
        ...initialState,
        activeCard: {
          ...initialState.activeCard,
          isFlipped: true,
        },
      });
    });
  });

  describe('flash cards reducer', () => {
    it('should handle adding a new card', () => {
      const word = 'cat';
      const definition = 'A medium mammal that meows.';
      const action = {
        type: CARD_ADD,
        word,
        definition,
      };

      expect(reducer(initialState, action)).toEqual({
        ...initialState,
        cards: [
          ...initialState.cards,
          {
            id: initialState.cards.length + 1,
            word,
            definition,
          },
        ],
      });
    });

    it('should handle deleting a card', () => {
      const id = 2;
      const action = {
        type: CARD_DELETE,
        id,
      };

      expect(reducer(initialState, action)).toEqual({
        ...initialState,
        cards: initialState.cards.filter(c => c.id !== id),
      });
    });

    it('should handle editing a card', () => {
      const id = 1;
      const word = 'cat';
      const definition = 'A medium mammal that meows.';
      const action = {
        type: CARD_EDIT,
        id,
        word,
        definition,
      };

      expect(reducer({
        ...initialState,
        cards: [
          initialState.cards[0],
        ],
      }, action)).toEqual({
        ...initialState,
        cards: [
          {
            id,
            word,
            definition,
          },
        ],
      });
    });
  });
});
