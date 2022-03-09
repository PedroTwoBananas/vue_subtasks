<template>
   <div class="modal" v-if="show">
      <div class="modal-content">
         <input
            type="text"
            v-model="todo.name"
            placeholder="Введите название темы"
         />
         <input type="text" v-model="task.text" placeholder="Введите задачу" />
         <button @click="addTask">Добавить задачу</button>
         <button @click="addTodo">Добавить тему</button>
         <button @click="clickToCloseModal">Закрыть</button>
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
   props: {
      show: {
         type: Boolean,
         required: true,
      },
   },

   methods: {
      clickToCloseModal() {
         this.$emit('closeModal', this.show)
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

         this.$store.dispatch('setTodos')

         this.todo = {
            name: '',
            tasks: [],
         }

         this.$emit('closeModal', this.show)
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
