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
  }
  render(){
    let iconStyle = {
      width:100,
      height:100
    };
    let topic = this.props.topic; //props passed down
    return (
      <div>
        <div className = "topic-button"  onClick={this.select} topic={topic}><img src={require(`images/${topic}.png`)}  style = {iconStyle} /></div>
        {this.state.isSelected ?
          "topic is selected" : null
        // <Result topic={topic} /> :
        // null
      }
    </div>
   );
}
}

export default TopicButton;
