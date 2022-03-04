<template>
   <div class="main-todo">
      <TaskHeader
         @showDeleteModal="showDeleteModal"
         :show="show"
         :todo="todo"
      />
      <DeleteTodoWindow :todo="todo" @closeDeleteModal="closeDeleteModal" :show="show" />
      <TaskList :tasks="todo.tasks" />
   </div>
</template>

<script>
import DeleteTodoWindow from '@/components/pageTodosMain/DeleteTodoWindow'
import TaskHeader from '@/components/pageTodosMain/TaskHeader'
import TaskList from '@/components/pageTodosMain/TaskList'

export default {
   data() {
      return {
         show: false,
      }
   },
   props: {
      todo: {
         type: Object,
         required: true,
      },
   },

   methods: {
      showDeleteModal(show) {
         this.show = !show
      },
      closeDeleteModal(show) {
         this.show = !show
      },
   },
   components: {
      TaskHeader,
      TaskList,
      DeleteTodoWindow,
   },
}
</script>

<style scoped>
.main-todo {
   margin-bottom: 12px;
   background: #f8cec0;
   padding: 16px;
   border-radius: 15px;
}
</style>
