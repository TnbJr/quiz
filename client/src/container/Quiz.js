import React from 'react';
import axios from 'axios';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Question} from '../components/Questions';
import {DisplayMessage} from '../components/Message'
import '../styles/style.scss';

class Quiz extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 0,
      questions: [],
      question: null,
      correctAnswerCount: 0,
      errors: false
    }
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this)
  }

 componentDidMount(){
    setTimeout(()=>{
    axios.get('http://localhost:5000/api/customers')
      .then((response)=>{
        this.setState({
          questions: response.data,
          question: response.data[0]
        })
      })
      .catch((errors)=>{
        this.setState({
        	errors: true
        })
      })
    }, 500)
  }

  handleAnswerSelected(id) {
    const counter = this.state.counter + 1;
    const correctAnswerCount = this.state.question.answer === id ? this.state.correctAnswerCount + 1 : this.state.correctAnswerCount

    setTimeout(() => {
      this.setState({
        counter: counter,
        question: this.state.questions[counter],
        correctAnswerCount: correctAnswerCount
      }); 
    }, 300);
  }

  renderQuiz(){
    if(this.state.questions.length === 0 && !this.state.errors){
      return <DisplayMessage message="Loading..." key="loading"/>
    }else if(this.state.errors){
    	return <DisplayMessage message="There is a network error" key="errors"/>
    }
    else if(this.state.questions.length >= 1 && this.state.questions.length !== this.state.counter){
      return <Question key="questions" option={this.state.question} handleAnswerSelected={this.handleAnswerSelected} questionNumber={this.state.counter + 1} questionsLength={this.state.questions.length}/>
    }else{
      return <DisplayMessage message={`You got ${this.state.correctAnswerCount} out of ${this.state.questions.length} questions correct`} key="question-total"/>
    }
  }

  render(){
    return(
      <div className="quiz">
          <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={600}
            transitionLeaveTimeout={300}>
          {this.renderQuiz()}
        </ReactCSSTransitionGroup>
      </div>
      )
  }
}

export default Quiz;