import { useReducer } from "react"
import reducer,{initState} from "./reducer"
import { setJob,addJob,deleteJob } from "./actions"
//initState
//action
 // useReducer
//Dispatch 
function Content() {
        const [state,dispatch] = useReducer(reducer,initState)
        const {job,jobs}=state
        const handleSubmit =()=>{
            dispatch(addJob(job))
            dispatch(setJob(''))
       }
     return(
        <div>
            <h3>To do</h3>
            <input
            value={job}
                placeholder="Enter to do..."
                onChange={e=>{
                    dispatch(setJob(e.target.value))
                }}
            />
            <button onClick={handleSubmit}>ADD</button>
            <ul>
            {jobs.map((job,index)=>(
                    <li key={index}>{job}
                    <span onClick={()=>dispatch(deleteJob(index))}>
                    &times;</span>
                    </li>
            ))}
            </ul>
         </div>
     )
}
export default Content