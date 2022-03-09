<template>
   <div>
      <EditItem @changeTask='changeTask' :isEdit='isEdit' :task="task" />
      <EditInputItem @confirmTask ='editTask' :isEdit='isEdit' :task="task" />
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
      changeTask(isEdit) {
         this.isEdit = !isEdit
      },

      editTask(isEdit) {
         this.isEdit = !isEdit
      }
   },
   components: { EditInputItem, EditItem },
}
</script>

<style scoped></style>
