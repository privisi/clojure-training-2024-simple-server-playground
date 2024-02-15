// Compiled by ClojureScript 1.10.773 {}
goog.provide('simple_server.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"This text is printed from src/simple-server-playground/core.cljs. Go ahead and edit it and see reloading in action.");
if((typeof simple_server !== 'undefined') && (typeof simple_server.core !== 'undefined') && (typeof simple_server.core.app_state !== 'undefined')){
} else {
simple_server.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
simple_server.core.hello_world = (function simple_server$core$hello_world(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,simple_server.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Edit this and watch it change!"], null)], null);
});
reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_server.core.hello_world], null),document.getElementById("app"));
simple_server.core.on_js_reload = (function simple_server$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1708005629572
