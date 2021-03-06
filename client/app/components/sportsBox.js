import React from 'react';
import {Link} from 'react-router';

export default class SportsBox extends React.Component {
	constructor(props) {
	super(props);
	this.state = props.data;
	}

	render() {
		return (
			<ul>
			<div className="col-md-8">
				<div className= "panel panel-default">
                  <div className="panel-body">
          <div className="row">
            <h1><p className="text-center">{this.props.name}</p></h1>
            <hr></hr>
          </div>
          <div className="row">
            <div className="col-md-4">
              <img src={this.state.img} width="100%"></img>
            </div>
            <div className="col-md-2">
            <br></br>
            <Link to= {"/browse/"}>
                <button type="button" className="btn navbar-btn btn-default">
					<h8>See Whos Playing {this.state.name}!</h8>
				</button>
        </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
      </ul>
		);
	}
}
