import React , {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

  return (
    <div>
      <div className="my-5">
            <h2 className='my-5'>Count:{count}</h2>
            <button className="btn btn-success mx-3" onClick={()=>setCount(count+1)}> Increment</button>
            <button className="btn btn-danger mx-3"onClick={()=>setCount(count-1)}
            disabled={count===0}> Decrement</button>
            <button className="btn btn-secondary mx-3"onClick={()=>setCount(0)}
            disabled={count===0}> Reset</button>
          </div>
    </div>
  )
}

export default Counter
