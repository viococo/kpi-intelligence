import React, { Component } from "react";
import { Link } from "react-router-dom";

class List extends Component {
  state = {
    investissements: []
  };

  render() {
    const { match } = this.props;
    return (
      <div>
        <div>List</div>
        <Link to={`${match.url}/components`}>Components</Link>
      </div>
    );
  }
}

export default List;
