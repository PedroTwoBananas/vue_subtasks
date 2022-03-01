<template>
   <div>
      <input type="checkbox">
      <span>{{ task.text }}</span>
      <button>Удалить задачу</button>
      <button>Изменить задачу</button>
      <EditDeleteTodoWindow
          :task="task"
          :show="show"
      />
   </div>
</template>

<script>
import EditDeleteTodoWindow from "@/components/EditDeleteTodoWindow";

export default {
   components: {
      EditDeleteTodoWindow
   },
   props: {
      task: {}
   },
   data() {
      return {
         show: false,
      }
   },
}
</script>

<style scoped>

</style>