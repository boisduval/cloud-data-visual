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
        <h3 class="button" @click="goBack" v-show="name !== '全国'">
          {{ prevName }}
        </h3>
      </div>
      <div class="company">
        <img src="../assets/img/logo.png" alt="公司图标" height="100%" />
        <h3 class="name">
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
        <div class="city-info" v-show="name === '市级'"></div>
        <!--背景-->
        <div class="svg" id="svg">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="100%"
            viewBox="0 0 1920 800"
            enable-background="new 0 0 1920 800"
            xml:space="preserve"
          >
            <g id="左下信息框">
              <g>
                <line
                  opacity="0.5"
                  fill="none"
                  stroke="#46A6B5"
                  stroke-miterlimit="10"
                  x1="1346.879"
                  y1="232.761"
                  x2="1508.51"
                  y2="71.128"
                />
                <linearGradient
                  id="SVGID_1_"
                  gradientUnits="userSpaceOnUse"
                  x1="1381.9189"
                  y1="188.0815"
                  x2="1432.9091"
                  y2="137.0914"
                >
                  <stop
                    offset="0"
                    style="stop-color:#46A6B5;stop-opacity:0.2"
                  />
                  <stop offset="0.7995" style="stop-color:#46A6B5" />
                  <stop
                    offset="1"
                    style="stop-color:#46A6B5;stop-opacity:0.2"
                  />
                </linearGradient>
                <polygon
                  opacity="0.1"
                  fill="url(#SVGID_1_)"
                  points="1445.154,134.744 1380.494,199.406 1377.217,182.882 1428.633,131.468 		"
                />
                <polygon
                  opacity="0.5"
                  fill="#46A6B5"
                  points="1439.344,139.588 1385.416,193.517 1392.725,179.136 1424.963,146.897 		"
                />
              </g>
              <line
                fill="none"
                stroke="#46A6B5"
                stroke-miterlimit="10"
                x1="1536.719"
                y1="71.781"
                x2="1540.172"
                y2="68.328"
              />
              <g>
                <line
                  fill="#46A6B5"
                  stroke="#46A6B5"
                  stroke-miterlimit="10"
                  x1="1509"
                  y1="71.5"
                  x2="1537"
                  y2="71.5"
                />
                <line
                  fill="#46A6B5"
                  stroke="#46A6B5"
                  stroke-miterlimit="10"
                  x1="1540"
                  y1="68.5"
                  x2="1601"
                  y2="68.5"
                />

                <linearGradient
                  id="SVGID_2_"
                  gradientUnits="userSpaceOnUse"
                  x1="1738"
                  y1="69.5"
                  x2="1880"
                  y2="69.5"
                  gradientTransform="matrix(-1 0 0 1 3560 0)"
                >
                  <stop offset="0" style="stop-color:#CCE0F4;stop-opacity:0" />
                  <stop
                    offset="0.0779"
                    style="stop-color:#C3DCF0;stop-opacity:0.0686"
                  />
                  <stop
                    offset="0.2073"
                    style="stop-color:#A9D1E4;stop-opacity:0.1827"
                  />
                  <stop
                    offset="0.3724"
                    style="stop-color:#80BFD0;stop-opacity:0.3282"
                  />
                  <stop
                    offset="0.565"
                    style="stop-color:#47A6B5;stop-opacity:0.4979"
                  />
                  <stop
                    offset="0.5674"
                    style="stop-color:#46A6B5;stop-opacity:0.5"
                  />
                  <stop offset="0.8652" style="stop-color:#46A6B5" />
                  <stop offset="0.9944" style="stop-color:#46A6B5" />
                </linearGradient>
                <rect
                  x="1680"
                  y="69"
                  fill="url(#SVGID_2_)"
                  width="142"
                  height="1"
                />
                <text
                  transform="matrix(1 0 0 1 1604.75 70.0547)"
                  fill="#46A6B5"
                  font-family="'MicrosoftYaHeiLight'"
                  font-size="18"
                >
                  信息标题
                </text>
              </g>
              <polygon
                opacity="0.5"
                fill="#46A6B5"
                points="1514.924,138 1455.25,138 1475.141,118 1534.814,118 	"
              />
              <polygon
                opacity="0.3"
                fill="#46A6B5"
                points="1485.75,162 1433.25,162 1450.75,144 1503.25,144 	"
              />
              <polygon
                opacity="0.2"
                fill="#46A6B5"
                points="1457.777,183 1412.25,183 1427.426,167 1472.953,167 	"
              />
              <polygon
                opacity="0.1"
                fill="#46A6B5"
                points="1431.85,202 1392.25,202 1405.451,189 1445.051,189 	"
              />
              <polygon
                opacity="0.05"
                fill="#46A6B5"
                points="1404.148,221 1373.25,221 1383.549,211 1414.445,211 	"
              />
              <line
                opacity="0.2"
                fill="none"
                stroke="#46A6B5"
                stroke-miterlimit="10"
                x1="1553"
                y1="118"
                x2="1414.445"
                y2="232.761"
              />
              <g>
                <line
                  opacity="0.5"
                  fill="none"
                  stroke="#46A6B5"
                  stroke-miterlimit="10"
                  x1="574.5"
                  y1="232.761"
                  x2="412.868"
                  y2="71.128"
                />

                <linearGradient
                  id="SVGID_3_"
                  gradientUnits="userSpaceOnUse"
                  x1="2687.9189"
                  y1="188.0815"
                  x2="2738.9094"
                  y2="137.091"
                  gradientTransform="matrix(-1 0 0 1 3227.3789 0)"
                >
                  <stop
                    offset="0"
                    style="stop-color:#46A6B5;stop-opacity:0.2"
                  />
                  <stop offset="0.7995" style="stop-color:#46A6B5" />
                  <stop
                    offset="1"
                    style="stop-color:#46A6B5;stop-opacity:0.2"
                  />
                </linearGradient>
                <polygon
                  opacity="0.1"
                  fill="url(#SVGID_3_)"
                  points="476.224,134.744 540.885,199.406 544.161,182.882 492.746,131.468 		"
                />
                <polygon
                  opacity="0.5"
                  fill="#46A6B5"
                  points="482.035,139.588 535.963,193.517 528.654,179.136 496.415,146.897 		"
                />
              </g>
              <line
                fill="none"
                stroke="#46A6B5"
                stroke-miterlimit="10"
                x1="384.66"
                y1="71.781"
                x2="381.207"
                y2="68.328"
              />
              <g>
                <line
                  fill="#46A6B5"
                  stroke="#46A6B5"
                  stroke-miterlimit="10"
                  x1="412"
                  y1="71.5"
                  x2="384"
                  y2="71.5"
                />
                <line
                  fill="#46A6B5"
                  stroke="#46A6B5"
                  stroke-miterlimit="10"
                  x1="381"
                  y1="68.5"
                  x2="320"
                  y2="68.5"
                />
                <linearGradient
                  id="SVGID_4_"
                  gradientUnits="userSpaceOnUse"
                  x1="98"
                  y1="69.5"
                  x2="240"
                  y2="69.5"
                >
                  <stop offset="0" style="stop-color:#CCE0F4;stop-opacity:0" />
                  <stop
                    offset="0.0779"
                    style="stop-color:#C3DCF0;stop-opacity:0.0686"
                  />
                  <stop
                    offset="0.2073"
                    style="stop-color:#A9D1E4;stop-opacity:0.1827"
                  />
                  <stop
                    offset="0.3724"
                    style="stop-color:#80BFD0;stop-opacity:0.3282"
                  />
                  <stop
                    offset="0.565"
                    style="stop-color:#47A6B5;stop-opacity:0.4979"
                  />
                  <stop
                    offset="0.5674"
                    style="stop-color:#46A6B5;stop-opacity:0.5"
                  />
                  <stop offset="0.8652" style="stop-color:#46A6B5" />
                  <stop offset="0.9944" style="stop-color:#46A6B5" />
                </linearGradient>
                <rect
                  x="98"
                  y="69"
                  fill="url(#SVGID_4_)"
                  width="142"
                  height="1"
                />
                <text
                  transform="matrix(1 0 0 1 245.1309 72.7813)"
                  fill="#46A6B5"
                  font-family="'MicrosoftYaHeiLight'"
                  font-size="18"
                >
                  实时播报
                </text>
              </g>
              <polygon
                opacity="0.5"
                fill="#46A6B5"
                points="406.455,138 466.129,138 446.237,118 386.563,118 	"
              />
              <polygon
                opacity="0.3"
                fill="#46A6B5"
                points="435.629,162 488.129,162 470.629,144 418.129,144 	"
              />
              <polygon
                opacity="0.2"
                fill="#46A6B5"
                points="463.601,183 509.129,183 493.953,167 448.425,167 	"
              />
              <polygon
                opacity="0.1"
                fill="#46A6B5"
                points="489.528,202 529.129,202 515.928,189 476.327,189 	"
              />
              <polygon
                opacity="0.05"
                fill="#46A6B5"
                points="517.23,221 548.129,221 537.83,211 506.933,211 	"
              />
              <line
                opacity="0.2"
                fill="none"
                stroke="#46A6B5"
                stroke-miterlimit="10"
                x1="368.379"
                y1="118"
                x2="506.933"
                y2="232.761"
              />
              <g>
                <line
                  opacity="0.5"
                  fill="none"
                  stroke="#46A6B5"
                  stroke-miterlimit="10"
                  x1="1346.879"
                  y1="568.329"
                  x2="1508.51"
                  y2="729.961"
                />

                <linearGradient
                  id="SVGID_5_"
                  gradientUnits="userSpaceOnUse"
                  x1="1381.9189"
                  y1="366.0815"
                  x2="1432.9093"
                  y2="315.0912"
                  gradientTransform="matrix(1 0 0 -1 0 979.0898)"
                >
                  <stop
                    offset="0"
                    style="stop-color:#46A6B5;stop-opacity:0.2"
                  />
                  <stop offset="0.7995" style="stop-color:#46A6B5" />
                  <stop
                    offset="1"
                    style="stop-color:#46A6B5;stop-opacity:0.2"
                  />
                </linearGradient>
                <polygon
                  opacity="0.1"
                  fill="url(#SVGID_5_)"
                  points="1445.154,666.346 1380.494,601.684 1377.217,618.207 1428.633,669.621 		"
                />
                <polygon
                  opacity="0.5"
                  fill="#46A6B5"
                  points="1439.344,661.502 1385.416,607.573 1392.725,621.953 1424.963,654.193 		"
                />
              </g>
              <line
                fill="none"
                stroke="#46A6B5"
                stroke-miterlimit="10"
                x1="1536.719"
                y1="729.309"
                x2="1540.172"
                y2="732.762"
              />
              <g>
                <line
                  fill="#46A6B5"
                  stroke="#46A6B5"
                  stroke-miterlimit="10"
                  x1="1509"
                  y1="729.5"
                  x2="1537"
                  y2="729.5"
                />
                <line
                  fill="#46A6B5"
                  stroke="#46A6B5"
                  stroke-miterlimit="10"
                  x1="1540"
                  y1="732.5"
                  x2="1601"
                  y2="732.5"
                />

                <linearGradient
                  id="SVGID_6_"
                  gradientUnits="userSpaceOnUse"
                  x1="1740"
                  y1="732.5"
                  x2="1882"
                  y2="732.5"
                  gradientTransform="matrix(-1 0 0 1 3562 0)"
                >
                  <stop offset="0" style="stop-color:#CCE0F4;stop-opacity:0" />
                  <stop
                    offset="0.0779"
                    style="stop-color:#C3DCF0;stop-opacity:0.0686"
                  />
                  <stop
                    offset="0.2073"
                    style="stop-color:#A9D1E4;stop-opacity:0.1827"
                  />
                  <stop
                    offset="0.3724"
                    style="stop-color:#80BFD0;stop-opacity:0.3282"
                  />
                  <stop
                    offset="0.565"
                    style="stop-color:#47A6B5;stop-opacity:0.4979"
                  />
                  <stop
                    offset="0.5674"
                    style="stop-color:#46A6B5;stop-opacity:0.5"
                  />
                  <stop offset="0.8652" style="stop-color:#46A6B5" />
                  <stop offset="0.9944" style="stop-color:#46A6B5" />
                </linearGradient>
                <rect
                  x="1680"
                  y="732"
                  fill="url(#SVGID_6_)"
                  width="142"
                  height="1"
                />
                <text
                  transform="matrix(1 0 0 1 1604.75 735.3086)"
                  fill="#46A6B5"
                  font-family="'MicrosoftYaHeiLight'"
                  font-size="18"
                >
                  信息标题
                </text>
              </g>
              <polygon
                opacity="0.1"
                fill="#46A6B5"
                points="1514.924,663 1455.25,663 1475.141,683 1534.814,683 	"
              />
              <polygon
                opacity="0.2"
                fill="#46A6B5"
                points="1485.75,639 1433.25,639 1450.75,657 1503.25,657 	"
              />
              <polygon
                opacity="0.2"
                fill="#46A6B5"
                points="1457.777,618 1412.25,618 1427.426,634 1472.953,634 	"
              />
              <polygon
                opacity="0.1"
                fill="#46A6B5"
                points="1431.85,599 1392.25,599 1405.451,612 1445.051,612 	"
              />
              <polygon
                opacity="0.05"
                fill="#46A6B5"
                points="1404.148,580 1373.25,580 1383.549,590 1414.445,590 	"
              />
              <line
                opacity="0.2"
                fill="none"
                stroke="#46A6B5"
                stroke-miterlimit="10"
                x1="1553"
                y1="683.09"
                x2="1414.445"
                y2="568.329"
              />
              <g>
                <line
                  opacity="0.5"
                  fill="none"
                  stroke="#46A6B5"
                  stroke-miterlimit="10"
                  x1="588"
                  y1="573.329"
                  x2="426.368"
                  y2="734.961"
                />

                <linearGradient
                  id="SVGID_7_"
                  gradientUnits="userSpaceOnUse"
                  x1="1173.9199"
                  y1="361.082"
                  x2="1224.9106"
                  y2="310.0913"
                  gradientTransform="matrix(-1 0 0 -1 1726.8789 979.0898)"
                >
                  <stop
                    offset="0"
                    style="stop-color:#46A6B5;stop-opacity:0.2"
                  />
                  <stop offset="0.7995" style="stop-color:#46A6B5" />
                  <stop
                    offset="1"
                    style="stop-color:#46A6B5;stop-opacity:0.2"
                  />
                </linearGradient>
                <polygon
                  opacity="0.1"
                  fill="url(#SVGID_7_)"
                  points="489.724,671.346 554.385,606.684 557.661,623.207 506.246,674.621 		"
                />
                <polygon
                  opacity="0.5"
                  fill="#46A6B5"
                  points="495.535,666.502 549.463,612.573 542.154,626.953 509.915,659.193 		"
                />
              </g>
              <line
                fill="none"
                stroke="#46A6B5"
                stroke-miterlimit="10"
                x1="398.16"
                y1="734.309"
                x2="394.707"
                y2="737.762"
              />
              <g>
                <line
                  fill="#46A6B5"
                  stroke="#46A6B5"
                  stroke-miterlimit="10"
                  x1="426"
                  y1="734.5"
                  x2="398"
                  y2="734.5"
                />
                <line
                  fill="#46A6B5"
                  stroke="#46A6B5"
                  stroke-miterlimit="10"
                  x1="395"
                  y1="737.5"
                  x2="334"
                  y2="737.5"
                />

                <linearGradient
                  id="SVGID_8_"
                  gradientUnits="userSpaceOnUse"
                  x1="1948.1211"
                  y1="737.5"
                  x2="2090.1211"
                  y2="737.5"
                  gradientTransform="matrix(1 0 0 1 -1835.1211 0)"
                >
                  <stop offset="0" style="stop-color:#CCE0F4;stop-opacity:0" />
                  <stop
                    offset="0.0779"
                    style="stop-color:#C3DCF0;stop-opacity:0.0686"
                  />
                  <stop
                    offset="0.2073"
                    style="stop-color:#A9D1E4;stop-opacity:0.1827"
                  />
                  <stop
                    offset="0.3724"
                    style="stop-color:#80BFD0;stop-opacity:0.3282"
                  />
                  <stop
                    offset="0.565"
                    style="stop-color:#47A6B5;stop-opacity:0.4979"
                  />
                  <stop
                    offset="0.5674"
                    style="stop-color:#46A6B5;stop-opacity:0.5"
                  />
                  <stop offset="0.8652" style="stop-color:#46A6B5" />
                  <stop offset="0.9944" style="stop-color:#46A6B5" />
                </linearGradient>
                <rect
                  x="113"
                  y="737"
                  fill="url(#SVGID_8_)"
                  width="142"
                  height="1"
                />
                <text
                  transform="matrix(1 0 0 1 259.7949 740.3086)"
                  fill="#46A6B5"
                  font-family="'MicrosoftYaHeiLight'"
                  font-size="18"
                >
                  信息标题
                </text>
              </g>
              <polygon
                opacity="0.1"
                fill="#46A6B5"
                points="419.955,668 479.629,668 459.737,688 400.063,688 	"
              />
              <polygon
                opacity="0.2"
                fill="#46A6B5"
                points="449.129,644 501.629,644 484.129,662 431.629,662 	"
              />
              <polygon
                opacity="0.2"
                fill="#46A6B5"
                points="477.101,623 522.629,623 507.453,639 461.925,639 	"
              />
              <polygon
                opacity="0.1"
                fill="#46A6B5"
                points="503.028,604 542.629,604 529.428,617 489.827,617 	"
              />
              <polygon
                opacity="0.05"
                fill="#46A6B5"
                points="530.73,585 561.629,585 551.33,595 520.433,595 	"
              />
              <line
                opacity="0.2"
                fill="none"
                stroke="#46A6B5"
                stroke-miterlimit="10"
                x1="381.879"
                y1="688.09"
                x2="520.433"
                y2="573.329"
              />
            </g>
            <g id="左半圆">
              <g>
                <path
                  opacity="0.9"
                  fill="#46A6B5"
                  d="M393,453.182c0,3.214-2.605,5.818-5.818,5.818h-0.363c-3.213,0-5.818-2.604-5.818-5.818
			v-33.363c0-3.213,2.605-5.818,5.818-5.818h0.363c3.213,0,5.818,2.605,5.818,5.818V453.182z"
                />
                <g>
                  <circle
                    opacity="0.9"
                    fill="#46A6B5"
                    cx="389.5"
                    cy="393.833"
                    r="3.167"
                  />
                  <circle
                    opacity="0.8"
                    fill="#46A6B5"
                    cx="392.5"
                    cy="369.833"
                    r="3.166"
                  />
                  <circle
                    opacity="0.7"
                    fill="#46A6B5"
                    cx="396.5"
                    cy="345.833"
                    r="3.166"
                  />
                  <circle
                    opacity="0.6"
                    fill="#46A6B5"
                    cx="402.5"
                    cy="322.833"
                    r="3.166"
                  />
                  <circle
                    opacity="0.5"
                    fill="#46A6B5"
                    cx="409.5"
                    cy="299.833"
                    r="3.166"
                  />
                  <circle
                    opacity="0.4"
                    fill="#46A6B5"
                    cx="416.5"
                    cy="279.833"
                    r="3.166"
                  />
                  <circle
                    opacity="0.3"
                    fill="#46A6B5"
                    cx="425.5"
                    cy="257.833"
                    r="3.166"
                  />
                  <circle
                    opacity="0.2"
                    fill="#46A6B5"
                    cx="434.5"
                    cy="240.833"
                    r="3.166"
                  />
                </g>
                <g>
                  <circle
                    opacity="0.9"
                    fill="#46A6B5"
                    cx="388.5"
                    cy="479.833"
                    r="3.167"
                  />
                  <circle
                    opacity="0.8"
                    fill="#46A6B5"
                    cx="391.5"
                    cy="503.833"
                    r="3.166"
                  />
                  <circle
                    opacity="0.7"
                    fill="#46A6B5"
                    cx="395.5"
                    cy="527.833"
                    r="3.166"
                  />
                  <circle
                    opacity="0.6"
                    fill="#46A6B5"
                    cx="401.5"
                    cy="550.833"
                    r="3.166"
                  />
                  <circle
                    opacity="0.5"
                    fill="#46A6B5"
                    cx="408.5"
                    cy="573.833"
                    r="3.166"
                  />
                  <circle
                    opacity="0.4"
                    fill="#46A6B5"
                    cx="415.5"
                    cy="593.833"
                    r="3.166"
                  />
                  <circle
                    opacity="0.3"
                    fill="#46A6B5"
                    cx="424.5"
                    cy="615.833"
                    r="3.166"
                  />
                  <circle
                    opacity="0.2"
                    fill="#46A6B5"
                    cx="433.5"
                    cy="632.833"
                    r="3.166"
                  />
                </g>
              </g>
            </g>
            <g id="右半圆">
              <g>
                <path
                  opacity="0.9"
                  fill="#46A6B5"
                  d="M1559,419.818c0-3.213-2.605-5.818-5.818-5.818h-0.363c-3.213,0-5.818,2.605-5.818,5.818
			v33.363c0,3.213,2.605,5.818,5.818,5.818h0.363c3.213,0,5.818-2.605,5.818-5.818V419.818z"
                />
                <g>
                  <circle
                    opacity="0.9"
                    fill="#46A6B5"
                    cx="1550.166"
                    cy="393.833"
                    r="3.166"
                  />
                  <circle
                    opacity="0.8"
                    fill="#46A6B5"
                    cx="1547.166"
                    cy="369.833"
                    r="3.166"
                  />
                  <circle
                    opacity="0.7"
                    fill="#46A6B5"
                    cx="1543.166"
                    cy="345.833"
                    r="3.166"
                  />
                  <circle
                    opacity="0.6"
                    fill="#46A6B5"
                    cx="1537.166"
                    cy="322.833"
                    r="3.166"
                  />
                  <circle
                    opacity="0.5"
                    fill="#46A6B5"
                    cx="1530.166"
                    cy="299.833"
                    r="3.166"
                  />
                  <circle
                    opacity="0.4"
                    fill="#46A6B5"
                    cx="1523.166"
                    cy="279.833"
                    r="3.166"
                  />
                  <circle
                    opacity="0.3"
                    fill="#46A6B5"
                    cx="1514.166"
                    cy="257.833"
                    r="3.166"
                  />
                  <circle
                    opacity="0.2"
                    fill="#46A6B5"
                    cx="1505.166"
                    cy="240.833"
                    r="3.166"
                  />
                </g>
                <g>
                  <circle
                    opacity="0.9"
                    fill="#46A6B5"
                    cx="1551.166"
                    cy="479.833"
                    r="3.166"
                  />
                  <circle
                    opacity="0.8"
                    fill="#46A6B5"
                    cx="1548.166"
                    cy="503.833"
                    r="3.166"
                  />
                  <circle
                    opacity="0.7"
                    fill="#46A6B5"
                    cx="1544.166"
                    cy="527.833"
                    r="3.166"
                  />
                  <circle
                    opacity="0.6"
                    fill="#46A6B5"
                    cx="1538.166"
                    cy="550.833"
                    r="3.166"
                  />
                  <circle
                    opacity="0.5"
                    fill="#46A6B5"
                    cx="1531.166"
                    cy="573.833"
                    r="3.166"
                  />
                  <circle
                    opacity="0.4"
                    fill="#46A6B5"
                    cx="1524.166"
                    cy="593.833"
                    r="3.166"
                  />
                  <circle
                    opacity="0.3"
                    fill="#46A6B5"
                    cx="1515.166"
                    cy="615.833"
                    r="3.166"
                  />
                  <circle
                    opacity="0.2"
                    fill="#46A6B5"
                    cx="1506.166"
                    cy="632.833"
                    r="3.166"
                  />
                </g>
              </g>
            </g>
          </svg>
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
                color: "#fff",
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
          this.selected = 'china';
          this.getMap()
          break;
        //  由市级返回省级
        //  只需要隐藏市级信息，显示地图
        case "市级":
          this.name = "省级";
          break;
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.getMap();
    });
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
  height: 40px;
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
  height: 100px;
}
.my-map {
  width: 100%;
  height: 100%;
  position: absolute;
}
.city-info {
  width: 100%;
  height: 100%;
  position: absolute;
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
  top: 0;
}
.right-box {
  height: 100%;
  position: absolute;
  right: 9%;
  top: 0;
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
</style>
