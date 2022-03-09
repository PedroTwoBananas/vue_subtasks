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

   mounted() {
      const todos = JSON.parse(localStorage.getItem('todos'))
      this.$store.dispatch('getTodos', todos)

      const todo = JSON.parse(localStorage.getItem('todo'))
      this.$store.dispatch('getTodo', todo)

      const revertTodo = JSON.parse(localStorage.getItem('revertTodo'))
      this.$store.dispatch('getRevertTodo', revertTodo)
   },
}
</script>
<style>
* {
   font-family: 'Comic Sans MS';
}

</style>
