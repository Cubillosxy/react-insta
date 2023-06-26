import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <header>
        <a href="/" className='logo'>Local News</a>
        <nav>
          <a href="/">Login</a>
          <a href="/">Register</a>
        </nav>

      </header>
      <div className="post">
        <div className="image">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        
        <div className="texts">

          <h2>ocean Gate</h2>

          <p className='info'> 

            <a href="/" className='author'>Edwin Kis</a>
            <time> 1 hour ago</time>
            
            
            this a test inside ocean gate
          
          </p>
        </div>


      </div>
    </main>
  );
}

export default App;
