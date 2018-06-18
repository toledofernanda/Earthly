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
        // console.log(`The category button was clicked.`);
        // console.log('this is:', this);
        this.setState({
          isSelected:true,
        });
  }

  render() {
    let iconStyle = {
      width:100,
      height:100
    }; //just for testing, made icon size larger
    let category = this.props.category; //props passed down
      return (
        <div>
          <div className="category-button"  onClick={this.select} category={category}><img src={require(`images/${category}.png`)}  style = {iconStyle} /></div>
          {this.state.isSelected ?
             <TopicFilter category={category} /> :
             null
          }
        </div>
      );
    }

  //
  //
  // render(){
  //   const isSelected = this.state.isSelected;
  //   let iconStyle = {
  //     width:100,
  //     height:100
  //   }; //just for testing, made icon size larger
  //   let category = this.props.category; //props passed down
  //   let renderData;
  //
  //   if (isSelected == true) {
  //     renderData = <TopicFilter category={category} />;
  //   } else {
  //     console.log(category);
  //     renderData = <div className="category-button"  onClick={this.select} category={category}><img src={require(`images/${category}.png`)}  style = {iconStyle} /></div>;
  //   }
  //   return (
  //     <div>
  //       <CategoryButton />
  //       {renderData}
  //     </div>
  //   );
  // }
}


export default CategoryButton;
