<template>
  <div class="bookmakers" v-if="countries.length">
    <draggable v-model="filteredBookmakers" :disabled="!!filterValue">
      <transition-group>
          <Bookmaker
            v-for="(bookmaker, index) in filteredBookmakers"
            :key="'id-' + bookmaker.id"
            :payload="bookmaker"
            :index="index"
            :countries="countries"
          />
      </transition-group>
  </draggable>
  </div>
</template>

<script>
import Bookmaker from '@/components/Bookmaker';
import draggable from 'vuedraggable';
import { mapActions, mapGetters } from 'vuex';

export default {

  name: 'Bookmakers',

  components: {
    Bookmaker,
    draggable
  },

  data () {
    return {

    }
  },

  computed: {
    ...mapGetters(['bookmakers', 'countries', 'filterValue']),

    filteredBookmakers: {
      get() {
        return this.$store.state.filteredBookmakers;
      },
      set(value) {
        this.$store.commit('REORDER_BOOKMAKERS', value);
      }
    }
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
