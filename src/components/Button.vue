<template>
  <button class="btn" type="button" v-if="type == 'button'">
    <slot></slot>
  </button>
</template>

<script>
export default {

  name: 'Button',

  props: {
    type: String
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
.btn {
  min-width: 150px;
  padding: 0 10px;
  border: 0 none;
  border-radius: 2px/4px;
  background: #017AAF;
  line-height: 40px;
  text-align: center;
  -webkit-appearance: none;
  appearance: none;
  color: #fff;
  font-size: 15px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  transition: opacity .3s;

  svg {
    display: inline-block;
    margin-right: 4px;
    vertical-align: middle;
  }

  &--primary {
    background: #023955;
    font-weight: normal;
  }

  &--danger {
    background: #E2002E;
    font-weight: normal;
  }

  &:hover {
    opacity: .8;
  }
}
</style>
