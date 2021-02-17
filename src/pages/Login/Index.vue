<style lang="scss" scoped>

.container {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>

<template>
  <div class="container">
     <HelloWorld :msg="msg" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
export default {
  data () {
    return {
      msg: 'CHORES'
    }
  },
  components: {
    HelloWorld
  }
}
</script>
