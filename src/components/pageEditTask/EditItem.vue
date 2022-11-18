<template>
   <div class="item-block">
      <div class="item-text-block">
         <input v-if="!task.isDone" type="checkbox" @change="markTask" />
         <span>{{ task.text }}</span>
      </div>
      <div class="item-button-block">
         <button @click="toggleDeleteModal">Удалить задачу</button>
         <button @click="changeTask">Изменить задачу</button>
      </div>
      <WarningModal
         v-if="show"
         @cancel="toggleDeleteModal"
         @confirm="deleteTask"
      />
   </div>
</template>

<script>
import WarningModal from '@/components/WarningModal'

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
      toggleDeleteModal() {
         this.show = !this.show
      },

      deleteTask() {
         this.$emit('deleteTask', this.task.id)
         this.toggleDeleteModal()
      },

      markTask() {
         this.$emit('markTask', this.task.id)
      },

      changeTask() {
         this.$emit('changeTask')
      },
   },
   components: {
      WarningModal,
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
