<template>
  <div class="main">
    <div class="main__head">
      <div class="actions">
        <Button type="button">Save</Button>
      </div><!-- /.actions -->

      <div class="actions">
        <div class="actions__inner">
          <select name="filters">
            <option value="">- SHOW ALL -</option>
          </select>
        </div><!-- /.actions__inner -->

        <div class="actions__inner">
          <Button type="button" class="btn--primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="19.95" height="13.82" viewBox="0 0 19.95 13.82"> <path id="checked" d="M18.91,62.507,7.171,74.246l-6.13-6.13L0,69.156l7.171,7.171,12.78-12.78Z" transform="translate(0 -62.507)" fill="#fff"/></svg>
            Check All
          </Button>
        </div><!-- /.actions__inner -->

        <div class="actions__inner">
          <Button type="button" class="btn--danger">
            <svg xmlns="http://www.w3.org/2000/svg" width="17.053" height="17.053" viewBox="0 0 17.053 17.053"> <path id="unchecked" d="M17.053,1.055,16,0,8.526,7.472,1.055,0,0,1.055,7.472,8.526,0,16l1.055,1.055L8.526,9.581,16,17.053,17.053,16,9.581,8.526Z" fill="#fff"/> </svg> 
            Remove All
          </Button>
        </div><!-- /.actions__inner -->
      </div><!-- /.actions -->
    </div><!-- /.main__head -->

    <div class="main__body">
      <Bookmakers />
    </div><!-- /.main__body -->
  </div><!-- /.main -->
</template>

<script>
import Button from '@/components/Button'
import Bookmakers from '@/components/Bookmakers'

export default {

  name: 'Home',
  components: {
    Button,
    Bookmakers
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  max-width: 1500px;
  padding: 15px;
  margin: 0 auto;
  background: #F1F3F9;
}

.actions {
  display: flex;

  &__inner {
    & + & {
      margin-left: 8px;
    }
  }
}
</style>