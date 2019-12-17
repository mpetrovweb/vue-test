<template>
  <div class="bookmaker">
    <span class="bookmaker__index"></span>

    <div class="bookmaker__checkbox">
      <input type="checkbox" id="checkbox">

      <label for="checkbox"></label>
    </div><!-- /.bookmaker__checkbox -->

    <div class="bookmaker__content">
      <img src="css/images/" alt="">

      <p></p>
    </div><!-- /.bookmaker__content -->

    <div class="bookmaker__actions">
      <div class="bookmaker__row">
        <label for="field" class="bookmaker__label">Default</label>

        <input type="text" id="field" class="bookmaker__field">

        <button type="button" class="bookmaker__control"></button>
      </div><!-- /.bookmaker__row -->

      <div class="bookmaker__row">
        <label for="field" class="bookmaker__label">Default</label>

        <input type="text" id="field" class="bookmaker__field">

        <button type="button" class="bookmaker__control bookmaker__control--danger"></button>
      </div><!-- /.bookmaker__row -->
    </div><!-- /.bookmaker__actions -->
  </div><!-- /.bookmaker -->
</template>

<script>
export default {

  name: 'Bookmaker',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
.bookmaker {
  display: flex;
  flex-flow: row nowrap;

  &__index {
    flex: 0 0 30px;
    text-align: center;
    line-height: 30px;
  }

  &__checkbox {
    position: relative;
    flex: 0 0 30px;
    height: 30px;

    input {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
    }

    label {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border: 1px solid #E4E7F1;
      background: #fff;
    }

    label:before {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 10px;
      height: 18px;
      border: 2px solid;
      border-color: transparent #52BC01 #52BC01 transparent;
      margin: auto;
      opacity: 0;
      transition: opacity .2s;
      transform: translate(1px, -2px) rotate(45deg);
      content: '';
    }

    input:checked + label:before {
      opacity: 1;
    }
  }

  &__actions {
    justify-self: flex-end;
    flex: 0 0 60%;
  }

  &__row {
    display: flex;
    flex-flow: row nowrap;

    & + & {
      margin-top: 8px;
    }
  }

  &__content {
    flex: 1;
  }

  &__label {
    flex: 0 1 140px;
    padding-right: 17px;
    color: #616161;
    font-size: 15px;
    font-weight: bold;
    text-align: right;
    line-height: 38px;
  }

  &__field {
    flex: 1;
    height: 38px;
    padding: 0 16px;
    border: 0 none;
    background: rgba(#7B839A, .21);
    font-size: 15px;
    color: #395669;
  }

  &__control {
    position: relative;
    width: 38px;
    height: 38px;
    border: 0 none;
    border-radius: 2px/4px;
    background: #5BCB34;
    transition: opacity .3s;

    &:hover {
      opacity: .8;
    }

    &:before,
    &:after {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 18px;
      height: 2px;
      background: #fff;
      margin: auto;
      content: '';
    }

    &:after {
      transform: rotate(90deg);
    }

    &--danger {
      background: #E2002E;

      &:before {
        transform: rotate(45deg);
      }

      &:after {
        transform: rotate(135deg);
      }
    }
  }
}
</style>