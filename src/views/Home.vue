<template>
  <div class="home">
    Vue项目{{new Date() | moment}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      date: ''
    }
  }
}
</script>