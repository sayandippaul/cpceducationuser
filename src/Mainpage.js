import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Userpage from './Navbar';
import Loginsignup from './Loginsignup';
import { url } from './url.js';

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







    
    fetch(url+"/showstudentfees", {
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
      {/* <br/>C & C++<br />Java <br/> Android <br/> PHP
       */}
Our course spans an immersive learning journey, covering fundamental concepts to advanced programming techniques. Students will engage in interactive online classes, hands-on projects, and collaborative learning experiences, guided by expert instructors with extensive industry experience.

Key Learning Modules:

Introduction to Programming Fundamentals:

Basics of programming languages
Algorithmic thinking and problem-solving
Understanding data types and variables
Web Development Essentials:

HTML, CSS, and JavaScript basics
Building responsive and dynamic web pages
Integrating APIs for enhanced functionality
Object-Oriented Programming (OOP):

Principles of OOP (Encapsulation, Inheritance, Polymorphism)
Application of OOP concepts in real-world scenarios
Design patterns and best practices
Database Management:

Relational database fundamentals
SQL for data manipulation and retrieval
Database design and optimization
Software Development Life Cycle (SDLC):

Understanding the stages of SDLC
Collaborative coding using version control systems (Git)
Testing and debugging strategies
Advanced Topics in Programming:

Frameworks and libraries (e.g., React, Angular, Django)
Cloud computing and serverless architecture
Introduction to machine learning and AI integration
Delivery Method:
Our online classes are conducted through a user-friendly platform, providing students with the flexibility to access lectures, assignments, and resources at their own pace. The curriculum is structured to accommodate both beginners and those with intermediate programming knowledge.

Interactive Learning Experience:
Engage in live coding sessions, group discussions, and real-world projects. Receive timely feedback from instructors and collaborate with peers through our dedicated online community, fostering a supportive and interactive learning environment.

Expert Instructors:
Our team of experienced instructors comprises industry professionals who bring real-world insights and practical knowledge to the virtual classroom. Benefit from their guidance, mentorship, and personalized feedback throughout the course.

Assessment and Certification:
Regular assessments, quizzes, and project submissions ensure continuous learning and skill development. Upon successful completion of the course, participants will receive a certification recognized in the industry, showcasing their proficiency in computer programming.

Career Support:
Access to career guidance, resume building workshops, and networking opportunities. Connect with our alumni network and industry partners for potential internships and job placements.

Prerequisites:
While no prior programming experience is required, a basic understanding of computer usage and logical thinking is recommended. Our introductory modules cater to beginners, while the advanced topics challenge those with existing programming knowledge.

Benefits of the Course:

Acquire a solid foundation in programming languages.
Gain hands-on experience through practical projects.
Develop problem-solving skills and logical thinking.
Explore the latest trends and technologies in software development.
Build a professional portfolio showcasing your projects.
Enrollment Process:

Visit our website and create an account.
Choose the Online Computer Programming Mastery course.
Complete the enrollment form and submit the required documents.
Make the payment and receive access to the course materials.
Embark on your journey to become a proficient computer programmer with our Online Computer Programming Mastery course. Join us in shaping the future of technology through coding excellence!






        
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
      {/* <br/>For BTech Students<br />For Diploma Students<br/>For MCA Students<br/>For BCA Students<br/>For BSC(Comp. Sc.) Students<br/>For MSC(Comp. Sc.) Students */}
      Course Title (20 words):
"Advanced Project Management for Final Year Students: Navigating Complex Tasks, Ensuring Success, and Mastering Key Skills for Project Completion."

Course Description (1000 words):

Welcome to the comprehensive course on "Advanced Project Management for Final Year Students." This program is designed to equip students with the essential skills and knowledge required to successfully plan, execute, and deliver final year projects in an academic setting. The course focuses on providing a deep understanding of project management principles, methodologies, and best practices, tailored specifically for the unique challenges and requirements of final year projects.

Key Modules and Topics:

Introduction to Project Management (Week 1-2):

Overview of project management fundamentals.
Understanding the project life cycle.
Identifying key stakeholders and their roles.
Project Planning and Scope Definition (Week 3-5):

Developing project charters and scope statements.
Creating work breakdown structures (WBS).
Risk identification and mitigation strategies.
Resource Management and Scheduling (Week 6-8):

Allocating resources effectively.
Developing project schedules using Gantt charts.
Balancing workload and optimizing resource utilization.
Team Collaboration and Communication (Week 9-11):

Building and leading project teams.
Effective communication strategies.
Conflict resolution and team motivation.
Monitoring and Controlling Projects (Week 12-14):

Implementing project control measures.
Tracking project progress and milestones.
Implementing change control processes.
Quality Assurance and Project Closure (Week 15-17):

Ensuring project deliverables meet quality standards.
Conducting project reviews and evaluations.
Closing projects and documenting lessons learned.
Final Year Project Case Studies and Workshops (Week 18-20):

Analyzing successful final year project case studies.
Conducting hands-on workshops for practical application.
Guest lectures from industry experts on real-world project challenges.
Course Objectives:
Upon completion of this course, students will:

Develop a comprehensive understanding of project management principles and methodologies.
Acquire skills in project planning, scheduling, resource management, and risk mitigation.
Enhance team collaboration and communication abilities.
Implement effective project monitoring and control measures.
Ensure the quality of final year project deliverables.
Successfully close projects and document lessons learned for continuous improvement.
Assessment and Evaluation:

Weekly quizzes to assess understanding of theoretical concepts.
Group projects to apply learned skills in a simulated environment.
Individual presentations on case studies and real-world project challenges.
Final exam evaluating overall knowledge and application of project management principles.
Benefits of the Course:

Gain a competitive edge in the job market with valuable project management skills.
Improve academic performance by successfully completing final year projects.
Enhance teamwork, communication, and leadership skills essential for professional success.
Learn from industry experts through guest lectures and real-world case studies.
Who Should Enroll:

This course is ideal for final year students from various disciplines who are embarking on their final year projects. It is also suitable for individuals interested in developing project management skills applicable in academic and professional settings.

In summary, the "Advanced Project Management for Final Year Students" course is a comprehensive and practical program that empowers students with the knowledge and skills needed to excel in managing final year projects. The carefully crafted modules, hands-on workshops, and real-world case studies ensure a well-rounded learning experience, preparing students for the challenges of project management in both academic and professional environments.






 
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
      {/* <br/>Using HTML<br />Using CSS<br/>Using JavaScript<br/>Using Bootstrap<br/>Using AngularJS */}
      Course Title (20 words):
"Comprehensive Web Design Mastery: Learn HTML, CSS, JavaScript, UI/UX Principles, and Responsive Design for Creating Dynamic and Engaging Websites."

Course Description (1000 words):

Embark on a transformative journey into the world of web design with our comprehensive course, "Comprehensive Web Design Mastery." This program is meticulously crafted to equip participants with the essential skills and knowledge needed to design and develop engaging and responsive websites. Whether you're a novice seeking to enter the web design domain or a professional aiming to enhance your skills, this course offers a holistic learning experience.

Course Highlights:

Foundational Web Technologies:

Dive into HTML to structure content.
Master CSS for styling and layout.
Explore JavaScript for interactivity.
UI/UX Design Principles:

Understand user experience fundamentals.
Learn to create intuitive and visually appealing user interfaces.
Responsive Design:

Grasp the principles of responsive web design.
Implement media queries for different device views.
Project-Based Learning:

Engage in hands-on projects to apply theoretical knowledge.
Create a portfolio showcasing your web design proficiency.
Design Tools and Software:

Familiarize yourself with industry-standard design tools.
Gain proficiency in using graphic software for web assets.
SEO Integration:

Learn how to optimize websites for search engines.
Understand the importance of SEO in web design.
Current Industry Trends:

Stay updated with the latest design trends.
Explore the impact of emerging technologies on web design.
Study Modules:

Module 1: Introduction to Web Design (100 words):

Overview of web design principles.
Historical evolution and current trends.
Importance of effective web design in the digital landscape.
Module 2: HTML Fundamentals (200 words):

Understanding HTML syntax and structure.
Creating and organizing content with HTML tags.
Incorporating multimedia elements.
Module 3: CSS Styling (200 words):

Cascading Style Sheets for layout and design.
Selectors, properties, and values.
Implementing CSS frameworks.
Module 4: JavaScript for Interactivity (200 words):

Introduction to JavaScript programming.
Handling events and DOM manipulation.
Incorporating interactivity into web pages.
Module 5: UI/UX Design Principles (200 words):

Principles of user interface design.
User experience considerations.
Wireframing and prototyping.
Module 6: Responsive Web Design (200 words):

Importance of responsive design.
Media queries and flexible grid layouts.
Testing and optimizing for various devices.
Module 7: Design Tools and Software (150 words):

Introduction to design software (e.g., Adobe XD, Figma).
Creating and editing graphics for the web.
Integrating design assets into web projects.
Module 8: SEO in Web Design (150 words):

Basics of search engine optimization.
Optimizing content and meta tags.
Understanding the role of SEO in web development.
Module 9: Industry Trends and Emerging Technologies (150 words):

Exploring current web design trends.
Impact of emerging technologies (e.g., AI, AR) on web design.
Future directions in the field.
Assessment and Certification:

Regular quizzes and assignments to reinforce learning.
Final project showcasing comprehensive web design skills.
Certificate of completion upon finishing the course.
Enroll now to unlock the door to a dynamic and fulfilling career in web design!






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
      {/* <br/>Using PHP<br />Using J2EE<br/>Upload Website into server */}
      Course Title (20 words):
"Comprehensive Web Development Mastery: From HTML to Full-Stack JavaScript, learn the art of creating dynamic, responsive websites in this immersive course."

Course Description (1000 words):

Welcome to the Comprehensive Web Development Mastery course, where we embark on a transformative journey through the intricate world of website development. This comprehensive program is designed for individuals seeking to acquire in-depth knowledge and practical skills in crafting dynamic, responsive, and feature-rich websites.

Key Learning Modules:

Introduction to Web Technologies:

Explore the foundational concepts of the World Wide Web, understanding the role of browsers, servers, and protocols.
Learn the evolution of web development and the significance of responsive design.
HTML and CSS Fundamentals:

Dive into the core of web development with HTML, mastering the structuring of content.
Harness the power of CSS to style and design visually appealing and responsive web pages.
JavaScript Essentials:

Uncover the dynamic side of web development by delving into JavaScript.
Understand variables, loops, functions, and the Document Object Model (DOM) for interactive web experiences.
Front-End Frameworks (e.g., React or Angular):

Learn to build efficient and scalable user interfaces using popular front-end frameworks.
Explore component-based architecture and state management for building modern, responsive web applications.
Back-End Development:

Delve into server-side scripting and explore back-end technologies (Node.js, Django, Flask, etc.).
Understand RESTful APIs and how to interact with databases for dynamic content.
Database Management:

Master database concepts, including relational databases (e.g., MySQL, PostgreSQL) and NoSQL databases (e.g., MongoDB).
Learn to design and optimize databases for web applications.
Full-Stack Development Integration:

Seamlessly integrate front-end and back-end components to create cohesive full-stack applications.
Explore the challenges and best practices of full-stack development.
Web Security Best Practices:

Understand common security threats and learn how to implement measures to safeguard web applications.
Dive into HTTPS, encryption, and authentication protocols.
Responsive Design and Cross-Browser Compatibility:

Ensure your websites look and function seamlessly across various devices and browsers.
Implement responsive design principles using media queries and flexible grid layouts.
Deployment and Hosting:

Explore various deployment strategies and hosting platforms (e.g., Heroku, AWS).
Learn to configure web servers and manage domain registration and hosting.
Practical Application and Projects:
Throughout the course, you'll apply your knowledge through hands-on projects, solving real-world challenges. Projects will range from building a personal portfolio website to developing a full-fledged e-commerce platform, allowing you to showcase your skills to potential employers.

Assessment and Certification:
Assessment will be conducted through a combination of quizzes, coding exercises, and project evaluations. Upon successful completion, you will receive a certification that validates your proficiency in web development.

Community and Networking:
Join a vibrant community of learners and professionals. Engage in discussions, seek help, and collaborate on projects, fostering a supportive learning environment.

Career Guidance:
Receive guidance on building a compelling portfolio, preparing for interviews, and navigating the job market. Gain insights into industry trends and emerging technologies within the web development landscape.

Course Duration and Flexibility:
The course is designed to be flexible, accommodating various schedules. It is estimated to be completed in approximately 6-8 months, depending on individual pace and commitment.

Who Should Enroll:

Aspiring web developers seeking a comprehensive skill set.
Designers aiming to transition into full-stack development.
Entrepreneurs looking to build their own web-based products.
Professionals wanting to enhance their digital skills.
Embark on this transformative journey and emerge as a proficient web developer with the skills to create innovative and visually stunning websites. Whether you're a novice or experienced developer, this course equips you with the tools and knowledge needed to succeed in the dynamic field of web development.






        
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
      {/* <br/>Android App<br />Design Using XML<br/>Coding With Java<br/>Upload App into Google(PlayStore) */}
      Course Title (20 words):
"Comprehensive App Development Mastery: A Holistic Program Covering Mobile and Web App Creation, UI/UX Design, and Deployment Strategies."

Course Description (1000 words):

Welcome to the Comprehensive App Development Mastery course, a transformative program designed to equip you with the skills and knowledge needed to thrive in the dynamic field of app development. This comprehensive curriculum covers a spectrum of topics ranging from fundamental coding principles to advanced deployment strategies, ensuring you graduate as a well-rounded and proficient app developer.

Course Overview:

Module 1: Introduction to App Development (Weeks 1-2)

Explore the evolution of app development.
Understand the significance of mobile and web applications in today's digital landscape.
Dive into the basics of programming languages, emphasizing those relevant to app development.
Module 2: Fundamentals of Coding (Weeks 3-6)

Master the foundational concepts of programming.
Hands-on coding exercises to strengthen your problem-solving skills.
Introduction to data structures and algorithms.
Module 3: UI/UX Design Principles (Weeks 7-10)

Learn the art and science of user interface (UI) and user experience (UX) design.
Practical design projects to enhance your creativity and design thinking.
Understand the importance of user-centric design in app development.
Module 4: Mobile App Development (Weeks 11-16)

Explore mobile app development platforms (iOS, Android).
Develop proficiency in Swift (iOS) and Kotlin (Android) programming languages.
Build real-world mobile applications from concept to deployment.
Module 5: Web App Development (Weeks 17-22)

Grasp the essentials of web app development using HTML, CSS, and JavaScript.
Explore front-end and back-end development.
Build interactive and dynamic web applications.
Module 6: Database Integration (Weeks 23-26)

Understand database management systems (DBMS) and their role in app development.
Hands-on experience in integrating databases into your applications.
Ensure data security and optimize database performance.
Module 7: Deployment Strategies (Weeks 27-30)

Learn various deployment methodologies for mobile and web applications.
Understand version control systems (e.g., Git) for collaborative development.
Explore cloud-based solutions for app hosting and scalability.
Capstone Project (Weeks 31-36)

Apply all learned concepts to a comprehensive capstone project.
Receive mentorship and feedback throughout the project.
Showcase your skills in a final presentation.
Key Highlights:

Hands-on Learning: Engage in practical coding exercises and real-world projects to reinforce theoretical concepts.

Industry-Relevant Skills: Acquire the skills demanded by the industry, from coding proficiency to UI/UX design and deployment strategies.

Mentorship: Benefit from guidance and support from experienced instructors and industry professionals.

Capstone Project: Apply your skills to a substantial project, demonstrating your competency and readiness for the workforce.

Collaborative Learning: Participate in group projects and collaborative coding sessions, simulating a real-world development environment.

Career Development: Receive guidance on building a compelling portfolio, resume writing, and job interview strategies to launch your career in app development.

Conclusion:

The Comprehensive App Development Mastery course is your gateway to becoming a versatile app developer. Whether you're a beginner or seeking to enhance your existing skills, this program is meticulously crafted to empower you with the knowledge and practical experience required in today's competitive tech landscape. Enroll now and embark on a transformative journey toward app development excellence.






        
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
      {/* <br/>For 1 Month<br />For 3 Months<br/>For 6 Months */}
      Course Title (20 words):
Certificate in Computer Programming: Unlock your coding potential with this comprehensive course covering languages, algorithms, and real-world application development.

Course Description (1000 words):

Embark on a transformative journey into the world of programming with our Certificate in Computer Programming. This course is meticulously crafted to empower beginners and aspiring programmers with the essential skills and knowledge needed to thrive in the dynamic field of computer science. Whether you're a novice or seeking to enhance your coding prowess, this program provides a solid foundation and practical insights for success.

Key Modules and Study Areas:

Programming Fundamentals:

Dive into the basics of programming with an emphasis on logic, syntax, and problem-solving.
Learn popular programming languages such as Python, Java, and C++.
Data Structures and Algorithms:

Gain a deep understanding of data structures like arrays, linked lists, and trees.
Master algorithmic concepts for efficient problem-solving and code optimization.
Web Development:

Explore front-end and back-end development using HTML, CSS, JavaScript, and frameworks like React and Node.js.
Build and deploy interactive and responsive web applications.
Database Management:

Understand the principles of database design and management.
Learn SQL for effective data manipulation and retrieval.
Software Development Life Cycle (SDLC):

Navigate the entire software development process from ideation to deployment.
Collaborate on group projects to simulate real-world development scenarios.
Version Control and Collaboration:

Utilize Git for version control and GitHub for collaborative coding projects.
Develop teamwork and communication skills within a programming environment.
Special Features:

Hands-On Projects:

Apply theoretical concepts through practical, industry-relevant projects.
Build a portfolio showcasing your coding abilities to prospective employers.
Guest Lectures and Industry Insights:

Engage with experienced professionals through guest lectures.
Stay updated on industry trends and best practices.
Career Guidance and Placement Assistance:

Receive guidance on resume building, interview preparation, and job searches.
Benefit from our network of industry connections for potential job placements.
Flexible Learning Schedule:

Access course materials at your own pace with a flexible online learning platform.
Live sessions and recorded lectures accommodate diverse learning styles.
Assessment and Certification:

Regular Quizzes and Assignments:

Assess your understanding with regular quizzes and assignments.
Receive constructive feedback to enhance your learning experience.
Final Project and Examination:

Demonstrate your skills by completing a comprehensive final project.
Take a final examination to validate your understanding of the course material.
Certificate of Completion:

Upon successful completion, receive a Certificate in Computer Programming.
Showcase your achievement on your resume and professional profiles.
Admission Requirements:

No prior programming experience is required. The course is designed for beginners, but a basic understanding of computer operations is beneficial.

Who Should Enroll:

Individuals interested in entering the field of computer programming.
Students seeking a foundation in coding for academic or career purposes.
Professionals looking to enhance their skill set with programming expertise.
Conclusion:

The Certificate in Computer Programming is a comprehensive and accessible pathway to mastering the art and science of coding. With a focus on practical application, industry relevance, and a supportive learning environment, this program equips you with the skills necessary to thrive in the ever-evolving landscape of computer programming. Enroll today and embark on a rewarding journey toward a successful career in the world of coding.






        
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
