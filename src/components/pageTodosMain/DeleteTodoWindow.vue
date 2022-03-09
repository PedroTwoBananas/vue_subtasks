<template>
   <div class="modal" v-if="show">
      <div class="modal-content">
         <span class="warning-text">Вы уверены?</span>
         <div class="button-block">
            <button class="button" @click="closeDeleteModal">Нет</button>
            <button class="button" @click="clickToDeleteTodo">Да</button>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      show: {
         type: Boolean,
         required: true,
      },
      todo: {
         type: Object,
         required: true,
      },
   },
   methods: {
      closeDeleteModal() {
         this.$emit('closeDeleteModal', this.show)
      },
      clickToDeleteTodo() {
         this.$store.dispatch('deleteTodo', this.todo)
         localStorage.setItem(
            'todos',
            JSON.stringify(this.$store.getters.storeTodos)
         )
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

.button {
   background-color: coral;
   margin-bottom: 10px;
   width: 200px;
   border: 2px solid coral;
}
</style>
