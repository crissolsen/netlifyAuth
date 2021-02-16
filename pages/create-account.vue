<template>
  <div>
    <form>
      <input v-model="email" type="email" placeholder="email@email.com" />
      <input v-model="password" type="password" />
      <div @click="createUser(userData(), userPass())">Submit</div>
    </form>
    <p>{{ email }}, {{ password }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    createUser(data, credentials) {
      return fetch("https://sad-morse-5caf1d.netlify.app/.netlify/functions/auth", {
        body: JSON.stringify(data, credentials),
        method: "POST",
      }).then((response) => {
        return response.json();
      });
    },
    userData() {
      return {
          data: {
          email: this.email
          }
      }
    },
    userPass() { 
        return {
            credentials: {
          password: this.password,
        }
    }
    },
  },
};
</script>