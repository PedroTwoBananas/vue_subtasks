<template>
   <div class="header-block">
      <div class="header-title-block">
         <span>{{ todo.name }}</span>
         <div class="header-button-block">
            <button @click="clickToConfirmChanges">
               <span>Сохранить</span>
            </button>
            <button><span>Удалить</span></button>
            <button><span>Назад</span></button>
         </div>
         <div class="header-input-block">
            <input
               class="header-input"
               type="text"
               placeholder="Введите задачу"
               v-model="task.text"
            />
            <button @click="clickToAddTask">
               <span>Добавить задачу</span>
            </button>
         </div>
         <div class="header-button-block">
            <button @click="clickToCanselEdition">
               <span>Отмена редактирования</span>
            </button>
            <button @click="clickToRevertEdition">
               <span>Вернуть редактирования</span>
            </button>
         </div>
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

<style scoped>
.header-block {
   display: flex;
   flex-direction: column;
   border-bottom: 2px solid coral;
   margin-bottom: 20px;
}

.header-title-block {
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   gap: 20px;
   margin-bottom: 20px;
}

.header-input-block {
   display: flex;
   flex-direction: row;
   gap: 38px;
   margin-left: 40px;
}

.header-button-block {
   margin-left: 40px;
   display: flex;
   flex-direction: row;
   gap: 40px;
}
</style>
