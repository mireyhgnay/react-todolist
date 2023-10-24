## 📘 [Styled Components] 전역 스타일링 (Global Style)

<br>

- 애플리케이션 레벨 스타일을 지원하기 위해서 Styled Components는 `createGlobalStyle()`라는 함수를 제공하고 있습니다.
- 전역 스타일 컴포넌트로 전체 스타일(\*) 이나 body 태그에 주로 사용됩니다.
- 적용된 것을 확인해보니

<br>

```jsx
import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e9ecef;
  }
  `;
function App() {
  return (
    <>
      <GlobalStyle />
      <div>hi</div>
    </>
  );
}

export default App;
```

<br>

### 개발자 도구 확인해보면, head 태그 안에 스타일 태그로 설정되어 있다.

![global_style](https://github.com/mireyhgnay/react-todolist/assets/111990266/c1897cf0-f100-4938-9dc8-29178280b24c)
