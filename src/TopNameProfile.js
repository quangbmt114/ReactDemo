import "./TopNameProfile.css";
import logo1 from '../src/assets/images/ava1.png'
import Profile from './Componet/Profile'
import Objective from "./Componet/Objective";
import Education from "./Componet/Education";
function TopNameProfille() {
    return (
        <div className="Container">
            <h2>Nguyễn Viết Quang</h2>
            <Profile 
                DateName = '15/09/1996'
                Gender='Nam'
                Phone='0336696456'
                Email='Quangnvpk02150@gmail.com'
                Address='Phường Thành Nhất,TP.BMT,DakLak'
            />
            <Objective 
                Tittle ='OBJECTIVE'
                Content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Deserunt nisi officia amet necessitatibus cum a illum sed. 
                Dignissimos non magni maiores a amet repellat maxime,
                 corporis nisi unde eaque rerum!'
            />
            <Education 
                Year_Education='Sep 2013 - Sep 2016'
                Name_Education='FPT University'
                Major_Education='Sofware Engineering'
                GPA_Education='7.8/10'
            />
            <div className="Work-Experience">
                <h3>WORK EXPERIENCIE</h3>
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
            <div className="Projects">
                <h3>PROJECTS</h3>
                <hr></hr>
                <table >
                    <tr  >
                        <th >Customer</th>
                        <td>Azusz</td>
                    </tr>
                    <tr  >
                        <th >Description</th>
                        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </td>
                    </tr>
                    <tr  >
                        <th  >Team Size</th>  
                        <td>3</td>
                    </tr>
                    <tr  >
                        <th  >My Position</th>
                        <td>Developer</td>
                    </tr>
                    <tr>
                        <th>Công nghệ sử dụng</th>
                        <td className="ListTechUse">
                                <li>C,Source Tree & Git</li>
                                <li>Twitter SDK</li>
                                <li>Facebook SDK</li>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default TopNameProfille