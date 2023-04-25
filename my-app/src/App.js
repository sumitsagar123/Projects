import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Head from './components/Head'
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Head></Head>
      <Home></Home>
    </div>
  );
}

export default App;
