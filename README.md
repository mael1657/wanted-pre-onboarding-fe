# :: 원티드 프리온보딩 프론트엔드 코스 사전과제

안녕하세요. 이주현입니다.

[개인 블로그](https://velog.io/@mael1657)
[개인 노션](https://mango-pull-bbe.notion.site/8b7681df66064e71b90dc52da64268e7)

userEmail : test@test.com
password : !234Qwer

---

## Assignment 1 - `Login`

- input의 onChange 입력에 useRef를 적용하였습니다.
- 로그인 완료시 local storage에 email과 password가 저장됩니다.
- 로그인 완료시 메인페이지로 이동합니다.
- 로그인하지 않고 메인페이지로 진입할 시 로그인 페이지로 이동되도록 설계하였습니다.

## Assignment2 - `GNB`

- position: fixed를 사용해 상단에 고정되는 GNB를 구현하였습니다.
- 브라우저가 500px 이하로 줄어들 경우 검색바가 사라지도록 구현했습니다.

## Assignment3 - `Validation`

- 유효성 확인을 위한 함수를 추가했습니다.
- email과 password가 틀렸을 경우 각각 alert 창이 뜨도록 구현했습니다.
- email과 password가 형식에 맞지 않을 경우 테두리의 색상이 변하도록 구현했습니다.
- 형식에 맞을 경우 버튼의 색상이 변경되고 클릭할 수 있도록 구현했습니다.
- 형식에 맞지 않을 경우 버튼이 disabled 되도록 설계했습니다.

## Assignment4 - `Routing`

- 로그인이 완료되면 메인페이지로 이동합니다.
- 로그인된 상태에서 로그인 화면으로 이동하려 할 시 접근하지 못하도록 설계했습니다.
- 로그아웃될 경우 로그인페이지로 이동하도록 구현했습니다.

## Assignment5 - `Feeds`

- public 폴더에 data 폴더를 만들고 data.json 파일로 db를 구성했습니다.
- axios와 react-query를 이용해 api 요청을 구현했습니다.
- 커스텀 훅으로 react-query를 구성했고 api instance를 분리했습니다.
- 댓글 input에 값이 없을 경우 버튼이 disabled 되도록 설계했습니다.
- input에 값이 있을 경우 엔터 혹은 클릭을 통해 댓글을 게시할 수 있습니다.
- input에 값이 있을 경우 버튼이 활성화되고 색상이 바뀌도록 구현했습니다.
- 이미지의 경우 크롭하지 않고 보이도록 설계했습니다.
  - 크롭해야할 경우 object-fit 속성을 사용하여 이미지가 찌그러지지 않도록 할 수 있습니다.
- 이미지가 로딩되었을 경우 Feed 컴포넌트가 보이도록 구현했습니다.
