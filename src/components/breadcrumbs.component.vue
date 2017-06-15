<template>
<div class="bread-crumbs">
	<div class="page-title-common">
		{{pageName}}
	</div>
	<div class="bread-box">
		{{pageName}}
	</div>
</div>
</template>

<script>
export default {
	name: 'breadCrumbs',
	created: function() {
		this.pageName = this.$router.currentRoute.meta.realName;
	},
	data() {
		return {
			pageName: ''
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.bread-crumbs {
    .bread-box {
        text-align: left;
        font-size: 14px;
        margin-left: 60px;
        margin-top: 20px;
    }
}
</style>
