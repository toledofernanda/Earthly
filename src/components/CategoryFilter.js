import React, { Component } from 'react';
import { db } from './Db';
import CategoryButton from 'components/CategoryButton';


//This component displays a list of categories
class CategoryFilter extends Component{
  render(){
    let categoryList = [];

    for (let category in db){
      categoryList.push(
        <CategoryButton key={category} category={category}/>
        );
        console.log(category);
    }

  return (
    <div className="category-list">
      {categoryList}
    </div>
  )
}
}

export default CategoryFilter;
