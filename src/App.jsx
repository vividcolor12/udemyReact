/** @format */
import { CORE_CONCEPTS } from './data'; // .data에 있는 함수
import Header from './components/Header/Header' // default 함수를 호출하기 때문에 이렇게 함
import CoreConcept from './components/CoreConcept';

function App() {
    return (
        <div>
            <header>
                <h1>넌 뭐냐??</h1>
            </header>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept {...CORE_CONCEPTS[0]}/>
                        <CoreConcept {...CORE_CONCEPTS[1]}/>
                        <CoreConcept {...CORE_CONCEPTS[2]}/>
                        <CoreConcept {...CORE_CONCEPTS[3]}/>
                    </ul>
                </section>
                
            </main>
        </div>
    );
}

export default App;

/*
    비표준 자바 스크립트 문법인 JSX를 사용
    개발자가 자바스크립트 언어에 HTML 마크업 코드를 작성
    해당 코드는 브라우저에서 사용할 수 없고
    브라우저에 도달하기전에 리액트가 자바스크립트 언어로 바뀐다.

    함수의 제목이 대문자로 시작해야한다.
    함수에서 렌더링 가능한 값이 반환되어야 한다.(대체로 HTML 언어)

*/


