<template>
  <div id="app">
    <div class="feed">
      <h2>FEED</h2>
      <ul v-for="user in users">
        <li>Username: {{ user.username }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "Feed",
    data() {
      return {
        users: []
      }
    },
    methods: {
      fetchUsers() {
        axios.get('/api/users').then(response => this.users = response.data)
      }
    },
    mounted() {
      this.fetchUsers()
    }
  }
</script>