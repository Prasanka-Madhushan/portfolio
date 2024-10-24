import React, { useState, useEffect } from 'react';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            content:
                "Working with Prasanka was a fantastic experience. Their ability to take complex problems, deliver clear, innovative solutions was exactly what our project needed. Their professionalism and attention to detail made all the difference in bringing our project to life.",
            author: "Sachith Priyamantha",
            title: "Associate Software Engineer",
            company: "Dockyard Total Solution",
            image: "https://i.ibb.co/0trtXVy/sachith.jpg",
        },
        {
            content:
                "I've collaborated with Prasanka on multiple projects, and they consistently exceed expectations. Their technical expertise and creative approach helped streamline our processes, saving time and resources. Highly recommend for anyone looking for a dedicated and skilled professional!",
            author: "Dilmith Siriwardhana",
            title: "Fullstack Developer",
            company: "Employee of SLT",
            image: "https://i.ibb.co/MS3gchL/dilmith.jpg",
        },
        {
            content:
                "Prasanka is a top-notch developer with a great work ethic. Their ability to quickly understand requirements and translate them into efficient, scalable solutions was invaluable to our team. Their contributions made a significant impact on our product's success.",
            author: "Sajina Disanayake",
            title: "Fullstack Engineer",
            company: "Online Entrepreneur",
            image: "https://i.ibb.co/jrr1PKf/sajina.jpg",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 2500); // Auto-slide every 5 seconds

        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <div className="testimonials" id="testimonials">
            <div className="testimonials-content">
                <h2 className="heading">Testimonials</h2>
                {/* <p className="subheading">What our clients are saying</p> */}

                <div className="testimonial-card">
                    <blockquote className="testimonial-content">
                        <p>{testimonials[currentIndex].content}</p>
                    </blockquote>

                    <div className="testimonial-author">
                        <img
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].author}
                        />
                        <div className="author-details">
                            <h4>{testimonials[currentIndex].author}</h4>
                            <p>
                                {testimonials[currentIndex].title}
                                <br />
                                {testimonials[currentIndex].company}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
