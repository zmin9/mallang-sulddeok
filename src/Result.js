import resultScript from './characteristic.json';
import { useEffect, useState, useRef } from 'react';
import domtoimage from 'dom-to-image';

import Loading from './Loading';
import SocialShare from './SocialShare';
import {Link, useParams} from "react-router-dom";

const Character = ({idx, item, onClickCharacter, isSelected}) => {
    return(
        <div className={isSelected? 'human-character-item-true':'human-character-item-false'}
            onClick={()=>{onClickCharacter(idx)}}
        >
            - {item}
        </div>
    )
}

const Result = () => {
    const { no } = useParams();
    const resultIndex = parseInt(no)-93923;
    const resultDrink = resultScript.characteristic[resultIndex];
    const drinkImage = "https://zmin9.github.io/mallang-sulddeok/drinkImages/"+resultDrink.drinkName+".png";
    const goodImage = "https://zmin9.github.io/mallang-sulddeok/drinkImages/"+resultDrink.goodMatching+".png";
    const badImage = "https://zmin9.github.io/mallang-sulddeok/drinkImages/"+resultDrink.badMatching+".png";

    const [loading, setLoading] = useState(true);
    const [popupOpen, setPopupOpen] = useState(false);
    const [isSelected, setIsSelected] = useState(Array(resultDrink.character.length).fill(false));
    const cardRef = useRef();
    const [isLoad, setIsLoad] = useState(false);
    const [resultImg, setResultImg] = useState(new Image());

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
        <div className="background">
            { loading ? <Loading text="??? ?????? ???"/> : null}
            { popupOpen? <SocialShare setPopupOpen={setPopupOpen}/> : null}
            <div className="result">
                <div ref={cardRef} className='png-card'>
                    <div className='drink-name'>
                        <div style={{fontFamily:'NanumSquareRoundR', fontSize:'60%', letterSpacing:'-1pt'}}>????????? ??????...</div>
                        {resultDrink.drinkName}
                    </div>
                    <div className='drink-graphic'>
                        <img src={drinkImage} alt={resultDrink.drinkName} style={{width:"50%"}}/><br/>
                    </div>
                    <div className='tape-title'>
                        #{resultDrink.drinkName}?????? ????????? ??????
                    </div>
                    <div className='human-character'>
                        {resultDrink.character.map((ex, index)=>{
                            return <Character key={index} idx={index} item={ex} onClickCharacter={onClickCharacter} isSelected={isSelected[index]}/>
                        })}
                    </div>
                    <div className='tape-title'>
                        #??? ??????
                    </div>
                    <div className='drink-characteristic'>
                        {resultDrink.drinkCharacteristic.map((ex, index)=>{
                            return <div key={index} className='drink-characteristic-item'>{"- "+ex}<br/></div>
                        })}
                    </div>
                    <div className='relation-drink-cover'>
                        <div className='relation-drink' style={{marginRight:"2.5%"}}>
                            ??? ???????????? ???<br/>
                            <img src={goodImage} alt={resultDrink.drinkName} style={{width:"70%"}}/><br/>
                            <div>{resultDrink.goodMatching}</div>
                        </div>
                        <div className='relation-drink' style={{marginLeft:"2.5%"}}>
                            ??? ???????????? ???<br/>
                            <img src={badImage} alt={resultDrink.drinkName} style={{width:"70%"}}/><br/>
                            <div>{resultDrink.badMatching}</div>
                        </div>
                    </div>
                </div>
                <div>???????????? ????????? ???????????????????? ??????????????? ????????? ??????!<br/>???????????? ???????????? SNS??? ???????????????!</div>
                <div className='share-btn' onClick={onDownloadBtn}>
                    ???????????? ????????????</div>
                <div>
                    {isLoad?
                        <div className='result-image-container'>
                            <img src={resultImg.src}  className='result-image' alt=' '/>
                            ??????? ?????? ???????????????!
                        </div>:null}

                </div>
                <Link to='/'>
                    <div className='retry-btn'>
                        ?????? ????????????
                    </div>
                </Link>
                <div className="share-btn" onClick={()=>setPopupOpen(true)}>
                    ????????? ?????? ?????? ????????????
                </div>

                <div className="adfit-result" style={{width:'100%'}}/>
            </div>
        </div>
    )
};

export default Result;