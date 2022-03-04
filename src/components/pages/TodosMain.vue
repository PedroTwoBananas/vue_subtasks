<template>
   <div class="main-wrapper">
      <button @click="showAddModal" class="add-button">
         <span>Добавить тему</span>
      </button>
      <AddTodoWindow @closeModal="closeAddModal" :show="show" />
      <MainList />
   </div>
</template>

<script>
import AddTodoWindow from '@/components/pageTodosMain/AddTodoWindow'
import MainList from '@/components/pageTodosMain/MainList'

export default {
   data() {
      return {
         show: false,
      }
   },

   methods: {
      showAddModal() {
         this.show = !this.show
      },
      closeAddModal(show) {
         this.show = !show
      },
   },
   components: {
      MainList,
      AddTodoWindow,
   },
}
</script>

<style scoped>
.add-button {
   margin-bottom: 20px;
   width: 400px;
   height: 40px;
   border-radius: 15px;
   border: 2px solid coral;
   background: #f8cec0;
   font-family: 'Comic Sans MS';
   font-size: 20px;
}

.main-wrapper {
   display: flex;
   flex-direction: column;
}
</style>
