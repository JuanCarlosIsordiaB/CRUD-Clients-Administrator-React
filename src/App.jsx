import {BrowserRouter, Routes,Route} from 'react-router-dom';
import { Index } from './pages/Index';
import { NewCliente } from './pages/NewCliente';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />}></Route>
        <Route path='/new' element={<NewCliente />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;