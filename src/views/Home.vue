<template>
  <div class="home flex-column">
    <header class="header">
      <h1>云数据管理平台</h1>
    </header>
    <div class="cube"></div>
    <div>
      <div class="title-top flex-row flex-center">
        <p class="font-large">
          {{ title }}
        </p>
        <h3 class="button font-larger" @click="goBack" v-show="name !== '全国'">
          {{ prevName }}
        </h3>
      </div>
      <div class="company">
        <img src="../assets/img/logo.png" alt="公司图标" />
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
                  <li @click="goResult()">
                    <p class="font-larger flex-row" style="align-items: center">
                      <i class="iconfont icon-dianxiang"></i>
                      杭州塔里科技公司 一期储能项目
                    </p>
                  </li>
                  <li @click="goResult()">
                    <p class="font-larger flex-row" style="align-items: center">
                      <i class="iconfont icon-dianxiang"></i>
                      杭州塔里科技公司 一期储能项目
                    </p>
                  </li>
                  <li @click="goResult()">
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
                  <li @click="goResult()">
                    <p class="font-larger flex-row" style="align-items: center">
                      <i class="iconfont icon-dianxiang"></i>
                      杭州塔里科技公司 一期储能项目
                    </p>
                  </li>
                  <li @click="goResult()">
                    <p class="font-larger flex-row" style="align-items: center">
                      <i class="iconfont icon-dianxiang"></i>
                      杭州塔里科技公司 一期储能项目
                    </p>
                  </li>
                  <li @click="goResult()">
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
                  <li @click="goResult()">
                    <p class="font-larger flex-row" style="align-items: center">
                      <i class="iconfont icon-dianxiang"></i>
                      杭州塔里科技公司 一期储能项目
                    </p>
                  </li>
                  <li @click="goResult()">
                    <p class="font-larger flex-row" style="align-items: center">
                      <i class="iconfont icon-dianxiang"></i>
                      杭州塔里科技公司 一期储能项目
                    </p>
                  </li>
                  <li @click="goResult()">
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
        <div class="svg">
          <BgSvg
            :title1="rEAL_TIME_BROADCAST.totalname"
            :title2="pROJECT_CASE.totalname"
            :title3="pROJECT_OUTCOME.totalname"
            :title4="iNDUSTRY_DYNAMICS.totalname"
          />
        </div>
        <!--左方框-->
        <div class="left-box flex-column flex-center">
          <div style="position: relative">
            <div class="top" v-if="this.nUMBER_OF_INSTALLED">
              <p class="title font-small">
                {{ this.nUMBER_OF_INSTALLED.name }}
              </p>
              <p class="value font-large">
                {{ this.nUMBER_OF_INSTALLED.value }}
              </p>
              <p class="unit font-small">
                {{ this.nUMBER_OF_INSTALLED.unit }}
              </p>
            </div>
            <div class="middle">
              <p class="title font-small">
                {{ this.aCCOMPLISHMENT.name }}
              </p>
              <p class="value font-large">
                {{ this.aCCOMPLISHMENT.value }}
              </p>
              <p class="unit font-small">
                {{ this.aCCOMPLISHMENT.unit }}
              </p>
            </div>
            <div class="bottom">
              <p class="title font-small">
                {{ this.tOTAL_CAPACITY.name }}
              </p>
              <p class="value font-large">
                {{ this.tOTAL_CAPACITY.value }}
              </p>
              <p class="unit font-small">
                {{ this.tOTAL_CAPACITY.unit }}
              </p>
            </div>
          </div>
        </div>
        <!--右方框-->
        <div class="right-box flex-column flex-center">
          <div style="position: relative">
            <div class="top">
              <p class="title font-small">
                {{ this.dEVICE_BESS.name }}
              </p>
              <p class="value font-large">
                {{ this.dEVICE_BESS.value }}
              </p>
              <p class="unit font-small">
                {{ this.dEVICE_BESS.unit }}
              </p>
            </div>
            <div class="middle">
              <p class="title font-small">
                {{ this.dEVICE_UPS.name }}
              </p>
              <p class="value font-large">
                {{ this.dEVICE_UPS.value }}
              </p>
              <p class="unit font-small">
                {{ this.dEVICE_UPS.unit }}
              </p>
            </div>
            <div class="bottom">
              <p class="title font-small">
                {{ this.dEVICE_TPS.name }}
              </p>
              <p class="value font-large">
                {{ this.dEVICE_TPS.value }}
              </p>
              <p class="unit font-small">
                {{ this.dEVICE_TPS.unit }}
              </p>
            </div>
          </div>
        </div>
        <!--左上信息-->
        <div class="left-top" v-if="rEAL_TIME_BROADCAST">
          <ScrollNews :arr="rEAL_TIME_BROADCAST.valueUnits"></ScrollNews>
        </div>
        <!--右上信息-->
        <div class="right-top" v-if="pROJECT_CASE">
          <ScrollNews :arr="pROJECT_CASE.valueUnits"></ScrollNews>
        </div>
        <!--左下信息-->
        <div class="left-bottom" v-if="pROJECT_OUTCOME">
          <ScrollNews :arr="pROJECT_OUTCOME.valueUnits"></ScrollNews>
        </div>
        <!--右下信息-->
        <div class="right-bottom" v-if="iNDUSTRY_DYNAMICS">
          <ScrollNews :arr="iNDUSTRY_DYNAMICS.valueUnits"></ScrollNews>
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
      myData: "",
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
      tempName: "",
      nUMBER_OF_INSTALLED: "",
      aCCOMPLISHMENT: "",
      tOTAL_CAPACITY: "",
      dEVICE_BESS: "",
      dEVICE_UPS: "",
      dEVICE_TPS: "",
      rEAL_TIME_BROADCAST: "",
      pROJECT_CASE: "",
      pROJECT_OUTCOME: "",
      iNDUSTRY_DYNAMICS: "",
      arr: [
        {
          title: "装机数量",
          unit: "台"
        },
        {
          title: "装机数量",
          unit: "台"
        },
        {
          title: "装机数量",
          unit: "台"
        }
      ]
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
      this.loadMap();
      myMap.on("click", ev => {
        // 如果点击的是一个省，那就切换到这个省的地图
        if (this.isProvince(ev.name)) {
          this.selected = ev.name;
          this.name = "省级";
          this.prevName = "全国";
          this.tempName = this.selected;
          // 从外部加载这个省的地图文件
          this.loadScriptMap(ev.name, this.loadMap);
          this.getData(this.selected);
        } else {
          this.prevName = this.tempName;
          this.selected = ev.name;
          // 否则切换中国地图，隐藏地图，显示省级信息框，改标题
          // this.selected = "china";
          // this.getMap();
          this.getData(this.selected);
          this.name = "市级";
        }
      });
      setTimeout(function() {
        window.onresize = () => {
          myMap.resize();
        };
      }, 200);
    },
    loadMap() {
      let myMap = this.$echarts.init(document.getElementById("myMap"));
      myMap.setOption({
        backgroundColor: "rgba(0,0,0,0)",
        title: {},
        tooltip: {
          trigger: "item",
          formatter: params => {
            if (params.name !== "") {
              var res = params.name + "<br/>";
              if (params.data) {
                var arrays = params.data.value;
                for (var i = 0; i < arrays.length; i++) {
                  res +=
                    arrays[i].name +
                    " : " +
                    arrays[i].value +
                    arrays[i].unit +
                    "<br/>";
                }
                return res;
              } else {
                for (var j = 0; j < this.arr.length; j++) {
                  res += this.arr[j].name + " : 0" + this.arr[j].unit + "<br/>";
                }
                return res;
              }
            }
          },
          backgroundColor: "rgba(255,255,255,0.8)",
          textStyle: {
            color: "black"
          },
          borderColor: "#4594EC",
          borderWidth: 1
        },
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
          this.loadMap();
          this.getData(this.selected);
          break;
        //  由市级返回省级
        //  只需要隐藏市级信息，显示地图
        case "市级":
          this.name = "省级";
          this.prevName = "全国";
          this.selected = this.tempName;
          this.getData(this.selected);
          break;
      }
    },
    goResult() {
      window.location.href = "http://sf28090049.wicp.vip:8082/statement/";
    },
    getData(selected) {
      var num;
      switch (this.name) {
        case "全国":
          num = 2;
          break;
        case "省级":
          num = 3;
          break;
        case "市级":
          num = 4;
          break;
      }
      let url = `/api/Exhibition/GetMessage?SystemToken=0&Page=${num}&Name=${selected}`;
      this.$axios
        .get(url)
        .then(res => {
          let data = res.data.data;
          this.nUMBER_OF_INSTALLED = data.nUMBER_OF_INSTALLED;
          this.aCCOMPLISHMENT = data.aCCOMPLISHMENT;
          this.tOTAL_CAPACITY = data.tOTAL_CAPACITY;
          this.dEVICE_BESS = data.dEVICE_BESS;
          this.dEVICE_UPS = data.dEVICE_UPS;
          this.dEVICE_TPS = data.dEVICE_TPS;
          this.rEAL_TIME_BROADCAST = data.rEAL_TIME_BROADCAST;
          this.pROJECT_CASE = data.pROJECT_CASE;
          this.pROJECT_OUTCOME = data.pROJECT_OUTCOME;
          this.iNDUSTRY_DYNAMICS = data.iNDUSTRY_DYNAMICS;
        })
        .catch(err => {
          console.error(err);
        });
    },
    getMapData() {
      let url = `/api/Exhibition/GetStatePageInfo?SystemToken=0&StateCode=86`;
      this.$axios
        .get(url)
        .then(res => {
          let data = res.data.data;
          this.arr = data.dEFAULT_DATA.valueUnits;
          this.myData = data.iNSTALL_THE_DISTRIBUTION.valueUnits;
          this.getMap();
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  mounted() {
    this.getData("中国");
    this.getMapData();
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
  background: url("../assets/img/header.png") center no-repeat;
  background-size: auto 100%;
  margin-top: 10px;
  height: 45px;
}
.header h1 {
  padding-bottom: 5px;
  text-align: center;
  font-size: 28px;
  color: #6ff7f3;
  display: block;
  letter-spacing: 1px;
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
  margin-left: 10%;
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
  margin-right: 10%;
  height: 50px;
  line-height: 50px;
}
.company img {
  display: inline-block;
  vertical-align: top;
  height: 100%;
}
.company .name {
  color: #fff;
  display: inline-block;
  margin-left: 5px;
}
.center {
  position: relative;
  z-index: 999;
  height: 0;
  padding-bottom: 41.7%;
}
.bottom-info {
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
  top: 5%;
}
.right-box {
  height: 100%;
  position: absolute;
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
  background: url("../assets/img/blue_border.png") center no-repeat;
  background-size: contain;
}
.left-box .middle {
  position: absolute;
  top: 25%;
  background: url("../assets/img/green_border.png") center no-repeat;
  background-size: contain;
}
.right-box .middle {
  position: absolute;
  top: 25%;
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
  padding-bottom: 10%;
}
.left-box .title,
.right-box .title {
  padding-top: 12%;
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
  left: 6%;
  overflow: hidden;
}
.right-bottom {
  width: 13%;
  position: absolute;
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
@media screen and (max-width: 1300px) {
  .city-info-item .title {
    width: 15px;
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
  .top,
  .bottom,
  .middle {
    width: 220px;
    height: 121px;
  }
  .left-box {
    left: 6%;
  }
  .right-box {
    right: 5%;
  }
  .left-box .middle {
    left: -29%;
  }
  .right-box .middle {
    right: -29%;
  }
}
@media screen and (min-width: 1300px) {
  .city-info-item .title {
    width: 20px;
  }
  .left-top,
  .left-bottom,
  .right-bottom,
  .right-top {
    max-height: 110px;
  }
  .left-bottom,
  .right-bottom {
    top: 93.5%;
  }
  .bottom-info {
    height: 110px;
  }
  .top,
  .bottom,
  .middle {
    width: 220px;
    height: 126px;
  }
  .left-box {
    left: 6%;
  }
  .right-box {
    right: 5%;
  }
  .left-box .middle {
    left: -29%;
  }
  .right-box .middle {
    right: -29%;
  }
}
@media screen and (min-width: 1500px) {
  .city-info-item .title {
    width: 24px;
  }
  .left-top,
  .left-bottom,
  .right-bottom,
  .right-top {
    max-height: 120px;
  }
  .left-bottom,
  .right-bottom {
    top: 93.5%;
  }
  .bottom-info {
    height: 120px;
  }
  .top,
  .bottom,
  .middle {
    width: 280px;
    height: 152px;
  }
  .left-box {
    left: 6%;
  }
  .right-box {
    right: 5%;
  }
  .left-box .middle {
    left: -28%;
  }
  .right-box .middle {
    right: -28%;
  }
}
</style>
