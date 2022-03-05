<template>
   <div v-if="show" class="modal">
      <div class="modal-content">
         <span>Вы уверены?</span>
         <button @click="closeDeleteModal">Нет</button>
         <button @click="clickToDeleteTask">Да</button>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      task: {
         type: Object,
         required: true,
      },

      show: {
         type: Boolean,
         required: true,
      },
   },
   methods: {
      closeDeleteModal() {
         this.$emit('closeDeleteModal', this.show)
      },

      clickToDeleteTask() {
         this.$store.dispatch(
            'deleteTask',
            JSON.parse(JSON.stringify(this.task))
         )

         this.$emit('closeDeleteModal', this.show)
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
}
</style>
