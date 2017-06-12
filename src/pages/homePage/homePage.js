import $ from '@/assets/zepto.js'
export default {
  name: 'HomePage',
  created: function() {
      this.picNavBar = $('#homepage-pic-nav');
      this.initPicNav();
  },
  data() {
    return {
        picNavBar:null
    }
  },
  methods: {
      initPicNav:function(){

      }
  },
  components: {

  }
}
