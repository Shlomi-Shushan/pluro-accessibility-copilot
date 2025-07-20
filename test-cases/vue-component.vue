<template>
  <div class="vue-test">
    <h1>Vue Accessibility Test</h1>
    
    <!-- Missing alt -->
    <img :src="imageSrc">
    
    <!-- Good alt -->
    <img :src="imageSrc" :alt="imageAlt">
    
    <!-- Button without accessible name -->
    <button @click="handleClick">
      <i class="icon-close"></i>
    </button>
    
    <!-- Button with accessible name -->
    <button @click="handleClick" aria-label="Close modal">
      <i class="icon-close"></i>
    </button>
    
    <!-- Form without labels -->
    <form @submit="handleSubmit">
      <input v-model="username" type="text" placeholder="Username">
      <input v-model="password" type="password" placeholder="Password">
      <button type="submit">Login</button>
    </form>
    
    <!-- Form with proper labels -->
    <form @submit="handleSubmit">
      <label for="username-field">Username:</label>
      <input 
        id="username-field"
        v-model="username" 
        type="text" 
        required
        aria-describedby="username-help"
      >
      <div id="username-help">Enter your username</div>
      
      <label for="password-field">Password:</label>
      <input 
        id="password-field"
        v-model="password" 
        type="password" 
        required
        aria-describedby="password-help"
      >
      <div id="password-help">Enter your password</div>
      
      <button type="submit">Login</button>
    </form>
    
    <!-- Hebrew text without direction -->
    <p>שלום עולם</p>
    
    <!-- Hebrew text with proper direction -->
    <p dir="rtl">שלום עולם</p>
  </div>
</template>

<script>
export default {
  name: 'VueTest',
  data() {
    return {
      imageSrc: '/images/test.jpg',
      imageAlt: 'Test image description',
      username: '',
      password: ''
    }
  },
  methods: {
    handleClick() {
      console.log('Button clicked')
    },
    handleSubmit(event) {
      event.preventDefault()
      console.log('Form submitted')
    }
  }
}
</script>

<style scoped>
/* Low contrast */
.low-contrast {
  color: #ccc;
  background: white;
}

/* Good contrast */
.good-contrast {
  color: #333;
  background: white;
}

/* Small font size */
.small-text {
  font-size: 10px;
}

/* Good font size */
.good-text {
  font-size: 16px;
}
</style>
