import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Userpage from './Navbar';
import Loginsignup from './Loginsignup';

import { useState, useEffect, useRef } from "react";

var student = [];
var times = ["7:00-9:00AM", "9:00-12:00PM", "12:00-2:00PM", "2:00-4:00PM", "4:00-6:00PM", "6:00-8:00PM", "8:00-10:00PM"];
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

var logged=localStorage.getItem("logged");
var cpcidstorage= localStorage.getItem('cpcid');
if(cpcidstorage=="" || cpcidstorage==null){
  
}
function Mainpage() {

  var [student, setdata] = useState([]);
  var [address, setaddress] = useState("");
  var [name, setname] = useState("");
  var [email, setemail] = useState("");
  var [phone, setphone] = useState("");
  var [course, setcourse] = useState("");
  var [password, setpass] = useState("");

 

  const dataFetchedRef = useRef(false);



  var [noofstudents, setnoofstudents] = useState("");
  var [noofcourse, setnoofcourse] = useState("");
  var [noofcertificates, setnoofcertificates] = useState("");
    

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
        fetch("http://localhost:3000/showadmin", {
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



  
  
    
  const user = { cpcid: cpcidstorage };
  //    const user={cpcid:"cpc12345"};

  useEffect(() => {
      if (dataFetchedRef.current) return;
      dataFetchedRef.current = true;

      fetch("http://localhost:3000/loginid", {
          method: "POST",
          headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Headers": "Content-Type",
              "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
              "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(user)
      })
          .then((res) => res.json())
          .then((data) => {
              // console.log(data[0].feedetailstransactionid);
              // student=data;
              // setdata(data);
              // console.log(data.batch);
              // setbatch(data.batch);
              // console.log(data);
              // setFilteredList(data);
              // setStudents(data);
              if( data !=null){
                setdata(data);
                console.log(data);

            }
          })
          .catch((err) => console.log(err));
      // });







    
    fetch("http://localhost:3000/showstudentfees", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Origin": "*",
    },
    // body: JSON.stringify(user)
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data[0].feedetailstransactionid);

    //   setFilteredList(data);
    //   setStudents(data);
    console.log(data.length);
    
    localStorage.setItem("noofstudent",data.length-1);
    var lastcpcid=localStorage.getItem("lastcpcid");
  var lastno=parseInt( lastcpcid.slice(5,lastcpcid.length));

    setnoofstudents(lastno);
    var lastcpcid=localStorage.getItem("lastcourseid");
    var lastno=parseInt( lastcpcid.slice(4,lastcpcid.length));
  
      setnoofcourse(lastno);
  

    })
    .catch((err) => console.log(err));



  }, []);



  return (
    <>

      <section className="section main-banner" id="top" data-section="section1">
    <video autoPlay muted loop id="bg-video">
      <source src="assets/images/course-video.mp4" type="video/mp4" />
    </video>
    <div className="video-overlay header-text">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="caption">
              {/* <h6>Hey Students</h6> */}
              <h2>Welcome to CPC Education</h2>
              {/* <p>This is an edu meeting HTML CSS template provided by <a rel="nofollow" href="https://templatemo.com/page/1" target="_blank">TemplateMo website</a>. This is a Bootstrap v5.1.3 layout. The video background is taken from Pexels website, a group of young people by <a rel="nofollow" href="https://www.pexels.com/@pressmaster" target="_blank">Pressmaster</a>.</p> */}
              <p>{tagline}</p>
              <div className="main-button-red">
                {logged==0 ?(
                <div className="scroll-to-section"><a href="/Loginsignup">Register Here</a></div>

                ) :(
                <div style={{color:"white"}} className="scroll-to-section "><a >Hey {student.name}</a></div>

                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* ***** Main Banner Area End ***** */}
  {/* <section className="services"> */}
    {/* <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="owl-service-item owl-carousel">
            <div className="item">
              <div className="icon">
                <img src="assets/images/service-icon-01.png" alt />
              </div>
              <div className="down-content">
                <h4>Best Education</h4>
                <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="assets/images/service-icon-02.png" alt />
              </div>
              <div className="down-content">
                <h4>Best Teachers</h4>
                <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="assets/images/service-icon-03.png" alt />
              </div>
              <div className="down-content">
                <h4>Best Students</h4>
                <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="assets/images/service-icon-02.png" alt />
              </div>
              <div className="down-content">
                <h4>Online Meeting</h4>
                <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="assets/images/service-icon-03.png" alt />
              </div>
              <div className="down-content">
                <h4>Best Networking</h4>
                <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
  {/* </section> */}
  <section className="our-facts">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-12">
              <h2> Few Facts About CPC Education</h2>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-12">
                  <div className="count-area-content">
                    <div className="count-digit">{noofstudents}</div>
                    <div className="count-title">Students</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="count-area-content">
                    <div className="count-digit">23</div>
                    <div className="count-title">Seminars</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-12">
                  <div className="count-area-content new-students">
                    <div className="count-digit">{noofcourse}</div>
                    <div className="count-title">Courses Provided</div>
                  </div>
                </div> 
                <div className="col-12">
                  <div className="count-area-content">
                    <div className="count-digit">32</div>
                    <div className="count-title">Events</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div className="col-lg-6 align-self-center">
          <div className="video">
            <a href="https://www.youtube.com/watch?v=HndV87XpkWg" target="_blank"><img src="assets/images/play-icon.png" alt /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
 

  <section className="upcoming-meetings" id="meetings">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-heading">
            <h2>Our Services</h2>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-4">
              <div className="meeting-item">
                <div className="thumb">
                  <div className="price">
                  </div>
                  <a href="meeting-details.html"><img src="assets/images/meeting-01.jpg" alt="New Lecturer Meeting" /></a>
                </div>
                <div className="down-content  ">
                  
                                    {/* <!-- Button trigger modal --> */}

                          <div class="main-button-red text-light ">
                          <center><a data-toggle="modal"  data-target="#exampleModalCenter">Online Class</a></center>
                          </div>
                          

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Online Class</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <br/>C & C++<br />Java <br/> Android <br/> PHP
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

                  {/* <br/>C & C++<br />Java <br/> Android <br/> PHP */}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="meeting-item">
                <div className="thumb">
                  <div className="price">
                  </div>
                  <a href="meeting-details.html"><img src="assets/images/meeting-02.jpg" alt="Online Teaching" /></a>
                </div>
                <div className="down-content">



                <div class="main-button-red text-light ">
                        <center>  <a data-toggle="modal" style={{}} data-target="#exampleModalCenter1">Final Year Projects</a></center>
                </div>
                          

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModalCenter1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Final Year Projects</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <br/>For BTech Students<br />For Diploma Students<br/>For MCA Students<br/>For BCA Students<br/>For BSC(Comp. Sc.) Students<br/>For MSC(Comp. Sc.) Students
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>



                  {/* <a href="meeting-details.html"><h4></h4></a> */}
                  {/* <br/>For BTech Students<br />For Diploma Students<br/>For MCA Students<br/>For BCA Students<br/>For BSC(Comp. Sc.) Students<br/>For MSC(Comp. Sc.) Students */}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="meeting-item">
                <div className="thumb">
                  <div className="price">
                  </div>
                  <a href="meeting-details.html"><img src="assets/images/meeting-03.jpg" alt="Higher Education" /></a>
                </div>
                <div className="down-content">

                <div class="main-button-red text-light ">
                         <center> <a data-toggle="modal" data-target="#exampleModalCenter2">Website Designing</a> </center>
                          </div>
                          

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Website Designing</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      {/* <br/>For BTech Students<br />For Diploma Students<br/>For MCA Students<br/>For BCA Students<br/>For BSC(Comp. Sc.) Students<br/>For MSC(Comp. Sc.) Students */}
      <br/>Using HTML<br />Using CSS<br/>Using JavaScript<br/>Using Bootstrap<br/>Using AngularJS
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


                  {/* <a href="meeting-details.html"><h4 >Website Designing</h4></a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="meeting-item">
                <div className="thumb">
                  <div className="price">
                  </div>
                  <a href="meeting-details.html"><img src="assets/images/meeting-04.jpg" alt="Student Training" /></a>
                </div>
                <div className="down-content">


                <div class="main-button-red text-light ">
                         <center> <a data-toggle="modal" data-target="#exampleModalCenter3">Website Development</a> </center>
                          </div>
                          

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModalCenter3" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Website Development</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      {/* <br/>For BTech Students<br />For Diploma Students<br/>For MCA Students<br/>For BCA Students<br/>For BSC(Comp. Sc.) Students<br/>For MSC(Comp. Sc.) Students */}
      {/* <br/>Using HTML<br />Using CSS<br/>Using JavaScript<br/>Using Bootstrap<br/>Using AngularJS */}
      <br/>Using PHP<br />Using J2EE<br/>Upload Website into server
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
                 
                  {/* <a href="meeting-details.html"><h4></h4></a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="meeting-item">
                <div className="thumb">
                  <div className="price">
                  </div>
                  <a href="meeting-details.html"><img src="assets/images/meeting-04.jpg" alt="Student Training" /></a>
                </div>
                <div className="down-content">

                <div class="main-button-red text-light ">
                         <center> <a data-toggle="modal" data-target="#exampleModalCenter4">App Development </a> </center>
                          </div>
                          

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModalCenter4" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">App Development</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      {/* <br/>For BTech Students<br />For Diploma Students<br/>For MCA Students<br/>For BCA Students<br/>For BSC(Comp. Sc.) Students<br/>For MSC(Comp. Sc.) Students */}
      {/* <br/>Using HTML<br />Using CSS<br/>Using JavaScript<br/>Using Bootstrap<br/>Using AngularJS */}
      {/* <br/>Using PHP<br />Using J2EE<br/>Upload Website into server */}
      <br/>Android App<br />Design Using XML<br/>Coding With Java<br/>Upload App into Google(PlayStore)
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
                  
                  {/* <a href="meeting-details.html"><h4></h4></a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="meeting-item">
                <div className="thumb">
                  <div className="price">
                  </div>
                  <a href="meeting-details.html"><img src="assets/images/meeting-04.jpg" alt="Student Training" /></a>
                </div>
                <div className="down-content">

                <div class="main-button-red text-light ">
                         <center> <a data-toggle="modal" data-target="#exampleModalCenter5">Certificate Course</a> </center>
                          </div>
                          

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModalCenter5" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Certificate Course</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      {/* <br/>For BTech Students<br />For Diploma Students<br/>For MCA Students<br/>For BCA Students<br/>For BSC(Comp. Sc.) Students<br/>For MSC(Comp. Sc.) Students */}
      {/* <br/>Using HTML<br />Using CSS<br/>Using JavaScript<br/>Using Bootstrap<br/>Using AngularJS */}
      {/* <br/>Using PHP<br />Using J2EE<br/>Upload Website into server */}
      {/* <br/>Android App<br />Design Using XML<br/>Coding With Java<br/>Upload App into Google(PlayStore) */}
      <br/>For 1 Month<br />For 3 Months<br/>For 6 Months
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
                  
                  {/* <a href="meeting-details.html"><h4>Certificate Course</h4></a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="contact-us" id="contactnow">
    <div className="footer">
      {/* <p>Copyright © 2022 Edu Meeting Co., Ltd. All Rights Reserved. 
        <br />Design: <a href="https://templatemo.com" target="_parent" title="free css templates">TemplateMo</a></p> */}
        <p>{footer}</p>
    </div>
  </section>
    </>
  );
}
// localStorage.setItem("logged",1);

export default Mainpage;
