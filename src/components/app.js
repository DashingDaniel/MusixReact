import React, { Component } from 'react';
import Search from '../containers/search';
import LyricsList from '../containers/lyrics';
export default class App extends Component {
  render() {
    return (
      <div>
          <Search />
          <br/>
          <LyricsList />
      </div>
    );
}
}
