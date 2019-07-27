import React, { Component } from "react";

class Details extends Component {
  state = {
    investissements: []
  };

  render() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    return <div>Details : {id}</div>;
  }
}

export default Details;
