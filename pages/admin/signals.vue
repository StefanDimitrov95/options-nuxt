<template>
  <div>
    <upload-button/>
    <signal-table/>
  </div>
</template>

<script>
import SignalTable from '~/components/SignalTable'
import UploadButton from '~/components/UploadButton'
  
export default {
  
  layout: 'admin',
  components: {
    SignalTable,
    UploadButton
  },
}
</script>

<style scoped>
div {
  margin-top: 1em;  
}
</style>