// 引入React库识别组件（大写字母开头的都是组件，如App）
import React from 'react';
// 引入ReactDOM库将组件挂载到index.html的root标签下
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);
