<template>
   <div>
      <span>{{ todo.name }}</span>
      <button><span>Изменить</span></button>
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
         required: true
      }
   },
   methods: {
      showDeleteModal() {
         this.$emit('showDeleteModal', this.show)
      },
   },
}
</script>

<style scoped></style>
