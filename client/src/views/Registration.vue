<template>
  <div id="app">
    <div class="form">
      <div class="form__logo">
        Logo...
      </div>
      <div class="form__text">
        <h2 class="form-title">Создайте учетную запись</h2>
      </div>
      <div class="input-group">
        <label>E-mail</label>
        <input type="email" class="input" v-model="email">
      </div>
      <div class="input-group">
        <label>Username</label>
        <input type="text" class="input" v-model="username">
      </div>
      <div class="input-group">
        <label>Password</label>
        <input type="password" class="input" v-model="password">
      </div>
      <div class="btn-group right">
        <router-link to="/login" class="have-account">У меня есть аккаунт</router-link>
        <router-link to="/" class="btn btn-create">
          <span v-on:click="createAccount">Создать</span>
        </router-link>
      </div>
    </div>
    <div class="bottom-link-police">Политика конфиденциальности</div>
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

            this.$router.push('/login')
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
    flex-direction: column;
    height: 100vh;

    &-title {
      margin: 50px 0 20px;
      font-weight: 600;
      font-size: 18px;
    }

    .input-group {
      display: flex;
      flex-direction: column;
      margin: 10px 0;

      label {
        background: #f6f9fa;
        padding: 7px 0 0 10px;
        font-size: 14px;
        color: #5b7083;
      }

      input {
        padding: 7px 10px;
        outline: none;
        border: unset;
        border-bottom: 2px solid #5b7083;
        background: #f6f9fa;
        width: 400px;
        font-size: 18px;
      }
    }

  }

  .btn-group {
    margin: 20px 0 0;
  }

  .right {
    display: flex;
    justify-content: flex-end;
  }

  .have-account {
    margin: 0 10px 0 0;
    border: 1px solid #74345e;
    color: #74345e;
    padding: 10px 20px;
    font-weight: 500;
    border-radius: 19px;
    cursor: pointer;
    text-decoration: none;
    transition: .3s;

    &:hover {
      background-color: #74345e;
      color: #fff;
    }
  }

  .btn-create {
    border: unset;
    font-size: 16px;
    background-color: #74345e;
    color: #fff;
    font-weight: 500;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 19px;
    cursor: pointer;
    transition: .3s;
    border: 1px solid #74345e;

    &:hover {
      background: transparent;
      color: #74345e;
    }
  }

  .bottom-link-police {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    text-decoration: none;
    font-size: 14px;
    color: #5b7083;
    cursor: pointer;
  }

</style>