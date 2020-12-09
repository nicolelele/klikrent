import React from "react";

export default class ProductsList extends React.Component {

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts() {
    const apiUrl = `/api/products`;
    fetch(apiUrl).then(response => response.json()
      .then(data => console.log(data))
      .catch(error => console.log(error))
    )
  }

  render() {
    return (
      <div className="AppProductsList"></div>
    );
  }
}