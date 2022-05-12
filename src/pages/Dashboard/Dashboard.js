import React from 'react'
import { PokeProvider } from '../../contexts/PokeContext'
import List from '../List/List'

const Dashboard = () => {

  return (    
      <PokeProvider value={{}}>
        <List />      
      </PokeProvider>    
  )
}

export default Dashboard