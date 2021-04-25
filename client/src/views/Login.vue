<template>
  <div id="app">
    <div class="form">
      <div class="form__content">
        <div class="form-group">
          <input type="text" placeholder="Username" v-model="username">
        </div>
        <div class="form-group">
          <input type="password" placeholder="Password" v-model="password">
        </div>
        <div class="form-group">
          <button type="submit" class="btn-submit" v-on:click="loginAccount">Submit</button>
        </div>
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
            console.log(response.data)

            this.$router.push('/')
          } else {
            console.log(response.data)
            // TODO: Написать кастомную ошибку!
          }
        })
      }
    }
  }
</script>

<style lang="scss">

.form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;

  &-group {
    margin-bottom: 10px;

    input {
      outline: transparent;

      background: #fff;
      border: 1px solid #ccc;
      width: 270px;
      height: 35px;
      padding: 0 10px;
      transition: .3s;

      &::placeholder {
        font-weight: 300;
      }
    }
  }

  .btn-submit {
    width: 100%;
    height: 30px;
  }
}

</style>