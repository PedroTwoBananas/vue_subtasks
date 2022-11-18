<template>
   <div class="modal">
      <div class="modal-content">
         <div class="input-block">
            <input
               @keyup.enter="addTodo"
               class="input"
               type="text"
               v-model="todo.name"
               placeholder="Введите название темы"
            />
            <input
               @keyup.enter="addTask"
               class="input"
               type="text"
               v-model="task.text"
               placeholder="Введите задачу"
            />
         </div>
         <ul class="add-list">
            <li class="add-item" :key="task.id" v-for="task in todo.tasks">
               {{ task.text }}
            </li>
         </ul>
         <div class="button-block">
            <button class="button" @click="addTask">Добавить задачу</button>
            <button class="button" @click="addTodo">Добавить тему</button>
            <button class="button" @click="closeModal">Закрыть</button>
         </div>
      </div>
   </div>
</template>

<script>
import uniqid from 'uniqid'

export default {
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
         this.$emit('closeModal')
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

         this.$store.dispatch('addTodo', this.todo)

         this.todo = {
            name: '',
            tasks: [],
         }

         this.closeModal()
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
   background-color: white;
   margin: auto;
   padding: 20px;
   min-height: 50px;
   min-width: 300px;
   display: flex;
   flex-direction: column;
}

.input-block {
   display: flex;
   flex-direction: column;
}

.button-block {
   display: flex;
   flex-direction: column;
   align-items: center;
}

.button {
   background-color: coral;
   margin-bottom: 10px;
   width: 200px;
   border: 2px solid coral;
}

.input {
   background-color: #f8cec0;
   margin-bottom: 10px;
   border: 2px solid #f8cec0;
}

.add-list {
   margin-bottom: 10px;
   display: flex;
   flex-direction: column;
   align-content: flex-start;
}

.add-item {
   list-style: none;
   margin-bottom: 5px;
}
</style>
