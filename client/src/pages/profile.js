import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';


import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';
import { shouldInclude } from '@apollo/client/utilities';
import { blue } from '@mui/material/colors';

const Profile = () => {
    const { username: userParam } = useParams();
    console.log(userParam);
    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam },
    });
    console.log(data);
    const user = data?.me || data?.user || {};
    // navigate to personal profile page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Navigate to="/me" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }
    console.log(user, Auth.loggedIn(), Auth.getProfile());
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
