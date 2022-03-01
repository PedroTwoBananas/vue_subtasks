<template>
   <TodoItem
       @deleteTodo="deleteTodo"
       :key="todo.id"
       v-for="todo in todos"
       :todo="todo"
   />
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {

   props: {
      todos: []
   },
   methods: {
      deleteTodo(todo) {
         this.$emit('deleteTodo', todo);
      },
   },
   components: {
      TodoItem
   }
}

</script>

<style scoped>

</style>