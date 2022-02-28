<template>
   <div>
      <span>{{ todo.name }}</span>
      <button>Изменить</button>
      <button @click="showDelete">Удалить</button>
   </div>
</template>

<script>
export default {
   props: {
      todo: {},
      show: Boolean
   },
   methods: {
      // deleteTodo() {
      //    this.$emit('deleteTodo', this.todo);
      // },
      showDelete() {
         this.$emit('showDelete', this.show);
      }
   }
}
</script>

<style scoped>

</style>