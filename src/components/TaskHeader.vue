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
      show: Boolean,
   },
   methods: {
      showDelete() {
         this.$emit('showDelete', this.show)
      },
      changeTodo() {
         this.$emit('changeTodo', this.todo)
      },
   },
}
</script>

<style scoped></style>
