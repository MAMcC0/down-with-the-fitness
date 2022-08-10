import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { Button } from 'react-bootstrap';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';


const Profile = () => {
    const { username: userParam } = useParams();
    //grabs username from url to show on profile
    //gets user info if logged in to display
    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam },
    });
  
    
    const user = data?.me || data?.user || {};
    //if not logged in with no profle redirects to home
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Navigate to="/" />;
    }
//allows for loading
    if (loading) {
        return <div>Loading...</div>;
    }
    //if there is no username sends message that they need to be logged in
    if (!user?.username) {
        return (

            <h4>
                You need to be logged in to see this. Use the navigation links above to
                sign up or log in!
            </h4>
        );
    }
    //keys are compared: allows react to know whether to re-render
    return (
        <div>
            <div className="container" style={{backgroundColor:"white"}}>
                <div className="flex-row justify-center mb-3">
                    <h2 className="col-12 col-md-10 text-dark justify-center p-3">
                        Viewing {userParam ? `${user.username}'s` : 'your'} profile!
                    </h2>
                    <div className="d-inline-block justify-center p-3" style={{fontSize: 20}}>
                        <img className="w-25 p-1 justify-left" src="./images/Profile.png" alt="profile pic"></img>
                        <p className="p-2 bg-light border margin-top: -0.25">
                            {user.username}
                        </p>
                        <p className="p-2 bg-light border">
                            {user.email}
                        </p>
                        <Button id={user._id}>Delete Account</Button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
