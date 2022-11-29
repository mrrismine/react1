import { useState } from "react";
import { CreateUserAndPassword, createUserFromAuth} from "../../utils/firebase.utils";

import FormInput from "../form-input/form-input";

import './signup.styles.scss'

const signUpValue = {
    displayName :'',
    email : "",
    password : "",
    confirmPassword : ""
}



const SignUp = () => {
    const [formFields, setFormFields] = useState(signUpValue)
    const {displayName,email,password,confirmPassword} = formFields
    console.log(formFields)    

    const resetFormFields = () => {
        setFormFields(signUpValue)
    }

    const onChangeHandler = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields,[name]: value})
    }


    const onSubmit = async(event) => {
        event.preventDefault()
        if(password !== confirmPassword) {
            alert("Password and Confirm Password doesnt the same")
            return;
        }
        try {
            const {user} = await CreateUserAndPassword(email,password)
            await createUserFromAuth(user,{displayName})
            console.log("user has been made")
            resetFormFields()
        } catch (error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('email already in use')
            } else{
            console.log(error)
            }
        }
    }

    return(
        <div className="sign-up-container">
            <h2>Dont Have an Account?</h2>
            <span>Create One</span>
            <form onSubmit={onSubmit}>
                <FormInput 
                label='Display Name'
                onChange={onChangeHandler}
                type='text' 
                name="displayName" 
                value={displayName}  
                required/>
                
                <FormInput 
                label='Email'
                onChange={onChangeHandler} 
                type='email'  
                name="email" 
                value={email} 
                required/>
                
                <FormInput 
                label='Password'
                type='password'  
                name="password" 
                value={password} 
                required 
                onChange={onChangeHandler} />
                
                <FormInput 
                label='Confirm Password'
                type='password' 
                name="confirmPassword"
                value={confirmPassword}
                onChange={onChangeHandler}
                required
                />
                <button type="submit">SIGN UP</button>
            </form>
        </div>
    )
}

export default SignUp