const Result = ({setPage}) => {
    return (
        <div className="background">
            여긴 결과
            <div 
                onClick={()=>setPage(0)}
                style={{cursor:"pointer"}}>
            돌아가고싶다면 누르시오
            </div>
        </div>
    )
}

export default Result;