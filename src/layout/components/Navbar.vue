<template>
  <div class="navbar">
    <hamburger
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />

    <breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
      <!-- <a class="left pointer" :href="utms">
        <i class="el-icon-sort" />切换UTMS
      </a> -->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img :src="userInfo.headImg" class="user-avatar" />
          <span class="user-name">{{ userInfo.name }}</span>
          <i class="el-icon-more user-options" />
        </div>

        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item> 首页 </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided @click.native="logout">
            <span style="display: block">登出帐户</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import Breadcrumb from "@/components/Breadcrumb"
import Hamburger from "@/components/Hamburger"
import { getToken, setToken, removeToken } from "@/utils/auth"
import me from "@/assets/me.png"

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters(["sidebar", "avatar"])
  },
  data() {
    return {
      userInfo: {
        headImg: me
      },
      utms: process.env.VUE_APP_UTMS
    }
  },
  created() {
    this.loadUser()
    this.loadAuthedInfo()
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar")
    },
    loadUser() {
      // this.post({ url: this.Api.userInfo }).then(r => {
      //   const { headImg, name } = r.data
      //   const userInfo = r.data
      //   this.name = name
      //   if (headImg) {
      //     userInfo.headImg = this.Api.filePreview + headImg
      //   } else {
      //     userInfo.headImg = me
      //   }
      //   this.userInfo = userInfo
      //   this.$store.dispatch('data/loadUser', r.data)
      // })
    },
    loadAuthedInfo() {
      // this.post({ url: this.Api.authedInfo }).then(r => {
      //   this.$store.dispatch('data/loadAuthedInfo', r.data.authedInfo)
      // })
    },
    async logout() {
      removeToken()
      this.$router.replace(`/login`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.navbar {
  height: 60px;
  overflow: hidden;
  position: relative;
  background: $menuBg;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 55px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    // line-height: 60px;
    display: flex;
    align-items: center;
    &:focus {
      outline: none;
    }
    .left {
      color: white;
      margin: 0 20px;
      position: relative;
      // bottom: 12px;
      font-size: 14px;

      i {
        display: inline-block;
        width: 22px;
        height: 22px;
        padding-top: 5px;
        text-align: center;
        transform: rotate(90deg);
        margin-right: 8px;
        border-radius: 50%;
        background: #{$primary};
      }
    }
    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 40px;
      display: flex;

      .avatar-wrapper {
        position: relative;
        display: inline-flex;
        align-items: center;

        .user-avatar {
          /* cursor: pointer; */
          width: 32px;
          height: 32px;
          border-radius: 50%;
          margin-right: 10px;
        }
        .user-name {
          color: white;
          margin-right: 20px;
        }

        .user-options {
          cursor: pointer;
          position: absolute;
          right: -20px;
          color: white;
          font-size: 16px;
          transform: rotate(90deg);
        }
      }
    }
  }
}
</style>
