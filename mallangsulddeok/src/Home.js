import { useEffect } from "react";
import social_share from "./social_share";

const Home = ({setPage, setUserValue}) => {
  useEffect(()=>{
    setUserValue([0, 0, 0, 0]);
  },[]);

  return(
    <div className = "Background">
      <div className="Home">
        <div 
          onClick={()=>setPage(3)}
          style={{cursor:"pointer"}}
          >
          공유하기
        </div>
        <p style={{fontSize:'30px', fontWeight:'bold', textAlign:'center'}}>
                    Mallang Bar
                </p>
        <div 
          onClick={()=>setPage(1)}
          style={{cursor:"pointer"}}
          >
          입장하기
        </div>
        <social_share/>
      </div>
    </div>
  );
}
export default Home;