<template>
   <div>
      <input type="checkbox">
      <span>{{ task.text }}</span>
      <button>Удалить задачу</button>
      <button>Изменить задачу</button>
   </div>
</template>

<script>
export default {
   props: {
      task: {}
   },
}
</script>

<style scoped>

</style>