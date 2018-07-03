import React, { Component } from 'react';
import { Link } from 'react-router-dom'; //first npm install react-render-dom
import FilterButtonText from 'components/FilterButtonText';

//This component displays a category in primary categories
class CategoryButton extends Component{
  // constructor(props){
  //     super(props);
  //     this.state = {
  //         isSelected: this.props.state,
  //       }
  //     this.select = this.select.bind(this);
  // } //above is default event handler found on React doc

  // select() {
  //   // console.log(`The category button was clicked.`);
  //   // console.log('this is:', this);
  //   this.setState({
  //     isSelected:true,
  //   });
  // }

  render() {
    let buttonStyle = {
      flex: '0 0 33.33%',
      textAlign: 'center',
      margin: '10px'
    };
    let buttonIcon = {
      width: 100,
      height: 'auto',
      borderRadius: 20
    }
    let name = "stepOne"
    let category = this.props.category; //props passed down
// console.log("cate but" + " " + `/category/${category}` );
    return (
      <div style = {buttonStyle}>
        {/*if category is selected, show topics related*/}
         <div className="category-button"  onClick={(e) => this.props.select(e, category)} category={category}>
           <Link to={`/category/${category}`}>
              <img src={require(`images/${category}.png`)} alt={category}  style={buttonIcon} />
           </Link>
             <FilterButtonText name = {name} category={category}/>
         </div>
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
