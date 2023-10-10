## 🚨 [ESLint] Parsing error: Unexpected token

<br>

### Reference

https://r4bb1t.tistory.com/68

<br>

### 에러가 뜨는 이유는?

ESLint의 기본 parser는 Espree로,

기본적으로 ECMA 버전이 5로 설정되어있기 때문에 그 이후 문법이나 Typescript 문법은 parse하면서 에러를 뿜을 수 있다고 합니다.

위 코드를 작성해 parser를 babel parser로 설정해주면 최신 ECMA 버전을 사용할 수 있습니다.

일반적으로는 이것만 추가하면 해결이 됩니다.

<br>

### 해결 방법

.eslintrc.js 파일에 parser 추가하기

```
"parser": "babel-parser"
```
