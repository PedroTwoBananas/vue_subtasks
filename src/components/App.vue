<template>
  <router-view
    @addTodo="addTodo"
    @changeTodo="changeTodo"
    @deleteTodo="deleteTodo"
    :todos="todos"
  >
  </router-view>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
    },
    deleteTodo(todo) {
      this.todos = this.todos.filter((key) => key.id !== todo.id);
    },
    changeTodo(todo) {
      this.$router.push(`/task/${todo.id}`);
    },
  },
};
</script>

<style scoped></style>
