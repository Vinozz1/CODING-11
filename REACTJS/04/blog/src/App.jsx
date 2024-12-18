import './App.css'

import { GlobalContext  } from './context';

import { RouterProvider } from 'react-router-dom';
import { router } from './routers';

function App(props) {
  
  const user = {
    username : 'anas'
  }


  // return (
  //   <>
  //   <GlobalContext.Provider value ={user}>
  //      <Index />
  //   </GlobalContext.Provider>
  //   </>
  // )

  return (
    <>
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router}/>
      </GlobalContext.Provider>
    </>
  )
}

export default App
