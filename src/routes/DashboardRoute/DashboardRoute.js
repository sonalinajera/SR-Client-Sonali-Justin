import React, { Component } from 'react'
import './DashboardRoute.css'
import WordApiService from '../../services/word-api-service'
import Accordion from '../../components/Accordion/Accordion'
import { Link } from 'react-router-dom'

class DashboardRoute extends Component {
  state = {
    words: [],
    language: {},
    isOpen: true
  }

  componentDidMount() {
    WordApiService.getWords()
      .then(res => {
        if (!res.ok) {
          Promise.reject(res.error)
        }
        return res.json()
      })
      .then(res => {
        this.setState({ words: res.words, language: res.language })
      })
      .catch(error => console.error(error))
  }

  handleClickStart() {
    const { history } = this.props
    history.push('/learn')
  }

  onChange = isOpen => {
    this.setState({
      isOpen
    });
  };

  render() {
    const { isOpen } = this.state;
    const words = this.state.words ? this.state.words : [];
    const wordListDisplay = words.map(word => (
      <li key={word.id}>
        <Accordion isOpen={isOpen} onChange={this.onChange} word={word}>
        </Accordion>
      </li>
      ))
    return (
      <div className='dashBoard-base'>
        <section className='dashBoard-menu'>
          <h2 className='Language'>{this.state.language.name}</h2>
          <Link to='/learn' className='StartButton'>
            Start practicing
          </Link>
          <p>Total correct answers: {this.state.language.total_score}</p>
        </section>
        <section className='dashBoard-course-overview'>
          <h3>Words to practice</h3>
          <ul className='wordList' lang="ja">
            {wordListDisplay}
          </ul>
        </section>
      </div>
    );
  }
}

export default DashboardRoute
