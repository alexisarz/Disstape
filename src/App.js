import React from 'react';
import './App.css';
import Nav from './components/common/nav';
import HomeScreen from './components/screens/home';
import Aside from './components/common/aside';
import Footer from './components/common/footer';



function App() {
  return (
    <div className="App">
      <Nav/>
      <section>
        <HomeScreen/>
        <Aside/>
      
      </section>
      <Footer/>
    </div>
  );
}

export default App;
