
import { useCounterStore } from "../store/counterStore";

function CounterValue(){

     const count=useCounterStore((state)=>state.count)

     return(
          <div>
               <h2>Count is :{count}</h2>
          </div>
     )
}


export default CounterValue