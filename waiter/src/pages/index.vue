<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>Create Memorable Experiences Together</h1>
        <p>Loveomelet helps couples create meaningful moments through monthly activities, building a year of memories to cherish forever.</p>
        <div class="hero-buttons">
          <NuxtLink to="/register" class="btn btn-primary">Get Started</NuxtLink>
          <NuxtLink to="/how-it-works" class="btn btn-secondary">Learn More</NuxtLink>
        </div>
      </div>
      <div class="hero-image">
        <!-- Placeholder for hero image -->
        <div class="image-placeholder">
          <p>Couple enjoying an activity together</p>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="how-it-works-section">
      <h2>How Loveomelet Works</h2>
      <div class="steps-container">
        <div class="step">
          <div class="step-icon">1</div>
          <h3>Monthly Word</h3>
          <p>Each month, you'll receive a random word (an "egg") from our curated list of rare and interesting words.</p>
        </div>
        <div class="step">
          <div class="step-icon">2</div>
          <h3>Plan Together</h3>
          <p>Use our reflection tools to brainstorm and plan an activity related to your monthly word.</p>
        </div>
        <div class="step">
          <div class="step-icon">3</div>
          <h3>Create Memories</h3>
          <p>Complete your activity together and document it with photos and private reflections.</p>
        </div>
        <div class="step">
          <div class="step-icon">4</div>
          <h3>Year-End Surprise</h3>
          <p>At the end of the year, reveal your private comments and create a beautiful memory book of your experiences.</p>
        </div>
      </div>
    </section>

    <!-- Game Modes Section -->
    <section class="game-modes-section">
      <h2>Choose Your Experience</h2>
      <div class="modes-container">
        <div class="mode-card">
          <h3>Loving Chefs</h3>
          <p>Both partners share equal responsibility in planning and executing each month's activity.</p>
          <ul>
            <li>Collaborate on ideas</li>
            <li>Share planning responsibilities</li>
            <li>Experience activities together</li>
            <li>Both contribute to documentation</li>
          </ul>
        </div>
        <div class="mode-card">
          <h3>Chef and Critic</h3>
          <p>Take turns with one partner planning (the Chef) and the other documenting (the Critic).</p>
          <ul>
            <li>Alternate roles each month</li>
            <li>Chef plans and funds the activity</li>
            <li>Critic creates the report and documentation</li>
            <li>Balanced responsibilities over time</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Testimonials Section (Placeholder) -->
    <section class="testimonials-section">
      <h2>What Couples Are Saying</h2>
      <div class="testimonials-container">
        <div class="testimonial">
          <p>"Loveomelet helped us rediscover the joy of spending quality time together. We've created memories that will last a lifetime."</p>
          <div class="testimonial-author">- Sarah & Michael</div>
        </div>
        <div class="testimonial">
          <p>"The monthly challenges pushed us out of our comfort zone in the best way possible. We've tried things we never would have otherwise!"</p>
          <div class="testimonial-author">- David & Emma</div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <h2>Ready to Start Your Journey?</h2>
      <p>Create a year of unforgettable experiences with your partner.</p>
      <NuxtLink to="/register" class="btn btn-primary">Start Your Loveomelet</NuxtLink>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
}

/* Hero Section */
.hero-section {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 4rem 0;
}

.hero-content {
  flex: 1;
}

.hero-content h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
}

.btn-primary {
  background-color: #ff6b6b;
  color: white;
  border: 1px solid #ff6b6b;
}

.btn-secondary {
  background-color: transparent;
  color: #ff6b6b;
  border: 1px solid #ff6b6b;
}

.hero-image {
  flex: 1;
}

.image-placeholder {
  background-color: #f5f5f5;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: #999;
}

/* How It Works Section */
.how-it-works-section {
  padding: 4rem 0;
  text-align: center;
}

.how-it-works-section h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 3rem;
}

.steps-container {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

.step {
  flex: 1;
  min-width: 200px;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.step-icon {
  width: 50px;
  height: 50px;
  background-color: #ff6b6b;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 auto 1rem;
}

.step h3 {
  margin-bottom: 1rem;
  color: #333;
}

.step p {
  color: #666;
  line-height: 1.5;
}

/* Game Modes Section */
.game-modes-section {
  padding: 4rem 0;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin: 2rem 0;
}

.game-modes-section h2 {
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 3rem;
}

.modes-container {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.mode-card {
  flex: 1;
  min-width: 300px;
  max-width: 500px;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.mode-card h3 {
  color: #ff6b6b;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.mode-card p {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.mode-card ul {
  padding-left: 1.5rem;
  color: #666;
}

.mode-card li {
  margin-bottom: 0.5rem;
}

/* Testimonials Section */
.testimonials-section {
  padding: 4rem 0;
  text-align: center;
}

.testimonials-section h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 3rem;
}

.testimonials-container {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.testimonial {
  flex: 1;
  min-width: 300px;
  max-width: 500px;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.testimonial p {
  font-style: italic;
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.testimonial-author {
  font-weight: 600;
  color: #ff6b6b;
}

/* CTA Section */
.cta-section {
  padding: 4rem 0;
  text-align: center;
  background-color: #ff6b6b;
  color: white;
  border-radius: 8px;
  margin: 2rem 0;
}

.cta-section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.cta-section p {
  margin-bottom: 2rem;
  font-size: 1.2rem;
}

.cta-section .btn-primary {
  background-color: white;
  color: #ff6b6b;
  border: 1px solid white;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
  }
  
  .steps-container,
  .modes-container,
  .testimonials-container {
    flex-direction: column;
  }
}
</style>