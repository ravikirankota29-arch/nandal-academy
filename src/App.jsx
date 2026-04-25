import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { Brain, Zap, Target, Star, MessageCircle, ChevronRight, Award, Users, Clock, TrendingUp, Sparkles, Calculator, BookOpen, Trophy, Heart, Play, Pause, RotateCcw, Phone } from 'lucide-react';

const App = () => {
  // State for interactive features
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentProblem, setCurrentProblem] = useState({ num1: 123, num2: 456, result: 579 });
  const [showResult, setShowResult] = useState(false);
  const [enrollmentData, setEnrollmentData] = useState({
    parentName: '',
    phone: '',
    email: '',
    childName: '',
    childAge: '',
    program: ''
  });
  const [showEnrollmentSuccess, setShowEnrollmentSuccess] = useState(false);
  const [demoMode, setDemoMode] = useState(false);
  const [beadPositions, setBeadPositions] = useState({});

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Simplified animations for better performance
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  // Generate random math problems
  const generateNewProblem = () => {
    const num1 = Math.floor(Math.random() * 500) + 100;
    const num2 = Math.floor(Math.random() * 500) + 100;
    setCurrentProblem({ num1, num2, result: num1 + num2 });
    setShowResult(false);
    setIsAnimating(false);
    setBeadPositions({});
  };

  // Handle enrollment form submission
  const handleEnrollment = (e) => {
    e.preventDefault();
    if (enrollmentData.parentName && enrollmentData.phone && enrollmentData.email) {
      // Send WhatsApp message
      sendWhatsAppMessage(enrollmentData);
      setShowEnrollmentSuccess(true);
      setTimeout(() => setShowEnrollmentSuccess(false), 3000);
      // Clear form
      setEnrollmentData({
        parentName: '',
        phone: '',
        email: '',
        childName: '',
        childAge: '',
        program: ''
      });
    }
  };

  // Send WhatsApp message
  const sendWhatsAppMessage = (data) => {
    const phoneNumber = '918446859957'; // Replace with your actual WhatsApp number
    const message = encodeURIComponent(
      `🎓 *New Enrollment Inquiry - Nandal Academy*\n\n` +
      `*Parent Details:*\n` +
      `👤 Name: ${data.parentName}\n` +
      `📱 Phone: ${data.phone}\n` +
      `📧 Email: ${data.email}\n\n` +
      `*Child Details:*\n` +
      `👶 Name: ${data.childName}\n` +
      `🎂 Age: ${data.childAge}\n` +
      `📚 Program: ${data.program}\n\n` +
      `📅 Date: ${new Date().toLocaleDateString()}\n` +
      `⏰ Time: ${new Date().toLocaleTimeString()}\n\n` +
      `*Please contact this parent for enrollment.*`
    );
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  // Quick WhatsApp contact
  const handleQuickWhatsApp = () => {
    const phoneNumber = '918446859957'; // Replace with your actual WhatsApp number
    const message = encodeURIComponent(
      `👋 Hi! I'm interested in enrolling my child at Nandal Academy. Could you please provide more information about your programs?`
    );
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  // Handle input changes
  const handleInputChange = (e) => {
    setEnrollmentData({
      ...enrollmentData,
      [e.target.name]: e.target.value
    });
  };

  // Safe animation handler
  const handleTryIt = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setShowResult(false);
    
    // Show result after animation
    setTimeout(() => {
      setShowResult(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    }, 1500);
  };

  // Handle enroll now button clicks
  const handleEnrollNow = () => {
    // Scroll to enrollment form
    const enrollmentSection = document.getElementById('enrollment');
    if (enrollmentSection) {
      enrollmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      {/* Simplified Navigation - No animations for performance */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <Calculator className="logo-icon" />
              <span>Nandal Academy</span>
            </div>
            <div className="nav-links">
              <a href="#home">Home</a>
              <a href="#programs">Programs</a>
              <a href="#benefits">Benefits</a>
              <a href="#testimonials">Success Stories</a>
              <button className="btn btn-whatsapp" onClick={handleQuickWhatsApp}>
                <MessageCircle />
                WhatsApp
              </button>
              <button className="btn btn-primary" onClick={handleEnrollNow}>
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Simplified Hero Section - No heavy animations */}
      <header className="hero">
        {/* Static Background - No animations */}
        <div className="hero-bg-animation">
          <div className="floating-shape shape-1" />
          <div className="floating-shape shape-2" />
          <div className="floating-shape shape-3" />
        </div>

        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles className="badge-icon" />
              <span>🏆 Award-Winning Program</span>
            </div>
            
            <h1 className="hero-title">
              Transform Your Child's
              <span className="text-accent"> Mathematical Genius</span>
            </h1>
            
            <p className="hero-subtitle">
              Join 10,000+ students who've unlocked their brain's full potential through our revolutionary abacus training method
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">10x</div>
                <div className="stat-label">Faster Calculation</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Improvement Rate</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Success Stories</div>
              </div>
            </div>
            
            <div className="hero-buttons">
              <button className="btn btn-primary btn-large">
                <Trophy className="btn-icon" />
                Start Free Trial
                <ChevronRight className="btn-arrow" />
              </button>
              <button className="btn btn-secondary btn-large">
                <BookOpen className="btn-icon" />
                View Programs
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Programs Section - Simplified */}
      <section className="section section-light" id="programs">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Award className="badge-icon" />
              <span>Our Programs</span>
            </div>
            <h2 className="heading-2">Choose Your Path to Excellence</h2>
            <p className="text-large text-muted">
              Tailored programs designed for different age groups and skill levels
            </p>
          </div>

          <div className="programs-grid">
            {[
              {
                title: "Junior Mathematicians",
                age: "Ages 5-7",
                duration: "6 Months",
                price: "$99/month",
                features: ["Basic Number Recognition", "Simple Addition/Subtraction", "Fun Learning Games", "Parent Progress Reports"],
                color: "linear-gradient(135deg, #667eea, #764ba2)",
                icon: <Brain className="program-icon" />
              },
              {
                title: "Math Wizards",
                age: "Ages 8-12", 
                duration: "12 Months",
                price: "$149/month",
                features: ["Advanced Calculations", "Mental Math Techniques", "Speed Training", "Competition Preparation"],
                color: "linear-gradient(135deg, #f093fb, #f5576c)",
                icon: <Zap className="program-icon" />
              },
              {
                title: "Master Scholars",
                age: "Ages 13+",
                duration: "18 Months", 
                price: "$199/month",
                features: ["Complex Problem Solving", "Competitive Math", "Brain Training", "Certification Program"],
                color: "linear-gradient(135deg, #4facfe, #00f2fe)",
                icon: <Trophy className="program-icon" />
              }
            ].map((program, idx) => (
              <div key={idx} className="program-card">
                <div className="program-header" style={{ background: program.color }}>
                  <div className="program-icon-wrapper">{program.icon}</div>
                  <h3 className="program-title">{program.title}</h3>
                  <div className="program-meta">
                    <span className="program-age">{program.age}</span>
                    <span className="program-duration">{program.duration}</span>
                  </div>
                </div>
                <div className="program-content">
                  <div className="program-price">
                    <span className="price-amount">{program.price}</span>
                  </div>
                  <ul className="program-features">
                    {program.features.map((feature, i) => (
                      <li key={i} className="feature-item">
                        <Star className="feature-icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="program-buttons">
                    <button className="btn btn-whatsapp program-btn-whatsapp" onClick={handleQuickWhatsApp}>
                      <MessageCircle />
                      WhatsApp
                    </button>
                    <button className="btn btn-primary program-btn" onClick={handleEnrollNow}>Enroll Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Section - Simplified */}
      <section className="section section-dark" id="benefits">
        <div className="container">
          <div className="learning-showcase-compact">
            <div className="section-header-centered">
              <div className="section-badge">
                <Target className="badge-icon" />
                <span>How Abacus Works</span>
              </div>
              <h2 className="heading-2">Learn Math the Easy Way</h2>
              <p className="text-large text-muted">
                See how simple it is to solve math problems with abacus - no more counting on fingers!
              </p>
            </div>

            <div className="abacus-tutorial-section">
              <div className="tutorial-steps">
                <h3 className="tutorial-title">Simple 3-Step Method</h3>
                
                <div className="step-by-step-guide">
                  <div className="tutorial-step">
                    <div className="step-icon">👆</div>
                    <div className="step-info">
                      <h4>Step 1: Move Beads</h4>
                      <p>Move beads to show the first number (like 123)</p>
                    </div>
                  </div>
                  
                  <div className="tutorial-step">
                    <div className="step-icon">➕</div>
                    <div className="step-info">
                      <h4>Step 2: Add More</h4>
                      <p>Move more beads to add the second number (like 456)</p>
                    </div>
                  </div>
                  
                  <div className="tutorial-step">
                    <div className="step-icon">👀</div>
                    <div className="step-info">
                      <h4>Step 3: Count & Answer!</h4>
                      <p>Just count the beads - answer appears instantly (579)</p>
                    </div>
                  </div>
                </div>
                
                <div className="why-it-works">
                  <h4>Why It's So Easy:</h4>
                  <ul className="easy-benefits">
                    <li>🧠 Uses both sides of brain</li>
                    <li>👀 Visual - no memorizing needed</li>
                    <li>⚡ 10x faster than paper method</li>
                    <li>🎯 Build confidence in math</li>
                  </ul>
                </div>
              </div>

              <div className="abacus-demo-compact">
                <div className="abacus-container-3d-simple">
                  <div className="abacus-frame-3d-simple">
                    {[1, 2, 3, 4, 5].map((rod) => (
                      <div key={rod} className="abacus-rod-3d-simple" style={{ left: `${rod * 16}%` }}>
                        <motion.div 
                          className={`abacus-bead-3d-simple bead-yellow ${isAnimating ? 'move-bead-3d' : ''}`}
                          style={{ top: '20px' }}
                          animate={isAnimating ? { 
                            y: [0, 40, 0],
                            rotateZ: [0, 180, 360]
                          } : {}}
                          transition={{ 
                            duration: 1.5, 
                            delay: rod * 0.2,
                            ease: "easeInOut"
                          }}
                        />
                        <motion.div 
                          className={`abacus-bead-3d-simple bead-blue ${isAnimating ? 'move-bead-3d' : ''}`}
                          style={{ bottom: '20px' }}
                          animate={isAnimating ? { 
                            y: [0, -30, 0],
                            rotateZ: [0, -180, -360]
                          } : {}}
                          transition={{ 
                            duration: 2, 
                            delay: rod * 0.3,
                            ease: "easeInOut"
                          }}
                        />
                      </div>
                    ))}
                    <div className="abacus-divider-3d-simple" />
                    <div className="abacus-glow-3d-simple" />
                  </div>
                </div>
                
                <div className="simple-demo-controls">
                  <div className="problem-simple">
                    <span className="math-problem">{currentProblem.num1} + {currentProblem.num2} = ?</span>
                    {showResult && (
                      <motion.span 
                        className="answer-simple"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        = {currentProblem.result}
                      </motion.span>
                    )}
                  </div>
                  
                  <div className="demo-buttons">
                    <button 
                      className="demo-btn-simple primary"
                      onClick={handleTryIt}
                      disabled={isAnimating}
                    >
                      <Play />
                      {isAnimating ? 'Calculating...' : 'Try It!'}
                    </button>
                    <button 
                      className="demo-btn-simple secondary"
                      onClick={generateNewProblem}
                      disabled={isAnimating}
                    >
                      <RotateCcw />
                      New Problem
                    </button>
                  </div>
                  
                  {showResult && (
                    <motion.div 
                      className="success-message"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Trophy className="success-icon" />
                      <span>Great! You solved it in just 2 seconds!</span>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="parent-benefits-compact">
              <h3>For Parents - Why Choose Abacus?</h3>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <div className="benefit-emoji">📈</div>
                  <h4>95% Improvement</h4>
                  <p>Students show measurable improvement in just 3 months</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-emoji">👨‍🏫</div>
                  <h4>Expert Teachers</h4>
                  <p>Certified instructors with 10+ years experience</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-emoji">⏰</div>
                  <h4>Flexible Schedule</h4>
                  <p>Weekend and evening classes available</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-emoji">❤️</div>
                  <h4>Personal Attention</h4>
                  <p>1:8 teacher-student ratio for best learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section - Simplified */}
      <section className="section section-light" id="testimonials">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-badge">
              <Star className="badge-icon" />
              <span>Success Stories</span>
            </div>
            <h2 className="heading-2">Transforming Lives Through Math</h2>
            <p className="text-large text-muted">
              Hear from parents and students who've experienced the Nandal Academy difference
            </p>
          </div>

          <div className="testimonials-grid">
            {[
              {
                name: "Sarah Johnson",
                role: "Parent of Emma (8 years)",
                content: "Emma went from struggling with basic math to solving complex problems in her head. Her confidence has soared!",
                rating: 5,
                image: "👩‍👧"
              },
              {
                name: "Michael Chen",
                role: "Parent of Ryan (10 years)",
                content: "The improvement in Ryan's concentration and grades has been remarkable. Worth every penny!",
                rating: 5,
                image: "👨‍👦"
              },
              {
                name: "Lisa Martinez",
                role: "Parent of Sofia (12 years)",
                content: "Sofia now loves math and even participates in competitions. The teachers are amazing!",
                rating: 5,
                image: "👩‍👧"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-avatar">{testimonial.image}</div>
                  <div className="testimonial-info">
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="rating-star" />
                    ))}
                  </div>
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Simplified */}
      <section className="section" id="enrollment">
        <div className="container">
          <div className="cta-section">
            <div className="cta-content">
              <div className="cta-badge">
                <Sparkles className="badge-icon" />
                <span>Limited Time Offer</span>
              </div>
              
              <h2 className="heading-2">Ready to Unlock Your Child's Potential?</h2>
              <p className="text-large">
                Join 10,000+ successful students. Start with a free trial and get 20% off your first month!
              </p>
              
              <div className="cta-stats">
                <div className="cta-stat">
                  <span className="cta-number">10,000+</span>
                  <span className="cta-label">Students Enrolled</span>
                </div>
                <div className="cta-stat">
                  <span className="cta-number">4.9/5</span>
                  <span className="cta-label">Parent Rating</span>
                </div>
                <div className="cta-stat">
                  <span className="cta-number">95%</span>
                  <span className="cta-label">Success Rate</span>
                </div>
              </div>
              
              <form className="cta-form" onSubmit={handleEnrollment}>
                <div className="form-row">
                  <input 
                    type="text" 
                    name="parentName"
                    placeholder="Parent's Name" 
                    className="input"
                    value={enrollmentData.parentName}
                    onChange={handleInputChange}
                    required
                  />
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Phone Number" 
                    className="input"
                    value={enrollmentData.phone}
                    onChange={handleInputChange}
                    required
                  />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email Address" 
                    className="input"
                    value={enrollmentData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <input 
                    type="text" 
                    name="childName"
                    placeholder="Child's Name" 
                    className="input"
                    value={enrollmentData.childName}
                    onChange={handleInputChange}
                    required
                  />
                  <input 
                    type="number" 
                    name="childAge"
                    placeholder="Child's Age" 
                    className="input"
                    value={enrollmentData.childAge}
                    onChange={handleInputChange}
                    min="5"
                    max="18"
                    required
                  />
                  <select 
                    name="program"
                    className="input"
                    value={enrollmentData.program}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Program</option>
                    <option value="junior">Junior Mathematicians (Ages 5-7)</option>
                    <option value="wizards">Math Wizards (Ages 8-12)</option>
                    <option value="scholars">Master Scholars (Ages 13+)</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary btn-large cta-btn">
                  <Trophy className="btn-icon" />
                  Start Free Trial
                  <ChevronRight className="btn-arrow" />
                </button>
              </form>
              
              {showEnrollmentSuccess && (
                <div className="enrollment-success">
                  <MessageCircle className="success-icon" />
                  <span>WhatsApp message sent! We'll contact you within 24 hours.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Simplified */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <Calculator className="logo-icon" />
                <span>Nandal Academy</span>
              </div>
              <p className="footer-description">
                Empowering young minds through revolutionary abacus training methods that build confidence, speed, and mathematical excellence.
              </p>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  <MessageCircle />
                </a>
                <a href="#" className="social-icon">
                  <Star />
                </a>
                <a href="#" className="social-icon">
                  <Heart />
                </a>
              </div>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h4 className="footer-title">Programs</h4>
                <ul className="footer-list">
                  <li><a href="#">Junior Mathematicians</a></li>
                  <li><a href="#">Math Wizards</a></li>
                  <li><a href="#">Master Scholars</a></li>
                  <li><a href="#">Summer Camp</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h4 className="footer-title">Resources</h4>
                <ul className="footer-list">
                  <li><a href="#">Parent Guide</a></li>
                  <li><a href="#">Success Stories</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h4 className="footer-title">Contact</h4>
                <ul className="footer-list">
                  <li><a href="tel:+1234567890">+1 (234) 567-890</a></li>
                  <li><a href="mailto:info@nandalacademy.com">info@nandalacademy.com</a></li>
                  <li><a href="#">Locations</a></li>
                  <li><a href="#">Support</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2026 Nandal Academy. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Widget */}
      <div className="whatsapp-float">
        <button className="whatsapp-float-btn" onClick={handleQuickWhatsApp}>
          <MessageCircle className="whatsapp-icon" />
          <span className="whatsapp-text">Chat on WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

export default App;