import resultScript from './characteristic.json';
import { useEffect, useState } from 'react';

const Character = ({idx, item, onClickCharacter, isSelected}) => {
    return(
        <div className={isSelected? 'human-character-item-true':'human-character-item-false'}
            onClick={()=>{onClickCharacter(idx)}}
        >
            - {item}
        </div>
    )
}

const Result = ({setPage, userValue}) => {
    
    const resultIndex = parseInt(userValue[0]/2)*8+parseInt(userValue[1]/2)*4+parseInt(userValue[2]/2)*2+parseInt(userValue[3]/2)*1;
    const resultDrink = resultScript.characteristic[resultIndex];
    const drinkImage = "/drinkImages/"+resultDrink.drinkName+".png";
    const goodImage = "/drinkImages/"+resultDrink.goodMatching+".png";
    const badImage = "/drinkImages/"+resultDrink.badMatching+".png";

    const [isSelected, setIsSelected] = useState(Array(resultDrink.character.length).fill(false));

    useEffect(() => {
        let ins = document.createElement('ins');
        let scr = document.createElement('script');

        ins.className = 'kakao_ad_area';
        ins.style = "width:100%;";
        scr.async = 'true';
        scr.type = "text/javascript";
        scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
        ins.setAttribute('data-ad-width', '320');
        ins.setAttribute('data-ad-height', '100');
        ins.setAttribute('data-ad-unit', 'DAN-E5oPmTbcMBZdjVG4');

        document.querySelector('.adfit-result').appendChild(ins);
        document.querySelector('.adfit-result').appendChild(scr);
    },[]);

    const onClickCharacter = (idx) => {
        const tempArr = [...isSelected];
        if(tempArr[idx]){
            tempArr[idx] = false;
        }
        else{
            tempArr[idx] = true;
        }
        setIsSelected(tempArr);
    }

    return (
        <div className="result">
            <div className='drink-name'>
                <div style={{fontFamily:'NanumSquareRoundR', fontSize:'60%', letterSpacing:'-1pt'}}>당신의 술은...</div>
                {resultDrink.drinkName}
            </div>
            <div className='drink-graphic'>
                <img src={drinkImage} alt={resultDrink.drinkName} style={{width:"50%"}}/><br/>
            </div>
            <div className='tape-title'>
            #술 특징
            </div>
            <div className='drink-characteristic'>
                {resultDrink.drinkCharacteristic.map((ex, index)=>{
                    return <div key={index} className='drink-characteristic-item'>{"- "+ex}<br/></div>
                })}
            </div>
            <div className='tape-title' onClick={()=>{console.log('누름')}}>
            #{resultDrink.drinkName}같은 당신의 성격
            </div>
            <div className='human-character'>
                {resultDrink.character.map((ex, index)=>{
                    return <Character key={index} idx={index} item={ex} onClickCharacter={onClickCharacter} isSelected={isSelected[index]}/>
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
            
            <div className="adfit-result" style={{width:'100%'}}/>
        </div>
    )
}

export default Result;