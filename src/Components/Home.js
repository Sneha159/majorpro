




function Home(){
    return(
      <>
         <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Welcome to our Pizza Store !</h1>
        <prev className="lead">Are you starving?
Within a few clicks, find meals that
are accessible near you</prev>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Menu</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact Us</button>
        </div>
      </div>
    </div>
  </div>


  <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img src=" "https://www.pexels.com/photo/close-up-of-pizza-315755/" height={300} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Pizza Dish        </h5>
      

      </div>
    
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=600" height={300} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Pizza on Brown Wooden Board </h5>
      
      </div>
   
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://images.pexels.com/photos/1049620/pexels-photo-1049620.jpeg?auto=compress&cs=tinysrgb&w=600" height={300} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Pizza With Red Pepper and Cheese </h5>
      

      </div>
   
    </div>
  </div>
</div>



           
      </>
    )
  }
  export default Home;
