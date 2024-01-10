import {BrowserRouter, Routes,Route} from 'react-router-dom';
import { Index } from './pages/Index';
import { NewCliente } from './pages/NewCliente';
import { EditCliente } from './pages/EditCliente';
import { VerCliente } from './pages/VerCliente';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />}></Route>
        <Route path='/new' element={<NewCliente />}></Route>
        <Route path='/editar/:id' element={<EditCliente/>}></Route>
        <Route path='/ver/:id' element={<VerCliente/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;