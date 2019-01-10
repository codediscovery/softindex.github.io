(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,a){e.exports=a(252)},252:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(16),s=a.n(l),o=a(20),c=a(21),i=a(23),u=a(22),m=a(24),d=a(19),h=a(93),f=a.n(h),p=Object(d.createMuiTheme)({palette:{type:"dark",primary:{light:"#2196f3",main:"#2196f3",dark:"#2196f3"},secondary:{light:"#EC205A",main:"#EC205A",dark:"#EC205A"}},typography:{useNextVariants:!0}});var E=function(e){return function(t){return n.a.createElement(d.MuiThemeProvider,{theme:p},n.a.createElement(f.a,null),n.a.createElement(e,t))}},b=function(e){var t=e.children;return n.a.createElement(r.Fragment,null,n.a.createElement("div",{className:"header"},n.a.createElement("span",{className:"header__title"},"SoftIndex form")),t)},v=a(41),N=a(34),g=a.n(N),y=a(97),O=a.n(y),_=a(94),S=a.n(_),j=localStorage,k=function(e){return j.setItem("users",e)},w=a(106),C=a(95),U=a.n(C),B=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={firstName:"",lastName:"",phone:"+38",age:"",users:[]},a.pushUser=function(){var e={id:S()(),firstName:a.state.firstName,lastName:a.state.lastName,phone:a.state.phone,age:parseFloat(a.state.age)},t=[].concat(Object(v.a)(a.state.users),[e]);a.props.setUsers(t),a.setState({users:t});var r=JSON.stringify(t);k(r),a.setState({firstName:"",lastName:"",phone:"",age:""})},a.isValidPhone=function(e){var t=Object(w.a)("Phone: ".concat(e," "),"UA");return!!t&&!0===t.isValid()},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.users!==e.users&&this.setState({users:this.props.users})}},{key:"render",value:function(){var e=this,t=this.state,a=t.firstName,r=t.lastName,l=t.phone,s=t.age,o=a.length>0,c=r.length>0,i=this.isValidPhone(l),u=s.length>0,m=o&&c&&i&&u;return n.a.createElement("div",{className:"container form"},n.a.createElement("div",{className:"form__title"},"Please , fill the form and click ",n.a.createElement("span",null,"Save button")),n.a.createElement("div",{className:"input-wrapper"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-md-6"},n.a.createElement(g.a,{fullWidth:!0,error:this.state.firstNameError,label:this.state.firstNameError?"First name is required field":"First name",variant:"outlined",color:"primary",margin:"normal",value:a,onBlur:function(){return o?null:e.setState({firstNameError:!0})},onChange:function(t){var a=t.target.value;return e.setState({firstName:a,firstNameError:!1})}})),n.a.createElement("div",{className:"col-12 col-md-6"},n.a.createElement(g.a,{fullWidth:!0,error:this.state.lastNameError,label:this.state.lastNameError?"Last name is required field":"Last name",variant:"outlined",color:"primary",margin:"normal",value:r,onChange:function(t){var a=t.target.value;return e.setState({lastName:a,lastNameError:!1})},onBlur:function(){return c?null:e.setState({lastNameError:!0})}})),n.a.createElement("div",{className:"col-12 col-md-6"},n.a.createElement(U.a,{mask:"+38(999) 999 99 99",value:l,onChange:function(t){var a=t.target.value;return e.setState({phone:a,phoneError:!1})},onBlur:function(){return i?null:e.setState({phoneError:!0})}},function(){return n.a.createElement(g.a,{fullWidth:!0,error:e.state.phoneError,label:e.state.phoneError?"Incorrect phone number":"Phone",variant:"outlined",color:"primary",margin:"normal"})})),n.a.createElement("div",{className:"col-12 col-md-6"},n.a.createElement(g.a,{fullWidth:!0,error:this.state.ageError,label:this.state.ageError?"Age is required field":"Age",variant:"outlined",color:"primary",type:"number",margin:"normal",value:s,onChange:function(t){var a=t.target.value;return e.setState({age:a,ageError:!1})},onBlur:function(){return u?null:e.setState({ageError:!0})}}))),n.a.createElement(O.a,{className:"form__submit-btn",disabled:!m,color:"secondary",variant:"contained",onClick:this.pushUser},"Save")))}}]),t}(r.Component),A=a(98),x=a.n(A),P=a(102),F=a.n(P),W=a(103),I=a.n(W),J=a(101),D=a.n(J),V=a(100),q=a.n(V),L=a(99),M=a.n(L),T=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={orderedBy:"firstName",order:"asc"},a.sortByOrder=function(e){a.setState({orderedBy:e,order:"asc"===a.state.order?"desc":"asc"})},a.pushUserForDelete=function(e){a.setState({selected:[].concat(Object(v.a)(a.state.selected),[e])})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.orderedBy,r=t.order,l=this.props.users,s=function(e){return"asc"===e?n.a.createElement(M.a,null):n.a.createElement(q.a,null)};return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"table"},n.a.createElement("div",{className:"table-wrap"},n.a.createElement("div",{className:"table-header"},n.a.createElement("ul",{className:"table-header__list"},n.a.createElement("li",null,n.a.createElement("span",{className:"table-header__button",onClick:function(){return e.sortByOrder("firstName")}},"firstName"===a&&s(r),n.a.createElement("span",{className:"table-header__button--text"},"First name"))),n.a.createElement("li",null,n.a.createElement("span",{className:"table-header__button",onClick:function(){return e.sortByOrder("lastName")}},"lastName"===a&&s(r),n.a.createElement("span",{className:"table-header__button--text"},"Last name"))),n.a.createElement("li",null,n.a.createElement("span",{className:"table-header__button",onClick:function(){return e.sortByOrder("phone")}},"phone"===a&&s(r),n.a.createElement("span",{className:"table-header__button--text"},"Phone"))),n.a.createElement("li",null,n.a.createElement("span",{className:"table-header__button",onClick:function(){return e.sortByOrder("age")}},"age"===a&&s(r),n.a.createElement("span",{className:"table-header__button--text"},"age"))),n.a.createElement("li",null))),n.a.createElement("div",{className:"table-body"},0===l.length&&n.a.createElement("div",{className:"table-body__empty"},n.a.createElement(D.a,null),n.a.createElement("span",null,"Add your first user!")),function(e,t){return x()(l,[e],[t])}(a,r).map(function(t,a){return n.a.createElement(z,{user:t,key:a,deleteUser:e.props.deleteUser})})))))}}]),t}(r.Component),$=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={checked:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.user,a=e.classes,r=e.deleteUser;return n.a.createElement("ul",{className:"table-body__list"},n.a.createElement("li",null,t.firstName),n.a.createElement("li",null,t.lastName),n.a.createElement("li",null,t.phone),n.a.createElement("li",null,t.age),n.a.createElement("li",null,n.a.createElement(F.a,{className:a.button,"aria-label":"Delete",color:"secondary",onClick:function(){return r([t])}},n.a.createElement(I.a,null))))}}]),t}(r.Component),z=Object(d.withStyles)(function(e){return{button:{margin:e.spacing.unit},input:{display:"none"}}})($),G=T,H=a(104),K=a.n(H),Q=a(105),R=a.n(Q),X=function(){return n.a.createElement(R.a,{disableShrink:!0})},Y=E(function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={users:null,loading:!0},a.setUsers=function(e){a.setState({users:e})},a.deleteUser=function(e){var t=a.state.users,r=K()(t,e);a.setState({users:r});var n=JSON.stringify(r);k(n)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=j.getItem("users"),a=JSON.parse(t);setTimeout(function(){t?e.setState({users:a,loading:!1}):e.setState({users:[],loading:!1})},500)}},{key:"render",value:function(){var e=this.state,t=e.users,a=e.loading;return n.a.createElement(b,null,n.a.createElement(B,{setUsers:this.setUsers,users:t}),a&&n.a.createElement("div",{className:"loading"},n.a.createElement(X,null)),t&&n.a.createElement(G,{users:t,deleteUser:this.deleteUser}))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[107,2,1]]]);
//# sourceMappingURL=main.df96ea4d.chunk.js.map