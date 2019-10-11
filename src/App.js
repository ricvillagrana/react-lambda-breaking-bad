import React, { useState } from 'react'
import axios from 'axios'

const App = (props) => {
  const [name, setName] = useState('')

  const fetchData = async () => {
    const { data } = await axios.get('/.netlify/functions/hello')

    setName(data.name)
  }

  fetchData()

  return (
    <div>
      Hi, {name}
    </div>
  )
}

export default App
