import React, { Component } from 'react';
import { db } from './Db';
import CategoryButton from 'components/CategoryButton';
import StepTitle from 'components/StepTitle';

//This component displays a list of categories
class CategoryFilter extends Component{

  //scroll window to top when opening new route
  componentDidMount() {
    window.scrollTo(0, 0);
  }

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

    let categoryList = [];
    let title = "step1";

    for (let category in db){
      categoryList.push(
        <div key={`${category}-button`} className = "catStyle">
          <CategoryButton key={category} category={category}  />
        </div>
      );
    }

    return (
      <div className="category-filter" key="category-filter" style = {outerDiv}>
          <div className="filterTop" style={filterTopStyle}>
            <StepTitle title={title} />
          </div>
          <div className="category-list filterDiv" >
            {categoryList}
          </div>
      </div>
    )
  }
}

export default CategoryFilter;
