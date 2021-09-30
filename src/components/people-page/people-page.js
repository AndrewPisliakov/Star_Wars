import React, { Component } from "react";

import './people-page.css';

export default class PeoplePage extends Component {

    onPersonSelected = (id) => {
        this.setState({
          selectedPerson: id
        });
      };

    render() {
        return <p>People Page</p>
    }

};