import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {

    console.log(`before setState: ${count}`)

    // call setCount twice, to update the counter by two every time we click
    // But still  when setCount is called the second time, count is still equal to 0!
    // Rather than passing a new value into setCount, we can instead pass a callback function.
    // when called inside setCount, will be passed the current state of count.
    setCount((currentCount)=>currentCount+1);
    console.log(`After first Increment: ${count}`)
    
    setCount((currentCount)=>currentCount+1);
    console.log(`after second: ${count}`)
  }

  return <button style={{fontSize:18, height:30}} onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
