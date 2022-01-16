const Home = ({setPage}) => {
  return(
    <div className = "background">
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