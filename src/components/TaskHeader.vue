<template>
   <div>
      <span>{{ todo.name }}</span>
      <button @click="changeTodo">Изменить</button>
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
      },
      changeTodo() {
         this.$router.push(`/task/${this.todo.id}`);
      }
   }
}
</script>

<style scoped>

</style>