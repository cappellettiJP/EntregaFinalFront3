import React from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import DentistList from './components/DentistList'
import ContactForm from './components/ContactForm'

function App() {
  

  return (
    <>
    <div>
      <DentistList />
    </div>
    <div>
      <h1>Contacto</h1>
      <ContactForm />
    </div>


    </>
  )
}

export default App
