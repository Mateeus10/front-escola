import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import Rotas from './Routes/index.js';
import Header from './components/Header';


import { persistor } from './store';
import GlobalStyles from './styles/GlobalStyles.js';



function App() {
  return (

    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Header />
        <Rotas />
        <GlobalStyles />
        <ToastContainer autoClose={3000} className="toast-container" />
      </BrowserRouter>



    </PersistGate>

  );
};

export default App;
