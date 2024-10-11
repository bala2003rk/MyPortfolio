import React from 'react';
import myPhoto from '../images/MyPhoto.png'; // Correct path with forward slashes

const Home = () => (
  <section id="home" style={{ textAlign: 'center' }}>
    <h1>My Portfolio</h1>
    {/* <p>Hi, I'm Balamurugan, a passionate developer.</p> */}
    <img 
      src={myPhoto} 
      alt="Moulali" 
      style={{ width: '200px', borderRadius: '50%' }} 
    />
    <br />
    <br />
    <hr />
    <br />
    <br />
    <p>Hi, I'm Balamurugan, a passionate and dedicated software developer with a strong focus on building efficient, scalable, and innovative solutions. With a solid foundation in Java, Spring Boot, React, and other modern technologies, I am actively seeking opportunities to contribute to and grow with a forward-thinking company.</p>
    <br />
    <hr />
  </section>
);

export default Home;
