
import { useCounterStore } from "../store/counterStore";


function CounterButton(){

  const increase =useCounterStore((state)=>state.increase);
  const descrease=useCounterStore((state)=>state.descrease);

  return(
    <div>
      <button onClick={increase}>+</button>
      <button onClick={descrease}>-</button>
    </div>
  )

}

export default CounterButton