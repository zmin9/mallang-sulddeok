import { useEffect } from "react";

const Home = ({setPage, setUserValue}) => {
  useEffect(()=>{
    setUserValue([0, 0, 0, 0]);
  },[]);

  return(
    <div className="background">
      <div className="home">
        <div 
          onClick={()=>setPage(3)}
          style={{cursor:"pointer"}}
          >
          공유하기
        </div>
        <p style={{fontSize:'30px', fontWeight:'bold', textAlign:'center'}}>
                    Mallang Bar
                </p>
        <div className="group-image"></div>
        <div 
          onClick={()=>setPage(1)}
          style={{cursor:"pointer"}}
          >
          입장하기
        </div>
      </div>
    </div>
  );
}
export default Home;