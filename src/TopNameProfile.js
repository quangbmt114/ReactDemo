import  "./TopNameProfile.css";
import logo1 from '../src/assets/images/ava1.png'
function TopNameProfille() {
    return(
        <div className="Container">
            <h2>Nguyễn Viết Quang</h2>
            <div className="body">
            <div className="NameTittleProfile">
                    <p><b>Date of birth</b></p>
                    <p><b>Gender</b></p>
                    <p><b>Phone</b></p>
                    <p><b>Email</b></p>
                    <p><b>Address</b></p>
            </div>
            <div className="NameProfile">
                <p>15/09/1996</p>
                <p>Nam</p>
                <p>0336696456</p>
                <p>Quangnvpk02150@fpt.edu.vn</p>
                <p>Phường Thành Nhất, TP.BMT,DakLak</p>
            </div>
            </div>
            <img className="imgProfile" src={logo1}/>
            <div className="Objective">
                    <h3>OBJECTIVE</h3>
                    <hr></hr>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt nisi officia amet necessitatibus cum a illum sed. Dignissimos non magni maiores a amet repellat maxime, corporis nisi unde eaque rerum!</p>
            </div>
            <div className="Education">
                    <h3>EDUCATION</h3>
                    <hr></hr>
                    <div className="content-Education">
                        <div className="Year-Education">
                                <p>Sep 2013 - Sep 2016</p>
                        </div>
                        <div className="content-Year">
                            <b>FPT University</b>
                            <p>Major:Sofware Engineering</p>
                           <p>GPA:7.8/10</p>
                        </div>
                    </div>
                     </div>
                     <div className="Work-Experience">
                    <h3>EDUCATION</h3>
                    <hr></hr>
                    <div className="content-Work-Experience">
                        <div className="Year-Work-Experience">
                                <p>Nov 2016-Present</p>
                        </div>
                        <div className="content-Year">
                            <b>HPB JSC</b>
                            <p>FullStack Developer</p>
                           <ul>
                            <li>Web/App developer</li>
                            <li>Marketing-Content</li>
                           </ul>
                        </div>
                    </div>
                     </div>
           </div>
    )
}
export default TopNameProfille