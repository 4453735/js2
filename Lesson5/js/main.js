const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    userSearch: '',
    catalogUrl: '/catalogData.json',
    products: [],
    imgCatalog: 'https://placehold.it/200x150',
    filtered: [],
    isVisibleCart: false,
  },
  methods: {
    getJson(url){
      return fetch(url)
          .then(result => result.json())
          .catch(error => {
            console.log(error);
          })
    },
    addProduct(product) {
      console.log(product);
    },
    filter() {
      let regexp = new RegExp(this.userSearch, 'i');
      this.filtered = this.products.filter(el => regexp.test(el.product_name));
    },
  },
  beforeCreate() {

  },
  created() {
      // this.getJson(`${API + this.catalogUrl}`)
      //     .then(data => {
      //       for(let el of data){
      //         this.products.push(el);
      //       }
      //     });
  },
  beforeMount() {

  },
  mounted(){
    this.getJson(`${API + this.catalogUrl}`)
        .then(data => {
          for (let el of data) {
            this.products.push(el);
            this.filtered.push(el);
          }
        });

  },
  beforeUpdate() {

  },
  updated() {

  },
  beforeDestroy() {

  },
  destroyed() {

  },

});
