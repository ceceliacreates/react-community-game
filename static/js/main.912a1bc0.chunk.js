(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(3),c=a.n(r),m=(a(16),a(1)),o=a(4),s=a(5),u=a(8),g=a(6),d=a(9);a(17);var l=function(){return n.a.createElement("div",{className:"header"},n.a.createElement("img",{src:"https://i.imgur.com/7L6T1Wx.gif",alt:"gif of Community logo"}))};var p=function(){return n.a.createElement("div",{className:"instructions"},n.a.createElement("p",null,"Instructions: Click a character to earn points, but don't click on any image more than once!"))};var h=function(e){return n.a.createElement("div",{className:"scores"},n.a.createElement("h2",null,"Game Score: ",e.currentScore),n.a.createElement("p",null,e.message),n.a.createElement("h2",null,"Top Score: ",e.topScore))},f=a(7);var j=function(e){var t=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),i=[e[a],e[t]];e[t]=i[0],e[a]=i[1]}return e}(f);return n.a.createElement("div",{className:"image-container"},t.map(function(t){return n.a.createElement("img",{src:t.image,id:t.id,key:t.id,onClick:e.handleClick,alt:t.name})}))},v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(n)))).state={currentScore:0,topScore:0,message:"Click any image to start!",id1:0,id2:0,id3:0,id4:0,id5:0,id6:0,id7:0,id8:0,id9:0,id10:0,id11:0,id12:0},a.handleClick=function(e){var t,i="id"+e.target.id;1===a.state[i]&&a.resetGame();var n=a.state.currentScore+1;a.setState((t={currentScore:n},Object(m.a)(t,i,1),Object(m.a)(t,"message","Keep going!"),t))},a.resetGame=function(){a.setState({message:"Sorry, you Britta'd it! Click an image to start over.",currentScore:0,id1:0,id2:0,id3:0,id4:0,id5:0,id6:0,id7:0,id8:0,id9:0,id10:0,id11:0,id12:0})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(l,null),n.a.createElement(p,null),n.a.createElement(h,{message:this.state.message,currentScore:this.state.currentScore,topScore:this.state.topScore}),n.a.createElement(j,{handleClick:this.handleClick}))}}]),t}(n.a.Component);c.a.render(n.a.createElement(v,null),document.getElementById("root"))},7:function(e){e.exports=[{id:1,image:"https://i.imgur.com/l5HVFJf.jpg",name:"Abed"},{id:2,image:"https://i.imgur.com/EkRHQP2.jpg",name:"Annie"},{id:3,image:"https://i.imgur.com/TVUYE9f.jpg",name:"Betty"},{id:4,image:"https://i.imgur.com/072aOsU.jpg",name:"Britta"},{id:5,image:"https://i.imgur.com/Ghsvggb.jpg",name:"Chang"},{id:6,image:"https://i.imgur.com/W7AbKAY.jpg",name:"Dean"},{id:7,image:"https://i.imgur.com/G2JtI5b.jpg",name:"Fake Dean"},{id:8,image:"https://i.imgur.com/3moHuki.jpg",name:"Jeff"},{id:9,image:"https://i.imgur.com/KUud300.jpg",name:"Leonard"},{id:10,image:"https://i.imgur.com/aYNiT0O.jpg",name:"Pierce"},{id:11,image:"https://i.imgur.com/ByQk6tm.jpg",name:"Shirley"},{id:12,image:"https://i.imgur.com/X7mIZZu.jpg",name:"Troy"}]}},[[10,1,2]]]);
//# sourceMappingURL=main.912a1bc0.chunk.js.map