<template>
   <TodoItem
      @changeTodo="changeTodo"
      @deleteTodo="deleteTodo"
      :key="todo.id"
      v-for="todo in todos"
      :todo="todo"
   />
</template>

<script>
import TodoItem from '@/components/pageTodosMain/TodoItem'

export default {
   props: {
      todos: {
         type: Array,
      },
   },
   methods: {
      deleteTodo(todo) {
         this.$emit('deleteTodo', todo)
      },
      changeTodo(todo) {
         this.$emit('changeTodo', todo)
      },
   },
   components: {
      TodoItem,
   },
}
</script>

<style scoped></style>
