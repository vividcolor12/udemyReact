import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

const reactDescriptions = ['Fundamental','Crucial','Core'];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max +1));
}

export default function Header() {
    const description = reactDescriptions[genRandomInt(2)];

    return (
        <header>
            {/*<img src="src/assets/react-core-concepts.png" alt="Stylized atom" />*/}
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {description}
                Fundamental React concepts you will need for almost any app you are going to build!</p>
        </header>
    );
    /*
        다중선 JSX 코드를 반환 시
        자바 스크립트의 처음과 끝을 괄호로 묶어 표시해야한다.
    */
}