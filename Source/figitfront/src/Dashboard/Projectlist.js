import React from 'react';
import './Projectlist.css';
import Singleproject from './Singleproject';

class Projectlist extends React.Component {

	render(){
	var rows =[];
	var projectlists = [
		['project','ProjectName1'],
		['project','ProjectName2'],
		['project','ProjectName3']
	];
	
	for (var j = 0; j<projectlists.length; j++){
			rows.push(<Singleproject project={projectlists[j]}/>);
	}

	return( <div>
				{rows}
					</div>);
	}
}
export default Projectlist;
