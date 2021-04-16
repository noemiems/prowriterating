(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{61:function(e,t,a){},96:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(17),o=a.n(s),i=(a(32),a(27)),c=a(4),l=(a(61),a(2));var h=function(){return Object(l.jsxs)("nav",{className:"navbar container",children:[Object(l.jsx)("h4",{children:Object(l.jsx)(i.b,{className:"link",to:"/",children:"Home"})}),Object(l.jsx)("h4",{children:Object(l.jsx)(i.b,{className:"link",to:"/rating",children:"Rating"})}),Object(l.jsx)("h4",{children:Object(l.jsx)(i.b,{className:"link",to:"/upload",children:"Upload"})})]})};var p=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Home"}),Object(l.jsx)("p",{children:"This is the home page."})]})},j=a(5),d=a(16),u=a(21),m=a(18),x=a.n(m);var b=function(){var e=Object(n.useState)({title:"",text:"",speaker:"",paragraphnum:""}),t=Object(u.a)(e,2),a=t[0],r=t[1];function s(e){var t=e.target,a=t.name,n=t.value;r((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(j.a)({},a,n))}))}return Object(l.jsxs)("div",{className:"container",style:{marginTop:"5%",textAlign:"center"},children:[Object(l.jsx)("h1",{children:"Upload text"}),Object(l.jsxs)("form",{children:[Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{onChange:s,name:"title",value:a.title,autoComplete:"off",placeholder:"Enter file title",className:"form-control",style:{marginTop:"2%",width:"20%",marginLeft:"40%"}})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{onChange:s,name:"paragraphnum",value:a.paragraphnum,autoComplete:"off",placeholder:"Enter number of paragraphs",className:"form-control",style:{marginTop:"2%",width:"20%",marginLeft:"40%"}})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{onChange:s,name:"speaker",value:a.speaker,autoComplete:"off",placeholder:"Enter speaker language",className:"form-control",style:{marginTop:"2%",width:"20%",marginLeft:"40%"}})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("textarea",{onChange:s,placeholder:"Enter text, please skip line between paragraphs",autoComplete:"off",name:"text",value:a.text,className:"form-control",style:{marginTop:"2%",marginLeft:"25%",width:"50%",height:"500px",resize:"none"}})}),Object(l.jsx)("button",{onClick:function(e){e.preventDefault();var t={title:a.title,text:a.text,speaker:a.speaker,paragraphnum:a.paragraphnum};x.a.post("https://textratingtool.herokuapp.com/create",t),r({title:"",text:"",speaker:"",paragraphnum:""})},style:{backgroundColor:"#252d4a"},className:"btn btn-lg btn-info",children:"UPLOAD"})]})]})},g=a(23),f=a(24),O=a(26),v=a(25),y=a(36),C=a.n(y),N=a(53),w=a(37),k=function(e){var t=Object(n.useState)({title:"",rater:"",type:"textlevel",text1:"",text2:"",text3:"",text4:"",text5:""}),a=Object(u.a)(t,2),r=a[0],s=a[1];function o(e){var t=e.target,a=t.name,n=t.value;s((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(j.a)({},a,n))}))}return Object(l.jsx)("div",{className:"container",style:{marginTop:"5%",fontSize:"80%"},children:Object(l.jsxs)("form",{style:{letterSpacing:"1px"},children:[Object(l.jsx)("p",{style:{marginTop:"3%",fontWeight:"bold"},children:"How many main ideas does this text discuss?"}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{onChange:o,name:"text1",value:r.text1,autoComplete:"off",placeholder:"Enter number",className:"form-control",style:{marginTop:"2%",width:"20%"}})}),Object(l.jsx)("p",{style:{fontWeight:"bold"},children:"How many of the main ideas of the text are forecast in the introduction? (If there is no introduction, write N/A)"}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{onChange:o,name:"text2",value:r.text2,autoComplete:"off",placeholder:"Enter number",className:"form-control",style:{marginTop:"2%",width:"20%"}})}),Object(l.jsx)("p",{style:{fontWeight:"bold"},children:"How many of the main ideas of the text are summarized in the conclusion? (If there is no conclusion, write N/A.)"}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{onChange:o,name:"text3",value:r.text3,autoComplete:"off",placeholder:"Enter number",className:"form-control",style:{marginTop:"2%",width:"20%"}})}),Object(l.jsx)("p",{style:{fontWeight:"bold"},children:"On a scale of 1 to 4, how well does the essay address the topic of the prompt?"}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{onChange:o,name:"text4",value:r.text4,autoComplete:"off",placeholder:"Enter number",className:"form-control",style:{marginTop:"2%",width:"20%"}})}),Object(l.jsx)("p",{style:{fontWeight:"bold"},children:"On a scale of 1 to 4, rate the strength of the thesis statement. (Use N/A if there is no thesis statement.)"}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{onChange:o,name:"text5",value:r.text5,autoComplete:"off",placeholder:"Enter number",className:"form-control",style:{marginTop:"2%",width:"20%"}})}),Object(l.jsx)("button",{style:{marginLeft:"45%"},onClick:function(t){var a;t.preventDefault();var n={title:e.title,rater:e.rater,type:"textlevel",text1:r.text1,text2:r.text2,text3:r.text3,text4:r.text,text5:r.text5};x.a.post("https://textratingtool.herokuapp.com/create",n),s((a={title:"",rater:e.rater},Object(j.a)(a,"rater",""),Object(j.a)(a,"text1",""),Object(j.a)(a,"text2",""),Object(j.a)(a,"text3",""),Object(j.a)(a,"text4",""),Object(j.a)(a,"text5",""),a))},className:"btn btn-lg btn-info",children:"DONE"})]})})},T=a(54),S=a.n(T),E=a(55),W=a.n(E);var H=function(e){var t=Object(n.useState)(1),a=Object(u.a)(t,2),r=a[0],s=a[1],o=Object(n.useState)({selectOptions:[],title:"",type:"paragraphlevel",rater:"",paragraph:r,currentparagraph:"",text1:"",text2:"",text3:"",text4:"",text5:""}),i=Object(u.a)(o,2),c=i[0],h=i[1];function p(e){var t=e.target,a=t.name,n=t.value;h((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(j.a)({},a,n))}))}var m=e.text.split(/\r?\n/).filter((function(e){return e}))[r-1];return Object(l.jsx)("div",{className:"container",style:{marginTop:"5%",fontSize:"80%"},children:Object(l.jsxs)("form",{style:{letterSpacing:"1px"},children:[Object(l.jsx)("p",{style:{padding:"1%",borderStyle:"solid",backgroundColor:"#252d4a",fontSize:"16px",fontWeight:"500",color:"white",borderColor:"darkgray"},children:m}),Object(l.jsxs)("h3",{children:[Object(l.jsx)(S.a,{onClick:function(){r>1&&s((function(e){return e-1}))},style:{fontSize:"200%",cursor:"pointer"}}),"paragraph ",r,"/",e.paragraphnum,Object(l.jsx)(W.a,{onClick:function(){r<e.paragraphnum&&s((function(e){return e+1}))},style:{fontSize:"200%",cursor:"pointer"}})]}),Object(l.jsx)("p",{style:{marginTop:"3%",fontWeight:"bold"},children:'How many main ideas are discussed in this paragraph? See definition of a "main idea" above. To distinguish between "main ideas" and simply supporting ideas, consider how main ideas are broad; supporting ideas can be subsumed under a broader main idea category. Paragraphs may provide clues such as transitions to indicate separate ideas.'}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{onChange:p,name:"text1",value:c.text1,autoComplete:"off",placeholder:"Enter number",className:"form-control",style:{marginTop:"2%",width:"20%"}})}),Object(l.jsx)("p",{style:{fontWeight:"bold"},children:"How well does this paragraph develop from / fit with the thesis statement (if applicable) and prompt?"}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{onChange:p,name:"text2",value:c.text2,autoComplete:"off",placeholder:"Enter number",className:"form-control",style:{marginTop:"2%",width:"20%"}})}),Object(l.jsx)("p",{style:{fontWeight:"bold"},children:'How well does this paragraph connect to/transition from/follow the previous paragraph? Write "N/A" if there is only one paragraph in the whole text.'}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{onChange:p,name:"text3",value:c.text3,autoComplete:"off",placeholder:"Enter number",className:"form-control",style:{marginTop:"2%",width:"20%"}})}),Object(l.jsx)("p",{style:{fontWeight:"bold"},children:"How well does this paragraph evidence the claim made in the topic sentence? Write N/A if there is no topic sentence."}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{onChange:p,name:"text4",value:c.text4,autoComplete:"off",placeholder:"Enter number",className:"form-control",style:{marginTop:"2%",width:"20%"}})}),Object(l.jsx)("p",{style:{fontWeight:"bold"},children:"On a scale of 1 to 4, how strong is this paragraph's topic sentence? Write N/A if there is no topic sentence."}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{onChange:p,name:"text5",value:c.text5,autoComplete:"off",placeholder:"Enter number",className:"form-control",style:{marginTop:"2%",width:"20%"}})}),Object(l.jsx)("button",{style:{marginLeft:"45%"},onClick:function(t){t.preventDefault();var a={title:e.title,type:"paragraphlevel",paragraph:r,rater:e.rater,text1:c.text1,text2:c.text2,text3:c.text3,text4:c.text4,text5:c.text5};x.a.post("https://textratingtool.herokuapp.com/create",a),h({title:"",paragraph:"",rater:e.rater,text1:"",text2:"",text3:"",text4:"",text5:""})},className:"btn btn-lg btn-info",children:"DONE"})]})})},L=function(e){Object(O.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).handleCategoryChange=function(e){n.setState({category:e.target.value})},n.state={selectOptions:[],id:"",title:"",text:"",paragraphnum:"",category:"",rater:""},n}return Object(f.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({rater:e.rater})}},{key:"getOptions",value:function(){var e=Object(N.a)(C.a.mark((function e(){var t,a,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/rating");case 2:t=e.sent,a=t.data,n=a.map((function(e){return{value:e._id,label:e.title,content:e.text,paragraphnum:e.paragraphnum}})),this.setState({selectOptions:n});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){this.setState({id:e.value,title:e.label,text:e.content,paragraphnum:e.paragraphnum,rater:e.rater})}},{key:"componentDidMount",value:function(){this.getOptions()}},{key:"render",value:function(){return console.log(this.state.selectOptions),this.state.id?Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col",children:Object(l.jsxs)("div",{className:"box",style:{backgroundColor:"white"},children:[Object(l.jsx)(w.a,{placeholder:"Please choose text",options:this.state.selectOptions,onChange:this.handleChange.bind(this)}),Object(l.jsx)("h3",{style:{marginTop:"5%"},children:Object(l.jsx)("strong",{children:this.state.title})}),Object(l.jsx)("p",{style:{marginTop:"5%",whiteSpace:"pre-line",fontSize:"80%"},children:this.state.text})]})}),Object(l.jsx)("div",{className:"col",children:Object(l.jsxs)("div",{className:"box",style:{backgroundColor:"white"},children:[Object(l.jsxs)("select",{name:"category",onChange:this.handleCategoryChange.bind(this),children:[Object(l.jsx)("option",{id:"0",children:"Paragraph level"}),Object(l.jsx)("option",{id:"1",children:"Text level"})]}),Object(l.jsx)("p",{children:"Paragraph level"===this.state.category&&Object(l.jsx)(H,{title:this.state.title,text:this.state.text,rater:this.state.rater,paragraphnum:this.state.paragraphnum})}),Object(l.jsx)("p",{children:"Text level"===this.state.category&&Object(l.jsx)(k,{title:this.state.title,rater:this.state.rater,paragraphnum:this.state.paragraphnum})})]})})]})}):Object(l.jsx)("div",{style:{width:"20%",marginLeft:"40%",marginTop:"5%"},children:Object(l.jsx)(w.a,{placeholder:"Please choose text",options:this.state.selectOptions,onChange:this.handleChange.bind(this)})})}}]),a}(n.Component),z=function(e){Object(O.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({rater:e.target.value})},n.state={rater:""},n}return Object(f.a)(a,[{key:"render",value:function(){return Object(l.jsxs)("div",{style:{marginTop:"1%"},children:[Object(l.jsx)("form",{onSubmit:this.handleSubmit,children:Object(l.jsx)("label",{style:{marginLeft:"1.3%"},children:Object(l.jsx)("input",Object(j.a)({type:"text",name:"rater",placeholder:"rater name",value:this.state.rater,onChange:this.handleChange.bind(this)},"value",this.state.value))})}),Object(l.jsx)(L,{rater:this.state.rater})]})}}]),a}(r.a.Component),A=(a(96),function(e){Object(O.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(g.a)(this,a),(e=t.call(this)).state={title:"",text:"",paragraphnum:"",rater:""},e}return Object(f.a)(a,[{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsx)(z,{})})}}]),a}(n.Component));var D=function(){return Object(l.jsxs)(i.a,{children:[Object(l.jsx)(h,{}),Object(l.jsx)(c.a,{exact:!0,path:"/",children:Object(l.jsx)(p,{})}),Object(l.jsx)(c.a,{exact:!0,path:"/rating",children:Object(l.jsx)(A,{})}),Object(l.jsx)(c.a,{exact:!0,path:"/upload",children:Object(l.jsx)(b,{})})]})};o.a.render(Object(l.jsx)(D,{}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.855b98fd.chunk.js.map