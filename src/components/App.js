import { Component } from 'react';
import './App.css';
import Form from './Form';
import Result from './Result';


 class App extends Component{

  state = {
    value: '',
    id_stacji: '',
    stacja: '',
    data_pomiaru: '',
    godzina_pomiaru: '',
    temperatura: '',
    predkosc_wiatru: '',
    kierunek_wiatru: '',
    wilgotnosc_wzgledna: '',
    suma_opadu: '',
    cisnienie: '',
    err: false,
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleCtitySubmit = (e) => {
    e.preventDefault()
    console.log("działa")
    const API = `https://danepubliczne.imgw.pl/api/data/synop/station/${this.state.value}`

    fetch(API)
    .then(response =>{
        if(response.ok){
        return response
        }
        throw "Nie udało się"
      })
    .then(response => response.json())
    .then(data => {
      const time = new Date().toLocaleString()
      this.setState(state => ({
        err: false,
        id_stacji: data.id_stacji,
        stacja: data.stacja,
        data_pomiaru: time,
        godzina_pomiaru: '',
        temperatura: data.temperatura,
        predkosc_wiatru: data.predkosc_wiatru,
        kierunek_wiatru: data.kierunek_wiatru,
        wilgotnosc_wzgledna: data.wilgotnosc_wzgledna,
        suma_opadu: data.suma_opadu,
        cisnienie: data.cisnienie,
      }))
    })
    .catch(err => {
      console.log(err);
      this.setState(state =>({
        err: true,
        stacja: state.value
      }))
    })

  }

  render(){
    return (
      <div className="App">
        <Form 
        value={this.state.value} 
        change={this.handleInputChange}
        submit={this.handleCtitySubmit}
        />
        <Result weather={this.state}/>
      </div>
    );
  }

}

export default App;
