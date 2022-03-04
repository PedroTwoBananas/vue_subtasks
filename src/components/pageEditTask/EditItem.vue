<template>
   <div>
      <input type="checkbox" />
      <span>{{ task.text }}</span>
      <button>Удалить задачу</button>
      <button>Изменить задачу</button>
      <EditDeleteTodoWindow />
   </div>
</template>

<script>
import EditDeleteTodoWindow from '@/components/pageEditTask/EditDeleteTodoWindow'

export default {
   props: {
      task: {
         type: Object,
         required: true,
      },
   },
   components: {
      EditDeleteTodoWindow,
   },
}
</script>

<style scoped></style>
