import React, { Component } from 'react';
import { db } from './Db';
import CategoryButton from 'components/CategoryButton';
import StepTitle from 'components/StepTitle';
import { Link } from "react-router-dom";

//This component displays a list of categories
class CategoryFilter extends Component{

  render(){
    let divStyle = {
      maxWidth: '1024px',
      height: '100%',
      minHeight: '50vh',
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 30,
      border: '1px solid black',
      padding: '7% 20%',
      margin: '5%',
      marginBottom: 0,
      boxSizing: 'border-box'
    };  //style for the inside div of main component
    let outerDiv = {
      margin: 'auto',
      display: 'flex',
      paddingBottom: '4%',
      justifyContent: 'center'
    }; //style for the outside div of main component
    let catStyle = {
      flex: '0 0 33.33%'
    }

    let backButton = {
      backgroundColor: 'transparent',
      border: 'none',
      fontSize: '1.8em',
      cursor: 'pointer'
    }

    let categoryList = [];
    let title = "step1";

    for (let category in db){
      categoryList.push(
        <div key={`${category}-button`} style={catStyle}>
          <CategoryButton key={category} category={category}  />
        </div>
      );
    }

    return (
      <div className="category-filter" key="category-filter" style = {outerDiv}>
          <div className="category-list" style={divStyle}>
          
            {categoryList}
          </div>
      </div>
    )
  }
}

export default CategoryFilter;
