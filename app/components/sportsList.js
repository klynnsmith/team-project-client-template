import React from 'react';
import SportsBox from './sportsBox';
import {getSportData} from '../server';

export default class SportsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sports: []
    };
}

  refresh() {
    getSportData(1, (sportData) => {
         this.setState(sportData);
    });
}

  componentDidMount() {
    this.refresh();
  }

	render() {
		return (
      <div className="col-md-10">
<<<<<<< HEAD
=======
      <h1>SportsList</h1>
>>>>>>> e9666cd888da539d6e648a677f8d17a8f72593a5
        {this.state.sports.map((sport, i) => {
              return(
               <SportsBox key={i} img={sport.img} name={sport.name} data={sport}/>
              );
           })
        }
       </div>
    )
	}
}
