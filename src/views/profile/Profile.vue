<template>
  <div class="container">
    <div class="row">
      <PostIt
      v-for="post in posts"
      :post="post"
      :key="post.id"/>
    </div>
  </div>
  
</template>

<script>
import PostIt from '@/views/main/PostIt'

export default {
    data() {
        return {
            posts : []
        }
    },
    components: {
        PostIt
    },
    created : async function () {
        const List = await this.$axios.get('/rest/post_it/mypost_it');
        this.posts= List.data;
      }
    }
</script>

<style>

</style>