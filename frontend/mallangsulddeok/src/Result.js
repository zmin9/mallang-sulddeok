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
                    돌아가고싶다면 누르시오
                </div>
            </div>
        </div>
    )
}

export default Result;