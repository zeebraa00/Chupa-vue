<template>
<div>
  <ChupaHeader />
  <router-view/>
  <ChupaFooter />
</div>
</template>

<script>
import ChupaHeader from './ChupaHeader'
import ChupaFooter from './ChupaFooter'

export default {
  components : {
    ChupaHeader,
    ChupaFooter
  }
}
</script>

<style>

</style>