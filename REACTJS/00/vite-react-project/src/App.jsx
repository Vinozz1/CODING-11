import './App.css';
import Header from './components/Header'
import Footer from './components/footer';

import Welcome from './components/Welcome'
import Goodbye from './components/Goodbye'

function App() {
  return (
    <>
      <Header />
      <h1>Hello, react!</h1>
      <Welcome name='Budi' />
      <Welcome name='Cindy' />
      <Goodbye />
      <Goodbye name='Dony' />
      <Footer />
    </>
  );
}

export default App;
