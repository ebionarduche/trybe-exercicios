import './App.css';
import React, { useState } from 'react';

function App() {
const [name, setName] = useState('');
const [age, setAge] = useState('')

  return (
    <div>
    <h1>Primeiro formlário com componentes funcionais</h1>
      <fieldset>
        <legend>Dados Pessoais</legend>
        <label htmlFor="">
            Nome:
            <input
            type="text"
            name='name'
            placeholder='Digite o seu nome'
            value={name}
            onChange={({ target }) => setName(target.value)}
            />
        </label>

        <label htmlFor="">
            Idade:
            <input
            type="number"
            name="age"
            placeholder='Digite sua idade'
            />
        </label>

        <label htmlFor="">
            Cidade:
            <input
            type="text"
            name='city'
            placeholder='Cidade onde mora'
            />
        </label>
    </fieldset>
    <fieldset>
          <legend>Módulo que está estudando:</legend>
        <label htmlFor="fundamentals">
          <input 
            id='fundamentals'
            type="radio" 
            name="module" 
            value='Fundamentos' 
          />
          Fundamentos:
        </label>

        <label htmlFor="frontend">
          <input 
            id='frontend'
            type="radio" 
            name="module" 
            value='Front-end' 
          />
          Frontend:
        </label>

        <label htmlFor="backend">
          <input 
            id='backend'
            type="radio" 
            name="module" 
            value='Back-end' 
          />
          BackEnd:
        </label>

        <label htmlFor="cs">
          <input 
            id='cs'
            type="radio" 
            name="module" 
            value='Ciência da computação' 
          />
          Ciência da computação:
        </label>


    </fieldset>

      
    </div>
  )
}

export default App
