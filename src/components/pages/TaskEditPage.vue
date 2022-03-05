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
         return this.$store.getters.storeTodo
      },
      getStoreRevertTodo() {
         return this.$store.getters.storeRevertTodo
      }
   },

   components: {
      EditHeader,
      EditList,
   },
}
</script>

<style scoped></style>
