<template>
   <TodoItem :key="todo.id" v-for="todo in todos" :todo="todo"/>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {

   props: {
     todos: []
   },

   components: {
      TodoItem
   }
}

</script>

<style scoped>

</style>