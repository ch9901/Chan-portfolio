import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
export const Container = styled.div`
  padding: 5rem 12rem;
`;
export const ProjectWrap = styled.div`
width: calc(100vw - 25.7rem);
padding: 10rem 15rem;
background: #fff;
display: flex;
justify-content: center;
gap: 10rem;
flex-wrap: wrap;
border-radius: 0 0 5rem 5rem;
border: 0.2rem solid #000;
border-top: none;
position: relative;
-ms-overflow-style: none;
scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
`;

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "gs500";
  font-weight: 500;
  font-style: normal;
  src: url("https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.eot");
  src: url("https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.eot?#iefix")
      format("embedded-opentype"),
    url("https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.woff2")
      format("woff2"),
    url("https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.woff")
      format("woff"),
    url("https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.ttf")
      format("truetype");
  font-display: swap;
}
@font-face {
  font-family: "gs700";
  font-weight: 700;
  font-style: normal;
  src: url("https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansBold.eot");
  src: url("https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansBold.eot?#iefix")
      format("embedded-opentype"),
    url("https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansBold.woff2")
      format("woff2"),
    url("https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansBold.woff")
      format("woff"),
    url("https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansBold.ttf")
      format("truetype");
  font-display: swap;
}
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css");
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
  font-family: "Pretendard Variable", Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
    "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}
body::-webkit-scrollbar {
  display: none;
}
* {
  box-sizing: border-box;
}
ol,
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

html,
body {
  font-size: 10px;
}

@media all and (max-width: 1500px) {
  html,
  body {
    font-size: 9px;
  }
}
@media all and (max-width: 1300px) {
  html,
  body {
    font-size: 9px;
  }
}
@media all and (max-width: 1200px) {
  html,
  body {
    font-size: 8px;
  }
  .aboutmeWrap{
    flex-direction:column;
  }
  .aboutmePhoto{
    display:none;
  }
  .aboutmeInfoWrap{
    width:100% !important;
  }
  .aboutmeTitWrap{
    width:90% !important;
  }
  .aboutmeDesc{
    width:100% !important;
  }
  .aboutmeSkilDesc{
    width:90%;
  }
}
@media all and (max-width: 1000px) {
  html,
  body {
    font-size: 8px;
  }
  .cardWrap {
    flex-direction: column;
    gap:1rem;
    height:55rem !important;
  }
  .imgWrap{
    width:100% !important;
    height:60% !important;
  }
  .infoWrap{
    width:100% !important;
    height:40%;
  }
  .urls{
    bottom:10%;
  }
  .etcWrap{
    flex-direction:column;
    align-items:center;  
  }
  .cardWrap{
    width:90% !important;
  }
  .infoWrap{
    
  }
}
@media all and (max-width: 965px) {
  .bigContent{
    flex-direction:column;
  }
.myPart{
  display:none;
}
.bigImgWrap{
  width:100% !important;
  height:40% !important;
  overflow:hidden;
  border:none;
  img{
    background-size:cover;
  }
}
.bigInfoWrap{
  width:100% !important;
}
}
@media all and (max-width: 880px) {
  html,
  body {
    font-size: 7.5px;
  }
}
@media all and (max-width: 805px) {
  html,
  body {
    font-size: 7px;
  }
  .projectWrap{
    padding:5rem !important;
  }
}
@media all and (max-width: 680px) {
  .aboutmeWrap{
    height:calc(100vh - 40rem) !important;
  }
  .skilIconWrap{
    flex-direction:column;
    height:auto !important;
    width:80% !important;
  }
  .aboutmeSkilDesc{
    width:80% !important;
    height:auto !important;
  }
}
@media all and (max-width: 660px) {
  html,
  body {
    font-size: 6.5px;
  }
.projectWrap{
  padding:5rem !important;
}
}
@media all and (max-width: 550px) {
  html,
  body {
    font-size: 6.5px;
  }

}

`;
