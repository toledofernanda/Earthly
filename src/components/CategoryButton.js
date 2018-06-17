import React, { Component } from 'react';
import TopicFilter from 'components/TopicFilter';

//This component displays a category in primary categories
class CategoryButton extends Component{
  constructor(props){
      super(props);
      this.state = {
          isSelected:false,
        }
      this.select = this.select.bind(this);
    } //above is default event handler found on React doc
  select() {
        console.log(`The category button was clicked.`);
        console.log('this is:', this);
        this.setState({
          isSelected:true,
        });
        console.log(this.state);

  }
  render(){
    let iconStyle = {
      width:100,
      height:100
    }; //just for testing, made icon size larger
    let category = this.props.category; //props passed down

    return (
      <div className = "category-button"  onClick={this.select} category={category} isSelected={this.state.isSelected}>
          <img src={require(`images/${category}.png`)}  style = {iconStyle} />
          {this.state.isSelected ? 'true' : 'false'} //test
      </div>
   );
  }
}

export default CategoryButton;
