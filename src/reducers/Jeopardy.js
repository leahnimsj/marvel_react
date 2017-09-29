import _ from 'lodash'

const question = (state = {}, action) => {
 switch (action.type) {
  case 'GET_QUESTION': {
   const nextState = _.merge({}, state);
   nextState.question = action.questions;
   return nextState;
  }
  default:
   return state
 }
}

export default question