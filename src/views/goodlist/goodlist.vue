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
          <a href="javascript:void(0)" 
            class="filterby stopPop" 
            @click="showFilterPop">Filter by</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter stopPop" id="filter" :class="{'filterby-show':filterBy}">
            <dl class="filter-price">
              <dt>Price:</dt>
              <dd><a href="javascript:void(0)" 
                :class="{'cur':curPriceFilterIndex === 0}"
                @click="setCurPriceFilter(0)">All</a></dd>
              <dd v-for="(item,index) in priceFilterList" :key="index">
                <a href="javascript:void(0)" 
                :class="{'cur':curPriceFilterIndex === index+1}"
                @click="setCurPriceFilter(index+1)">{{item.startPrice}} - {{item.endPrice}}</a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="(good ,index) in goodslist" :key="index">
                  <div class="pic">
                    <a href="#"><img v-lazy="'/static/'+good.productImage" alt=""></a>                  </div>
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
    <div class="md-overlay " v-show="overlayFlag" @click="hideOverlay"></div>
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
       goodslist:[],
       priceFilterList:[
         {
           startPrice: 0,
           endPrice: 100
         },
         {
           startPrice: 100,
           endPrice: 500
         },
         {
           startPrice: 500,
           endPrice: 1000
         },
         {
           startPrice: 1000,
           endPrice: 2000
         },
       ],
       curPriceFilterIndex: 0,
       filterBy: false,
       overlayFlag: false
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
      this.$http.get('api/getGoodslist')
        .then(res => {
          this.goodslist = res.data;
        })
    },
    setCurPriceFilter(index) {
      this.curPriceFilterIndex = index;
      this.overlayFlag = false;
      this.filterBy = false;
    },
    showFilterPop(){
      this.filterBy = true;
      this.overlayFlag = true;
    },
    hideOverlay(){
      this.filterBy = false;
      this.overlayFlag = false;
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



