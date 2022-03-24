<template>
   <div class="item-block">
      <EditItem
         @markTask="markTask"
         @deleteTask="deleteTask"
         @changeTask="changeTask"
         :isEdit="isEdit"
         :task="task"
      />
      <EditInputItem
         @editTask="editTask"
         @confirmTask="confirmTask"
         :isEdit="isEdit"
         :task="task"
      />
   </div>
</template>

<script>
import EditItem from '@/components/pageEditTask/EditItem'
import EditInputItem from '@/components/pageEditTask/EditInputItem'
export default {
   props: {
      task: {
         type: Object,
         required: true,
      },
   },

   data() {
      return {
         isEdit: false,
      }
   },

   methods: {
      deleteTask(id) {
         this.$emit('deleteTask', id)
      },

      markTask(id) {
         this.$emit('markTask', id)
      },

      changeTask(isEdit) {
         this.isEdit = !isEdit
      },

      editTask(text) {
         this.$emit('editTask', text)
      },

      confirmTask(isEdit) {
         this.isEdit = !isEdit
      },
   },
   components: { EditInputItem, EditItem },
}
</script>

<style scoped>
.item-block {
   margin-bottom: 10px;
}
</style>
