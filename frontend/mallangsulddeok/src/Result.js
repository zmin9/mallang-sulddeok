const Result = ({setPage}) => {
    return (
        <div className="Background">
            <div className="Result">
                여긴 결과
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