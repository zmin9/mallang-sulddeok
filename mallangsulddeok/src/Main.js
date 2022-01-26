import { useEffect, useState } from 'react';
import testScript from './question.json';

import Image_line from './images/background_line.png';


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
        if(e.target.className === 'A1'){
            userAnswer = 0;
            setSelected(0);
        }
        else {
            userAnswer = 1;
            setSelected(1);
        }

        const temp = [...userValue];
        temp[testScript.test[index].type] += testScript.test[index]["score"][userAnswer];
        setUserValue(temp);

        timer = setTimeout(()=>{
            // 질문 넘기기
            (index < Qnum ? setIndex(index + 1) : setPage(2))
            // 선택된 값 변경
            setSelected(-1);
        }, 500); // 0.5초 뒤에 함수 실행
    }

    useEffect(() => {
        return () => clearTimeout(timer);
    },[]);

    const printHyphen=(length)=>{
        let s="";
        for(let i = 0; i < 22 - length; i++)
        {
            s=s+"-"
        }
        return s;
    }


    return (
        <div className="Background">
            <div className="Main">
                <p style={{fontSize:'30px', fontWeight:'bold'}}>
                    <br/>
                    「Mallang Bar」
                </p>
                <div className="Question">
                    {testScript.test[index].question.map((sentence, i)=>{
                        // 줄바꿈 때문에 이렇게 해둠...
                        return <span key={i}>{sentence}<br/></span>
                    })}
                </div>
                <img className='Background_line' src={Image_line} alt=''/>
                <div className='A1' onClick={selected === -1 ? onClickAnswer : null} style={ selected === 0 ? selectedStyle : null }>
                    <span style={{fontSize:'16pt',fontWeight:'bold', pointerEvents:'none'}}>
                        {testScript.test[index].answer[0]}
                    </span>
                    {" "+printHyphen(testScript.test[index].answer[0].length)}
                    <br/>{testScript.test[index].answer[1]}
                </div>
                <div className='A2' onClick={selected === -1 ? onClickAnswer : null} style={ selected === 1 ? selectedStyle : null }>
                    {printHyphen(testScript.test[index].answer[2].length)+" "}
                    <span style={{fontSize:'16pt',fontWeight:'bold', pointerEvents:'none', wordBreak:'break-all'}}>
                        {testScript.test[index].answer[2]}
                    </span>
                    <br/>{testScript.test[index].answer[3]}
                </div>
                <div style={{textAlign:"center",fontWeight:"bold"}}>{index + 1}/{Qnum + 1}<br/></div>
            </div>
        </div>
    )
}

export default Main;