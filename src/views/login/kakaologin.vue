<template>
  <div id="app">
    <KakaoLogin
      api-key="d8fe2b3c893daa580e37b60a52fc124a"
      image="kakao_login_btn_large"
      :on-success="onSuccess()"
      :on-failure="onFailure()"
      />
  </div>
</template>
 
<script>
import KakaoLogin from 'vue-kakao-login'
 
let onSuccess = (data) => {
  console.log(data)
  console.log("success")
}
let onFailure = (data) => {
  console.log(data)
  console.log("failure")
}
 
export default {
  name: 'App',
  components: {
    KakaoLogin
  },
  methods: {
    onSuccess () {
      console.log("methods success");
    },
    onFailure () {
      console.log("methods failure");
    }
  }
}
</script>
 
<style>
</style>