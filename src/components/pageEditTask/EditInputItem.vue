<template>
   <div class='edit-item' v-if="isEdit">
      <input type="text" v-model="editedText" />
      <button @click="editTask"><span>Изменить</span></button>
   </div>
</template>

<script>

export default {
   props: {
      task: {
         type: Object,
         required: true,
      },
      isEdit: {
         type: Boolean,
         required: true,
      },
   },

   data() {
      return {
         editedText: '',
      }
   },

   methods: {
      editTask() {
         const editedTask = {
            id: this.task.id,
            text: this.editedText
         }
         this.$store.dispatch('editTask', editedTask)
         this.$store.dispatch('setTodo')
         this.$store.dispatch('setRevertTodo')
         this.$emit('confirmTask', this.isEdit)

         this.editedText = ''
      },
   },
}
</script>

<style scoped>
.edit-item {
   display: flex;
   flex-direction: row;
   justify-content: space-between;
}
</style>
