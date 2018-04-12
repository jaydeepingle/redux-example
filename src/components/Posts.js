import React, { Component } from 'react'

class Posts extends Component {
	componentWillMount() {
		console.log(123);
		// We can use axios here instead of fetch

		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res => res.json())
			.then(data => console.log(data));
	}

	render () {

		return (
			<div>
				<h1> Posts </h1>
			</div>
		)
	}
}


export default Posts