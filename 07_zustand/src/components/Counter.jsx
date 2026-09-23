
// import { useCounterStore } from "../store/counterStore";

// function Counter(){
   
//     const {count, increase,descrease,reset}=useCounterStore()

//     return (
//         <div>
//             <h2> Counter is :{count}</h2>
//             <button onClick={increase}>+</button>
//             <button onClick={descrease}>-</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     )
// }

// export default Counter



import { useCounterStore } from "../store/counterStore";

function Counter(){


    const count=useCounterStore((state)=>state.count)
    const increase=useCounterStore((state)=>state.increase)
    const descrease=useCounterStore((state)=>state.descrease)
    const reset =useCounterStore((state)=>state.reset)

    return(
        <div>
          <h1>Counter is : {count}</h1>

          <button onClick={increase}>+</button>
          <button onClick={descrease}>-</button>
          <button onClick={reset}>reset</button>
        </div>
    )
}


export default Counter;