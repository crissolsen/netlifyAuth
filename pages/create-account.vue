<template>
    <div>
        <form>
            <input v-model="email" type="email" placeholder="email@email.com">
            <input v-model="password" type="password">
            <div @click= "submitUser">Submit</div>
        </form>
        <p>{{ email }}, {{ password }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '', 
            password: ''
        }
    }, 
    methods: {
        submitUser() {
            this.$fauna.createUser(this.email, this.password)
        }
    }
}
</script>