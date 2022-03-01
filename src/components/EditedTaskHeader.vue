<template>
   <div>
      <span>{{todo.name}}</span>
      <button>Сохранить</button>
      <button>Удалить</button>
   </div>
</template>

<script>
export default {
   props: {
      todo: {}
   },
}
</script>

<style scoped>

</style>