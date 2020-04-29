(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{163:function(e,t,a){e.exports=a(343)},168:function(e,t,a){},343:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(34),l=a.n(o),c=a(10),i=a(11),s=a(14),m=a(12),u=a(15),p=a(17),d=a(45),h=(a(168),a(100)),E=a.n(h),f=a(63),b=a.n(f),g=a(149),y=a.n(g),v=a(13),O=a(46),S=a(151),C=a(64),j=a(6),I={authenticated:!1,loading:!1,credentials:{},likes:[],notifications:[]},N={screams:[],scream:{},loading:!1},w={loading:!1,errors:null},k=[S.a],A=Object(O.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTHENTICATED":return Object(j.a)({},e,{authenticated:!0});case"SET_UNAUTHENTICATED":return I;case"SET_USER":return Object(j.a)({authenticated:!0,loading:!1},t.payload);case"LOADING_USER":return Object(j.a)({},e,{loading:!0});case"LIKE_SCREAM":return Object(j.a)({},e,{likes:[].concat(Object(C.a)(e.likes),[{userHandle:e.credentials.handle,screamId:t.payload.screamId}])});case"UNLIKE_SCREAM":return Object(j.a)({},e,{likes:e.likes.filter(function(e){return e.screamId!==t.payload.screamId})});case"MARK_NOTIFICATIONS_READ":return e.notifications.forEach(function(e){return e.read=!0}),Object(j.a)({},e);default:return e}},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_DATA":return Object(j.a)({},e,{loading:!0});case"SET_SCREAMS":return Object(j.a)({},e,{screams:t.payload,loading:!1});case"SET_SCREAM":return Object(j.a)({},e,{scream:t.payload});case"LIKE_SCREAM":case"UNLIKE_SCREAM":var a=e.screams.findIndex(function(e){return e.screamId===t.payload.screamId});return e.screams[a]=t.payload,e.scream.screamId===t.payload.screamId&&(e.scream=t.payload),Object(j.a)({},e);case"DELETE_SCREAM":return a=e.screams.findIndex(function(e){return e.screamId===t.payload}),e.screams.splice(a,1),Object(j.a)({},e);case"POST_SCREAM":return Object(j.a)({},e,{screams:[t.payload].concat(Object(C.a)(e.screams))});case"SUBMIT_COMMENT":return Object(j.a)({},e,{scream:Object(j.a)({},e.scream,{comments:[t.payload].concat(Object(C.a)(e.scream.comments))})});default:return e}},UI:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ERRORS":return Object(j.a)({},e,{loading:!1,errors:t.payload});case"CLEAR_ERRORS":return Object(j.a)({},e,{loading:!1,errors:null});case"LOADING_UI":return Object(j.a)({},e,{loading:!0});case"STOP_LOADING_UI":return Object(j.a)({},e,{loading:!1});default:return e}}}),x=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):O.d)(O.a.apply(void 0,k)),T=Object(O.e)(A,{},x),R=a(25),U=a.n(R),_=function(){return function(e){localStorage.removeItem("FBIdToken"),delete U.a.defaults.headers.common.Authorization,e({type:"SET_UNAUTHENTICATED"})}},D=function(){return function(e){e({type:"LOADING_USER"}),U.a.get("/user").then(function(t){e({type:"SET_USER",payload:t.data})}).catch(function(e){return console.log(e)})}},L=function(e){var t="Bearer ".concat(e);localStorage.setItem("FBIdToken",t),U.a.defaults.headers.common.Authorization=t},M=a(71),F=a.n(M),P=a(72),B=a.n(P),W=function(e){var t=e.children,a=e.onClick,n=e.tip,o=e.btnClassName,l=e.tipClassName;return r.a.createElement(F.a,{title:n,className:l,placement:"top"},r.a.createElement(B.a,{onClick:a,className:o},t))},Y=a(36),G=a(3),H=a.n(G),z=a(27),K=a.n(z),J=a(28),V=a.n(J),X=a(42),$=a.n(X),q=a(54),Q=a.n(q),Z=a(53),ee=a.n(Z),te=a(43),ae=a.n(te),ne=a(152),re=a.n(ne),oe=a(73),le=a.n(oe),ce=function(){return function(e){e({type:"CLEAR_ERRORS"})}},ie=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1,body:"",errors:{}},a.handleOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.props.clearErrors(),a.setState({open:!1,errors:{}})},a.handleChange=function(e){a.setState(Object(Y.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.postScream({body:a.state.body})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.UI.errors&&this.setState({errors:e.UI.errors}),e.UI.errors||e.UI.loading||this.setState({body:"",open:!1,errors:{}})}},{key:"render",value:function(){var e=this.state.errors,t=this.props,a=t.classes,o=t.UI.loading;return r.a.createElement(n.Fragment,null,r.a.createElement(W,{onClick:this.handleOpen,tip:"Post a Scream!"},r.a.createElement(re.a,null)),r.a.createElement($.a,{open:this.state.open,onClose:this.handleClose,fullWidth:!0,maxWidth:"sm"},r.a.createElement(W,{tip:"Close",onClick:this.handleClose,tipClassName:a.closeButton},r.a.createElement(le.a,null)),r.a.createElement(ee.a,null,"Post New Caption"),r.a.createElement(Q.a,null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(V.a,{name:"body",type:"text",label:"SCREAM!!",multiline:!0,rows:"3",placeholder:"Scream at your fellow apes",error:!!e.body,helperText:e.body,className:a.textField,onChange:this.handleChange,fullWidth:!0}),r.a.createElement(K.a,{type:"submit",variant:"contained",color:"primary",className:a.submitButton,disabled:o},"Submit",o&&r.a.createElement(ae.a,{size:30,className:a.progressSpinner}))))))}}]),t}(n.Component),se=Object(v.b)(function(e){return{UI:e.UI}},{postScream:function(e){return function(t){t({type:"LOADING_UI"}),U.a.post("/scream",e).then(function(e){t({type:"POST_SCREAM",payload:e.data}),t(ce())}).catch(function(e){t({type:"SET_ERRORS",payload:e.response.data})})}},clearErrors:ce})(H()(function(e){return Object(j.a)({},e,{submitButton:{position:"relative",float:"right",marginTop:10},progressSpinner:{position:"absolute"},closeButton:{position:"absolute",left:"91%",top:"6%"}})})(ie)),me=a(33),ue=a.n(me),pe=a(74),de=a.n(pe),he=a(155),Ee=a.n(he),fe=a(101),be=a.n(fe),ge=a(18),ye=a.n(ge),ve=a(153),Oe=a.n(ve),Se=a(84),Ce=a.n(Se),je=a(75),Ie=a.n(je),Ne=a(55),we=a.n(Ne),ke=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={anchorEl:null},a.handleOpen=function(e){a.setState({anchorEl:e.target})},a.handleClose=function(){a.setState({anchorEl:null})},a.onMenuOpened=function(){var e=a.props.notifications.filter(function(e){return!e.read}).map(function(e){return e.notificationId});a.props.markNotificationsRead(e)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t=this,a=this.props.notifications,o=this.state.anchorEl;ue.a.extend(de.a),e=a&&a.length>0&&a.filter(function(e){return!1===e.read}).length>0?r.a.createElement(Oe.a,{badgeContent:a.filter(function(e){return!1===e.read}).length,color:"secondary"},r.a.createElement(Ce.a,null)):r.a.createElement(Ce.a,null);var l=a&&a.length>0?a.map(function(e){var a="like"===e.type?"liked":"commented on",n=ue()(e.createdAt).fromNow(),o=e.read?"primary":"secondary",l="like"===e.type?r.a.createElement(Ie.a,{color:o,style:{marginRight:10}}):r.a.createElement(we.a,{color:o,style:{marginRight:10}});return r.a.createElement(be.a,{key:e.createdAt,onClick:t.handleClose},l,r.a.createElement(ye.a,{component:p.b,color:"default",variant:"body1",to:"/users/".concat(e.recipient,"/scream/").concat(e.screamId)},e.sender," ",a," your scream ",n))}):r.a.createElement(be.a,{onClick:this.handleClose},"You have no notifications yet");return r.a.createElement(n.Fragment,null,r.a.createElement(F.a,{placement:"top",title:"Notifications"},r.a.createElement(B.a,{"aria-owns":o?"simple-menu":void 0,"aria-haspopup":"true",onClick:this.handleOpen},e)),r.a.createElement(Ee.a,{anchorEl:o,open:Boolean(o),onClose:this.handleClose,onEntered:this.onMenuOpened},l))}}]),t}(n.Component),Ae=Object(v.b)(function(e){return{notifications:e.user.notifications}},{markNotificationsRead:function(e){return function(t){U.a.post("/notifications",e).then(function(e){t({type:"MARK_NOTIFICATIONS_READ"})}).catch(function(e){return console.log(e)})}}})(ke),xe=a(156),Te=a.n(xe),Re=a(157),Ue=a.n(Re),_e=a(158),De=a.n(_e),Le=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.authenticated;return r.a.createElement(Te.a,null,r.a.createElement(Ue.a,{className:"nav-container"},e?r.a.createElement(n.Fragment,null,r.a.createElement(se,null),r.a.createElement(p.b,{to:"/"},r.a.createElement(W,{tip:"Home"},r.a.createElement(De.a,null))),r.a.createElement(Ae,null)):r.a.createElement(n.Fragment,null,r.a.createElement(K.a,{color:"inherit",component:p.b,to:"/login"},"Login"),r.a.createElement(K.a,{color:"inherit",component:p.b,to:"/"},"Home"),r.a.createElement(K.a,{color:"inherit",component:p.b,to:"/signup"},"Signup"))))}}]),t}(n.Component),Me=Object(v.b)(function(e){return{authenticated:e.user.authenticated}})(Le),Fe=a(159),Pe=Object(v.b)(function(e){return{authenticated:e.user.authenticated}})(function(e){var t=e.component,a=e.authenticated,n=Object(Fe.a)(e,["component","authenticated"]);return r.a.createElement(d.b,Object.assign({},n,{render:function(e){return!0===a?r.a.createElement(d.a,{to:"/"}):r.a.createElement(t,e)}}))}),Be=a(16),We=a.n(Be),Ye=a(76),Ge=a.n(Ye),He=a(160),ze=a.n(He),Ke=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},a.handleOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a.deleteScream=function(){a.props.deleteScream(a.props.screamId),a.setState({open:!1})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(n.Fragment,null,r.a.createElement(W,{tip:"Delete Scream",onClick:this.handleOpen,btnClassName:e.deleteButton},r.a.createElement(ze.a,{color:"secondary"})),r.a.createElement($.a,{open:this.state.open,onClose:this.handleClose,fullWidth:!0,maxWidth:"sm"},r.a.createElement(ee.a,null,"Are you sure you want to delete this post ?"),r.a.createElement(Ge.a,null,r.a.createElement(K.a,{onClick:this.handleClose,color:"primary"},"Cancel"),r.a.createElement(K.a,{onClick:this.deleteScream,color:"secondary"},"Delete"))))}}]),t}(n.Component),Je=Object(v.b)(null,{deleteScream:function(e){return function(t){U.a.delete("/scream/".concat(e)).then(function(){t({type:"DELETE_SCREAM",payload:e})}).catch(function(e){return console.log(e)})}}})(H()({deleteButton:{position:"absolute",left:"90%",top:"10%"}})(Ke)),Ve=a(103),Xe=a.n(Ve),$e=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).likedScream=function(){return!(!a.props.user.likes||!a.props.user.likes.find(function(e){return e.screamId===a.props.screamId}))},a.likeScream=function(){a.props.likeScream(a.props.screamId)},a.unlikeScream=function(){a.props.unlikeScream(a.props.screamId)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.user.authenticated?this.likedScream()?r.a.createElement(W,{tip:"Undo like",onClick:this.unlikeScream},r.a.createElement(Ie.a,{color:"primary"})):r.a.createElement(W,{tip:"Like",onClick:this.likeScream},r.a.createElement(Xe.a,{color:"primary"})):r.a.createElement(p.b,{to:"/login"},r.a.createElement(W,{tip:"Like"},r.a.createElement(Xe.a,{color:"primary"})))}}]),t}(n.Component),qe={likeScream:function(e){return function(t){U.a.get("/scream/".concat(e,"/like")).then(function(e){t({type:"LIKE_SCREAM",payload:e.data})}).catch(function(e){return console.log(e)})}},unlikeScream:function(e){return function(t){U.a.get("/scream/".concat(e,"/unlike")).then(function(e){t({type:"UNLIKE_SCREAM",payload:e.data})}).catch(function(e){return console.log(e)})}}},Qe=Object(v.b)(function(e){return{user:e.user}},qe)($e),Ze=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.comments,a=e.classes;return r.a.createElement(We.a,{container:!0},t.map(function(e,o){var l=e.body,c=e.createdAt,i=e.userImage,s=e.userHandle;return r.a.createElement(n.Fragment,{key:c},r.a.createElement(We.a,{item:!0,sm:12},r.a.createElement(We.a,{container:!0},r.a.createElement(We.a,{item:!0,sm:2},r.a.createElement("img",{src:i,alt:"comment",className:a.commentImage})),r.a.createElement(We.a,{item:!0,sm:9},r.a.createElement("div",{className:a.commentData},r.a.createElement(ye.a,{variant:"h5",component:p.b,to:"/users/".concat(s),color:"primary"},s),r.a.createElement(ye.a,{variant:"body2",color:"textSecondary"},ue()(c).format("h:mm a, MMMM DD YYYY")),r.a.createElement("hr",{className:a.invisibleSeparator}),r.a.createElement(ye.a,{variabnt:"body1"},l))))),o!==t.length-1&&r.a.createElement("hr",{className:a.visibleSeparator}))}))}}]),t}(n.Component),et=H()(function(e){return Object(j.a)({},e,{commentImage:{maxWidth:"100%",height:100,objectFit:"cover",borderRadius:"50%"},commentData:{marginLeft:20}})})(Ze),tt=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={body:"",errors:{}},a.handleChange=function(e){a.setState(Object(Y.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.submitComment(a.props.screamId,{body:a.state.body})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.UI.errors&&this.setState({errors:e.UI.errors}),e.UI.errors||e.UI.loading||this.setState({body:""})}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.authenticated,n=this.state.errors;return a?r.a.createElement(We.a,{item:!0,sm:12,style:{textAlign:"center"}},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(V.a,{name:"body",type:"text",label:"Comment on scream",error:!!n.comment,helperText:n.comment,value:this.state.body,onChange:this.handleChange,fullWidth:!0,className:t.textField}),r.a.createElement(K.a,{type:"submit",variant:"contained",color:"primary",className:t.button},"Submit")),r.a.createElement("hr",{className:t.visibleSeparator})):null}}]),t}(n.Component),at=Object(v.b)(function(e){return{UI:e.UI,authenticated:e.user.authenticated}},{submitComment:function(e,t){return function(a){U.a.post("/scream/".concat(e,"/comment"),t).then(function(e){a({type:"SUBMIT_COMMENT",payload:e.data}),a(ce())}).catch(function(e){a({type:"SET_ERRORS",payload:e.response.data})})}}})(H()(function(e){return Object(j.a)({},e)})(tt)),nt=a(161),rt=a.n(nt),ot=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1,oldPath:"",newPath:""},a.handleOpen=function(){var e=window.location.pathname,t=a.props,n=t.userHandle,r=t.screamId,o="/users/".concat(n,"/scream/").concat(r);e===o&&(e="/users/".concat(n)),window.history.pushState(null,null,o),a.setState({open:!0,oldPath:e,newPath:o}),a.props.getScream(a.props.screamId)},a.handleClose=function(){window.history.pushState(null,null,a.state.oldPath),a.setState({open:!1}),a.props.clearErrors()},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.openDialog&&this.handleOpen()}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.scream,o=a.screamId,l=a.body,c=a.createdAt,i=a.likeCount,s=a.commentCount,m=a.userImage,u=a.userHandle,d=a.comments,h=e.UI.loading?r.a.createElement("div",{className:t.spinnerDiv},r.a.createElement(ae.a,{size:200,thickness:2})):r.a.createElement(We.a,{container:!0,spacing:16},r.a.createElement(We.a,{item:!0,sm:5},r.a.createElement("img",{src:m,alt:"Profile",className:t.profileImage})),r.a.createElement(We.a,{item:!0,sm:7},r.a.createElement(ye.a,{component:p.b,color:"primary",variant:"h5",to:"/users/".concat(u)},"@",u),r.a.createElement("hr",{className:t.invisibleSeparator}),r.a.createElement(ye.a,{variant:"body2",color:"textSecondary"},ue()(c).format("h:mm a, MMMM DD YYYY")),r.a.createElement("hr",{className:t.invisibleSeparator}),r.a.createElement(ye.a,{variant:"body1"},l),r.a.createElement(Qe,{screamId:o}),r.a.createElement("span",null,i," likes"),r.a.createElement(W,{tip:"comments"},r.a.createElement(we.a,{color:"primary"})),r.a.createElement("span",null,s," Comments")),r.a.createElement("hr",{className:t.visibleSeparator}),r.a.createElement(at,{screamId:o}),r.a.createElement(et,{comments:d}));return r.a.createElement(n.Fragment,null,r.a.createElement(W,{onClick:this.handleOpen,tip:"Expand More",tipClassName:t.expandButton},r.a.createElement(rt.a,{color:"primary"})),r.a.createElement($.a,{open:this.state.open,onClose:this.handleClose,fullWidth:!0,maxWidth:"sm"},r.a.createElement(W,{tip:"Close",onClick:this.handleClose,tipClassName:t.closeButton},r.a.createElement(le.a,null)),r.a.createElement(Q.a,{className:t.dialogContent},h)))}}]),t}(n.Component),lt={getScream:function(e){return function(t){t({type:"LOADING_UI"}),U.a.get("/scream/".concat(e)).then(function(e){t({type:"SET_SCREAM",payload:e.data}),t({type:"STOP_LOADING_UI"})}).catch(function(e){return console.log(e)})}},clearErrors:ce},ct=Object(v.b)(function(e){return{scream:e.data.scream,UI:e.UI}},lt)(H()(function(e){return Object(j.a)({},e,{profileImage:{maxWidth:200,height:200,borderRadius:"50%",objectFit:"cover"},dialogContent:{padding:20},closeButton:{position:"absolute",left:"90%"},expandButton:{position:"absolute",left:"90%"},spinnerDiv:{textAlign:"center",marginTop:50,marginBottom:50}})})(ot)),it=a(77),st=a.n(it),mt=a(79),ut=a.n(mt),pt=a(78),dt=a.n(pt),ht=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){ue.a.extend(de.a);var e=this.props,t=e.classes,a=e.scream,n=a.body,o=a.createdAt,l=a.userImage,c=a.userHandle,i=a.screamId,s=a.likeCount,m=a.commentCount,u=e.user,d=u.authenticated,h=u.credentials.handle,E=d&&c===h?r.a.createElement(Je,{screamId:i}):null;return r.a.createElement(st.a,{className:t.card},r.a.createElement(dt.a,{image:l,title:"Profile image",className:t.image}),r.a.createElement(ut.a,{className:t.content},r.a.createElement(ye.a,{variant:"h5",component:p.b,to:"/users/".concat(c),color:"primary"},c),E,r.a.createElement(ye.a,{variant:"body2",color:"textSecondary"},ue()(o).fromNow()),r.a.createElement(ye.a,{variant:"body1"},n),r.a.createElement(Qe,{screamId:i}),r.a.createElement("span",null,s," Likes"),r.a.createElement(W,{tip:"comments"},r.a.createElement(we.a,{color:"primary"})),r.a.createElement("span",null,m," Comments"),r.a.createElement(ct,{screamId:i,userHandle:c,openDialog:this.props.openDialog})))}}]),t}(n.Component),Et=Object(v.b)(function(e){return{user:e.user}})(H()({card:{position:"relative",display:"flex",marginBottom:20},image:{minWidth:200},content:{padding:25,objectFit:"cover"}})(ht)),ft=a(80),bt=a.n(ft),gt=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={bio:"",website:"",location:"",open:!1},a.mapUserDetailsToState=function(e){a.setState({bio:e.bio?e.bio:"",website:e.website?e.website:"",location:e.location?e.location:""})},a.handleOpen=function(){a.setState({open:!0}),a.mapUserDetailsToState(a.props.credentials)},a.handleClose=function(){a.setState({open:!1})},a.handleChange=function(e){a.setState(Object(Y.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){var e={bio:a.state.bio,website:a.state.website,location:a.state.location};a.props.editUserDetails(e),a.handleClose()},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.credentials;this.mapUserDetailsToState(e)}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(n.Fragment,null,r.a.createElement(W,{tip:"Edit Details",onClick:this.handleOpen,btnClassName:e.button},r.a.createElement(bt.a,{color:"primary"})),r.a.createElement($.a,{open:this.state.open,onClose:this.handleClose,fullWidth:!0,maxWidth:"sm"},r.a.createElement(ee.a,null,"Edit your details"),r.a.createElement(Q.a,null,r.a.createElement("form",null,r.a.createElement(V.a,{name:"bio",tpye:"text",label:"Bio",multiline:!0,rows:"3",placeholder:"A short bio about yourself",className:e.textField,value:this.state.bio,onChange:this.handleChange,fullWidth:!0}),r.a.createElement(V.a,{name:"website",tpye:"text",label:"Website",placeholder:"Your personal/professinal website",className:e.textField,value:this.state.website,onChange:this.handleChange,fullWidth:!0}),r.a.createElement(V.a,{name:"location",tpye:"text",label:"Location",placeholder:"Where you live",className:e.textField,value:this.state.location,onChange:this.handleChange,fullWidth:!0}))),r.a.createElement(Ge.a,null,r.a.createElement(K.a,{onClick:this.handleClose,color:"primary"},"Cancel"),r.a.createElement(K.a,{onClick:this.handleSubmit,color:"primary"},"Save"))))}}]),t}(n.Component),yt=Object(v.b)(function(e){return{credentials:e.user.credentials}},{editUserDetails:function(e){return function(t){t({type:"LOADING_USER"}),U.a.post("/user",e).then(function(){t(D())}).catch(function(e){return console.log(e)})}}})(H()(function(e){return Object(j.a)({},e,{button:{float:"right"}})})(gt)),vt=a(81),Ot=a.n(vt),St=a(37),Ct=a.n(St),jt=a(56),It=a.n(jt),Nt=a(57),wt=a.n(Nt),kt=a(58),At=a.n(kt),xt=H()(function(e){return Object(j.a)({},e,{handle:{height:20,backgroundColor:e.palette.primary.main,width:60,margin:"0 auto 7px auto"},fullLine:{height:15,backgroundColor:"rgba(0,0,0,0.6)",width:"100%",marginBottom:10},halfLine:{height:15,backgroundColor:"rgba(0,0,0,0.6)",width:"50%",marginBottom:10}})})(function(e){var t=e.classes;return r.a.createElement(Ct.a,{className:t.paper},r.a.createElement("div",{className:t.profile},r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{src:Ot.a,alt:"profile",className:"profile-image"})),r.a.createElement("hr",null),r.a.createElement("div",{className:"profile-details"},r.a.createElement("div",{className:t.handle}),r.a.createElement("hr",null),r.a.createElement("div",{className:t.fullLine}),r.a.createElement("div",{className:t.fullLine}),r.a.createElement("hr",null),r.a.createElement(It.a,{color:"primary"})," ",r.a.createElement("span",null,"Location"),r.a.createElement("hr",null),r.a.createElement(wt.a,{color:"primary"})," https://website.com",r.a.createElement("hr",null),r.a.createElement(At.a,{color:"primary"})," Joined date")))}),Tt=a(82),Rt=a.n(Tt),Ut=a(162),_t=a.n(Ut),Dt=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleImageChange=function(e){var t=e.target.files[0],n=new FormData;n.append("image",t,t.name),a.props.uploadImage(n)},a.handleEditPicture=function(){document.getElementById("imageInput").click()},a.handleLogout=function(){a.props.logoutUser()},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.user,o=a.credentials,l=o.handle,c=o.createdAt,i=o.imageUrl,s=o.bio,m=o.website,u=o.location,d=a.loading,h=a.authenticated;return d?r.a.createElement(xt,null):h?r.a.createElement(Ct.a,{className:t.paper},r.a.createElement("div",{className:t.profile},r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{src:i,alt:"profile",className:"profile-image"}),r.a.createElement("input",{type:"file",id:"imageInput",hidden:"hidden",onChange:this.handleImageChange}),r.a.createElement(W,{tip:"Edit profile picture",onClick:this.handleEditPicture,btnClassName:"button"},r.a.createElement(bt.a,{color:"primary"}))),r.a.createElement("hr",null),r.a.createElement("div",{className:"profile-details"},r.a.createElement(Rt.a,{component:p.b,to:"/users/".concat(l),color:"primary",variant:"h5"},"@",l),r.a.createElement("hr",null),s&&r.a.createElement(ye.a,{variant:"body2"},s),r.a.createElement("hr",null),u&&r.a.createElement(n.Fragment,null,r.a.createElement(It.a,{color:"primary"})," ",r.a.createElement("span",null,u),r.a.createElement("hr",null)),m&&r.a.createElement(n.Fragment,null,r.a.createElement(wt.a,{color:"primary"}),r.a.createElement("a",{href:m,target:"_blank",rel:"noopener noreferrer"}," ",m),r.a.createElement("hr",null)),r.a.createElement(At.a,{color:"primary"})," ",r.a.createElement("span",null,"Joined ",ue()(c).format("MMM YYYY"))),r.a.createElement(W,{tip:"Logout",onClick:this.handleLogout},r.a.createElement(_t.a,{color:"primary"})),r.a.createElement(yt,null))):r.a.createElement(Ct.a,{className:t.paper},r.a.createElement(ye.a,{variant:"body2",align:"center"},"No profile found, please login again"),r.a.createElement("div",{className:t.buttons},r.a.createElement(K.a,{variant:"contained",color:"primary",component:p.b,to:"/login"},"Login"),r.a.createElement(K.a,{variant:"contained",color:"secondary",component:p.b,to:"/signup"},"Signup")))}}]),t}(n.Component),Lt={logoutUser:_,uploadImage:function(e){return function(t){t({type:"LOADING_USER"}),U.a.post("/user/image",e).then(function(){t(D())}).catch(function(e){return console.log(e)})}}},Mt=Object(v.b)(function(e){return{user:e.user}},Lt)(H()(function(e){return Object(j.a)({},e)})(Dt)),Ft=H()(function(e){return Object(j.a)({},e,{card:{display:"flex",marginBottom:20},cardContent:{width:"100%",flexDirection:"column",padding:25},cover:{minWidth:200,objectFit:"cover"},handle:{width:60,height:18,backgroundColor:e.palette.primary.main,marginBottom:7},date:{height:14,width:100,backgroundColor:"rgba(0,0,0, 0.3)",marginBottom:10},fullLine:{height:15,width:"90%",backgroundColor:"rgba(0,0,0, 0.6)",marginBottom:10},halfLine:{height:15,width:"50%",backgroundColor:"rgba(0,0,0, 0.6)",marginBottom:10}})})(function(e){var t=e.classes,a=Array.from({length:5}).map(function(e,a){return r.a.createElement(st.a,{className:t.card,key:a},r.a.createElement(dt.a,{className:t.cover,image:Ot.a}),r.a.createElement(ut.a,{className:t.cardContent},r.a.createElement("div",{className:t.handle}),r.a.createElement("div",{className:t.date}),r.a.createElement("div",{className:t.fullLine}),r.a.createElement("div",{className:t.fullLine}),r.a.createElement("div",{className:t.halfLine})))});return r.a.createElement(n.Fragment,null,a)}),Pt=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getScreams()}},{key:"render",value:function(){var e=this.props.data,t=e.screams,a=e.loading?r.a.createElement(Ft,null):t.map(function(e){return r.a.createElement(Et,{key:e.screamId,scream:e})});return r.a.createElement(We.a,{container:!0,spacing:16},r.a.createElement(We.a,{item:!0,sm:8,xs:12},a),r.a.createElement(We.a,{item:!0,sm:4,xs:12},r.a.createElement(Mt,null)))}}]),t}(n.Component),Bt=Object(v.b)(function(e){return{data:e.data}},{getScreams:function(){return function(e){e({type:"LOADING_DATA"}),U.a.get("/screams").then(function(t){e({type:"SET_SCREAMS",payload:t.data})}).catch(function(t){e({type:"SET_SCREAMS",payload:[]})})}}})(Pt),Wt=a(83),Yt=a.n(Wt),Gt=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleSubmit=function(t){t.preventDefault();var a={email:e.state.email,password:e.state.password};e.props.loginUser(a,e.props.history)},e.handleChange=function(t){e.setState(Object(Y.a)({},t.target.name,t.target.value))},e.state={email:"",password:"",errors:{}},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.UI.errors&&this.setState({errors:e.UI.errors})}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.UI.loading,n=this.state.errors;return r.a.createElement(We.a,{container:!0,className:t.form},r.a.createElement(We.a,{item:!0,sm:!0}),r.a.createElement(We.a,{item:!0,sm:!0},r.a.createElement("img",{src:Yt.a,alt:"monkey",className:t.image}),r.a.createElement(ye.a,{variant:"h2",className:t.pageTitle},"Login"),r.a.createElement("form",{noValidate:!0,onSubmit:this.handleSubmit},r.a.createElement(V.a,{id:"email",name:"email",type:"email",label:"Email",className:t.textField,helperText:n.email,error:!!n.email,value:this.state.email,onChange:this.handleChange,fullWidth:!0}),r.a.createElement(V.a,{id:"password",name:"password",type:"password",label:"Password",className:t.textField,helperText:n.password,error:!!n.password,value:this.state.password,onChange:this.handleChange,fullWidth:!0}),n.general&&r.a.createElement(ye.a,{variant:"body2",className:t.customError},n.general),r.a.createElement(K.a,{type:"submit",variant:"contained",color:"primary",className:t.button,disabled:a},"Login",a&&r.a.createElement(ae.a,{size:30,className:t.progress})),r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement("small",null,"Dont have an account ? Sign up ",r.a.createElement(p.b,{to:"/signup"},"here")))),r.a.createElement(We.a,{item:!0,sm:!0}))}}]),t}(n.Component),Ht={loginUser:function(e,t){return function(a){a({type:"LOADING_UI"}),U.a.post("/login",e).then(function(e){L(e.data.token),a(D()),a({type:"CLEAR_ERRORS"}),t.push("/")}).catch(function(e){a({type:"SET_ERRORS",payload:e.response.data})})}}},zt=Object(v.b)(function(e){return{user:e.user,UI:e.UI}},Ht)(H()(function(e){return Object(j.a)({},e)})(Gt)),Kt=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleSubmit=function(t){t.preventDefault(),e.setState({loading:!0});var a={email:e.state.email,password:e.state.password,confirmPassword:e.state.confirmPassword,handle:e.state.handle};e.props.signupUser(a,e.props.history)},e.handleChange=function(t){e.setState(Object(Y.a)({},t.target.name,t.target.value))},e.state={email:"",password:"",confirmPassword:"",handle:"",errors:{}},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.UI.errors&&this.setState({errors:e.UI.errors})}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.UI.loading,n=this.state.errors;return r.a.createElement(We.a,{container:!0,className:t.form},r.a.createElement(We.a,{item:!0,sm:!0}),r.a.createElement(We.a,{item:!0,sm:!0},r.a.createElement("img",{src:Yt.a,alt:"monkey",className:t.image}),r.a.createElement(ye.a,{variant:"h2",className:t.pageTitle},"SignUp"),r.a.createElement("form",{noValidate:!0,onSubmit:this.handleSubmit},r.a.createElement(V.a,{id:"email",name:"email",type:"email",label:"Email",className:t.textField,helperText:n.email,error:!!n.email,value:this.state.email,onChange:this.handleChange,fullWidth:!0}),r.a.createElement(V.a,{id:"password",name:"password",type:"password",label:"Password",className:t.textField,helperText:n.password,error:!!n.password,value:this.state.password,onChange:this.handleChange,fullWidth:!0}),r.a.createElement(V.a,{id:"confirmPassword",name:"confirmPassword",type:"password",label:"Confirm Password",className:t.textField,helperText:n.confirmPassword,error:!!n.confirmPassword,value:this.state.confirmPassword,onChange:this.handleChange,fullWidth:!0}),r.a.createElement(V.a,{id:"handle",name:"handle",type:"text",label:"Handle",className:t.textField,helperText:n.handle,error:!!n.handle,value:this.state.handle,onChange:this.handleChange,fullWidth:!0}),n.general&&r.a.createElement(ye.a,{variant:"body2",className:t.customError},n.general),r.a.createElement(K.a,{type:"submit",variant:"contained",color:"primary",className:t.button,disabled:a},"SignUp",a&&r.a.createElement(ae.a,{size:30,className:t.progress})),r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement("small",null,"Already have an account ? Login ",r.a.createElement(p.b,{to:"/login"},"here")))),r.a.createElement(We.a,{item:!0,sm:!0}))}}]),t}(n.Component),Jt=Object(v.b)(function(e){return{user:e.user,UI:e.UI}},{signupUser:function(e,t){return function(a){a({type:"LOADING_UI"}),U.a.post("/signup",e).then(function(e){L(e.data.token),a(D()),a({type:"CLEAR_ERRORS"}),t.push("/")}).catch(function(e){a({type:"SET_ERRORS",payload:e.response.data})})}}})(H()(function(e){return Object(j.a)({},e)})(Kt)),Vt=H()(function(e){return Object(j.a)({},e)})(function(e){var t=e.classes,a=e.profile,o=a.handle,l=a.createdAt,c=a.imageUrl,i=a.bio,s=a.website,m=a.location;return r.a.createElement(Ct.a,{className:t.paper},r.a.createElement("div",{className:t.profile},r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{src:c,alt:"profile",className:"profile-image"})),r.a.createElement("hr",null),r.a.createElement("div",{className:"profile-details"},r.a.createElement(Rt.a,{component:p.b,to:"/users/".concat(o),color:"primary",variant:"h5"},"@",o),r.a.createElement("hr",null),i&&r.a.createElement(ye.a,{variant:"body2"},i),r.a.createElement("hr",null),m&&r.a.createElement(n.Fragment,null,r.a.createElement(It.a,{color:"primary"})," ",r.a.createElement("span",null,m),r.a.createElement("hr",null)),s&&r.a.createElement(n.Fragment,null,r.a.createElement(wt.a,{color:"primary"}),r.a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer"}," ",s),r.a.createElement("hr",null)),r.a.createElement(At.a,{color:"primary"})," ",r.a.createElement("span",null,"Joined ",ue()(l).format("MMM YYYY")))))}),Xt=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={profile:null,screamIdParam:null},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.handle,a=this.props.match.params.screamId;a&&this.setState({screamIdParam:a}),this.props.getUserData(t),U.a.get("/user/".concat(t)).then(function(t){e.setState({profile:t.data.user})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.props.data,t=e.screams,a=e.loading,n=this.state.screamIdParam,o=a?r.a.createElement(Ft,null):null===t?r.a.createElement("p",null,"No screams from this user"):n?t.map(function(e){return e.screamId!==n?r.a.createElement(Et,{key:e.screamId,scream:e}):r.a.createElement(Et,{key:e.screamId,scream:e,openDialog:!0})}):t.map(function(e){return r.a.createElement(Et,{key:e.screamId,scream:e})});return r.a.createElement(We.a,{container:!0,spacing:16},r.a.createElement(We.a,{item:!0,sm:8,xs:12},o),r.a.createElement(We.a,{item:!0,sm:4,xs:12},null===this.state.profile?r.a.createElement(xt,null):r.a.createElement(Vt,{profile:this.state.profile})))}}]),t}(n.Component),$t=Object(v.b)(function(e){return{data:e.data}},{getUserData:function(e){return function(t){t({type:"LOADING_DATA"}),U.a.get("/user/".concat(e)).then(function(e){t({type:"SET_SCREAMS",payload:e.data.screams})}).catch(function(){t({type:"SET_SCREAMS",payload:null})})}}})(Xt),qt=b()({palette:{primary:{light:"#33c9dc",main:"#00bcd4",dark:"#008394",contrastText:"#fff"},secondary:{light:"#ff6333",main:"#ff3d00",dark:"#b22a00",contrastText:"#fff"}},typography:{useNextVariants:!0},form:{textAlign:"center"},image:{margin:"20px auto 20px auto"},pageTitle:{margin:"10px auto 10px auto"},textField:{margin:"10px auto 10px auto"},button:{marginTop:20,position:"relative"},customError:{color:"red",fontSize:"0.8rem",marginTop:10},progress:{position:"absolute"},invisibleSeparator:{border:"none",margin:4},visibleSeparator:{width:"100%",borderBottom:"1px solid rgba(0,0,0,0.1)",marginBottom:20},paper:{padding:20},profile:{"& .image-wrapper":{textAlign:"center",position:"relative","& button":{position:"absolute",top:"80%",left:"70%"}},"& .profile-image":{width:200,height:200,objectFit:"cover",maxWidth:"100%",borderRadius:"50%"},"& .profile-details":{textAlign:"center","& span, svg":{verticalAlign:"middle"},"& a":{color:"#00bcd4"}},"& hr":{border:"none",margin:"0 0 10px 0"},"& svg.button":{"&:hover":{cursor:"pointer"}}},buttons:{textAlign:"center","& a":{margin:"20px 10px"}}});U.a.defaults.baseURL=" https://asia-east2-socialapp-32fb9.cloudfunctions.net/api";var Qt=localStorage.FBIdToken;Qt&&(1e3*y()(Qt).exp<Date.now()?(T.dispatch(_()),window.location.href="/login"):(T.dispatch({type:"SET_AUTHENTICATED"}),U.a.defaults.headers.common.Authorization=Qt,T.dispatch(D())));var Zt=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,{theme:qt},r.a.createElement(v.a,{store:T},r.a.createElement(p.a,null,r.a.createElement(Me,null),r.a.createElement("div",{className:"container"},r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",component:Bt}),r.a.createElement(Pe,{exact:!0,path:"/login",component:zt}),r.a.createElement(Pe,{exact:!0,path:"/signup",component:Jt}),r.a.createElement(d.b,{exact:!0,path:"/users/:handle",component:$t}),r.a.createElement(d.b,{exact:!0,path:"/users/:handle/scream/:screamId",component:$t}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Zt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},81:function(e,t,a){e.exports=a.p+"static/media/no-img.6732bd42.png"},83:function(e,t,a){e.exports=a.p+"static/media/icon.049e543b.png"}},[[163,1,2]]]);
//# sourceMappingURL=main.78edc873.chunk.js.map