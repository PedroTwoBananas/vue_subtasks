<template>
   <EditedTaskItem @deleteTask="deleteTask" @checkTask="checkTask" :key="task.id" v-for="task in tasks" :task="task"/>
</template>

<script>
import EditedTaskItem from "@/components/EditedTaskItem";

export default {
props: {
  tasks: []
},
   methods: {
      checkTask(task) {
         this.$emit('checkTask', task)
      },
      deleteTask(task) {
         this.$emit('deleteTask', task)
      }
   },
   components: {
      EditedTaskItem
   }
}
</script>

<style scoped>

</style>