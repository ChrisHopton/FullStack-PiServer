import React from 'react';
import LoginCard from '../components/loginCard';
import Navbar from '../components/navbar';

const LoginPage = () => {
  const exampleStat = [
    {
      title: 'Total Subscribers',
      value: '71,897',
      change: '122',
      changeType: 'increase', // Use 'increase' or 'decrease'
      link: '#',
      linkText: 'View all Total Subscribers stats',
    },
    // ... Add more stats as needed
  ];

  return (
    <div className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
      <div className="flex-shrink-0 mb-4">
        <Navbar />
      </div>
      <div className="z-90 flex-grow fixed top-5 left-0 right-0">
        <LoginCard/>
      </div>
    </div>
  );
  
};

export default LoginPage;
