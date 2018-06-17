import React, { Component } from 'react';
// import Result from 'components/Result';

//This component displays a secondary category(topics)
class TopicButton extends Component{
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
    let topic = this.props.topic; //props passed down
    return (
      <div className = "topic-button">
          <img src={require(`images/${topic}.png`)}  style = {iconStyle} />
      </div>
   );
  }
}

export default TopicButton;
