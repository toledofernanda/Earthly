import React, { Component } from 'react';
import { db } from './Db';
import CategoryButton from 'components/CategoryButton';
import StepTitle from 'components/StepTitle';

//This component displays a list of categories
class CategoryFilter extends Component{

  render(){
    let outerDiv = {
      maxWidth: 'calc(1024px - 10%)',
      minWidth: '80vw',
      margin: '4% auto',
      display: 'flex',
      flexFlow: 'column wrap',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderRadius: 30,
    }; //style for the outside div of main component

    let filterTopStyle = {
      padding: '3% 4%',
    };

    let divStyle = {
      height: '100%',
      minHeight: '50vh',
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '7% 25%',
      paddingTop: '4%',
      boxSizing: 'border-box'
    };  //style for the inside div of main component

    let catStyle = {
      flex: '0 0 25%',
      paddingBottom: '3%',
      margin: '0 1%',
      marginLeft: 'calc(1% + .5vw)'
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
          <div className="filterTop" style={filterTopStyle}>
            <StepTitle title={title} />
          </div>
          <div className="category-list" style={divStyle}>
            {categoryList}
          </div>
      </div>
    )
  }
}

export default CategoryFilter;
