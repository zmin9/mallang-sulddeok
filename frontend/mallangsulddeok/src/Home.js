import { useEffect } from "react";

const Home = ({setPage, setUserValue}) => {
  useEffect(()=>{
    setUserValue([0, 0, 0, 0]);
  },[])

  return(
    <div className = "Background">
      <div className="Home">
        <button> 공유 </button>
        <br/>Home<br/>
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