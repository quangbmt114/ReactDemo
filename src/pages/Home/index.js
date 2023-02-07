
import Component from "../../Component/Component";

import './home_content.css'
const Home =(props)=>{
    return(
        <div className="content_home1">
          <Component dataComponent={props.data}  />
        </div>
    )
}
export default Home