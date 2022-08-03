import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Homepage from ('./components/homepage');
import ExerciseGuide from ('./components/exerciseguide');
import Liveworkout from ('./components/liveworkout');
import Workoutpage from ('./components/workoutpage')
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
              element={<Homepage />}
            />
            <Route 
              path="/workouts" 
              element={<Workoutpage />}
            />
            <Route 
              path="/workouts/:id" 
              element={<Liveworkout />}
            />
            <Route 
              path="/exerciseguide"
              element={<ExerciseGuide />}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
