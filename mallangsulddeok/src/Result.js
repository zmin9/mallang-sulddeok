const Result = ({setPage, userValue}) => {

    return (
        <div className="background">
            <div className="result">
                <div className="result-drink">
                    술이름 {userValue}
                </div>
                <div>
                    술 사진
                </div>
                <div>
                    술 특징
                </div>
                <div>
                    성격 특징
                </div>
                <div>
                    궁합술추천
                    <div>
                        술1
                    </div>
                    <div>
                        술2
                    </div>
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