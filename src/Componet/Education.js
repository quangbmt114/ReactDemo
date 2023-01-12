const Education = (props)=>{
    return(
        <div className="Education">
                <h3>EDUCATION</h3>
                <hr></hr>
                <div className="content-Education">
                    <div className="Year-Education">
                        <p>{props.Year_Education}</p>
                    </div>
                    <div className="content-Year">
                        <b>{props.Name_Education}</b>
                        <p>Major: {props.Major_Education}</p>
                        <p>GPA:{props.GPA_Education}</p>
                    </div>
                </div>
            </div>
    )
}
export default Education