import React from 'react';

const About = () => {
  return (
    <div className="container my-5">
      <div className="card shadow-lg border-0">
        <div className="card-body">
          <h2 className="card-title mb-3 text-primary">About Us</h2>
          <p className="card-text">
            Welcome to <strong>iNotebook</strong>!  
            This is a simple note-taking app built with <b>MERN stack</b> (MongoDB, Express, React, Node.js).  
            It allows you to securely create, edit, and delete your personal notes from anywhere.
          </p>
          <p className="card-text">
            The app is designed with <b>React Context API</b> for state management and Bootstrap for styling.  
            Authentication is handled with JWT tokens so your notes stay private.
          </p>
          <p className="card-text text-muted">
            Version 1.0.0
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
