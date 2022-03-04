<template>
   <div class="main-wrapper">
      <button class="add-button" @click="showModal"><span>Добавить тему</span></button>
      <AddTodoWindow @addTodo="addTodo" @close="closeModal" :show="show" />
      <MainList
         @changeTodo="changeTodo"
         @deleteTodo="deleteTodo"
         :todos="todos"
      />
   </div>
</template>

<script>
import AddTodoWindow from '@/components/pageTodosMain/AddTodoWindow'
import MainList from '@/components/pageTodosMain/MainList'

export default {
   props: {
      todos: {
         type: Array,
         default: () => [],
      },
   },
   data() {
      return {
         show: false,
      }
   },
   methods: {
      showModal() {
         this.show = true
      },
      closeModal(show) {
         this.show = !show
      },
      addTodo(todo) {
         this.$emit('addTodo', todo)
      },
      deleteTodo(todo) {
         this.$emit('deleteTodo', todo)
      },
      changeTodo(todo) {
         this.$emit('changeTodo', todo)
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
