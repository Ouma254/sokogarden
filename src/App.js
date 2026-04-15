import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproducts from './components/Getproducts';
import Makepayment from './components/Makepayment';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <header className="App-header">
        <h1>Sokogarden - Buy & Sell Online</h1>
      </header>

      <nav className='m-4'>
        <Link to='/' className='btn btn-dark mx-2'>Home</Link>
        <Link to='/addproduct' className='btn btn-dark mx-2'>Add Product</Link>
        <Link to='/signup' className='btn btn-dark mx-2'>Signup</Link>
        <Link to = '/signin' className='btn btn-dark mx-2'>Signin</Link>
      </nav>

      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />}/>
        <Route path='/addproduct' element={<Addproduct />}/>
        <Route  path='/makepayment' element={<Makepayment />} />

        {/* this is the home or the default page  */}
        <Route path='/' element={<Getproducts />}/>
      </Routes>

      



    </div>
    </BrowserRouter>
  );
}

export default App;
