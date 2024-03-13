import React from 'react'


const Contact = () => {
  return (
    <>
    
    <div className='container-xxl'>
    <form>
      <div className="mb-3">
    <label for="exampleInputfirstname1" class="form-label">First Name</label>
    <input type="text" class="form-control" id="exampleInputfirstname1" aria-describedby="firstnameHelp"/>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label for="exampleInputlastname1" class="form-label">Last Name</label>
    <input type="text" class="form-control" id="exampleInputlastname1" aria-describedby="lastnameHelp"/>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>

  <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Male
  </label>
</div>
<div class="form-check mb-3">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2">
    Female
  </label>
</div>

  <div className="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>

  <div className="mb-3">
    <label for="exampleInputnumber1" class="form-label">Phone number</label>
    <input type="number" class="form-control" id="exampleInputnumber1" aria-describedby="numberHelp"/>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>

  <div className="mb-3">
    <label for="exampleInputaddress1" class="form-label">Address</label>
    <input type="textarea" class="form-control" id="exampleInputnumber1" aria-describedby="AddressHelp"/>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
    </>
  )
}

export default Contact