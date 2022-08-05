import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Homepage from './pages/homepage';
import ExerciseGuide from './pages/exerciseguide.js';
import Liveworkout from './pages/liveworkout.js';
import Workoutpage from './pages/workoutpage.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../src/components/navbar'
import Footer from '../src/components/footer'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
      <NavBar />
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
    <Footer />
    </div>
  )
};

export default App;
