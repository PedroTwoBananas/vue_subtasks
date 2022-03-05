<template>
   <div>
      <span>{{ todo.name }}</span>
      <button @click="clickToChangeTodo"><span>Изменить</span></button>
      <button @click="showDeleteModal"><span>Удалить</span></button>
   </div>
</template>

<script>
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
         this.$store.dispatch(
            'selectTodo',
            JSON.parse(JSON.stringify(this.todo))
         )

         this.$router.push({ name: 'editPage', params: { id: this.todo.id } })
      },
   },
}
</script>

<style scoped></style>
