<template>
   <EditedTaskHeader :todo="todo"/>
   <EditedTaskList @checkTask="checkTask" :tasks="todo.tasks"/>
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
   methods: {
      checkTask(task) {
         this.todo.tasks.map(key => {
            if(key.id === task.id) {
               key.isDone = !key.isDone
            }
            return key;
         })
      }
   },
   components: {
      EditedTaskHeader, EditedTaskList
   }
}
</script>

<style scoped>

</style>