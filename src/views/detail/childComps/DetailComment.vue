<template>
 <div class="comment" v-if="Object.keys(comment).length!==0">
   <div class="comment-top">
       <span>用户评价</span>
       <span>更多</span>
   </div>

   <div class="content" v-if="Object.keys(comment).length!==0">
     <div class="content-top">
       <img :src="comment.user.avatar" alt="">
       <span class="span">{{comment.user.uname}}</span>
     </div>
     <div class="discuss">
       <span>
         {{comment.content}}
       </span>
       <div class="date" v-if="Object.keys(comment).length!==0">
         {{comment.created  |  showDate}}
         <span>{{comment.style}}</span>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
  import {formatDate,padLeftZero} from "common/utils";

  export default {
    name: "DetailComment",
    props:{
      comment:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters: {
      showDate: function (value) {
        let date = new Date(value*1000);
        return formatDate(date, 'yyyy-MM-dd')
      }
    }
  }
</script>

<style scoped>
  .comment{
    border-bottom: 5px solid #ECECEC;
    margin-bottom: 10px;
  }
.comment-top{
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;
  font-size: 13px;
  border-bottom: 1px solid #ECECEC;
}

  .content{
    padding: 15px;
  }

  .content-top img{
    width: 45px;
    border-radius: 50%;
  }
  .content-top span{
    position: relative;
    left: 7px;
    bottom: 15px;
}
  .discuss{
    font-size: 13px;
    padding: 10px 0;
    color: #A5A5A5;
  }
  .date{
    margin-top: 10px;
    /*padding-bottom: 5px;*/

  }

</style>