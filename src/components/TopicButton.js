import React, { Component } from 'react';
import Result from 'components/Result';
import { Link } from "react-router-dom";


//This component displays a secondary category(topics)
class TopicButton extends Component{
  // constructor(props){
  //     super(props);
  //     this.state = {
  //         isSelected:false,
  //       }
  //     this.select = this.select.bind(this);
  //   } //above is default event handler found on React doc
  // select() {
  //       this.setState({
  //         isSelected:true,
  //       });
  // }
  //
  // disselect() {
  //       this.setState({
  //         isSelected:false,
  //       });
  // }
  render(){
    let iconStyle = {
      width:100,
      height:100
    };

    let category = this.props.category; //props passed down
    let topic = this.props.topic; //props passed down

    return (
      <div>

        <div className = "topic-button"  onClick={this.props.select} topic={topic}>
          <Link to={`/${category}/${topic}`}>
            <img src={require(`images/${topic}.png`)}  alt={topic} style = {iconStyle} />
          </Link>
        </div>

    </div>
   );
}
}

export default TopicButton;
