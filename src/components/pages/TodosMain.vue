<template>
   <button @click="showModal">Добавить тему</button>
   <AddTodoWindow @addTodo="addTodo" @close="closeModal" :show="show" />
   <MainList @changeTodo="changeTodo" @deleteTodo="deleteTodo" :todos="todos" />
</template>

<script>
import AddTodoWindow from '@/components/pageTodosMain/AddTodoWindow'
import MainList from '@/components/pageTodosMain/MainList'

export default {
   props: {
      todos: {
         type: Array,
         default: () => [],
      },
   },
   data() {
      return {
         show: false,
      }
   },
   methods: {
      showModal() {
         this.show = true
      },
      closeModal(show) {
         this.show = !show
      },
      addTodo(todo) {
         this.$emit('addTodo', todo)
      },
      deleteTodo(todo) {
         this.$emit('deleteTodo', todo)
      },
      changeTodo(todo) {
         this.$emit('changeTodo', todo)
      },
   },

   components: {
      MainList,
      AddTodoWindow,
   },
}
</script>

<style scoped></style>
