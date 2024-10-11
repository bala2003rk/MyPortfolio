import React from 'react';
import './Contact.css';
const Contact = () => (
  <section id="contact" style={{ textAlign: 'center', marginTop: '50px' }}>
    <h2>Contact Me</h2>
    
    <div style={{ marginBottom: '20px' }}>
      <h3>Address</h3>
      <p>2/68,North street,Silattur,Aranthangi,Pudukkotai</p>
      <p>PinCode-614622</p>
    </div>

    <div style={{ marginBottom: '20px' }}>
      <h3>Profiles</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <a href="https://github.com/bala2003rk" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.geeksforgeeks.org/user/muruganrajqv2g/" target="_blank" rel="noopener noreferrer">
            GeeksforGeeks
          </a>
        </li>
        <li>
          <a href="https://leetcode.com/u/Bala_rk_3/" target="_blank" rel="noopener noreferrer">
            LeetCode
          </a>
        </li>
        <li>
          <a href="https://www.hackerrank.com/profile/muruganrajendra1" target="_blank" rel="noopener noreferrer">
            HackerRank
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/balamurugan-rk-2003rk/" target="_blank"  rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:your-muruganrajendran23@gmail.com" target="_blank" rel="noopener noreferrer">
            Gmail
          </a>
        </li>
      </ul>
    </div>
  </section>
);

export default Contact;
