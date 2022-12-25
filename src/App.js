import React, {useState} from 'react'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Counter from './Counter';

const App = () => {
  // const [count, setCount] = useState(0);
  const [showCounter, setShowCounter] = useState(false);


  return (
    <div className="container my-5">
    <Header></Header>
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Counter Application</h1>
          <button className='btn btn-success mx-3 my-5' onClick={
            () => setShowCounter(!showCounter) }> {showCounter ? "Hide Counter" : "Show Counter"} </button>
      {showCounter && <Counter />}
          {/* <div className="my-5">
            <h2 className='my-5'>Count:{count}</h2>
            <button className="btn btn-success mx-3" onClick={()=>setCount(count+1)}> Increment</button>
            <button className="btn btn-danger mx-3"onClick={()=>setCount(count-1)}
            disabled={count===0}> Decrement</button>
            <button className="btn btn-secondary mx-3"onClick={()=>setCount(0)}
            disabled={count===0}> Reset</button>
          </div> */}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App
