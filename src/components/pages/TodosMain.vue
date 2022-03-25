<template>
   <div class="main-wrapper">
      <button @click="toggleAddModal" class="add-button">
         <span>Добавить тему</span>
      </button>
      <AddTodoWindow v-if="show" @closeModal="toggleAddModal" />
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
      toggleAddModal() {
         this.show = !this.show
      },
   },

   mounted() {
      this.$store.dispatch('setTodos')
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
