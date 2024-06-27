import Student from './Student';
import { useState } from 'react'

function App() {

  return (
    <>
      <Student name="Spongebob1" age={30} isStudent={true}/>
      <Student name="Romika" age={22} isStudent = {true}/>
      <Student name="Rohan" age={26} isStudent = {false}/>
      <Student name="Lora"/>
    </>
  );
}

export default App