import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Nome } from '../components/NomesIbge'



function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Nome />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;