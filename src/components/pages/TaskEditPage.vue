<template>
   <EditHeader :todo="todo" />
   <EditList :tasks="todo.tasks" />
</template>

<script>
import EditList from '@/components/pageEditTask/EditList'
import EditHeader from '@/components/pageEditTask/EditHeader'

export default {
   props: {
      todos: [],
   },
   data() {
      return {
         todo: this.todos.find((item) => item.id === this.$route.params.id),
         tempTodo: {
            tasks: [],
         },
      }
   },
   methods: {},
   components: {
      EditHeader,
      EditList,
   },
}
</script>

<style scoped></style>
