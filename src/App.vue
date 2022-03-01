<template>
   <router-view
       @addTodo="addTodo"
       @deleteTodo="deleteTodo"
       :todos="todos"
   >

   </router-view>
</template>

<script>
export default {

   data() {
      return {
         todos: [],
      }
   },
   methods: {
      addTodo(todo) {
         this.todos.push(todo);
      },
      deleteTodo(todo) {
         this.todos = this.todos.filter(key => key.id !== todo.id)
      },
   }
}
</script>

<style scoped>

</style>
