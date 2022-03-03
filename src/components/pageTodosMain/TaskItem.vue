<template>
   <div>
      <span>{{ task.text }}</span>
   </div>
</template>

<script>
export default {
   props: {
      task: {
         type: Object,
         required: true,
      },
   },
}
</script>

<style scoped></style>
