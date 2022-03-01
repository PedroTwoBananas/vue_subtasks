<template>
   <button @click="showModal">Добавить тему</button>
   <AddTodoWindow @addTodo="addTodo" @close="closeModal" :show="show"/>
   <TodoList @deleteTodo="deleteTodo" :todos="todos"/>
</template>

<script>
import TodoList from "@/components/TodoList";
import AddTodoWindow from "@/components/AddTodoWindow";

export default {
   props: {
     todos: []
   },
   data() {
      return {
         show: false
      }
   },
   methods: {
      showModal() {
         this.show = true;
      },
      closeModal(show) {
         this.show = !show;
      },
      addTodo(todo) {
         this.$emit('addTodo',todo);
      },
      deleteTodo(todo) {
         this.$emit('deleteTodo',todo);
      },
   },

   components: {
      TodoList, AddTodoWindow
   }
}

</script>

<style scoped>

</style>