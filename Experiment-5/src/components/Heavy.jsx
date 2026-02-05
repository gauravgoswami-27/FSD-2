import React from 'react';

const HeavyComponent = ()=>{
    const heavy =()=>{
        for(let i=0;i<10000000;i++){
            continue;
        }
    }
    heavy()
    heavy()
    heavy()
    return(
        <>
        
        </>
    )
}

export default HeavyComponent;