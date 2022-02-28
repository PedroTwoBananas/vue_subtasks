<template>
   <TaskHeader @showDelete="showDelete" :show="show"  :todo="todo"/>
   <DeleteTodoWindow @deleteTodo="deleteTodo" :todo="todo" @close="closeDelete" :show="show"/>
   <TaskList :tasks="todo.tasks"/>
</template>

<script>

import TaskHeader from "@/components/TaskHeader";
import TaskList from "@/components/TaskList";
import DeleteTodoWindow from "@/components/DeleteTodoWindow";
export default {
   props: {
      todo: {}
   },

   data() {
      return{
         show: false
      }
   },

   methods: {
      showDelete(show) {
         this.show = !show
      },
      closeDelete(show) {
        this.show = !show;
      },
      deleteTodo(todo) {
         this.$emit('deleteTodo', todo)
      }
   },

   components: {
      TaskHeader, TaskList, DeleteTodoWindow
   }
}
</script>

<style scoped>

</style>