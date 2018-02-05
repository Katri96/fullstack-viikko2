import React from 'react';
import Viesti from './Viesti'
import Henkilo from './Henkilo'
import Palvelu from './palvelu'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: '',
      notice: ''
    }
    this.addPerson = this.addPerson.bind(this);
    this.getPersons = this.getPersons.bind(this);
    this.deletePerson = this.deletePerson.bind(this);
  }

  addPerson(event) {
    event.preventDefault();
    let a = this.state.persons.filter((person) => person.name === this.state.newName);
    if (a.length > 0) {
      if (window.confirm("Do you want to replace number?")) {
        Palvelu.update(a[0].id, { name: a[0].name, number: this.state.newNumber }).then((response) => {
          console.log(response)
          this.setState({
            notice: 'Muokattu!'
          })
          this.getPersons();
        }).catch(err => {
          Palvelu.create({ name: this.state.newName, number: this.state.newNumber })
            .then((response) => {
              console.log(response)
              this.getPersons();
              this.setState({
                newName: '',
                newNumber: '',
                notice: 'Lisätty!'
              })
            })
        })

      }
      return;
    }
    Palvelu.create({ name: this.state.newName, number: this.state.newNumber })
      .then((response) => {
        console.log(response)
        this.getPersons();
        this.setState({
          newName: '',
          newNumber: '',
          notice: 'Lisätty!'
        })
      })
  }

  getPersons() {
    Palvelu.getAll().then((response) => {
      this.setState({
        persons: response.data
      });
    })
  }

  deletePerson(name) {
    if (window.confirm("Do you really want to delete?")) {
      Palvelu.deleteById(name).then((response) => {
        console.log(response)
        this.setState({
          notice: 'Poistettu!'
        })
        this.getPersons();
      })
    }
  }

  componentWillMount() {
    this.getPersons();
  }

  render() {
    let persons = this.state.persons.filter((person) => {
      return person.name.toLowerCase().trim().includes(this.state.filter.toLowerCase().trim());
    });

    let personlist = persons.map((person) =>
      <Henkilo key={person.id} person={person} delete={this.deletePerson} />
    );

    return (
      <div>
        <Viesti notices={this.state.notice} />
        <h2>Puhelinluettelo</h2>
        <span>Filter </span>
        <input type="text" value={this.state.filter} onChange={(event) => this.setState({ filter: event.target.value })} />
        <h2>Lisää</h2>
        <form onSubmit={this.addPerson}>
          <div>
            nimi: <input type="text" value={this.state.newName} onChange={(event) => this.setState({ newName: event.target.value })} />
          </div>
          <div>
            numero: <input type="text" value={this.state.newNumber} onChange={(event) => this.setState({ newNumber: event.target.value })} />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <table>
          <tbody>
            {personlist}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App