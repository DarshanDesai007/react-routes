import React, { useState } from 'react';
import { Jwt } from 'jsonwebtoken';
function Example() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    const mycount =()=>{
        if(count <= 9){
            setCount(count +1);
            localStorage.setItem("count",count)

        }
        else
        {
            alert("limt are expried")
        }
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={ mycount }>
                Click me
            </button>
        </div>
    );
}

export default Example;