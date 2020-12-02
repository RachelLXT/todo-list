import React from 'react';

class TodoList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			list: [],
			inputValue: ''
		};
	}

	render() {
		return (
			<div>
				<div>
					{/*双向绑定*/}
					<input value={this.state.inputValue} onChange={this.handleInputValueChange.bind(this)} />
					{/*bind(this)是将click函数绑定组件，使得在函数内部的this指向组件，就可以根据this获取state属性*/}
					<button onClick={this.handleBtnClick.bind(this)}>add</button>
				</div>
				<ul>
					{
						this.state.list.map((item, index) =>
							<li
								key={index}
								onClick={this.handleItemClick.bind(this, index)}
							>{item}</li>)
					}
				</ul>
			</div>
		);
	}

	handleItemClick(index) {
		// [...xx] 复制副本
		const list = [...this.state.list];
		list.splice(index, 1);
		this.setState({
			// list: list -> es6键值一样可以简化
			list
		});

	}

	handleInputValueChange(e) {
		this.setState({
			inputValue: e.target.value
		});
	}

	handleBtnClick() {
		this.setState({
			list: [...this.state.list, this.state.inputValue],
			inputValue: ''
		});
	}

}

export default TodoList;
