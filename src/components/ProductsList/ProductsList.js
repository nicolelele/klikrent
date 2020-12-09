
import React from "react";
import './ProductsList.css';

export default class ProductsList extends React.Component {
  state = {
    categories: [],
    activeProduct: 0,
    filteredProducts: [],
    showOptions: false,
    userInput: ""
  };

  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      activeProduct: 0,
      filteredProducts: [],
      showOptions: false,
      userInput: ""
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }
  
  fetchProducts() {
    const apiUrl = `/api/products`;
    fetch(apiUrl).then(response => response.json()
      .then(data => {
        this.setState({
          categories: data
        });
      })
      .catch(error => console.log(error))
    )
  }

  onChange = e => {
    const userInput = e.currentTarget.value;
    const filteredProducts = this.state.categories
      .filter(category => {
        return category.products
          .some(product => {
            return product.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1;
          });
      })
      .map(category => {
        let newCategory = {...category};
        newCategory.products = category.products
          .filter(product => {
            return product.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1;
          });
        return newCategory;
      });

    this.setState({
      activeProduct: 0,
      filteredProducts,
      showOptions: true,
      userInput: e.currentTarget.value
    });
  };

  onClick = e => {
    const activeItem = e.currentTarget.id;

    this.setState({
      activeItem,
      filteredProducts: [],
      showOptions: false,
      userInput: e.currentTarget.innerText
    });
  };

  render() {
    const {
      onChange,
      onClick,
      state: {
        filteredProducts,
        showOptions,
        userInput
      }
    } = this;
    let listComponent;

    if (showOptions && userInput) {
      if (filteredProducts.length) {
        listComponent = (
          <div className="AppProductsList m-0 p-0">
            { filteredProducts.map((category, i) =>  {
              return (
                <div key={category.groupId.toString()}>
                  <p className="AppListCategory m-0 p-2">Category: {category.name}</p>
                  { category.products.map(product => (
                    <div key={product.typeId.toString()} id={product.typeId} onClick={onClick} className="AppListItem p-2">
                      {product.name}
                    </div>)
                  )}
                </div>
              )
            })}
          </div>
         );
      } else {
        listComponent = (
          <div className="AppListEmpty p-2">
            <p>No suggestions</p>
          </div>
        );
      }
    }

    return (
      <React.Fragment>
          <input className="AppSearchbar w-100 p-1" id="searchbar" placeholder="Machine name" onChange={onChange}
          value={userInput}/>
        {listComponent}
      </React.Fragment>
    );
  }
}
