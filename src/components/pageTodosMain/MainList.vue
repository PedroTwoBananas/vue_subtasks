<template>
   <div class="main-list">
      <TodoItem :key="todo.id" v-for="todo in this.todos" :todo="todo" />
   </div>
</template>

<script>
import TodoItem from '@/components/pageTodosMain/TodoItem'

export default {
   computed: {
      todos() {
         return this.$store.state.todos
      },
   },
   components: {
      TodoItem,
   },
}
</script>

<style scoped>
.main-list {
   padding: 16px;
   border: 2px solid coral;
   border-radius: 15px;
}
</style>
