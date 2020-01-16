<template>
    <div>
        <aside id="fh5co-hero" class="js-fullheight">
            <div class="flexslider js-fullheight">
                <ul class="slides">
                <li class="entrance">
                    <div class="overlay-gradient"></div>
                    <div class="container">
                        <div class="col-md-3 col-md-offset-4.5 col-md-pull-4.5 js-fullheight slider-text">
                            <div class="slider-text-inner">
                                <div class="desc">
                                    <h2>Write<br>Get<br>Love!</h2>
                                    <br>
                                    <h5>start new love.</h5>
                                <row>
                                    <input v-model="sex" type="radio" value=1 /> &nbsp;male
                                    &nbsp;
                                    <input v-model="sex" type="radio" value=0 /> &nbsp;female
                                </row>
                                <br><br>
                                <div>
                                    <textarea v-model="nickname" rows="1" cols="35" value="nickname" placeholder="nickname"></textarea>
                                </div>
                                <br>
                                <div>
                                    <textarea v-model="text" rows="5" cols="35" value="text" placeholder="introduce yourself"></textarea>
                                </div>
                                <br>
                                <div>
                                    <textarea v-model="kakao_id" rows="1" cols="35" value="phonenumber" placeholder="phone number (010-xxxx-xxxx)"></textarea>
                                </div>
                                <br>
                                By creating this, you agree to our Conditions of Use and <a href="/policy">Privacy Notice(See)</a>.
                                <br><br><br>
                                    <button v-on:click="throwchupa()" class="btn btn-primary btn-outline btn-lg">Start Love!</button>
                                    <br />
                                    <a href="/profile">My history</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                </ul>
            </div>
        </aside>
    </div>
</template>

<script>
export default {
  name: 'Welcome',
    data() {
      return {
        sex : "",
        nickname : "",
        text : "",
        kakao_id : ""
      }
    },
    methods : {
      async throwchupa () {      
        let body = {
          sex : this.sex,
          nickname : this.nickname,
          text : this.text,
          kakao_id : this.kakao_id
        }
        try {
            const a = await this.$axios.post('/rest/post_it/newpost_it', body);
            if (a.status === 200) {
                if(a.data.result === true) {
                    alert('성공적으로 추파를 던졌습니다');
                    window.history.go();
                }
            }
        }
        catch (err) {
            if(err.response.status === 403) {
                if(err.response.data.message === 'no session')  alert('로그인을 해주세요');
            }
        }
    }
  }
}
</script>

<style>

</style>