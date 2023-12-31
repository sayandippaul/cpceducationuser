import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Userpage from "./Navbar";
import Loginsignup from "./Loginsignup";
import { url } from './url.js';
import { userurl } from './userurl.js';


import { useState, useEffect, useRef } from "react";

function Aboutcourse() {
    function enrollcourse() {
        updateorshow();
    // document.getElementById("focusname").focus();
    // document.getElementById("focusname").focus({ focusVisible: true });

    }

    var [course, setdata] = useState([]);
    var [name, setname] = useState("");
    var [email, setemail] = useState("");
    var [phone, setphone] = useState("");

    function getcursor(cid, cname, catavalue, cfees) {
    
            const admission = {
    
                coursename: cname,
                studentname: name,
                email: email,
                phone: phone,
                coursecatagory: catavalue,
                coursefees: cfees,
                courseid: cid,
            };
            console.log(admission);
            // var  text = { username: name, email: email, month: month,amount:amount,batch:batch };
      
            fetch(url+"/Addadmission", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Headers": "Content-Type",
                    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify(admission),
            })
                .then((res) => res.json())
                .then((data) => {
                    // window.location.replace("login.js");
                    // alert(data);
                    if (data!= 0) {
                        alert("You Have Registered This course.Check Email for Approval. ");
                        // window.location.href = userurl;
          window.location.replace(userurl);
                        
                    } else {
                        alert("Another course already exists with this email id.");
                    }
                    // alert("success");
                })
                .catch((err) => console.log(err));
        
    
    }
    

    const dataFetchedRef = useRef(false);

    //    const user={cpcid:"cpc12345"};

    useEffect(() => {
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
        var courseid = localStorage.getItem("courseid");
        const user = { courseid: courseid };

        if (courseid != 0) {
            fetch(url+"/aboutcourse", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Headers": "Content-Type",
                    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify(user),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data != null) {
                        setdata(data);
                        console.log(data);
                        // setbatch(data.batch);
                    }
                })
                .catch((err) => console.log(err));
        } else {
            alert("No course selected");
        }
        // });
    }, []);

   
    return (
        <>
            <div id="aboutcourse">
                <div>
                    <section className="meetings-page" id="meetings">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="meeting-single-item">
                                                <div className="thumb">
                                                    <div className="price">
                                                        <span>Fees:{course.coursefees}</span>
                                                    </div>
                                                    <a>
                                                        <img src="assets/images/single-meeting.jpg" alt />
                                                    </a>
                                                </div>
                                                <div className="down-content">
                                                    <p className="description">
                                                        <h3>
                                                            {/* Course name */}
                                                            {course.coursename}
                                                        </h3>
                                                        <p>{course.coursetitle}</p>
                                                        <br></br>
                                                        {course.coursedescription}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="main-button-red">
                                                <a
                                                    style={{ color: "white" }}
                                                    href="#showbox"
                                                    onClick={() => enrollcourse()}
                                                >
                                                    Enroll This Course
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="showbox" className="contact-us">
                        <div
                            style={{ display: "none" }}
                            id="updatebox"
                            className="container"
                        >
                            <div className="row">
                                <div className="col-lg-9 align-self-center">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <form onSubmit={() =>
                                                                    getcursor(
                                                                        course.courseid,
                                                                        course.coursename,
                                                                        course.coursecatagory,
                                                                        course.coursefees
                                                                    )
                                                                } id="contact" >
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <h2>Register For EnrollMent</h2>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        Name
                                                        <fieldset>
                                                            <input
                                                                type="text"
                                                                id="focusname"
                                                                onChange={(e) => setname(e.target.value)}
                                                                placeholder="Enter Full Name"
                                                                required
                                                            />
                                                        </fieldset>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        Phone Number
                                                        <fieldset>
                                                            <input
                                                                type="tel"
                                                                onChange={(e) => setphone(e.target.value)}
                                                                id="subject"
                                                                placeholder="Enter Phone Number"
                                                                required
                                                                pattern="[6-9]{1}[0-9]{9}"
                                                                maxLength={"10"}
                                                            />
                                                        </fieldset>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        Email Id
                                                        <fieldset>
                                                            <input
                                                                name="email"
                                                                onChange={(e) => setemail(e.target.value)}
                                                                type="email"
                                                                id="email"
                                                                pattern="[^ @]*@[^ @]*"
                                                                placeholder="Enter Email Id"
                                                                required
                                                            />
                                                        </fieldset>
                                                    </div>

                                                    <div className="col-lg-12">
                                                        <fieldset>
                                                            <button   className="button"
                                                            type="submit"
                                                            >
                                                                Register For This Course
                                                            </button>
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
                                                <h6>Course Name</h6>
                                                <span>{course.coursename}</span>
                                            </li>
                                            <br></br>

                                            <li>
                                                <h6>Title</h6>
                                                {/* <span>info@meeting.edu</span> */}
                                                <span>{course.coursetitle}</span>
                                            </li>
                                            <br></br>
                                            <li>
                                                <h6>Catagory</h6>
                                                {/* <span>www.meeting.edu</span> */}
                                                <span>{course.coursecatagory}</span>
                                            </li>
                                            <br></br>

                                            <li>
                                                <h6>Amount</h6>
                                                {/* <span>Rio de Janeiro - RJ, 22795-008, Brazil</span> */}
                                                <span>{course.coursefees}</span>
                                            </li>
                                            <br></br>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer">
                            {/* <p>
                                Copyright © 2022 Edu Meeting Co., Ltd. All Rights Reserved.
                                <br />
                                Design:{" "}
                                <a
                                    href="https://templatemo.com"
                                    target="_parent"
                                    title="free css templates"
                                >
                                    TemplateMo
                                </a>
                            </p> */}
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
function updateorshow() {
    document.getElementById("updatebox").style.display = "block";
    // document.getElementById("updatebox").focus();
}

export default Aboutcourse;
