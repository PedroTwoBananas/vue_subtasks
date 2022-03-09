<template>
   <div>
      <div>
         <span>{{ todo.name }}</span>
         <button @click="clickToCanselEdition">
            <span>Отмена редактирования</span>
         </button>
         <button @click="clickToRevertEdition">
            <span>Вернуть редактирования</span>
         </button>
      </div>
      <div>
         <input type="text" placeholder="Введите задачу" v-model="task.text" />
         <button @click="clickToAddTask"><span>Добавить задачу</span></button>
      </div>
      <div>
         <button @click="clickToConfirmChanges"><span>Сохранить</span></button>
         <button><span>Удалить</span></button>
      </div>
   </div>
</template>

<script>
import uniqid from 'uniqid'
import { clone } from '@/components/functions/clone'

export default {
   props: {
      todo: {
         type: Object,
         required: true,
      },
   },

   data() {
      return {
         task: {
            text: '',
         },
      }
   },

   methods: {
      clickToConfirmChanges() {
         this.$store.dispatch('confirmTodo', this.todo)
         this.$store.dispatch('setTodos')
         this.$router.push({ name: 'home' })
      },

      clickToCanselEdition() {
         this.$store.dispatch('canselEdition', clone(this.todo))
         this.$store.dispatch('setTodo')

         this.$store.dispatch('setRevertTodo')
      },

      clickToRevertEdition() {
         this.$store.dispatch('revertEdition')

         this.$store.dispatch('setTodo')

         this.$store.dispatch('setRevertTodo')
      },

      clickToAddTask() {
         const task = {
            id: uniqid(),
            isDone: false,
            text: this.task.text,
         }
         this.$store.dispatch('addTask', task)

         this.$store.dispatch('setTodo')

         this.$store.dispatch('setRevertTodo')

         this.task = {
            text: '',
         }
      },
   },
}
</script>

<style scoped></style>
