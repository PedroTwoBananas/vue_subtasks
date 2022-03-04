<template>
   <div>
      <input type="checkbox" />
      <span>{{ task.text }}</span>
      <button @click="showDeleteModal">Удалить задачу</button>
      <button>Изменить задачу</button>
      <EditDeleteTodoWindow
         @closeDeleteModal="closeDeleteModal"
         :show="show"
         :task="task"
      />
   </div>
</template>

<script>
import EditDeleteTodoWindow from '@/components/pageEditTask/EditDeleteTodoWindow'

export default {
   props: {
      task: {
         type: Object,
         required: true,
      },
   },

   data() {
      return {
         show: false,
      }
   },

   methods: {
      showDeleteModal() {
         this.show = !this.show
      },
      closeDeleteModal(show) {
         this.show = !show
      },
   },
   components: {
      EditDeleteTodoWindow,
   },
}
</script>

<style scoped></style>
