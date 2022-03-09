<template>
   <div class='header-block'>
      <span>{{ todo.name }}</span>
      <div class='button-block'>
         <button class='button' @click="clickToChangeTodo"><span>Изменить</span></button>
         <button class='button' @click="showDeleteModal"><span>Удалить</span></button>
      </div>
   </div>
</template>

<script>
import { clone } from '@/components/functions/clone'

export default {
   props: {
      todo: {
         type: Object,
         required: true,
      },
      show: {
         type: Boolean,
         required: true,
      },
   },
   methods: {
      showDeleteModal() {
         this.$emit('showDeleteModal', this.show)
      },
      clickToChangeTodo() {
         this.$store.dispatch('selectTodo', clone(this.todo))

         this.$store.dispatch('setTodo')

         this.$router.push({ name: 'editPage', params: { id: this.todo.id } })
      },
   },
}
</script>

<style scoped>
.header-block {
   display: flex;
   flex-direction: row;
   border-bottom: 2px solid coral;
   margin-bottom: 10px;
}

.button-block {
   display: flex;
   flex-direction: row;
   gap: 20px;
   margin-left: 20px;
}

.button {
   background-color: coral;
   margin-bottom: 10px;
   width: 200px;
   border: 2px solid coral;
}
</style>
