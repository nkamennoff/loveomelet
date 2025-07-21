<script setup>
import UserIcon from '~/components/user-icon/user-icon.vue';
import { match } from 'ts-pattern';

const localePath = useLocalePath();

const switchLocalePath = useSwitchLocalePath();
  const { locale } = useI18n();
  const { loggedIn, user, clear: clearSession } = useUserSession();

const logout = async () => {
  await clearSession();
  await navigateTo(localePath('index'));
};

const onSelect = (action) => {
  match(action)
      .with('profile', () => navigateTo(localePath('/profile')))
      .with('dashboard', () => navigateTo(localePath('/dashboard')))
      .with('logout', () => logout())
      .exhaustive();
};

</script>


<template>
  <div class="app-layout">
    <header class="app-header">
      <nav class="app-nav">
        <div class="logo">
          <NuxtLink :to="localePath('index')">
            <h1>{{ $t('common.appName') }}</h1>
          </NuxtLink>
        </div>
        <div class="nav-links">
          <NuxtLink :to="localePath('index')">{{ $t('common.home') }}</NuxtLink>
          <NuxtLink :to="localePath('about')">{{ $t('common.about') }}</NuxtLink>
          <NuxtLink :to="localePath('how-it-works')">{{ $t('common.howItWorks') }}</NuxtLink>
          <!-- Language switcher -->
          <div class="language-switcher">
            <NuxtLink v-if="locale !== 'en'" :to="switchLocalePath('en')">
              EN
            </NuxtLink>
            <NuxtLink v-if="locale !== 'fr'" :to="switchLocalePath('fr')">
              FR
            </NuxtLink>
          </div>
          <!-- Auth buttons -->
          <template v-if="loggedIn">
            <UserIcon :user="user" @select="onSelect" />
          </template>
          <template v-else>
            <a href="/api/auth/auth0" class="auth-button login" type="button">{{ $t('common.login') }}</a>
          </template>
        </div>
      </nav>
    </header>

    <main class="app-main">
      <!-- Page content will be rendered here -->
      <slot />
    </main>

    <footer class="app-footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>{{ $t('common.appName') }}</h3>
          <p>{{ $t('footer.tagline') }}</p>
        </div>
        <div class="footer-section">
          <h3>{{ $t('footer.links') }}</h3>
          <ul>
            <li><NuxtLink to="/">{{ $t('common.home') }}</NuxtLink></li>
            <li><NuxtLink to="/about">{{ $t('common.about') }}</NuxtLink></li>
            <li><NuxtLink to="/how-it-works">{{ $t('common.howItWorks') }}</NuxtLink></li>
            <li><NuxtLink to="/faq">{{ $t('common.faq') }}</NuxtLink></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>{{ $t('footer.contact') }}</h3>
          <p>{{ $t('footer.email') }}</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>{{ $t('footer.copyright', { year: new Date().getFullYear() }) }}</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
}

.app-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h1 {
  margin: 0;
  color: #ff6b6b;
  font-size: 1.8rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.nav-links a:hover {
  color: #ff6b6b;
}

.language-switcher {
  display: flex;
  gap: 0.5rem;
}

.language-switcher button {
  background: none;
  border: 1px solid #ddd;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
}

.language-switcher button:hover {
  background-color: #f5f5f5;
}

.language-switcher button.active {
  background-color: #ff6b6b;
  color: white;
  border-color: #ff6b6b;
}

.auth-button {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
}

.login {
  color: #ff6b6b;
  border: 1px solid #ff6b6b;
}

.register {
  background-color: #ff6b6b;
  color: white;
  border: 1px solid #ff6b6b;
}

.app-main {
  flex: 1;
  padding: 2rem;
}

.app-footer {
  background-color: #333;
  color: #fff;
  padding: 2rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section {
  flex: 1;
  min-width: 200px;
}

.footer-section h3 {
  color: #ff6b6b;
  margin-bottom: 1rem;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: #ddd;
  text-decoration: none;
}

.footer-section a:hover {
  color: #ff6b6b;
}

.footer-bottom {
  border-top: 1px solid #555;
  padding-top: 1rem;
  text-align: center;
}
</style>