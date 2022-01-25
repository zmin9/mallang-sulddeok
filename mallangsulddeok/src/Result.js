const Result = ({setPage, userValue}) => {

    return (
        <div className="Background">
            <div className="Result">
                여긴 결과
                <div>
                    <br/>
                    검사결과는 {userValue}입니다.
                    <br/>
                </div>
                <div 
                    onClick={()=>setPage(0)}
                    style={{cursor:"pointer"}}>
                    다시 검사하기
                </div>
            </div>
        </div>
    )
}

export default Result;