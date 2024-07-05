import React, { useState } from 'react'
import './LoginScreen.css'
import SignupScreen from './SignupScreen';

function LoginScreen() {

    const [signIn, setSignIn] = useState(false);

    return (
        <div className='loginScreen'>
            <div className='loginScreen_background'>
                <img
                    className='loginScreen_logo'
                    src="/images/Netflix-logo.png"
                    alt="" />
                <button onClick={() => setSignIn(true)}
                    className='SignIn_Button '>  Sign In </button>

                <div className='loginScreen_gradient'></div>



            </div>

            <div className='loginScreen_body'>
                {signIn ? (
                    <SignupScreen />
                ) : (
                    <>
                        <h1>Unlimited movies , TV shows and anime</h1>
                        <h2>Watch anywhere. Cancel any time. </h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                        <div className='loginScreen_input'>
                            <form>
                                <input type='email' placeholder='Email address' />
                                <button onClick={() => setSignIn(true)}
                                    className='loginScreen_getStarted'>
                                    GET STARTED
                                </button>
                            </form>
                        </div>
                    </>

                )}



            </div>

        </div>
    )
}

export default LoginScreen;
