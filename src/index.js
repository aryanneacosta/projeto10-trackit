import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/globalStyles";
import Login from './components/Login';
import Registration from './components/Registration';
import Habits from './components/Habits';
import Today from './components/Today';
import History from './components/History';
import UserContext from "./contexts/UserContext";
import { useState } from "react";
import HabitsDoneContext from "./contexts/HabitsDoneContext";

function App() {
    const [user, setUser] = useState([]);
    const [habitsDone, setHabitsDone] = useState([]);

    return (
        <>
            <GlobalStyle />
            <UserContext.Provider value={{ user, setUser }}>
                <HabitsDoneContext.Provider value={{ habitsDone, setHabitsDone }}>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<Login />} />
                            <Route path='/cadastro' element={<Registration />} />
                            <Route path='/habitos' element={<Habits />} />
                            <Route path='/hoje' element={<Today />} />
                            <Route path='/historico' element={<History />} />
                        </Routes>
                    </BrowserRouter>
                </HabitsDoneContext.Provider>
            </UserContext.Provider>
        </>
    );
}

ReactDOM.render(<App />, document.querySelector('.root'));