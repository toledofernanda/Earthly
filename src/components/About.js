import React, { Component } from 'react';
import BackButton from 'components/BackButton';
import {Helmet} from "react-helmet";

class About extends Component{

  //scroll window to top when opening new route
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(){
    let outerDiv = {
      maxWidth: '1200px',//About is exception
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'center',
      margin: '4% auto',
      backgroundColor: 'white',
      borderRadius: 30,
    }; //style for the outside div of main component

    let filterTopStyle = {
      flex: '1 0 100%',
      padding: '3% 4% 0 4%',
      display: 'grid',
      gridTemplateColumns: '20px 1fr',
      boxSizing: 'border-box'
    };//style for white box header

    let TitleStyle = {
      textAlign: 'center',
      flex: '1 0 100%',
      fontSize: 'calc(14px + 1vw)', // responsive title
    }; //"About"

    let TitleStyle2 = {
      textAlign: 'center',
      flex: '1 0 100%',
      marginBottom:'0',
      fontSize: 'calc(14px + 1vw)', // responsive title
    };

    let divStyle = {
      height: '100%',
      minHeight: '50vh',
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-around',
      padding: '1% 2%',
      boxSizing: 'border-box',
      textAlign: 'center'
    }; //style for the inside div of main component

    let memberImage = {
      marginTop: '-50px',
      borderRadius: '50%'
    }//round photos of members

    let desc = {
      textAlign: 'left'
    }//profile description

    let hr = {
      width: '20%',
      height: '3px',
      background: 'white',
      border:'none'

    }

    return(
      <div className="about" key="about" style = {outerDiv}>
        <Helmet>
          <script src="//a.mailmunch.co/app/v1/site.js" id="mailmunch-script" data-mailmunch-site-id="521506" async="async"></script>
        </Helmet>
          <div className = "titleStyle" style={filterTopStyle}>
            <BackButton component={'category'} />
            <h1 id="mobileTitle" style = {TitleStyle}>About</h1>
          </div>
          <div className="aboutEarthly">
            <p>
              Earthly is a world ranking app that makes it easy for children to get interested in and to learn about the world.
              We are a team of two designers and three developers. We wanted to make an web app that makes a learning experience exciting, fun and engaging.</p>
              <p>
              We interviewed school teachers and ran a usability test with kids to learn about how we should realize the visual representation of data so that it is appealing and easy to understand for kids. </p><p>
              All icons, images and pages are designed by Jenn and Marlowe. The app is developed with scalable React.js framework by Fernanda, Mana and Tomoko.</p>
              <p>
              Earthly is designed for tablet devices and computers. We recommend that you use a device with minimum of 800px screen width.</p><p>
              Feel free to let us know your feedback from the Contact page below.
            </p>
          </div>
          <div className="titleStyle">
            <h1 style = {TitleStyle}>Meet Team Earthly</h1>
          </div>
          <div className="meetMember" style={divStyle}>
            <div className = {['member', 'fernanda'].join(' ')}>
              <a href="https://www.linkedin.com/in/toledofernanda/"><img style = {memberImage} img src={require(`images/fernanda.jpg`)} alt="FernandaPic" title="https://www.linkedin.com/in/toledofernanda/"/></a>
              <h3>Fernanda</h3>
              <h4>Dev Lead</h4>
              <hr style = {hr} />
              <p style={desc}>Fernanda is Earthly’s Lead Developer. She has a Certificate of Internet and Web Technology from Langara College and is a certified Scrum Product Owner. She has 7 years experience with Customer Service as a supervisor and coordinator at tech companies and a Bachelor of Marketing and Advertising. Her hobbies are figure skating, biking, and watching TV series with her cat, Garfield.
              </p>
            </div>
            <div className = {['member', 'mana'].join(' ')}>
              <a href="https://www.linkedin.com/in/mana-koike"><img style = {memberImage} img src={require(`images/mana.jpg`) } alt="manaPic" title="https://www.linkedin.com/in/mana-koike"/></a>
              <h3>Mana</h3>
              <h4>Dev & QA</h4>
              <hr style = {hr} />
              <p style={desc}>Mana is Earthly’s Quality Assurance expert, and she also played a key role in development. Mana has a background in British and American studies. She has five years of customer service experience in Nagoya, Japan. In her spare time, she enjoys cooking Japanese food, playing the piano, shopping, and playing with dogs.
              </p>
            </div>
            <div className = {['member', 'tomo'].join(' ')}>
            <a href="https://www.linkedin.com/in/tomokookochi/"><img style = {memberImage} img src={require(`images/tomo.jpg`) } alt="tomokoPic" title="https://www.linkedin.com/in/tomokookochi/"/></a>
              <h3>Tomoko</h3>
              <h4>Dev & PM</h4>
              <hr style = {hr} />
              <p style={desc}>Tomoko is Earthly’s Developer and Project Manager. She is a certified Scrum Master and has 5 years experience as a program manager at Microsoft, 6 years of experience as a university instructor in addition to 15-year background as an English to Japanese translator and interpreter. During her free time, she enjoys star gazing, board-gaming, and geocaching with her two sons.
              </p>
            </div>
            <div className = {['member', 'jenn'].join(' ')}>
              <a href="https://www.linkedin.com/in/jennifer-louise-clements/"><img style = {memberImage} img src={require(`images/jenn.jpg`)}  alt="jennPic" title="https://www.linkedin.com/in/jennifer-louise-clements/"/></a>
              <h3>Jenn</h3>
              <h4>UX Lead</h4>
              <hr style = {hr} />
              <p style={desc}>Jenn is Earthly’s User Experience lead. She holds a Bachelor of Arts in Media, Information, and Technoculture from the University of Western Ontario in London, Canada. She also worked as a tree planter for 5 years in the Canadian provinces of Ontario, Saskatchewan, and Alberta. Jenn loves the outdoors; in her free time she enjoys camping, cycling, downhill skiing, and hiking.
              </p>
            </div>
            <div className = {['member', 'marlowe'].join(' ')}>
              <a href="https://www.linkedin.com/in/marlowe-vaughan"><img style = {memberImage} img src={require(`images/marlowe.jpg`)}  alt="marlowePic" title="https://www.linkedin.com/in/marlowe-vaughan"/></a>
              <h3>Marlowe</h3>
              <h4>UI Lead</h4>
              <hr style = {hr} />
              <p style={desc}>Marlowe is Earthly’s User Interface Designer. She has a background in English Literature, and a Bachelor of Arts from the University of British Columbia. She has worked as a lifeguard and swim instructor for 10 years, and enjoys discovering new ways to facilitate children’s learning. In her free time, Marlowe enjoys swimming, hiking, crossword puzzles, and playing computer games.
              </p>
            </div>
          </div>
          <div className="titleStyle">
            <h1 style = {TitleStyle2}>Disclaimer</h1>
          </div>
          <div className="disclaimer">
            <p>The reliability of data attributes to each data source. Due to limited space, Earthly does not contain every other languages and greeting, but that does not mean our team devalue any minority languages.</p>
          </div>
      </div>
    )
  }
}

export default About;
