<template>
   <div class="main-list">
      <TodosItem :key="todo.id" v-for="todo in this.todos" :todo="todo" />
   </div>
</template>

<script>
import TodosItem from '@/components/pageTodosMain/TodosItem'

export default {
   computed: {
      todos() {
         return this.$store.state.todos
      },
   },
   components: {
      TodosItem,
   },
}
</script>

<style scoped></style>
