import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const Hooks = () => {

    // useMemo Hook
    const [count, setCount] = useState(0)
    const  usememo = useMemo(()=>{

        return count*5+5*2+2
        
    },[count]
)
const  multi = useMemo(()=>{

        return usememo*10
    },[count]
)

    // useCallback Hook
    
    const [count1 , setCount1] = useState(0)

    const handleChange = useCallback(()=>{
        setCount1(count1+1)
    },[count1])

    // useref Hook
    
    const [count2, setCount2] = useState(0)

    const data =useRef(0)
    useEffect(()=>{
        data.current = count2
    }
    )

    
  return (
    <>

    <h1>{count}</h1>
    <h1>{usememo}</h1>
    <h1>{multi}</h1>
    <button onClick={()=> setCount(count+1)} >click me</button>

  {/* usecallback */}

<h1>{count1}</h1>
<button onClick={handleChange} >click me</button>

  {/* useref */}
  <h1>{data.current}</h1>
        <h1>{count2}</h1>
        <button onClick={()=> setCount2(count2 + 1)}>click me</button>
    </>
  )
}

export default Hooks