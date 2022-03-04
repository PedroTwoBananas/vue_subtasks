<template>
   <div class="main-list">
      <TodoItem />
   </div>
</template>

<script>
import TodoItem from '@/components/pageTodosMain/TodoItem'

export default {
   components: {
      TodoItem,
   },
}
</script>

<style scoped>
.main-list {
   padding: 16px;
   border: 2px solid coral;
   border-radius: 15px;
}
</style>
