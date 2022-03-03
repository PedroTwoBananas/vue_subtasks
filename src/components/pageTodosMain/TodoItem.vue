<template>
   <TaskHeader
      @showDelete="showDelete"
      @changeTodo="changeTodo"
      :show="show"
      :todo="todo"
   />
   <DeleteTodoWindow
      @deleteTodo="deleteTodo"
      :todo="todo"
      @close="closeDelete"
      :show="show"
   />
   <TaskList :tasks="todo.tasks" />
</template>

<script>
import TaskHeader from '@/components/pageTodosMain/TaskHeader'
import TaskList from '@/components/pageTodosMain/TaskList'
import DeleteTodoWindow from '@/components/pageTodosMain/DeleteTodoWindow'

export default {
   props: {
      todo: {
         type: Object,
         required: true,
      },
   },

   data() {
      return {
         show: false,
      }
   },

   methods: {
      showDelete(show) {
         this.show = !show
      },
      closeDelete(show) {
         this.show = !show
      },
      deleteTodo(todo) {
         this.$emit('deleteTodo', todo)
      },
      changeTodo(todo) {
         this.$emit('changeTodo', todo)
      },
   },

   components: {
      TaskHeader,
      TaskList,
      DeleteTodoWindow,
   },
}
</script>

<style scoped></style>
