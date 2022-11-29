import {signInwithUserEmailandPassword, signInwithGooglePopUp} from '../../utils/firebase.utils'
import {useContext, useState} from 'react'

import FormInput from '../form-input/form-input'
import { UserContext } from '../../context/user.context'

import './signin.styles.scss'

const formDefault = {
    email:'',
    password:''
}

const SignInComponent = () => {
    const logGoogleUser = async () => {
        await signInwithGooglePopUp()
        }
    
    const {setCurrentUser} = useContext(UserContext)

    const [formSignIn, setFormSignIn] = useState(formDefault)
    const {email,password} = formSignIn
    
    const resetFormFields = () => {
        setFormSignIn(formDefault)
    }

    const onChangeHandler = (event) => {
        const {name,value} = event.target
        setFormSignIn({...formSignIn, [name]: value })
        
    }
    
    const submitHandler = async (event) => {
        event.preventDefault()
        if(!email || !password) {
            alert('email or password empty')
        }
        try {
            const {user} = await signInwithUserEmailandPassword(email,password)
            console.log(user)
            setCurrentUser(user)
            resetFormFields()
            
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('wrong password')
                    break;
                    case 'auth/user-not-found':
                        alert('user not found')
                        break;
                        default :
                        console.log(error.code)
                    }
                }
            }
            
    return(
    <div className='sign-in-container'>
        <h2>Have an Account? Login Here</h2>
        <form onSubmit={submitHandler}>
            <FormInput
            label='email'
            type='email'
            name='email'
            required
            value={email}
            onChange={onChangeHandler}
            />

            <FormInput
            label='password'
            type='password'
            name='password'
            required
            value={password}
            onChange={onChangeHandler}
            />
            <div className='button-container'>
                <button type='submit'>SIGN IN</button>
                <button type='button' onClick={logGoogleUser}>Sign In with Google</button>
            </div>
        </form>
    </div>
    )
}

export default SignInComponent