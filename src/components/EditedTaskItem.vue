<template>
   <div>
      <input @change="checkTask" type="checkbox">
      <span>{{ task.text }}</span>
      <button @click="showDelete">Удалить задачу</button>
      <button>Изменить задачу</button>
      <EditDeleteTodoWindow @deleteTask="deleteTask" @close="closeDelete" :task="task" :show="show"/>
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
      return{
         show:false
      }
   },
   methods: {
      showDelete() {
         this.show = !this.show;
      },
      closeDelete(show) {
         this.show = !show;
      },
      checkTask() {
         this.$emit('checkTask', this.task)
      },
      deleteTask(task) {
         this.$emit('deleteTask', task)
      }
   }
}
</script>

<style scoped>

</style>