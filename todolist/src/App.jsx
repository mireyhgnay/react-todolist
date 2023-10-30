import React from "react";
import { createGlobalStyle } from "styled-components";

import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { TodoProvider } from "./TodoContext";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e9ecef;
  }
`;

function App() {
  return (
    // Context를 사용하기 위해서 TodoProvider 로 감싸줘야한다.
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
