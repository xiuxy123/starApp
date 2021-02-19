<style lang="scss" scoped>

.container {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
}
.containerBackcolor{
  background-color: rgb(50, 49, 91);
   color: rgb(178, 179, 206);
}
.footer{
  margin-bottom: 20px;
}
</style>

<template>
  <div :class="{ 'container': true, 'containerBackcolor': isbkcolor }">
     <HelloWorld
     :msg="msg"
     v-bind:title.sync="title"
      :arrAdd="arrAdd"
      :isbkcolor="isbkcolor"
      :changeBgcolor="changeBgcolor"
     />
     <Input 
     :List="arr" 
     :imgsrc='url1' 
     :listdelete='arrDelete'
     :listclick='arrclick'
     :toComplete='toComplete'
     :isbkcolor="isbkcolor"
      msg="To Do" 
    />
     <Input 
     :List="completes"
     :imgsrc='url2'
     :listdelete='completesDelete'
     :listclick='compeletesclick'
     :isbkcolor="isbkcolor"
      msg="COMPLETED"
     />
    <div class="footer"></div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import Input from '@/components/Input'
import Moment from 'moment'
import url1 from '@/assets/incomplete.png'
import url2 from '@/assets/complete.png'
import '@vant/touch-emulator'

export default {
  data () {
    return {
      isbkcolor: false,
      title: '',
      url1,
      url2,
      msg: 'CHORES',
      index: 1006,
      arr: [
        {
          msg: 'Pick up mail',
          id: 1001,
          visble: false,
          iscomplete: false,
          date:"18/02/2021"
        },
        {
          msg: 'Buy Cat food',
          id: 1002,
          visble: false,
          iscomplete: false,
          date: Moment(Date()).format('DD/MM/YYYY')
        },
        {
          msg: 'Get gift for grandma',
          id: 1003,
          visble: false,
          iscomplete: false,
          date: Moment(Date()).format('DD/MM/YYYY')
        },
        {
          msg: 'Doctors appointment',
          id: 1004,
          visble: false,
          iscomplete: false,
          date: Moment(Date()).format('DD/MM/YYYY')
        },
      ],
      completes: [
        {
          msg: 'Renew registration',
          id: 1005,
          visble: false,
          iscomplete: true,
          date: Moment(Date()).format('DD/MM/YYYY')
        },
        {
          msg: 'HIIT workout',
          id: 1006,
          visble: false,
          iscomplete: true,
          date: Moment(Date()).format('DD/MM/YYYY')
        },
      ]
    }
  },
  components: {
    HelloWorld,
    Input
  },
  methods: {
    changeBgcolor (value) {
      this.isbkcolor = value
    },
    arrAdd () {
      if (this.title)
      this.arr.push({ 
        msg: this.title,
        id: this.index + 1,
        visble: false,
        iscomplete: false,
        date: Moment(Date()).format('DD/MM/YYYY')})
      this.index = this.index + 1
    },
    arrDelete (id) {
      for (var i=0; i < this.arr.length; i++) {
        if (this.arr[i].id === id) {
          this.arr.splice(i, 1)
          return
        }
      }
    },
    completesDelete (id) {
      for (var i=0; i < this.completes.length; i++) {
        if (this.completes[i].id === id) {
          this.completes.splice(i, 1)
          return
        }
      }
    },
    arrclick (id) {
      for (var i=0; i < this.arr.length; i++) {
        if (this.arr[i].id === id) {
          this.arr[i].visble = !this.arr[i].visble
          return
        }
      }
    },
    compeletesclick (id) {
      for (var i=0; i < this.completes.length; i++) {
        if (this.completes[i].id === id) {
          this.completes[i].visble = !this.completes[i].visble
          return
        }
      }
    },
    toComplete (id) {
      for (var i=0; i < this.arr.length; i++) {
        if (this.arr[i].id === id) {
          this.completes.push({...this.arr[i], iscomplete: true, visble: false})
          this.arr.splice(i, 1)
          return
        }
      }
    }
  }
}
</script>
