import React from 'react';

import AuthProvider from 'react-auth-kit'
import store from "./store"
import RoutesComponent from './routes/RoutesComponent';


// console.log("store")
// console.log(store)
function App() {


  return (
    <>

      <AuthProvider store={store}>
        <RoutesComponent />
      </AuthProvider>
    </>
  )
}

export default App
