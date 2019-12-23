<template>
  <div class="bookmakers" >
    <Loader v-if="!countries.length" />

    <template v-if="countries.length">
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
    </template>
  </div>
</template>

<script>
import Bookmaker from '@/components/Bookmaker';
import Loader from '@/components/Loader';
import draggable from 'vuedraggable';
import { mapGetters } from 'vuex';

export default {

  name: 'Bookmakers',

  components: {
    Bookmaker,
    draggable,
    Loader
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
  }
}
</script>

<style lang="scss">

</style>
