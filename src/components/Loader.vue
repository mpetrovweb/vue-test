<template functional>
    <div class="loader">
        <span></span>

        <span></span>

        <span></span>

        <span></span>
    </div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style lang="scss">
.loader {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 160px;
  padding: 40px 0;
}
.loader span {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #aaa;
  border-radius: 50%;
  animation: loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #aaa transparent transparent transparent;
}
.loader span:nth-child(1) {
  animation-delay: -0.45s;
}
.loader span:nth-child(2) {
  animation-delay: -0.3s;
}
.loader span:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
