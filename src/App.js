import logo from './logo.svg';
import './App.css';
import {question} from './api';
import { useEffect, useState } from 'react';
import Myac from './Myac';

function App() 

{

  const[curr,setCurr]= useState(question);

  return (
<>
<h1 style={{marginLeft:'470px'}}>This is API of Me 😄 <br/></h1>
 {
  
  curr.map((ele)=>{
    const {id} =ele;
  return <Myac {...ele }/>
  })
  } 



</>
  );
}

export default App;
