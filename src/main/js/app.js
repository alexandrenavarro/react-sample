'use strict';

const React = require('react');
const ReactDOM = require('react-dom')

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {employees: [{
                                           firstName: 'Alexandre',
                                           lastName: 'Navarro'
                                         },
                                         {
                                          firstName: 'Michael',
                                          lastName: 'Schumacher'
                                         }], current:0};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
	}

	render() {
		return (<div>
		Hello World!!! {this.state.employees[this.state.current].firstName}
		<button onClick={this.handleClick}>Ok
		</button>
		</div>)
	}


    handleClick() {
		this.setState({employees: [{
                                           firstName: 'Alexandre',
                                           lastName: 'Navarro'
                                         },
                                         {
                                          firstName: 'Michael',
                                          lastName: 'Schumacher'
                                         }], current:(this.state.current + 1)%2 });
  }

}


ReactDOM.render(
	<App />,
	document.getElementById('react')
)