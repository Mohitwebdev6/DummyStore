import React from 'react'
import Nav from './components/Nav'
import Routers from './utils/Router'


function App() {
  return (
    <div className='bg-zinc-300 min-h-screen p-5'>
      <Nav></Nav>
      <Routers></Routers>
    </div>
  )
}

export default App