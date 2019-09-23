import React from "react";
import data from "./services/data";
import Header from "./components/Header";
import Filters from "./components/Filters";
import CharacterList from "./components/CharacterList";
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
    data().then(data => {
      this.setState({
        data: data.results
      });
    });
  }

  inputSearch(e) {
    const value = e.currentTarget.value;
    this.setState({ query: value });
  }

  render() {
    const { data, query } = this.state;
    return (
      <div className="App">
        <Header />
        <Filters inputSearch={this.inputSearch} />
        <CharacterList character={data} query={query} />
      </div>
    );
  }
}

export default App;
