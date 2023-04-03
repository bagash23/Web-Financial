import Navbar from '../components/Navbar';
import { BrowserRouter, BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import { Bantuan, Cuan, FAQ, TentangKami } from './Dashboard';

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
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
