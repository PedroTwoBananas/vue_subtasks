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
   },

   components: {
      EditHeader,
      EditList,
   },
}
</script>

<style scoped></style>
