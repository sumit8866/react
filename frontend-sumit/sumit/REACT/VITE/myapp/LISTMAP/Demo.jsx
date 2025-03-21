import React from 'react';

function Demo() {
    const listProduct = [
        "Laptop",
        "Mixture",
        "Air Conditioner",
        "Television",
        "Mouse",
      ];
    
    return (
        <div>
            <h1 className="headtext">This is Demo Components</h1>
            <ul>
                {
                    listProduct.map((item,ind)=>{
                        return <li key={ind}>{item}</li>
                    })
                }
                <h1>{listProduct.length}</h1>
            </ul>
        </div>
    );
}

export default Demo;