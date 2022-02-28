<template>
   <button @click="showModal">Добавить тему</button>
   <AddTodoWindow @addTodo="addTodo" @close="closeModal" :show="show"/>
   <TodoList @deleteTodo="deleteTodo" :todos="todos"/>
</template>

<script>
import TodoList from "@/components/TodoList";
import AddTodoWindow from "@/components/AddTodoWindow";

export default {
   data() {
      return {
         todos: [],
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
        this.todos.push(todo);
      },
      deleteTodo(todo) {
         this.todos = this.todos.filter(key => key.id !== todo.id)
      }
   },

   components: {
      TodoList, AddTodoWindow
   }
}

</script>

<style scoped>

</style>
