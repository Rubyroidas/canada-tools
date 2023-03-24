import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {HomePage} from '../pages/HomePage';
import {CrsCalculatorPage} from '../pages/CrsCalculatorPage';

export const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/crs-calculator" element={<CrsCalculatorPage/>}/>
        </Routes>
    </BrowserRouter>
);
