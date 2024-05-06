import React,{useState} from 'react';

const Form=(props)=> {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setConfirmPassword] = useState("");  

  return (
    <div>
        <form onSubmit={(e)=>(e.preventDefault())}>
            <div className='formulair'>
            <div>
                    <label htmlFor="firstname"> First Name: </label>
                    <input type ="text" id="firstname" value={firstname} onChange={(e)=> setFirstName(e.target.value)}/>
                    {/*{firstname && firstname.length < 2 && <p style={{color:"red"}}>Last Name must be at least  2 characters  </p>}*/}
                    {
                        (firstname.length <  2 && firstname.length>0 )?
                        <p style={{color:"red"}}>First Name must be at least  2 characters </p>:
                        null
                        
                    }
                </div>
                <div>
                    <label> Last Name: </label>
                    <input type ="text" value={lastname} onChange={(e)=> setLastName(e.target.value)}/>
                    {lastname && lastname.length < 2 && <p style={{color:"red"}}>Last Name must be at least  2 characters  </p>}
                </div>
                <div>
                    <label> Email: </label>
                    <input type ="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    {
                        (email.length > 0 && email.length < 5)?
                        <p style={{color:"red"}}>Email must be at least  5 characters </p>:
                        null
                    }
                </div>
                <div>
                    <label> Password: </label>
                    <input type ="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    {
                        (password.length > 0 && password.length < 8)?
                        <p style={{color:"red"}}>Password must be at least 8 characters  </p>:
                        null
                    }
                </div>
                <div>
                    <label> Confirm Password: </label>
                    <input type ="password" value={confirmpassword} onChange={(e)=> setConfirmPassword(e.target.value)}/>
                    {
                        (confirmpassword !== password)?
                        <p style={{color:"red", fontStyle:"oblique", fontWeight: "bold" }}>Error confirmpassword is invalid</p>:
                        null
                    }
                </div>
            </div>
        </form>
        
      
    </div>
  );
}

export default Form
