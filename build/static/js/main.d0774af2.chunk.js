(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{93:function(t,e,a){},97:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(16),s=a.n(o),i=(a(31),a(55)),c=a(4),l=a(20),h=a(21),p=a(24),d=a(23),u=a(7),j=a(33),m=a.n(j),x=a(52),b=a(36),f=a(22),g=a.n(f),O=a(25),v=a(27),y=a(2),C=function(t){var e=Object(n.useState)({title:"",rater:"",type:"textlevel",text1:"",text2:"",text3:"",text4:"",text5:""}),a=Object(v.a)(e,2),r=a[0],o=a[1];function s(t){var e=t.target,a=e.name,n=e.value;o((function(t){return Object(O.a)(Object(O.a)({},t),{},Object(u.a)({},a,n))}))}return Object(y.jsx)("div",{className:"container",style:{marginTop:"5%",fontSize:"80%"},children:Object(y.jsxs)("form",{style:{letterSpacing:"1px"},children:[Object(y.jsx)("p",{style:{marginTop:"3%",fontWeight:"bold"},children:"How many main ideas does this text discuss?"}),Object(y.jsx)("div",{className:"form-group",children:Object(y.jsx)("input",{onChange:s,name:"text1",value:r.text1,autoComplete:"off",placeholder:"Enter number",className:"form-control",style:{marginTop:"2%",width:"20%"}})}),Object(y.jsx)("p",{style:{fontWeight:"bold"},children:"How many of the main ideas of the text are forecast in the introduction? (If there is no introduction, write N/A)"}),Object(y.jsx)("div",{className:"form-group",children:Object(y.jsx)("input",{onChange:s,name:"text2",value:r.text2,autoComplete:"off",placeholder:"Enter number",className:"form-control",style:{marginTop:"2%",width:"20%"}})}),Object(y.jsx)("p",{style:{fontWeight:"bold"},children:"How many of the main ideas of the text are summarized in the conclusion? (If there is no conclusion, write N/A.)"}),Object(y.jsx)("div",{className:"form-group",children:Object(y.jsx)("input",{onChange:s,name:"text3",value:r.text3,autoComplete:"off",placeholder:"Enter number",className:"form-control",style:{marginTop:"2%",width:"20%"}})}),Object(y.jsx)("p",{style:{fontWeight:"bold"},children:"On a scale of 1 to 4, how well does the essay address the topic of the prompt?"}),Object(y.jsx)("div",{className:"form-group",children:Object(y.jsx)("input",{onChange:s,name:"text4",value:r.text4,autoComplete:"off",placeholder:"Enter number",className:"form-control",style:{marginTop:"2%",width:"20%"}})}),Object(y.jsx)("p",{style:{fontWeight:"bold"},children:"On a scale of 1 to 4, rate the strength of the thesis statement. (Use N/A if there is no thesis statement.)"}),Object(y.jsx)("div",{className:"form-group",children:Object(y.jsx)("input",{onChange:s,name:"text5",value:r.text5,autoComplete:"off",placeholder:"Enter number",className:"form-control",style:{marginTop:"2%",width:"20%"}})}),Object(y.jsx)("button",{style:{marginLeft:"45%"},onClick:function(e){var a;e.preventDefault();var n={title:t.title,rater:t.rater,type:"textlevel",text1:r.text1,text2:r.text2,text3:r.text3,text4:r.text,text5:r.text5};g.a.post("https://textratingtool.herokuapp.com/create",n),o((a={title:"",rater:t.rater},Object(u.a)(a,"rater",""),Object(u.a)(a,"text1",""),Object(u.a)(a,"text2",""),Object(u.a)(a,"text3",""),Object(u.a)(a,"text4",""),Object(u.a)(a,"text5",""),a))},className:"btn btn-lg btn-info",children:"DONE"})]})})},w=a(53),N=a.n(w),S=a(54),k=a.n(S);var T=function(t){var e=Object(n.useState)(1),a=Object(v.a)(e,2),r=a[0],o=a[1],s=Object(n.useState)({selectOptions:[],title:"",type:"paragraphlevel",rater:"",paragraph:r,currentparagraph:"",text1:"",text2:"",text3:"",text4:"",text5:""}),i=Object(v.a)(s,2),c=i[0],l=i[1];function h(t){var e=t.target,a=e.name,n=e.value;l((function(t){return Object(O.a)(Object(O.a)({},t),{},Object(u.a)({},a,n))}))}var p=t.text.split(/\r?\n/).filter((function(t){return t}))[r-1];return Object(y.jsx)("div",{className:"container",style:{marginTop:"5%",fontSize:"80%"},children:Object(y.jsxs)("form",{style:{letterSpacing:"1px"},children:[Object(y.jsx)("p",{style:{padding:"1%",borderStyle:"solid",backgroundColor:"#252d4a",fontSize:"16px",fontWeight:"500",color:"white",borderColor:"darkgray"},children:p}),Object(y.jsxs)("h3",{children:[Object(y.jsx)(N.a,{onClick:function(){r>1&&o((function(t){return t-1}))},style:{fontSize:"200%",cursor:"pointer"}}),"paragraph ",r,"/",t.paragraphnum,Object(y.jsx)(k.a,{onClick:function(){r<t.paragraphnum&&o((function(t){return t+1}))},style:{fontSize:"200%",cursor:"pointer"}})]}),Object(y.jsx)("p",{style:{marginTop:"3%",fontWeight:"bold"},children:'How many main ideas are discussed in this paragraph? See definition of a "main idea" above. To distinguish between "main ideas" and simply supporting ideas, consider how main ideas are broad; supporting ideas can be subsumed under a broader main idea category. Paragraphs may provide clues such as transitions to indicate separate ideas.'}),Object(y.jsx)("div",{className:"form-group",children:Object(y.jsx)("input",{onChange:h,name:"text1",value:c.text1,autoComplete:"off",placeholder:"Enter number",className:"form-control",style:{marginTop:"2%",width:"20%"}})}),Object(y.jsx)("p",{style:{fontWeight:"bold"},children:"How well does this paragraph develop from / fit with the thesis statement (if applicable) and prompt? (Scale of 1 to 4)"}),Object(y.jsx)("div",{className:"form-group",children:Object(y.jsx)("input",{onChange:h,name:"text2",value:c.text2,autoComplete:"off",placeholder:"Enter number",className:"form-control",style:{marginTop:"2%",width:"20%"}})}),Object(y.jsx)("p",{style:{fontWeight:"bold"},children:'How well does this paragraph connect to/transition from/follow the previous paragraph? (Scale of 1 to 4) Write "N/A" if there is only one paragraph in the whole text.'}),Object(y.jsx)("div",{className:"form-group",children:Object(y.jsx)("input",{onChange:h,name:"text3",value:c.text3,autoComplete:"off",placeholder:"Enter number",className:"form-control",style:{marginTop:"2%",width:"20%"}})}),Object(y.jsx)("p",{style:{fontWeight:"bold"},children:"On a scale of 1 to 4, how well does this paragraph evidence the claim made in the topic sentence? Write N/A if there is no topic sentence."}),Object(y.jsx)("div",{className:"form-group",children:Object(y.jsx)("input",{onChange:h,name:"text4",value:c.text4,autoComplete:"off",placeholder:"Enter number",className:"form-control",style:{marginTop:"2%",width:"20%"}})}),Object(y.jsx)("p",{style:{fontWeight:"bold"},children:"On a scale of 1 to 4, how strong is this paragraph's topic sentence? Write N/A if there is no topic sentence."}),Object(y.jsx)("div",{className:"form-group",children:Object(y.jsx)("input",{onChange:h,name:"text5",value:c.text5,autoComplete:"off",placeholder:"Enter number",className:"form-control",style:{marginTop:"2%",width:"20%"}})}),Object(y.jsx)("button",{style:{marginLeft:"45%"},onClick:function(e){e.preventDefault();var a={title:t.title,type:"paragraphlevel",paragraph:r,rater:t.rater,text1:c.text1,text2:c.text2,text3:c.text3,text4:c.text4,text5:c.text5};g.a.post("https://textratingtool.herokuapp.com/create",a),r===t.paragraphnum&&o(1),l({title:"",paragraph:"",rater:t.rater,text1:"",text2:"",text3:"",text4:"",text5:""})},className:"btn btn-lg btn-info",children:"DONE"})]})})},W=function(t){Object(p.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).handleCategoryChange=function(t){n.setState({category:t.target.value})},n.state={selectOptions:[],id:"",title:"",text:"",paragraphnum:"",category:"",rater:""},n}return Object(h.a)(a,[{key:"componentWillReceiveProps",value:function(t){this.setState({rater:t.rater})}},{key:"getOptions",value:function(){var t=Object(x.a)(m.a.mark((function t(){var e,a,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://textratingtool.herokuapp.com/rating");case 2:e=t.sent,a=e.data,n=a.map((function(t){return{value:t._id,label:t.title,content:t.text,paragraphnum:t.paragraphnum}})),this.setState({selectOptions:n});case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"handleChange",value:function(t){this.setState({id:t.value,title:t.label,text:t.content,paragraphnum:t.paragraphnum,rater:t.rater})}},{key:"componentDidMount",value:function(){this.getOptions()}},{key:"render",value:function(){return console.log(this.state.selectOptions),this.state.id?Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"col",children:Object(y.jsxs)("div",{className:"box",style:{backgroundColor:"white"},children:[Object(y.jsx)(b.a,{placeholder:"Please choose text",options:this.state.selectOptions,onChange:this.handleChange.bind(this)}),Object(y.jsx)("h3",{style:{marginTop:"5%"},children:Object(y.jsx)("strong",{children:this.state.title})}),Object(y.jsx)("p",{style:{marginTop:"5%",whiteSpace:"pre-line",fontSize:"80%"},children:this.state.text})]})}),Object(y.jsx)("div",{className:"col",children:Object(y.jsxs)("div",{className:"box",style:{backgroundColor:"white"},children:[Object(y.jsxs)("select",{name:"category",onChange:this.handleCategoryChange.bind(this),children:[Object(y.jsx)("option",{id:"0",children:"Paragraph level"}),Object(y.jsx)("option",{id:"1",children:"Text level"})]}),Object(y.jsx)("p",{children:"Paragraph level"===this.state.category&&Object(y.jsx)(T,{title:this.state.title,text:this.state.text,rater:this.state.rater,paragraphnum:this.state.paragraphnum})}),Object(y.jsx)("p",{children:"Text level"===this.state.category&&Object(y.jsx)(C,{title:this.state.title,rater:this.state.rater,paragraphnum:this.state.paragraphnum})})]})})]})}):Object(y.jsx)("div",{style:{width:"20%",marginLeft:"40%",marginTop:"5%"},children:Object(y.jsx)(b.a,{placeholder:"Please choose text",options:this.state.selectOptions,onChange:this.handleChange.bind(this)})})}}]),a}(n.Component),E=function(t){Object(p.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).handleChange=function(t){n.setState({rater:t.target.value})},n.state={rater:""},n}return Object(h.a)(a,[{key:"render",value:function(){return Object(y.jsxs)("div",{style:{marginTop:"1%"},children:[Object(y.jsx)("form",{onSubmit:this.handleSubmit,children:Object(y.jsx)("label",{style:{marginLeft:"1.3%"},children:Object(y.jsx)("input",Object(u.a)({type:"text",name:"rater",placeholder:"rater name",value:this.state.rater,onChange:this.handleChange.bind(this)},"value",this.state.value))})}),Object(y.jsx)(W,{rater:this.state.rater})]})}}]),a}(r.a.Component),z=(a(93),function(t){Object(p.a)(a,t);var e=Object(d.a)(a);function a(){var t;return Object(l.a)(this,a),(t=e.call(this)).state={title:"",text:"",paragraphnum:"",rater:""},t}return Object(h.a)(a,[{key:"render",value:function(){return Object(y.jsx)("div",{children:Object(y.jsx)(E,{})})}}]),a}(n.Component));var A=function(){return Object(y.jsx)(i.a,{children:Object(y.jsx)(c.a,{exact:!0,path:"/",children:Object(y.jsx)(z,{})})})};s.a.render(Object(y.jsx)(A,{}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.d0774af2.chunk.js.map