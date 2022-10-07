import { useRef, useState } from 'react';
import generatePassword from './services/characters';
import './style.css'


function App() {

  const [password, setPassword] = useState('')
  const [valueRange, setValueRange] = useState(9)
  const [statusLength, setStatusLength] = useState('Senha Forte')
  const level = useRef(null)

  // refs symbols and numbers

  const symbolRef = useRef()
  const numberRef = useRef()
  const lengthRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    let newPass = generatePassword(
        numberRef.current.checked,
        symbolRef.current.checked,
        lengthRef.current.value 
    )

    setPassword(newPass)
   
  }

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    
    alert('Senha copiada com sucesso!')
  }

 function inputLevel(e){
  setValueRange(e.target.value)

  if(valueRange == 5){
    level.current.style.width = '20%'
    level.current.style.background = '#db4949'
    setStatusLength('Senha Fraca')
  } else if(valueRange == 7){
    level.current.style.width = '50%'
    level.current.style.background = '#ecde42'
    setStatusLength('Senha Razoável')
  } else if(valueRange == 9){
    level.current.style.width = '80%'
    level.current.style.background = '#0ec936'
    setStatusLength('Senha Forte')
  }else if(valueRange > 10){
    level.current.style.width = '100%'
    level.current.style.background = '#178037'
    setStatusLength('Senha Muito Forte')
  }
 }


  return (
    <div className="container">
       <h1>Gerador de Senha</h1>

       <div className="result-container">
        <h3>{statusLength}</h3>
           <div className="password">
               <p>{password}</p>
               <div className="length-accept" ref={level}></div>
           </div>

         <button onClick={copyPassword}><i className="fa-solid fa-clipboard"></i></button>

       </div>

      <div className="password-length">
          <input type="number" value={valueRange} onChange={(e) => inputLevel(e)} ref={lengthRef}/>
          <input type="range" value={valueRange} min={0} max={25} onChange={(e) => inputLevel(e)} ref={lengthRef}/>
      </div>

      <form onSubmit={handleSubmit}>
            
            <div className='check-container'>
              <label htmlFor='number'>Incluir números</label>
              <input type="checkbox" name="number" ref={numberRef} />
            </div>

            <div className='check-container'>
              <label htmlFor='symbol'>Incluir símbolos</label>
              <input type="checkbox" name="symbol" ref={symbolRef} />
            </div>

         <button type='submit' className='btn'>Gerar Senha</button>
      </form>

       
      
    </div>
  );
}

export default App;
