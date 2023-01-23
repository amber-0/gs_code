import React from 'react';

// css in js（キャメル記法、javascriptの書き方）
const style = {
  backgroundColor: '#ffffe0',
  minHeight: '200px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px'
}

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return(
    <div style={style}>
      <p className="title">重要な項目</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
