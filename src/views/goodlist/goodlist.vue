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
          <a href="javascript:void(0)" class="default" 
            :class="{'cur':sortByDefault}" 
            @click="changeSortType">Default</a>
          <a href="javascript:void(0)" class="price" 
            :class="{'cur': !sortByDefault}"
            @click="changeSortType" >Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
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
                @click="setCurPriceFilter(0,0,0)">All</a></dd>
              <dd v-for="(item,index) in priceFilterList" :key="index">
                <a href="javascript:void(0)" 
                :class="{'cur':curPriceFilterIndex === index+1}"
                @click="setCurPriceFilter(index+1,item.startPrice,item.endPrice)">
                  {{item.startPrice}} - {{item.endPrice}}
                </a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="(good ,index) in fixedGoodslist" :key="index">
                  <div class="pic">
                    <a href="#"><img v-lazy="'/static/'+good.productImage" alt=""></a>                  </div>
                  <div class="main">
                    <div class="name">{{good.productName}}</div>
                    <div class="price">{{good.salePrice}}</div>
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
import utils from '../../assets/js/utils'
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
       overlayFlag: false,
       sortByDefault:true,
       startPrice:0,
       endPrice:0
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
    setCurPriceFilter(index,startPrice,endPrice) {
      this.curPriceFilterIndex = index;

        this.startPrice = startPrice;
        this.endPrice = endPrice;
  
      console.log(this.startPrice)
      console.log(this.endPrice)
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
    },
    changeSortType() {
      this.sortByDefault = !this.sortByDefault;
    }
  },
  computed:{
    fixedGoodslist() {
      if( this.curPriceFilterIndex==0 ) {
        if( this.sortByDefault ) {
          return this.goodslist;
        }else {
          let goods = [...this.goodslist];
          utils.sortArrayByPrice(goods,true);
          console.log(goods)
          return goods;
        }
      }else {
        if ( this.sortByDefault ) {
          return utils.filterArrayByPrice(this.goodslist,this.startPrice,this.endPrice);
        }else {
          let goods = utils.filterArrayByPrice(this.goodslist,this.startPrice,this.endPrice);
          utils.sortArrayByPrice(goods,true);
          return goods;
        }
      }
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



