import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import {Logo } from './components/Logo';
import {Home, CreatePost} from './pages';



const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        </header>
    </BrowserRouter>

  );
}

export default App;
