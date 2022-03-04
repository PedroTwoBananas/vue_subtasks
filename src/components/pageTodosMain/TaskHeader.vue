<template>
   <div>
      <span>{{todo.name}}</span>
      <button><span>Изменить</span></button>
      <button><span>Удалить</span></button>
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
}
</script>

<style scoped></style>
