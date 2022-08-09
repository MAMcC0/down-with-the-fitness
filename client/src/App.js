import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import ExerciseGuide from './pages/exerciseguide.js';
import Liveworkout from './pages/liveworkout.js';
import WorkoutPage from './pages/workoutpage.js';
import Signup from './pages/signup';
import Login from './pages/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../src/components/navbar'
import Footer from '../src/components/footer'
import CustomWorkoutPage from '../src/pages/customworkouts'

// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {

  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <Router>
          <div className="flex-column justify-center align-center min-100-vh bg-primary">
            <NavBar />
            <Routes>
              <Route
                path="/"
                element={<Homepage />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
              <Route
                path="/customworkouts/type"
                element={<CustomWorkoutPage />}
              />
              <Route
                path="/workouts"
                element={<WorkoutPage />}
              />
              <Route
                path="/workouts/type"
                element={<WorkoutPage />}
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
            <Footer />
          </div>
        </Router>
      </ApolloProvider>
    </div>
  )
};

export default App;
