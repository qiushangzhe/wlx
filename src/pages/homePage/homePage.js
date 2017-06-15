import $ from 'jquery'
export default {
	name: 'HomePage',
	mounted: function() {
		this.picNavBar = $('#homepage-pic-nav .pic-nav');
		this.initPicNav();
	},
	data() {
		return {
			picNavBar: null,
			picNavX: 0,
			imgList: [{
				src: require('@/assets/bg-1.jpg')
			}, {
				src: require('@/assets/bg-2.jpg')
			}, {
				src: require('@/assets/bg-1.jpg')
			}, {
				src: require('@/assets/bg-2.jpg')
			}, {
				src: require('@/assets/bg-1.jpg')
			}, {
				src: require('@/assets/bg-2.jpg')
			}],
			chooseIndex: 0
		}
	},
	methods: {
		initPicNav: function() {
			this.picNavBar.css('width', this.imgList.length * 160 + 'px');
		},
		picNavLeft: function() {
			if (this.imgList.length < 5 || this.picNavX == 0) return;
			this.picNavX += 160;
			this.picNavBar.css('transform', 'translateX(' + this.picNavX + 'px)');
		},
		picNavRight: function() {
			console.log(this.imgList.length * 160, this.picNavX);
			if (this.imgList.length < 5 || this.picNavX == (5 - this.imgList.length) * 160) return;
			this.picNavX -= 160;
			this.picNavBar.css('transform', 'translateX(' + this.picNavX + 'px)');
		},
		choosePic: function(index) {
			this.chooseIndex = index;
		}
	},
	components: {

	}
}
