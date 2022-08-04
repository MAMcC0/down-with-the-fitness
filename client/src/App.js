import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Homepage from './pages/homepage';
import ExerciseGuide from './pages/exerciseguide.js';
import Liveworkout from './pages/liveworkout.js';
import Workoutpage from './pages/workoutpage.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route 
              path="/" 
              element={<HomePage />}
            />
            <Route 
              path="/workouts" 
              element={<WorkoutPage />}
            />
            <Route 
              path="/workouts/:id" 
              element={<LiveWorkout />}
            />
            <Route 
              path="/exerciseguide"
              element={<ExerciseGuide />}
            />
      </Routes>
        </div>
      </Router>
    </ApolloProvider>
  )
};

export default App;
