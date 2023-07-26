import { useState } from 'react';
import Authenticate from "./authenticate";
import SignUpForm from "./signupform";

import './App.css';

const [token, setToken] = useState(null);

function App() {

  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  );
  
}


export default App
