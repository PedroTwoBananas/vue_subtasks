<template>
   <EditItemBlock
      @editTask="editTask"
      @markTask="markTask"
      @deleteTask="deleteTask"
      :key="task.id"
      v-for="task in tasks"
      :task="task"
   />
</template>

<script>
import EditItemBlock from '@/components/pageEditTask/EditItemBlock'
export default {
   props: {
      tasks: {
         type: Array,
      },
   },

   methods: {
      deleteTask(id) {
         this.$emit('deleteTask', id)
      },
      markTask(id) {
         this.$emit('markTask', id)
      },
      editTask(text) {
         this.$emit('editTask', text)
      },
   },

   components: {
      EditItemBlock,
   },
}
</script>

<style scoped></style>
