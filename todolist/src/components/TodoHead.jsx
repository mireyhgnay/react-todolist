import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";

const TodoHeadBlock = styled.header`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;

  .header__date {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }

  .header__day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }

  .header__list-num {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;
function TodoHead() {
  const todos = useTodoState();
  const undoneTodos = todos.filter((todo) => !todo.done); // !done 인 항목만 골라요오

  const today = new Date();
  // toLocaleString() 메소드는 날짜를 언어별로 구분하여 나타내는 문자열을 반환한다.
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <TodoHeadBlock>
      <h1 className="header__date">{dateString}</h1>
      <div className="header__day">{dayName}</div>
      <div className="header__list-num">할 일 {undoneTodos.length}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
