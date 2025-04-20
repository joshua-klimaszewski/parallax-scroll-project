import React from 'react'
import './styles/globals.css'
import './styles/parallax.css'
import HomePage from './pages/HomePage'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <HomePage />
    </div>
  )
}

export default App