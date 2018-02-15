/**
 * Action Types
 */
// For Active Card substate
export const ACTIVE_CARD_SELECT = 'ACTIVE_CARD_SELECT';
export const ACTIVE_CARD_FLIP = 'ACTIVE_CARD_FLIP';
// For Cards substate
export const CARD_ADD = 'CARD_ADD';
export const CARD_DELETE = 'CARD_DELETE';
export const CARD_EDIT = 'CARD_EDIT';

/**
 * Action Creators
 */
export const activeCardSelect = ({ id }) => ({
  type: ACTIVE_CARD_SELECT,
  id,
});

export const activeCardFlip = ({ id }) => ({
  type: ACTIVE_CARD_FLIP,
  id,
});

export const cardAdd = ({ word, definition }) => ({
  type: CARD_ADD,
  word,
  definition,
});

export const cardDelete = ({ id }) => ({
  type: CARD_DELETE,
  id,
});

export const cardEdit = ({ id, word, definition }) => ({
  type: CARD_EDIT,
  id,
  word,
  definition,
});
