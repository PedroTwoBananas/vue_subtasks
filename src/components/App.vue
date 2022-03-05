<template>
   <router-view />
</template>

<script>
export default {
   computed: {
      storeTodos() {
         return this.$store.getters.storeTodos
      },
   },
   mounted() {},
}
</script>
<style>
* {
   font-family: 'Comic Sans MS';
}
</style>
