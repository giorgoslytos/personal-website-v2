import React from 'react';
import Typo from './Typo';
import ResizeContextProvider from './contexts/ResizeContext';

function App() {
  return (
    <div className="App">
      <ResizeContextProvider>
        <Typo />
      </ResizeContextProvider>
    </div>
  );
}

export default App;
