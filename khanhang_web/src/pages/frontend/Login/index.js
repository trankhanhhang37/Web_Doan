import { Link } from "react-router-dom";

function Login() {
    return (
<section class="section-conten padding-y" style={{minHeight: "84vh"}}>

{/* <!-- ============================ COMPONENT LOGIN   ================================= --> */}
	<div class="card mx-auto" style={{maxWidth: "380px", marginTop: "100px"}}>
      <div class="card-body">
      <h4 class="card-title mb-4">Sign in</h4>
      <form>
      	  <a href="#" class="btn btn-facebook btn-block mb-2"> <i class="fab fa-facebook-f"></i>  Sign in with Facebook</a>
      	  <a href="#" class="btn btn-google btn-block mb-4"> <i class="fab fa-google"></i> Sign in with Google</a>
          <div class="form-group">
			 <input name="" class="form-control" placeholder="Username" type="text"/>
          </div>
           {/* <!-- form-group// --> */}
          <div class="form-group">
			<input name="" class="form-control" placeholder="Password" type="password"/>
          </div> 
          {/* <!-- form-group// --> */}
          
          <div class="form-group">
          	<a href="#" class="float-right">Forgot password?</a> 
            <label class="float-left custom-control custom-checkbox"> 
            <input type="checkbox" class="custom-control-input" checked=""/> 
            <div class="custom-control-label"> Remember </div> </label>
          </div> 
          {/* <!-- form-group form-check .// --> */}
          <div class="form-group">
              <button type="submit" class="btn btn-primary btn-block"> Login  </button>
          </div>
           {/* <!-- form-group// -->     */}
      </form>
      </div> 
      {/* <!-- card-body.// --> */}
    </div> 
    {/* <!-- card .// --> */}

     <p class="text-center mt-4">Don't have account? <a href="#">Sign up</a></p>
     <br/><br/>
{/* <!-- ============================ COMPONENT LOGIN  END.// ================================= --> */}


</section>
    );
}



export default Login;