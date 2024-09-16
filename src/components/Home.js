import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css'
import FruitList from './FruitList';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Home</h2>
      <FruitList />
      
    </div>
  );
};

export default Home;
