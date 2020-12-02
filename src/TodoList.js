import React from 'react';

class TodoList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			list: [
				'开会',
				'提交材料'
			],
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
						this.state.list.map((item, index) => <li key={index}>{item}</li>)
					}
				</ul>
			</div>
		);
	}

	handleInputValueChange(e) {
		console.log(e.target.value);
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
