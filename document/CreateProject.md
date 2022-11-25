# 프로젝트 생성

* Node Express 설치
  * npm install express-generator -g
* Node Express 프로젝트 생성
  * express --view=pug backend
  * 'backend' : 프로젝트 이름
* Node Express 폴더 이동
  * cd backend
* Node Express package.json 생성
  * npm init
* Node Express 서버 실행
  * npm start

## 만약 "Error: Cannot find module 'http-errors'" 에러 시

> npm install

## 최초 Dependency

* cookie-parser
  * 쿠키 헤더를 구문 분석하고 req.cookies를 쿠키 이름으로 키가 지정된 개체로 채웁니다.
  * 선택적으로 다른 미들웨어에서 사용할 수 있도록 req.secret을 할당하는 비밀 문자열을 전달하여 서명된 쿠키 지원을 활성화할 수 있습니다.
* debug
  * Node.js 코어의 디버깅 기술을 모델로 한 작은 JavaScript 디버깅 유틸리티입니다.
  * Node.js 및 웹 브라우저에서 작동합니다.
* express
  * Node.js를 위한 빠르고 독선적이지 않은 미니멀리스트 웹 프레임워크입니다.
* http-errors
  * Express, Koa, Connect 등에 대한 HTTP 오류를 쉽게 생성합니다.
* jade
  * "Pug"로 이름이 변경 되었습니다.
  * "Pug"는 Haml의 영향을 크게 받은 고성능 템플릿 엔진으로 Node.js 및 브라우저용 JavaScript로 구현되었습니다.
* morgan
  * HTTP request logger middleware for node.js

### 참고

---

* Haml(HTML abstraction Markdup Language)
  * 인라인 코드를 사용하지 않고 모든 웹 문서의 HTML을 명확하고 간단하게 설명하는 데 사용되는 마크업 언어입니다.
