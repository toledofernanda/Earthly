import React, { Component } from 'react';
import { Link } from 'react-router-dom'; //first npm install react-render-dom
import FilterButtonText from 'components/FilterButtonText';

//This component displays a category in primary categories
class CategoryButton extends Component{
  render() {
    let buttonStyle = {
      textAlign: 'center'
    };


    let name = "stepOne"
    let category = this.props.category; //props passed down

    return (
      <div style = {buttonStyle}>
        {/*if category is selected, show topics related*/}
         <div className="category-button" category={category}>
           <Link to={`/category/${category}`}>
              <img src={require(`images/${category}.svg`)} alt={category} className = {['button-shadow','buttonIcon', `${category}Color`].join(' ')} />
           </Link>
             <FilterButtonText name = {name} category={category}/>
         </div>
      </div>
    );
  }
}


export default CategoryButton;
