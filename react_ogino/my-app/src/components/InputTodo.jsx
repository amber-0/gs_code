import React from 'react';

// css in js（キャメル記法、javascriptの書き方）
const style = {
  backgroundColor: '#c1ffff',
  width: '600px',
  height: '30px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px'
}

export const InputTodo = (props) => {
  const { todoText, onChange, onClick} = props;
  return(
    <div style={style}>
      <input
        placeholder="君の思いを書いてくれ"
        value={todoText}
        onChange={onChange}
      />
      <button 
        onClick={onClick} 
        // onKeyDown={(e) => props.onPressEnter(e)}
      >
        Enterで追加
      </button>
    </div>
  );
};
