<template>
  <div>
    <form>
      <input v-model="email" type="email" placeholder="email@email.com" />
      <input v-model="password" type="password" />
      <div @click="createUser(userData())">Submit</div>
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
    createUser(data) {
      return fetch("https://sad-morse-5caf1d.netlify.app/.netlify/functions/auth", {
        body: JSON.stringify(data),
        method: "POST",
      }).then((response) => {
        return response.json();
      });
    },
    userData() {
      return {
          data: {
          email: this.email
          },
           credentials: {
          password: this.password,
        }
      };
    },
  },
};
</script>