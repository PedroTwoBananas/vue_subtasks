<template>
   <div class="item-block" v-if="!isEdit">
      <div class="item-text-block">
         <input v-if="!task.isDone" type="checkbox" @change="markTask" />
         <span>{{ task.text }}</span>
      </div>
      <div class="item-button-block">
         <button @click="showDeleteModal">Удалить задачу</button>
         <button @click="changeTask">Изменить задачу</button>
      </div>

      <teleport to="body">
         <WarningModal
            v-if="show"
            @cancel="closeDeleteModal"
            @confirm="clickToDeleteTask"
         />
      </teleport>
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
      showDeleteModal() {
         this.show = !this.show
      },

      closeDeleteModal() {
         this.show = !this.show
      },

      clickToDeleteTask() {
         this.$emit('deleteTask', this.task.id)
         this.show = !this.show
      },

      markTask() {
         this.$emit('markTask', this.task.id)
      },

      changeTask() {
         this.$emit('changeTask', this.isEdit)
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
