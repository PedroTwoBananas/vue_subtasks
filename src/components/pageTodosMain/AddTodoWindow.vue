<template>
   <div class="modal" v-if="show">
      <div class="modal-content">
         <input
            v-model="todo.name"
            type="text"
            placeholder="Введите название темы"
         />
         <input v-model="task.text" type="text" placeholder="Введите задачу" />
         <button @click="addTask">Добавить задачу</button>
         <button @click="addTodo">Добавить тему</button>
         <button @click="closeModal">Закрыть</button>
      </div>
   </div>
</template>

<script>
import uniqid from 'uniqid'
export default {
   props: {
      show: {
         type: Boolean,
         default: false,
      },
   },

   data() {
      return {
         todo: {
            name: '',
            tasks: [],
         },
         task: {
            text: '',
         },
      }
   },

   methods: {
      closeModal() {
         this.$emit('close', this.show)
      },

      addTask() {
         this.task.id = uniqid()
         this.task.isDone = false
         this.todo.tasks.push(this.task)
         this.task = {
            text: '',
         }
      },

      addTodo() {
         this.todo.id = uniqid()
         this.$emit('addTodo', this.todo)
         this.todo.isEdited = false
         this.todo = {
            name: '',
            tasks: [],
         }
         this.$emit('close', this.show)
      },
   },
}
</script>

<style scoped>
.modal {
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background: rgba(0, 0, 0, 0.5);
   position: fixed;
   display: flex;
}

.modal-content {
   margin: auto;
   padding: 20px;
   background: white;
   min-height: 50px;
   min-width: 300px;
   display: flex;
   flex-direction: column;
}
</style>
