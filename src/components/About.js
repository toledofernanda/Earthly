import React, { Component } from 'react';
import BackButton from 'components/BackButton';

class About extends Component{
  render(){
    let outerDiv = {
      maxWidth: '1200px',
      margin:'4% auto',
      display: 'flex',
      flexFlow: 'column wrap',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderRadius: 30,
    }; //style for the outside div of main component

    let filterTopStyle = {
      padding: '3% 4%',
      display: 'grid',
      gridTemplateColumns: '20px 1fr'
    };

    let TitleStyle = {
      gridColumn: '1 / 3',
      gridRow: '1 / 2',
      textAlign: 'center',
      fontSize: '14pt',
      flex: '0 0 100%',
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
    };  //style for the inside div of main component

    let memberImage = {
      marginTop: '-50px',
      borderRadius: '50%'
    }

    let desc = {
      textAlign: 'left'
    }

    return(
      <div className="about" key="about" style = {outerDiv}>
          <div className = "titleStyle" style={filterTopStyle}>
            <BackButton component={'category'} />
            <h1 style = {TitleStyle}>About</h1>
          </div>
          <div className="aboutEarthly">
            <p>
              Earthly is a world ranking app that makes it easy for children to get interested in and to learn about the world.
              We are a team of two designers and three developers. We wanted to make an web app that makes a learning experience exciting, fun and engaging.</p><p>
              We interviewed school teachers and ran a usability test with kids to learn about how we should realize the visual representation of data so that it is appealing and easy to understand for kids. </p><p>
              All icons, images and pages are designed by Jenn and Marlowe. The app is developed with scalable React.js framework by Fernanda, Mana and Tomoko.</p><p>
              If you have any feedback, please feel free to let us know!
            </p>
          </div>
          <div className="meetMemberTitle">
            <h1 style = {TitleStyle}>Meet Team Earthly</h1>
          </div>
          <div className="meetMember" style={divStyle}>
            <div className = {['member', 'fernanda'].join(' ')}>
              <img style = {memberImage} img src={require(`images/fernanda.jpg`)} alt="FernandaPic"/>
              <h3>Fernanda</h3>
              <h4>Dev Lead</h4>
              <p style={desc}>Fernanda is Earthly’s Lead Developer. She has a Certificate of Internet and Web Technology from Langara College and is a certified Scrum Product Owner. She has 7 years experience with Customer Service as a supervisor and coordinator at tech companies and a Bachelor of Marketing and Advertising. Her hobbies are figure skating, biking, and watching TV series with her cat, Garfield.
              </p>
            </div>
            <div className = {['member', 'mana'].join(' ')}>
              <img style = {memberImage} img src={require(`images/mana.jpg`) } alt="manaPic"/>
              <h3>Mana</h3>
              <h4>Dev & QA</h4>
              <p style={desc}>Mana is Earthly’s Quality Assurance expert, and she also played a key role in development. Mana has a background in British and American studies. In her spare time, she enjoys cooking Japanese food, playing the piano, shopping, and playing with dogs.
              </p>
            </div>
            <div className = {['member', 'tomo'].join(' ')}>
              <img style = {memberImage} img src={require(`images/tomo.jpg`) } alt="tomokoPic"/>
              <h3>Tomoko</h3>
              <h4>Dev & PM</h4>
              <p style={desc}>Tomoko is Earthly’s Developer and Project Manager. She is a certified Scrum Master and has 5 years experience as a program manager at Microsoft, 6 years of experience as a university instructor in addition to 15-year background as an English to Japanese translator and interpreter. During her free time, she enjoys star gazing, board-gaming, and geocaching with her two sons.
              </p>
            </div>
            <div className = {['member', 'jenn'].join(' ')}>
              <img style = {memberImage} img src={require(`images/jenn.jpg`)}  alt="jennPic" />
              <h3>Jenn</h3>
              <h4>UX Lead</h4>
              <p style={desc}>Jenn is Earthly’s User Experience lead. She holds a Bachelor of Media Information and Technoculture from the University of Western Ontario in London, Canada. She also worked as a tree planter for 5 years in the Canadian provinces of Ontario, Saskatchewan, and Alberta. Jenn loves the outdoors; in her free time she enjoys camping, cycling, downhill skiing, and hiking.
              </p>
            </div>
            <div className = {['member', 'marlowe'].join(' ')}>
              <img style = {memberImage} img src={require(`images/marlowe.jpg`)}  alt="marlowePic"/>
              <h3>Marlowe</h3>
              <h4>UI Lead</h4>
              <p style={desc}>Marlowe is Earthly’s User Interface Designer. She has a background in English Literature, and a Bachelor of Arts from the University of British Columbia. She has worked as a lifeguard and swim instructor for 10 years, and enjoys discovering new ways to facilitate children’s learning. In her free time, Marlowe enjoys swimming, hiking, crossword puzzles, and playing computer games.
              </p>
            </div>
          </div>
          <div className="disclaimerTitle">
            <h1 style = {TitleStyle}>Disclaimer</h1>
          </div>
          <div className="disclaimer">
            <p>The reliability of data attributes to each data source. Due to limited space, Earthly does not contain every other languages and greeting, but that does not mean our team devalue any minority languages.</p>
          </div>
      </div>
    )
  }
}

export default About;
