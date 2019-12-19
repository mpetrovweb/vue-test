<template>
  <div class="bookmaker">
    <span class="bookmaker__index">{{index + 1}}</span>

    <div class="bookmaker__checkbox">
      <input type="checkbox" :id="'checkbox-' + index" v-model="isActive" />

      <label :for="'checkbox-' + index"></label>
    </div>

    <div class="bookmaker__content">
      <img src="css/images/" alt="" />

      <p>{{payload.name}}</p>
    </div>

    <div class="bookmaker__actions">
      <div class="bookmaker__row">
        <label :for="'field-' + index" class="bookmaker__label">Default</label>

        <input
          type="text"
          class="bookmaker__field"
          :id="'field-' + index"
          :value="payload.links ? payload.links.default : ''"
        />

        <button type="button" class="bookmaker__control"></button>
      </div>

      <template v-for="link in links">
        <div class="bookmaker__row" v-if="!isDefault(link.key)" :key="index + '-' + link.key">
          <div class="bookmaker__select">
            <Select2
              class="select-control"
              :value="link.key"
              :options="countries"
              :settings="{width: '100%'}"
              @select="updateLink($event.id, link.key, link.value)"
            />
          </div>

          <input
            type="text"
            class="bookmaker__field"
            :id="'link-' + index + '-' + link.key"
            :value="link.value"
            @input="updateLink(link.key, link.key, $event.target.value)"
          />

          <button type="button" class="bookmaker__control bookmaker__control--danger" @click="removeLink(link.key)"></button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {

  name: 'Bookmaker',
  props: {
    payload: {
      type: Object,
      default: () => {}
    },

    index: {
      type: Number
    }
  },

  data () {
    return {
      links: []
    }
  },

  computed: {
    isActive: {
      get: function() {
        return this.$store.getters.isActive(this.payload.id);
      },

      set: function() {
        this.$store.commit('TOGGLE_ACTIVE', this.payload.id);
      }
    },

    isDefault: () => (key) => key == 'default',

    countries: function() {
      return this.$store.state.countries.map(country => {
        return {
          id: country.code,
          text: country.code
        }
      })
    },
  },

  methods: {
    removeLink(key) {
      this.$store.commit('REMOVE_LINk', [this.payload.id, key]);

      const index = this.links.findIndex(link => link.key == key);

      this.links.splice(index, 1);

      // Trigger component re-render.
      // This is needed because the nested object values are not being watched
      this.$forceUpdate();
    },

    updateLink(newKey, oldKey, link) {
      this.removeLink(oldKey);

      this.$store.commit('ADD_LINK', [this.payload.id, newKey, link]);

      const index = this.links.findIndex(link => link.key == oldKey);

      this.links[index] = { key: newKey, value: link };
    },

    computeLinks() {
      for (let key in this.payload.links) {
        this.links.push({
          key,
          value: this.payload.links[key]
        })
      }
    }
  },

  mounted() {
    this.computeLinks();
  }
}
</script>

<style lang="scss">
.bookmaker {
  display: flex;
  flex-flow: row nowrap;
  padding: 27px 0;
  border-bottom: 1px solid #D7DAE4;

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

  &__select {
    flex: 0 1 140px;
    padding-right: 17px;
    text-align: left;
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
