<template>
   <div class="main-todo">
      <TaskHeader :todo='todo' />
<!--      <DeleteTodoWindow />-->
      <TaskList :tasks='todo.tasks'/>
   </div>
</template>

<script>
import TaskHeader from '@/components/pageTodosMain/TaskHeader'
import TaskList from '@/components/pageTodosMain/TaskList'


export default {
   props: {
      todo: {
         type: Object,
         required: true
      }
   },
   components: {
      TaskHeader,
      TaskList,

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
