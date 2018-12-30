(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){"use strict";n.d(t,"a",function(){return h}),n.d(t,"b",function(){return d});var a=n(2),r=n.n(a),c=n(6),i=n(3),o=n(4),l=n(42),s=n.n(l),u=n(13),h=new(function(){function e(t){Object(i.a)(this,e),this.socket=s()(t)}return Object(o.a)(e,[{key:"connect",value:function(){var e=this;return new Promise(function(t){e.socket.emit("fetch-models",{},function(n){var a=n.models;Object(u.b)(a,function(t,n){var a=new Object;n.forEach(function(n){a[n]=function(){for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return new u.a(function(a){e.socket.emit("".concat(t,"-").concat(n),r,function(t){e.socket.on(t,function(e){a(e)})})})}}),e[t]=a}),t()})})}}]),e}())("https://hidden-haven-quest.triframe.cloud"),d={connect:function(){var e=Object(c.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.connect();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}},13:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return o}),n.d(t,"c",function(){return l});var a=n(3),r=n(4),c=n(45);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Object,t=arguments.length>1?arguments[1]:void 0,n=!0,a=!1,r=void 0;try{for(var i,o=e.entries()[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var l=i.value,s=Object(c.a)(l,2);t(s[0],s[1],e)}}catch(u){a=!0,r=u}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}}Object.defineProperty(Object.prototype,"entries",{enumerable:!1,writable:!0,value:function(){return Object.entries(this)}});var o=function(){function e(t){var n=this;Object(a.a)(this,e),this.callbacks=new Array,setTimeout(function(){return t(function(){return n.emit.apply(n,arguments)})})}return Object(r.a)(e,[{key:"then",value:function(e){this.callbacks.push(e)}},{key:"emit",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.callbacks.forEach(function(e){return e.apply(void 0,t)})}}]),e}();function l(e){return{when:function(t){return{elseIs:function(n){return t?e:n},toString:function(){return!!t&&e}}},toString:function(){return e}}}},47:function(e,t,n){e.exports=n(86)},79:function(e,t){},85:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(4),c=n(10),i=n(9),o=n(11),l=n(0),s=n.n(l),u=n(91),h=n(89),d=n(90),m=n(88),v=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"jumbotron"},s.a.createElement("h1",{class:"display-4"},"Welcome to Hidden Haven Quest")),s.a.createElement("p",null,s.a.createElement("code",null,"sudo rm -rf /")," is a lovely one-line command that deletes everything on your hard drive."),s.a.createElement("p",null,"Unfortunately, it is the fate which shall befall your computer should you fail any one of the ",s.a.createElement("strong",null,"12")," challenges ahead of you in the next ",s.a.createElement("strong",null,"10")," minutes."),s.a.createElement("p",null,"Each challenge is a riddle, which will direct you to a location in (or around) the house."),s.a.createElement("p",null,'The good news, is you will have help. Upon clicking "Begin" below, you will invite members of your family to aid in solving these challenges. Given the timelimit, you will want to distribute your team across multiple challenges at a time, which you will be able to do from your ',s.a.createElement("strong",null,"dashboard"),"."),s.a.createElement("p",null,"Once a team member has been assigned a challenge, they will be able to use their mobile device as a scanner to ",s.a.createElement("strong",null,"scan")," the code left at the locations indicated by that challenge."),s.a.createElement("p",null,"Once the code has been scanned, the challenge will be considered completed. Once all codes have been scanned, the game will be over and you will have won ",s.a.createElement("strong",null,"Hidden Haven Quest")),s.a.createElement("p",null,"Good luck!"),s.a.createElement(m.a,{to:"/dashboard",className:"btn btn-success"},"Begin..."))}}]),t}(l.Component),f=n(2),p=n.n(f),b=n(6),g=n(12),y=n(13),w=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(n=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={secondsLeft:0},n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(p.a.mark(function e(){var t=this;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:g.a.Timer.remaining().then(function(e){t.setState({secondsLeft:e})});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.secondsLeft/1e3;if(e<0)return s.a.createElement("span",{className:"text-danger"},"Game Over");var t=Math.floor(e/60),n=e-60*t;return"Time Remaining: ".concat(t,":").concat(n.toFixed())}}]),t}(l.Component),E=g.a.Users,O=g.a.Rounds,k=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(n=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={round:null,selectedChallengeID:null,users:[]},n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.fetchCurrentRound(),this.fetchUsers(),O.beginGame()}},{key:"fetchCurrentRound",value:function(){var e=Object(b.a)(p.a.mark(function e(){var t=this;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:O.current().then(function(e){var n=t.state.selectedChallengeID;e.challenges.map(function(e){return e.id}).includes(n)||(n=null),t.setState({round:e,selectedChallengeID:n})});case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"fetchUsers",value:function(){var e=Object(b.a)(p.a.mark(function e(){var t=this;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:E.all().then(function(e){t.setState({users:e})});case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.users,a=t.round,r=t.selectedChallengeID;return a?a.complete?s.a.createElement("div",{className:"jumbotron text-center"},s.a.createElement("h1",{className:"display-1"},"You Win!")):(r||(r=a.challenges[0].id),s.a.createElement("div",null,s.a.createElement(w,null),s.a.createElement("h1",null,a.name),s.a.createElement("ul",{className:"nav nav-pills"},a.challenges.map(function(t){return s.a.createElement("li",{key:t.id,className:"nav-item"},s.a.createElement("a",{href:"javascript:void(0)",onClick:function(){return e.select(t.id)},className:"nav-link ".concat(Object(y.c)("active").when(r===t.id)," ").concat(Object(y.c)("bg-success text-white").when(t.solved))},t.description))})),s.a.createElement("div",{className:"card-deck"},n.map(function(t){return s.a.createElement("div",{key:t.id,className:"card ".concat(Object(y.c)("border-primary").when(t.challengeID===r)),style:{width:"18rem",cursor:"pointer"},onClick:function(){return e.assign(t)}},s.a.createElement("div",{style:{height:"100px",overflow:"hidden"}},s.a.createElement("img",{className:"card-img-top",src:t.image,alt:"Card image cap"})),s.a.createElement("div",{className:"card-body"},s.a.createElement("h5",{className:"card-title"},t.name)))})))):s.a.createElement("h3",null,"Loading...")}},{key:"select",value:function(e){this.setState({selectedChallengeID:e})}},{key:"assign",value:function(){var e=Object(b.a)(p.a.mark(function e(t){var n,a,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.state,a=n.selectedChallengeID,r=n.round,a||(a=r.challenges[0].id),t.challengeID==a){e.next=5;break}return e.next=5,E.update(t.id,{challengeID:a});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(l.Component),j=n(43),x=n.n(j),C=function(){function e(t,n){var r=this;if(Object(a.a)(this,e),"video"!==t.kind)throw new DOMException("NotSupportedError");this._videoStreamTrack=t,"readyState"in this._videoStreamTrack||(this._videoStreamTrack.readyState="live"),this._previewStream=new MediaStream([t]),this.videoElement=n,this.videoElementPlaying=new Promise(function(e){r.videoElement.addEventListener("playing",e)}),HTMLMediaElement?this.videoElement.srcObject=this._previewStream:this.videoElement.src=URL.createObjectURL(this._previewStream),this.videoElement.muted=!0,this.videoElement.setAttribute("playsinline",""),this.videoElement.play(),this.canvasElement=document.createElement("canvas"),this.canvas2dContext=this.canvasElement.getContext("2d")}return Object(r.a)(e,[{key:"getPhotoCapabilities",value:function(){return new Promise(function(e,t){var n={current:0,min:0,max:0};e({exposureCompensation:n,exposureMode:"none",fillLightMode:"none",focusMode:"none",imageHeight:n,imageWidth:n,iso:n,redEyeReduction:!1,whiteBalanceMode:"none",zoom:n}),t(new DOMException("OperationError"))})}},{key:"setOptions",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return new Promise(function(e,t){})}},{key:"takePhoto",value:function(){var e=this;return new Promise(function(t,n){if("live"!==e._videoStreamTrack.readyState)return n(new DOMException("InvalidStateError"));e.videoElementPlaying.then(function(){try{e.canvasElement.width=e.videoElement.videoWidth,e.canvasElement.height=e.videoElement.videoHeight,e.canvas2dContext.drawImage(e.videoElement,0,0),e.canvasElement.toBlob(t)}catch(a){n(new DOMException("UnknownError"))}})})}},{key:"grabFrame",value:function(){var e=this;return new Promise(function(t,n){if("live"!==e._videoStreamTrack.readyState)return n(new DOMException("InvalidStateError"));e.videoElementPlaying.then(function(){try{e.canvasElement.width=e.videoElement.videoWidth,e.canvasElement.height=e.videoElement.videoHeight,e.canvas2dContext.drawImage(e.videoElement,0,0);var n=window.createImageBitmap(e.canvasElement);t(n)}catch(a){alert(a)}})})}},{key:"videoStreamTrack",get:function(){return this._videoStreamTrack}}]),e}(),S=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.startQRScanner()}},{key:"startQRScanner",value:function(){var e=Object(b.a)(p.a.mark(function e(){var t,n,a,r,c,i,o,l=this;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});case 2:t=e.sent,n=document.createElement("canvas"),a=n.getContext("2d"),r=t.getVideoTracks()[0],c=new C(r,this.refs.video),i=c.videoElement,document.body.append(i),(o=function(){var e=Object(b.a)(p.a.mark(function e(){var t,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.width=i.videoWidth,n.height=i.videoHeight,a.drawImage(i,0,0,i.videoWidth,i.videoHeight),i.videoWidth&&i.videoHeight){e.next=5;break}return e.abrupt("return",setTimeout(o,10));case 5:t=a.getImageData(0,0,i.videoWidth,i.videoHeight),(r=x()(t.data,i.videoWidth,i.videoHeight))&&"function"===typeof l.props.onInput&&l.props.onInput(r.data),setTimeout(o,10);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}())();case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement("video",{ref:"video"})}}]),t}(l.Component),I=g.a.Users,D=(g.a.Rounds,g.a.Challenges),M=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(n=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={},n.attempt=function(){var e=Object(b.a)(p.a.mark(function e(t){var a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.challenge){e.next=5;break}return e.next=3,D.solve(n.state.challenge.id,t);case 3:a=e.sent,n.setState({lastAttempt:a});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.fetchUser()}},{key:"fetchUser",value:function(){var e=Object(b.a)(p.a.mark(function e(){var t=this;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:I.subscribe(this.props.match.params.userID).then(function(e){t.fetchChallenge(e.challengeID)});case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"fetchChallenge",value:function(){var e=Object(b.a)(p.a.mark(function e(t){var n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.find(t);case 2:n=e.sent,this.setState({challenge:n,lastAttempt:null});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.lastAttempt,n=e.challenge;return n?s.a.createElement("div",null,s.a.createElement(w,null),s.a.createElement("h1",null,n.description),s.a.createElement("div",null,!1===t&&s.a.createElement("h3",{className:"text-danger"},"Incorrect, please try again..."),!0===t&&s.a.createElement("h3",{className:"text-success"},"Challenge Complete!")),s.a.createElement(S,{onInput:this.attempt})):s.a.createElement("div",null,s.a.createElement(w,null),s.a.createElement("h1",null,"Awaiting Challenge..."))}}]),t}(l.Component),N=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"container"},s.a.createElement(u.a,null,s.a.createElement(h.a,null,s.a.createElement(d.a,{path:"/portal/:userID",component:M}),s.a.createElement(d.a,{path:"/dashboard",component:k}),s.a.createElement(d.a,{path:"/",component:v})))))}}]),t}(l.Component);t.default=N},86:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(6),i=n(0),o=n.n(i),l=n(41),s=n.n(l),u=n(12);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(c.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.connect();case 2:t=n(85).default,s.a.render(o.a.createElement(t,null),document.getElementById("root"));case 4:case"end":return e.stop()}},e,this)}))(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[47,2,1]]]);
//# sourceMappingURL=main.7c0a8864.chunk.js.map