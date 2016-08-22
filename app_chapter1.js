import React, {Component} from 'react';
import {render} from 'react-dom';

class Hello extends Component {
	render() {
		var price = "20";
		return <h1>vinoth {price}</h1>;
	}
}

class GroceryList extends Component {
	render () {
		return <ul>
			<GroceryItem name="eggs" price="3"/>
			<GroceryItem name="milk" price="2.45"/>
		</ul>
	}
}

class GroceryItem extends Component{
	render() {
		return <li>
			{this.props.name}:{this.props.price}
		</li>
	}
}

render(<GroceryList />, document.getElementById('root'));