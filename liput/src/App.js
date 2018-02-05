import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: '',
      countries: []
    }
  }

  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all').then((res) =>
      this.setState({ countries: res.data })
    );
  }

  getCountry(country) {
    return (
      <div>
        <h1>{country.name}</h1>
        <p>capital: {country.capital}</p>
        <p>popula: {country.population}</p>
        <img src={country.flag} height='250' width='350' />
      </div>
    )
  }

  render() {
    let content = <p>too many matches, specify another filter</p>

    var countries = this.state.countries.filter((country) =>
      country.name.toLowerCase().includes(this.state.filter.toLowerCase().trim())
    );


    if (countries.length <= 10 && countries.length > 1) {
      content = countries.map((c) => {
        return <p key={c.name} onClick={() => {
          this.setState({ filter: c.name })
          console.log("update")
          this.forceUpdate();
        }}>{c.name}</p>
      })
    } else if (countries.length === 1) {
      content = this.getCountry(countries[0]);
    }



    return (
      <div className="App">
        <span> find countries: </span>
        <input id='filter' value={this.state.filter} onChange={(event) => this.setState({ filter: event.target.value })} />
        {content}
      </div>
    );
  }
}

export default App;
