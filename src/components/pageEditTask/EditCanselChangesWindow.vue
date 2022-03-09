<template>
   <div v-if="showCansel" class="modal">
      <div class="modal-content">
         <span>Вы уверены?</span>
         <div class="button-block">
            <button @click="closeCanselModal">Нет</button>
            <button @click="clickToDeleteTask">Да</button>
         </div>
      </div>
   </div>
</template>

<script>
import { clone } from '@/components/functions/clone'

export default {
   props: {
      todo: {
         type: Object,
         required: true,
      },

      showCansel: {
         type: Boolean,
         required: true,
      },
   },

   methods: {
      closeCanselModal() {
         this.$emit('closeCanselModal', this.showCansel)
      },

      clickToDeleteTask() {
         this.$store.dispatch('canselEdition', clone(this.todo))

         this.$store.dispatch('setTodo')

         this.$store.dispatch('setRevertTodo')

         this.$emit('closeCanselModal', this.showCansel)
      },
   },
}
</script>

<style scoped>
.modal {
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background: rgba(0, 0, 0, 0.5);
   position: fixed;
   display: flex;
}

.modal-content {
   margin: auto;
   padding: 20px;
   background: white;
   min-height: 50px;
   min-width: 300px;
   display: flex;
   flex-direction: column;
   align-items: center;
}

.button-block {
   margin-top: 10px;
   display: flex;
   flex-direction: row;
   gap: 20px;
}
</style>
