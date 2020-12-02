import React from 'react';

export default class TodoItem extends React.Component {

	constructor(props) {
		super(props);
		this.handleItemClick = this.handleItemClick.bind(this);
	}

	render() {
		const { content } = this.props;
		return (
			/*子组件通过props接收父组件的参数*/
			/*子组件通过调用父组件传过来的方法进行通信*/
			<div onClick={this.handleItemClick}>{content}</div>
		);
	}

	handleItemClick = () => {
		const { handleItemClick, index } = this.props;
		return handleItemClick(index);
		// return props.handleItemClick(props.index);
	};

}

