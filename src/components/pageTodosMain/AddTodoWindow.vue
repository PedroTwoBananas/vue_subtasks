<template>
   <div class="modal">
      <div class="modal-content">
         <input
            v-model="todo.name"
            type="text"
            placeholder="Введите название темы"
         />
         <input v-model="task.text" type="text" placeholder="Введите задачу" />
         <button >Добавить задачу</button>
         <button >Добавить тему</button>
         <button >Закрыть</button>
      </div>
   </div>
</template>

<script>
import uniqid from 'uniqid'
export default {

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
