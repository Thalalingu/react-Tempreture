import React,{useState} from 'react';
import './style.css';

export default function App() {
 const [city,setCity] = useState("")
 const [result,setResult] = useState("")
console.log("lingu",result)
 function dataSubmitted(e){
e.preventDefault()
console.log(city)

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then((res) => res.json()).
then((data) => setResult(data.main.temp))
 }
  return (
    <div>
      <p>hiiii{city}</p>
      <form onSubmit={dataSubmitted}>
     <input type="text" value={city} 
     onChange={(e)=> {setCity(e.target.value)}}/><br/><br/>
     <input type="submit" value="GetTempreture" />
     </form>
    </div>
  );
}
