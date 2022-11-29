import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import SignUp from '../../component/signup.component/signup.component'
import SignInComponent from "../../component/signin.component/signin.component"
import './signin.styles.scss'

const SignIn = () => {


    return(
        <Fragment>
            <Outlet />
                <div className="sign-in-page">
                    <SignInComponent />
                    <SignUp />
                </div>
        </Fragment>
    )
}

export default SignIn