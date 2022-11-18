<template>
   <div class="item-block">
      <EditItem
         v-if="!isEdit"
         @markTask="markTask"
         @deleteTask="deleteTask"
         @changeTask="toggleItems"
         :isEdit="isEdit"
         :task="task"
      />
      <EditInputItem
         v-if="isEdit"
         @changeTask="toggleItems"
         @editTask="editTask"
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

      editTask(text) {
         this.$emit('editTask', text)
      },

      toggleItems() {
         this.isEdit = !this.isEdit
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
