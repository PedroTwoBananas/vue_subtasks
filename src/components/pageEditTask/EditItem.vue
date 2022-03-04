<template>
   <div>
      <input type="checkbox" />
      <span></span>
      <button>Удалить задачу</button>
      <button>Изменить задачу</button>
      <EditDeleteTodoWindow />
   </div>
</template>

<script>
import EditDeleteTodoWindow from '@/components/pageEditTask/EditDeleteTodoWindow'

export default {
   components: {
      EditDeleteTodoWindow,
   },
}
</script>

<style scoped></style>
