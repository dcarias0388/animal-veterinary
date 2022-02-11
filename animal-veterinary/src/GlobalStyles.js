import { createGlobalStyle } from "styled-components";
import bodyBg from "./assets/images/body-bg.gif";
// @import url(reset.css);
// @import url(grid.css);
// @import url(forms.css);
// @import url(http://fonts.googleapis.com/css?family=Open+Sans:400,300,700,400italic);

const GlobalStyles = createGlobalStyle`
body {
	background: url(${bodyBg}) 50% 0;
	font:12px/18px Arial, Helvetica, sans-serif;
	color:#a7a7a7;
	position:relative;
	min-width:970px;
}
html, body {
	height:100%;
}
html {
	min-width:970px;
}

/* Estructura Global---------------------------------------- */
 .main {
	margin:0 auto;
	position:relative;
	width:950px;
}
.main-bg {
	background:no-repeat center 0;
	min-height:100%;
} 

/*----- Alineación & borrado -----*/

.fleft {
	float:left
}
.fright {
	float:right
}
.alignright {
	text-align:right
}
.aligncenter {
	text-align:center
}
.alignmiddle * {
	vertical-align:middle
}
.clear {
	clear:both;
	line-height:0;
	font-size:0;
	overflow:hidden;
	height:0;
	width:100%;
}
.wrapper {
	overflow:hidden;
	position:relative;
}
.extra-wrap {
	overflow:hidden;
	display:block;
}
/*  Header styles */
h1, h2, h3, h4, h5, h6 {
	color:#454545;
	padding:0 0 20px 0;
	font-weight:normal;
	font-family: 'Open Sans', sans-serif;
	text-shadow:1px 1px #fbfbfb;
	letter-spacing:-1px;
}
h1 {
	font-size:33px;
	line-height:39px;
}
h2 {
	font-size:30px;
	line-height:36px;
}
h3 {
	font-size:27px;
	line-height:32px;
}
h4 {
	font-size:24px;
	line-height:30px;
}
h5 {
	font-size:21px;
	line-height:26px;
}
h6 {
	font-size:18px;
	line-height:22px;
}
h2 span {
	color:#ec8f23;
	text-transform:uppercase;
}
.heading-1 {
	text-transform:uppercase;
	font-weight:bold;
	color:#ec8f23;
	padding:0 0 10px 0;
}

/*----- Texto y Tipografía -----*/
.str-1 {
	text-transform:uppercase;
	color:#ec8f23;
	font-weight:normal;
}
.str-2 {
	text-transform:uppercase;
}
.str-3 {
	color:#ec8f23;
}
.str-4 {
	color:#454545;
	display:block;
	font-size:14px;
	padding:0 0 6px 0;
}
.quote {
	font-size:12px;
	line-height:18px;
	position:relative;
	padding:0 0 15px 0;
}
.quote:before {
	display:inline-block;
	background:url(../images/quote-before.png) no-repeat 0 0;
	content:"";
	width:18px;
	height:14px;
	margin:0 5px 0 0;
}
.quote:after {
	display:inline-block;
	background:url(../images/quote-after.png) no-repeat 0 0;
	content:"";
	width:18px;
	height:14px;
	margin:0 0 0 6px;
}
.quote-1 {
	background:url(../images/body-bg.gif);
	border-radius:6px;
	box-shadow:1px 1px 0 0 #fff;
	border:1px solid #d8d8d8;
	position:relative;
	margin:0 0 9px 0;
}
.quote-1:after {
	display:block;
	content:"";
	background:url(../images/quote-1-marker.gif) no-repeat 0 0;
	width:22px;
	height:22px;
	right:20px;
	bottom:-22px;
	position:absolute;
}
.quote-1-inner {
	background:url(../images/quote-before.png) no-repeat 19px 30px;
	padding:28px 25px 29px 40px;
	position:relative;
}
.quote-1-inner:after {
	display:inline-block;
	background:url(../images/quote-after.png) no-repeat 0 0;
	content:"";
	width:18px;
	height:14px;
	margin:2px 0 0 3px;
}
.def-list-1 dt {
	display:block;
	color:#ec8f23;
	font-size:20px;
	line-height:24px;
	text-shadow:1px 1px #fff;
	font-family: 'Open Sans', sans-serif;
	padding:18px 0 5px 0;
	word-spacing:-1px;
}
.def-list-1 dt a {
	text-decoration:none;
}
.def-list-1 dt a:hover {
	color:#454545;
}
.def-list-1 dd.extra {
	padding:0 0 6px 0;
}
/*----- borders & lines -----*/
.hr-border {
	height:2px;
	background:url(../images/list-1-border.gif) repeat-x 0 0;
	margin:0 5px 12px 5px;
}
.hr-border-1 {
	background:url(../images/list-1-border.gif) repeat-x 0 bottom;
	padding:0 0 10px 0;
}
.hr-border-2 {
	height:2px;
	background:url(../images/list-1-border.gif) repeat-x 0 0;
	margin:0 5px 35px 5px;
}
.hr-border-3 {
	height:2px;
	background:url(../images/list-1-border.gif) repeat-x 0 0;
	margin:0 0 27px 0;
}
/*----- boxes -----*/
.box-1 {
	background:#dcdcdc;
	border-radius:7px;
	box-shadow:1px 0 5px #bbb;
	text-align:center;
	padding:0 0 6px 0;
	margin:0 0 16px 0;
	position:relative;
	z-index:2;
}
.box-1 .inner {
	border-radius:7px 7px 0 0;
	background:url(../images/box-1-bg.gif) no-repeat center 0 #fff;
	padding:22px 25px 11px 25px;
	position:relative;
}
.box-1 h3 {
	padding-bottom:10px;
}
.button-box {
	display:inline-block;
	background:url(../images/button-box-tail.gif) repeat-x 0 0;
	border-radius:6px;
	padding:5px 6px 0 6px;
	margin:0 0 -16px 0;
}
.btn-container {
	position:absolute;
	bottom:-6px;
	left:0;
	right:0;
	text-align:center;
}
.box-2 {
	background:url(../images/body-bg.gif);
	border-radius:6px;
	box-shadow:1px 1px 0 0 #fff;
	border:1px solid #d8d8d8;
	padding:19px 25px 29px 38px;
}
.boxes-bg {
	position:relative;
}
.boxes-bg:after {
	display:block;
	position:absolute;
	content:"";
	background:url(../images/boxes-bg.png) no-repeat 0 0;
	left:-5px;
	top:-39px;
	width:970px;
	height:131px;
	z-index:1;
}
/*----- indents -----*/
.img-indent {
	float:left;
	margin:0 10px 0 0;
}
.img-indent-1 {
	float:left;
	margin:0 10px 12px 0;
}
.img-indent-bot {
	margin:0 0 14px 0;
}
p {
	padding-bottom:18px;
}
.p {
	padding-bottom:18px;
}
.p0 {
	padding-bottom:0 !important;
}
.p1 {
	padding-bottom:6px !important;
}
.p2 {
	padding-bottom:12px !important;
}
.p3 {
	padding-bottom:25px !important;
}
.a1 {
	margin:0 5px;
}
.indent-bot {
	margin:0 0 18px 0;
}
.indent-bot-1 {
	margin:0 0 33px 0;
}
.indent-bot-2 {
	margin:0 0 37px 0;
}
.inner-indent {
	padding:20px 35px 0 0;
}
.indent-top {
	padding-top:20px;
}
.indents-1 {
	margin:0 40px 0 0;
}
.pad-right {
	padding-right:20px;
}
/*----- lists -----*/
.list-1 {
	padding:0 0 20px 0;
}
.list-1 li {
	display:block;
	padding:6px 0 6px;
	background:url(../images/list-1-border.gif) repeat-x 0 0;
	line-height:18px;
}
.list-1 li:first-child {
	padding:0 0 6px 0;
	background:none;
}
.list-1 li a {
	color:#ec8f23;
	display:inline-block;
	font-size:12px;
	text-decoration:none;
	text-transform:uppercase;
	padding:0 0 0 15px;
	background:url(../images/list-1-marker.gif) no-repeat 0 6px;
}
.list-1 li a:hover {
	color:#454545;
}
.list-2 {
	padding:0;
}
.list-2 li {
	display:block;
	padding:6px 0 6px;
	background:url(../images/list-1-border.gif) repeat-x 0 0;
	line-height:18px;
}
.list-2 li:first-child {
	padding:0 0 6px 0;
	background:none;
}
.list-2 li a {
	color:#ec8f23;
	display:inline-block;
	font-size:12px;
	text-decoration:none;
	padding:0 0 0 15px;
	background:url(../images/list-1-marker.gif) no-repeat 0 6px;
}
.list-2 li a:hover {
	color:#454545;
}
/*----- buttons & links -----*/
a {
	color:#ec8f23;
	text-decoration: underline;
	cursor:pointer;
}
a:hover {
	text-decoration: none;
}
.button {
	display:inline-block;
	font-size:14px;
	line-height:20px;
	padding:5px 14px 6px 14px;
	font-family: 'Open Sans', sans-serif;
	color:#fff;
	text-decoration:none;
	background:url(../images/button-tail.gif) repeat-x 0 0 #ec6b23;
	text-shadow:1px 1px #e36f15;
	border-radius:6px;
}
.button:hover {
	background:url(../images/button-tail.gif) repeat-x 0 bottom #e5b81d;
}
.link {
	text-decoration: underline;
	color:#ec8f23;
	text-transform:uppercase;
	font-size:11px;
}
.link:hover {
	text-decoration: none;
}
`;

export default GlobalStyles;
