// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30194){
var map__30195 = p__30194;
var map__30195__$1 = (((((!((map__30195 == null))))?(((((map__30195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30195):map__30195);
var m = map__30195__$1;
var n = cljs.core.get.call(null,map__30195__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30195__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30197_30229 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30198_30230 = null;
var count__30199_30231 = (0);
var i__30200_30232 = (0);
while(true){
if((i__30200_30232 < count__30199_30231)){
var f_30233 = cljs.core._nth.call(null,chunk__30198_30230,i__30200_30232);
cljs.core.println.call(null,"  ",f_30233);


var G__30234 = seq__30197_30229;
var G__30235 = chunk__30198_30230;
var G__30236 = count__30199_30231;
var G__30237 = (i__30200_30232 + (1));
seq__30197_30229 = G__30234;
chunk__30198_30230 = G__30235;
count__30199_30231 = G__30236;
i__30200_30232 = G__30237;
continue;
} else {
var temp__5720__auto___30238 = cljs.core.seq.call(null,seq__30197_30229);
if(temp__5720__auto___30238){
var seq__30197_30239__$1 = temp__5720__auto___30238;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30197_30239__$1)){
var c__4556__auto___30240 = cljs.core.chunk_first.call(null,seq__30197_30239__$1);
var G__30241 = cljs.core.chunk_rest.call(null,seq__30197_30239__$1);
var G__30242 = c__4556__auto___30240;
var G__30243 = cljs.core.count.call(null,c__4556__auto___30240);
var G__30244 = (0);
seq__30197_30229 = G__30241;
chunk__30198_30230 = G__30242;
count__30199_30231 = G__30243;
i__30200_30232 = G__30244;
continue;
} else {
var f_30245 = cljs.core.first.call(null,seq__30197_30239__$1);
cljs.core.println.call(null,"  ",f_30245);


var G__30246 = cljs.core.next.call(null,seq__30197_30239__$1);
var G__30247 = null;
var G__30248 = (0);
var G__30249 = (0);
seq__30197_30229 = G__30246;
chunk__30198_30230 = G__30247;
count__30199_30231 = G__30248;
i__30200_30232 = G__30249;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30250 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30250);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30250)))?cljs.core.second.call(null,arglists_30250):arglists_30250));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30201_30251 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30202_30252 = null;
var count__30203_30253 = (0);
var i__30204_30254 = (0);
while(true){
if((i__30204_30254 < count__30203_30253)){
var vec__30215_30255 = cljs.core._nth.call(null,chunk__30202_30252,i__30204_30254);
var name_30256 = cljs.core.nth.call(null,vec__30215_30255,(0),null);
var map__30218_30257 = cljs.core.nth.call(null,vec__30215_30255,(1),null);
var map__30218_30258__$1 = (((((!((map__30218_30257 == null))))?(((((map__30218_30257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30218_30257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30218_30257):map__30218_30257);
var doc_30259 = cljs.core.get.call(null,map__30218_30258__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30260 = cljs.core.get.call(null,map__30218_30258__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30256);

cljs.core.println.call(null," ",arglists_30260);

if(cljs.core.truth_(doc_30259)){
cljs.core.println.call(null," ",doc_30259);
} else {
}


var G__30261 = seq__30201_30251;
var G__30262 = chunk__30202_30252;
var G__30263 = count__30203_30253;
var G__30264 = (i__30204_30254 + (1));
seq__30201_30251 = G__30261;
chunk__30202_30252 = G__30262;
count__30203_30253 = G__30263;
i__30204_30254 = G__30264;
continue;
} else {
var temp__5720__auto___30265 = cljs.core.seq.call(null,seq__30201_30251);
if(temp__5720__auto___30265){
var seq__30201_30266__$1 = temp__5720__auto___30265;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30201_30266__$1)){
var c__4556__auto___30267 = cljs.core.chunk_first.call(null,seq__30201_30266__$1);
var G__30268 = cljs.core.chunk_rest.call(null,seq__30201_30266__$1);
var G__30269 = c__4556__auto___30267;
var G__30270 = cljs.core.count.call(null,c__4556__auto___30267);
var G__30271 = (0);
seq__30201_30251 = G__30268;
chunk__30202_30252 = G__30269;
count__30203_30253 = G__30270;
i__30204_30254 = G__30271;
continue;
} else {
var vec__30220_30272 = cljs.core.first.call(null,seq__30201_30266__$1);
var name_30273 = cljs.core.nth.call(null,vec__30220_30272,(0),null);
var map__30223_30274 = cljs.core.nth.call(null,vec__30220_30272,(1),null);
var map__30223_30275__$1 = (((((!((map__30223_30274 == null))))?(((((map__30223_30274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30223_30274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30223_30274):map__30223_30274);
var doc_30276 = cljs.core.get.call(null,map__30223_30275__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30277 = cljs.core.get.call(null,map__30223_30275__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30273);

cljs.core.println.call(null," ",arglists_30277);

if(cljs.core.truth_(doc_30276)){
cljs.core.println.call(null," ",doc_30276);
} else {
}


var G__30278 = cljs.core.next.call(null,seq__30201_30266__$1);
var G__30279 = null;
var G__30280 = (0);
var G__30281 = (0);
seq__30201_30251 = G__30278;
chunk__30202_30252 = G__30279;
count__30203_30253 = G__30280;
i__30204_30254 = G__30281;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__30225 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30226 = null;
var count__30227 = (0);
var i__30228 = (0);
while(true){
if((i__30228 < count__30227)){
var role = cljs.core._nth.call(null,chunk__30226,i__30228);
var temp__5720__auto___30282__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30282__$1)){
var spec_30283 = temp__5720__auto___30282__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30283));
} else {
}


var G__30284 = seq__30225;
var G__30285 = chunk__30226;
var G__30286 = count__30227;
var G__30287 = (i__30228 + (1));
seq__30225 = G__30284;
chunk__30226 = G__30285;
count__30227 = G__30286;
i__30228 = G__30287;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__30225);
if(temp__5720__auto____$1){
var seq__30225__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30225__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__30225__$1);
var G__30288 = cljs.core.chunk_rest.call(null,seq__30225__$1);
var G__30289 = c__4556__auto__;
var G__30290 = cljs.core.count.call(null,c__4556__auto__);
var G__30291 = (0);
seq__30225 = G__30288;
chunk__30226 = G__30289;
count__30227 = G__30290;
i__30228 = G__30291;
continue;
} else {
var role = cljs.core.first.call(null,seq__30225__$1);
var temp__5720__auto___30292__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30292__$2)){
var spec_30293 = temp__5720__auto___30292__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30293));
} else {
}


var G__30294 = cljs.core.next.call(null,seq__30225__$1);
var G__30295 = null;
var G__30296 = (0);
var G__30297 = (0);
seq__30225 = G__30294;
chunk__30226 = G__30295;
count__30227 = G__30296;
i__30228 = G__30297;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__30298 = cljs.core.conj.call(null,via,t);
var G__30299 = cljs.core.ex_cause.call(null,t);
via = G__30298;
t = G__30299;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__30302 = datafied_throwable;
var map__30302__$1 = (((((!((map__30302 == null))))?(((((map__30302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30302):map__30302);
var via = cljs.core.get.call(null,map__30302__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__30302__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__30302__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__30303 = cljs.core.last.call(null,via);
var map__30303__$1 = (((((!((map__30303 == null))))?(((((map__30303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30303):map__30303);
var type = cljs.core.get.call(null,map__30303__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__30303__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__30303__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__30304 = data;
var map__30304__$1 = (((((!((map__30304 == null))))?(((((map__30304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30304):map__30304);
var problems = cljs.core.get.call(null,map__30304__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__30304__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__30304__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__30305 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__30305__$1 = (((((!((map__30305 == null))))?(((((map__30305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30305):map__30305);
var top_data = map__30305__$1;
var source = cljs.core.get.call(null,map__30305__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__30310 = phase;
var G__30310__$1 = (((G__30310 instanceof cljs.core.Keyword))?G__30310.fqn:null);
switch (G__30310__$1) {
case "read-source":
var map__30311 = data;
var map__30311__$1 = (((((!((map__30311 == null))))?(((((map__30311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30311):map__30311);
var line = cljs.core.get.call(null,map__30311__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30311__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__30313 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__30313__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30313,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30313);
var G__30313__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30313__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30313__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30313__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30313__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__30314 = top_data;
var G__30314__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30314,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30314);
var G__30314__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30314__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30314__$1);
var G__30314__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30314__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30314__$2);
var G__30314__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30314__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30314__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30314__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30314__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__30315 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30315,(0),null);
var method = cljs.core.nth.call(null,vec__30315,(1),null);
var file = cljs.core.nth.call(null,vec__30315,(2),null);
var line = cljs.core.nth.call(null,vec__30315,(3),null);
var G__30318 = top_data;
var G__30318__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__30318,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__30318);
var G__30318__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__30318__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__30318__$1);
var G__30318__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__30318__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__30318__$2);
var G__30318__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30318__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30318__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30318__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30318__$4;
}

break;
case "execution":
var vec__30319 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30319,(0),null);
var method = cljs.core.nth.call(null,vec__30319,(1),null);
var file = cljs.core.nth.call(null,vec__30319,(2),null);
var line = cljs.core.nth.call(null,vec__30319,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__30301_SHARP_){
var or__4126__auto__ = (p1__30301_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__30301_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__30322 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__30322__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__30322,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__30322);
var G__30322__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30322__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30322__$1);
var G__30322__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__30322__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__30322__$2);
var G__30322__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__30322__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__30322__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30322__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30322__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30310__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__30326){
var map__30327 = p__30326;
var map__30327__$1 = (((((!((map__30327 == null))))?(((((map__30327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30327):map__30327);
var triage_data = map__30327__$1;
var phase = cljs.core.get.call(null,map__30327__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__30327__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__30327__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30327__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__30327__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__30327__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__30327__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__30327__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__30329 = phase;
var G__30329__$1 = (((G__30329 instanceof cljs.core.Keyword))?G__30329.fqn:null);
switch (G__30329__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30330_30339 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30331_30340 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30332_30341 = true;
var _STAR_print_fn_STAR__temp_val__30333_30342 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30332_30341);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30333_30342);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__30324_SHARP_){
return cljs.core.dissoc.call(null,p1__30324_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30331_30340);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30330_30339);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30334_30343 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30335_30344 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30336_30345 = true;
var _STAR_print_fn_STAR__temp_val__30337_30346 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30336_30345);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30337_30346);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__30325_SHARP_){
return cljs.core.dissoc.call(null,p1__30325_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30335_30344);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30334_30343);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30329__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1708005027518
