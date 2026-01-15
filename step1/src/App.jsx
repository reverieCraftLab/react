import './App.css';
import { useState } from 'react';

// 1. State를 사용하여 상태 관리
export default function MyApp() {
    return (
        <div>
            <h1>Counters that update separately</h1>
            <MyButton />
            <MyButton />
        </div>
    );
}

function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
};


// 2. Hook을 사용하여 컴포넌트간 데이터 공유
/*
export default function MyApp() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counters that update separately</h1>
            <MyButton count={count} handleClick={handleClick} />
            <MyButton count={count} handleClick={handleClick} />
        </div>
    );
};

function MyButton({ count, handleClick }) {
    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}
*/