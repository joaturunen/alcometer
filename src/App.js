import './App.css';
import {useState} from 'react';

function App () {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);

  function calculate (e) {
    e.preventDefault() 
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - burning * time;
    let result = 0;
    if (gender === 'male') {
      result = gramsLeft / (weight * 0.7);
    } else if (gender === 'female') {
      result = gramsLeft / (weight * 0.6);
    }
    
    setResult(result);
  }

  return (
    <div>
      <h1>Calculating alcohol blood level</h1>
      <form onSubmit={calculate}>
        <div className='rivi'>
          <label>Weight </label>
          <input name='weight' type='number' step='1' value={weight} onChange={e => setWeight(e.target.value)} ></input>
        </div>
        <div className='rivi'>
          <label>Bottles </label>
          <input name='bottles' type='number' value={bottles} onChange={e => setBottles(e.target.value)} ></input>
        </div>
        <div className='rivi'>
          <label>Time </label>
          <input name='time' type='number' value={time} onChange={e => setTime(e.target.value)} ></input>
        </div>
        <div className='rivi'>
          <label>Gender </label>
          <input type='radio' name='gender' value='male' defaultChecked onChange={e => setGender(e.target.value)} />
          <label>Male</label>
          <input type='radio' name='gender' value='female' onChange={e => setGender(e.target.value)} />
          <label>Female</label>
        </div>
        <div className='rivi'>
          <output>{result}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  )
}

export default App
