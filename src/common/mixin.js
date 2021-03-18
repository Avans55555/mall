import BackTop from "components/content/backTop/BackTop";

export const toTopMix = {
  components:{
    BackTop
  },
data(){
  return{
    isShow:false
  }
},

methods:{
  bcClick(){
    this.$refs.scroll.scroll.scrollTo(0,0,300)
  },
}
}

