import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import logo from './assets/logo.png';



const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        </header>
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain"/>
        </Link>

    </BrowserRouter>

  );
}

export default App;
