<template>
   <div class="edit-page-block">
      <div class="edit-page-wrapper">
         <EditHeader :todo="getStoreTodo" />
         <EditList :tasks="getStoreTodo.tasks" />
      </div>
   </div>
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
      },
   },

   components: {
      EditHeader,
      EditList,
   },
}
</script>

<style>
button {
   background-color: coral;
   margin-bottom: 10px;
   width: 200px;
   border: 2px solid coral;
}

input {
   height: 20px;
   background-color: #f8cec0;
   border: 2px solid coral;
}
</style>

<style scoped>
.edit-page-block {
   display: flex;
   flex-direction: column;
   align-items: center;
}

.edit-page-wrapper {
   margin-top: 80px;
   padding: 20px;
   width: 800px;
   background-color: #f8cec0;
   display: flex;
   flex-direction: column;
}
</style>
