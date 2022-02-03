import { useEffect } from "react";

const Home = ({setPage, setUserValue}) => {
    useEffect(()=>{
        setUserValue([0, 0, 0, 0]);
    },[]);

    return(
        <div className="home">
            <div className='title'>
                나와 어울리는 술 찾기
            </div>
            <div className="group-image"></div>
            <div className='start-btn' onClick={()=>setPage(1)}>
                ― 입장하기 →
            </div>
            {/*임시 버튼 
            <div className='start-btn' onClick={()=>{setPage(2);}}>
                ― 결과페이지 바로이동 →
            </div>
            */}
        </div>
    );
}
export default Home;