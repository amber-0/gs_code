import React from 'react';

// css in js（キャメル記法、javascriptの書き方）
const style = {
  backgroundColor: '#c6ffe2',
  minHeight: '200px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px'
}

export const ImcompleteTodos = (props) => {
  const{ todos, onClickComplete, onClickDelete } = props;
  return(
    <div style={style} >
      <p className="title">重要でない項目</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
