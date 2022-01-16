const Main = ({setPage}) => {
    return (
        <div className="background">
            여긴 메인
            <div 
                onClick={()=>setPage(2)}
                style={{cursor:"pointer"}}>
            궁금하면 누르시오
            </div>
        </div>
    )
}

export default Main;