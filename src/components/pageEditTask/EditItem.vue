<template>
   <div class="item-block" v-if="!isEdit">
      <div class='item-text-block'>
         <input v-if="!task.isDone" type="checkbox" @change="checkTask" />
         <span>{{ task.text }}</span>
      </div>
      <div class='item-button-block'>
         <button @click="showDeleteModal">Удалить задачу</button>
         <button @click="changeTask">Изменить задачу</button>
      </div>
      <EditDeleteTaskWindow
         @closeDeleteModal="closeDeleteModal"
         :show="show"
         :task="task"
      />
   </div>
</template>

<script>
import EditDeleteTaskWindow from '@/components/pageEditTask/EditDeleteTaskWindow'
import { clone } from '@/components/functions/clone'

export default {
   props: {
      task: {
         type: Object,
         required: true,
      },
      isEdit: {
         type: Boolean,
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
         this.$store.dispatch('markTask', clone(this.task))
         this.$store.dispatch('setTodo')
         this.$store.dispatch('setRevertTodo')
      },

      changeTask() {
         this.$emit('changeTask', this.isEdit)
      },
   },
   components: {
      EditDeleteTaskWindow,
   },
}
</script>

<style scoped>
.item-block {
   display: flex;
   flex-direction: row;
   justify-content: space-between;
}

.item-text-block {
   display: flex;
   flex-direction: row;
   gap: 20px;
}

.item-button-block {
   display: flex;
   flex-direction: row;
   gap: 20px;
}
</style>
