import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Userpage from './Navbar';
import Loginsignup from './Loginsignup';
import { url } from './url.js';
import { userurl } from './userurl.js';

import { useState, useEffect, useRef } from "react";

var student = [];
var times = ["7:00-9:00AM", "9:00-12:00PM", "12:00-2:00PM", "2:00-4:00PM", "4:00-6:00PM", "6:00-8:00PM", "8:00-10:00PM"];
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

var logged = localStorage.getItem("logged");
var cpcidstorage = localStorage.getItem('cpcid');
if (cpcidstorage == "" || cpcidstorage == null) {

}


var addate;
function Profile() {






    var [student, setdata] = useState([]);
    var [coursedesc, setcoursedesc] = useState("");
    var [feesdue, setfeesdue] = useState("");
    var [studentcourse, setstudentcourse] = useState("");
    var [address, setaddress] = useState("");
    var [name, setname] = useState("");
    var [email, setemail] = useState("");
    var [phone, setphone] = useState("");
    var [course, setcourse] = useState("");
    var [password, setpass] = useState("");



    const dataFetchedRef = useRef(false);




    const user = { cpcid: cpcidstorage };
    //    const user={cpcid:"cpc12345"};

    useEffect(() => {
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;

        fetch(url+"/loginid", {
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
                if (data != null) {
                    setdata(data);
                    console.log(data);
                    setbatch(data.batch);
                    showcourses(data.course);
                    showfeesdue(data.feedetails);
                    


                }
                // console.log(data[0].feedetailstransactionid);
                // student=data;
                // console.log(data.batch);
                // setFilteredList(data);
                // setStudents(data);
            })
            .catch((err) => console.log(err));


        function showcourses(c){

            fetch(url+"/showcourses", {
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
                  // console.log(data);
                  setcoursedesc("No Description Found");

          for(var i=0;i<data.length;i++){
              console.log(data[i].coursename+student.course);
              if(data[i].coursename==c){
                  setcoursedesc(data[i].coursedescription);
              }
              else{
              }
          }
                })
                .catch((err) => console.log(err));
            }


            function showfeesdue(a){
                setfeesdue("No Fees Due");
var c=0;
                for(var i=0;i<a.length;i++){
if(a[i].status=='0'|| a[i].status==0){
    c++;
}
                }
                if(c!=0){

                    setfeesdue( c+" Months Due");
                }

            }
        // });
    }, []);


    var showbatch = "";
    function setbatch(bat) {
        // console.log(bat+"hi");
        for (var i = 0; i < bat.length; i++) {
            var s1 = bat[i][0];
            var s2 = bat[i][1];
            var s3 = keys.indexOf(s2);
            console.log(s2 + " " + s3);
            showbatch = showbatch + days[s1 - 1] + " : " + times[s3] + "<hr/>"


        }
        document.getElementById("showbatch").innerHTML = showbatch;
    }

    function getcursor(oldcpcid) {

        //  alert("hi: "+oldcpcid);
        const user = { address: address, name: name, email: email, course: course, password: password, phone: phone, name: name, oldcpcid: oldcpcid };
        console.log(user);

        var studentbatch = [];
        fetch(url+"/updatestudentuserpage", {
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
                // window.location.replace("")
                alert("User Updated");
    //   window.location.replace("http://localhost:3001/Profile");
    window.location.replace(userurl+"/Profile");


            })
            .catch(err => console.log(err));








            
            

    }


    return (

        <>
            <div id="profile">



                <div>
                    <section className="heading-page header-text" id="top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h6>Hey</h6>
                                    <h2>Welcome To Your Profile.</h2>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="meetings-page" id="meetings">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="meeting-single-item">
                                                <div className="thumb">
                                                    <div className="price">
                                                        <span>Fees:{student.amount}</span>
                                                    </div>
                                                    <div className="date">
                                                        <h6>Cpcid <span>{student.cpcid}</span></h6>
                                                    </div>
                                                    <a href="meeting-details.html"><img src="assets/images/single-meeting.jpg" alt /></a>
                                                </div>
                                                <div className="down-content">
                                                    <a href="meeting-details.html"><h4>Hey {student.name}</h4></a>
                                                    <p>{student.address}</p>
                                                    <p className="description">
                                                        <h3>
                                                            {/* Course name */}
                                                            {student.course}
                                                        </h3>
                                                        <br></br>
                                                        {/* This is an edu meeting HTML CSS template provided by <a href="https://templatemo.com/" target="_blank" rel="nofollow">TemplateMo website</a>. This is a Bootstrap v5.1.3 layout. If you need more free website templates like this one, please visit our website TemplateMo. Please tell your friends about our website. Thank you. If you want to get the latest collection of HTML CSS templates for your websites, you may visit <a rel="nofollow" href="https://www.toocss.com/" target="_blank">Too CSS website</a>. If you need a working contact form script, please visit <a href="https://templatemo.com/contact" target="_parent">our contact page</a> for more info.
                                                        <br /><br />You are allowed to use this edu meeting CSS template for your school or university or business. You can feel free to modify or edit this layout. You are not allowed to redistribute the template ZIP file on any other template website. Please contact us for more information. */}
                                                    {coursedesc}
                                                    </p>
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <div className="hours">
                                                                <h5>Batch</h5>
                                                                {/* <p>Monday - Friday: 07:00 AM - 13:00 PM<br />Saturday- Sunday: 09:00 AM - 15:00 PM</p> */}
                                                                <div id="showbatch"></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="location">
                                                                <h5>Email Id</h5>
                                                                <p>{student.email}</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="book now">
                                                                <h5>Phone Number</h5>
                                                                <p>{student.phone}</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="share">
                                                                <h5>Fees Month Due:</h5>
                                                                {feesdue}
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div style={{ float: "right" }} className="share">
                                                                <h5>Admission Date:</h5>
                                                                {student.createdAt != undefined?(
                                                                    <p>{student.createdAt.slice(0, 10)}</p>

                                                                ):(
                                                                    <p>no date</p>

                                                                )
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="main-button-red">
                                                <a style={{ color: "white" }} href="#updatebox" onClick={updateorshow}>Update Your Profile</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                        </div>

                    </section>
          

                    <section className="contact-us" >
                        <div style={{ display: "none" }} id="updatebox" className="container">
                            <div className="row" >
                                <div className="col-lg-9 align-self-center">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <form id="contact" action method="post">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <h2>Update Your Details Here</h2>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        Email Id
                                                        <fieldset>
                                                            <input name="email" onChange={(e) => setemail(e.target.value)} type="text" id="email"   pattern="[^ @]*@[^ @]*" placeholder={student.email}  />
                                                        </fieldset>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        Phone Number
                                                        <fieldset>
                                                            <input  type="number" onChange={(e) => setphone(e.target.value)} id="subject" placeholder={student.phone}  />
                                                        </fieldset>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        Password
                                                        <fieldset>
                                                            <input  type="text" id="subject" onChange={(e) => setpass(e.target.value)} placeholder={student.password}  />
                                                        </fieldset>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        Address
                                                        <fieldset>
                                                            <textarea name="message" onChange={(e) => setaddress(e.target.value)} type="text"  className="form-control" id="message" placeholder={student.address}  />
                                                        </fieldset>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <fieldset>
                                                            <button onClick={() => getcursor(student.cpcid)} className="button">Update Profile</button>
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
                                                <h6>Name</h6>
                                                <span>{student.name}</span>
                                            </li>
                                            <br></br>

                                            <li>
                                                <h6>Cpcid</h6>
                                                {/* <span>info@meeting.edu</span> */}
                                                <span>{student.cpcid}</span>

                                            </li>
                                            <br></br>

                                            <li>
                                                <h6>Course</h6>
                                                {/* <span>Rio de Janeiro - RJ, 22795-008, Brazil</span> */}
                                                <span>{student.course}</span>

                                            </li>
                                            <br></br>
                                            <li>
                                                <h6>Fees</h6>
                                                {/* <span>www.meeting.edu</span> */}
                                                <span>{student.amount}</span>

                                            </li>
                                            <br></br>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                                {/* <div className="footer">
      <p>Copyright © 2022 Edu Meeting Co., Ltd. All Rights Reserved. 
        <br />Design: <a href="https://templatemo.com" target="_parent" title="free css templates">TemplateMo</a></p>
    </div> */}
                    </section>
                        
                </div>

            </div>

        </>
    )
};
function updateorshow() {
    document.getElementById("updatebox").style.display = "block";
}

export default Profile;