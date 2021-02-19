<template>
  <div class="hello">
    <van-nav-bar :class="{'nav': isbkcolor}">
      <template #left>
          <van-popover v-model="showPopover" trigger="click"
          placement="bottom-start"
          >
            <van-collapse v-model="activeName" class="main" accordion>
              <van-collapse-item title="主题" name="1">
                  <van-sidebar v-model="activeKey" @change="onChange">
                    <van-sidebar-item title="白天" />
                    <van-sidebar-item title="黑夜" />
                  </van-sidebar>
              </van-collapse-item>
            </van-collapse>
            <template #reference>
              <van-icon name="wap-nav" size="40" class="icon-nav" />
            </template>
          </van-popover>
      </template>
      <template #right>
        <img src="@/assets/1.png" width="30px" />
        <span class="text">{{ msg }}</span>
      </template>
    </van-nav-bar>
    <van-cell-group>
      <van-search
        placeholder="Add Item"
        shape="round"
        :class="{'search': isbkcolor}"
        v-model="curname"
      >
        <template #left-icon>
          <div></div>
        </template>
        <template #right-icon>
          <van-button 
            round
            class="button"
            @click="arrAdd"
          >
            <img src="@/assets/2.png" width="40px" />
          </van-button>
        </template>
      </van-search>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    value: String,
    arrAdd: Function,
    isbkcolor: Boolean,
    changeBgcolor: Function,
  },

  data () {
    return {
      curname: this.value,
      showPopover: false,
      activeName: '',
      activeKey: this.isbkcolor ? 1 : 0,
    }
  },

  methods: {
    onChange (index) {
      if(index === 1) {
        this.changeBgcolor(true)
      } else {
        this.changeBgcolor(false)
      }
    }
  },

  watch: {
    curname: function (newVal) {
      this.$emit("update:title", newVal);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon-nav{
 color: rgb(109, 110, 139);
}
.main{
  width: 80px;
}
.text{
  font-size: 20px;
}
.nav{
  background-color:rgb(50, 49, 91); 
}
.search{
  background-color:rgb(50, 49, 91); 
}
.button{
  width: 40px;
  height: 39px;
}

</style>
