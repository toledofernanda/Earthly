import React, { Component } from 'react';
import { db } from './Db';
import CategoryButton from 'components/CategoryButton';
import StepTitle from 'components/StepTitle';
import BackButton from 'components/BackButton';
import { Link } from "react-router-dom";

//This component displays a list of categories
class CategoryFilter extends Component{

  render(){
    let outerDiv = {
      maxWidth: '1024px',
      margin: 'auto',
      display: 'flex',
      flexFlow: 'column wrap',
      // paddingBottom: '4%',
      justifyContent: 'center',
      marginTop: '5%',
      marginBottom: '5%',
      backgroundColor: 'white',
      borderRadius: 30,
    }; //style for the outside div of main component

    let filterTopStyle = {
      padding: '3% 4%',
      display: 'grid',
      gridTemplateColumns: '40px 10fr'
      // display: 'flex',
      // flexFlow: 'row nowrap',
      // justifyContent: 'center'
    };

    let divStyle = {
      height: '100%',
      minHeight: '50vh',
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'center',
      alignItems: 'flex-start',
      // border: '1px solid black',
      padding: '7% 20%',
      paddingTop: '4%',
      // margin: '5%',
      // marginBottom: 0,
      boxSizing: 'border-box'
    };  //style for the inside div of main component

    let catStyle = {
      flex: '0 0 33.33%'
    }

    // let backButton = {
    //   width: '19px',
    //   cursor: 'pointer',
    //   alignSelf: 'center'
    // }

    let titleStyle = {
      // flex: '0 0 80%'
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
            <BackButton component={'category'} className='button-shadow' />
            <StepTitle title={title} style={titleStyle} />
          </div>
          <div className="category-list" style={divStyle}>
            {categoryList}
          </div>
      </div>
    )
  }
}

export default CategoryFilter;
