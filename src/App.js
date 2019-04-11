import React, { Component } from 'react';
import './App.css';
import moment from 'moment'
// const momentRandom = require('moment-random')
//components
import DateInput from './components/DateInput'
import Photo from './components/Photo'



class App extends Component {
  state ={
    date:'',
    photo:''
  }
 

    componentDidMount(){
      fetch ('https://api.nasa.gov/planetary/apod?api_key=7B7uLHwCUN5ZJuyoncmo6naDl7gNE3rOug3slTL7')
      .then(response => response.json())
      .then(json => this.setState({photo: json}))
    }
    
      //   formatDate = date =>{
      //     if (date){
      //     let year = date.year()
      //     let month = date.month()+ 1
      //     let day = date.day()
      //     return `${year}-${month}-${day}`
      //   }
      // }
    // moment(this.state.date).format('YYYY-MM-DD'

    getPhoto = async date => {
      if( moment(date).isBefore(moment()) ){
      await fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=7B7uLHwCUN5ZJuyoncmo6naDl7gNE3rOug3slTL7`)
      .then(response => response.json())
      .then(requested => this.setState({photo: requested}))
    } else{
      alert(`That's in the future. \n Come back `+ moment().to(date) + '!')
    }
  }

    changeDate = dateFromInput => {
        // console.log('date from input', dateFromInput)
        let formatted =moment(dateFromInput).format('YYYY-MM-DD')
        console.log("formated date", formatted)
      this.setState({date: formatted})
      this.getPhoto(formatted)
      }

  render() {
    console.log(moment().format('YYYY-MM-DD'))
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
