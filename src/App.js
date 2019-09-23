import React from "react";
import data from "./services/data";
import Home from "./components/Home";
import CharacterDetail from "./components/CharacterDetail";
import { Switch, Route } from "react-router-dom";
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
