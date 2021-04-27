<template>
  <div id="app">
    <div class="feed">
      <h2>FEED</h2>
      <div v-for="user in users" v-bind:key="user.currentUser._id">
        <span v-if="user.currentUser.message">Error: {{ user.currentUser.message }} Status: {{ user.currentUser.status }}</span>
        <span v-else>Username: {{ user.currentUser.username }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

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
          const currentUser = response.data

          if (response.status !== 200 && response.statusText !== 'OK') {
            console.log('Проблема с сервером') // TODO: Написать кастомную ошибку!
          }

          this.users.push({ currentUser })
        }).catch(e => console.log(e))
      }
    },
    mounted() {
      this.fetchUsers()
    }
  }
</script>