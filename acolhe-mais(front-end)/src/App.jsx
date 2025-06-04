import { Outlet } from 'react-router-dom'
import './App.css'
import Menu from './components/Menu'

function App() {
  return (
    <>
      <Menu/>
      <Outlet />
    </>
  )
}

export default App
