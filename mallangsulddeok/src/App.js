import { useState } from "react";
import './style.css';
import Home from "./Home";
import Main from "./Main";
import Result from "./Result";
import social_share from "./social_share";


const App = () => {
    const [page, setPage] = useState(0);
    const [userValue, setUserValue] = useState([0, 0, 0, 0]);

    return(
        (page === 0 ? <Home setPage={setPage} setUserValue={setUserValue}/> : 
            (page === 1 ? <Main setPage={setPage} userValue={userValue} setUserValue={setUserValue}/>:
                (page === 2 ? <Result setPage={setPage} userValue={userValue}/> : 
                    (page === 3 ? <social_share setPage={setPage}/> : null))))
    )
}

export default App;