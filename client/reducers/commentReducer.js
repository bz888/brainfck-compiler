import { COMMENT_ARR_VAL } from '../actions/index'

export default function commentReducer (state = ['Only: + - , . [ ] < > are are acceptable', 'All other input will be treated as a comment'], action) {
  switch (action.type) {
    case COMMENT_ARR_VAL:
      return action.commentArr
    default:
      return state
  }
}
