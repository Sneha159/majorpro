function Contact(){
    return(
      <>

     

        
        <h1 className="heading">Contact</h1>
        <form>
            <div className="conto">
<div className="card" >
  <div className="card-body">
   

           
  <div className="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  </div>
  </div>
  </div>
</form>


     
      </>
    )
  }
  
export default Contact;  