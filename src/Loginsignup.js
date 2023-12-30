import Navbar from './Navbar';
import Mainpage from './Mainpage';
import React, { useState, useEffect } from 'react';
import { url } from './url.js';
import { userurl } from './userurl.js';

function Loginsignup()
{
  const[cpcid,setcpcid]=useState('')
    const[cpcid1,setcpcid1]=useState('')
    const[pass,setpass]=useState('')
    const[address,setaddress]=useState('')
    const[phone,setphone]=useState('')
    const[name,setname]=useState('')

    const[pass1,setpassword]=useState('')


    var [tagline, settagline] = useState("");
    var [addressadmin, setaddressadmin] = useState("");
    const [phn1, setphn1] = useState("");
    var [phn2, setphn2] = useState("");
    var [phn3, setphn3] = useState("");
    var [emailadmin, setemailadmin] = useState("");
    var [footer, setfooter] = useState("");
    var [timing, settiming] = useState("");
    var [adminid, setadminid] = useState("");

    useEffect(()=>{
        fetch(url+"/showadmin", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Headers": "Content-Type",
              "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
              "Access-Control-Allow-Origin": "*"
            },
            // body: JSON.stringify(user)
          })
            .then(res => res.json())
            .then(data => {
      
             settagline(data.tagline);
             setaddressadmin(data.address);
             setphn1(data.phn1);
             setphn2(data.phn2);
             setphn3(data.phn3);
             setemailadmin(data.email);
             setfooter(data.footer);
             settiming(data.timing);
             setadminid(data.adminid);
              
            })
            .catch(err => console.log(err));
        
    
    }, [])




    const clickme = (e) => {
      // alert(name+phone);
  e.preventDefault();
          const user = { cpcid: cpcid, password: pass };
          // const user={username:"sayandip paul",password:"12345"};
      // console.log("hi"+user.username);
      console.log(user);

      fetch(url+"/loginuserpage", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(user)
      })
        .then(res => res.json())
        .then(data => {
  
          // window.location.replace("login.js");
          // alert("success");
          console.log(data);
          if(data.length>0){

          
          if(data[0].password==pass){
      //         if(cpcid=="cpcbelgharia56"){
      //         localStorage.setItem("sora",1);

      //         }
      //         else{
      //         localStorage.setItem("sora",0);

      //         }
      //         // alert("login successful");
      //         // const root = ReactDOM.createRoot(document.getElementById('root'));
      //         // const navigate=useNavigate()
      //         // navigate('/App')
      //         // window.location.replace("index2.js");
              localStorage.setItem("logged",1);
    localStorage.setItem("cpcid",cpcid);

      //       localStorage.setItem("cpcid",cpcid);


      //         // window.reload();
      //         // location.reload();
      // window.location.reload();
      alert("Welcome "+ data[0].name);
      // window.location.replace("http://localhost:3001");
      window.location.replace(userurl);



          }
          else{
              alert("Wrong Credentials");
              localStorage.setItem("logged",0);

              // localStorage.setItem("app",0);


          }
        }
        else{
          alert("User Not Registered");
          localStorage.setItem("logged",0);

          // localStorage.setItem("app",0);


      }
        })
        .catch(err => console.log(err));
  
    }


    const register = (e) => {
      // alert(name+phone);
  e.preventDefault();
  const user = { cpcid: cpcid1, password: pass1,address:address,phone:phone,name:name };

  fetch(url+"/registerstudentuserpage", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
      .then(data => {
    //       alert("hi");

    //     // window.location.replace("login.js");
    //     // alert("success");
            console.log(data);           
             if(data==0){
            alert("User already exists or wrong cpcid");
    //         // const root = ReactDOM.createRoot(document.getElementById('root'));
    //         // const navigate=useNavigate()
    //         // navigate('/App')
    //         // window.location.replace("index2.js");
    localStorage.setItem("logged",0);
              

        }
        else{
            alert("Registration successful ");
      //       localStorage.setItem("app",1);
      //       localStorage.setItem("cpcid",cpcid);

      //       localStorage.setItem("sora",0);

      //         // window.reload();
      //         // location.reload();
      // window.location.reload();
      localStorage.setItem("logged",1);
      localStorage.setItem("cpcid",cpcid1);

      // window.location.replace("http://localhost:3001");
      window.location.replace(userurl);



        }
      })
      .catch(err => console.log(err));

    }
  
    return (
        <>
        <div>
        <section className="contact-us" id="contact">
    <div id="register" className="container" >
      <div className="row">
        <div className="col-lg-9 align-self-center">
          <div className="row">
            <div className="col-lg-12">
              <form id="contact" onSubmit={register}>
                <div className="row">
                  <div className="col-lg-12">
                    <h2>New Admission? contact to the sir for getting CPCID</h2>
                  </div>
                  <div className="col-lg-4">
                    <fieldset>
                      <input onChange={(e) => setcpcid1(e.target.value)}  type="text" id="cpcid" placeholder="Your Provided CPCID" required />
                    </fieldset>
                  </div>
                  {/* <div className="col-lg-6">
                    <fieldset>
                      <input onChange={(e) => setname(e.target.value)}  type="text" id="name"  placeholder="Your Full Name" required />
                    </fieldset>
                  </div> */}
                  <div className="col-lg-4">
                    <fieldset>
                      <input onChange={(e) => setphone(e.target.value)} type="number" id="phone" placeholder="Enter Phone Number" required />
                    </fieldset>
                  </div>
                  <div className="col-lg-4">
                    <fieldset>
                      <input onChange={(e) => setpassword(e.target.value)}  type="password" id="password" placeholder="Set Your Password" required />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <textarea onChange={(e) => setaddress(e.target.value)} type="text" className="form-control" id="address" placeholder="Enter Your Permanent Address" required defaultValue={""} />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <button type="submit" id="form-submit" className="button">ENROLL NOW</button>
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <button type="button"  onClick={loginorsignup} className="button bg-primary">Already A Student ? Login Now.</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="right-info">
            <ul>
              <li>
                <h6>If You did not contact then contact here....</h6>
                <span>Phone:<span>{phn1} </span>
                <span>{phn2} </span>
                <span>{phn3} </span>
</span>
                <span>Email:
                <span>{emailadmin}</span>

                </span>
              </li>
              {/* <li>
                <h2>If You contacted....</h2>
                <h5>First Step:Check Your E-Mail Inbox.</h5>
                <h5>Second Step:Check Your Spam also.</h5>
                <h5>Third Step:From Mail Inbox Get Your Cpcid and Course details.</h5>
                <h5>Fourth Step:Enter the cpcid Here.</h5>
                <h5>Fifth Step:Fill Up other details and setup your Password.</h5>
                <h5>sixth Step:Register Here If You Face any Problem then contact to above number.</h5>


              </li> */}
             </ul>
          </div>
        </div>
      </div>
    </div>


    <div id="login"className="container" style={{display: "none"}} >
      <div className="row">
        <div className="col-lg-9 align-self-center">
          <div className="row">
            <div className="col-lg-12">
              <form onSubmit={clickme} id="contact" >
                <div className="row">
                  <div className="col-lg-12">
                    <h2>Welcome To CPC education</h2>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <input onChange={(e) => setcpcid(e.target.value)}  type="text" id="cpcid" placeholder="Your Provided CPCID" required />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <input onChange={(e) => setpass(e.target.value)} type="password" id="password" placeholder="Enter Your Password" required />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <button type="submit" id="form-submit" className="button">Login Now</button>
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <button type="button"  onClick={loginorsignup} className="button bg-primary">New Student ? Register Here.</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-3">
          <div className="right-info">
            <ul>
              <li>
                <h6> Phone Number</h6>
                <span>010-020-0340</span>
              </li>
              <li>
                <h6>Email Address</h6>
                <span>info@meeting.edu</span>
              </li>
              <li>
                <h6>Street Address</h6>
                <span>Rio de Janeiro - RJ, 22795-008, Brazil</span>
              </li>
              <li>
                <h6>Website URL</h6>
                <span>www.meeting.edu</span>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
    




    <div className="footer">
      {/* <p>Copyright © 2022 Edu Meeting Co., Ltd. All Rights Reserved. 
        <br />Design: <a href="https://templatemo.com" target="_parent" title="free css templates">TemplateMo</a></p> */}
        <p>{footer}</p>
    </div>
  </section>
        </div>
        </>
    );
}
var los=0;

function loginorsignup(){
if(los==0){
  document.getElementById("register").style.display="none";
  document.getElementById("login").style.display="block";
  los=1;
}
else{
  document.getElementById("register").style.display="block";
  document.getElementById("login").style.display="none";
  los=0;
}
}
// localStorage.setItem("logged","");


export default Loginsignup;