<template>
   <div>
      <input v-if="!task.isDone" type="checkbox" @change="checkTask" />
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
      checkTask() {
         this.$store.dispatch('markTask', JSON.parse(JSON.stringify(this.task)))
      },
   },
   components: {
      EditDeleteTodoWindow,
   },
}
</script>

<style scoped></style>
