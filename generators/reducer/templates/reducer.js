import Immutable from 'immutable';

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

import {enums} from '../helpers';

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

const defaultState = new Immutable.fromJS({});

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

function reducer (state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
} // <= reducer

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

//  => private methods here <=

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

export default reducer;