import { useContext } from "react"
import { ThemeContext } from "./App"
function BodyContent() {
    
    const theme = useContext(ThemeContext)
    console.log(theme);
    return(
        
        <p className={theme}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptates rerum maxime accusamus labore tempora magni quibusdam unde eius aperiam, necessitatibus, pariatur accusantium a magnam dolorem id iusto temporibus consectetur.
        </p>
    )
}
export default BodyContent