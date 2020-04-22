function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Vl0R:function(e,n,t){"use strict";t.r(n),t.d(n,"SettingsModule",(function(){return x}));var a=t("ofXK"),i=t("PCNd"),c=t("tyNb"),o=t("kt0X"),l=t("uFyM"),r=t("pKmL"),s=Object(o.q)(r.b,(function(e){return e})),b=(Object(o.q)(s,(function(e){return e.stickyHeader})),Object(o.q)(s,(function(e){return e.language})),Object(o.q)(s,(function(e){return e.theme}))),u=(Object(o.q)(s,(function(e){return e.pageAnimations})),Object(o.q)(s,(function(e){return e.elementsAnimations})),Object(o.q)(s,(function(e){return e.autoNightMode}))),g=Object(o.q)(s,(function(e){return e.nightTheme})),f=Object(o.q)(s,(function(e){return e.hour})),m=Object(o.q)(u,f,(function(e,n){return e&&(n>=21||n<=7)}));Object(o.q)(b,g,m,(function(e,n,t){return(t?n:e).toLowerCase()}));var d=t("fXoL"),h=t("NFeN"),p=t("6NWb"),v=t("kmnG"),O=t("d3UM"),j=t("3Pt+"),S=t("1jcm"),C=t("FKr1"),y=t("Qu3c");function k(e,n){if(1&e&&(d.Sb(0,"mat-option",16),d.Ac(1),d.Rb()),2&e){var t=n.$implicit;d.jc("value",t.value),d.Bb(1),d.Cc(" ","language."+t.label," ")}}function R(e,n){if(1&e&&(d.Sb(0,"mat-option",16),d.Ac(1),d.Rb()),2&e){var t=n.$implicit;d.jc("value",t.value),d.Bb(1),d.Cc(" ",t.label," ")}}function M(e,n){1&e&&d.Ob(0,"mat-slide-toggle",17)}function P(e,n){if(1&e){var t=d.Tb();d.Sb(0,"mat-slide-toggle",15),d.ac("change",(function(e){return d.qc(t),d.ec(2).onPageAnimationsToggle(e)})),d.Rb()}if(2&e){var a=d.ec().ngIf;d.jc("checked",a.pageAnimations)}}function T(e,n){if(1&e){var t=d.Tb();d.Qb(0),d.Sb(1,"div",2),d.Sb(2,"div",3),d.Sb(3,"div",4),d.Sb(4,"mat-icon",5),d.Ob(5,"fa-icon",6),d.Rb(),d.Sb(6,"mat-form-field"),d.Sb(7,"mat-select",7),d.ac("selectionChange",(function(e){return d.qc(t),d.ec().onLanguageSelect(e)})),d.yc(8,k,2,2,"mat-option",8),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(9,"div",2),d.Sb(10,"div",3),d.Sb(11,"div",4),d.Sb(12,"mat-icon",5),d.Ob(13,"fa-icon",9),d.Rb(),d.Sb(14,"mat-form-field"),d.Sb(15,"mat-select",10),d.ac("selectionChange",(function(e){return d.qc(t),d.ec().onThemeSelect(e)})),d.yc(16,R,2,2,"mat-option",8),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(17,"div",3),d.Sb(18,"div",4),d.Sb(19,"mat-icon",5),d.Sb(20,"mat-icon",5),d.Ob(21,"fa-icon",11),d.Rb(),d.Rb(),d.Sb(22,"mat-placeholder"),d.Ac(23),d.Rb(),d.yc(24,M,1,0,"mat-slide-toggle",12),d.yc(25,P,1,1,"mat-slide-toggle",13),d.Rb(),d.Sb(26,"div",4),d.Sb(27,"mat-icon",5),d.Ob(28,"fa-icon",14),d.Rb(),d.Sb(29,"mat-placeholder"),d.Ac(30),d.Rb(),d.Sb(31,"mat-slide-toggle",15),d.ac("change",(function(e){return d.qc(t),d.ec().onElementsAnimationsToggle(e)})),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Pb()}if(2&e){var a=n.ngIf,i=d.ec();d.Bb(7),d.jc("placeholder","placeholder")("ngModel",a.language),d.Bb(1),d.jc("ngForOf",i.languages),d.Bb(7),d.jc("placeholder","tolder")("ngModel",a.theme),d.Bb(1),d.jc("ngForOf",i.themes),d.Bb(7),d.Cc("","Page animations"," "),d.Bb(1),d.jc("ngIf",a.pageAnimationsDisabled),d.Bb(1),d.jc("ngIf",!a.pageAnimationsDisabled),d.Bb(5),d.Cc("","Element animations"," "),d.Bb(1),d.jc("checked",a.elementsAnimations)}}var A,E,_,q=[{path:"",component:(A=function(){function e(n){_classCallCheck(this,e),this.store=n,this.themes=[{value:"DEFAULT-THEME",label:"blue"},{value:"LIGHT-THEME",label:"light"},{value:"NATURE-THEME",label:"nature"},{value:"BLACK-THEME",label:"dark"}],this.languages=[{value:"en",label:"en"},{value:"he",label:"he"}]}return _createClass(e,[{key:"ngOnInit",value:function(){this.settings$=this.store.pipe(Object(o.t)(s))}},{key:"onLanguageSelect",value:function(e){var n=e.value;this.store.dispatch(Object(l.f)({language:n}))}},{key:"onThemeSelect",value:function(e){var n=e.value;this.store.dispatch(Object(l.h)({theme:n}))}},{key:"onAutoNightModeToggle",value:function(e){var n=e.checked;this.store.dispatch(Object(l.d)({autoNightMode:n}))}},{key:"onStickyHeaderToggle",value:function(e){var n=e.checked;this.store.dispatch(Object(l.g)({stickyHeader:n}))}},{key:"onPageAnimationsToggle",value:function(e){var n=e.checked;this.store.dispatch(Object(l.b)({pageAnimations:n}))}},{key:"onElementsAnimationsToggle",value:function(e){var n=e.checked;this.store.dispatch(Object(l.a)({elementsAnimations:n}))}}]),e}(),A.\u0275fac=function(e){return new(e||A)(d.Nb(o.h))},A.\u0275cmp=d.Hb({type:A,selectors:[["anms-settings"]],decls:3,vars:3,consts:[[1,"container"],[4,"ngIf"],[1,"row"],[1,"col-md-6","group"],[1,"icon-form-field"],["color","accent"],["icon","language","color","accent"],["name","language",3,"placeholder","ngModel","selectionChange"],[3,"value",4,"ngFor","ngForOf"],["icon","paint-brush","color","accent"],["name","themes",3,"placeholder","ngModel","selectionChange"],["icon","window-maximize"],["matTooltip","Sorry, this feature is disabled in IE, EDGE and Safari","matTooltipPosition","before","disabled","",4,"ngIf"],[3,"checked","change",4,"ngIf"],["icon","stream","color","accent"],[3,"checked","change"],[3,"value"],["matTooltip","Sorry, this feature is disabled in IE, EDGE and Safari","matTooltipPosition","before","disabled",""]],template:function(e,n){1&e&&(d.Sb(0,"div",0),d.yc(1,T,32,11,"ng-container",1),d.fc(2,"async"),d.Rb()),2&e&&(d.Bb(1),d.jc("ngIf",d.gc(2,1,n.settings$)))},directives:[a.t,h.a,p.b,v.c,O.a,j.q,j.t,a.s,v.h,S.a,C.l,y.a],pipes:[a.b],styles:[".container[_ngcontent-%COMP%]{margin-top:20px;padding:40px}h1[_ngcontent-%COMP%]{margin:0 0 20px}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{text-transform:uppercase}h2[_ngcontent-%COMP%]{margin:0 0 10px}.group[_ngcontent-%COMP%]{margin:0 0 40px}.icon-form-field[_ngcontent-%COMP%]{position:relative;display:flex;height:65.5px;align-items:center}.icon-form-field[_ngcontent-%COMP%]   mat-placeholder[_ngcontent-%COMP%]{flex:2 1 auto}mat-icon[_ngcontent-%COMP%]{margin:0 6px 6px 0;font-size:20px}mat-form-field[_ngcontent-%COMP%]{flex:1 0 auto}"],changeDetection:0}),A),data:{title:"anms.menu.settings"}}],w=((_=function e(){_classCallCheck(this,e)}).\u0275mod=d.Lb({type:_}),_.\u0275inj=d.Kb({factory:function(e){return new(e||_)},imports:[[c.j.forChild(q)],c.j]}),_),x=((E=function e(){_classCallCheck(this,e)}).\u0275mod=d.Lb({type:E}),E.\u0275inj=d.Kb({factory:function(e){return new(e||E)},imports:[[a.c,i.a,w]]}),E)}}]);