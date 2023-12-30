import { useState, useEffect, useRef } from "react";


function Contact(){
  var lastcpcid=localStorage.getItem("lastqid");
  var lastno=parseInt( lastcpcid.slice(2,lastcpcid.length))+1;

  var [name, setname] = useState("");
    var [email, setemail] = useState("");
    var [phone, setphone] = useState("");
    var [message, setmessage] = useState("");




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

    const dataFetchedRef = useRef(false);






    
    
    useEffect(() => {
      if (dataFetchedRef.current) return;
      dataFetchedRef.current = true;
            }, []);

            function getcursor(e) {
              e.preventDefault();
              const feedback = {
                  name: name,
                  email: email,
                  phone: phone,
                  message:message,
                  qid:"#q"+lastno,
                  };
              console.log(feedback);
              // var  text = { username: name, email: email, month: month,amount:amount,batch:batch };
                  
              fetch("http://localhost:3000/Addfeedback", {
                  method: "POST",
                  headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                      "Access-Control-Allow-Headers": "Content-Type",
                      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                      "Access-Control-Allow-Origin": "*",
                  },
                  body: JSON.stringify(feedback),
              })
                  .then((res) => res.json())
                  
                  .then((data) => {
                      // window.location.replace("login.js");
                      console.log(data);
                      if (data!= 0) {
                          alert("Your Feedback/Enquiry is valueable to Us.We will try to reach out you very soon.");
                      } else {
                          alert("Feedback/Enquiry not submitted due to error.");
                      }
                      // alert("success");
                  })
                  .catch((err) => console.log(err));
            
                
            
                }
          
  


            
           
    return(
        <div>

<section className="contact-us" id="contactnow">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 align-self-center">
          <div className="row">
            <div className="col-lg-12">
              <form onSubmit={(e)=>getcursor(e)} id="contact" >
                <div className="row">
                  <div className="col-lg-12">
                    <h2>Any Feedback? Contact Now</h2>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <input name="name" 
                                                                onChange={(e) => setname(e.target.value)}
                      
                      type="text" id="name" placeholder="YOUR NAME...*" required />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <input name="email"
                                                                onChange={(e) => setemail(e.target.value)}
                      
                      type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="YOUR EMAIL..." required />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <input 
                                                                onChange={(e) => setphone(e.target.value)}
                      
                      type="number"  placeholder="Phone Number" required />
                    </fieldset>
                  </div>
                 
                  <div className="col-lg-12">
                    <fieldset>
                      <textarea name="message"
                                                                onChange={(e) => setmessage(e.target.value)}
                      
                      type="text" className="form-control" id="message" placeholder="YOUR MESSAGE..." required defaultValue={""} />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit"  className="button">SEND MESSAGE NOW</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="right-info">
            <ul>
              <li>
                <h6>Phone Number</h6>
                <span>{phn1} </span>
                <span>{phn2} </span>
                <span>{phn3} </span>

                  
              </li>
              <br/>
              <li>
                <h6>Email Address</h6>
                <span>{emailadmin}</span>
              </li>
              <br/>
              <li>
                <h6> Address</h6>
                <span>{addressadmin}</span>
              </li>
              <br/>
              <li>
                <h6>Timing</h6>
                <span> {timing}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="footer">
      <p>{footer}</p>
    </div>
  </section>
 
        </div>

    );
}

export default Contact;