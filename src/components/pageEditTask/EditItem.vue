<template>
   <div class="item-block" v-if="!isEdit">
      <div class="item-text-block">
         <input v-if="!task.isDone" type="checkbox" @change="checkTask" />
         <span>{{ task.text }}</span>
      </div>
      <div class="item-button-block">
         <button @click="showDeleteModal">Удалить задачу</button>
         <button @click="changeTask">Изменить задачу</button>
      </div>

      <teleport to="body" v-if="show">
         <WarningModal
            @cancel="closeDeleteModal"
            @confirm="clickToDeleteTask"
         />
      </teleport>
   </div>
</template>

<script>
import WarningModal from '@/components/WarningModal'
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

      closeDeleteModal() {
         this.show = !this.show
      },

      clickToDeleteTask() {
         this.$store.dispatch('deleteTask', clone(this.task))

         this.$store.dispatch('setTodo')

         this.$store.dispatch('setRevertTodo')

         this.show = !this.show
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
      WarningModal
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
