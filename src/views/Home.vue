<template>
  <div class="home flex-column">
    <header class="header">
      <h1>云数据管理平台</h1>
    </header>
    <div class="cube"></div>
    <div>
      <div class="title-top">
        <p>
          {{ title }}
        </p>
        <h3 class="button font-larger" @click="goBack" v-show="name !== '全国'">
          {{ prevName }}
        </h3>
      </div>
      <div class="company">
        <img src="../assets/img/logo.png" alt="公司图标" height="100%" />
        <h3 class="name font-larger">
          浙江衡睿科技
        </h3>
      </div>
    </div>
    <div class="content">
      <div class="center">
        <!--地图-->
        <div
          id="myMap"
          class="my-map"
          v-show="name === '全国' || name === '省级'"
        ></div>
        <!--市级信息-->
        <div class="city-info" v-show="name === '市级'">
          <div class="flex-column city-info-box">
            <div class="flex city-info-item">
              <div class="flex-row flex-center" style="height: 100%">
                <p class="title font-large">
                  BESS
                </p>
                <ul>
                  <li>
                    <p class="font-larger flex-row" style="align-items: center">
                      <i class="iconfont icon-dianxiang"></i>
                      杭州塔里科技公司 一期储能项目
                    </p>
                  </li>
                  <li>
                    <p class="font-larger flex-row" style="align-items: center">
                      <i class="iconfont icon-dianxiang"></i>
                      杭州塔里科技公司 一期储能项目
                    </p>
                  </li>
                  <li>
                    <p class="font-larger flex-row" style="align-items: center">
                      <i class="iconfont icon-dianxiang"></i>
                      杭州塔里科技公司 一期储能项目
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex city-info-item">
              <div class="flex-row flex-center" style="height: 100%">
                <p class="title font-large">
                  UPS
                </p>
                <ul>
                  <li>
                    <p class="font-larger flex-row" style="align-items: center">
                      <i class="iconfont icon-dianxiang"></i>
                      杭州塔里科技公司 一期储能项目
                    </p>
                  </li>
                  <li>
                    <p class="font-larger flex-row" style="align-items: center">
                      <i class="iconfont icon-dianxiang"></i>
                      杭州塔里科技公司 一期储能项目
                    </p>
                  </li>
                  <li>
                    <p class="font-larger flex-row" style="align-items: center">
                      <i class="iconfont icon-dianxiang"></i>
                      杭州塔里科技公司 一期储能项目
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex city-info-item">
              <div class="flex-row flex-center" style="height: 100%">
                <p class="title font-large">
                  TPS
                </p>
                <ul>
                  <li>
                    <p class="font-larger flex-row" style="align-items: center">
                      <i class="iconfont icon-dianxiang"></i>
                      杭州塔里科技公司 一期储能项目
                    </p>
                  </li>
                  <li>
                    <p class="font-larger flex-row" style="align-items: center">
                      <i class="iconfont icon-dianxiang"></i>
                      杭州塔里科技公司 一期储能项目
                    </p>
                  </li>
                  <li>
                    <p class="font-larger flex-row" style="align-items: center">
                      <i class="iconfont icon-dianxiang"></i>
                      杭州塔里科技公司 一期储能项目
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!--背景-->
        <div class="svg" id="svg">
          <BgSvg />
        </div>
        <!--左方框-->
        <div class="left-box flex-column flex-center">
          <div style="position: relative">
            <div class="top">
              <p class="title font-small">
                装机数
              </p>
              <p class="value font-large">
                116
              </p>
              <p class="unit font-small">
                台
              </p>
            </div>
            <div class="middle">
              <p class="title font-small">
                装机数
              </p>
              <p class="value font-large">
                116
              </p>
              <p class="unit font-small">
                台
              </p>
            </div>
            <div class="bottom">
              <p class="title flex font-small">
                装机数
              </p>
              <p class="value flex font-large">
                116
              </p>
              <p class="unit flex font-small">
                台
              </p>
            </div>
          </div>
        </div>
        <!--右方框-->
        <div class="right-box flex-column flex-center">
          <div style="position: relative">
            <div class="top">
              <p class="title font-small">
                装机数
              </p>
              <p class="value font-large">
                116
              </p>
              <p class="unit font-small">
                台
              </p>
            </div>
            <div class="middle">
              <p class="title font-small">
                装机数
              </p>
              <p class="value font-large">
                116
              </p>
              <p class="unit font-small">
                台
              </p>
            </div>
            <div class="bottom">
              <p class="title flex font-small">
                装机数
              </p>
              <p class="value flex font-large">
                116
              </p>
              <p class="unit flex font-small">
                台
              </p>
            </div>
          </div>
        </div>
        <!--左上信息-->
        <div class="left-top">
          <ul>
            <li class="font-small flex-column flex-center">
              <p>浙江省HRE--A256-01项目完工111111111</p>
            </li>
            <li class="font-small flex-column flex-center">
              <p>浙江省HRE--A256-01项目完工111111111</p>
            </li>
            <li class="font-small flex-column flex-center">
              <p>浙江省HRE--A256-01项目完工111111111</p>
            </li>
            <li class="font-small flex-column flex-center">
              <p>浙江省HRE--A256-01项目完工111111111</p>
            </li>
            <li class="font-small flex-column flex-center">
              <p>浙江省HRE--A256-01项目完工111111111</p>
            </li>
            <li class="font-small flex-column flex-center">
              <p>浙江省HRE--A256-01项目完工111111111</p>
            </li>
            <li class="font-small flex-column flex-center">
              <p>浙江省HRE--A256-01项目完工111111111</p>
            </li>
          </ul>
        </div>
        <!--右上信息-->
        <div class="right-top">
          <ul>
            <li class="font-small flex-column flex-center">
              <p>浙江省HRE--A256-01项目完工111111111</p>
            </li>
            <li class="font-small flex-column flex-center">
              <p>浙江省HRE--A256-01项目完工111111111</p>
            </li>
            <li class="font-small flex-column flex-center">
              <p>浙江省HRE--A256-01项目完工111111111</p>
            </li>
            <li class="font-small flex-column flex-center">
              <p>浙江省HRE--A256-01项目完工111111111</p>
            </li>
            <li class="font-small flex-column flex-center">
              <p>浙江省HRE--A256-01项目完工111111111</p>
            </li>
            <li class="font-small flex-column flex-center">
              <p>浙江省HRE--A256-01项目完工111111111</p>
            </li>
            <li class="font-small flex-column flex-center">
              <p>浙江省HRE--A256-01项目完工111111111</p>
            </li>
          </ul>
        </div>
        <!--左下信息-->
        <div class="left-bottom">
          <ul>
            <li class="font-small flex-column flex-center">
              <p>浙江省HRE--A256-01项目完工111111111</p>
            </li>
            <li class="font-small flex-column flex-center">
              <p>浙江省HRE--A256-01项目完工111111111</p>
            </li>
            <li class="font-small flex-column flex-center">
              <p>浙江省HRE--A256-01项目完工111111111</p>
            </li>
            <li class="font-small flex-column flex-center">
              <p>浙江省HRE--A256-01项目完工111111111</p>
            </li>
            <li class="font-small flex-column flex-center">
              <p>浙江省HRE--A256-01项目完工111111111</p>
            </li>
            <li class="font-small flex-column flex-center">
              <p>浙江省HRE--A256-01项目完工111111111</p>
            </li>
            <li class="font-small flex-column flex-center">
              <p>浙江省HRE--A256-01项目完工111111111</p>
            </li>
          </ul>
        </div>
        <!--右下信息-->
        <div class="right-bottom">
          <ul>
            <li class="font-small flex-column flex-center">
              <p>浙江省HRE--A256-01项目完工111111111</p>
            </li>
            <li class="font-small flex-column flex-center">
              <p>浙江省HRE--A256-01项目完工111111111</p>
            </li>
            <li class="font-small flex-column flex-center">
              <p>浙江省HRE--A256-01项目完工111111111</p>
            </li>
            <li class="font-small flex-column flex-center">
              <p>浙江省HRE--A256-01项目完工111111111</p>
            </li>
            <li class="font-small flex-column flex-center">
              <p>浙江省HRE--A256-01项目完工111111111</p>
            </li>
            <li class="font-small flex-column flex-center">
              <p>浙江省HRE--A256-01项目完工111111111</p>
            </li>
            <li class="font-small flex-column flex-center">
              <p>浙江省HRE--A256-01项目完工111111111</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="bottom-info"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      myData: [
        {
          name: "北京",
          value: [
            {
              type: "回收量",
              num: "11"
            },
            {
              type: "出货量",
              num: "21"
            }
          ]
        }
      ],
      provinces: [
        "shanghai",
        "hebei",
        "shanxi",
        "neimenggu",
        "liaoning",
        "jilin",
        "heilongjiang",
        "jiangsu",
        "zhejiang",
        "anhui",
        "fujian",
        "jiangxi",
        "shandong",
        "henan",
        "hubei",
        "hunan",
        "guangdong",
        "guangxi",
        "hainan",
        "sichuan",
        "guizhou",
        "yunnan",
        "xizang",
        "shanxi1",
        "gansu",
        "qinghai",
        "ningxia",
        "xinjiang",
        "beijing",
        "tianjin",
        "chongqing",
        "xianggang",
        "aomen",
        "taiwan"
      ],
      provincesText: [
        "上海",
        "河北",
        "山西",
        "内蒙古",
        "辽宁",
        "吉林",
        "黑龙江",
        "江苏",
        "浙江",
        "安徽",
        "福建",
        "江西",
        "山东",
        "河南",
        "湖北",
        "湖南",
        "广东",
        "广西",
        "海南",
        "四川",
        "贵州",
        "云南",
        "西藏",
        "陕西",
        "甘肃",
        "青海",
        "宁夏",
        "新疆",
        "北京",
        "天津",
        "重庆",
        "香港",
        "澳门",
        "台湾"
      ],
      selected: "china",
      name: "全国",
      prevName: "",
      tempName: ""
    };
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    title() {
      switch (this.name) {
        case "全国":
          return "中国部署情况";
        case "省级":
          return this.selected + "部署情况";
        case "市级":
          return this.selected + "部署情况";
      }
    }
  },
  methods: {
    getMap() {
      var myMap = this.$echarts.init(document.getElementById("myMap"));
      myMap.setOption({
        backgroundColor: "rgba(0,0,0,0)",
        title: {},
        tooltip: {},
        series: {
          map: this.selected,
          name: "数据",
          type: "map",
          roam: false,
          itemStyle: {
            normal: {
              areaColor: "#7DB5EC",
              borderColor: "#fff"
            },
            emphasis: {
              label: {
                color: "#666",
                show: true
              },
              areaColor: "#A4ECBA"
            }
          },
          data: this.myData,
          center: ["50%", "50%"]
        }
      });
      myMap.on("click", ev => {
        // 如果点击的是一个省，那就切换到这个省的地图
        if (this.isProvince(ev.name)) {
          this.selected = ev.name;
          this.name = "省级";
          this.prevName = "全国";
          this.tempName = this.selected;
          // 从外部加载这个省的地图文件
          this.loadScriptMap(ev.name, this.getMap);
        } else {
          this.prevName = this.tempName;
          this.selected = ev.name;
          // 否则切换中国地图，隐藏地图，显示省级信息框，改标题
          // this.selected = "china";
          // this.getMap();
          this.name = "市级";
        }
      });
      setTimeout(function() {
        window.onresize = () => {
          myMap.resize();
        };
      }, 200);
    },
    // 判断当前要加载的地图是不是省？
    isProvince(name) {
      return this.provincesText.some(province => {
        return province === name;
      });
    },
    // 定义方法加载某个省的地图文件
    loadScriptMap(name, callback) {
      // 获取这个省的拼音名字 name = '四川' => pinyinName = 'sichuan'
      let pinyinName = this.provinces[this.provincesText.indexOf(name)];
      console.log(pinyinName);
      // 引入这个对应的地图JS，如果是在项目中要打包，请将这些文件提取出来，放在静态资源中
      // build的时候这些文件不会被打包，无可加载资源地图是不会显示的！！！！
      // eslint-disable-next-line no-unused-vars
      let currentMap = require(`echarts/map/js/province/${pinyinName}`);
      callback();
    },
    // 返回按钮
    goBack() {
      switch (this.name) {
        // 由省级返回全国
        // 重新加载地图
        case "省级":
          this.name = "全国";
          this.selected = "china";
          this.getMap();
          break;
        //  由市级返回省级
        //  只需要隐藏市级信息，显示地图
        case "市级":
          this.name = "省级";
          this.prevName = "全国";
          break;
      }
    },
    scroll(dom) {
      let timer = null;
      // hover 清空定时器
      dom
        .hover(
          () => {
            clearInterval(timer);
          },
          () => {
            // 离开启动定时器
            timer = setInterval(() => {
              this.scrollList(dom);
            }, 1000);
          }
        )
        .trigger("mouseleave");
    },
    //  滚动动画
    scrollList(obj) {
      let scrollHeight = this.$(".left-top ul li:first").height();
      obj.stop().animate({ marginTop: -scrollHeight }, 600, () => {
        obj
          .css({ marginTop: 0 })
          .find(".left-top ul li:first")
          .appendTo(obj);
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.getMap();
    });
    // 超过6行滚动
    let count1 = this.$(".left-top ul li").length;
    if (count1 > 6) {
      let dom1 = this.$(".left-top ul");
      this.scroll(dom1);
    }
    let count2 = this.$(".right-top ul li").length;
    if (count2 > 6) {
      let dom2 = this.$(".right-top ul");
      this.scroll(dom2);
    }
    let count3 = this.$(".left-bottom ul li").length;
    if (count3 > 6) {
      let dom3 = this.$(".left-bottom ul");
      this.scroll(dom3);
    }
    let count4 = this.$(".right-bottom ul li").length;
    if (count4 > 6) {
      let dom4 = this.$(".right-bottom ul");
      this.scroll(dom4);
    }
  }
};
</script>
<style scoped>
.home {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-image: url("../assets/img/bg.png");
  min-height: 100%;
  min-width: 1400px;
  overflow: hidden;
}
.header {
  width: 90%;
  margin: 0 5%;
  max-width: 1920px;
  background: url("../assets/img/header.png") center no-repeat;
  background-size: auto 100%;
}
.header h1 {
  padding-bottom: 10px;
  text-align: center;
  font-size: 24px;
  color: #6ff7f3;
  padding-top: 20px;
  display: block;
}
.cube {
  padding-bottom: 0.4%;
  margin-top: 5px;
  width: 100%;
  background: url("../assets/img/cube.png") center no-repeat;
  background-size: auto 100%;
}
.title-top {
  float: left;
  margin-left: 100px;
  color: #46a6b5;
  /*width: 200px;*/
}
.title-top p {
  padding: 10px 20px;
  background: url("../assets/img/title.png") center no-repeat;
  background-size: 100% 100%;
  display: inline-block;
}
.title-top .button {
  color: #fff;
  display: inline-block;
  cursor: pointer;
  margin-left: 5px;
}
.company {
  float: right;
  /*width: 200px;*/
  margin-right: 100px;
  height: 50px;
  line-height: 50px;
}
.company img {
  display: inline-block;
  vertical-align: middle;
}
.company .name {
  color: #fff;
  display: inline-block;
  margin-left: 5px;
}
.center {
  /*height: 80%;*/
  position: relative;
  z-index: 999;
  height: 0;
  padding-bottom: 41.7%;
  /*box-sizing: content-box;*/
}
.bottom-info {
  /*height: 150px;*/
  position: relative;
}
.my-map {
  width: 100%;
  height: 100%;
  position: absolute;
}
.city-info {
  width: 50%;
  margin-left: 25%;
  margin-top: 2%;
  height: 100%;
  position: absolute;
  background: url("../assets/img/project_list.png") center no-repeat;
  background-size: contain;
}
.city-info-box {
  margin-top: 7%;
  margin-left: 5%;
  width: 90%;
  height: 85%;
}
.city-info-item {
  background: url("../assets/img/project_list_shadow.png") center no-repeat;
  background-size: 100% 100%;
  margin-top: 2px;
}
.city-info-item .title {
  position: absolute;
  left: 7%;
  width: 20px;
  text-align: center;
  color: #46a6b5;
  letter-spacing: 2px;
  word-wrap: break-word;
}
.city-info-item ul {
  width: 90%;
  margin-left: 3%;
}
.city-info-item li {
  margin-top: 5px;
  border: #46a6b5 1px solid;
  padding: 5px 0;
  color: #fff;
}
.city-info-item li p {
  text-align: left;
}
.city-info-item li i {
  height: 100%;
  float: left;
  margin: 0.3% 10px 0 8px;
  font-size: inherit;
}
.svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 1400px;
  display: flex;
  align-items: center;
  z-index: -1;
}
.left-box {
  height: 100%;
  position: absolute;
  left: 10%;
  top: 5%;
}
.right-box {
  height: 100%;
  position: absolute;
  right: 9%;
  top: 5%;
}
.top {
  margin-bottom: 2%;
}
.bottom {
  margin-top: 2%;
}
.top,
.bottom {
  width: 160px;
  background: url("../assets/img/blue_border.png") center no-repeat;
  background-size: contain;
}
.left-box .middle {
  position: absolute;
  top: 25%;
  left: -40%;
  width: 160px;
  background: url("../assets/img/green_border.png") center no-repeat;
  background-size: contain;
}
.right-box .middle {
  position: absolute;
  top: 25%;
  right: -40%;
  width: 160px;
  background: url("../assets/img/green_border.png") center no-repeat;
  background-size: contain;
}
.left-box .title,
.right-box .title,
.unit {
  color: #fff;
}
.value {
  color: #f59b23;
  padding: 5% 0;
  font-weight: bold;
}
.unit {
  padding-bottom: 15%;
}
.left-box .title,
.right-box .title {
  padding-top: 15%;
}
p {
  text-align: center;
}
.left-top {
  width: 13%;
  position: absolute;
  top: 10%;
  left: 6%;
  overflow: hidden;
}
.left-bottom {
  width: 13%;
  position: absolute;
  /*top: -25%;*/
  left: 6%;
  overflow: hidden;
}
.right-bottom {
  width: 13%;
  position: absolute;
  /*top: -25%;*/
  right: 6%;
  overflow: hidden;
}
.right-top {
  width: 13%;
  position: absolute;
  top: 10%;
  right: 6%;
  overflow: hidden;
}
.left-top ul,
.left-bottom ul,
.right-top ul,
.right-bottom ul {
  height: 100%;
}
.left-top ul li,
.left-bottom ul li,
.right-bottom ul li,
.right-top ul li {
  color: #46a6b5;
  height: 16.7%;
}
.left-top ul li p,
.left-bottom ul li p,
.right-bottom ul li p,
.right-top ul li p {
  width: 100%;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
@media screen and (max-width: 1300px) {
  .city-info-item .title {
    width: 15px;
  }
  .left-top ul li,
  .left-bottom ul li,
  .right-bottom ul li,
  .right-top ul li {
    height: 16.7px;
  }
  .left-top,
  .left-bottom,
  .right-bottom,
  .right-top {
    max-height: 100px;
  }
  .left-bottom,
  .right-bottom {
    top: 94%;
  }
  .bottom-info {
    height: 100px;
  }
}
@media screen and (min-width: 1300px) {
  .city-info-item .title {
    width: 20px;
  }
  .left-top ul li,
  .left-bottom ul li,
  .right-bottom ul li,
  .right-top ul li {
    height: 18.3px;
  }
  .left-top,
  .left-bottom,
  .right-bottom,
  .right-top {
    max-height: 110px;
  }
  .left-bottom,
  .right-bottom{
    top: 93.5%;
  }
  .bottom-info {
    height: 110px;
  }
}
@media screen and (min-width: 1500px) {
  .city-info-item .title {
    width: 24px;
  }
  .left-top ul li,
  .left-bottom ul li,
  .right-bottom ul li,
  .right-top ul li {
    height: 20px;
  }
  .left-top,
  .left-bottom,
  .right-bottom,
  .right-top {
    max-height: 120px;
  }
  .left-bottom,
  .right-bottom{
    top: 93.5%;
  }
  .bottom-info {
    height: 120px;
  }
}
</style>
