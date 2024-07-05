import React from 'react'
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import "./ProfileScreen.css"

function ProfileScreen() {
    const user = useSelector(selectUser);
    return (
        <div className='profileScreen'>

            <Nav />
            <div className='profileScreen_body'>
                <h1>Edit Profile</h1>
                <div className="profileScreen_info">
                    <img src="/images/profile.png" alt="profile" />

                    <div className="profileScreen_details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen_plans">
                            <h3>Plans</h3>
                            <h3>Quality</h3>
                            <div className="premium">
                                <h4>Premium</h4>
                                <h5>4K
                                    +HDR
                                </h5>
                                <button>Subscribe</button>
                            </div>


                            <h4>Basic</h4>
                            <h5>720p
                            </h5>
                            <button>Subscribe</button>
                            <h4>Standard</h4>
                            <h5>1020p
                            </h5>
                            <button>Subscribe</button>
                            <button onClick={() => auth.signOut()}
                                className='profileScreen_signOut'> Sign Out</button>
                        </div>
                    </div>

                </div>



            </div>


        </div>
    )
}

export default ProfileScreen
