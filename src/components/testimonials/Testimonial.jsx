import React, { useEffect, useRef } from 'react';
import "./Testimonial.css";
import villa from "../../assets/villaa.jpg";

const Testimonial = () => {
  const testimonialSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    });

    if (testimonialSectionRef.current) {
      observer.observe(testimonialSectionRef.current);
    }

    return () => {
      if (testimonialSectionRef.current) {
        observer.unobserve(testimonialSectionRef.current);
      }
    };
  }, []);

  return (
    <section className="testimonials" ref={testimonialSectionRef}>
      <h1>What our customers are saying</h1>
      <p className='sub-heading'>See what our customers are saying about Asquared Real Estate. Read testimonials from satisfied clients who have experienced our exceptional service and successful real estate transactions in Dubai.</p>
      
      <div className="testimonials-container">
        <div className="testimonial">
          <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <div className="customer-info">
            <img src={villa} alt="Ali Bin Saleh" />
            <div>
              <h3>Ali Bin Saleh</h3>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <div className="customer-info">
            <img src={villa} alt="Nour Mohamed" />
            <div>
              <h3>Nour Mohamed</h3>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <div className="customer-info">
            <img src={villa} alt="Lina Kamal-Eddin" />
            <div>
              <h3>Lina Kamal-Eddin</h3>
              <p>Customer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial;
