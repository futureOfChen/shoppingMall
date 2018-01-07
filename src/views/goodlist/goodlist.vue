<template>
 <div class="goodlist">
    <v-header></v-header>

    <v-navbread>
      <span>Goods</span>
    </v-navbread> 

    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">Sort by:</span>
          <a href="javascript:void(0)" class="default cur">Default</a>
          <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
          <a href="javascript:void(0)" class="filterby stopPop">Filter by</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter stopPop" id="filter">
            <dl class="filter-price">
              <dt>Price:</dt>
              <dd><a href="javascript:void(0)">All</a></dd>
              <dd>
                <a href="javascript:void(0)">0 - 100</a>
              </dd>
              <dd>
                <a href="javascript:void(0)">100 - 500</a>
              </dd>
              <dd>
                <a href="javascript:void(0)">500 - 1000</a>
              </dd>
              <dd>
                <a href="javascript:void(0)">1000 - 2000</a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="(good ,index) in goodslist" :key="index">
                  <div class="pic">
                    <a href="#"><img :src="'/static/'+good.productImg" alt=""></a>                  </div>
                  <div class="main">
                    <div class="name">{{good.productName}}</div>
                    <div class="price">{{good.productPrice}}</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <v-footer></v-footer>

 </div>
</template>

<script >
import VHeader from '../../components/header/header'
import VFooter from '../../components/footer/footer'
import VNavbread from '../../components/navbread/navbread'
 export default {
   data() {
     return {
       goodslist:[]
     }
   },
   components: {
     VHeader,
     VFooter,
     VNavbread

   },
  mounted(){
    this.getGoodslist();
  },
  methods:{
    getGoodslist(){
      this.$http.get('api/test')
        .then(res => {
          let data = res.data.goods ;
          if( +data.status === 0){
            this.goodslist = data.result;
            console.log(this.goodslist)
          }
        })
    }
  }
 }
</script>

<style>
  @import '../../../src/assets/css/base.css';
  @import '../../../src/assets/css/product.css';
  @import '../../../src/assets/css/login.css';
  @import '../../../src/assets/css/checkout.css';


  .nav-breadcrumb {
    text-align: left;
  }

</style>



