import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
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
        console.log(data.results);
        this.setState({
          data: data.results
        });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <ul className="App__List">
          {data.map(character => {
            console.log(character);
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
