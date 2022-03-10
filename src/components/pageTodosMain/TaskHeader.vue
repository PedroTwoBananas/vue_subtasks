<template>
   <div class="header-block">
      <span>{{ todo.name }}</span>
      <div class="button-block">
         <button class="button" @click="clickToChangeTodo">
            <span>Изменить</span>
         </button>
         <button class="button" @click="showDeleteModal">
            <span>Удалить</span>
         </button>
      </div>
      <teleport to="body" v-if="show">
         <WarningModal
            @cancel="closeDeleteModal"
            @confirm='clickToDeleteTodo'
         />
      </teleport>
   </div>
</template>

<script>
import { clone } from '@/components/functions/clone'
import WarningModal from '@/components/WarningModal'

export default {
   props: {
      todo: {
         type: Object,
         required: true,
      },

   },

   data() {
      return {
         show: false,
      }
   },

   methods: {
      showDeleteModal() {
         this.show = !this.show
      },
      closeDeleteModal() {
         this.show = !this.show
      },

      clickToDeleteTodo() {
         this.$store.dispatch('deleteTodo', this.todo)
         localStorage.setItem(
            'todos',
            JSON.stringify(this.$store.getters.storeTodos)
         )
      },

      clickToChangeTodo() {
         this.$store.dispatch('selectTodo', clone(this.todo))

         this.$store.dispatch('setTodo')

         this.$store.dispatch('setRevertTodo')

         this.$router.push({ name: 'editPage', params: { id: this.todo.id } })
      },
   },

   components: {
      WarningModal,
   },
}
</script>

<style scoped>
.header-block {
   display: flex;
   flex-direction: row;
   border-bottom: 2px solid coral;
   margin-bottom: 10px;
}

.button-block {
   display: flex;
   flex-direction: row;
   gap: 20px;
   margin-left: 20px;
}

.button {
   background-color: coral;
   margin-bottom: 10px;
   width: 200px;
   border: 2px solid coral;
}
</style>
