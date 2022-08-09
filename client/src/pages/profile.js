import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';


import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

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
            <div className="flex-row justify-center mb-3">
                <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
                    Viewing {userParam ? `${user.username}'s` : 'your'} profile.
                </h2>
                {data.me.workouts.map(({ workoutName, workoutType, _id, exercises }) =>
                (<div key={_id}>
                    <p>
                        {workoutName}
                    </p>
                    <p>
                    {workoutType}
                    </p>
                    {exercises?.map(({exerciseName, duration, _id: exerciseId}) =>
                    <div key={exerciseId}>
                    <p> {exerciseName} </p>
                    <p> {duration} </p>
                    </div>
                    )}
                </div>
                )
                )}
            </div>
        </div>
    );
};

export default Profile;
