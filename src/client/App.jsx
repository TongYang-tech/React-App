import { useEffect } from 'react'
import axiosClient from './utils/axiosHelper'
import './App.css'

function App() {
  const getHealth = async () => {
    try {
      const resp = await axiosClient.get(`/placeholder/api/health`)
      const data = resp.data
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getHealth()
  }, [])

  return (
    <>
      Hello World!
    </>
  )
}

export default App
