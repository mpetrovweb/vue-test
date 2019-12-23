<template>
  <div class="main">
    <div class="main__head">
      <div class="actions">
        <Button @click.native="saveBookmakers">Save</Button>
      </div><!-- /.actions -->

      <Filters />
    </div><!-- /.main__head -->

    <div class="main__body">
      <Bookmakers />
    </div><!-- /.main__body -->
  </div><!-- /.main -->
</template>

<script>
import Button from '@/components/Button';
import Filters from '@/components/Filters';
import Bookmakers from '@/components/Bookmakers';
import { mapActions } from 'vuex';

export default {

  name: 'Home',

  components: {
    Button,
    Bookmakers,
    Filters
  },

  data () {
    return {

    }
  },

  methods: {
    ...mapActions(['getBookmakers', 'getCountries']),

    saveBookmakers() {
      this.$store.dispatch('saveBookmakers');
    }
  },

  created() {
    this.getBookmakers();
    this.getCountries();
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
  margin-bottom: 17px;
  text-align: left;
}
</style>
