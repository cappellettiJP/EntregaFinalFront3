import React from 'react'
import './App.css'
import DentistList from './components/DentistList'
import ContactForm from './components/ContactForm'
import Header from './components/Header'


function App() {
  

  return (
    <>
    <Header />
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
