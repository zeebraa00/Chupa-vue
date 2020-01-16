<template>
  <div>
    <div class="fh5co-loader"></div>
    <div>
      <Welcome/>
      <Contents/>
    </div>
  </div>
</template>

<script>
import Welcome from "@/views/main/Welcome"
import Contents from "@/views/main/Contents"
export default {
  components : {
    Welcome,
    Contents
  }

}
</script>

<style>

</style>