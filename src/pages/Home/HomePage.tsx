import react, { ChangeEvent, HtmlHTMLAttributes, useContext } from 'react';
import './HomePage.css';
import { Header } from '../../components';
import axios from 'axios';
import React from 'react';
import { AppContext } from '../../App';

export function HomePage() {
  const context = useContext(AppContext);


  if (!context) {
    throw new Error("HomePage must be used inside AppContext.Provider");
  }

  const { username } = context;

  return (
    <div>
      <>
        <Header/>

        <div >
          <h2 className='welcomeMessage'>Welcome {username ? username : "Guest"}!</h2>
        </div>
        <div className='container'>
      {/* HERO SECTION */}
      <section className='hero'>
        <h1 className='title'>Build Faster. Deliver Smarter.</h1>
        <p className='subtitle'>
          A modern platform designed to help teams ship high‑quality products
          with speed and confidence.
        </p>

        <button className='cta'>Get Started</button>
      </section>

      {/* FEATURES SECTION */}
      <section className='features'>
        <h2 className={'sectionTitle'}>Why Choose Us</h2>

        <div className='featureGrid'>
          <div className='featureCard'>
            <h3>⚡ High Performance</h3>
            <p>
              Optimized architecture that ensures fast load times and smooth
              interactions.
            </p>
          </div>

          <div className='featureCard'>
            <h3>🔒 Secure by Design</h3>
            <p>
              Enterprise‑grade security built into every layer of the platform.
            </p>
          </div>

          <div className='featureCard'>
            <h3>🧩 Modular Components</h3>
            <p>
              Reusable, scalable components that keep your codebase clean and
              maintainable.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className='finalCTA'>
        <h2>Ready to build something amazing?</h2>
        <button className='ctaSecondary'>Create Your Account</button>
      </section>
    </div>

      </>
    </div>
  );
}

export default HomePage;