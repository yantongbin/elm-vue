<template>
  <div>
    <section id="connect-user">
      <div class="connect">
        <div class="connect-logo">
          <img src="images/index.jpg" alt>
        </div>
        <div class="connect-title">
          <p class="userNum">登录/注册</p>
          <p class="userTelphone">
            <i class="iconfont icon-shouji"></i>
            <span class="telephone">登陆后可获取更多特权</span>
          </p>
        </div>
        <div class="connect-icon">
          <i class="iconfont icon-icon1"></i>
        </div>
      </div>
    </section>
    <section id="aword-show">
      <a class="red-packed">
        <p class="red-num">
          <span class="num">3</span>
          <span class="unit">个</span>
        </p>
        <p class="packed">红包</p>
      </a>
      <a class="gold">
        <p class="gold-num">
          <span class="num">626</span>
          <span class="unit">个</span>
        </p>
        <p class="gold-gold">金币</p>
      </a>
    </section>
    <section id="adders-locatin">
      <div class="adders">
        <a href="##" class="adders-click">
          <i class="iconfont icon-wodedizhi"></i>
          <div class="title">
            我的地址
            <i class="iconfont icon-icon1"></i>
          </div>
        </a>
      </div>
    </section>
    <section id="active-wrapper">
      <div class="gold-shop">
        <a href="##" class="adders-click">
          <i class="iconfont icon-shangcheng"></i>
          <div class="title">
            金币商城
            <i class="iconfont icon-icon1"></i>
          </div>
        </a>
      </div>
      <div class="share-active">
        <a href="##" class="adders-click">
          <i class="iconfont icon-libao"></i>
          <div class="title">
            分享拿十元现金
            <i class="iconfont icon-icon1"></i>
          </div>
        </a>
      </div>
    </section>
    <section id="help-wrapper">
      <div class="customer-service">
        <a href="##" class="adders-click">
          <i class="iconfont icon-kefu"></i>
          <div class="title">
            我的客服
            <i class="iconfont icon-icon1"></i>
          </div>
        </a>
      </div>
      <div class="app-download">
        <a href="##" class="adders-click">
          <i class="iconfont icon-elmyhq"></i>
          <div class="title">
            下载饿了么App
            <i class="iconfont icon-icon1"></i>
          </div>
        </a>
      </div>
      <div class="rule-list">
        <a href="##" class="adders-click">
          <i class="iconfont icon-guize"></i>
          <div class="title">
            规则中心
            <i class="iconfont icon-icon1"></i>
          </div>
        </a>
      </div>
    </section>
    <section>
      <div class="policy-list">隐私政策</div>
    </section>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
#connect-user {
  color: #fff;
  .connect {
    width: 100%;
    height: 105px;
    display: flex;
    align-items: center;
    background-color: #0085ff;
    padding: auto;
    .connect-logo {
      width: 57.6px;
      height: 57.6px;
      img {
        width: 57.6px;
        height: 57.6px;
      }
    }
    .connect-title {
      width: 246.67px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 16px;
      .userNum {
        font-size: 19px;
        margin-bottom: 8px;
      }
      .userTelphone{
        font-size: 11px;
      }
    }
  }
}
#aword-show {
  width: 100%;
  height: 74.67px;
  background-color: #fff;
  display: table;
  border-bottom: 1px solid #ddd;
  .red-packed {
    width: 50%;
    border-right: 1px solid #ddd;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    .red-num {
      .num {
        color: rgb(255, 95, 62);
        font-size: 23px;
      }
      .unit {
        color: rgb(255, 95, 62);
        font-size: 11px;
      }
    }
    .packed {
      color: #666;
    }
  }
  .gold {
    width: 50%;
    display: block;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    .gold-num {
      .num {
        color: rgb(106, 194, 11);
        font-size: 23px;
      }
      .unit {
        color: rgb(106, 194, 11);
        font-size: 11px;
      }
    }
    .gold-gold {
      color: #666;
    }
  }
}
#adders-locatin {
  margin-top: 9px;
  border-bottom: 1px solid #ddd;
  .adders {
    .adders-click {
      padding-left: 24px;
      display: flex;
      background-color: #fff;
      .icon-wodedizhi {
        margin-right: 9px;
        padding: 13px 0;
      }
      .title {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 13px 9px 13px 0;
        color: #333;
        .icon-icon1 {
          color: #bbbbbb;
          font-size: 12px;
        }
      }
    }
  }
}
#active-wrapper {
  margin-top: 9px;
  border-bottom: 1px solid #ddd;
  .gold-shop {
    border-bottom: 1px solid #ddd;
    .adders-click {
      padding-left: 24px;
      display: flex;
      background-color: #fff;
      .icon-shangcheng {
        margin-right: 9px;
        padding: 13px 0;
      }
      .title {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 13px 9px 13px 0;
        color: #333;
        .icon-icon1 {
          color: #bbbbbb;
          font-size: 12px;
        }
      }
    }
  }
  .share-active {
    .adders-click {
      padding-left: 24px;
      display: flex;
      background-color: #fff;
      .icon-libao {
        margin-right: 9px;
        padding: 13px 0;
      }
      .title {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 13px 9px 13px 0;
        color: #333;
        .icon-icon1 {
          color: #bbbbbb;
          font-size: 12px;
        }
      }
    }
  }
}

#help-wrapper {
  margin-top: 9px;
  border-bottom: 1px solid #ddd;
  .customer-service {
    border-bottom: 1px solid #ddd;
    .adders-click {
      padding-left: 24px;
      display: flex;
      background-color: #fff;
      .icon-kefu {
        margin-right: 9px;
        padding: 13px 0;
      }
      .title {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 13px 9px 13px 0;
        color: #333;
        .icon-icon1 {
          color: #bbbbbb;
          font-size: 12px;
        }
      }
    }
  }
  .app-download {
    border-bottom: 1px solid #ddd;
    .adders-click {
      padding-left: 24px;
      display: flex;
      background-color: #fff;
      .icon-elmyhq {
        margin-right: 9px;
        padding: 13px 0;
      }
      .title {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 13px 9px 13px 0;
        color: #333;
        .icon-icon1 {
          color: #bbbbbb;
          font-size: 12px;
        }
      }
    }
  }
  .rule-list {
    border-bottom: 1px solid #ddd;
    .adders-click {
      padding-left: 24px;
      display: flex;
      background-color: #fff;
      .icon-guize {
        margin-right: 9px;
        padding: 13px 0;
      }
      .title {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 13px 9px 13px 0;
        color: #333;
        .icon-icon1 {
          color: #bbbbbb;
          font-size: 12px;
        }
      }
    }
  }
}
.policy-list{
  width: 100%;
  text-align: center;
  margin: 22px 0;
  color: #4ab6f0;
}
</style>



