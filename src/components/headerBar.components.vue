<!--  - homePage 主页
- aboutUs 关于我们
- successCase 成功案例
- ourRecord 我们遍布的足迹
- ourCulture 我们的理念
- contactUs 联系我们
-->
<template>
  <div class="header-bar">
      <img src="../assets/logo.png" alt="logo" class="header-logo">
      <ul class="nav">
          <li v-for="item in navdata" class="nav-item">
              <span>{{item.name}}</span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'headerBar',
  data () {
    return {
      navdata:[
          {
              name:'关于我们',
              target:'aboutUs',
              choose:false
          },
          {
              name:'成功案例',
              target:'successCase',
              choose:false
          },
          {
              name:'我们遍布的足迹',
              target:'ourRecord',
              choose:false
          },
          {
              name:'我们的理念',
              target:'ourCulture',
              choose:false
          },
          {
              name:'联系我们',
              target:'contactUs',
              choose:false
          }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    .header-bar{
        height:110px;
        background-color:#000;
        text-align: left;
        box-shadow: 1px #fff;
        .header-logo{
            margin-left:50px;
            vertical-align: middle;
        }
        ul.nav{
            display: inline-block;
            margin-left:120px;
        }
        .nav-item{
            color:#fff;
            display:inline-block;
            line-height:110px;
            height:100%;
            padding:0px 25px;
            font-weight: 600;
            position:relative;
            z-index:1;
            span{
                position:relative;
                z-index:10;
            }
            &:after{
                content:' ';
                position:absolute;
                border-right:1px solid #9FB723;
                width:1px;
                height:30px;
                top:50%;
                margin-top:-15px;
                right:0;
                transform: rotateZ(-20deg);
            }
            &:last-child:after{
                border:0;
            }
            &:hover{
                cursor : pointer;
            }
            &:before{
                transition: 0.3s all ;
                content: " ";
                z-index:2;
                box-sizing: border-box;
                position: absolute;
                width: 98%;
                height: 100%;
                left: 1%;
                top: 0;
                transform: skew(20deg);
                background-color: rgba(0,0,0,0);
                border-bottom:0px solid;
                border-image: linear-gradient(#fff,#9FB723, rgba(124, 124, 124, 0.63), #9FB723,#fff) 250 50
            }
            &:hover:before{
                content: " ";
                box-sizing: border-box;
                background-color: rgba(100,100,100,.5);
                border-bottom:10px solid;
                border-image: linear-gradient(#fff,#9FB723, rgba(124, 124, 124, 0.63), #9FB723,#fff) 250 50
            }
        }
    }
</style>
