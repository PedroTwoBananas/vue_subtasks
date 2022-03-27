<template>
   <div class="header-block">
      <div class="header-title-block">
         <span>{{ todo.name }}</span>
         <div class="header-button-block">
            <button @click="confirmTodo">
               <span>Сохранить</span>
            </button>
            <button @click="toggleWarningModal"><span>Удалить</span></button>
            <button @click="goToMain"><span>Назад</span></button>
         </div>
         <div class="header-input-block">
            <input
               @keyup.enter="addTask"
               class="header-input"
               type="text"
               placeholder="Введите задачу"
               v-model="task.text"
            />
            <button @click="addTask">
               <span>Добавить задачу</span>
            </button>
         </div>
         <div class="header-button-block">
            <button @click="toggleCancelModal">
               <span>Отмена редактирования</span>
            </button>
            <button @click="revertEdition">
               <span>Вернуть редактирования</span>
            </button>
         </div>
      </div>
      <WarningModal
         v-if="showWarning"
         @cancel="toggleWarningModal"
         @confirm="deleteTodo"
      />
      <WarningModal
         v-if="showCancel"
         @cancel="toggleCancelModal"
         @confirm="cancelEdition"
      />
   </div>
</template>

<script>
import uniqid from 'uniqid'
import WarningModal from '@/components/WarningModal'

export default {
   components: {
      WarningModal,
   },
   props: {
      todo: {
         type: Object,
         required: true,
      },
   },

   data() {
      return {
         showWarning: false,
         showCancel: false,
         task: {
            text: '',
         },
      }
   },

   methods: {
      goToMain() {
         this.$router.push({ name: 'home' })
      },

      confirmTodo() {
         this.$store.dispatch('confirmTodo', this.todo)
         this.goToMain()
      },

      toggleWarningModal() {
         this.showWarning = !this.showWarning
      },

      deleteTodo() {
         this.$store.dispatch('deleteTodo', this.todo)
         this.toggleWarningModal()
         this.goToMain()
      },

      toggleCancelModal() {
         this.showCancel = !this.showCancel
      },

      cancelEdition() {
         this.$emit('cancelEdition')
         this.toggleCancelModal()
      },

      revertEdition() {
         this.$emit('revertEdition')
      },

      addTask() {
         const task = {
            id: uniqid(),
            isDone: false,
            text: this.task.text,
         }
         this.$emit('addTask', task)
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
