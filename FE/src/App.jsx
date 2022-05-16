import React from 'react';
import Header from './components/Header';
import Routers from './Routers';
import Footer from './components/Footer';
import SuspenseWithChunkError from './components/SuspenseWithChunkError';

const App = () => {
  return (
    <>
      <SuspenseWithChunkError fallback={<></>}>
        <Routers />
      </SuspenseWithChunkError>
    </>
  );
};

export default App;
