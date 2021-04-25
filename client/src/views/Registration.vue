<template>
  <div id="app">
    <div class="form">
      <div class="form__content">
        <div class="form-group">
          <input type="email" placeholder="Email" v-model="email">
        </div>
        <div class="form-group">
          <input type="text" placeholder="Username" v-model="username">
        </div>
        <div class="form-group">
          <input type="password" placeholder="Password" v-model="password">
        </div>
        <div class="form-group">
          <button type="submit" class="btn-submit" v-on:click="createAccount">Submit</button>
        </div>
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
        email: '',
        username: '',
        password: ''
      }
    },
    methods: {
      createAccount() {
        const payload = {
          email: this.email,
          username: this.username,
          password: this.password
        }

        axios.post('/api/registration', payload).then(response => {
          if (response.data.status === 200) {
            console.log(response.data)
            // TODO: ........
          } else {
            console.log(response.data)
            // TODO: Написать кастомную ошибку
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