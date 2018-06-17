import React, { Component } from 'react';
// import Result from 'components/Result';

//This component displays a secondary category(topics)
class TopicButton extends Component{
  constructor(props){
      super(props);
      this.state = {
          isSelected:false,
        }
      this.select = this.select.bind(this);
    } //above is default event handler found on React doc
  select() {
        this.setState({
          isSelected:true,
        });
        console.log(this.state);
  }
  render(){
    let iconStyle = {
      width:100,
      height:100
    };
    let topic = this.props.topic; //props passed down
    return (
      <div className = "topic-button"  onClick={this.select}>
          <img src={require(`images/${topic}.png`)}  style = {iconStyle} />
      </div>
   );
  }
}

export default TopicButton;
