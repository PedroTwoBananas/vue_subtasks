<template>
   <div class="main-todo">
      <TaskHeader :todo="todo" />
      <TaskList :tasks="todo.tasks" />
   </div>
</template>

<script>
import TaskHeader from '@/components/pageTodosMain/TaskHeader'
import TaskList from '@/components/pageTodosMain/TaskList'

export default {
   props: {
      todo: {
         type: Object,
         required: true,
      },
   },

   methods: {
      showDeleteModal() {
         this.show = !this.show
      },
      closeDeleteModal() {
         this.show = !this.show
      },

      clickToDeleteTodo() {
         this.$store.dispatch('deleteTodo', this.todo)
         localStorage.setItem(
            'todos',
            JSON.stringify(this.$store.getters.storeTodos)
         )
      },
   },
   components: {
      TaskHeader,
      TaskList,
   },
}
</script>

<style scoped>
.main-todo {
   margin-bottom: 12px;
   background: #f8cec0;
   padding: 16px;
   border-radius: 15px;
}
</style>
