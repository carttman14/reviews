
import './App.css';
import Review from './components/Review';


function App() {
  return (
    <main className="App">
     <section className="container">
      <div className="title">
        <h2>Our Reviews</h2>
        <div className="underline"></div>

        <Review/>
      </div>
     </section>
        
    </main>
  );
}

export default App;
