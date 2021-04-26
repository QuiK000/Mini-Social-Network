<template>
  <div id="app">
    <div class="feed">
      <h2>FEED</h2>
      <div>
        <span>{{ users.username }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import jwt from 'jsonwebtoken'

  export default {
    name: "Feed",
    data() {
      return {
        users: [],
      }
    },
    methods: {
      fetchUsers() {
        const token = this.$cookies.get('token')

        axios.get('/api/users', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then(response => {
          console.log(response)

          if (response.status !== 200 && response.statusText !== 'OK') {
            console.log('Проблема с сервером') // TODO: Написать кастомную ошибку!
          }

          this.users = response.data
        }).catch(e => console.log(e))
      }
    },
    mounted() {
      this.fetchUsers()
    }
  }
</script>