// reactでコードを書くためのおまじない
import React, { useState } from "react";
import "./styles.css";
// InputTodoをインポート
import {InputTodo} from './components/InputTodo';
// IncompleteTodosをインポート
import {ImcompleteTodos} from './components/IncompleteTodos';
// CompleteTodosをインポート
import {CompleteTodos} from './components/CompleteTodos';

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  // const onPressEnter = (e) => {
  //   if (e.keycode === 13) {
  //     console.log('エンター');
  //     if (todoText === "") return;
  //     const newTodos = [...incompleteTodos, todoText];
  //     setIncompleteTodos(newTodos);
  //     setTodoText("");
  //   }
  // };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newInCompleteTodos = [...incompleteTodos];
    newInCompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newInCompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newInCompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newInCompleteTodos);
  };

  return (
    <>
      {/* propsとしてそれぞれの関数をInputTodoに渡してる */}
      <InputTodo 
        todoText={todoText} 
        onChange={onChangeTodoText} 
        onClick={onClickAdd} 
        // onPressEnter={onPressEnter}
      />

      {/* InputTodoの入力数に応じて表示する */}
      {incompleteTodos.length >= 300 && (
        <p 
          style={{color:'red',fontWeight:'bold', textAlign:'center'}}>
          書き出せるのは300まで！
        </p>
      )}

      {/* propsとしてそれぞれの関数をIncompleteTodosに渡してる */}
      <ImcompleteTodos 
        todos={incompleteTodos} 
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos 
      todos={completeTodos}
      onClickBack={onClickBack}
      />
    </>
  );
};
