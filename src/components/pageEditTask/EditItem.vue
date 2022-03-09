<template>
   <div v-if='!isEdit'>
      <input v-if="!task.isDone" type="checkbox" @change="checkTask" />
      <span>{{ task.text }}</span>
      <button @click="showDeleteModal">Удалить задачу</button>
      <button @click='changeTask'>Изменить задачу</button>
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
      isEdit: {
         type: Boolean,
         required: true
      }
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
         this.$store.dispatch('setTodo')
         this.$store.dispatch('setRevertTodo')
      },

      changeTask() {
         this.$emit('changeTask', this.isEdit)
      }
   },
   components: {
      EditDeleteTodoWindow,
   },
}
</script>

<style scoped></style>
