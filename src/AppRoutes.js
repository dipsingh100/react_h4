import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Students from './components/Students';
import Contact from './components/Contact';
import Error from './components/Error';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/students' element={<Students/>}/>
      <Route path='/contact-us' element={<Contact/>} />
      <Route path='*' element={<Error/>} />
    </Routes>
  );
}

export default AppRoutes;
