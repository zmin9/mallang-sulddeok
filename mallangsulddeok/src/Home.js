import { useEffect } from "react";
import {Link} from "react-router-dom";

const Home = () => {

    useEffect(() => {
        let ins = document.createElement('ins');
        let scr = document.createElement('script');

        ins.className = 'kakao_ad_area';
        ins.style = "width:100%;";
        scr.async = 'true';
        scr.type = "text/javascript";
        scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
        ins.setAttribute('data-ad-width', '320');
        ins.setAttribute('data-ad-height', '50');
        ins.setAttribute('data-ad-unit', 'DAN-zVLiETbvhnwg5omi');

        document.querySelector('.adfit-home').appendChild(ins);
        document.querySelector('.adfit-home').appendChild(scr);
    },[]);
    
    return(
        <div className="background">
            <div className="home">
                <div className='title'>
                    말랑술떡이 알려주는<br/>🍻당신의 술🍻
                </div>
                <div className="group-image"></div>
                <Link to='/test'>
                    <div className='start-btn'>
                        ― 입장하기 →
                    </div>
                </Link>
                <div className="adfit-home" style={{width:'100%', marginTop:'100px'}}/>
            </div>
        </div>
    );
}
export default Home;