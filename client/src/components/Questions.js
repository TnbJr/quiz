import React from 'react';
import PropTypes from 'prop-types';


export const AnswerOptions = (props) => {
  const {option, handleAnswerSelected} = props
  return ( 
    <li className="answerOption" onClick={(id)=>handleAnswerSelected(option.id)}>
        <p>{option.text}</p>
    </li>
    )
}

AnswerOptions.propTypes = {
  option: PropTypes.object.isRequired,
  handleAnswerSelected: PropTypes.func.isRequired

}


export const Question = (props)=>{
  const {option, questionNumber, handleAnswerSelected, questionsLength} = props
  return(
    <div className="question-wrapper">
        <div className="question">
          <span className="question-counter">Question {questionNumber} of {questionsLength}</span>
          <h1 className="question-header">{option.question}</h1>
        </div>
        <ul className="question-list">
          {option.answers.map((answerOption)=>(<AnswerOptions option={answerOption} handleAnswerSelected={handleAnswerSelected} key={answerOption.id}/>))}
        </ul> 
    </div>
  )
}

Question.propTypes = {
  option: PropTypes.object.isRequired,
  questionNumber: PropTypes.number.isRequired,
  handleAnswerSelected: PropTypes.func.isRequired,
  questionsLength: PropTypes.number.isRequired
}

