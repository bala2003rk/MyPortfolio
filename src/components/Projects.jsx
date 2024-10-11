import './Projects.css';
const Projects = () => (
  <section>
    <h2>My Projects</h2>
    <ul>
      <li>Project 1 - Weather app</li>
      <h4>Description</h4>
      <p>Developed a responsive and interactive weather application using React, allowing users to input a city and retrieve current weather information, including temperature, humidity, and wind speed. The app also features a chart displaying average weather data for the next few days. Utilized React hooks for state management, API integration for data retrieval, and CSS for styling.</p>
      <li>Project 2 - A Railway Reservation System built in Java</li>
      <h4>Description</h4>
      <p> Designed and developed a railway ticket reservation system, featuring user-friendly console-based interface for booking, canceling, and managing railway tickets. The system allocates berths, handles RAC (Reservation Against Cancellation) seats, and maintains a waiting list. Utilized Java, JavaFX, and a relational database management system to create a scalable and efficient solution.</p>
      <li>Project 3- Dynamic Web project using Servlet and Session</li>
      <h4>Description</h4>
      <p> Designed and developed a dynamic web project that incorporates session handling features and robust security measures for login and logout functionality. The project utilizes HTTP sessions to store user data securely on the server-side, ensuring efficient and reliable user authentication. The login and logout mechanisms are fortified with advanced security protocols to prevent unauthorized access and protect sensitive user information. The project demonstrates a comprehensive understanding of web development, session management, and security principles.</p>
    </ul>
  </section>
);

export default Projects;
