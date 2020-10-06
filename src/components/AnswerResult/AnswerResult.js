import React, { Component } from 'react'
import './AnswerResult.css'

class AnswerResult extends Component {
  
  render() {
    return (
      <section className='answerResults'>
        <h2>'Good try, but not quite right :('</h2>
        <h1>Hello</h1>
        <div className='feedback'>
          <p>The correct translation for -original- was 
          -answer- and you chose -guess-!</p>
        </div>
        <button>Try another word.</button>
        <p>Your total score is: %correct </p>
      </section>
    )
  }
}

export default AnswerResult
