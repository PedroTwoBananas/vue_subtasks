<template>
   <EditedTaskHeader :todo="todo"/>
   <EditedTaskList :tasks="todo.tasks"/>
</template>

<script>

import EditedTaskList from "@/components/EditedTaskList";
import EditedTaskHeader from "@/components/EditedTaskHeader";

export default {
   props: {
      todos: [],
   },
   data() {
      return {
         todo: this.todos.find(item => item.id === this.$route.params.id)
      }
   },
   components: {
      EditedTaskHeader, EditedTaskList
   }
}
</script>

<style scoped>

</style>