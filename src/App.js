import React from "react";
import data from "./services/data";
import Home from "./components/Home";
import CharacterDetail from "./components/CharacterDetail";
import { Switch, Route } from "react-router-dom";
import "./stylesheets/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      query: "",
      gender: ""
    };
    this.inputSearch = this.inputSearch.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
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

  handleSelect(e) {
    const value = e.currentTarget.value;
    this.setState({ gender: value });
  }

  render() {
    const { data, query, gender } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <Home
                  inputSearch={this.inputSearch}
                  query={query}
                  data={data}
                  gender={gender}
                  handleSelect={this.handleSelect}
                />
              );
            }}
          />
          <Route
            path="/character-detail/:id"
            render={routerProps => {
              return <CharacterDetail routerProps={routerProps} data={data} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
