import React, { Component } from 'react';
// import Result from 'components/Result';

//This component displays a category in primary categories
class CategoryButton extends Component{
  constructor(props){
      super(props);
      this.state = {
          check:false,
      };
      // this.click=this.click.bind(this);
      this.select = this.setState({
           check:true,
         });
      }
  render(){
    let iconStyle = {
      width:100,
      height:100
    };
    let category = this.props.category; //props passed down
    return (
      <div className = "category-button">
          <img src={require(`images/${category}.png`)}  style = {iconStyle} />
      </div>
   );
  }
}

export default CategoryButton;
