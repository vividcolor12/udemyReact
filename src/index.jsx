import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />); // JSX 코드 사용
/*
    함수로 전환 되는게 아닌 값을 사용해서 호출된 다른 메소드의 인수로 사용

    index.jsx 파일은 HTML에서 가장 먼저 로딩되는 파일로 리액트 앱의 초입구

    entryPoint - index.html에서 <div id="root"></div>인 id값을 가져와 entrypoint에 저장
    해당 값이 createRoot 메소드에 넘겨진다.

    리액트 프로젝트의 경로로 그 요소가 사용되면 리액트 컴포넌트를 삽입

    컴포넌트에 있는 모든 내용을 <div id="root"></div> 삽입 후 랜더링 한다.
*/
