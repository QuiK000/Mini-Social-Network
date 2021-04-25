<template>
  <div id="app">
    <div class="registration">
      <div>
        <input type="text" placeholder="username" v-model="username">
        <input type="text" placeholder="password" v-model="password">
        <button v-on:click="createAccount">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "Registration",
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      createAccount() {
        const payload = {
          username: this.username,
          password: this.password
        }

        axios.post('http://localhost:3000/api/registration', payload).then(response => console.log(response.data))
      }
    }
  }
</script>

<style scoped>

</style>