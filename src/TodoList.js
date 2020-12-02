import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			list: [],
			inputValue: ''
		};

		//优化
		this.handleInputValueChange = this.handleInputValueChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	render() {
		return (
			<Fragment>
				<div>
					{/*双向绑定*/}
					<input value={this.state.inputValue} onChange={this.handleInputValueChange} />
					{/*bind(this)是将click函数绑定组件，使得在函数内部的this指向组件，就可以根据this获取state属性*/}
					<button onClick={this.handleBtnClick}>add</button>
				</div>
				<ul>{this.getTodoItem()}</ul>
			</Fragment>
		);
	}

	getTodoItem = () => {
		/*父组件通过属性的形式向自组件传递参数*/
		return this.state.list.map((item, index) =>
			<TodoItem
				key={index} content={item} index={index}
				handleItemClick={this.deleteItem}
			/>);
	};

	deleteItem = (index) => {
		// [...xx] 复制副本
		const list = [...this.state.list];
		list.splice(index, 1);
		this.setState({
			// list: list -> es6键值一样可以简化
			list
		});
	};

	handleInputValueChange(e) {
		this.setState({
			inputValue: e.target.value
		});
	}

	handleBtnClick = () => {
		this.setState({
			list: [...this.state.list, this.state.inputValue],
			inputValue: ''
		});
	};

}

export default TodoList;
