import resultScript from './characteristic.json';
import { useEffect, useState, useRef } from 'react';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

import Loading from './Loading';
import SocialShare from './SocialShare';

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

    const [loading, setLoading] = useState(true); 
    const [popupOpen, setPopupOpen] = useState(false);
    const [isSelected, setIsSelected] = useState(Array(resultDrink.character.length).fill(false));
    const cardRef = useRef();
    const [isLoad, setIsLoad] = useState(false);
    const [resultImg, setResultImg] = useState(new Image());
    //let resultImg = new Image();

    useEffect(() => {
        /* for loading off */
        setTimeout(()=>{
            setLoading(false);
        }, 3000);
        
        /* kakao adfit */
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
    };

    const onDownloadBtn = () => {
        const card = cardRef.current;
        domtoimage
            .toBlob(card)
            .then(()=>{
                domtoimage
                .toPng(card)
                .then((dataUrl) => {
                    const temp = new Image();
                    temp.src = dataUrl;
                    temp.onload=()=>setIsLoad(true);
                    setResultImg(temp);
            });
            })
    };

    

    return (
        <>
            { loading ? <Loading text="술 제조 중"/> : null}
            { popupOpen? <SocialShare setPopupOpen={setPopupOpen}/> : null}
            <div className="result">
            <div ref={cardRef} className='png-card'>
                <div className='drink-name'>
                    <div style={{fontFamily:'NanumSquareRoundR', fontSize:'60%', letterSpacing:'-1pt'}}>당신의 술은...</div>
                    {resultDrink.drinkName}
                </div>
                <div className='drink-graphic'>
                    <img src={drinkImage} alt={resultDrink.drinkName} style={{width:"50%"}}/><br/>
                </div>
                <div className='tape-title'>
                #{resultDrink.drinkName}같은 당신의 성격
                </div>
                <div className='human-character'>
                    {resultDrink.character.map((ex, index)=>{
                        return <Character key={index} idx={index} item={ex} onClickCharacter={onClickCharacter} isSelected={isSelected[index]}/>
                    })}
                </div>
                <div className='tape-title'>
                #술 특징
                </div>
                <div className='drink-characteristic'>
                    {resultDrink.drinkCharacteristic.map((ex, index)=>{
                        return <div key={index} className='drink-characteristic-item'>{"- "+ex}<br/></div>
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
            </div>
            <div>공감되는 특징을 꾹👆🏻누르면 하이라이트 표시가 돼요!<br/>이미지로 저장해서 SNS에 공유해봐요!</div>
            <div className='share-btn' onClick={onDownloadBtn}>
            이미지로 저장하기</div>
            <div>
                {isLoad? 
                    <div className='result-image-container'>
                        <img src={resultImg.src}  className='result-image' alt=' '/>
                        👈꾹 눌러 저장하세요!
                    </div>:null}
                
            </div>
            <div className='retry-btn' onClick={()=>setPage(0)}>
                다시 검사하기
            </div>
            <div className="share-btn" onClick={()=>setPopupOpen(true)}>
                테스트 공유하기
            </div>
            
            <div className="adfit-result" style={{width:'100%'}}/>
        </div>
        </>
    )
}

export default Result;