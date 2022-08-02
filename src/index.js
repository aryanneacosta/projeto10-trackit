import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/globalStyles";
import Login from './components/Login';
import Registration from './components/Registration';
import Habits from './components/Habits';
import Today from './components/Today';
import History from './components/Login';


function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/cadastro' element={<Registration />} />
                    <Route path='/habitos' element={<Habits />} />
                    <Route path='/hoje' element={<Today />} />
                    <Route path='/historico' element={<History />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

ReactDOM.render(<App />, document.querySelector('.root'));