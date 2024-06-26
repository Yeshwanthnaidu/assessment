import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import TestPage from './Components/TestPage/TestPage';
import Mcqs from './Components/MCQS/Mcqs';

function AdminPage() {
  return <>
    <HomePage />
  </>
}

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<AdminPage />} />
        <Route path='/test-page' element={<TestPage />} />
        <Route path='/mcqs' element={<Mcqs />} />
      </Routes>
    </div>
  );
}

export default App;
