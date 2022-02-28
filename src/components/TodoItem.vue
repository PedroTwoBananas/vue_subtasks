<template>
   <TaskHeader :todo="todo.name"/>
   <TaskList :tasks="todo.tasks"/>
</template>

<script>

import TaskHeader from "@/components/TaskHeader";
import TaskList from "@/components/TaskList";

export default {
   props: {
      todo: {}
   },

   components: {
      TaskHeader, TaskList
   }
}
</script>

<style scoped>

</style>