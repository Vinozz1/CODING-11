import Index from './pages/Index';
import './App.css'

import { GlobalContext  } from './context';

function App(props) {
  
  const user = {
    username : 'anas'
  }


  return (
    <>
    <GlobalContext.Provider value ={user}>
       <Index />
    </GlobalContext.Provider>
    </>
  )
}

export default App
