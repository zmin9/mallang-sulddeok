import resultScript from './characteristic.json';

const Result = ({setPage, userValue}) => {
    
    let resultIndex = parseInt(userValue[0]/2)*8+parseInt(userValue[1]/2)*4+parseInt(userValue[2]/2)*2+parseInt(userValue[3]/2)*1;
    let resultDrink = resultScript.characteristic[resultIndex];
    let drinkImage = "/drinkImages/"+resultDrink.drinkName+".png";
    let goodImage = "/drinkImages/"+resultDrink.goodMatching+".png";
    let badImage = "/drinkImages/"+resultDrink.badMatching+".png";

    return (
        <div className="result">
            <div className='drink-name'>
                {resultDrink.drinkName}
            </div>
            <div className='drink-graphic'>
                <img src={drinkImage} alt={resultDrink.drinkName} style={{width:"70%"}}/>
            </div>
            <div className='drink-characteristic'>
                {resultDrink.drinkCharacteristic.map((ex, key)=>{
                    return <div key={key} className='drink-characteristic-item'>{"- "+ex}<br/></div>
                })}
            </div>
            <div className='human-character'>
                {resultDrink.character.map((ex, key)=>{
                    return <div key={key} className='human-character-item'>{"- "+ex}<br/></div>
                })}
            </div>
            <div className='relation-drink-cover'>
                <div className='relation-drink' style={{marginRight:"2.5%"}}>
                    잘 어울리는 술<br/>
                    <img src={goodImage} alt={resultDrink.drinkName} style={{width:"70%"}}/><br/>
                    <div>{resultDrink.goodMatching}</div>
                </div>
                <div className='relation-drink' style={{marginLeft:"2.5%"}}>
                    안 어울리는 술<br/>
                    <img src={badImage} alt={resultDrink.drinkName} style={{width:"70%"}}/><br/>
                    <div>{resultDrink.badMatching}</div>
                </div>
            </div>
            <div className='retry-btn' 
                onClick={()=>setPage(0)}>
                다시 검사하기
            </div>
            <div className="share-btn"
                onClick={()=>setPage(3)}>
                공유하기
            </div>
        </div>
    )
}

export default Result;