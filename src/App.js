import React from 'react';
import Header1 from './components/header';
import School from "./components/School";
import CodeT from "./components/CodeT";
import OnlineT from "./components/OnlineT";
import Footer1 from './components/footer'

function App() {
  return (
    <div className="App">
      <Header1 />
      <School />
      <OnlineT />
      <CodeT />
      <Footer1 />
    </div>
  );
}

export default App;
