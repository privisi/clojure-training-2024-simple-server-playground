// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e30541){if((e30541 instanceof Error)){
var e = e30541;
return "Error: Unable to stringify";
} else {
throw e30541;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30544 = arguments.length;
switch (G__30544) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30542_SHARP_){
if(typeof p1__30542_SHARP_ === 'string'){
return p1__30542_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30542_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30547 = arguments.length;
var i__4737__auto___30548 = (0);
while(true){
if((i__4737__auto___30548 < len__4736__auto___30547)){
args__4742__auto__.push((arguments[i__4737__auto___30548]));

var G__30549 = (i__4737__auto___30548 + (1));
i__4737__auto___30548 = G__30549;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30546){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30546));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30551 = arguments.length;
var i__4737__auto___30552 = (0);
while(true){
if((i__4737__auto___30552 < len__4736__auto___30551)){
args__4742__auto__.push((arguments[i__4737__auto___30552]));

var G__30553 = (i__4737__auto___30552 + (1));
i__4737__auto___30552 = G__30553;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30550){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30550));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30554){
var map__30555 = p__30554;
var map__30555__$1 = (((((!((map__30555 == null))))?(((((map__30555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30555):map__30555);
var message = cljs.core.get.call(null,map__30555__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30555__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4126__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__26453__auto___30634 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26454__auto__ = (function (){var switch__26358__auto__ = (function (state_30606){
var state_val_30607 = (state_30606[(1)]);
if((state_val_30607 === (7))){
var inst_30602 = (state_30606[(2)]);
var state_30606__$1 = state_30606;
var statearr_30608_30635 = state_30606__$1;
(statearr_30608_30635[(2)] = inst_30602);

(statearr_30608_30635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30607 === (1))){
var state_30606__$1 = state_30606;
var statearr_30609_30636 = state_30606__$1;
(statearr_30609_30636[(2)] = null);

(statearr_30609_30636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30607 === (4))){
var inst_30559 = (state_30606[(7)]);
var inst_30559__$1 = (state_30606[(2)]);
var state_30606__$1 = (function (){var statearr_30610 = state_30606;
(statearr_30610[(7)] = inst_30559__$1);

return statearr_30610;
})();
if(cljs.core.truth_(inst_30559__$1)){
var statearr_30611_30637 = state_30606__$1;
(statearr_30611_30637[(1)] = (5));

} else {
var statearr_30612_30638 = state_30606__$1;
(statearr_30612_30638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30607 === (15))){
var inst_30566 = (state_30606[(8)]);
var inst_30581 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30566);
var inst_30582 = cljs.core.first.call(null,inst_30581);
var inst_30583 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30582);
var inst_30584 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30583)].join('');
var inst_30585 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30584);
var state_30606__$1 = state_30606;
var statearr_30613_30639 = state_30606__$1;
(statearr_30613_30639[(2)] = inst_30585);

(statearr_30613_30639[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30607 === (13))){
var inst_30590 = (state_30606[(2)]);
var state_30606__$1 = state_30606;
var statearr_30614_30640 = state_30606__$1;
(statearr_30614_30640[(2)] = inst_30590);

(statearr_30614_30640[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30607 === (6))){
var state_30606__$1 = state_30606;
var statearr_30615_30641 = state_30606__$1;
(statearr_30615_30641[(2)] = null);

(statearr_30615_30641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30607 === (17))){
var inst_30588 = (state_30606[(2)]);
var state_30606__$1 = state_30606;
var statearr_30616_30642 = state_30606__$1;
(statearr_30616_30642[(2)] = inst_30588);

(statearr_30616_30642[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30607 === (3))){
var inst_30604 = (state_30606[(2)]);
var state_30606__$1 = state_30606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30606__$1,inst_30604);
} else {
if((state_val_30607 === (12))){
var inst_30565 = (state_30606[(9)]);
var inst_30579 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30565,opts);
var state_30606__$1 = state_30606;
if(inst_30579){
var statearr_30617_30643 = state_30606__$1;
(statearr_30617_30643[(1)] = (15));

} else {
var statearr_30618_30644 = state_30606__$1;
(statearr_30618_30644[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30607 === (2))){
var state_30606__$1 = state_30606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30606__$1,(4),ch);
} else {
if((state_val_30607 === (11))){
var inst_30566 = (state_30606[(8)]);
var inst_30571 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30572 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30566);
var inst_30573 = cljs.core.async.timeout.call(null,(1000));
var inst_30574 = [inst_30572,inst_30573];
var inst_30575 = (new cljs.core.PersistentVector(null,2,(5),inst_30571,inst_30574,null));
var state_30606__$1 = state_30606;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30606__$1,(14),inst_30575);
} else {
if((state_val_30607 === (9))){
var inst_30566 = (state_30606[(8)]);
var inst_30592 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30593 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30566);
var inst_30594 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30593);
var inst_30595 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30594)].join('');
var inst_30596 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30595);
var state_30606__$1 = (function (){var statearr_30619 = state_30606;
(statearr_30619[(10)] = inst_30592);

return statearr_30619;
})();
var statearr_30620_30645 = state_30606__$1;
(statearr_30620_30645[(2)] = inst_30596);

(statearr_30620_30645[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30607 === (5))){
var inst_30559 = (state_30606[(7)]);
var inst_30561 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30562 = (new cljs.core.PersistentArrayMap(null,2,inst_30561,null));
var inst_30563 = (new cljs.core.PersistentHashSet(null,inst_30562,null));
var inst_30564 = figwheel.client.focus_msgs.call(null,inst_30563,inst_30559);
var inst_30565 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30564);
var inst_30566 = cljs.core.first.call(null,inst_30564);
var inst_30567 = figwheel.client.autoload_QMARK_.call(null);
var state_30606__$1 = (function (){var statearr_30621 = state_30606;
(statearr_30621[(8)] = inst_30566);

(statearr_30621[(9)] = inst_30565);

return statearr_30621;
})();
if(cljs.core.truth_(inst_30567)){
var statearr_30622_30646 = state_30606__$1;
(statearr_30622_30646[(1)] = (8));

} else {
var statearr_30623_30647 = state_30606__$1;
(statearr_30623_30647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30607 === (14))){
var inst_30577 = (state_30606[(2)]);
var state_30606__$1 = state_30606;
var statearr_30624_30648 = state_30606__$1;
(statearr_30624_30648[(2)] = inst_30577);

(statearr_30624_30648[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30607 === (16))){
var state_30606__$1 = state_30606;
var statearr_30625_30649 = state_30606__$1;
(statearr_30625_30649[(2)] = null);

(statearr_30625_30649[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30607 === (10))){
var inst_30598 = (state_30606[(2)]);
var state_30606__$1 = (function (){var statearr_30626 = state_30606;
(statearr_30626[(11)] = inst_30598);

return statearr_30626;
})();
var statearr_30627_30650 = state_30606__$1;
(statearr_30627_30650[(2)] = null);

(statearr_30627_30650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30607 === (8))){
var inst_30565 = (state_30606[(9)]);
var inst_30569 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30565,opts);
var state_30606__$1 = state_30606;
if(cljs.core.truth_(inst_30569)){
var statearr_30628_30651 = state_30606__$1;
(statearr_30628_30651[(1)] = (11));

} else {
var statearr_30629_30652 = state_30606__$1;
(statearr_30629_30652[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26359__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26359__auto____0 = (function (){
var statearr_30630 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30630[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26359__auto__);

(statearr_30630[(1)] = (1));

return statearr_30630;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26359__auto____1 = (function (state_30606){
while(true){
var ret_value__26360__auto__ = (function (){try{while(true){
var result__26361__auto__ = switch__26358__auto__.call(null,state_30606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26361__auto__;
}
break;
}
}catch (e30631){if((e30631 instanceof Object)){
var ex__26362__auto__ = e30631;
var statearr_30632_30653 = state_30606;
(statearr_30632_30653[(5)] = ex__26362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30654 = state_30606;
state_30606 = G__30654;
continue;
} else {
return ret_value__26360__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26359__auto__ = function(state_30606){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26359__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26359__auto____1.call(this,state_30606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26359__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26359__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26359__auto__;
})()
})();
var state__26455__auto__ = (function (){var statearr_30633 = f__26454__auto__.call(null);
(statearr_30633[(6)] = c__26453__auto___30634);

return statearr_30633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30655_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30655_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30661 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30657 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30658 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30659 = true;
var _STAR_print_fn_STAR__temp_val__30660 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30659);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30660);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30658);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30657);
}}catch (e30656){if((e30656 instanceof Error)){
var e = e30656;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30661], null));
} else {
var e = e30656;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30662){
var map__30663 = p__30662;
var map__30663__$1 = (((((!((map__30663 == null))))?(((((map__30663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30663):map__30663);
var opts = map__30663__$1;
var build_id = cljs.core.get.call(null,map__30663__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__30665){
var vec__30666 = p__30665;
var seq__30667 = cljs.core.seq.call(null,vec__30666);
var first__30668 = cljs.core.first.call(null,seq__30667);
var seq__30667__$1 = cljs.core.next.call(null,seq__30667);
var map__30669 = first__30668;
var map__30669__$1 = (((((!((map__30669 == null))))?(((((map__30669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30669):map__30669);
var msg = map__30669__$1;
var msg_name = cljs.core.get.call(null,map__30669__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30667__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30671){
var vec__30672 = p__30671;
var seq__30673 = cljs.core.seq.call(null,vec__30672);
var first__30674 = cljs.core.first.call(null,seq__30673);
var seq__30673__$1 = cljs.core.next.call(null,seq__30673);
var map__30675 = first__30674;
var map__30675__$1 = (((((!((map__30675 == null))))?(((((map__30675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30675):map__30675);
var msg = map__30675__$1;
var msg_name = cljs.core.get.call(null,map__30675__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30673__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30677){
var map__30678 = p__30677;
var map__30678__$1 = (((((!((map__30678 == null))))?(((((map__30678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30678):map__30678);
var on_compile_warning = cljs.core.get.call(null,map__30678__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30678__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__30680){
var vec__30681 = p__30680;
var seq__30682 = cljs.core.seq.call(null,vec__30681);
var first__30683 = cljs.core.first.call(null,seq__30682);
var seq__30682__$1 = cljs.core.next.call(null,seq__30682);
var map__30684 = first__30683;
var map__30684__$1 = (((((!((map__30684 == null))))?(((((map__30684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30684):map__30684);
var msg = map__30684__$1;
var msg_name = cljs.core.get.call(null,map__30684__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30682__$1;
var pred__30686 = cljs.core._EQ_;
var expr__30687 = msg_name;
if(cljs.core.truth_(pred__30686.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30687))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30686.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30687))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26454__auto__ = (function (){var switch__26358__auto__ = (function (state_30776){
var state_val_30777 = (state_30776[(1)]);
if((state_val_30777 === (7))){
var inst_30696 = (state_30776[(2)]);
var state_30776__$1 = state_30776;
if(cljs.core.truth_(inst_30696)){
var statearr_30778_30825 = state_30776__$1;
(statearr_30778_30825[(1)] = (8));

} else {
var statearr_30779_30826 = state_30776__$1;
(statearr_30779_30826[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (20))){
var inst_30770 = (state_30776[(2)]);
var state_30776__$1 = state_30776;
var statearr_30780_30827 = state_30776__$1;
(statearr_30780_30827[(2)] = inst_30770);

(statearr_30780_30827[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (27))){
var inst_30766 = (state_30776[(2)]);
var state_30776__$1 = state_30776;
var statearr_30781_30828 = state_30776__$1;
(statearr_30781_30828[(2)] = inst_30766);

(statearr_30781_30828[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (1))){
var inst_30689 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30776__$1 = state_30776;
if(cljs.core.truth_(inst_30689)){
var statearr_30782_30829 = state_30776__$1;
(statearr_30782_30829[(1)] = (2));

} else {
var statearr_30783_30830 = state_30776__$1;
(statearr_30783_30830[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (24))){
var inst_30768 = (state_30776[(2)]);
var state_30776__$1 = state_30776;
var statearr_30784_30831 = state_30776__$1;
(statearr_30784_30831[(2)] = inst_30768);

(statearr_30784_30831[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (4))){
var inst_30774 = (state_30776[(2)]);
var state_30776__$1 = state_30776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30776__$1,inst_30774);
} else {
if((state_val_30777 === (15))){
var inst_30772 = (state_30776[(2)]);
var state_30776__$1 = state_30776;
var statearr_30785_30832 = state_30776__$1;
(statearr_30785_30832[(2)] = inst_30772);

(statearr_30785_30832[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (21))){
var inst_30725 = (state_30776[(2)]);
var inst_30726 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30727 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30726);
var state_30776__$1 = (function (){var statearr_30786 = state_30776;
(statearr_30786[(7)] = inst_30725);

return statearr_30786;
})();
var statearr_30787_30833 = state_30776__$1;
(statearr_30787_30833[(2)] = inst_30727);

(statearr_30787_30833[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (31))){
var inst_30755 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30776__$1 = state_30776;
if(inst_30755){
var statearr_30788_30834 = state_30776__$1;
(statearr_30788_30834[(1)] = (34));

} else {
var statearr_30789_30835 = state_30776__$1;
(statearr_30789_30835[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (32))){
var inst_30764 = (state_30776[(2)]);
var state_30776__$1 = state_30776;
var statearr_30790_30836 = state_30776__$1;
(statearr_30790_30836[(2)] = inst_30764);

(statearr_30790_30836[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (33))){
var inst_30751 = (state_30776[(2)]);
var inst_30752 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30753 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30752);
var state_30776__$1 = (function (){var statearr_30791 = state_30776;
(statearr_30791[(8)] = inst_30751);

return statearr_30791;
})();
var statearr_30792_30837 = state_30776__$1;
(statearr_30792_30837[(2)] = inst_30753);

(statearr_30792_30837[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (13))){
var inst_30710 = figwheel.client.heads_up.clear.call(null);
var state_30776__$1 = state_30776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30776__$1,(16),inst_30710);
} else {
if((state_val_30777 === (22))){
var inst_30731 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30732 = figwheel.client.heads_up.append_warning_message.call(null,inst_30731);
var state_30776__$1 = state_30776;
var statearr_30793_30838 = state_30776__$1;
(statearr_30793_30838[(2)] = inst_30732);

(statearr_30793_30838[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (36))){
var inst_30762 = (state_30776[(2)]);
var state_30776__$1 = state_30776;
var statearr_30794_30839 = state_30776__$1;
(statearr_30794_30839[(2)] = inst_30762);

(statearr_30794_30839[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (29))){
var inst_30742 = (state_30776[(2)]);
var inst_30743 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30744 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30743);
var state_30776__$1 = (function (){var statearr_30795 = state_30776;
(statearr_30795[(9)] = inst_30742);

return statearr_30795;
})();
var statearr_30796_30840 = state_30776__$1;
(statearr_30796_30840[(2)] = inst_30744);

(statearr_30796_30840[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (6))){
var inst_30691 = (state_30776[(10)]);
var state_30776__$1 = state_30776;
var statearr_30797_30841 = state_30776__$1;
(statearr_30797_30841[(2)] = inst_30691);

(statearr_30797_30841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (28))){
var inst_30738 = (state_30776[(2)]);
var inst_30739 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30740 = figwheel.client.heads_up.display_warning.call(null,inst_30739);
var state_30776__$1 = (function (){var statearr_30798 = state_30776;
(statearr_30798[(11)] = inst_30738);

return statearr_30798;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30776__$1,(29),inst_30740);
} else {
if((state_val_30777 === (25))){
var inst_30736 = figwheel.client.heads_up.clear.call(null);
var state_30776__$1 = state_30776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30776__$1,(28),inst_30736);
} else {
if((state_val_30777 === (34))){
var inst_30757 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30776__$1 = state_30776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30776__$1,(37),inst_30757);
} else {
if((state_val_30777 === (17))){
var inst_30716 = (state_30776[(2)]);
var inst_30717 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30718 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30717);
var state_30776__$1 = (function (){var statearr_30799 = state_30776;
(statearr_30799[(12)] = inst_30716);

return statearr_30799;
})();
var statearr_30800_30842 = state_30776__$1;
(statearr_30800_30842[(2)] = inst_30718);

(statearr_30800_30842[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (3))){
var inst_30708 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30776__$1 = state_30776;
if(inst_30708){
var statearr_30801_30843 = state_30776__$1;
(statearr_30801_30843[(1)] = (13));

} else {
var statearr_30802_30844 = state_30776__$1;
(statearr_30802_30844[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (12))){
var inst_30704 = (state_30776[(2)]);
var state_30776__$1 = state_30776;
var statearr_30803_30845 = state_30776__$1;
(statearr_30803_30845[(2)] = inst_30704);

(statearr_30803_30845[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (2))){
var inst_30691 = (state_30776[(10)]);
var inst_30691__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30776__$1 = (function (){var statearr_30804 = state_30776;
(statearr_30804[(10)] = inst_30691__$1);

return statearr_30804;
})();
if(cljs.core.truth_(inst_30691__$1)){
var statearr_30805_30846 = state_30776__$1;
(statearr_30805_30846[(1)] = (5));

} else {
var statearr_30806_30847 = state_30776__$1;
(statearr_30806_30847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (23))){
var inst_30734 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30776__$1 = state_30776;
if(inst_30734){
var statearr_30807_30848 = state_30776__$1;
(statearr_30807_30848[(1)] = (25));

} else {
var statearr_30808_30849 = state_30776__$1;
(statearr_30808_30849[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (35))){
var state_30776__$1 = state_30776;
var statearr_30809_30850 = state_30776__$1;
(statearr_30809_30850[(2)] = null);

(statearr_30809_30850[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (19))){
var inst_30729 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30776__$1 = state_30776;
if(inst_30729){
var statearr_30810_30851 = state_30776__$1;
(statearr_30810_30851[(1)] = (22));

} else {
var statearr_30811_30852 = state_30776__$1;
(statearr_30811_30852[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (11))){
var inst_30700 = (state_30776[(2)]);
var state_30776__$1 = state_30776;
var statearr_30812_30853 = state_30776__$1;
(statearr_30812_30853[(2)] = inst_30700);

(statearr_30812_30853[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (9))){
var inst_30702 = figwheel.client.heads_up.clear.call(null);
var state_30776__$1 = state_30776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30776__$1,(12),inst_30702);
} else {
if((state_val_30777 === (5))){
var inst_30693 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30776__$1 = state_30776;
var statearr_30813_30854 = state_30776__$1;
(statearr_30813_30854[(2)] = inst_30693);

(statearr_30813_30854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (14))){
var inst_30720 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30776__$1 = state_30776;
if(inst_30720){
var statearr_30814_30855 = state_30776__$1;
(statearr_30814_30855[(1)] = (18));

} else {
var statearr_30815_30856 = state_30776__$1;
(statearr_30815_30856[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (26))){
var inst_30746 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30776__$1 = state_30776;
if(inst_30746){
var statearr_30816_30857 = state_30776__$1;
(statearr_30816_30857[(1)] = (30));

} else {
var statearr_30817_30858 = state_30776__$1;
(statearr_30817_30858[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (16))){
var inst_30712 = (state_30776[(2)]);
var inst_30713 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30714 = figwheel.client.heads_up.display_exception.call(null,inst_30713);
var state_30776__$1 = (function (){var statearr_30818 = state_30776;
(statearr_30818[(13)] = inst_30712);

return statearr_30818;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30776__$1,(17),inst_30714);
} else {
if((state_val_30777 === (30))){
var inst_30748 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30749 = figwheel.client.heads_up.display_warning.call(null,inst_30748);
var state_30776__$1 = state_30776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30776__$1,(33),inst_30749);
} else {
if((state_val_30777 === (10))){
var inst_30706 = (state_30776[(2)]);
var state_30776__$1 = state_30776;
var statearr_30819_30859 = state_30776__$1;
(statearr_30819_30859[(2)] = inst_30706);

(statearr_30819_30859[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (18))){
var inst_30722 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30723 = figwheel.client.heads_up.display_exception.call(null,inst_30722);
var state_30776__$1 = state_30776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30776__$1,(21),inst_30723);
} else {
if((state_val_30777 === (37))){
var inst_30759 = (state_30776[(2)]);
var state_30776__$1 = state_30776;
var statearr_30820_30860 = state_30776__$1;
(statearr_30820_30860[(2)] = inst_30759);

(statearr_30820_30860[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (8))){
var inst_30698 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30776__$1 = state_30776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30776__$1,(11),inst_30698);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26359__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26359__auto____0 = (function (){
var statearr_30821 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30821[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26359__auto__);

(statearr_30821[(1)] = (1));

return statearr_30821;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26359__auto____1 = (function (state_30776){
while(true){
var ret_value__26360__auto__ = (function (){try{while(true){
var result__26361__auto__ = switch__26358__auto__.call(null,state_30776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26361__auto__;
}
break;
}
}catch (e30822){if((e30822 instanceof Object)){
var ex__26362__auto__ = e30822;
var statearr_30823_30861 = state_30776;
(statearr_30823_30861[(5)] = ex__26362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30862 = state_30776;
state_30776 = G__30862;
continue;
} else {
return ret_value__26360__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26359__auto__ = function(state_30776){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26359__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26359__auto____1.call(this,state_30776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26359__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26359__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26359__auto__;
})()
})();
var state__26455__auto__ = (function (){var statearr_30824 = f__26454__auto__.call(null);
(statearr_30824[(6)] = c__26453__auto__);

return statearr_30824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
}));

return c__26453__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26453__auto___30891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26454__auto__ = (function (){var switch__26358__auto__ = (function (state_30877){
var state_val_30878 = (state_30877[(1)]);
if((state_val_30878 === (1))){
var state_30877__$1 = state_30877;
var statearr_30879_30892 = state_30877__$1;
(statearr_30879_30892[(2)] = null);

(statearr_30879_30892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30878 === (2))){
var state_30877__$1 = state_30877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30877__$1,(4),ch);
} else {
if((state_val_30878 === (3))){
var inst_30875 = (state_30877[(2)]);
var state_30877__$1 = state_30877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30877__$1,inst_30875);
} else {
if((state_val_30878 === (4))){
var inst_30865 = (state_30877[(7)]);
var inst_30865__$1 = (state_30877[(2)]);
var state_30877__$1 = (function (){var statearr_30880 = state_30877;
(statearr_30880[(7)] = inst_30865__$1);

return statearr_30880;
})();
if(cljs.core.truth_(inst_30865__$1)){
var statearr_30881_30893 = state_30877__$1;
(statearr_30881_30893[(1)] = (5));

} else {
var statearr_30882_30894 = state_30877__$1;
(statearr_30882_30894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30878 === (5))){
var inst_30865 = (state_30877[(7)]);
var inst_30867 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30865);
var state_30877__$1 = state_30877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30877__$1,(8),inst_30867);
} else {
if((state_val_30878 === (6))){
var state_30877__$1 = state_30877;
var statearr_30883_30895 = state_30877__$1;
(statearr_30883_30895[(2)] = null);

(statearr_30883_30895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30878 === (7))){
var inst_30873 = (state_30877[(2)]);
var state_30877__$1 = state_30877;
var statearr_30884_30896 = state_30877__$1;
(statearr_30884_30896[(2)] = inst_30873);

(statearr_30884_30896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30878 === (8))){
var inst_30869 = (state_30877[(2)]);
var state_30877__$1 = (function (){var statearr_30885 = state_30877;
(statearr_30885[(8)] = inst_30869);

return statearr_30885;
})();
var statearr_30886_30897 = state_30877__$1;
(statearr_30886_30897[(2)] = null);

(statearr_30886_30897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26359__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26359__auto____0 = (function (){
var statearr_30887 = [null,null,null,null,null,null,null,null,null];
(statearr_30887[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26359__auto__);

(statearr_30887[(1)] = (1));

return statearr_30887;
});
var figwheel$client$heads_up_plugin_$_state_machine__26359__auto____1 = (function (state_30877){
while(true){
var ret_value__26360__auto__ = (function (){try{while(true){
var result__26361__auto__ = switch__26358__auto__.call(null,state_30877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26361__auto__;
}
break;
}
}catch (e30888){if((e30888 instanceof Object)){
var ex__26362__auto__ = e30888;
var statearr_30889_30898 = state_30877;
(statearr_30889_30898[(5)] = ex__26362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30899 = state_30877;
state_30877 = G__30899;
continue;
} else {
return ret_value__26360__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26359__auto__ = function(state_30877){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26359__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26359__auto____1.call(this,state_30877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26359__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26359__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26359__auto__;
})()
})();
var state__26455__auto__ = (function (){var statearr_30890 = f__26454__auto__.call(null);
(statearr_30890[(6)] = c__26453__auto___30891);

return statearr_30890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26454__auto__ = (function (){var switch__26358__auto__ = (function (state_30905){
var state_val_30906 = (state_30905[(1)]);
if((state_val_30906 === (1))){
var inst_30900 = cljs.core.async.timeout.call(null,(3000));
var state_30905__$1 = state_30905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30905__$1,(2),inst_30900);
} else {
if((state_val_30906 === (2))){
var inst_30902 = (state_30905[(2)]);
var inst_30903 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30905__$1 = (function (){var statearr_30907 = state_30905;
(statearr_30907[(7)] = inst_30902);

return statearr_30907;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30905__$1,inst_30903);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26359__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26359__auto____0 = (function (){
var statearr_30908 = [null,null,null,null,null,null,null,null];
(statearr_30908[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26359__auto__);

(statearr_30908[(1)] = (1));

return statearr_30908;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26359__auto____1 = (function (state_30905){
while(true){
var ret_value__26360__auto__ = (function (){try{while(true){
var result__26361__auto__ = switch__26358__auto__.call(null,state_30905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26361__auto__;
}
break;
}
}catch (e30909){if((e30909 instanceof Object)){
var ex__26362__auto__ = e30909;
var statearr_30910_30912 = state_30905;
(statearr_30910_30912[(5)] = ex__26362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30913 = state_30905;
state_30905 = G__30913;
continue;
} else {
return ret_value__26360__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26359__auto__ = function(state_30905){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26359__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26359__auto____1.call(this,state_30905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26359__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26359__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26359__auto__;
})()
})();
var state__26455__auto__ = (function (){var statearr_30911 = f__26454__auto__.call(null);
(statearr_30911[(6)] = c__26453__auto__);

return statearr_30911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
}));

return c__26453__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26454__auto__ = (function (){var switch__26358__auto__ = (function (state_30920){
var state_val_30921 = (state_30920[(1)]);
if((state_val_30921 === (1))){
var inst_30914 = cljs.core.async.timeout.call(null,(2000));
var state_30920__$1 = state_30920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30920__$1,(2),inst_30914);
} else {
if((state_val_30921 === (2))){
var inst_30916 = (state_30920[(2)]);
var inst_30917 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_30918 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30917);
var state_30920__$1 = (function (){var statearr_30922 = state_30920;
(statearr_30922[(7)] = inst_30916);

return statearr_30922;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30920__$1,inst_30918);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26359__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26359__auto____0 = (function (){
var statearr_30923 = [null,null,null,null,null,null,null,null];
(statearr_30923[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26359__auto__);

(statearr_30923[(1)] = (1));

return statearr_30923;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26359__auto____1 = (function (state_30920){
while(true){
var ret_value__26360__auto__ = (function (){try{while(true){
var result__26361__auto__ = switch__26358__auto__.call(null,state_30920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26361__auto__;
}
break;
}
}catch (e30924){if((e30924 instanceof Object)){
var ex__26362__auto__ = e30924;
var statearr_30925_30927 = state_30920;
(statearr_30925_30927[(5)] = ex__26362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30928 = state_30920;
state_30920 = G__30928;
continue;
} else {
return ret_value__26360__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26359__auto__ = function(state_30920){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26359__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26359__auto____1.call(this,state_30920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26359__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26359__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26359__auto__;
})()
})();
var state__26455__auto__ = (function (){var statearr_30926 = f__26454__auto__.call(null);
(statearr_30926[(6)] = c__26453__auto__);

return statearr_30926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
}));

return c__26453__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30929){
var map__30930 = p__30929;
var map__30930__$1 = (((((!((map__30930 == null))))?(((((map__30930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30930):map__30930);
var file = cljs.core.get.call(null,map__30930__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30930__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30930__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30932 = "";
var G__30932__$1 = (cljs.core.truth_(file)?[G__30932,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30932);
var G__30932__$2 = (cljs.core.truth_(line)?[G__30932__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30932__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__30932__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30932__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30933){
var map__30934 = p__30933;
var map__30934__$1 = (((((!((map__30934 == null))))?(((((map__30934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30934):map__30934);
var ed = map__30934__$1;
var exception_data = cljs.core.get.call(null,map__30934__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30934__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_30937 = (function (){var G__30936 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30936)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__30936;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_30937);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30938){
var map__30939 = p__30938;
var map__30939__$1 = (((((!((map__30939 == null))))?(((((map__30939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30939):map__30939);
var w = map__30939__$1;
var message = cljs.core.get.call(null,map__30939__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources\\public\\js\\compiled\\out\\figwheel\\client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources\\public\\js\\compiled\\out\\figwheel\\client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4115__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30941 = cljs.core.seq.call(null,plugins);
var chunk__30942 = null;
var count__30943 = (0);
var i__30944 = (0);
while(true){
if((i__30944 < count__30943)){
var vec__30951 = cljs.core._nth.call(null,chunk__30942,i__30944);
var k = cljs.core.nth.call(null,vec__30951,(0),null);
var plugin = cljs.core.nth.call(null,vec__30951,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30957 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30941,chunk__30942,count__30943,i__30944,pl_30957,vec__30951,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30957.call(null,msg_hist);
});})(seq__30941,chunk__30942,count__30943,i__30944,pl_30957,vec__30951,k,plugin))
);
} else {
}


var G__30958 = seq__30941;
var G__30959 = chunk__30942;
var G__30960 = count__30943;
var G__30961 = (i__30944 + (1));
seq__30941 = G__30958;
chunk__30942 = G__30959;
count__30943 = G__30960;
i__30944 = G__30961;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30941);
if(temp__5720__auto__){
var seq__30941__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30941__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__30941__$1);
var G__30962 = cljs.core.chunk_rest.call(null,seq__30941__$1);
var G__30963 = c__4556__auto__;
var G__30964 = cljs.core.count.call(null,c__4556__auto__);
var G__30965 = (0);
seq__30941 = G__30962;
chunk__30942 = G__30963;
count__30943 = G__30964;
i__30944 = G__30965;
continue;
} else {
var vec__30954 = cljs.core.first.call(null,seq__30941__$1);
var k = cljs.core.nth.call(null,vec__30954,(0),null);
var plugin = cljs.core.nth.call(null,vec__30954,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30966 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30941,chunk__30942,count__30943,i__30944,pl_30966,vec__30954,k,plugin,seq__30941__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30966.call(null,msg_hist);
});})(seq__30941,chunk__30942,count__30943,i__30944,pl_30966,vec__30954,k,plugin,seq__30941__$1,temp__5720__auto__))
);
} else {
}


var G__30967 = cljs.core.next.call(null,seq__30941__$1);
var G__30968 = null;
var G__30969 = (0);
var G__30970 = (0);
seq__30941 = G__30967;
chunk__30942 = G__30968;
count__30943 = G__30969;
i__30944 = G__30970;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__30972 = arguments.length;
switch (G__30972) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__30973_30978 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30974_30979 = null;
var count__30975_30980 = (0);
var i__30976_30981 = (0);
while(true){
if((i__30976_30981 < count__30975_30980)){
var msg_30982 = cljs.core._nth.call(null,chunk__30974_30979,i__30976_30981);
figwheel.client.socket.handle_incoming_message.call(null,msg_30982);


var G__30983 = seq__30973_30978;
var G__30984 = chunk__30974_30979;
var G__30985 = count__30975_30980;
var G__30986 = (i__30976_30981 + (1));
seq__30973_30978 = G__30983;
chunk__30974_30979 = G__30984;
count__30975_30980 = G__30985;
i__30976_30981 = G__30986;
continue;
} else {
var temp__5720__auto___30987 = cljs.core.seq.call(null,seq__30973_30978);
if(temp__5720__auto___30987){
var seq__30973_30988__$1 = temp__5720__auto___30987;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30973_30988__$1)){
var c__4556__auto___30989 = cljs.core.chunk_first.call(null,seq__30973_30988__$1);
var G__30990 = cljs.core.chunk_rest.call(null,seq__30973_30988__$1);
var G__30991 = c__4556__auto___30989;
var G__30992 = cljs.core.count.call(null,c__4556__auto___30989);
var G__30993 = (0);
seq__30973_30978 = G__30990;
chunk__30974_30979 = G__30991;
count__30975_30980 = G__30992;
i__30976_30981 = G__30993;
continue;
} else {
var msg_30994 = cljs.core.first.call(null,seq__30973_30988__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30994);


var G__30995 = cljs.core.next.call(null,seq__30973_30988__$1);
var G__30996 = null;
var G__30997 = (0);
var G__30998 = (0);
seq__30973_30978 = G__30995;
chunk__30974_30979 = G__30996;
count__30975_30980 = G__30997;
i__30976_30981 = G__30998;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31003 = arguments.length;
var i__4737__auto___31004 = (0);
while(true){
if((i__4737__auto___31004 < len__4736__auto___31003)){
args__4742__auto__.push((arguments[i__4737__auto___31004]));

var G__31005 = (i__4737__auto___31004 + (1));
i__4737__auto___31004 = G__31005;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31000){
var map__31001 = p__31000;
var map__31001__$1 = (((((!((map__31001 == null))))?(((((map__31001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31001):map__31001);
var opts = map__31001__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30999){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30999));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31006){if((e31006 instanceof Error)){
var e = e31006;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31006;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__31007){
var map__31008 = p__31007;
var map__31008__$1 = (((((!((map__31008 == null))))?(((((map__31008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31008):map__31008);
var msg_name = cljs.core.get.call(null,map__31008__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1708005028341
