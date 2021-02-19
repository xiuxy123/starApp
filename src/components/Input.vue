<template>
    <div class="todolist">
      <div class="todo">
        <div>{{ msg }}</div>
      </div>
      <div v-if="List.length < 1"><van-empty description="No thing" /></div>
      <div :class="{'list': true, 'listcolor': isbkcolor, 'listBordercolor': !isbkcolor}" v-for="item in List" :key='item.id'  @click="listclick(item.id)">
        <div class="text">
          <img :src="imgsrc" width="25px"  class="img"  />
          <div :class="{'content': true, 'line-through': item.iscomplete}">{{ getmsg(item.msg) }}</div>
        </div>
        <div class="date">
          <img src="@/assets/date.png" width="15px" height="15px" class="img1" />
          <div class="date-text">{{ getdate(item.date) }}</div>
        </div>
        <div class="button" v-show="item.visble && !item.iscomplete" @click="toComplete(item.id)">
          <van-button type="primary" size="small"><van-icon name="success" /></van-button>
        </div>
        <div class="button" v-show="item.visble" @click="listdelete(item.id)">
          <van-button type="primary" size="small"><van-icon name="cross" /></van-button>
        </div>
      </div>
    </div>
</template>

<script>
import Moment from 'moment'
export default {
  name: "Input",
  props: {
    msg: String,
    List: Array,
    imgsrc: String,
    listdelete: Function,
    listclick: Function,
    toComplete: Function,
    isbkcolor: Boolean,
  },
  data () {
    return {
      datemsg: 'Due today'
    }
  },
  methods: {
    getdate (date) {
      if (date === Moment(Date()).format('DD/MM/YYYY')) {
        return this.datemsg
      } else {
        return date
      }
    },
   getmsg (msg) {
      let str = msg
     if (msg.length > 12) {
       str = msg.slice(0, 12) + '...'
     }
     return str
   }
  },
};
</script>

<style scoped>
.todolist{
  margin: 0px 10px 0px 20px;
  font-size: 18px;
}
.todo{
  display: flex;
  padding: 20px 10px 20px 10px ;
  color: rgb(136, 135, 175);
  font-size: 16px;
}
.list{
  display: flex;
  height: 60px;
  border-radius: 10px;
  margin-bottom: 10px;
}
.listcolor{
  background-color: rgb(69, 68, 108);
}
.listBordercolor{
  border: 3px solid rgb(247, 246, 250);
}
.text{
  display: flex;
}
.date{
  display: flex;
  padding: auto;
  margin: auto;
  margin-right: 20px;
  font-size: 14px;
}
.img{
  margin: auto 10px;
  background-color: #fff;
  border-radius: 20px;
}
.img1{
  margin: auto 10px;
}
.date-text{
   margin: auto 0;
}
.content{
  padding: auto;
  margin: auto 10px;
}
.line-through{
  text-decoration:line-through;
}
.button{
  margin: auto 0;
  margin-right: 10px;
}

</style>