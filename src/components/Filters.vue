<template>
  <div class="actions">
    <div class="actions__inner actions__inner--expand">
      <Select2
        class="select-control"
        v-model="filterValue"
        :options="[...options]"
        :settings="{width: '100%'}"
      />
    </div><!-- /.actions__inner -->

    <div class="actions__inner">
      <Button type="button" class="btn--primary" @click.native="checkAll">
        <svg xmlns="http://www.w3.org/2000/svg" width="19.95" height="13.82" viewBox="0 0 19.95 13.82"> <path id="checked" d="M18.91,62.507,7.171,74.246l-6.13-6.13L0,69.156l7.171,7.171,12.78-12.78Z" transform="translate(0 -62.507)" fill="#fff"/></svg>
        Check All
      </Button>
    </div><!-- /.actions__inner -->

    <div class="actions__inner">
      <Button type="button" class="btn--danger" @click.native="uncheckAll">
        <svg xmlns="http://www.w3.org/2000/svg" width="17.053" height="17.053" viewBox="0 0 17.053 17.053"> <path id="unchecked" d="M17.053,1.055,16,0,8.526,7.472,1.055,0,0,1.055,7.472,8.526,0,16l1.055,1.055L8.526,9.581,16,17.053,17.053,16,9.581,8.526Z" fill="#fff"/> </svg>
        Remove All
      </Button>
    </div><!-- /.actions__inner -->
  </div><!-- /.actions -->
</template>

<script>
import Button from '@/components/Button';

export default {

  name: 'Filters',

  components: {
    Button
  },

  data () {
    return {
      defaultOptions: [
        {
          id: '',
          text: '- SHOW ALL -'
        },
        {
          id: 'active',
          text: '- SHOW ACTIVE -'
        },
        {
          id: 'inactive',
          text: '- SHOW INACTIVE -'
        }
      ]
    }
  },

  computed: {
    options() {
      return [...this.defaultOptions, ...this.$store.state.options]
    },

    filterValue: {
      get: function() {
        return this.$store.state.filterValue;
      },

      set: function(newValue) {
        this.$store.commit('FILTER_BY', newValue);
      }
    },
  },

  methods: {
    checkAll() {
      this.$store.commit('CHECK_ALL');

      this.$store.commit('FILTER_BY', this.filterValue);
    },

    uncheckAll() {
      this.$store.commit('UNCHECK_ALL');

      this.$store.commit('FILTER_BY', this.filterValue);
    }
  }
}
</script>

<style lang="scss" scoped>
.actions {
  display: flex;

  &__inner {
    & + & {
      margin-left: 8px;
    }
  }

  &__inner--expand {
    flex: 1;
  }
}
</style>
