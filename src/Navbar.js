import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Aboutcourse from './Aboutcourse';
import Contact from './Contact';
import Courses from './Courses';
import Loginsignup from './Loginsignup';
import Mainpage from './Mainpage';
import Profile from './Profile';

function Navbar() {
  fetch("http://localhost:3000/lastcpcid", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
        // alert("success");
        localStorage.setItem("lastcpcid",data.cpcid);
  localStorage.setItem("lastcourseid",data.courseid);
  localStorage.setItem("lastqid",data.qid);

      })
      .catch((err) => console.log(err));

    return (
  <Router>

       <div classname="full body">
  {/* Sub Header */}
  <div className="sub-header">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-sm-8">
          <div className="left-content">
          </div>
        </div>
        <div className="col-lg-4 col-sm-4">
          <div className="right-icons">
            <ul>
              <li><a href="#"><i className="fa fa-facebook" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" /></a></li>
              <li><a href="#"><i className="fa fa-behance" /></a></li>
              <li><a href="#"><i className="fa fa-linkedin" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ***** Header Area Start ***** */}

  <header className="header-area header-sticky ">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav">
            {/* ***** Logo Start ***** */}
            <a href="index.html" className="logo">
              CPC Education
            </a>
            {/* ***** Logo End ***** */}
            {/* ***** Menu Start ***** */}
            <ul className="nav" id="sbtn">
              <li className="scroll-to-section">
              <Link to="/Mainpage" >HOME</Link>

              </li>
              <li className="scroll-to-section">
              <Link to="/Courses" >Courses</Link>
                
                </li> 
              

              <li className="scroll-to-section">
              <Link to="/Contact"  >Contact</Link>
                </li> 

              <li>
                {logged ==0 ? (
              <Link style={{color:"aqua"}} to="/Loginsignup" >login / signup</Link>

                ): (
              <Link style={{color:"#F53030"}} onClick={logout} to="/" >logout</Link>

                )}

              </li>


              <li className="scroll-to-section">
              {logged ==0 ? (
            <div style={{display:"none"}}></div>                  
                ): (
              <Link to="/Profile" >Profile</Link>


                )}

              
              </li>
             
             

            </ul> 
            <div onClick={showbutton} className="menu-trigger">
              <span>Menu</span>
            </div>
            {/* ***** Menu End ***** */}
          </nav>
        </div>
      </div>
    </div>
  </header>
            
  {/* ***** Header Area End ***** */}
  {/* ***** Main Banner Area Start ***** */}

</div>

<Routes>
                 <Route exact path='/Mainpage' element={< Mainpage />}></Route>
                 <Route exact path='/' element={< Mainpage />}></Route>
                 <Route exact path='/Profile' element={< Profile />}></Route>
                 <Route exact path='/Loginsignup' element={< Loginsignup />}></Route>
                 <Route exact path='/Courses' element={< Courses />}></Route>
                 <Route exact path='/Contact' element={< Contact />}></Route>
                 <Route exact path='/Aboutcourse' element={< Aboutcourse />}></Route>
          </Routes>
            </Router>       
 
    );
  }
  var sbtn=0;
  function showbutton(){
      if(sbtn==0){
            sbtn=1;
          document.getElementById("sbtn").style.display="block";
      }
      else{
          sbtn=0;
          document.getElementById("sbtn").style.display="none";

      }
  }
  function logout(){
    localStorage.setItem("logged",0);
    localStorage.setItem("cpcid","");
    // window.location.replace();
    window.location.replace("http://localhost:3001");


  }
  var logged=localStorage.getItem("logged");
  // alert(logged);
  if(logged==null){

    localStorage.setItem("logged",0);
  }
  
  export default Navbar;