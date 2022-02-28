<template>
   <div>
      <span>{{ todo.name }}</span>
      <button>Изменить</button>
      <button @click="deleteTodo">Удалить</button>
   </div>
</template>

<script>
export default {
   props: {
      todo: {}
   },
   methods: {
      deleteTodo() {
         this.$emit('deleteTodo', this.todo);
      }
   }
}
</script>

<style scoped>

</style>