import React from 'react';
import { Switch } from 'react-router-dom';

import Loading from './Loading';
import Layout from './Layout';
import Home from './pages/Home';
import Article from './pages/Article';

class App extends React.Component {
  state = {
    loaded: false,
    feeds: [],
  }

  componentDidMount() {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid')
      .then(response => response.json())
      .then((json) => {
        this.setState({ loaded: true, feeds: json.items });
      });
  }

  render() {
    return this.state.loaded ? (
      <Switch>
        <Layout path="/" exact component={Home} feeds={this.state.feeds} />
        <Layout path="/cat/:category" component={Home} feeds={this.state.feeds} />
        <Layout path="/article/:slug" component={Article} feeds={this.state.feeds} />
      </Switch>
    ) : <Loading />
  }
}

export default App;