import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      query: ""
    };
    this.inputSearch = this.inputSearch.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const URL =
      "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json";
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data.results
        });
      });
  }

  inputSearch(e) {
    const value = e.currentTarget.value;
    console.log(value);
    this.setState({ query: value });
  }

  render() {
    const { data, query } = this.state;
    return (
      <div className="App">
        <img
          className="home-logo"
          src="./official-logo.png"
          alt="Evaluación final"
        />
        <input type="search" onChange={this.inputSearch} />
        <ul className="App__List">
          {data
            .filter(myCharacter =>
              myCharacter.name.toLowerCase().includes(query.toLowerCase())
            )
            .map(character => {
              return (
                <li className="App__List--c" key={character.id}>
                  <img
                    className="App__List--c-photo"
                    src={character.image}
                    alt={character.name}
                  />
                  <h2 className="App__List--c-name">{character.name}</h2>
                  <p className="App__List--c-specie">{character.species}</p>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default App;
