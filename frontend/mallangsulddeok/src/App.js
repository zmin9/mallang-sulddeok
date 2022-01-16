import { useState } from "react";
import Home from "./Home";
import Main from "./Main";
import Result from "./Result";

const App = () => {
    const [page, setPage] = useState(0);

    return(
        (page === 0 ? <Home setPage={setPage}/> : 
            (page === 1 ? <Main setPage={setPage}/>:
                page === 2 ? <Result setPage={setPage}/> : null))
    )
}

export default App;