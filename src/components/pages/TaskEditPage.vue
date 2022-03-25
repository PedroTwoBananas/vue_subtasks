<template>
   <div class="edit-page-block">
      <div class="edit-page-wrapper">
         <EditHeader
            @cancelEdition="cancelEdition"
            @revertEdition="revertEdition"
            @addTask="addTask"
            :todo="todo"
         />
         <EditList
            @editTask="editTask"
            @markTask="markTask"
            @deleteTask="deleteTask"
            :tasks="todo.tasks"
         />
      </div>
   </div>
</template>

<script>
import EditList from '@/components/pageEditTask/EditList'
import EditHeader from '@/components/pageEditTask/EditHeader'
import { clone } from '@/components/functions/clone'

export default {
   data() {
      return {
         todo: clone(this.$store.state.todo),
         revertTodo: clone(this.$store.state.todo),
      }
   },

   mounted() {
      this.$store.dispatch('setTodo').then(this.setTodo())
   },

   methods: {
      setTodo() {
         this.todo = clone(this.$store.state.todo)
         this.revertTodo = clone(this.$store.state.todo)
      },

      addTask(task) {
         this.todo.tasks.push(task)
         this.revertTodo = clone(this.todo)
      },

      deleteTask(id) {
         this.todo.tasks = this.todo.tasks.filter((todo) => todo.id !== id)
         this.revertTodo = clone(this.todo)
      },

      markTask(id) {
         this.todo.tasks = this.todo.tasks.map((key) => {
            if (key.id === id) {
               key.isDone = true
            }
            return key
         })
         this.revertTodo = clone(this.todo)
      },

      editTask(text) {
         this.todo.tasks = this.todo.tasks.map((key) => {
            if (key.id === text.id) {
               key.text = text.text
            }
            return key
         })
         this.revertTodo = clone(this.todo)
      },

      cancelEdition() {
         this.todo = clone(this.$store.state.todo)
      },

      revertEdition() {
         this.todo = clone(this.revertTodo)
      },
   },

   components: {
      EditHeader,
      EditList,
   },
}
</script>

<style>
button {
   background-color: coral;
   margin-bottom: 10px;
   width: 200px;
   border: 2px solid coral;
}

input {
   height: 20px;
   background-color: #f8cec0;
   border: 2px solid coral;
}
</style>

<style scoped>
.edit-page-block {
   display: flex;
   flex-direction: column;
   align-items: center;
}

.edit-page-wrapper {
   margin-top: 80px;
   padding: 20px;
   width: 800px;
   background-color: #f8cec0;
   display: flex;
   flex-direction: column;
}
</style>
