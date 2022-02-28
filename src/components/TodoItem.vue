<template>
   <TaskHeader @deleteTodo="deleteTodo" :todo="todo"/>
   <TaskList :tasks="todo.tasks"/>
</template>

<script>

import TaskHeader from "@/components/TaskHeader";
import TaskList from "@/components/TaskList";

export default {
   props: {
      todo: {}
   },

   methods: {
      deleteTodo(todo) {
         this.$emit('deleteTodo', todo)
      }
   },

   components: {
      TaskHeader, TaskList
   }
}
</script>

<style scoped>

</style>