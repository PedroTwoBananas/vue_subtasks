<template>
   <div>
      <span>{{ todo.name }}</span>
      <button @click="clickToConfirmChanges">Сохранить</button>
      <button>Удалить</button>
   </div>
</template>

<script>
export default {
   props: {
      todo: {
         type: Object,
         required: true,
      },
   },

   methods: {
      clickToConfirmChanges() {
         this.$store.dispatch('confirmTodo', this.todo)
         this.$router.push({ name: 'home' })
      },
   },
}
</script>

<style scoped></style>
