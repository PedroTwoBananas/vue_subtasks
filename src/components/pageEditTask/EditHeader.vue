<template>
   <div>
      <div>
         <span>{{ todo.name }}</span>
         <button @click="clickToCanselEdition">
            <span>Отмена редактирования</span>
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
         this.$router.push({ name: 'home' })
      },

      clickToCanselEdition() {
         this.$store.dispatch(
            'canselEdition',
            JSON.parse(JSON.stringify(this.todo))
         )
      },

      clickToAddTask() {
         const task = {
            id: uniqid(),
            isDone: false,
            text: this.task.text,
         }
         this.$store.dispatch('addTask', task)
         this.task = {
            text: '',
         }
      },
   },
}
</script>

<style scoped></style>
