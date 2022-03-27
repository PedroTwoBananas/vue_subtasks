<template>
   <ItemEditingBlock
      @editTask="editTask"
      @markTask="markTask"
      @deleteTask="deleteTask"
      :key="task.id"
      v-for="task in tasks"
      :task="task"
   />
</template>

<script>
import ItemEditingBlock from '@/components/pageEditTask/ItemEditingBlock'
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
      ItemEditingBlock,
   },
}
</script>

<style scoped></style>
