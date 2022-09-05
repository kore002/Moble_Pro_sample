<template>
    <div class="login">
        <h1>{{ msg }}</h1>
        <h2>로그인 기능</h2>
        <label>제목 : </label><input type="text"/><br/>
        <label>내용</label><br/><input type="textarea"/>
    </div>
</template>

<script>
export default {
  name: 'textinput',
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
