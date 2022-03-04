<template>
   <EditHeader :todo="getStoreTodo" />
   <EditList :tasks="getStoreTodo.tasks" />
</template>

<script>
import EditList from '@/components/pageEditTask/EditList'
import EditHeader from '@/components/pageEditTask/EditHeader'

export default {
   computed: {
      getStoreTodo() {
         return this.$store.state.todos.find(
            (todo) => todo.id === this.$route.params.id
         )
      },
   },

   components: {
      EditHeader,
      EditList,
   },
}
</script>

<style scoped></style>
