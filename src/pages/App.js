import Navbar from '../components/Navbar';
import { BrowserRouter, BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import { ATM, Bantuan, Cuan, FAQ, TentangKami } from './Dashboard';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Cuan/>} />
        <Route path='/tentang-kami' element={<TentangKami/>} />
        <Route path='/faq' element={<FAQ/>} />
        <Route path='/bantuan' element={<Bantuan/>} />
        <Route path='/atm' element={<ATM/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
