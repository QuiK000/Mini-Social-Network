<template>
  <div id="login">
    <div class="login">
      <div>
        <input type="text" placeholder="username" v-model="username">
        <input type="text" placeholder="password" v-model="password">
        <button v-on:click="loginAccount">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "Login",
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      loginAccount() {
        const payload = {
          username: this.username,
          password: this.password
        }

        axios.post('/api/login', payload).then(response => {
          if (response.data.status === 200) {
            this.$router.push('/')
          } else {
            // TODO: Написать кастомную ошибку!
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>