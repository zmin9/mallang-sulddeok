import { useState } from 'react';
import testScript from './question.json'

const Main = ({setPage}) => {
    var Qnum = 11;
    const [index, setIndex]=useState(0);

    const controlTest = () => {
        (index < Qnum ? setIndex(index+1) : setPage(2))
    }

    return (
        <div className="Background">
            <div className="Main">
                여긴 메인<br/>
                <div className="Question">
                    {testScript.test[index].question}
                </div>
                <div className='Answer1'>
                    {testScript.test[index].answer[0]}
                </div>
                <div className='Answer2'>
                    {testScript.test[index].answer[1]}
                </div>

                <div 
                    onClick={controlTest}
                    style={{cursor:"pointer"}}>
                    다음
                </div>
            </div>
        </div>
    )
}

export default Main;