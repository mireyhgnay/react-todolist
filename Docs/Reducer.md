## 📘 [Context API] Reducer

<br>

## 리듀서 만들기

todoReducer 리듀서는 추후 useReducer에서 사용할 함수

state, action 을 가져와서 그 다음 상태를 리턴해주는 함수이다.

<br>

## 두개의 컨텍스트를 만들어준다.

하나는 state를 위한 컨텍스트, 두번째는 dispatch를 위한 컨텍스트

하나의 컨텍스트 안에 두개를 넣는 것도 가능한데 각각 만드는 것이 편하다.

<br>

```jsx
// 각각의 Context 생성
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
```

<br>

```jsx
<TodoStateContext.Provider value={state}>
  <TodoDispatchContext.Provider value={dispatch}>
    {children}
  </TodoDispatchContext.Provider>
</TodoStateContext.Provider>
```

<br>

nextId Context를 만드는 이유는 새로운 항목이 추가되면 id는 계속 신규로 생성되어야 하기 때문에

```jsx
const TodoNextIdContext = createContext();

<TodoNextIdContext.Provider value={nextId}></TodoNextIdContext.Provider>;
```
