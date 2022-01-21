import { useEffect, useState } from 'react';
import testScript from './question.json'

const Main = ({setPage, userValue, setUserValue}) => {
    let Qnum = 11;
    let timer;
    let userAnswer = -1;
    const selectedStyle = {
        background:"lightgray",
        cursor:"default"
    }

    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState(-1);
    
    const onClickAnswer = (e) => {
        
        if(e.target.className === 'Answer1'){
            userAnswer = 0;
            setSelected(0);
        }
        else {
            userAnswer = 1;
            setSelected(1);
        }

        const temp = [...userValue];
        temp[testScript.test[index].type] += testScript.test[index]["score"][userAnswer];
        /*
        console.log(userAnswer);
        console.log(testScript.test[index]["score"][userAnswer]);
        console.log(temp);
        */

        setUserValue(temp);
        timer = setTimeout(()=>{
            // 질문 넘기기
            (index < Qnum ? setIndex(index + 1) : setPage(2))
            // 선택된 값 변경
            setSelected(-1);
        }, 500); // 0.5초 뒤에 함수 실행
    }

    useEffect(() => {
        return clearTimeout(timer);
    });


    return (
        <div className="Background">
            <div className="Main">
                여긴 메인<br/>
                <div className="Question">
                    {testScript.test[index].question}
                </div>
                <div className='Answer1' onClick={userAnswer === -1 ? onClickAnswer : null} style={ selected === 0 ? selectedStyle : null }>
                    {testScript.test[index].answer[0]}
                </div>
                <div className='Answer2' onClick={userAnswer === -1 ? onClickAnswer : null} style={ selected === 1 ? selectedStyle : null }>
                    {testScript.test[index].answer[1]}
                </div>
                <div style={{textAlign:"center",fontWeight:"bold"}}>{index + 1}/{Qnum + 1}<br/></div>
            </div>
        </div>
    )
}

export default Main;