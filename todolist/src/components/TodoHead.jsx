import React from "react";
import styled from "styled-components";

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
  return (
    <TodoHeadBlock>
      <h1 className="header__date">2023년 10월 23일</h1>
      <div className="header__day">월요일</div>
      <div className="header__list-num">할 일 2개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
