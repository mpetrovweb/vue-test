<template>
  <div class="bookmakers">
    <Bookmaker
      v-for="(bookmaker, index) in filteredBookmakers"
      :key="'id-' + bookmaker.id"
      :payload="bookmaker"
      :index="index"
    />
  </div>
</template>

<script>
import Bookmaker from '@/components/Bookmaker';
import { mapActions, mapGetters } from 'vuex';

export default {

  name: 'Bookmakers',

  components: {
    Bookmaker
  },

  data () {
    return {

    }
  },

  computed: {
    ...mapGetters(['bookmakers', 'countries', 'filteredBookmakers'])
  },

  methods: {
    ...mapActions(['getBookmakers', 'getCountries']),
  },

  created() {
    this.getBookmakers();
    this.getCountries();
  }
}
</script>

<style lang="scss">

</style>
