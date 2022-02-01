import { useEffect } from "react";

const Home = ({setPage, setUserValue}) => {
  useEffect(()=>{
    setUserValue([0, 0, 0, 0]);
  },[]);

  return(
      <div className="home">
        <div 
          onClick={()=>setPage(3)}
          style={{cursor:"pointer"}}
          >
          공유하기
        </div>
        <p style={{letterSpacing:'-2pt', fontSize:'30px', fontWeight:'bold', textAlign:'center'}}>
                    나와 어울리는 술 찾기
                </p>
        <div className="group-image"></div>
        <div 
          onClick={()=>setPage(1)}
          style={{cursor:"pointer",letterSpacing:'-1pt', fontSize:"15pt"}}
          >
          ― 입장하기 →
        </div>
      </div>
  );
}
export default Home;