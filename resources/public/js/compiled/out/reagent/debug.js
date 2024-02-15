// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__21412__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21412 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21413__i = 0, G__21413__a = new Array(arguments.length -  0);
while (G__21413__i < G__21413__a.length) {G__21413__a[G__21413__i] = arguments[G__21413__i + 0]; ++G__21413__i;}
  args = new cljs.core.IndexedSeq(G__21413__a,0,null);
} 
return G__21412__delegate.call(this,args);};
G__21412.cljs$lang$maxFixedArity = 0;
G__21412.cljs$lang$applyTo = (function (arglist__21414){
var args = cljs.core.seq(arglist__21414);
return G__21412__delegate(args);
});
G__21412.cljs$core$IFn$_invoke$arity$variadic = G__21412__delegate;
return G__21412;
})()
);

(o.error = (function() { 
var G__21415__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21415 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21416__i = 0, G__21416__a = new Array(arguments.length -  0);
while (G__21416__i < G__21416__a.length) {G__21416__a[G__21416__i] = arguments[G__21416__i + 0]; ++G__21416__i;}
  args = new cljs.core.IndexedSeq(G__21416__a,0,null);
} 
return G__21415__delegate.call(this,args);};
G__21415.cljs$lang$maxFixedArity = 0;
G__21415.cljs$lang$applyTo = (function (arglist__21417){
var args = cljs.core.seq(arglist__21417);
return G__21415__delegate(args);
});
G__21415.cljs$core$IFn$_invoke$arity$variadic = G__21415__delegate;
return G__21415;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1708005015891
