# 클론 코딩 

## 목적
* 네이버 클라우드 플랫폼에 Media Player 를 따라해보고, 공부한다. 
* 상업적 이용은 절대 하지 않는다. -> Study 용
* 소스를 분석하여 해당 서비스에 맞게 변형 시켜보도록 한다. 
* 컴포넌트를 구성하는 부분을 나누어 언제든지 디자인 할수 있게 Custom page를 만들어 본다. 

http://kjwqlsawnlxj1099443.cdn.ntruss.com/demo/hlsplayer




# 업데이트
## 2019 11 18 
* 데모페이지 소스를 그대로 베껴서 일단 구동시켜 봄 
* font 적용에 필요한 ttf, eof, woff 의 차이를 알아야함. 
* js, css 에 minify 를 자동으로 적용 시킬수 있게 하는 package manager 를 찾아봐야함. 
* 기존에 `<form id="">`로 코딩이 되어있는데, 내가 만든건 이 부분을 제외해야 구동이 되었다. 네이버의 오타인가 ??? 

## 이유
* Video.js 를 공부하던 도중, 네이버 클라우드 플랫폼 쪽에서 해당 오픈소스를 가지고 Player 를 만들었기 때문 

## lite-server 
* 파일명은 index.html 롤 한다. 
```
npm start
```