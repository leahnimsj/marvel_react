import { connect } from 'react-redux'
import { getQuestion } from '../actions/Jeopardy'
import JeopardyDisplay from '../components/jeopardydisplay/JeopardyDisplay'

const mapStateToProps = state => {
  return {
    question: state.question
  }
}

const mapDispatchToProps = dispatch => {
  return {
    renderQuestion: () => {
      dispatch(getQuestion())
    }
  }
}

const Questions = connect(
  // this is data - (model)
  mapStateToProps,
  // this is behavior (controller)
  mapDispatchToProps
)(JeopardyDisplay)
// (view)
// connect is linking the data and the behavior to the display component (which is the structure)

export default Questions