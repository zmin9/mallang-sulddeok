import { useEffect, useState } from 'react';
import testScript from './question.json';


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
        if(e.target.className === 'a1'){
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
        }, 300); // 0.5초 뒤에 함수 실행
    }
    

    useEffect(() => {
        return () => clearTimeout(timer);
    },[]);

    const printHyphen=(length)=>{
        let s="";
        for(let i = 0; i < 12 - length; i++)
        {
            s=s+"─"
        }
        return s;
    }


    return (
        <div className="main">
            <p style={{fontSize:'30px', fontWeight:'bold'}}>
                <br/>
                「Mallang Bar」
            </p>
            <div className="question">
                {testScript.test[index].question}
            </div>
            <div className='background-line'></div>
            <div className='a1' onClick={selected === -1 ? onClickAnswer : null} style={ selected === 0 ? selectedStyle : null }>
                <span style={{fontSize:'14pt',fontWeight:'bold', pointerEvents:'none'}}>
                    {testScript.test[index].answer[0]+" "+printHyphen(testScript.test[index].answer[0].length)+" "}
                </span>
                \19,000<br/>{testScript.test[index].answer[1]}
            </div>
            <div className='a2' onClick={selected === -1 ? onClickAnswer : null} style={ selected === 1 ? selectedStyle : null }>
                \9,300
                <span style={{fontSize:'14pt',fontWeight:'bold', pointerEvents:'none', wordBreak:'break-all'}}>
                    {" "+printHyphen(testScript.test[index].answer[2].length)+" "+testScript.test[index].answer[2]}
                </span>
                <br/>{testScript.test[index].answer[3]}
            </div>
            <div style={{textAlign:"center",fontWeight:"bold"}}>{index + 1}/{Qnum + 1}<br/></div>
        </div>
        
    )
}

export default Main;