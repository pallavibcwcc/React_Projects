import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css'
import todo from '../assets/todo-bg.jpg'
import bmi  from '../assets/Work2.png'
import work3 from '../assets/Work3.png'
import work4 from '../assets/image.png'

const Home = () => {
  return (
    <div>
      <section className="work section" id="work">
        <h2 className="section-title">Work</h2>

        <div className="work__container bd-grid">
        
          <Link to="/todo" className="work__img">
            <img src={todo} alt="Feedback Form"/>
            <div className="work__content">
              <h3>Todo App</h3>
              <p>A React-based Todo App that lets users add,delete,and mark tasks complete with hooks.</p>
            </div>
          </Link>
          <Link to="/Bmi" className="work__img">
            <img src={bmi} alt="Feedback Form" />
            <div className="work__content">
              <h3>BMI</h3>
              <p>A responsive BMI Calculator built using React that takes user input to calculate .</p>
            </div>
          </Link>
          <Link to="/feedback" className="work__img">
            <img src={work3} alt="Feedback Form" />
            <div className="work__content">
              <h3>Feedback</h3>
              <p>A feedback form where users can give a rating and share their suggestions easily.</p>
            </div>
          </Link>
          <br></br>
          <Link to="/formValidation" className="work__img">
            <img src={work4} alt="Feedback Form" />
            <div className="work__content">
              <h3>FormValidation</h3>
              <p></p>
            </div>
          </Link>
{/* 
          <a href="https://github.com/AvviCoder/Aiimage_Generator" className="work__img" target="_blank" rel="noopener noreferrer">
            <img src="assets/img/work4.jpg" alt="AI Image Generator" />
            <div className="work__content">
              <h3>AI Image Generator</h3>
              <p>An AI based image creator based on the input prompt by the user</p>
            </div>
          </a>

          <a href="#" className="work__img">
            <img src="assets/img/work5.jpg" alt="ChatBuddy" />
            <div className="work__content">
              <h3>ChatBuddy</h3>
              <p>A realTime chat application with an interactive UI</p>
            </div>
          </a>

          <a href="https://github.com/AvviCoder/BlogApp" className="work__img" target="_blank" rel="noopener noreferrer">
            <img src={todo} alt="Blog App" />
            <div className="work__content">
              <h3>Blog-App</h3>
              <p>A pure Backend Creation for functioning of a blog app</p>
            </div>
          </a> */}
        </div>
      </section>
    </div>
  );
};

export default Home;
