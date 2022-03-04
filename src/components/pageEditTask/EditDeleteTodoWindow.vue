<template>
   <div class="modal">
      <div class="modal-content">
         <span>Вы уверены?</span>
         <button>Нет</button>
         <button>Да</button>
      </div>
   </div>
</template>

<script>
export default {}
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
