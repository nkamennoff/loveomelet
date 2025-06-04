<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>{{ $t('home.hero.title') }}</h1>
        <p>{{ $t('home.hero.description') }}</p>
        <div class="hero-buttons">
          <NuxtLink to="/register" class="btn btn-primary">{{ $t('common.getStarted') }}</NuxtLink>
          <NuxtLink to="/how-it-works" class="btn btn-secondary">{{ $t('common.learnMore') }}</NuxtLink>
        </div>
      </div>
      <div class="hero-image">
        <!-- Placeholder for hero image -->
        <div class="image-placeholder">
          <p>{{ $t('home.hero.imagePlaceholder', 'Couple enjoying an activity together') }}</p>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="how-it-works-section">
      <h2>{{ $t('home.howItWorks.title') }}</h2>
      <div class="steps-container">
        <div class="step">
          <div class="step-icon">1</div>
          <h3>{{ $t('home.howItWorks.steps.step1.title') }}</h3>
          <p>{{ $t('home.howItWorks.steps.step1.description') }}</p>
        </div>
        <div class="step">
          <div class="step-icon">2</div>
          <h3>{{ $t('home.howItWorks.steps.step2.title') }}</h3>
          <p>{{ $t('home.howItWorks.steps.step2.description') }}</p>
        </div>
        <div class="step">
          <div class="step-icon">3</div>
          <h3>{{ $t('home.howItWorks.steps.step3.title') }}</h3>
          <p>{{ $t('home.howItWorks.steps.step3.description') }}</p>
        </div>
        <div class="step">
          <div class="step-icon">4</div>
          <h3>{{ $t('home.howItWorks.steps.step4.title') }}</h3>
          <p>{{ $t('home.howItWorks.steps.step4.description') }}</p>
        </div>
      </div>
    </section>

    <!-- Game Modes Section -->
    <section class="game-modes-section">
      <h2>{{ $t('home.gameModes.title') }}</h2>
      <div class="modes-container">
        <div class="mode-card">
          <h3>{{ $t('home.gameModes.lovingChefs.title') }}</h3>
          <p>{{ $t('home.gameModes.lovingChefs.description') }}</p>
          <ul>
            <li>{{ $t('home.gameModes.lovingChefs.features[0]') }}</li>
            <li>{{ $t('home.gameModes.lovingChefs.features[1]') }}</li>
            <li>{{ $t('home.gameModes.lovingChefs.features[2]') }}</li>
            <li>{{ $t('home.gameModes.lovingChefs.features[3]') }}</li>
          </ul>
        </div>
        <div class="mode-card">
          <h3>{{ $t('home.gameModes.chefAndCritic.title') }}</h3>
          <p>{{ $t('home.gameModes.chefAndCritic.description') }}</p>
          <ul>
            <li>{{ $t('home.gameModes.chefAndCritic.features[0]') }}</li>
            <li>{{ $t('home.gameModes.chefAndCritic.features[1]') }}</li>
            <li>{{ $t('home.gameModes.chefAndCritic.features[2]') }}</li>
            <li>{{ $t('home.gameModes.chefAndCritic.features[3]') }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Testimonials Section (Placeholder) -->
    <section class="testimonials-section">
      <h2>{{ $t('home.testimonials.title') }}</h2>
      <div class="testimonials-container">
        <div class="testimonial">
          <p>{{ $t('home.testimonials.testimonial1', '"Loveomelet helped us rediscover the joy of spending quality time together. We\'ve created memories that will last a lifetime."') }}</p>
          <div class="testimonial-author">{{ $t('home.testimonials.author1', '- Sarah & Michael') }}</div>
        </div>
        <div class="testimonial">
          <p>{{ $t('home.testimonials.testimonial2', '"The monthly challenges pushed us out of our comfort zone in the best way possible. We\'ve tried things we never would have otherwise!"') }}</p>
          <div class="testimonial-author">{{ $t('home.testimonials.author2', '- David & Emma') }}</div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <h2>{{ $t('home.cta.title') }}</h2>
      <p>{{ $t('home.cta.description') }}</p>
      <NuxtLink to="/register" class="btn btn-primary">{{ $t('home.cta.button') }}</NuxtLink>
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
