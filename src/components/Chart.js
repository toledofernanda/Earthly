import React, { Component } from 'react';
import { db } from './Db';
import Flag from 'components/Flag';
import EntityName from 'components/EntityName';
import RankingBar from 'components/RankingBar';
import Source from 'components/Source';
import Label from 'components/Label';

class Chart extends Component{
  render(){

    /* CSS */
    let chart = {
      padding: '0 4% 15px 4%',
      borderRadius: '30px',
      boxSizing: 'border-box',
      height: 'fit-content',
      background: 'white',
    }

    let labelSourceDiv = {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-between',
      marginTop: '20px'
    }

    let rankingEntity = {
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'flex-start',
      alignItems: 'center',
      boxSizing: 'border-box',
      height: '7w',
      maxHeight: '90px',
      width: '100%',
      position: 'relative',
    }

    let orderStyle = {
      fontSize: 'calc(0.5em + .5vw)',
      flex: '1 1 2%',
      paddingBottom: '15px',
      paddingRight: '10px',
      textAlign: 'right',
      minWidth: '23px'
    }

    let entityFlagName = {
      flex: '1 1 10%',
      minWidth: '50px',
      padding: '7px 4% 7px 0px',
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'center'
    }

    let borderDiv = {
      borderRight: '2px solid lightgrey'
    }

    /* JS */
    let category = this.props.category; //props passed down
    let topic = this.props.topic; //props passed down
    let subCat = db[category][topic];
    let num = []; //an array to hold the percentage value for chart bars
    let sourceName = subCat[0].source_name; //source name
    let sourceUrl = subCat[0].source_url; //source url
    let label = subCat[0].label; //label

    // calculates percentage value for entities ranked within 10 ---------------------------
    //smallest inverted rankings
    if ( topic === 'smallest_countries' | topic === 'smallest_population'){
      //parseFloat needed as quantity in Db has commas
      let base = parseFloat(subCat[9].quantity.replace(/,/g, '')); //quantity of No.10
      num[9] = 100;
      for(let i= 8; i>=0; i--){
        let percent = "";
        percent = parseFloat(subCat[i].quantity.replace(/,/g, ''))/base;
        num[i] = percent.toFixed(2)*100;
      }//these topics are inverted chart
    } else if ( topic === 'most_soccer_world_cup_champion' | topic === 'basketball_world_cup_gold_medals'){
      for (let i=0; i<subCat.length; i++){
        num[i] = subCat[i].quantity;
        console.log(num[i]);
      }
    }//for these topics, we need to show exact number of icons
    else {
    //get quantity of each entity
      num.push(100); //No.1 is always 100%

      //parseFloat needed as quantity in Db has commas
      let base = parseFloat(subCat[0].quantity.replace(/,/g, '')); //quantity of No.1
      for(let i=1; i<subCat.length; i++){
        let percent = "";
        percent = parseFloat(subCat[i].quantity.replace(/,/g, ''))/base;
        percent = percent.toFixed(2)*100;

        num.push(percent); //calculated percent value is pushed to the array
      }
    }

    // builds chart countries and ranking bars ------------------------------------------------------
    let entityName = "";
    let entities = [];
    let order = 1;
    let specificOrder; //for cases where there are ties on ranking
    let tooltipUp = false;

    //ranking with specific ranking order (ties)
    if(topic === 'basketball_world_cup_gold_medals') {
      specificOrder = [1,2,3,3];
      let index = 0;

      // get all entities that appear on that category/topic
      for (let entity of subCat) {
        entityName = entity["entity_name"]; //get entityName to get info

        // if are the last two countries on ranking, tooltip should show upwards
        let centeredMobileStyle;

        if(entityName === 'United States') {
          centeredMobileStyle = '1';
        } else if(entityName === 'Brazil') {
          centeredMobileStyle = '2';
        } else if(entityName === 'Argentina') {
          tooltipUp = true;
          centeredMobileStyle = '3';
        } else { //Spain
          tooltipUp = true;
          centeredMobileStyle = '4';
        }

        entities.push(
          <div className="ranking-entity" key={entityName} style={rankingEntity}>
            <div className="order" style={orderStyle}>
              <span>{specificOrder[index]}</span>
            </div>
            <div className="entity-flag-name" style={entityFlagName}>
              <Flag entityName={entityName} category={"general"} topic={"entity_info"} tooltipUp={tooltipUp} centeredMobileStyle={centeredMobileStyle}/>
              <EntityName entityName={entityName} parent={'ranking-entity'} />
            </div>
            <RankingBar barLength={num[index]} topic={topic} category={category} entityName={entityName} />
          </div>
        )

        index++;
      }
    } else //tidal small ranking with specifc rule for tooltip on mobile (centered)
    if(topic === 'wave_tidal_power_generation') {
      let index = 0;

      // get all entities that appear on that category/topic
      for (let entity of subCat) {
        entityName = entity["entity_name"]; //get entityName to get info

        // if are the last two countries on ranking, tooltip should show upwards
        let centeredMobileStyle;

        if(entityName === 'South Korea') {
          centeredMobileStyle = '1';
        } else if(entityName === 'France') {
          centeredMobileStyle = '2';
        } else if(entityName === 'Canada') {
          centeredMobileStyle = '3';
        } else if(entityName === 'China') {
          tooltipUp = true;
          centeredMobileStyle = '4';
        } else { //United Kingdom
          tooltipUp = true;
          centeredMobileStyle = '5';
        }

        entities.push(
          <div className="ranking-entity" key={entityName} style={rankingEntity}>
            <div className="order" style={orderStyle}>
              <span>{order}</span>
            </div>
            <div className="entity-flag-name" style={entityFlagName}>
              <Flag entityName={entityName} category={"general"} topic={"entity_info"} tooltipUp={tooltipUp} centeredMobileStyle={centeredMobileStyle}/>
              <EntityName entityName={entityName} parent={'ranking-entity'} />
            </div>
            <RankingBar barLength={num[index]} topic={topic} category={category} entityName={entityName} />
          </div>
        )

        order++;
        index++;
      }
    } else if(topic === 'most_soccer_world_cup_champion') { //ranking with specific ranking order (ties)
      specificOrder = [1,2,2,3,3,3,4,4];
      let index = 0;

      // get all entities that appear on that category/topic
      for (let entity of subCat) {
        entityName = entity["entity_name"]; //get entityName to get info

        // if are the last two countries on ranking, tooltip should show upwards
        if(specificOrder[index] === 4 || entityName === 'France') {
          tooltipUp = true;
        }

        entities.push(
          <div className="ranking-entity" key={entityName} style={rankingEntity}>
            <div className="order" style={orderStyle}>
              <span>{specificOrder[index]}</span>
            </div>
            <div className="entity-flag-name" style={entityFlagName}>
              <Flag entityName={entityName} category={"general"} topic={"entity_info"} tooltipUp={tooltipUp} />
              <EntityName entityName={entityName} parent={'ranking-entity'} />
            </div>
            <RankingBar barLength={num[index]} topic={topic} category={category} entityName={entityName} />
          </div>
        )

        index++;
      }
    } else if(topic === 'highest_temperature') { //ranking with specific ranking order (ties)
      specificOrder = [1,2,3,3,3,4,5,6,7,8];
      let index = 0;

      // get all entities that appear on that category/topic
      for (let entity of subCat) {
        entityName = entity["entity_name"]; //get entityName to get info

        // if are the last two countries on ranking, tooltip should show upwards
        if(specificOrder[index] === 6 || specificOrder[index] === 7 || specificOrder[index] === 8) {
          tooltipUp = true;
        }

        entities.push(
          <div className="ranking-entity" key={entityName} style={rankingEntity}>
            <div className="order" style={orderStyle}>
              <span>{specificOrder[index]}</span>
            </div>
            <div className="entity-flag-name" style={entityFlagName}>
              <Flag entityName={entityName} category={"general"} topic={"entity_info"} tooltipUp={tooltipUp} />
              <EntityName entityName={entityName} parent={'ranking-entity'} />
            </div>
            <RankingBar barLength={num[index]} topic={topic} category={category} entityName={entityName} />
          </div>
        )

        index++;
      }
    } else if(topic === 'most_earthquakes') { //ranking with specific ranking order (ties)
      specificOrder = [1,2,3,4,5,6,7,8,9,9];
      let index = 0;

      // get all entities that appear on that category/topic
      for (let entity of subCat) {
        entityName = entity["entity_name"]; //get entityName to get info

        // if are the last two countries on ranking, tooltip should show upwards
        if(specificOrder[index] === 8 || specificOrder[index] === 9) {
          tooltipUp = true;
        }

        entities.push(
          <div className="ranking-entity" key={entityName} style={rankingEntity}>
            <div className="order" style={orderStyle}>
              <span>{specificOrder[index]}</span>
            </div>
            <div className="entity-flag-name" style={entityFlagName}>
              <Flag entityName={entityName} category={"general"} topic={"entity_info"} tooltipUp={tooltipUp} />
              <EntityName entityName={entityName} parent={'ranking-entity'} />
            </div>
            <RankingBar barLength={num[index]} topic={topic} category={category} entityName={entityName} />
          </div>
        )

        index++;
      }
    } else { //rankings with normal 1-10 order

      let index = 0;
      // get all entities that appear on that category/topic
      for (let entity of subCat) {
        entityName = entity["entity_name"]; //get entityName to get info

        // if are the last two countries on ranking, tooltip should show upwards
        if(index === 7 || index === 8 || index === 9) { //index starts at 0 and want to target no. 9 and 10
          tooltipUp = true;
        }

        entities.push(
          <div className="ranking-entity" key={entityName} style={rankingEntity}>
            <div className="order" style={orderStyle}>
              <span>{order}</span>
            </div>
            <div className="entity-flag-name" style={entityFlagName}>
              <Flag entityName={entityName} category={"general"} topic={"entity_info"} tooltipUp={tooltipUp} />
              <EntityName entityName={entityName} parent={'ranking-entity'} />
            </div>
            <div style={borderDiv}></div>

            <RankingBar barLength={num[index]} topic={topic} category={category} entityName={entityName} />
          </div>
        )

        order++;
        index++;
      }
    }

    return (
        <div className="chart" key="chart" style={chart}>
          {entities}

          <div className="label-source" style={labelSourceDiv} >
            <Label label={label} />
            <Source sourceName={sourceName} sourceUrl={sourceUrl} />
          </div>
      </div>
    )
  }
}

export default Chart;
