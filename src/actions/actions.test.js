import {
  ACTIVE_CARD_SELECT,
  ACTIVE_CARD_FLIP,
  CARD_ADD,
  CARD_DELETE,
  CARD_EDIT,
  activeCardSelect,
  activeCardFlip,
  cardAdd,
  cardDelete,
  cardEdit,
} from './index';

describe('actions', () => {
  it('should create an action to Select Active Card', () => {
    const id = 1;
    const expectedAction = {
      type: ACTIVE_CARD_SELECT,
      id,
    };

    expect(activeCardSelect({ id })).toEqual(expectedAction);
  });

  it('should create an action to Flip Active Card', () => {
    const expectedAction = {
      type: ACTIVE_CARD_FLIP,
    };

    expect(activeCardFlip()).toEqual(expectedAction);
  });

  it('should create an action to Select Active Card', () => {
    const id = 1;
    const expectedAction = {
      type: ACTIVE_CARD_SELECT,
      id,
    };

    expect(activeCardSelect({ id })).toEqual(expectedAction);
  });

  it('should create an action to Add new Card', () => {
    const word = 'snail';
    const definition = 'A small, slow crawling mollusk';
    const card = { word, definition };
    const expectedAction = {
      type: CARD_ADD,
      word,
      definition,
    };

    expect(cardAdd(card)).toEqual(expectedAction);
  });

  it('should create an action to Delete Card', () => {
    const id = 1;
    const expectedAction = {
      type: CARD_DELETE,
      id,
    };

    expect(cardDelete({ id })).toEqual(expectedAction);
  });

  it('should create an action to Edit Card', () => {
    const id = 1;
    const word = 'dogs';
    const definition = 'Medium mammals that bark';
    const card = { id, word, definition };
    const expectedAction = {
      type: CARD_EDIT,
      id,
      word,
      definition,
    };

    expect(cardEdit(card)).toEqual(expectedAction);
  });
});
