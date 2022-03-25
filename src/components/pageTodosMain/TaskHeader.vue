<template>
   <div class="header-block">
      <span>{{ todo.name }}</span>
      <div class="button-block">
         <button class="button" @click="changeTodo">
            <span>Изменить</span>
         </button>
         <button class="button" @click="toggleDeleteModal">
            <span>Удалить</span>
         </button>
      </div>
      <WarningModal
         v-if="show"
         @cancel="toggleDeleteModal"
         @confirm="deleteTodo"
      />
   </div>
</template>

<script>
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
      toggleDeleteModal() {
         this.show = !this.show
      },

      deleteTodo() {
         this.$store.dispatch('deleteTodo', this.todo)
         this.toggleDeleteModal()
      },

      changeTodo() {
         this.$store.dispatch('selectTodo', this.todo)
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
