<template>
   <div>
      <input @change="checkTask" type="checkbox">
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
   methods: {
      checkTask() {
         this.$emit('checkTask', this.task)
      }
   }
}
</script>

<style scoped>

</style>