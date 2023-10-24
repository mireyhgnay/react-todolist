## 📘 [Styled Components] Component Selector

<br>

https://styled-components.com/docs/advanced#referring-to-other-components

<br>

```jsx
import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

function TodoItem({ id, done, text }) {
  return (
    <TodoItemBlock>
      <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
```

<br>

TodoItemBlock 에서 사용한 hover 효과에 적용된 스타일 방식이다.

<br>

```jsx
&:hover {
    ${Remove} {
      display: initial;
    }
```

TodoItemBlock 에 마우스 커서를 올리면 Remove 컴포넌트에 추가할 스타일을 설정한다.

<br>

조건은 Remove 컴포넌트의 스타일이 먼저 위에 존재해야 적용된다!
