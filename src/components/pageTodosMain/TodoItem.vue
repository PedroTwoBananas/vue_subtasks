<template>
   <div class="main-todo">
      <TaskHeader />
      <DeleteTodoWindow />
      <TaskList />
   </div>
</template>

<script>
import TaskHeader from '@/components/pageTodosMain/TaskHeader'
import TaskList from '@/components/pageTodosMain/TaskList'
import DeleteTodoWindow from '@/components/pageTodosMain/DeleteTodoWindow'

export default {
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
