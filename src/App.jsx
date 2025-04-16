import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculadora from './componentes/Calculadora';
function App() {
  return (
<div className='app'>
<h1> Bienvenidos a Mi calculadora</h1>
<Calculadora />
</div>
);
}

export default App
