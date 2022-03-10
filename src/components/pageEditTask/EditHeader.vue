<template>
   <EditDeleteTodoWindow @closeWarningModal='closeWarningModal' :todo='todo' :showWarning='showWarning'/>
   <EditCanselChangesWindow @closeCanselModal='closeCanselModal' :todo='todo'  :showCansel='showCansel'/>
   <div class="header-block">
      <div class="header-title-block">
         <span>{{ todo.name }}</span>
         <div class="header-button-block">
            <button @click="clickToConfirmChanges">
               <span>Сохранить</span>
            </button>
            <button @click="showWarningModal"><span>Удалить</span></button>
            <button @click="goToMain"><span>Назад</span></button>
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
            <button @click="showCanselModal">
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
// import { clone } from '@/components/functions/clone'
import EditDeleteTodoWindow from '@/components/pageEditTask/EditDeleteTodoWindow'
import EditCanselChangesWindow from '@/components/pageEditTask/EditCanselChangesWindow'

export default {
   components: {
      EditCanselChangesWindow,
      EditDeleteTodoWindow },
   props: {
      todo: {
         type: Object,
         required: true,
      },
   },

   data() {
      return {
         showWarning: false,
         showCansel: false,
         task: {
            text: '',
         },
      }
   },

   methods: {
      clickToConfirmChanges() {
         this.$store.dispatch('confirmTodo', this.todo)

         this.$store.dispatch('setTodos')

         localStorage.removeItem('todo')

         localStorage.removeItem('revertTodo')

         this.$router.push({ name: 'home' })
      },

      goToMain() {
         this.$router.push({ name: 'home' })

         localStorage.removeItem('todo')

         localStorage.removeItem('revertTodo')
      },

      showWarningModal() {
         this.showWarning = !this.showWarning

      },

      closeWarningModal(showWarning) {
         this.showWarning = !showWarning
      },

      showCanselModal() {
         this.showCansel = !this.showCansel

      },

      closeCanselModal(showCansel) {
         this.showCansel = !showCansel
      },

      // clickToCanselEdition() {
      //    this.$store.dispatch('canselEdition', clone(this.todo))
      //
      //    this.$store.dispatch('setTodo')
      //
      //    this.$store.dispatch('setRevertTodo')
      // },

      clickToRevertEdition() {

         this.$store.dispatch('revertEdition')

         this.$store.dispatch('setRevertTodo')

         this.$store.dispatch('setTodo')

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
