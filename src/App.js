import {useSelector,useDispatch} from "react-redux";
import { plus,minus } from "./actions/actions";
function App() {
  const data= useSelector(item=>item.jogbiyog)
  const dispatch = useDispatch()
  return (
    <>
     <button onClick={()=>{dispatch(plus())}}>+</button>
     <h1>{data}</h1>
     <button onClick={()=>{dispatch(minus())}}>-</button>
    </>
  );
}

export default App;
