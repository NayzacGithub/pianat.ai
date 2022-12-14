<template>
  <b-card
    header-class="card-header pb-0"
    text-variant="primary"
    class="col-md-6 col-xxl-3"
  >
    <i slot="header" class="fas fa-2x" :class="iconClass"></i>
    <a :href="link" class="card-link text-light">
      <div v-if="showCount" class="counter-card-count m-0 font-weight-bold">{{ currentCount }}</div>
      <div class="counter-card-title">{{ $t(title) }}</div>
    </a>
  </b-card>
</template>

<script>
  export default {
    data () {
      return {
        currentCount: null,
        loaded: false,
      }
    },
    props: {
      color: {
        type: String,
        default: 'secondary',
      },
      count: {
        type: Number,
        default: null,
      },
      countId: {
        default: null,
      },
      icon: {
        type: String,
        default: 'chart-line',
      },
      link: {
        type: String,
        default: '/',
      },
      title: {
        type: String,
        default: 'Count',
      },
      url: {
        type: String,
        default: null,
      }
    },
    mounted() {
      this.loadCount();
      
      if (this.countId !== null) {
        ProcessMaker.EventBus.$on('sidebar-count-updated-' + this.countId, count => {
          this.currentCount = count;
        });
      }
    },
    computed: {
      cardClass() {
        let classes = [];
        if (this.loaded) {
          classes.push('d-flex');
        } else {
          classes.push('d-none');
        }
        classes.push('bg-' + this.color)
        return classes.join(' ');
      },
      iconClass() {
        return 'fa-' + this.icon;
      },
      isInGroup() {
        return this.$parent.$options._componentTag == 'counter-card-group';
      },
      showCount() {
        return this.currentCount !== null;
      }
    },
    methods: {
      loadCount() {
        if (this.count !== null) {
          this.currentCount = this.count;
        } else if (this.url !== null) {
          if (! this.isInGroup) {
            ProcessMaker.apiClient.get(this.url)
              .then(response => {
                this.setCount(response.data.meta.total);
              })
              .catch(error => {
                this.show();
              });
          }
        }
      },
      setCount(count) {
        this.currentCount = count;
        this.show();
      },
      show() {
        this.loaded = true;
      }
    }
  }
</script>

<style scoped>
  .counter-card-count {
      font-size: 2.5rem;
      line-height: 1.2;
  }

  .counter-card-title {
    line-height: 1.2;
  }
</style>
