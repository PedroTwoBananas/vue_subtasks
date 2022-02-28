<template>
   <div class="modal" v-if="show">
      <div class="modal-content">
         <span>Вы уверены?</span>
         <button @click="closeDelete">Нет</button>
         <button @click="deleteTodo">Да</button>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      todo: {

      },
      show: {
         type: Boolean,
         default: false
      }
   },
   methods: {
      closeDelete() {
         this.$emit('close', this.show)
      },
      deleteTodo() {
         this.$emit('deleteTodo', this.todo);
      }
   }
}
</script>

<style scoped>
.modal {
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background: rgba(0, 0, 0, .5);
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