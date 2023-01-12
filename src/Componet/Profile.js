import logo1 from '../assets/images/ava1.png'
function Profile(props) {
    return(
        <div className="body">
                <div className="NameTittleProfile">
                    <p><b>Date of birth</b></p>
                    <p><b>Gender</b></p>
                    <p><b>Phone</b></p>
                    <p><b>Email</b></p>
                    <p><b>Address</b></p>
                </div>
                <div className="NameProfile">
                    <p>{props.DateName}</p>
                    <p>{props.Gender}</p>
                    <p>{props.Phone}</p>
                    <p>{props.Email}</p>
                    <p>{props.Address}</p>
                </div>
                <img className="imgProfile" src={logo1} />
            </div>
    )   
}
export default Profile