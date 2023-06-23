import './App.css';
import React, { useState } from 'react';

function App() {
const [name, setName] = useState('');
const [age, setAge] = useState('')
const [city, setCity] = useState('')
const [module, setModule] = useState();

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
            value={age}
            onChange={({ target }) => setAge(target.value)}

            />
        </label>

        <label htmlFor="">
            Cidade:
            <input
            type="text"
            name='city'
            placeholder='Cidade onde mora'
            value={city}
            onChange={({ target }) => setCity(target.value)}
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
            checked={ module === 'Fundamentos'}
            onChange={({ target }) => setModule(target.value)}
          />
          Fundamentos:
        </label>

        <label htmlFor="frontend">
          <input 
            id='frontend'
            type="radio" 
            name="module" 
            value='Front-end'
            checked={ module === 'Front-end'}
            onChange={({ target }) => setModule(target.value)}


          />
          Frontend:
        </label>

        <label htmlFor="backend">
          <input 
            id='backend'
            type="radio" 
            name="module" 
            value='Back-end' 
            checked={ module === 'Back-end'}
            onChange={({ target }) => setModule(target.value)}

          />
          BackEnd:
        </label>

        <label htmlFor="cs">
          <input 
            id='cs'
            type="radio" 
            name="module" 
            value='Ciência da computação'
            checked={ module === 'Ciência da computação'}
            onChange={({ target }) => setModule(target.value)}
          />
          Ciência da computação:
          </label>
          <button
            type='submit'
            onClick={(event) => {
              event.preventDefault();
              console.log('Click!');
            }}
            >
              Enviar
          </button>
    </fieldset>
      
    </div>
  )
}

export default App
