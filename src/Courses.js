import { useState, useEffect, useRef } from "react";
import { url } from './url.js';
import { userurl } from './userurl.js';

function Courses() {
  

  function showcourses(cata){
localStorage.setItem("courseid",0);

    if(cata!="all")
    document.getElementById("all").className="";
    // document.getElementById("all").className="";

    const coursecata = { catagory: cata };

    fetch(url+"/showcourses", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(coursecata)
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
  
          // setFilteredList(data);
          setcourses(data);
          // showcourses();
  
  
        })
        .catch((err) => console.log(err));
  
  }


  function aboutcourse(cid){
localStorage.setItem("courseid",cid);
// window.location.replace("http://localhost:3001/Aboutcourse");
window.location.replace(userurl+"/Aboutcourse");

    console.error(cid);
    }
   
  
  var [courses, setcourses] = useState([]);

  const dataFetchedRef = useRef(false);

  useEffect(() => {
    //Runs only on the first render

    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    // fetch(url+"/showcourses", {
    //   method: "GET",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Headers": "Content-Type",
    //     "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    //   // body: JSON.stringify(user)
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // console.log(data);

    //     setFilteredList(data);
    //     setcourses(data);
    //     // showcourses();


    //   })
    //   .catch((err) => console.log(err));
    showcourses("all");
  }, []);


  const [filteredList, setFilteredList] = new useState([]);
  // const [students, setStudents] =

  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    // Create copy of item list
    var updatedList = [...courses];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return item.coursename.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger render with updated values
    setFilteredList(updatedList);
  };

 
  return (
    <div>
      <div>
        <section className="heading-page header-text" id="top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* <h6>Here are our All Courses</h6> */}
                <h2>Courses </h2>
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
                    <div className="filters">

                      <ul>


                        <li style={{"margin":"5px"}} id="all" onClick={() =>showcourses("all")} data-filter="*" className="active">
                          All Courses
                        </li>
                        <li style={{"margin":"5px"}} id="programming/backend" onClick={() =>showcourses("programming/backend")} data-filter="*" className="">
                        Programming/Backend
                        </li>
                        <li style={{"margin":"5px"}} id="designing/frontend" onClick={() =>showcourses("designing/frontend")} data-filter="*" className="">
                        Designing/Frontend
                        </li>
                        <li style={{"margin":"5px"}} id="jobpreparation" onClick={() =>showcourses("jobpreparation")} data-filter="*" className="">
                       Job Preparation
                        </li>
                        <li style={{"margin":"5px"}} id="industrybaseddevelopment" onClick={() =>showcourses("industrybaseddevelopment")} data-filter="*" className="">
                        Industry Based Development
                        </li>
                        <li style={{"margin":"5px"}} id="frameworks" onClick={() =>showcourses("frameworks")} data-filter="*" className="">
                        Frameworks
                        </li>
                        <li style={{"margin":"5px"}} id="finalyearprojects" onClick={() =>showcourses("finalyearprojects")} data-filter="*" className="">
                        Final Year Projects
                        </li>
                        
                         </ul>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="row grid">
                    {courses.map((data) => (
                          <>
                       <div  className={"col-lg-4 templatemo-item-col all soon "+data.coursecatagory}>
                        <div className="meeting-item">
                          <div className="thumb">
                            <div className="price">
                            <span>₹{data.coursefees}</span>

                            </div>
                            <a onClick={() =>aboutcourse(data.courseid)} >
                              <img src="assets/images/meeting-01.jpg" alt />
                            </a>
                          </div>
                          <div className="down-content">
                            
                            <a href="">
                              <strong><h4>{data.coursename}</h4></strong>
                            </a>
                              <br />
                              {data.coursetitle}
                              <br/>
                              <div class="main-button-red text-light">
                          <a onClick={() =>aboutcourse(data.courseid)}>Enroll Now</a>
                          </div>
                          
         
                          </div>
                        </div>
                      </div>
                     
                          </>
                        ))}

                     
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          {/* <div className="footer">
            <p>
              Copyright © 2022 Edu Meeting Co., Ltd. All Rights Reserved.
              <br />
              Design:{" "}
              <a
                href="https://templatemo.com/page/1"
                target="_parent"
                title="website templates"
              >
                TemplateMo
              </a>
            </p>
          </div> */}
        </section>
      </div>
    </div>
  );
}

export default Courses;
