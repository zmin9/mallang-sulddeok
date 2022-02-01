import { useEffect, useState } from "react";
import './style.css';
import Home from "./Home";
import Main from "./Main";
import Result from "./Result";
import SocialShare from "./SocialShare";



const App = () => {
    const [page, setPage] = useState(0);
    const [userValue, setUserValue] = useState([0, 0, 0, 0]);

    /* kakao adfit */
    useEffect(() => {
        let ins = document.createElement('ins');
        let scr = document.createElement('script');

        ins.className = 'kakao_ad_area';
        ins.style = "display:none; width:100%;";
        scr.async = 'true';
        scr.type = "text/javascript";
        scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
        ins.setAttribute('data-ad-width', '320');
        ins.setAttribute('data-ad-height', '80');
        ins.setAttribute('data-ad-unit', 'DAN-pTbfs6eBezPIhuo0');

        document.querySelector('.adfit').appendChild(ins);
        document.querySelector('.adfit').appendChild(scr);
    },[]);

    return(
        <div className="background">
            {(page === 0 ? <Home setPage={setPage} setUserValue={setUserValue}/> : 
                (page === 1 ? <Main setPage={setPage} userValue={userValue} setUserValue={setUserValue}/>:
                    (page === 2 ? <Result setPage={setPage} userValue={userValue}/> : 
                        page === 3 ? <SocialShare setPage={setPage}/> : null)))}
            <div className="adfit"/>
        </div>
    )
}

export default App;