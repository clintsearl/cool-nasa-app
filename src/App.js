import React, { Component } from 'react';
import './App.css';
import DateInput from './components/DateInput'
import Photo from './components/Photo'



class App extends Component {
  state ={
    date: '',
    photo:''
  }

  changeDate = e => {
    e.preventDefault()
    let dateFromInput = e.target[0].value
    this.setState({date: dateFromInput})
    this.getPhoto(dateFromInput)
    }

    componentDidMount(){
      fetch ('https://api.nasa.gov/planetary/apod?api_key=7B7uLHwCUN5ZJuyoncmo6naDl7gNE3rOug3slTL7')
      .then(response => response.json())
      .then(json => this.setState({photo: json}))
    }
    getPhoto = date => {
      fetch('https://api.nasa.gov/planetary/apod?date=${date}&api_key=7B7uLHwCUN5ZJuyoncmo6naDl7gNE3rOug3slTL7')
      .then(response => response.json())
      .then(requested => this.setState({photo: requested}))
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
         <DateInput changeDate={this.changeDate}
         date={this.state.date}/>
         
        </header>
        <Photo photo={this.state.photo} />
      </div>
    );
  }
}

export default App;
