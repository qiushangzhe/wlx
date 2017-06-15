<template>
<div class="bread-crumbs">
	<!-- <router-link :to="'/aboutUs/aboutCompany'">点我</router-link> -->
	<div class="page-title-common">
		{{pageName}}

		<span class="other-child-page" v-for="item in childRouter">
			<a v-on:click="changePage(item.path)">{{item.meta.realName}}</a>
		</span>
	</div>
	<div class="bread-box">
		<span class="bread-item">
			<router-link :to="'/'">首页</router-link>
			<span class="cut">
				>
			</span>
		</span>
		<span v-for="(item,index) in bread" class="bread-item">
			<router-link :to="item.path">{{item.meta.realName}}</router-link>
			<span v-if="bread.length > 1 && index!= bread.length-1" class="cut">
				>
			</span>
		</span>
	</div>
</div>
</template>

<script>
export default {
	name: 'breadCrumbs',
	created: function() {
		this.bread.length = 0;
		var self = this;
		this.$route.matched.filter(function(item) {
			self.bread.push(item);
		});
		this.pageName = this.$router.currentRoute.meta.realName;
		this.getChildRouter();
	},
	data() {
		return {
			pageName: '',
			bread: [],
			childRouter: [],
			routerName : ''
		}
	},
	methods: {
		getChildRouter: function() {
			this.routerName = this.$router.currentRoute.name;
			var routerList = this.$router.options.routes;
			var targetRouter = null;
			for (var i in routerList) {
				if (routerList[i].name && routerList[i].name == this.routerName) {
					this.childRouter = routerList[i].children;
					return;
				}
			}
		},
		changePage:function(path){
			this.$router.replace(path);
		}
	},
	watch: {
		'$route.fullPath': function(data) {
			this.bread.length = 0;
			var self = this;
			this.$route.matched.filter(function(item) {
				self.bread.push(item);
			});
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.bread-crumbs {
	.other-child-page{
		a{
			font-size:13px;
			margin-left:10px;
			cursor: pointer;
			transition:.5s;
			color:#fff;
			&:hover{
				color:#000;
			}
		}
	}

    .bread-box {
        text-align: left;
        font-size: 14px;
        margin-left: 60px;
        margin-top: 20px;
        .bread-item {
            a {
                text-decoration: none;
                color: #01799D;
            }
            .cut {
                font-size: 13px;
                color: #01799D;
                vertical-align: middle;
            }
        }
    }
}
</style>
