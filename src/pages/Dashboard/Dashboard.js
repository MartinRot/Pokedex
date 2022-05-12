import React from 'react'
import { PokeProvider } from '../../contexts/PokeContext'
import List from '../List/List'

const Dashboard = () => {

  return (
    <div>      
      <PokeProvider value={{}}>

        <List />
      
      </PokeProvider>
    </div>
  )
}

export default Dashboard