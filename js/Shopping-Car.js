/**
 * Created by Admin on 2018/4/15.
 */
var cm =new Vue({
    el:"#app",
    data:{
        totleMoney:0,
        productList:[]
    },
    filters:{

    },
    mounted: function (){
        this.cartview();
    },
    methods:{
        cartview: function () {
            var _this=this;
            this.$http.get("./data/cart.json",{"id":123}).then(function(res){
                _this.productList=res.body.result.list;
                _this.totleMoney=res.body.result.totleMoney;
            })
        }
    }
});