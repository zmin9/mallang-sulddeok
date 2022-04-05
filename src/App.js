import './style.css';
import Home from "./Home";
import Main from "./Main";
import Result from "./Result";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const App = () => {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route element={<Home/>} path='/'/>
                <Route element={<Main/>} path='/test'/>
                <Route element={<Result/>} path='/result/:no'/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;