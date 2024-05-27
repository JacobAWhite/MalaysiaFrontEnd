import React from 'react';
  import './App.css';
  import MyComponent from './MyComponent';
  function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello, React!</h1>
          <p>This is my first React app.</p>
          <MyComponent />
        </header>
      </div>
    );
  }
  export default App;