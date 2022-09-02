<template>
    <div class="login">
        <h1>{{ msg }}</h1>
        <h2>로그인 기능</h2>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'login sample'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
 font-weight: normal;
}
</style>
