// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__26513 = arguments.length;
switch (G__26513) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26514 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26514 = (function (f,blockable,meta26515){
this.f = f;
this.blockable = blockable;
this.meta26515 = meta26515;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26516,meta26515__$1){
var self__ = this;
var _26516__$1 = this;
return (new cljs.core.async.t_cljs$core$async26514(self__.f,self__.blockable,meta26515__$1));
}));

(cljs.core.async.t_cljs$core$async26514.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26516){
var self__ = this;
var _26516__$1 = this;
return self__.meta26515;
}));

(cljs.core.async.t_cljs$core$async26514.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26514.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26514.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async26514.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async26514.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26515","meta26515",90695182,null)], null);
}));

(cljs.core.async.t_cljs$core$async26514.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26514.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26514");

(cljs.core.async.t_cljs$core$async26514.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26514");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26514.
 */
cljs.core.async.__GT_t_cljs$core$async26514 = (function cljs$core$async$__GT_t_cljs$core$async26514(f__$1,blockable__$1,meta26515){
return (new cljs.core.async.t_cljs$core$async26514(f__$1,blockable__$1,meta26515));
});

}

return (new cljs.core.async.t_cljs$core$async26514(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__26520 = arguments.length;
switch (G__26520) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__26523 = arguments.length;
switch (G__26523) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__26526 = arguments.length;
switch (G__26526) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26528 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26528);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_26528);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__26530 = arguments.length;
switch (G__26530) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___26532 = n;
var x_26533 = (0);
while(true){
if((x_26533 < n__4613__auto___26532)){
(a[x_26533] = x_26533);

var G__26534 = (x_26533 + (1));
x_26533 = G__26534;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26535 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26535 = (function (flag,meta26536){
this.flag = flag;
this.meta26536 = meta26536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26537,meta26536__$1){
var self__ = this;
var _26537__$1 = this;
return (new cljs.core.async.t_cljs$core$async26535(self__.flag,meta26536__$1));
}));

(cljs.core.async.t_cljs$core$async26535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26537){
var self__ = this;
var _26537__$1 = this;
return self__.meta26536;
}));

(cljs.core.async.t_cljs$core$async26535.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26535.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async26535.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26535.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async26535.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26536","meta26536",-295074672,null)], null);
}));

(cljs.core.async.t_cljs$core$async26535.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26535");

(cljs.core.async.t_cljs$core$async26535.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26535");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26535.
 */
cljs.core.async.__GT_t_cljs$core$async26535 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26535(flag__$1,meta26536){
return (new cljs.core.async.t_cljs$core$async26535(flag__$1,meta26536));
});

}

return (new cljs.core.async.t_cljs$core$async26535(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26538 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26538 = (function (flag,cb,meta26539){
this.flag = flag;
this.cb = cb;
this.meta26539 = meta26539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26540,meta26539__$1){
var self__ = this;
var _26540__$1 = this;
return (new cljs.core.async.t_cljs$core$async26538(self__.flag,self__.cb,meta26539__$1));
}));

(cljs.core.async.t_cljs$core$async26538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26540){
var self__ = this;
var _26540__$1 = this;
return self__.meta26539;
}));

(cljs.core.async.t_cljs$core$async26538.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26538.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async26538.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26538.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async26538.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26539","meta26539",1642457799,null)], null);
}));

(cljs.core.async.t_cljs$core$async26538.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26538.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26538");

(cljs.core.async.t_cljs$core$async26538.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26538");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26538.
 */
cljs.core.async.__GT_t_cljs$core$async26538 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26538(flag__$1,cb__$1,meta26539){
return (new cljs.core.async.t_cljs$core$async26538(flag__$1,cb__$1,meta26539));
});

}

return (new cljs.core.async.t_cljs$core$async26538(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26541_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26541_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26542_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26542_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26543 = (i + (1));
i = G__26543;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26549 = arguments.length;
var i__4737__auto___26550 = (0);
while(true){
if((i__4737__auto___26550 < len__4736__auto___26549)){
args__4742__auto__.push((arguments[i__4737__auto___26550]));

var G__26551 = (i__4737__auto___26550 + (1));
i__4737__auto___26550 = G__26551;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26546){
var map__26547 = p__26546;
var map__26547__$1 = (((((!((map__26547 == null))))?(((((map__26547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26547):map__26547);
var opts = map__26547__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26544){
var G__26545 = cljs.core.first.call(null,seq26544);
var seq26544__$1 = cljs.core.next.call(null,seq26544);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26545,seq26544__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__26553 = arguments.length;
switch (G__26553) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26453__auto___26599 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26454__auto__ = (function (){var switch__26358__auto__ = (function (state_26577){
var state_val_26578 = (state_26577[(1)]);
if((state_val_26578 === (7))){
var inst_26573 = (state_26577[(2)]);
var state_26577__$1 = state_26577;
var statearr_26579_26600 = state_26577__$1;
(statearr_26579_26600[(2)] = inst_26573);

(statearr_26579_26600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (1))){
var state_26577__$1 = state_26577;
var statearr_26580_26601 = state_26577__$1;
(statearr_26580_26601[(2)] = null);

(statearr_26580_26601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (4))){
var inst_26556 = (state_26577[(7)]);
var inst_26556__$1 = (state_26577[(2)]);
var inst_26557 = (inst_26556__$1 == null);
var state_26577__$1 = (function (){var statearr_26581 = state_26577;
(statearr_26581[(7)] = inst_26556__$1);

return statearr_26581;
})();
if(cljs.core.truth_(inst_26557)){
var statearr_26582_26602 = state_26577__$1;
(statearr_26582_26602[(1)] = (5));

} else {
var statearr_26583_26603 = state_26577__$1;
(statearr_26583_26603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (13))){
var state_26577__$1 = state_26577;
var statearr_26584_26604 = state_26577__$1;
(statearr_26584_26604[(2)] = null);

(statearr_26584_26604[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (6))){
var inst_26556 = (state_26577[(7)]);
var state_26577__$1 = state_26577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26577__$1,(11),to,inst_26556);
} else {
if((state_val_26578 === (3))){
var inst_26575 = (state_26577[(2)]);
var state_26577__$1 = state_26577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26577__$1,inst_26575);
} else {
if((state_val_26578 === (12))){
var state_26577__$1 = state_26577;
var statearr_26585_26605 = state_26577__$1;
(statearr_26585_26605[(2)] = null);

(statearr_26585_26605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (2))){
var state_26577__$1 = state_26577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26577__$1,(4),from);
} else {
if((state_val_26578 === (11))){
var inst_26566 = (state_26577[(2)]);
var state_26577__$1 = state_26577;
if(cljs.core.truth_(inst_26566)){
var statearr_26586_26606 = state_26577__$1;
(statearr_26586_26606[(1)] = (12));

} else {
var statearr_26587_26607 = state_26577__$1;
(statearr_26587_26607[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (9))){
var state_26577__$1 = state_26577;
var statearr_26588_26608 = state_26577__$1;
(statearr_26588_26608[(2)] = null);

(statearr_26588_26608[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (5))){
var state_26577__$1 = state_26577;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26589_26609 = state_26577__$1;
(statearr_26589_26609[(1)] = (8));

} else {
var statearr_26590_26610 = state_26577__$1;
(statearr_26590_26610[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (14))){
var inst_26571 = (state_26577[(2)]);
var state_26577__$1 = state_26577;
var statearr_26591_26611 = state_26577__$1;
(statearr_26591_26611[(2)] = inst_26571);

(statearr_26591_26611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (10))){
var inst_26563 = (state_26577[(2)]);
var state_26577__$1 = state_26577;
var statearr_26592_26612 = state_26577__$1;
(statearr_26592_26612[(2)] = inst_26563);

(statearr_26592_26612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (8))){
var inst_26560 = cljs.core.async.close_BANG_.call(null,to);
var state_26577__$1 = state_26577;
var statearr_26593_26613 = state_26577__$1;
(statearr_26593_26613[(2)] = inst_26560);

(statearr_26593_26613[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__26359__auto__ = null;
var cljs$core$async$state_machine__26359__auto____0 = (function (){
var statearr_26594 = [null,null,null,null,null,null,null,null];
(statearr_26594[(0)] = cljs$core$async$state_machine__26359__auto__);

(statearr_26594[(1)] = (1));

return statearr_26594;
});
var cljs$core$async$state_machine__26359__auto____1 = (function (state_26577){
while(true){
var ret_value__26360__auto__ = (function (){try{while(true){
var result__26361__auto__ = switch__26358__auto__.call(null,state_26577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26361__auto__;
}
break;
}
}catch (e26595){if((e26595 instanceof Object)){
var ex__26362__auto__ = e26595;
var statearr_26596_26614 = state_26577;
(statearr_26596_26614[(5)] = ex__26362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26615 = state_26577;
state_26577 = G__26615;
continue;
} else {
return ret_value__26360__auto__;
}
break;
}
});
cljs$core$async$state_machine__26359__auto__ = function(state_26577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26359__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26359__auto____1.call(this,state_26577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26359__auto____0;
cljs$core$async$state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26359__auto____1;
return cljs$core$async$state_machine__26359__auto__;
})()
})();
var state__26455__auto__ = (function (){var statearr_26597 = f__26454__auto__.call(null);
(statearr_26597[(6)] = c__26453__auto___26599);

return statearr_26597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__26616){
var vec__26617 = p__26616;
var v = cljs.core.nth.call(null,vec__26617,(0),null);
var p = cljs.core.nth.call(null,vec__26617,(1),null);
var job = vec__26617;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26453__auto___26788 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26454__auto__ = (function (){var switch__26358__auto__ = (function (state_26624){
var state_val_26625 = (state_26624[(1)]);
if((state_val_26625 === (1))){
var state_26624__$1 = state_26624;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26624__$1,(2),res,v);
} else {
if((state_val_26625 === (2))){
var inst_26621 = (state_26624[(2)]);
var inst_26622 = cljs.core.async.close_BANG_.call(null,res);
var state_26624__$1 = (function (){var statearr_26626 = state_26624;
(statearr_26626[(7)] = inst_26621);

return statearr_26626;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26624__$1,inst_26622);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26359__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26359__auto____0 = (function (){
var statearr_26627 = [null,null,null,null,null,null,null,null];
(statearr_26627[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26359__auto__);

(statearr_26627[(1)] = (1));

return statearr_26627;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26359__auto____1 = (function (state_26624){
while(true){
var ret_value__26360__auto__ = (function (){try{while(true){
var result__26361__auto__ = switch__26358__auto__.call(null,state_26624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26361__auto__;
}
break;
}
}catch (e26628){if((e26628 instanceof Object)){
var ex__26362__auto__ = e26628;
var statearr_26629_26789 = state_26624;
(statearr_26629_26789[(5)] = ex__26362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26790 = state_26624;
state_26624 = G__26790;
continue;
} else {
return ret_value__26360__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26359__auto__ = function(state_26624){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26359__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26359__auto____1.call(this,state_26624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26359__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26359__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26359__auto__;
})()
})();
var state__26455__auto__ = (function (){var statearr_26630 = f__26454__auto__.call(null);
(statearr_26630[(6)] = c__26453__auto___26788);

return statearr_26630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__26631){
var vec__26632 = p__26631;
var v = cljs.core.nth.call(null,vec__26632,(0),null);
var p = cljs.core.nth.call(null,vec__26632,(1),null);
var job = vec__26632;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___26791 = n;
var __26792 = (0);
while(true){
if((__26792 < n__4613__auto___26791)){
var G__26635_26793 = type;
var G__26635_26794__$1 = (((G__26635_26793 instanceof cljs.core.Keyword))?G__26635_26793.fqn:null);
switch (G__26635_26794__$1) {
case "compute":
var c__26453__auto___26796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26792,c__26453__auto___26796,G__26635_26793,G__26635_26794__$1,n__4613__auto___26791,jobs,results,process,async){
return (function (){
var f__26454__auto__ = (function (){var switch__26358__auto__ = ((function (__26792,c__26453__auto___26796,G__26635_26793,G__26635_26794__$1,n__4613__auto___26791,jobs,results,process,async){
return (function (state_26648){
var state_val_26649 = (state_26648[(1)]);
if((state_val_26649 === (1))){
var state_26648__$1 = state_26648;
var statearr_26650_26797 = state_26648__$1;
(statearr_26650_26797[(2)] = null);

(statearr_26650_26797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26649 === (2))){
var state_26648__$1 = state_26648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26648__$1,(4),jobs);
} else {
if((state_val_26649 === (3))){
var inst_26646 = (state_26648[(2)]);
var state_26648__$1 = state_26648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26648__$1,inst_26646);
} else {
if((state_val_26649 === (4))){
var inst_26638 = (state_26648[(2)]);
var inst_26639 = process.call(null,inst_26638);
var state_26648__$1 = state_26648;
if(cljs.core.truth_(inst_26639)){
var statearr_26651_26798 = state_26648__$1;
(statearr_26651_26798[(1)] = (5));

} else {
var statearr_26652_26799 = state_26648__$1;
(statearr_26652_26799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26649 === (5))){
var state_26648__$1 = state_26648;
var statearr_26653_26800 = state_26648__$1;
(statearr_26653_26800[(2)] = null);

(statearr_26653_26800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26649 === (6))){
var state_26648__$1 = state_26648;
var statearr_26654_26801 = state_26648__$1;
(statearr_26654_26801[(2)] = null);

(statearr_26654_26801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26649 === (7))){
var inst_26644 = (state_26648[(2)]);
var state_26648__$1 = state_26648;
var statearr_26655_26802 = state_26648__$1;
(statearr_26655_26802[(2)] = inst_26644);

(statearr_26655_26802[(1)] = (3));


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
});})(__26792,c__26453__auto___26796,G__26635_26793,G__26635_26794__$1,n__4613__auto___26791,jobs,results,process,async))
;
return ((function (__26792,switch__26358__auto__,c__26453__auto___26796,G__26635_26793,G__26635_26794__$1,n__4613__auto___26791,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26359__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26359__auto____0 = (function (){
var statearr_26656 = [null,null,null,null,null,null,null];
(statearr_26656[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26359__auto__);

(statearr_26656[(1)] = (1));

return statearr_26656;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26359__auto____1 = (function (state_26648){
while(true){
var ret_value__26360__auto__ = (function (){try{while(true){
var result__26361__auto__ = switch__26358__auto__.call(null,state_26648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26361__auto__;
}
break;
}
}catch (e26657){if((e26657 instanceof Object)){
var ex__26362__auto__ = e26657;
var statearr_26658_26803 = state_26648;
(statearr_26658_26803[(5)] = ex__26362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26804 = state_26648;
state_26648 = G__26804;
continue;
} else {
return ret_value__26360__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26359__auto__ = function(state_26648){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26359__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26359__auto____1.call(this,state_26648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26359__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26359__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26359__auto__;
})()
;})(__26792,switch__26358__auto__,c__26453__auto___26796,G__26635_26793,G__26635_26794__$1,n__4613__auto___26791,jobs,results,process,async))
})();
var state__26455__auto__ = (function (){var statearr_26659 = f__26454__auto__.call(null);
(statearr_26659[(6)] = c__26453__auto___26796);

return statearr_26659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
});})(__26792,c__26453__auto___26796,G__26635_26793,G__26635_26794__$1,n__4613__auto___26791,jobs,results,process,async))
);


break;
case "async":
var c__26453__auto___26805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26792,c__26453__auto___26805,G__26635_26793,G__26635_26794__$1,n__4613__auto___26791,jobs,results,process,async){
return (function (){
var f__26454__auto__ = (function (){var switch__26358__auto__ = ((function (__26792,c__26453__auto___26805,G__26635_26793,G__26635_26794__$1,n__4613__auto___26791,jobs,results,process,async){
return (function (state_26672){
var state_val_26673 = (state_26672[(1)]);
if((state_val_26673 === (1))){
var state_26672__$1 = state_26672;
var statearr_26674_26806 = state_26672__$1;
(statearr_26674_26806[(2)] = null);

(statearr_26674_26806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (2))){
var state_26672__$1 = state_26672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26672__$1,(4),jobs);
} else {
if((state_val_26673 === (3))){
var inst_26670 = (state_26672[(2)]);
var state_26672__$1 = state_26672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26672__$1,inst_26670);
} else {
if((state_val_26673 === (4))){
var inst_26662 = (state_26672[(2)]);
var inst_26663 = async.call(null,inst_26662);
var state_26672__$1 = state_26672;
if(cljs.core.truth_(inst_26663)){
var statearr_26675_26807 = state_26672__$1;
(statearr_26675_26807[(1)] = (5));

} else {
var statearr_26676_26808 = state_26672__$1;
(statearr_26676_26808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (5))){
var state_26672__$1 = state_26672;
var statearr_26677_26809 = state_26672__$1;
(statearr_26677_26809[(2)] = null);

(statearr_26677_26809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (6))){
var state_26672__$1 = state_26672;
var statearr_26678_26810 = state_26672__$1;
(statearr_26678_26810[(2)] = null);

(statearr_26678_26810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (7))){
var inst_26668 = (state_26672[(2)]);
var state_26672__$1 = state_26672;
var statearr_26679_26811 = state_26672__$1;
(statearr_26679_26811[(2)] = inst_26668);

(statearr_26679_26811[(1)] = (3));


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
});})(__26792,c__26453__auto___26805,G__26635_26793,G__26635_26794__$1,n__4613__auto___26791,jobs,results,process,async))
;
return ((function (__26792,switch__26358__auto__,c__26453__auto___26805,G__26635_26793,G__26635_26794__$1,n__4613__auto___26791,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26359__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26359__auto____0 = (function (){
var statearr_26680 = [null,null,null,null,null,null,null];
(statearr_26680[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26359__auto__);

(statearr_26680[(1)] = (1));

return statearr_26680;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26359__auto____1 = (function (state_26672){
while(true){
var ret_value__26360__auto__ = (function (){try{while(true){
var result__26361__auto__ = switch__26358__auto__.call(null,state_26672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26361__auto__;
}
break;
}
}catch (e26681){if((e26681 instanceof Object)){
var ex__26362__auto__ = e26681;
var statearr_26682_26812 = state_26672;
(statearr_26682_26812[(5)] = ex__26362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26681;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26813 = state_26672;
state_26672 = G__26813;
continue;
} else {
return ret_value__26360__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26359__auto__ = function(state_26672){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26359__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26359__auto____1.call(this,state_26672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26359__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26359__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26359__auto__;
})()
;})(__26792,switch__26358__auto__,c__26453__auto___26805,G__26635_26793,G__26635_26794__$1,n__4613__auto___26791,jobs,results,process,async))
})();
var state__26455__auto__ = (function (){var statearr_26683 = f__26454__auto__.call(null);
(statearr_26683[(6)] = c__26453__auto___26805);

return statearr_26683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
});})(__26792,c__26453__auto___26805,G__26635_26793,G__26635_26794__$1,n__4613__auto___26791,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26635_26794__$1)].join('')));

}

var G__26814 = (__26792 + (1));
__26792 = G__26814;
continue;
} else {
}
break;
}

var c__26453__auto___26815 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26454__auto__ = (function (){var switch__26358__auto__ = (function (state_26705){
var state_val_26706 = (state_26705[(1)]);
if((state_val_26706 === (7))){
var inst_26701 = (state_26705[(2)]);
var state_26705__$1 = state_26705;
var statearr_26707_26816 = state_26705__$1;
(statearr_26707_26816[(2)] = inst_26701);

(statearr_26707_26816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26706 === (1))){
var state_26705__$1 = state_26705;
var statearr_26708_26817 = state_26705__$1;
(statearr_26708_26817[(2)] = null);

(statearr_26708_26817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26706 === (4))){
var inst_26686 = (state_26705[(7)]);
var inst_26686__$1 = (state_26705[(2)]);
var inst_26687 = (inst_26686__$1 == null);
var state_26705__$1 = (function (){var statearr_26709 = state_26705;
(statearr_26709[(7)] = inst_26686__$1);

return statearr_26709;
})();
if(cljs.core.truth_(inst_26687)){
var statearr_26710_26818 = state_26705__$1;
(statearr_26710_26818[(1)] = (5));

} else {
var statearr_26711_26819 = state_26705__$1;
(statearr_26711_26819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26706 === (6))){
var inst_26691 = (state_26705[(8)]);
var inst_26686 = (state_26705[(7)]);
var inst_26691__$1 = cljs.core.async.chan.call(null,(1));
var inst_26692 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26693 = [inst_26686,inst_26691__$1];
var inst_26694 = (new cljs.core.PersistentVector(null,2,(5),inst_26692,inst_26693,null));
var state_26705__$1 = (function (){var statearr_26712 = state_26705;
(statearr_26712[(8)] = inst_26691__$1);

return statearr_26712;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26705__$1,(8),jobs,inst_26694);
} else {
if((state_val_26706 === (3))){
var inst_26703 = (state_26705[(2)]);
var state_26705__$1 = state_26705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26705__$1,inst_26703);
} else {
if((state_val_26706 === (2))){
var state_26705__$1 = state_26705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26705__$1,(4),from);
} else {
if((state_val_26706 === (9))){
var inst_26698 = (state_26705[(2)]);
var state_26705__$1 = (function (){var statearr_26713 = state_26705;
(statearr_26713[(9)] = inst_26698);

return statearr_26713;
})();
var statearr_26714_26820 = state_26705__$1;
(statearr_26714_26820[(2)] = null);

(statearr_26714_26820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26706 === (5))){
var inst_26689 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26705__$1 = state_26705;
var statearr_26715_26821 = state_26705__$1;
(statearr_26715_26821[(2)] = inst_26689);

(statearr_26715_26821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26706 === (8))){
var inst_26691 = (state_26705[(8)]);
var inst_26696 = (state_26705[(2)]);
var state_26705__$1 = (function (){var statearr_26716 = state_26705;
(statearr_26716[(10)] = inst_26696);

return statearr_26716;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26705__$1,(9),results,inst_26691);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26359__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26359__auto____0 = (function (){
var statearr_26717 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26717[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26359__auto__);

(statearr_26717[(1)] = (1));

return statearr_26717;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26359__auto____1 = (function (state_26705){
while(true){
var ret_value__26360__auto__ = (function (){try{while(true){
var result__26361__auto__ = switch__26358__auto__.call(null,state_26705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26361__auto__;
}
break;
}
}catch (e26718){if((e26718 instanceof Object)){
var ex__26362__auto__ = e26718;
var statearr_26719_26822 = state_26705;
(statearr_26719_26822[(5)] = ex__26362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26823 = state_26705;
state_26705 = G__26823;
continue;
} else {
return ret_value__26360__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26359__auto__ = function(state_26705){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26359__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26359__auto____1.call(this,state_26705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26359__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26359__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26359__auto__;
})()
})();
var state__26455__auto__ = (function (){var statearr_26720 = f__26454__auto__.call(null);
(statearr_26720[(6)] = c__26453__auto___26815);

return statearr_26720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
}));


var c__26453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26454__auto__ = (function (){var switch__26358__auto__ = (function (state_26758){
var state_val_26759 = (state_26758[(1)]);
if((state_val_26759 === (7))){
var inst_26754 = (state_26758[(2)]);
var state_26758__$1 = state_26758;
var statearr_26760_26824 = state_26758__$1;
(statearr_26760_26824[(2)] = inst_26754);

(statearr_26760_26824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (20))){
var state_26758__$1 = state_26758;
var statearr_26761_26825 = state_26758__$1;
(statearr_26761_26825[(2)] = null);

(statearr_26761_26825[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (1))){
var state_26758__$1 = state_26758;
var statearr_26762_26826 = state_26758__$1;
(statearr_26762_26826[(2)] = null);

(statearr_26762_26826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (4))){
var inst_26723 = (state_26758[(7)]);
var inst_26723__$1 = (state_26758[(2)]);
var inst_26724 = (inst_26723__$1 == null);
var state_26758__$1 = (function (){var statearr_26763 = state_26758;
(statearr_26763[(7)] = inst_26723__$1);

return statearr_26763;
})();
if(cljs.core.truth_(inst_26724)){
var statearr_26764_26827 = state_26758__$1;
(statearr_26764_26827[(1)] = (5));

} else {
var statearr_26765_26828 = state_26758__$1;
(statearr_26765_26828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (15))){
var inst_26736 = (state_26758[(8)]);
var state_26758__$1 = state_26758;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26758__$1,(18),to,inst_26736);
} else {
if((state_val_26759 === (21))){
var inst_26749 = (state_26758[(2)]);
var state_26758__$1 = state_26758;
var statearr_26766_26829 = state_26758__$1;
(statearr_26766_26829[(2)] = inst_26749);

(statearr_26766_26829[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (13))){
var inst_26751 = (state_26758[(2)]);
var state_26758__$1 = (function (){var statearr_26767 = state_26758;
(statearr_26767[(9)] = inst_26751);

return statearr_26767;
})();
var statearr_26768_26830 = state_26758__$1;
(statearr_26768_26830[(2)] = null);

(statearr_26768_26830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (6))){
var inst_26723 = (state_26758[(7)]);
var state_26758__$1 = state_26758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26758__$1,(11),inst_26723);
} else {
if((state_val_26759 === (17))){
var inst_26744 = (state_26758[(2)]);
var state_26758__$1 = state_26758;
if(cljs.core.truth_(inst_26744)){
var statearr_26769_26831 = state_26758__$1;
(statearr_26769_26831[(1)] = (19));

} else {
var statearr_26770_26832 = state_26758__$1;
(statearr_26770_26832[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (3))){
var inst_26756 = (state_26758[(2)]);
var state_26758__$1 = state_26758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26758__$1,inst_26756);
} else {
if((state_val_26759 === (12))){
var inst_26733 = (state_26758[(10)]);
var state_26758__$1 = state_26758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26758__$1,(14),inst_26733);
} else {
if((state_val_26759 === (2))){
var state_26758__$1 = state_26758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26758__$1,(4),results);
} else {
if((state_val_26759 === (19))){
var state_26758__$1 = state_26758;
var statearr_26771_26833 = state_26758__$1;
(statearr_26771_26833[(2)] = null);

(statearr_26771_26833[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (11))){
var inst_26733 = (state_26758[(2)]);
var state_26758__$1 = (function (){var statearr_26772 = state_26758;
(statearr_26772[(10)] = inst_26733);

return statearr_26772;
})();
var statearr_26773_26834 = state_26758__$1;
(statearr_26773_26834[(2)] = null);

(statearr_26773_26834[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (9))){
var state_26758__$1 = state_26758;
var statearr_26774_26835 = state_26758__$1;
(statearr_26774_26835[(2)] = null);

(statearr_26774_26835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (5))){
var state_26758__$1 = state_26758;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26775_26836 = state_26758__$1;
(statearr_26775_26836[(1)] = (8));

} else {
var statearr_26776_26837 = state_26758__$1;
(statearr_26776_26837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (14))){
var inst_26736 = (state_26758[(8)]);
var inst_26736__$1 = (state_26758[(2)]);
var inst_26737 = (inst_26736__$1 == null);
var inst_26738 = cljs.core.not.call(null,inst_26737);
var state_26758__$1 = (function (){var statearr_26777 = state_26758;
(statearr_26777[(8)] = inst_26736__$1);

return statearr_26777;
})();
if(inst_26738){
var statearr_26778_26838 = state_26758__$1;
(statearr_26778_26838[(1)] = (15));

} else {
var statearr_26779_26839 = state_26758__$1;
(statearr_26779_26839[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (16))){
var state_26758__$1 = state_26758;
var statearr_26780_26840 = state_26758__$1;
(statearr_26780_26840[(2)] = false);

(statearr_26780_26840[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (10))){
var inst_26730 = (state_26758[(2)]);
var state_26758__$1 = state_26758;
var statearr_26781_26841 = state_26758__$1;
(statearr_26781_26841[(2)] = inst_26730);

(statearr_26781_26841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (18))){
var inst_26741 = (state_26758[(2)]);
var state_26758__$1 = state_26758;
var statearr_26782_26842 = state_26758__$1;
(statearr_26782_26842[(2)] = inst_26741);

(statearr_26782_26842[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (8))){
var inst_26727 = cljs.core.async.close_BANG_.call(null,to);
var state_26758__$1 = state_26758;
var statearr_26783_26843 = state_26758__$1;
(statearr_26783_26843[(2)] = inst_26727);

(statearr_26783_26843[(1)] = (10));


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
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26359__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26359__auto____0 = (function (){
var statearr_26784 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26784[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26359__auto__);

(statearr_26784[(1)] = (1));

return statearr_26784;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26359__auto____1 = (function (state_26758){
while(true){
var ret_value__26360__auto__ = (function (){try{while(true){
var result__26361__auto__ = switch__26358__auto__.call(null,state_26758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26361__auto__;
}
break;
}
}catch (e26785){if((e26785 instanceof Object)){
var ex__26362__auto__ = e26785;
var statearr_26786_26844 = state_26758;
(statearr_26786_26844[(5)] = ex__26362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26845 = state_26758;
state_26758 = G__26845;
continue;
} else {
return ret_value__26360__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26359__auto__ = function(state_26758){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26359__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26359__auto____1.call(this,state_26758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26359__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26359__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26359__auto__;
})()
})();
var state__26455__auto__ = (function (){var statearr_26787 = f__26454__auto__.call(null);
(statearr_26787[(6)] = c__26453__auto__);

return statearr_26787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
}));

return c__26453__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__26847 = arguments.length;
switch (G__26847) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__26850 = arguments.length;
switch (G__26850) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__26853 = arguments.length;
switch (G__26853) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26453__auto___26902 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26454__auto__ = (function (){var switch__26358__auto__ = (function (state_26879){
var state_val_26880 = (state_26879[(1)]);
if((state_val_26880 === (7))){
var inst_26875 = (state_26879[(2)]);
var state_26879__$1 = state_26879;
var statearr_26881_26903 = state_26879__$1;
(statearr_26881_26903[(2)] = inst_26875);

(statearr_26881_26903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26880 === (1))){
var state_26879__$1 = state_26879;
var statearr_26882_26904 = state_26879__$1;
(statearr_26882_26904[(2)] = null);

(statearr_26882_26904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26880 === (4))){
var inst_26856 = (state_26879[(7)]);
var inst_26856__$1 = (state_26879[(2)]);
var inst_26857 = (inst_26856__$1 == null);
var state_26879__$1 = (function (){var statearr_26883 = state_26879;
(statearr_26883[(7)] = inst_26856__$1);

return statearr_26883;
})();
if(cljs.core.truth_(inst_26857)){
var statearr_26884_26905 = state_26879__$1;
(statearr_26884_26905[(1)] = (5));

} else {
var statearr_26885_26906 = state_26879__$1;
(statearr_26885_26906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26880 === (13))){
var state_26879__$1 = state_26879;
var statearr_26886_26907 = state_26879__$1;
(statearr_26886_26907[(2)] = null);

(statearr_26886_26907[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26880 === (6))){
var inst_26856 = (state_26879[(7)]);
var inst_26862 = p.call(null,inst_26856);
var state_26879__$1 = state_26879;
if(cljs.core.truth_(inst_26862)){
var statearr_26887_26908 = state_26879__$1;
(statearr_26887_26908[(1)] = (9));

} else {
var statearr_26888_26909 = state_26879__$1;
(statearr_26888_26909[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26880 === (3))){
var inst_26877 = (state_26879[(2)]);
var state_26879__$1 = state_26879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26879__$1,inst_26877);
} else {
if((state_val_26880 === (12))){
var state_26879__$1 = state_26879;
var statearr_26889_26910 = state_26879__$1;
(statearr_26889_26910[(2)] = null);

(statearr_26889_26910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26880 === (2))){
var state_26879__$1 = state_26879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26879__$1,(4),ch);
} else {
if((state_val_26880 === (11))){
var inst_26856 = (state_26879[(7)]);
var inst_26866 = (state_26879[(2)]);
var state_26879__$1 = state_26879;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26879__$1,(8),inst_26866,inst_26856);
} else {
if((state_val_26880 === (9))){
var state_26879__$1 = state_26879;
var statearr_26890_26911 = state_26879__$1;
(statearr_26890_26911[(2)] = tc);

(statearr_26890_26911[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26880 === (5))){
var inst_26859 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26860 = cljs.core.async.close_BANG_.call(null,fc);
var state_26879__$1 = (function (){var statearr_26891 = state_26879;
(statearr_26891[(8)] = inst_26859);

return statearr_26891;
})();
var statearr_26892_26912 = state_26879__$1;
(statearr_26892_26912[(2)] = inst_26860);

(statearr_26892_26912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26880 === (14))){
var inst_26873 = (state_26879[(2)]);
var state_26879__$1 = state_26879;
var statearr_26893_26913 = state_26879__$1;
(statearr_26893_26913[(2)] = inst_26873);

(statearr_26893_26913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26880 === (10))){
var state_26879__$1 = state_26879;
var statearr_26894_26914 = state_26879__$1;
(statearr_26894_26914[(2)] = fc);

(statearr_26894_26914[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26880 === (8))){
var inst_26868 = (state_26879[(2)]);
var state_26879__$1 = state_26879;
if(cljs.core.truth_(inst_26868)){
var statearr_26895_26915 = state_26879__$1;
(statearr_26895_26915[(1)] = (12));

} else {
var statearr_26896_26916 = state_26879__$1;
(statearr_26896_26916[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__26359__auto__ = null;
var cljs$core$async$state_machine__26359__auto____0 = (function (){
var statearr_26897 = [null,null,null,null,null,null,null,null,null];
(statearr_26897[(0)] = cljs$core$async$state_machine__26359__auto__);

(statearr_26897[(1)] = (1));

return statearr_26897;
});
var cljs$core$async$state_machine__26359__auto____1 = (function (state_26879){
while(true){
var ret_value__26360__auto__ = (function (){try{while(true){
var result__26361__auto__ = switch__26358__auto__.call(null,state_26879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26361__auto__;
}
break;
}
}catch (e26898){if((e26898 instanceof Object)){
var ex__26362__auto__ = e26898;
var statearr_26899_26917 = state_26879;
(statearr_26899_26917[(5)] = ex__26362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26918 = state_26879;
state_26879 = G__26918;
continue;
} else {
return ret_value__26360__auto__;
}
break;
}
});
cljs$core$async$state_machine__26359__auto__ = function(state_26879){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26359__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26359__auto____1.call(this,state_26879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26359__auto____0;
cljs$core$async$state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26359__auto____1;
return cljs$core$async$state_machine__26359__auto__;
})()
})();
var state__26455__auto__ = (function (){var statearr_26900 = f__26454__auto__.call(null);
(statearr_26900[(6)] = c__26453__auto___26902);

return statearr_26900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26454__auto__ = (function (){var switch__26358__auto__ = (function (state_26939){
var state_val_26940 = (state_26939[(1)]);
if((state_val_26940 === (7))){
var inst_26935 = (state_26939[(2)]);
var state_26939__$1 = state_26939;
var statearr_26941_26959 = state_26939__$1;
(statearr_26941_26959[(2)] = inst_26935);

(statearr_26941_26959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26940 === (1))){
var inst_26919 = init;
var state_26939__$1 = (function (){var statearr_26942 = state_26939;
(statearr_26942[(7)] = inst_26919);

return statearr_26942;
})();
var statearr_26943_26960 = state_26939__$1;
(statearr_26943_26960[(2)] = null);

(statearr_26943_26960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26940 === (4))){
var inst_26922 = (state_26939[(8)]);
var inst_26922__$1 = (state_26939[(2)]);
var inst_26923 = (inst_26922__$1 == null);
var state_26939__$1 = (function (){var statearr_26944 = state_26939;
(statearr_26944[(8)] = inst_26922__$1);

return statearr_26944;
})();
if(cljs.core.truth_(inst_26923)){
var statearr_26945_26961 = state_26939__$1;
(statearr_26945_26961[(1)] = (5));

} else {
var statearr_26946_26962 = state_26939__$1;
(statearr_26946_26962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26940 === (6))){
var inst_26926 = (state_26939[(9)]);
var inst_26919 = (state_26939[(7)]);
var inst_26922 = (state_26939[(8)]);
var inst_26926__$1 = f.call(null,inst_26919,inst_26922);
var inst_26927 = cljs.core.reduced_QMARK_.call(null,inst_26926__$1);
var state_26939__$1 = (function (){var statearr_26947 = state_26939;
(statearr_26947[(9)] = inst_26926__$1);

return statearr_26947;
})();
if(inst_26927){
var statearr_26948_26963 = state_26939__$1;
(statearr_26948_26963[(1)] = (8));

} else {
var statearr_26949_26964 = state_26939__$1;
(statearr_26949_26964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26940 === (3))){
var inst_26937 = (state_26939[(2)]);
var state_26939__$1 = state_26939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26939__$1,inst_26937);
} else {
if((state_val_26940 === (2))){
var state_26939__$1 = state_26939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26939__$1,(4),ch);
} else {
if((state_val_26940 === (9))){
var inst_26926 = (state_26939[(9)]);
var inst_26919 = inst_26926;
var state_26939__$1 = (function (){var statearr_26950 = state_26939;
(statearr_26950[(7)] = inst_26919);

return statearr_26950;
})();
var statearr_26951_26965 = state_26939__$1;
(statearr_26951_26965[(2)] = null);

(statearr_26951_26965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26940 === (5))){
var inst_26919 = (state_26939[(7)]);
var state_26939__$1 = state_26939;
var statearr_26952_26966 = state_26939__$1;
(statearr_26952_26966[(2)] = inst_26919);

(statearr_26952_26966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26940 === (10))){
var inst_26933 = (state_26939[(2)]);
var state_26939__$1 = state_26939;
var statearr_26953_26967 = state_26939__$1;
(statearr_26953_26967[(2)] = inst_26933);

(statearr_26953_26967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26940 === (8))){
var inst_26926 = (state_26939[(9)]);
var inst_26929 = cljs.core.deref.call(null,inst_26926);
var state_26939__$1 = state_26939;
var statearr_26954_26968 = state_26939__$1;
(statearr_26954_26968[(2)] = inst_26929);

(statearr_26954_26968[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__26359__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26359__auto____0 = (function (){
var statearr_26955 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26955[(0)] = cljs$core$async$reduce_$_state_machine__26359__auto__);

(statearr_26955[(1)] = (1));

return statearr_26955;
});
var cljs$core$async$reduce_$_state_machine__26359__auto____1 = (function (state_26939){
while(true){
var ret_value__26360__auto__ = (function (){try{while(true){
var result__26361__auto__ = switch__26358__auto__.call(null,state_26939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26361__auto__;
}
break;
}
}catch (e26956){if((e26956 instanceof Object)){
var ex__26362__auto__ = e26956;
var statearr_26957_26969 = state_26939;
(statearr_26957_26969[(5)] = ex__26362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26970 = state_26939;
state_26939 = G__26970;
continue;
} else {
return ret_value__26360__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26359__auto__ = function(state_26939){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26359__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26359__auto____1.call(this,state_26939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26359__auto____0;
cljs$core$async$reduce_$_state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26359__auto____1;
return cljs$core$async$reduce_$_state_machine__26359__auto__;
})()
})();
var state__26455__auto__ = (function (){var statearr_26958 = f__26454__auto__.call(null);
(statearr_26958[(6)] = c__26453__auto__);

return statearr_26958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
}));

return c__26453__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26454__auto__ = (function (){var switch__26358__auto__ = (function (state_26976){
var state_val_26977 = (state_26976[(1)]);
if((state_val_26977 === (1))){
var inst_26971 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_26976__$1 = state_26976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26976__$1,(2),inst_26971);
} else {
if((state_val_26977 === (2))){
var inst_26973 = (state_26976[(2)]);
var inst_26974 = f__$1.call(null,inst_26973);
var state_26976__$1 = state_26976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26976__$1,inst_26974);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__26359__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26359__auto____0 = (function (){
var statearr_26978 = [null,null,null,null,null,null,null];
(statearr_26978[(0)] = cljs$core$async$transduce_$_state_machine__26359__auto__);

(statearr_26978[(1)] = (1));

return statearr_26978;
});
var cljs$core$async$transduce_$_state_machine__26359__auto____1 = (function (state_26976){
while(true){
var ret_value__26360__auto__ = (function (){try{while(true){
var result__26361__auto__ = switch__26358__auto__.call(null,state_26976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26361__auto__;
}
break;
}
}catch (e26979){if((e26979 instanceof Object)){
var ex__26362__auto__ = e26979;
var statearr_26980_26982 = state_26976;
(statearr_26980_26982[(5)] = ex__26362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26983 = state_26976;
state_26976 = G__26983;
continue;
} else {
return ret_value__26360__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26359__auto__ = function(state_26976){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26359__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26359__auto____1.call(this,state_26976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26359__auto____0;
cljs$core$async$transduce_$_state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26359__auto____1;
return cljs$core$async$transduce_$_state_machine__26359__auto__;
})()
})();
var state__26455__auto__ = (function (){var statearr_26981 = f__26454__auto__.call(null);
(statearr_26981[(6)] = c__26453__auto__);

return statearr_26981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
}));

return c__26453__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__26985 = arguments.length;
switch (G__26985) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26454__auto__ = (function (){var switch__26358__auto__ = (function (state_27010){
var state_val_27011 = (state_27010[(1)]);
if((state_val_27011 === (7))){
var inst_26992 = (state_27010[(2)]);
var state_27010__$1 = state_27010;
var statearr_27012_27033 = state_27010__$1;
(statearr_27012_27033[(2)] = inst_26992);

(statearr_27012_27033[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27011 === (1))){
var inst_26986 = cljs.core.seq.call(null,coll);
var inst_26987 = inst_26986;
var state_27010__$1 = (function (){var statearr_27013 = state_27010;
(statearr_27013[(7)] = inst_26987);

return statearr_27013;
})();
var statearr_27014_27034 = state_27010__$1;
(statearr_27014_27034[(2)] = null);

(statearr_27014_27034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27011 === (4))){
var inst_26987 = (state_27010[(7)]);
var inst_26990 = cljs.core.first.call(null,inst_26987);
var state_27010__$1 = state_27010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27010__$1,(7),ch,inst_26990);
} else {
if((state_val_27011 === (13))){
var inst_27004 = (state_27010[(2)]);
var state_27010__$1 = state_27010;
var statearr_27015_27035 = state_27010__$1;
(statearr_27015_27035[(2)] = inst_27004);

(statearr_27015_27035[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27011 === (6))){
var inst_26995 = (state_27010[(2)]);
var state_27010__$1 = state_27010;
if(cljs.core.truth_(inst_26995)){
var statearr_27016_27036 = state_27010__$1;
(statearr_27016_27036[(1)] = (8));

} else {
var statearr_27017_27037 = state_27010__$1;
(statearr_27017_27037[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27011 === (3))){
var inst_27008 = (state_27010[(2)]);
var state_27010__$1 = state_27010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27010__$1,inst_27008);
} else {
if((state_val_27011 === (12))){
var state_27010__$1 = state_27010;
var statearr_27018_27038 = state_27010__$1;
(statearr_27018_27038[(2)] = null);

(statearr_27018_27038[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27011 === (2))){
var inst_26987 = (state_27010[(7)]);
var state_27010__$1 = state_27010;
if(cljs.core.truth_(inst_26987)){
var statearr_27019_27039 = state_27010__$1;
(statearr_27019_27039[(1)] = (4));

} else {
var statearr_27020_27040 = state_27010__$1;
(statearr_27020_27040[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27011 === (11))){
var inst_27001 = cljs.core.async.close_BANG_.call(null,ch);
var state_27010__$1 = state_27010;
var statearr_27021_27041 = state_27010__$1;
(statearr_27021_27041[(2)] = inst_27001);

(statearr_27021_27041[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27011 === (9))){
var state_27010__$1 = state_27010;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27022_27042 = state_27010__$1;
(statearr_27022_27042[(1)] = (11));

} else {
var statearr_27023_27043 = state_27010__$1;
(statearr_27023_27043[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27011 === (5))){
var inst_26987 = (state_27010[(7)]);
var state_27010__$1 = state_27010;
var statearr_27024_27044 = state_27010__$1;
(statearr_27024_27044[(2)] = inst_26987);

(statearr_27024_27044[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27011 === (10))){
var inst_27006 = (state_27010[(2)]);
var state_27010__$1 = state_27010;
var statearr_27025_27045 = state_27010__$1;
(statearr_27025_27045[(2)] = inst_27006);

(statearr_27025_27045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27011 === (8))){
var inst_26987 = (state_27010[(7)]);
var inst_26997 = cljs.core.next.call(null,inst_26987);
var inst_26987__$1 = inst_26997;
var state_27010__$1 = (function (){var statearr_27026 = state_27010;
(statearr_27026[(7)] = inst_26987__$1);

return statearr_27026;
})();
var statearr_27027_27046 = state_27010__$1;
(statearr_27027_27046[(2)] = null);

(statearr_27027_27046[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__26359__auto__ = null;
var cljs$core$async$state_machine__26359__auto____0 = (function (){
var statearr_27028 = [null,null,null,null,null,null,null,null];
(statearr_27028[(0)] = cljs$core$async$state_machine__26359__auto__);

(statearr_27028[(1)] = (1));

return statearr_27028;
});
var cljs$core$async$state_machine__26359__auto____1 = (function (state_27010){
while(true){
var ret_value__26360__auto__ = (function (){try{while(true){
var result__26361__auto__ = switch__26358__auto__.call(null,state_27010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26361__auto__;
}
break;
}
}catch (e27029){if((e27029 instanceof Object)){
var ex__26362__auto__ = e27029;
var statearr_27030_27047 = state_27010;
(statearr_27030_27047[(5)] = ex__26362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27048 = state_27010;
state_27010 = G__27048;
continue;
} else {
return ret_value__26360__auto__;
}
break;
}
});
cljs$core$async$state_machine__26359__auto__ = function(state_27010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26359__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26359__auto____1.call(this,state_27010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26359__auto____0;
cljs$core$async$state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26359__auto____1;
return cljs$core$async$state_machine__26359__auto__;
})()
})();
var state__26455__auto__ = (function (){var statearr_27031 = f__26454__auto__.call(null);
(statearr_27031[(6)] = c__26453__auto__);

return statearr_27031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
}));

return c__26453__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_27049 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_27049.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_27050 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_27050.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_27051 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_27051.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_27052 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_27052.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27053 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27053 = (function (ch,cs,meta27054){
this.ch = ch;
this.cs = cs;
this.meta27054 = meta27054;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27055,meta27054__$1){
var self__ = this;
var _27055__$1 = this;
return (new cljs.core.async.t_cljs$core$async27053(self__.ch,self__.cs,meta27054__$1));
}));

(cljs.core.async.t_cljs$core$async27053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27055){
var self__ = this;
var _27055__$1 = this;
return self__.meta27054;
}));

(cljs.core.async.t_cljs$core$async27053.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27053.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async27053.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27053.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async27053.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async27053.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async27053.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27054","meta27054",1366034725,null)], null);
}));

(cljs.core.async.t_cljs$core$async27053.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27053.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27053");

(cljs.core.async.t_cljs$core$async27053.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27053");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27053.
 */
cljs.core.async.__GT_t_cljs$core$async27053 = (function cljs$core$async$mult_$___GT_t_cljs$core$async27053(ch__$1,cs__$1,meta27054){
return (new cljs.core.async.t_cljs$core$async27053(ch__$1,cs__$1,meta27054));
});

}

return (new cljs.core.async.t_cljs$core$async27053(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__26453__auto___27275 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26454__auto__ = (function (){var switch__26358__auto__ = (function (state_27190){
var state_val_27191 = (state_27190[(1)]);
if((state_val_27191 === (7))){
var inst_27186 = (state_27190[(2)]);
var state_27190__$1 = state_27190;
var statearr_27192_27276 = state_27190__$1;
(statearr_27192_27276[(2)] = inst_27186);

(statearr_27192_27276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (20))){
var inst_27089 = (state_27190[(7)]);
var inst_27101 = cljs.core.first.call(null,inst_27089);
var inst_27102 = cljs.core.nth.call(null,inst_27101,(0),null);
var inst_27103 = cljs.core.nth.call(null,inst_27101,(1),null);
var state_27190__$1 = (function (){var statearr_27193 = state_27190;
(statearr_27193[(8)] = inst_27102);

return statearr_27193;
})();
if(cljs.core.truth_(inst_27103)){
var statearr_27194_27277 = state_27190__$1;
(statearr_27194_27277[(1)] = (22));

} else {
var statearr_27195_27278 = state_27190__$1;
(statearr_27195_27278[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (27))){
var inst_27058 = (state_27190[(9)]);
var inst_27133 = (state_27190[(10)]);
var inst_27131 = (state_27190[(11)]);
var inst_27138 = (state_27190[(12)]);
var inst_27138__$1 = cljs.core._nth.call(null,inst_27131,inst_27133);
var inst_27139 = cljs.core.async.put_BANG_.call(null,inst_27138__$1,inst_27058,done);
var state_27190__$1 = (function (){var statearr_27196 = state_27190;
(statearr_27196[(12)] = inst_27138__$1);

return statearr_27196;
})();
if(cljs.core.truth_(inst_27139)){
var statearr_27197_27279 = state_27190__$1;
(statearr_27197_27279[(1)] = (30));

} else {
var statearr_27198_27280 = state_27190__$1;
(statearr_27198_27280[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (1))){
var state_27190__$1 = state_27190;
var statearr_27199_27281 = state_27190__$1;
(statearr_27199_27281[(2)] = null);

(statearr_27199_27281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (24))){
var inst_27089 = (state_27190[(7)]);
var inst_27108 = (state_27190[(2)]);
var inst_27109 = cljs.core.next.call(null,inst_27089);
var inst_27067 = inst_27109;
var inst_27068 = null;
var inst_27069 = (0);
var inst_27070 = (0);
var state_27190__$1 = (function (){var statearr_27200 = state_27190;
(statearr_27200[(13)] = inst_27108);

(statearr_27200[(14)] = inst_27068);

(statearr_27200[(15)] = inst_27070);

(statearr_27200[(16)] = inst_27069);

(statearr_27200[(17)] = inst_27067);

return statearr_27200;
})();
var statearr_27201_27282 = state_27190__$1;
(statearr_27201_27282[(2)] = null);

(statearr_27201_27282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (39))){
var state_27190__$1 = state_27190;
var statearr_27205_27283 = state_27190__$1;
(statearr_27205_27283[(2)] = null);

(statearr_27205_27283[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (4))){
var inst_27058 = (state_27190[(9)]);
var inst_27058__$1 = (state_27190[(2)]);
var inst_27059 = (inst_27058__$1 == null);
var state_27190__$1 = (function (){var statearr_27206 = state_27190;
(statearr_27206[(9)] = inst_27058__$1);

return statearr_27206;
})();
if(cljs.core.truth_(inst_27059)){
var statearr_27207_27284 = state_27190__$1;
(statearr_27207_27284[(1)] = (5));

} else {
var statearr_27208_27285 = state_27190__$1;
(statearr_27208_27285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (15))){
var inst_27068 = (state_27190[(14)]);
var inst_27070 = (state_27190[(15)]);
var inst_27069 = (state_27190[(16)]);
var inst_27067 = (state_27190[(17)]);
var inst_27085 = (state_27190[(2)]);
var inst_27086 = (inst_27070 + (1));
var tmp27202 = inst_27068;
var tmp27203 = inst_27069;
var tmp27204 = inst_27067;
var inst_27067__$1 = tmp27204;
var inst_27068__$1 = tmp27202;
var inst_27069__$1 = tmp27203;
var inst_27070__$1 = inst_27086;
var state_27190__$1 = (function (){var statearr_27209 = state_27190;
(statearr_27209[(14)] = inst_27068__$1);

(statearr_27209[(15)] = inst_27070__$1);

(statearr_27209[(16)] = inst_27069__$1);

(statearr_27209[(18)] = inst_27085);

(statearr_27209[(17)] = inst_27067__$1);

return statearr_27209;
})();
var statearr_27210_27286 = state_27190__$1;
(statearr_27210_27286[(2)] = null);

(statearr_27210_27286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (21))){
var inst_27112 = (state_27190[(2)]);
var state_27190__$1 = state_27190;
var statearr_27214_27287 = state_27190__$1;
(statearr_27214_27287[(2)] = inst_27112);

(statearr_27214_27287[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (31))){
var inst_27138 = (state_27190[(12)]);
var inst_27142 = done.call(null,null);
var inst_27143 = cljs.core.async.untap_STAR_.call(null,m,inst_27138);
var state_27190__$1 = (function (){var statearr_27215 = state_27190;
(statearr_27215[(19)] = inst_27142);

return statearr_27215;
})();
var statearr_27216_27288 = state_27190__$1;
(statearr_27216_27288[(2)] = inst_27143);

(statearr_27216_27288[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (32))){
var inst_27130 = (state_27190[(20)]);
var inst_27132 = (state_27190[(21)]);
var inst_27133 = (state_27190[(10)]);
var inst_27131 = (state_27190[(11)]);
var inst_27145 = (state_27190[(2)]);
var inst_27146 = (inst_27133 + (1));
var tmp27211 = inst_27130;
var tmp27212 = inst_27132;
var tmp27213 = inst_27131;
var inst_27130__$1 = tmp27211;
var inst_27131__$1 = tmp27213;
var inst_27132__$1 = tmp27212;
var inst_27133__$1 = inst_27146;
var state_27190__$1 = (function (){var statearr_27217 = state_27190;
(statearr_27217[(20)] = inst_27130__$1);

(statearr_27217[(21)] = inst_27132__$1);

(statearr_27217[(10)] = inst_27133__$1);

(statearr_27217[(22)] = inst_27145);

(statearr_27217[(11)] = inst_27131__$1);

return statearr_27217;
})();
var statearr_27218_27289 = state_27190__$1;
(statearr_27218_27289[(2)] = null);

(statearr_27218_27289[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (40))){
var inst_27158 = (state_27190[(23)]);
var inst_27162 = done.call(null,null);
var inst_27163 = cljs.core.async.untap_STAR_.call(null,m,inst_27158);
var state_27190__$1 = (function (){var statearr_27219 = state_27190;
(statearr_27219[(24)] = inst_27162);

return statearr_27219;
})();
var statearr_27220_27290 = state_27190__$1;
(statearr_27220_27290[(2)] = inst_27163);

(statearr_27220_27290[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (33))){
var inst_27149 = (state_27190[(25)]);
var inst_27151 = cljs.core.chunked_seq_QMARK_.call(null,inst_27149);
var state_27190__$1 = state_27190;
if(inst_27151){
var statearr_27221_27291 = state_27190__$1;
(statearr_27221_27291[(1)] = (36));

} else {
var statearr_27222_27292 = state_27190__$1;
(statearr_27222_27292[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (13))){
var inst_27079 = (state_27190[(26)]);
var inst_27082 = cljs.core.async.close_BANG_.call(null,inst_27079);
var state_27190__$1 = state_27190;
var statearr_27223_27293 = state_27190__$1;
(statearr_27223_27293[(2)] = inst_27082);

(statearr_27223_27293[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (22))){
var inst_27102 = (state_27190[(8)]);
var inst_27105 = cljs.core.async.close_BANG_.call(null,inst_27102);
var state_27190__$1 = state_27190;
var statearr_27224_27294 = state_27190__$1;
(statearr_27224_27294[(2)] = inst_27105);

(statearr_27224_27294[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (36))){
var inst_27149 = (state_27190[(25)]);
var inst_27153 = cljs.core.chunk_first.call(null,inst_27149);
var inst_27154 = cljs.core.chunk_rest.call(null,inst_27149);
var inst_27155 = cljs.core.count.call(null,inst_27153);
var inst_27130 = inst_27154;
var inst_27131 = inst_27153;
var inst_27132 = inst_27155;
var inst_27133 = (0);
var state_27190__$1 = (function (){var statearr_27225 = state_27190;
(statearr_27225[(20)] = inst_27130);

(statearr_27225[(21)] = inst_27132);

(statearr_27225[(10)] = inst_27133);

(statearr_27225[(11)] = inst_27131);

return statearr_27225;
})();
var statearr_27226_27295 = state_27190__$1;
(statearr_27226_27295[(2)] = null);

(statearr_27226_27295[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (41))){
var inst_27149 = (state_27190[(25)]);
var inst_27165 = (state_27190[(2)]);
var inst_27166 = cljs.core.next.call(null,inst_27149);
var inst_27130 = inst_27166;
var inst_27131 = null;
var inst_27132 = (0);
var inst_27133 = (0);
var state_27190__$1 = (function (){var statearr_27227 = state_27190;
(statearr_27227[(20)] = inst_27130);

(statearr_27227[(21)] = inst_27132);

(statearr_27227[(10)] = inst_27133);

(statearr_27227[(11)] = inst_27131);

(statearr_27227[(27)] = inst_27165);

return statearr_27227;
})();
var statearr_27228_27296 = state_27190__$1;
(statearr_27228_27296[(2)] = null);

(statearr_27228_27296[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (43))){
var state_27190__$1 = state_27190;
var statearr_27229_27297 = state_27190__$1;
(statearr_27229_27297[(2)] = null);

(statearr_27229_27297[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (29))){
var inst_27174 = (state_27190[(2)]);
var state_27190__$1 = state_27190;
var statearr_27230_27298 = state_27190__$1;
(statearr_27230_27298[(2)] = inst_27174);

(statearr_27230_27298[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (44))){
var inst_27183 = (state_27190[(2)]);
var state_27190__$1 = (function (){var statearr_27231 = state_27190;
(statearr_27231[(28)] = inst_27183);

return statearr_27231;
})();
var statearr_27232_27299 = state_27190__$1;
(statearr_27232_27299[(2)] = null);

(statearr_27232_27299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (6))){
var inst_27122 = (state_27190[(29)]);
var inst_27121 = cljs.core.deref.call(null,cs);
var inst_27122__$1 = cljs.core.keys.call(null,inst_27121);
var inst_27123 = cljs.core.count.call(null,inst_27122__$1);
var inst_27124 = cljs.core.reset_BANG_.call(null,dctr,inst_27123);
var inst_27129 = cljs.core.seq.call(null,inst_27122__$1);
var inst_27130 = inst_27129;
var inst_27131 = null;
var inst_27132 = (0);
var inst_27133 = (0);
var state_27190__$1 = (function (){var statearr_27233 = state_27190;
(statearr_27233[(30)] = inst_27124);

(statearr_27233[(20)] = inst_27130);

(statearr_27233[(21)] = inst_27132);

(statearr_27233[(10)] = inst_27133);

(statearr_27233[(29)] = inst_27122__$1);

(statearr_27233[(11)] = inst_27131);

return statearr_27233;
})();
var statearr_27234_27300 = state_27190__$1;
(statearr_27234_27300[(2)] = null);

(statearr_27234_27300[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (28))){
var inst_27149 = (state_27190[(25)]);
var inst_27130 = (state_27190[(20)]);
var inst_27149__$1 = cljs.core.seq.call(null,inst_27130);
var state_27190__$1 = (function (){var statearr_27235 = state_27190;
(statearr_27235[(25)] = inst_27149__$1);

return statearr_27235;
})();
if(inst_27149__$1){
var statearr_27236_27301 = state_27190__$1;
(statearr_27236_27301[(1)] = (33));

} else {
var statearr_27237_27302 = state_27190__$1;
(statearr_27237_27302[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (25))){
var inst_27132 = (state_27190[(21)]);
var inst_27133 = (state_27190[(10)]);
var inst_27135 = (inst_27133 < inst_27132);
var inst_27136 = inst_27135;
var state_27190__$1 = state_27190;
if(cljs.core.truth_(inst_27136)){
var statearr_27238_27303 = state_27190__$1;
(statearr_27238_27303[(1)] = (27));

} else {
var statearr_27239_27304 = state_27190__$1;
(statearr_27239_27304[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (34))){
var state_27190__$1 = state_27190;
var statearr_27240_27305 = state_27190__$1;
(statearr_27240_27305[(2)] = null);

(statearr_27240_27305[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (17))){
var state_27190__$1 = state_27190;
var statearr_27241_27306 = state_27190__$1;
(statearr_27241_27306[(2)] = null);

(statearr_27241_27306[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (3))){
var inst_27188 = (state_27190[(2)]);
var state_27190__$1 = state_27190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27190__$1,inst_27188);
} else {
if((state_val_27191 === (12))){
var inst_27117 = (state_27190[(2)]);
var state_27190__$1 = state_27190;
var statearr_27242_27307 = state_27190__$1;
(statearr_27242_27307[(2)] = inst_27117);

(statearr_27242_27307[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (2))){
var state_27190__$1 = state_27190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27190__$1,(4),ch);
} else {
if((state_val_27191 === (23))){
var state_27190__$1 = state_27190;
var statearr_27243_27308 = state_27190__$1;
(statearr_27243_27308[(2)] = null);

(statearr_27243_27308[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (35))){
var inst_27172 = (state_27190[(2)]);
var state_27190__$1 = state_27190;
var statearr_27244_27309 = state_27190__$1;
(statearr_27244_27309[(2)] = inst_27172);

(statearr_27244_27309[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (19))){
var inst_27089 = (state_27190[(7)]);
var inst_27093 = cljs.core.chunk_first.call(null,inst_27089);
var inst_27094 = cljs.core.chunk_rest.call(null,inst_27089);
var inst_27095 = cljs.core.count.call(null,inst_27093);
var inst_27067 = inst_27094;
var inst_27068 = inst_27093;
var inst_27069 = inst_27095;
var inst_27070 = (0);
var state_27190__$1 = (function (){var statearr_27245 = state_27190;
(statearr_27245[(14)] = inst_27068);

(statearr_27245[(15)] = inst_27070);

(statearr_27245[(16)] = inst_27069);

(statearr_27245[(17)] = inst_27067);

return statearr_27245;
})();
var statearr_27246_27310 = state_27190__$1;
(statearr_27246_27310[(2)] = null);

(statearr_27246_27310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (11))){
var inst_27089 = (state_27190[(7)]);
var inst_27067 = (state_27190[(17)]);
var inst_27089__$1 = cljs.core.seq.call(null,inst_27067);
var state_27190__$1 = (function (){var statearr_27247 = state_27190;
(statearr_27247[(7)] = inst_27089__$1);

return statearr_27247;
})();
if(inst_27089__$1){
var statearr_27248_27311 = state_27190__$1;
(statearr_27248_27311[(1)] = (16));

} else {
var statearr_27249_27312 = state_27190__$1;
(statearr_27249_27312[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (9))){
var inst_27119 = (state_27190[(2)]);
var state_27190__$1 = state_27190;
var statearr_27250_27313 = state_27190__$1;
(statearr_27250_27313[(2)] = inst_27119);

(statearr_27250_27313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (5))){
var inst_27065 = cljs.core.deref.call(null,cs);
var inst_27066 = cljs.core.seq.call(null,inst_27065);
var inst_27067 = inst_27066;
var inst_27068 = null;
var inst_27069 = (0);
var inst_27070 = (0);
var state_27190__$1 = (function (){var statearr_27251 = state_27190;
(statearr_27251[(14)] = inst_27068);

(statearr_27251[(15)] = inst_27070);

(statearr_27251[(16)] = inst_27069);

(statearr_27251[(17)] = inst_27067);

return statearr_27251;
})();
var statearr_27252_27314 = state_27190__$1;
(statearr_27252_27314[(2)] = null);

(statearr_27252_27314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (14))){
var state_27190__$1 = state_27190;
var statearr_27253_27315 = state_27190__$1;
(statearr_27253_27315[(2)] = null);

(statearr_27253_27315[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (45))){
var inst_27180 = (state_27190[(2)]);
var state_27190__$1 = state_27190;
var statearr_27254_27316 = state_27190__$1;
(statearr_27254_27316[(2)] = inst_27180);

(statearr_27254_27316[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (26))){
var inst_27122 = (state_27190[(29)]);
var inst_27176 = (state_27190[(2)]);
var inst_27177 = cljs.core.seq.call(null,inst_27122);
var state_27190__$1 = (function (){var statearr_27255 = state_27190;
(statearr_27255[(31)] = inst_27176);

return statearr_27255;
})();
if(inst_27177){
var statearr_27256_27317 = state_27190__$1;
(statearr_27256_27317[(1)] = (42));

} else {
var statearr_27257_27318 = state_27190__$1;
(statearr_27257_27318[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (16))){
var inst_27089 = (state_27190[(7)]);
var inst_27091 = cljs.core.chunked_seq_QMARK_.call(null,inst_27089);
var state_27190__$1 = state_27190;
if(inst_27091){
var statearr_27258_27319 = state_27190__$1;
(statearr_27258_27319[(1)] = (19));

} else {
var statearr_27259_27320 = state_27190__$1;
(statearr_27259_27320[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (38))){
var inst_27169 = (state_27190[(2)]);
var state_27190__$1 = state_27190;
var statearr_27260_27321 = state_27190__$1;
(statearr_27260_27321[(2)] = inst_27169);

(statearr_27260_27321[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (30))){
var state_27190__$1 = state_27190;
var statearr_27261_27322 = state_27190__$1;
(statearr_27261_27322[(2)] = null);

(statearr_27261_27322[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (10))){
var inst_27068 = (state_27190[(14)]);
var inst_27070 = (state_27190[(15)]);
var inst_27078 = cljs.core._nth.call(null,inst_27068,inst_27070);
var inst_27079 = cljs.core.nth.call(null,inst_27078,(0),null);
var inst_27080 = cljs.core.nth.call(null,inst_27078,(1),null);
var state_27190__$1 = (function (){var statearr_27262 = state_27190;
(statearr_27262[(26)] = inst_27079);

return statearr_27262;
})();
if(cljs.core.truth_(inst_27080)){
var statearr_27263_27323 = state_27190__$1;
(statearr_27263_27323[(1)] = (13));

} else {
var statearr_27264_27324 = state_27190__$1;
(statearr_27264_27324[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (18))){
var inst_27115 = (state_27190[(2)]);
var state_27190__$1 = state_27190;
var statearr_27265_27325 = state_27190__$1;
(statearr_27265_27325[(2)] = inst_27115);

(statearr_27265_27325[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (42))){
var state_27190__$1 = state_27190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27190__$1,(45),dchan);
} else {
if((state_val_27191 === (37))){
var inst_27058 = (state_27190[(9)]);
var inst_27149 = (state_27190[(25)]);
var inst_27158 = (state_27190[(23)]);
var inst_27158__$1 = cljs.core.first.call(null,inst_27149);
var inst_27159 = cljs.core.async.put_BANG_.call(null,inst_27158__$1,inst_27058,done);
var state_27190__$1 = (function (){var statearr_27266 = state_27190;
(statearr_27266[(23)] = inst_27158__$1);

return statearr_27266;
})();
if(cljs.core.truth_(inst_27159)){
var statearr_27267_27326 = state_27190__$1;
(statearr_27267_27326[(1)] = (39));

} else {
var statearr_27268_27327 = state_27190__$1;
(statearr_27268_27327[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (8))){
var inst_27070 = (state_27190[(15)]);
var inst_27069 = (state_27190[(16)]);
var inst_27072 = (inst_27070 < inst_27069);
var inst_27073 = inst_27072;
var state_27190__$1 = state_27190;
if(cljs.core.truth_(inst_27073)){
var statearr_27269_27328 = state_27190__$1;
(statearr_27269_27328[(1)] = (10));

} else {
var statearr_27270_27329 = state_27190__$1;
(statearr_27270_27329[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__26359__auto__ = null;
var cljs$core$async$mult_$_state_machine__26359__auto____0 = (function (){
var statearr_27271 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27271[(0)] = cljs$core$async$mult_$_state_machine__26359__auto__);

(statearr_27271[(1)] = (1));

return statearr_27271;
});
var cljs$core$async$mult_$_state_machine__26359__auto____1 = (function (state_27190){
while(true){
var ret_value__26360__auto__ = (function (){try{while(true){
var result__26361__auto__ = switch__26358__auto__.call(null,state_27190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26361__auto__;
}
break;
}
}catch (e27272){if((e27272 instanceof Object)){
var ex__26362__auto__ = e27272;
var statearr_27273_27330 = state_27190;
(statearr_27273_27330[(5)] = ex__26362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27331 = state_27190;
state_27190 = G__27331;
continue;
} else {
return ret_value__26360__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26359__auto__ = function(state_27190){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26359__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26359__auto____1.call(this,state_27190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26359__auto____0;
cljs$core$async$mult_$_state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26359__auto____1;
return cljs$core$async$mult_$_state_machine__26359__auto__;
})()
})();
var state__26455__auto__ = (function (){var statearr_27274 = f__26454__auto__.call(null);
(statearr_27274[(6)] = c__26453__auto___27275);

return statearr_27274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__27333 = arguments.length;
switch (G__27333) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_27335 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_27335.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_27336 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_27336.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_27337 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_27337.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_27338 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_27338.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_27339 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_27339.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27350 = arguments.length;
var i__4737__auto___27351 = (0);
while(true){
if((i__4737__auto___27351 < len__4736__auto___27350)){
args__4742__auto__.push((arguments[i__4737__auto___27351]));

var G__27352 = (i__4737__auto___27351 + (1));
i__4737__auto___27351 = G__27352;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27344){
var map__27345 = p__27344;
var map__27345__$1 = (((((!((map__27345 == null))))?(((((map__27345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27345):map__27345);
var opts = map__27345__$1;
var statearr_27347_27353 = state;
(statearr_27347_27353[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_27348_27354 = state;
(statearr_27348_27354[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_27349_27355 = state;
(statearr_27349_27355[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27340){
var G__27341 = cljs.core.first.call(null,seq27340);
var seq27340__$1 = cljs.core.next.call(null,seq27340);
var G__27342 = cljs.core.first.call(null,seq27340__$1);
var seq27340__$2 = cljs.core.next.call(null,seq27340__$1);
var G__27343 = cljs.core.first.call(null,seq27340__$2);
var seq27340__$3 = cljs.core.next.call(null,seq27340__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27341,G__27342,G__27343,seq27340__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27356 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27356 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27357){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27357 = meta27357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27358,meta27357__$1){
var self__ = this;
var _27358__$1 = this;
return (new cljs.core.async.t_cljs$core$async27356(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27357__$1));
}));

(cljs.core.async.t_cljs$core$async27356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27358){
var self__ = this;
var _27358__$1 = this;
return self__.meta27357;
}));

(cljs.core.async.t_cljs$core$async27356.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27356.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async27356.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27356.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27356.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27356.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27356.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27356.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27356.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27357","meta27357",-1910268679,null)], null);
}));

(cljs.core.async.t_cljs$core$async27356.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27356.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27356");

(cljs.core.async.t_cljs$core$async27356.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27356");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27356.
 */
cljs.core.async.__GT_t_cljs$core$async27356 = (function cljs$core$async$mix_$___GT_t_cljs$core$async27356(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27357){
return (new cljs.core.async.t_cljs$core$async27356(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27357));
});

}

return (new cljs.core.async.t_cljs$core$async27356(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26453__auto___27520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26454__auto__ = (function (){var switch__26358__auto__ = (function (state_27460){
var state_val_27461 = (state_27460[(1)]);
if((state_val_27461 === (7))){
var inst_27375 = (state_27460[(2)]);
var state_27460__$1 = state_27460;
var statearr_27462_27521 = state_27460__$1;
(statearr_27462_27521[(2)] = inst_27375);

(statearr_27462_27521[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (20))){
var inst_27387 = (state_27460[(7)]);
var state_27460__$1 = state_27460;
var statearr_27463_27522 = state_27460__$1;
(statearr_27463_27522[(2)] = inst_27387);

(statearr_27463_27522[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (27))){
var state_27460__$1 = state_27460;
var statearr_27464_27523 = state_27460__$1;
(statearr_27464_27523[(2)] = null);

(statearr_27464_27523[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (1))){
var inst_27362 = (state_27460[(8)]);
var inst_27362__$1 = calc_state.call(null);
var inst_27364 = (inst_27362__$1 == null);
var inst_27365 = cljs.core.not.call(null,inst_27364);
var state_27460__$1 = (function (){var statearr_27465 = state_27460;
(statearr_27465[(8)] = inst_27362__$1);

return statearr_27465;
})();
if(inst_27365){
var statearr_27466_27524 = state_27460__$1;
(statearr_27466_27524[(1)] = (2));

} else {
var statearr_27467_27525 = state_27460__$1;
(statearr_27467_27525[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (24))){
var inst_27411 = (state_27460[(9)]);
var inst_27420 = (state_27460[(10)]);
var inst_27434 = (state_27460[(11)]);
var inst_27434__$1 = inst_27411.call(null,inst_27420);
var state_27460__$1 = (function (){var statearr_27468 = state_27460;
(statearr_27468[(11)] = inst_27434__$1);

return statearr_27468;
})();
if(cljs.core.truth_(inst_27434__$1)){
var statearr_27469_27526 = state_27460__$1;
(statearr_27469_27526[(1)] = (29));

} else {
var statearr_27470_27527 = state_27460__$1;
(statearr_27470_27527[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (4))){
var inst_27378 = (state_27460[(2)]);
var state_27460__$1 = state_27460;
if(cljs.core.truth_(inst_27378)){
var statearr_27471_27528 = state_27460__$1;
(statearr_27471_27528[(1)] = (8));

} else {
var statearr_27472_27529 = state_27460__$1;
(statearr_27472_27529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (15))){
var inst_27405 = (state_27460[(2)]);
var state_27460__$1 = state_27460;
if(cljs.core.truth_(inst_27405)){
var statearr_27473_27530 = state_27460__$1;
(statearr_27473_27530[(1)] = (19));

} else {
var statearr_27474_27531 = state_27460__$1;
(statearr_27474_27531[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (21))){
var inst_27410 = (state_27460[(12)]);
var inst_27410__$1 = (state_27460[(2)]);
var inst_27411 = cljs.core.get.call(null,inst_27410__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27412 = cljs.core.get.call(null,inst_27410__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27413 = cljs.core.get.call(null,inst_27410__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27460__$1 = (function (){var statearr_27475 = state_27460;
(statearr_27475[(9)] = inst_27411);

(statearr_27475[(12)] = inst_27410__$1);

(statearr_27475[(13)] = inst_27412);

return statearr_27475;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27460__$1,(22),inst_27413);
} else {
if((state_val_27461 === (31))){
var inst_27442 = (state_27460[(2)]);
var state_27460__$1 = state_27460;
if(cljs.core.truth_(inst_27442)){
var statearr_27476_27532 = state_27460__$1;
(statearr_27476_27532[(1)] = (32));

} else {
var statearr_27477_27533 = state_27460__$1;
(statearr_27477_27533[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (32))){
var inst_27419 = (state_27460[(14)]);
var state_27460__$1 = state_27460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27460__$1,(35),out,inst_27419);
} else {
if((state_val_27461 === (33))){
var inst_27410 = (state_27460[(12)]);
var inst_27387 = inst_27410;
var state_27460__$1 = (function (){var statearr_27478 = state_27460;
(statearr_27478[(7)] = inst_27387);

return statearr_27478;
})();
var statearr_27479_27534 = state_27460__$1;
(statearr_27479_27534[(2)] = null);

(statearr_27479_27534[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (13))){
var inst_27387 = (state_27460[(7)]);
var inst_27394 = inst_27387.cljs$lang$protocol_mask$partition0$;
var inst_27395 = (inst_27394 & (64));
var inst_27396 = inst_27387.cljs$core$ISeq$;
var inst_27397 = (cljs.core.PROTOCOL_SENTINEL === inst_27396);
var inst_27398 = ((inst_27395) || (inst_27397));
var state_27460__$1 = state_27460;
if(cljs.core.truth_(inst_27398)){
var statearr_27480_27535 = state_27460__$1;
(statearr_27480_27535[(1)] = (16));

} else {
var statearr_27481_27536 = state_27460__$1;
(statearr_27481_27536[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (22))){
var inst_27420 = (state_27460[(10)]);
var inst_27419 = (state_27460[(14)]);
var inst_27418 = (state_27460[(2)]);
var inst_27419__$1 = cljs.core.nth.call(null,inst_27418,(0),null);
var inst_27420__$1 = cljs.core.nth.call(null,inst_27418,(1),null);
var inst_27421 = (inst_27419__$1 == null);
var inst_27422 = cljs.core._EQ_.call(null,inst_27420__$1,change);
var inst_27423 = ((inst_27421) || (inst_27422));
var state_27460__$1 = (function (){var statearr_27482 = state_27460;
(statearr_27482[(10)] = inst_27420__$1);

(statearr_27482[(14)] = inst_27419__$1);

return statearr_27482;
})();
if(cljs.core.truth_(inst_27423)){
var statearr_27483_27537 = state_27460__$1;
(statearr_27483_27537[(1)] = (23));

} else {
var statearr_27484_27538 = state_27460__$1;
(statearr_27484_27538[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (36))){
var inst_27410 = (state_27460[(12)]);
var inst_27387 = inst_27410;
var state_27460__$1 = (function (){var statearr_27485 = state_27460;
(statearr_27485[(7)] = inst_27387);

return statearr_27485;
})();
var statearr_27486_27539 = state_27460__$1;
(statearr_27486_27539[(2)] = null);

(statearr_27486_27539[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (29))){
var inst_27434 = (state_27460[(11)]);
var state_27460__$1 = state_27460;
var statearr_27487_27540 = state_27460__$1;
(statearr_27487_27540[(2)] = inst_27434);

(statearr_27487_27540[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (6))){
var state_27460__$1 = state_27460;
var statearr_27488_27541 = state_27460__$1;
(statearr_27488_27541[(2)] = false);

(statearr_27488_27541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (28))){
var inst_27430 = (state_27460[(2)]);
var inst_27431 = calc_state.call(null);
var inst_27387 = inst_27431;
var state_27460__$1 = (function (){var statearr_27489 = state_27460;
(statearr_27489[(15)] = inst_27430);

(statearr_27489[(7)] = inst_27387);

return statearr_27489;
})();
var statearr_27490_27542 = state_27460__$1;
(statearr_27490_27542[(2)] = null);

(statearr_27490_27542[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (25))){
var inst_27456 = (state_27460[(2)]);
var state_27460__$1 = state_27460;
var statearr_27491_27543 = state_27460__$1;
(statearr_27491_27543[(2)] = inst_27456);

(statearr_27491_27543[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (34))){
var inst_27454 = (state_27460[(2)]);
var state_27460__$1 = state_27460;
var statearr_27492_27544 = state_27460__$1;
(statearr_27492_27544[(2)] = inst_27454);

(statearr_27492_27544[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (17))){
var state_27460__$1 = state_27460;
var statearr_27493_27545 = state_27460__$1;
(statearr_27493_27545[(2)] = false);

(statearr_27493_27545[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (3))){
var state_27460__$1 = state_27460;
var statearr_27494_27546 = state_27460__$1;
(statearr_27494_27546[(2)] = false);

(statearr_27494_27546[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (12))){
var inst_27458 = (state_27460[(2)]);
var state_27460__$1 = state_27460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27460__$1,inst_27458);
} else {
if((state_val_27461 === (2))){
var inst_27362 = (state_27460[(8)]);
var inst_27367 = inst_27362.cljs$lang$protocol_mask$partition0$;
var inst_27368 = (inst_27367 & (64));
var inst_27369 = inst_27362.cljs$core$ISeq$;
var inst_27370 = (cljs.core.PROTOCOL_SENTINEL === inst_27369);
var inst_27371 = ((inst_27368) || (inst_27370));
var state_27460__$1 = state_27460;
if(cljs.core.truth_(inst_27371)){
var statearr_27495_27547 = state_27460__$1;
(statearr_27495_27547[(1)] = (5));

} else {
var statearr_27496_27548 = state_27460__$1;
(statearr_27496_27548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (23))){
var inst_27419 = (state_27460[(14)]);
var inst_27425 = (inst_27419 == null);
var state_27460__$1 = state_27460;
if(cljs.core.truth_(inst_27425)){
var statearr_27497_27549 = state_27460__$1;
(statearr_27497_27549[(1)] = (26));

} else {
var statearr_27498_27550 = state_27460__$1;
(statearr_27498_27550[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (35))){
var inst_27445 = (state_27460[(2)]);
var state_27460__$1 = state_27460;
if(cljs.core.truth_(inst_27445)){
var statearr_27499_27551 = state_27460__$1;
(statearr_27499_27551[(1)] = (36));

} else {
var statearr_27500_27552 = state_27460__$1;
(statearr_27500_27552[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (19))){
var inst_27387 = (state_27460[(7)]);
var inst_27407 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27387);
var state_27460__$1 = state_27460;
var statearr_27501_27553 = state_27460__$1;
(statearr_27501_27553[(2)] = inst_27407);

(statearr_27501_27553[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (11))){
var inst_27387 = (state_27460[(7)]);
var inst_27391 = (inst_27387 == null);
var inst_27392 = cljs.core.not.call(null,inst_27391);
var state_27460__$1 = state_27460;
if(inst_27392){
var statearr_27502_27554 = state_27460__$1;
(statearr_27502_27554[(1)] = (13));

} else {
var statearr_27503_27555 = state_27460__$1;
(statearr_27503_27555[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (9))){
var inst_27362 = (state_27460[(8)]);
var state_27460__$1 = state_27460;
var statearr_27504_27556 = state_27460__$1;
(statearr_27504_27556[(2)] = inst_27362);

(statearr_27504_27556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (5))){
var state_27460__$1 = state_27460;
var statearr_27505_27557 = state_27460__$1;
(statearr_27505_27557[(2)] = true);

(statearr_27505_27557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (14))){
var state_27460__$1 = state_27460;
var statearr_27506_27558 = state_27460__$1;
(statearr_27506_27558[(2)] = false);

(statearr_27506_27558[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (26))){
var inst_27420 = (state_27460[(10)]);
var inst_27427 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27420);
var state_27460__$1 = state_27460;
var statearr_27507_27559 = state_27460__$1;
(statearr_27507_27559[(2)] = inst_27427);

(statearr_27507_27559[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (16))){
var state_27460__$1 = state_27460;
var statearr_27508_27560 = state_27460__$1;
(statearr_27508_27560[(2)] = true);

(statearr_27508_27560[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (38))){
var inst_27450 = (state_27460[(2)]);
var state_27460__$1 = state_27460;
var statearr_27509_27561 = state_27460__$1;
(statearr_27509_27561[(2)] = inst_27450);

(statearr_27509_27561[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (30))){
var inst_27411 = (state_27460[(9)]);
var inst_27420 = (state_27460[(10)]);
var inst_27412 = (state_27460[(13)]);
var inst_27437 = cljs.core.empty_QMARK_.call(null,inst_27411);
var inst_27438 = inst_27412.call(null,inst_27420);
var inst_27439 = cljs.core.not.call(null,inst_27438);
var inst_27440 = ((inst_27437) && (inst_27439));
var state_27460__$1 = state_27460;
var statearr_27510_27562 = state_27460__$1;
(statearr_27510_27562[(2)] = inst_27440);

(statearr_27510_27562[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (10))){
var inst_27362 = (state_27460[(8)]);
var inst_27383 = (state_27460[(2)]);
var inst_27384 = cljs.core.get.call(null,inst_27383,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27385 = cljs.core.get.call(null,inst_27383,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27386 = cljs.core.get.call(null,inst_27383,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27387 = inst_27362;
var state_27460__$1 = (function (){var statearr_27511 = state_27460;
(statearr_27511[(16)] = inst_27386);

(statearr_27511[(17)] = inst_27384);

(statearr_27511[(7)] = inst_27387);

(statearr_27511[(18)] = inst_27385);

return statearr_27511;
})();
var statearr_27512_27563 = state_27460__$1;
(statearr_27512_27563[(2)] = null);

(statearr_27512_27563[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (18))){
var inst_27402 = (state_27460[(2)]);
var state_27460__$1 = state_27460;
var statearr_27513_27564 = state_27460__$1;
(statearr_27513_27564[(2)] = inst_27402);

(statearr_27513_27564[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (37))){
var state_27460__$1 = state_27460;
var statearr_27514_27565 = state_27460__$1;
(statearr_27514_27565[(2)] = null);

(statearr_27514_27565[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (8))){
var inst_27362 = (state_27460[(8)]);
var inst_27380 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27362);
var state_27460__$1 = state_27460;
var statearr_27515_27566 = state_27460__$1;
(statearr_27515_27566[(2)] = inst_27380);

(statearr_27515_27566[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__26359__auto__ = null;
var cljs$core$async$mix_$_state_machine__26359__auto____0 = (function (){
var statearr_27516 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27516[(0)] = cljs$core$async$mix_$_state_machine__26359__auto__);

(statearr_27516[(1)] = (1));

return statearr_27516;
});
var cljs$core$async$mix_$_state_machine__26359__auto____1 = (function (state_27460){
while(true){
var ret_value__26360__auto__ = (function (){try{while(true){
var result__26361__auto__ = switch__26358__auto__.call(null,state_27460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26361__auto__;
}
break;
}
}catch (e27517){if((e27517 instanceof Object)){
var ex__26362__auto__ = e27517;
var statearr_27518_27567 = state_27460;
(statearr_27518_27567[(5)] = ex__26362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27568 = state_27460;
state_27460 = G__27568;
continue;
} else {
return ret_value__26360__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26359__auto__ = function(state_27460){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26359__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26359__auto____1.call(this,state_27460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26359__auto____0;
cljs$core$async$mix_$_state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26359__auto____1;
return cljs$core$async$mix_$_state_machine__26359__auto__;
})()
})();
var state__26455__auto__ = (function (){var statearr_27519 = f__26454__auto__.call(null);
(statearr_27519[(6)] = c__26453__auto___27520);

return statearr_27519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_27571 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_27571.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_27572 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_27572.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_27573 = (function() {
var G__27574 = null;
var G__27574__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__27574__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__27574 = function(p,v){
switch(arguments.length){
case 1:
return G__27574__1.call(this,p);
case 2:
return G__27574__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27574.cljs$core$IFn$_invoke$arity$1 = G__27574__1;
G__27574.cljs$core$IFn$_invoke$arity$2 = G__27574__2;
return G__27574;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__27570 = arguments.length;
switch (G__27570) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27573.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27573.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__27578 = arguments.length;
switch (G__27578) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__27576_SHARP_){
if(cljs.core.truth_(p1__27576_SHARP_.call(null,topic))){
return p1__27576_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27576_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27579 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27579 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27580){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27580 = meta27580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27581,meta27580__$1){
var self__ = this;
var _27581__$1 = this;
return (new cljs.core.async.t_cljs$core$async27579(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27580__$1));
}));

(cljs.core.async.t_cljs$core$async27579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27581){
var self__ = this;
var _27581__$1 = this;
return self__.meta27580;
}));

(cljs.core.async.t_cljs$core$async27579.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27579.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async27579.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27579.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async27579.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async27579.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async27579.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async27579.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27580","meta27580",-1413825965,null)], null);
}));

(cljs.core.async.t_cljs$core$async27579.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27579");

(cljs.core.async.t_cljs$core$async27579.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27579");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27579.
 */
cljs.core.async.__GT_t_cljs$core$async27579 = (function cljs$core$async$__GT_t_cljs$core$async27579(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27580){
return (new cljs.core.async.t_cljs$core$async27579(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27580));
});

}

return (new cljs.core.async.t_cljs$core$async27579(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26453__auto___27699 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26454__auto__ = (function (){var switch__26358__auto__ = (function (state_27653){
var state_val_27654 = (state_27653[(1)]);
if((state_val_27654 === (7))){
var inst_27649 = (state_27653[(2)]);
var state_27653__$1 = state_27653;
var statearr_27655_27700 = state_27653__$1;
(statearr_27655_27700[(2)] = inst_27649);

(statearr_27655_27700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (20))){
var state_27653__$1 = state_27653;
var statearr_27656_27701 = state_27653__$1;
(statearr_27656_27701[(2)] = null);

(statearr_27656_27701[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (1))){
var state_27653__$1 = state_27653;
var statearr_27657_27702 = state_27653__$1;
(statearr_27657_27702[(2)] = null);

(statearr_27657_27702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (24))){
var inst_27632 = (state_27653[(7)]);
var inst_27641 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27632);
var state_27653__$1 = state_27653;
var statearr_27658_27703 = state_27653__$1;
(statearr_27658_27703[(2)] = inst_27641);

(statearr_27658_27703[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (4))){
var inst_27584 = (state_27653[(8)]);
var inst_27584__$1 = (state_27653[(2)]);
var inst_27585 = (inst_27584__$1 == null);
var state_27653__$1 = (function (){var statearr_27659 = state_27653;
(statearr_27659[(8)] = inst_27584__$1);

return statearr_27659;
})();
if(cljs.core.truth_(inst_27585)){
var statearr_27660_27704 = state_27653__$1;
(statearr_27660_27704[(1)] = (5));

} else {
var statearr_27661_27705 = state_27653__$1;
(statearr_27661_27705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (15))){
var inst_27626 = (state_27653[(2)]);
var state_27653__$1 = state_27653;
var statearr_27662_27706 = state_27653__$1;
(statearr_27662_27706[(2)] = inst_27626);

(statearr_27662_27706[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (21))){
var inst_27646 = (state_27653[(2)]);
var state_27653__$1 = (function (){var statearr_27663 = state_27653;
(statearr_27663[(9)] = inst_27646);

return statearr_27663;
})();
var statearr_27664_27707 = state_27653__$1;
(statearr_27664_27707[(2)] = null);

(statearr_27664_27707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (13))){
var inst_27608 = (state_27653[(10)]);
var inst_27610 = cljs.core.chunked_seq_QMARK_.call(null,inst_27608);
var state_27653__$1 = state_27653;
if(inst_27610){
var statearr_27665_27708 = state_27653__$1;
(statearr_27665_27708[(1)] = (16));

} else {
var statearr_27666_27709 = state_27653__$1;
(statearr_27666_27709[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (22))){
var inst_27638 = (state_27653[(2)]);
var state_27653__$1 = state_27653;
if(cljs.core.truth_(inst_27638)){
var statearr_27667_27710 = state_27653__$1;
(statearr_27667_27710[(1)] = (23));

} else {
var statearr_27668_27711 = state_27653__$1;
(statearr_27668_27711[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (6))){
var inst_27632 = (state_27653[(7)]);
var inst_27584 = (state_27653[(8)]);
var inst_27634 = (state_27653[(11)]);
var inst_27632__$1 = topic_fn.call(null,inst_27584);
var inst_27633 = cljs.core.deref.call(null,mults);
var inst_27634__$1 = cljs.core.get.call(null,inst_27633,inst_27632__$1);
var state_27653__$1 = (function (){var statearr_27669 = state_27653;
(statearr_27669[(7)] = inst_27632__$1);

(statearr_27669[(11)] = inst_27634__$1);

return statearr_27669;
})();
if(cljs.core.truth_(inst_27634__$1)){
var statearr_27670_27712 = state_27653__$1;
(statearr_27670_27712[(1)] = (19));

} else {
var statearr_27671_27713 = state_27653__$1;
(statearr_27671_27713[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (25))){
var inst_27643 = (state_27653[(2)]);
var state_27653__$1 = state_27653;
var statearr_27672_27714 = state_27653__$1;
(statearr_27672_27714[(2)] = inst_27643);

(statearr_27672_27714[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (17))){
var inst_27608 = (state_27653[(10)]);
var inst_27617 = cljs.core.first.call(null,inst_27608);
var inst_27618 = cljs.core.async.muxch_STAR_.call(null,inst_27617);
var inst_27619 = cljs.core.async.close_BANG_.call(null,inst_27618);
var inst_27620 = cljs.core.next.call(null,inst_27608);
var inst_27594 = inst_27620;
var inst_27595 = null;
var inst_27596 = (0);
var inst_27597 = (0);
var state_27653__$1 = (function (){var statearr_27673 = state_27653;
(statearr_27673[(12)] = inst_27619);

(statearr_27673[(13)] = inst_27597);

(statearr_27673[(14)] = inst_27594);

(statearr_27673[(15)] = inst_27596);

(statearr_27673[(16)] = inst_27595);

return statearr_27673;
})();
var statearr_27674_27715 = state_27653__$1;
(statearr_27674_27715[(2)] = null);

(statearr_27674_27715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (3))){
var inst_27651 = (state_27653[(2)]);
var state_27653__$1 = state_27653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27653__$1,inst_27651);
} else {
if((state_val_27654 === (12))){
var inst_27628 = (state_27653[(2)]);
var state_27653__$1 = state_27653;
var statearr_27675_27716 = state_27653__$1;
(statearr_27675_27716[(2)] = inst_27628);

(statearr_27675_27716[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (2))){
var state_27653__$1 = state_27653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27653__$1,(4),ch);
} else {
if((state_val_27654 === (23))){
var state_27653__$1 = state_27653;
var statearr_27676_27717 = state_27653__$1;
(statearr_27676_27717[(2)] = null);

(statearr_27676_27717[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (19))){
var inst_27584 = (state_27653[(8)]);
var inst_27634 = (state_27653[(11)]);
var inst_27636 = cljs.core.async.muxch_STAR_.call(null,inst_27634);
var state_27653__$1 = state_27653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27653__$1,(22),inst_27636,inst_27584);
} else {
if((state_val_27654 === (11))){
var inst_27608 = (state_27653[(10)]);
var inst_27594 = (state_27653[(14)]);
var inst_27608__$1 = cljs.core.seq.call(null,inst_27594);
var state_27653__$1 = (function (){var statearr_27677 = state_27653;
(statearr_27677[(10)] = inst_27608__$1);

return statearr_27677;
})();
if(inst_27608__$1){
var statearr_27678_27718 = state_27653__$1;
(statearr_27678_27718[(1)] = (13));

} else {
var statearr_27679_27719 = state_27653__$1;
(statearr_27679_27719[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (9))){
var inst_27630 = (state_27653[(2)]);
var state_27653__$1 = state_27653;
var statearr_27680_27720 = state_27653__$1;
(statearr_27680_27720[(2)] = inst_27630);

(statearr_27680_27720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (5))){
var inst_27591 = cljs.core.deref.call(null,mults);
var inst_27592 = cljs.core.vals.call(null,inst_27591);
var inst_27593 = cljs.core.seq.call(null,inst_27592);
var inst_27594 = inst_27593;
var inst_27595 = null;
var inst_27596 = (0);
var inst_27597 = (0);
var state_27653__$1 = (function (){var statearr_27681 = state_27653;
(statearr_27681[(13)] = inst_27597);

(statearr_27681[(14)] = inst_27594);

(statearr_27681[(15)] = inst_27596);

(statearr_27681[(16)] = inst_27595);

return statearr_27681;
})();
var statearr_27682_27721 = state_27653__$1;
(statearr_27682_27721[(2)] = null);

(statearr_27682_27721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (14))){
var state_27653__$1 = state_27653;
var statearr_27686_27722 = state_27653__$1;
(statearr_27686_27722[(2)] = null);

(statearr_27686_27722[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (16))){
var inst_27608 = (state_27653[(10)]);
var inst_27612 = cljs.core.chunk_first.call(null,inst_27608);
var inst_27613 = cljs.core.chunk_rest.call(null,inst_27608);
var inst_27614 = cljs.core.count.call(null,inst_27612);
var inst_27594 = inst_27613;
var inst_27595 = inst_27612;
var inst_27596 = inst_27614;
var inst_27597 = (0);
var state_27653__$1 = (function (){var statearr_27687 = state_27653;
(statearr_27687[(13)] = inst_27597);

(statearr_27687[(14)] = inst_27594);

(statearr_27687[(15)] = inst_27596);

(statearr_27687[(16)] = inst_27595);

return statearr_27687;
})();
var statearr_27688_27723 = state_27653__$1;
(statearr_27688_27723[(2)] = null);

(statearr_27688_27723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (10))){
var inst_27597 = (state_27653[(13)]);
var inst_27594 = (state_27653[(14)]);
var inst_27596 = (state_27653[(15)]);
var inst_27595 = (state_27653[(16)]);
var inst_27602 = cljs.core._nth.call(null,inst_27595,inst_27597);
var inst_27603 = cljs.core.async.muxch_STAR_.call(null,inst_27602);
var inst_27604 = cljs.core.async.close_BANG_.call(null,inst_27603);
var inst_27605 = (inst_27597 + (1));
var tmp27683 = inst_27594;
var tmp27684 = inst_27596;
var tmp27685 = inst_27595;
var inst_27594__$1 = tmp27683;
var inst_27595__$1 = tmp27685;
var inst_27596__$1 = tmp27684;
var inst_27597__$1 = inst_27605;
var state_27653__$1 = (function (){var statearr_27689 = state_27653;
(statearr_27689[(17)] = inst_27604);

(statearr_27689[(13)] = inst_27597__$1);

(statearr_27689[(14)] = inst_27594__$1);

(statearr_27689[(15)] = inst_27596__$1);

(statearr_27689[(16)] = inst_27595__$1);

return statearr_27689;
})();
var statearr_27690_27724 = state_27653__$1;
(statearr_27690_27724[(2)] = null);

(statearr_27690_27724[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (18))){
var inst_27623 = (state_27653[(2)]);
var state_27653__$1 = state_27653;
var statearr_27691_27725 = state_27653__$1;
(statearr_27691_27725[(2)] = inst_27623);

(statearr_27691_27725[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (8))){
var inst_27597 = (state_27653[(13)]);
var inst_27596 = (state_27653[(15)]);
var inst_27599 = (inst_27597 < inst_27596);
var inst_27600 = inst_27599;
var state_27653__$1 = state_27653;
if(cljs.core.truth_(inst_27600)){
var statearr_27692_27726 = state_27653__$1;
(statearr_27692_27726[(1)] = (10));

} else {
var statearr_27693_27727 = state_27653__$1;
(statearr_27693_27727[(1)] = (11));

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
var cljs$core$async$state_machine__26359__auto__ = null;
var cljs$core$async$state_machine__26359__auto____0 = (function (){
var statearr_27694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27694[(0)] = cljs$core$async$state_machine__26359__auto__);

(statearr_27694[(1)] = (1));

return statearr_27694;
});
var cljs$core$async$state_machine__26359__auto____1 = (function (state_27653){
while(true){
var ret_value__26360__auto__ = (function (){try{while(true){
var result__26361__auto__ = switch__26358__auto__.call(null,state_27653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26361__auto__;
}
break;
}
}catch (e27695){if((e27695 instanceof Object)){
var ex__26362__auto__ = e27695;
var statearr_27696_27728 = state_27653;
(statearr_27696_27728[(5)] = ex__26362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27729 = state_27653;
state_27653 = G__27729;
continue;
} else {
return ret_value__26360__auto__;
}
break;
}
});
cljs$core$async$state_machine__26359__auto__ = function(state_27653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26359__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26359__auto____1.call(this,state_27653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26359__auto____0;
cljs$core$async$state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26359__auto____1;
return cljs$core$async$state_machine__26359__auto__;
})()
})();
var state__26455__auto__ = (function (){var statearr_27697 = f__26454__auto__.call(null);
(statearr_27697[(6)] = c__26453__auto___27699);

return statearr_27697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__27731 = arguments.length;
switch (G__27731) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__27734 = arguments.length;
switch (G__27734) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__27737 = arguments.length;
switch (G__27737) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__26453__auto___27804 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26454__auto__ = (function (){var switch__26358__auto__ = (function (state_27776){
var state_val_27777 = (state_27776[(1)]);
if((state_val_27777 === (7))){
var state_27776__$1 = state_27776;
var statearr_27778_27805 = state_27776__$1;
(statearr_27778_27805[(2)] = null);

(statearr_27778_27805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (1))){
var state_27776__$1 = state_27776;
var statearr_27779_27806 = state_27776__$1;
(statearr_27779_27806[(2)] = null);

(statearr_27779_27806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (4))){
var inst_27740 = (state_27776[(7)]);
var inst_27742 = (inst_27740 < cnt);
var state_27776__$1 = state_27776;
if(cljs.core.truth_(inst_27742)){
var statearr_27780_27807 = state_27776__$1;
(statearr_27780_27807[(1)] = (6));

} else {
var statearr_27781_27808 = state_27776__$1;
(statearr_27781_27808[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (15))){
var inst_27772 = (state_27776[(2)]);
var state_27776__$1 = state_27776;
var statearr_27782_27809 = state_27776__$1;
(statearr_27782_27809[(2)] = inst_27772);

(statearr_27782_27809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (13))){
var inst_27765 = cljs.core.async.close_BANG_.call(null,out);
var state_27776__$1 = state_27776;
var statearr_27783_27810 = state_27776__$1;
(statearr_27783_27810[(2)] = inst_27765);

(statearr_27783_27810[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (6))){
var state_27776__$1 = state_27776;
var statearr_27784_27811 = state_27776__$1;
(statearr_27784_27811[(2)] = null);

(statearr_27784_27811[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (3))){
var inst_27774 = (state_27776[(2)]);
var state_27776__$1 = state_27776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27776__$1,inst_27774);
} else {
if((state_val_27777 === (12))){
var inst_27762 = (state_27776[(8)]);
var inst_27762__$1 = (state_27776[(2)]);
var inst_27763 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27762__$1);
var state_27776__$1 = (function (){var statearr_27785 = state_27776;
(statearr_27785[(8)] = inst_27762__$1);

return statearr_27785;
})();
if(cljs.core.truth_(inst_27763)){
var statearr_27786_27812 = state_27776__$1;
(statearr_27786_27812[(1)] = (13));

} else {
var statearr_27787_27813 = state_27776__$1;
(statearr_27787_27813[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (2))){
var inst_27739 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27740 = (0);
var state_27776__$1 = (function (){var statearr_27788 = state_27776;
(statearr_27788[(9)] = inst_27739);

(statearr_27788[(7)] = inst_27740);

return statearr_27788;
})();
var statearr_27789_27814 = state_27776__$1;
(statearr_27789_27814[(2)] = null);

(statearr_27789_27814[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (11))){
var inst_27740 = (state_27776[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27776,(10),Object,null,(9));
var inst_27749 = chs__$1.call(null,inst_27740);
var inst_27750 = done.call(null,inst_27740);
var inst_27751 = cljs.core.async.take_BANG_.call(null,inst_27749,inst_27750);
var state_27776__$1 = state_27776;
var statearr_27790_27815 = state_27776__$1;
(statearr_27790_27815[(2)] = inst_27751);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27776__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (9))){
var inst_27740 = (state_27776[(7)]);
var inst_27753 = (state_27776[(2)]);
var inst_27754 = (inst_27740 + (1));
var inst_27740__$1 = inst_27754;
var state_27776__$1 = (function (){var statearr_27791 = state_27776;
(statearr_27791[(10)] = inst_27753);

(statearr_27791[(7)] = inst_27740__$1);

return statearr_27791;
})();
var statearr_27792_27816 = state_27776__$1;
(statearr_27792_27816[(2)] = null);

(statearr_27792_27816[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (5))){
var inst_27760 = (state_27776[(2)]);
var state_27776__$1 = (function (){var statearr_27793 = state_27776;
(statearr_27793[(11)] = inst_27760);

return statearr_27793;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27776__$1,(12),dchan);
} else {
if((state_val_27777 === (14))){
var inst_27762 = (state_27776[(8)]);
var inst_27767 = cljs.core.apply.call(null,f,inst_27762);
var state_27776__$1 = state_27776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27776__$1,(16),out,inst_27767);
} else {
if((state_val_27777 === (16))){
var inst_27769 = (state_27776[(2)]);
var state_27776__$1 = (function (){var statearr_27794 = state_27776;
(statearr_27794[(12)] = inst_27769);

return statearr_27794;
})();
var statearr_27795_27817 = state_27776__$1;
(statearr_27795_27817[(2)] = null);

(statearr_27795_27817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (10))){
var inst_27744 = (state_27776[(2)]);
var inst_27745 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27776__$1 = (function (){var statearr_27796 = state_27776;
(statearr_27796[(13)] = inst_27744);

return statearr_27796;
})();
var statearr_27797_27818 = state_27776__$1;
(statearr_27797_27818[(2)] = inst_27745);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27776__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (8))){
var inst_27758 = (state_27776[(2)]);
var state_27776__$1 = state_27776;
var statearr_27798_27819 = state_27776__$1;
(statearr_27798_27819[(2)] = inst_27758);

(statearr_27798_27819[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__26359__auto__ = null;
var cljs$core$async$state_machine__26359__auto____0 = (function (){
var statearr_27799 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27799[(0)] = cljs$core$async$state_machine__26359__auto__);

(statearr_27799[(1)] = (1));

return statearr_27799;
});
var cljs$core$async$state_machine__26359__auto____1 = (function (state_27776){
while(true){
var ret_value__26360__auto__ = (function (){try{while(true){
var result__26361__auto__ = switch__26358__auto__.call(null,state_27776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26361__auto__;
}
break;
}
}catch (e27800){if((e27800 instanceof Object)){
var ex__26362__auto__ = e27800;
var statearr_27801_27820 = state_27776;
(statearr_27801_27820[(5)] = ex__26362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27821 = state_27776;
state_27776 = G__27821;
continue;
} else {
return ret_value__26360__auto__;
}
break;
}
});
cljs$core$async$state_machine__26359__auto__ = function(state_27776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26359__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26359__auto____1.call(this,state_27776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26359__auto____0;
cljs$core$async$state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26359__auto____1;
return cljs$core$async$state_machine__26359__auto__;
})()
})();
var state__26455__auto__ = (function (){var statearr_27802 = f__26454__auto__.call(null);
(statearr_27802[(6)] = c__26453__auto___27804);

return statearr_27802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__27824 = arguments.length;
switch (G__27824) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26453__auto___27878 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26454__auto__ = (function (){var switch__26358__auto__ = (function (state_27856){
var state_val_27857 = (state_27856[(1)]);
if((state_val_27857 === (7))){
var inst_27836 = (state_27856[(7)]);
var inst_27835 = (state_27856[(8)]);
var inst_27835__$1 = (state_27856[(2)]);
var inst_27836__$1 = cljs.core.nth.call(null,inst_27835__$1,(0),null);
var inst_27837 = cljs.core.nth.call(null,inst_27835__$1,(1),null);
var inst_27838 = (inst_27836__$1 == null);
var state_27856__$1 = (function (){var statearr_27858 = state_27856;
(statearr_27858[(7)] = inst_27836__$1);

(statearr_27858[(9)] = inst_27837);

(statearr_27858[(8)] = inst_27835__$1);

return statearr_27858;
})();
if(cljs.core.truth_(inst_27838)){
var statearr_27859_27879 = state_27856__$1;
(statearr_27859_27879[(1)] = (8));

} else {
var statearr_27860_27880 = state_27856__$1;
(statearr_27860_27880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27857 === (1))){
var inst_27825 = cljs.core.vec.call(null,chs);
var inst_27826 = inst_27825;
var state_27856__$1 = (function (){var statearr_27861 = state_27856;
(statearr_27861[(10)] = inst_27826);

return statearr_27861;
})();
var statearr_27862_27881 = state_27856__$1;
(statearr_27862_27881[(2)] = null);

(statearr_27862_27881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27857 === (4))){
var inst_27826 = (state_27856[(10)]);
var state_27856__$1 = state_27856;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27856__$1,(7),inst_27826);
} else {
if((state_val_27857 === (6))){
var inst_27852 = (state_27856[(2)]);
var state_27856__$1 = state_27856;
var statearr_27863_27882 = state_27856__$1;
(statearr_27863_27882[(2)] = inst_27852);

(statearr_27863_27882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27857 === (3))){
var inst_27854 = (state_27856[(2)]);
var state_27856__$1 = state_27856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27856__$1,inst_27854);
} else {
if((state_val_27857 === (2))){
var inst_27826 = (state_27856[(10)]);
var inst_27828 = cljs.core.count.call(null,inst_27826);
var inst_27829 = (inst_27828 > (0));
var state_27856__$1 = state_27856;
if(cljs.core.truth_(inst_27829)){
var statearr_27865_27883 = state_27856__$1;
(statearr_27865_27883[(1)] = (4));

} else {
var statearr_27866_27884 = state_27856__$1;
(statearr_27866_27884[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27857 === (11))){
var inst_27826 = (state_27856[(10)]);
var inst_27845 = (state_27856[(2)]);
var tmp27864 = inst_27826;
var inst_27826__$1 = tmp27864;
var state_27856__$1 = (function (){var statearr_27867 = state_27856;
(statearr_27867[(10)] = inst_27826__$1);

(statearr_27867[(11)] = inst_27845);

return statearr_27867;
})();
var statearr_27868_27885 = state_27856__$1;
(statearr_27868_27885[(2)] = null);

(statearr_27868_27885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27857 === (9))){
var inst_27836 = (state_27856[(7)]);
var state_27856__$1 = state_27856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27856__$1,(11),out,inst_27836);
} else {
if((state_val_27857 === (5))){
var inst_27850 = cljs.core.async.close_BANG_.call(null,out);
var state_27856__$1 = state_27856;
var statearr_27869_27886 = state_27856__$1;
(statearr_27869_27886[(2)] = inst_27850);

(statearr_27869_27886[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27857 === (10))){
var inst_27848 = (state_27856[(2)]);
var state_27856__$1 = state_27856;
var statearr_27870_27887 = state_27856__$1;
(statearr_27870_27887[(2)] = inst_27848);

(statearr_27870_27887[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27857 === (8))){
var inst_27836 = (state_27856[(7)]);
var inst_27826 = (state_27856[(10)]);
var inst_27837 = (state_27856[(9)]);
var inst_27835 = (state_27856[(8)]);
var inst_27840 = (function (){var cs = inst_27826;
var vec__27831 = inst_27835;
var v = inst_27836;
var c = inst_27837;
return (function (p1__27822_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27822_SHARP_);
});
})();
var inst_27841 = cljs.core.filterv.call(null,inst_27840,inst_27826);
var inst_27826__$1 = inst_27841;
var state_27856__$1 = (function (){var statearr_27871 = state_27856;
(statearr_27871[(10)] = inst_27826__$1);

return statearr_27871;
})();
var statearr_27872_27888 = state_27856__$1;
(statearr_27872_27888[(2)] = null);

(statearr_27872_27888[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__26359__auto__ = null;
var cljs$core$async$state_machine__26359__auto____0 = (function (){
var statearr_27873 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27873[(0)] = cljs$core$async$state_machine__26359__auto__);

(statearr_27873[(1)] = (1));

return statearr_27873;
});
var cljs$core$async$state_machine__26359__auto____1 = (function (state_27856){
while(true){
var ret_value__26360__auto__ = (function (){try{while(true){
var result__26361__auto__ = switch__26358__auto__.call(null,state_27856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26361__auto__;
}
break;
}
}catch (e27874){if((e27874 instanceof Object)){
var ex__26362__auto__ = e27874;
var statearr_27875_27889 = state_27856;
(statearr_27875_27889[(5)] = ex__26362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27890 = state_27856;
state_27856 = G__27890;
continue;
} else {
return ret_value__26360__auto__;
}
break;
}
});
cljs$core$async$state_machine__26359__auto__ = function(state_27856){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26359__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26359__auto____1.call(this,state_27856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26359__auto____0;
cljs$core$async$state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26359__auto____1;
return cljs$core$async$state_machine__26359__auto__;
})()
})();
var state__26455__auto__ = (function (){var statearr_27876 = f__26454__auto__.call(null);
(statearr_27876[(6)] = c__26453__auto___27878);

return statearr_27876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__27892 = arguments.length;
switch (G__27892) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26453__auto___27937 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26454__auto__ = (function (){var switch__26358__auto__ = (function (state_27916){
var state_val_27917 = (state_27916[(1)]);
if((state_val_27917 === (7))){
var inst_27898 = (state_27916[(7)]);
var inst_27898__$1 = (state_27916[(2)]);
var inst_27899 = (inst_27898__$1 == null);
var inst_27900 = cljs.core.not.call(null,inst_27899);
var state_27916__$1 = (function (){var statearr_27918 = state_27916;
(statearr_27918[(7)] = inst_27898__$1);

return statearr_27918;
})();
if(inst_27900){
var statearr_27919_27938 = state_27916__$1;
(statearr_27919_27938[(1)] = (8));

} else {
var statearr_27920_27939 = state_27916__$1;
(statearr_27920_27939[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27917 === (1))){
var inst_27893 = (0);
var state_27916__$1 = (function (){var statearr_27921 = state_27916;
(statearr_27921[(8)] = inst_27893);

return statearr_27921;
})();
var statearr_27922_27940 = state_27916__$1;
(statearr_27922_27940[(2)] = null);

(statearr_27922_27940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27917 === (4))){
var state_27916__$1 = state_27916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27916__$1,(7),ch);
} else {
if((state_val_27917 === (6))){
var inst_27911 = (state_27916[(2)]);
var state_27916__$1 = state_27916;
var statearr_27923_27941 = state_27916__$1;
(statearr_27923_27941[(2)] = inst_27911);

(statearr_27923_27941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27917 === (3))){
var inst_27913 = (state_27916[(2)]);
var inst_27914 = cljs.core.async.close_BANG_.call(null,out);
var state_27916__$1 = (function (){var statearr_27924 = state_27916;
(statearr_27924[(9)] = inst_27913);

return statearr_27924;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27916__$1,inst_27914);
} else {
if((state_val_27917 === (2))){
var inst_27893 = (state_27916[(8)]);
var inst_27895 = (inst_27893 < n);
var state_27916__$1 = state_27916;
if(cljs.core.truth_(inst_27895)){
var statearr_27925_27942 = state_27916__$1;
(statearr_27925_27942[(1)] = (4));

} else {
var statearr_27926_27943 = state_27916__$1;
(statearr_27926_27943[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27917 === (11))){
var inst_27893 = (state_27916[(8)]);
var inst_27903 = (state_27916[(2)]);
var inst_27904 = (inst_27893 + (1));
var inst_27893__$1 = inst_27904;
var state_27916__$1 = (function (){var statearr_27927 = state_27916;
(statearr_27927[(8)] = inst_27893__$1);

(statearr_27927[(10)] = inst_27903);

return statearr_27927;
})();
var statearr_27928_27944 = state_27916__$1;
(statearr_27928_27944[(2)] = null);

(statearr_27928_27944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27917 === (9))){
var state_27916__$1 = state_27916;
var statearr_27929_27945 = state_27916__$1;
(statearr_27929_27945[(2)] = null);

(statearr_27929_27945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27917 === (5))){
var state_27916__$1 = state_27916;
var statearr_27930_27946 = state_27916__$1;
(statearr_27930_27946[(2)] = null);

(statearr_27930_27946[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27917 === (10))){
var inst_27908 = (state_27916[(2)]);
var state_27916__$1 = state_27916;
var statearr_27931_27947 = state_27916__$1;
(statearr_27931_27947[(2)] = inst_27908);

(statearr_27931_27947[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27917 === (8))){
var inst_27898 = (state_27916[(7)]);
var state_27916__$1 = state_27916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27916__$1,(11),out,inst_27898);
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
});
return (function() {
var cljs$core$async$state_machine__26359__auto__ = null;
var cljs$core$async$state_machine__26359__auto____0 = (function (){
var statearr_27932 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27932[(0)] = cljs$core$async$state_machine__26359__auto__);

(statearr_27932[(1)] = (1));

return statearr_27932;
});
var cljs$core$async$state_machine__26359__auto____1 = (function (state_27916){
while(true){
var ret_value__26360__auto__ = (function (){try{while(true){
var result__26361__auto__ = switch__26358__auto__.call(null,state_27916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26361__auto__;
}
break;
}
}catch (e27933){if((e27933 instanceof Object)){
var ex__26362__auto__ = e27933;
var statearr_27934_27948 = state_27916;
(statearr_27934_27948[(5)] = ex__26362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27949 = state_27916;
state_27916 = G__27949;
continue;
} else {
return ret_value__26360__auto__;
}
break;
}
});
cljs$core$async$state_machine__26359__auto__ = function(state_27916){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26359__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26359__auto____1.call(this,state_27916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26359__auto____0;
cljs$core$async$state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26359__auto____1;
return cljs$core$async$state_machine__26359__auto__;
})()
})();
var state__26455__auto__ = (function (){var statearr_27935 = f__26454__auto__.call(null);
(statearr_27935[(6)] = c__26453__auto___27937);

return statearr_27935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27951 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27951 = (function (f,ch,meta27952){
this.f = f;
this.ch = ch;
this.meta27952 = meta27952;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27953,meta27952__$1){
var self__ = this;
var _27953__$1 = this;
return (new cljs.core.async.t_cljs$core$async27951(self__.f,self__.ch,meta27952__$1));
}));

(cljs.core.async.t_cljs$core$async27951.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27953){
var self__ = this;
var _27953__$1 = this;
return self__.meta27952;
}));

(cljs.core.async.t_cljs$core$async27951.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27951.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27951.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27951.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27951.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27954 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27954 = (function (f,ch,meta27952,_,fn1,meta27955){
this.f = f;
this.ch = ch;
this.meta27952 = meta27952;
this._ = _;
this.fn1 = fn1;
this.meta27955 = meta27955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27956,meta27955__$1){
var self__ = this;
var _27956__$1 = this;
return (new cljs.core.async.t_cljs$core$async27954(self__.f,self__.ch,self__.meta27952,self__._,self__.fn1,meta27955__$1));
}));

(cljs.core.async.t_cljs$core$async27954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27956){
var self__ = this;
var _27956__$1 = this;
return self__.meta27955;
}));

(cljs.core.async.t_cljs$core$async27954.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27954.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async27954.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27954.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__27950_SHARP_){
return f1.call(null,(((p1__27950_SHARP_ == null))?null:self__.f.call(null,p1__27950_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async27954.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27952","meta27952",-256359735,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27951","cljs.core.async/t_cljs$core$async27951",-364045373,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27955","meta27955",-343848217,null)], null);
}));

(cljs.core.async.t_cljs$core$async27954.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27954.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27954");

(cljs.core.async.t_cljs$core$async27954.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27954");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27954.
 */
cljs.core.async.__GT_t_cljs$core$async27954 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27954(f__$1,ch__$1,meta27952__$1,___$2,fn1__$1,meta27955){
return (new cljs.core.async.t_cljs$core$async27954(f__$1,ch__$1,meta27952__$1,___$2,fn1__$1,meta27955));
});

}

return (new cljs.core.async.t_cljs$core$async27954(self__.f,self__.ch,self__.meta27952,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async27951.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27951.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async27951.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27952","meta27952",-256359735,null)], null);
}));

(cljs.core.async.t_cljs$core$async27951.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27951.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27951");

(cljs.core.async.t_cljs$core$async27951.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27951");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27951.
 */
cljs.core.async.__GT_t_cljs$core$async27951 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27951(f__$1,ch__$1,meta27952){
return (new cljs.core.async.t_cljs$core$async27951(f__$1,ch__$1,meta27952));
});

}

return (new cljs.core.async.t_cljs$core$async27951(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27957 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27957 = (function (f,ch,meta27958){
this.f = f;
this.ch = ch;
this.meta27958 = meta27958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27959,meta27958__$1){
var self__ = this;
var _27959__$1 = this;
return (new cljs.core.async.t_cljs$core$async27957(self__.f,self__.ch,meta27958__$1));
}));

(cljs.core.async.t_cljs$core$async27957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27959){
var self__ = this;
var _27959__$1 = this;
return self__.meta27958;
}));

(cljs.core.async.t_cljs$core$async27957.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27957.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27957.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27957.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async27957.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27957.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async27957.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27958","meta27958",-1274968573,null)], null);
}));

(cljs.core.async.t_cljs$core$async27957.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27957.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27957");

(cljs.core.async.t_cljs$core$async27957.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27957");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27957.
 */
cljs.core.async.__GT_t_cljs$core$async27957 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27957(f__$1,ch__$1,meta27958){
return (new cljs.core.async.t_cljs$core$async27957(f__$1,ch__$1,meta27958));
});

}

return (new cljs.core.async.t_cljs$core$async27957(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27960 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27960 = (function (p,ch,meta27961){
this.p = p;
this.ch = ch;
this.meta27961 = meta27961;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27962,meta27961__$1){
var self__ = this;
var _27962__$1 = this;
return (new cljs.core.async.t_cljs$core$async27960(self__.p,self__.ch,meta27961__$1));
}));

(cljs.core.async.t_cljs$core$async27960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27962){
var self__ = this;
var _27962__$1 = this;
return self__.meta27961;
}));

(cljs.core.async.t_cljs$core$async27960.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27960.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27960.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27960.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27960.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async27960.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27960.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async27960.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27961","meta27961",-880280430,null)], null);
}));

(cljs.core.async.t_cljs$core$async27960.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27960.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27960");

(cljs.core.async.t_cljs$core$async27960.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27960");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27960.
 */
cljs.core.async.__GT_t_cljs$core$async27960 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27960(p__$1,ch__$1,meta27961){
return (new cljs.core.async.t_cljs$core$async27960(p__$1,ch__$1,meta27961));
});

}

return (new cljs.core.async.t_cljs$core$async27960(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__27964 = arguments.length;
switch (G__27964) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26453__auto___28004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26454__auto__ = (function (){var switch__26358__auto__ = (function (state_27985){
var state_val_27986 = (state_27985[(1)]);
if((state_val_27986 === (7))){
var inst_27981 = (state_27985[(2)]);
var state_27985__$1 = state_27985;
var statearr_27987_28005 = state_27985__$1;
(statearr_27987_28005[(2)] = inst_27981);

(statearr_27987_28005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (1))){
var state_27985__$1 = state_27985;
var statearr_27988_28006 = state_27985__$1;
(statearr_27988_28006[(2)] = null);

(statearr_27988_28006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (4))){
var inst_27967 = (state_27985[(7)]);
var inst_27967__$1 = (state_27985[(2)]);
var inst_27968 = (inst_27967__$1 == null);
var state_27985__$1 = (function (){var statearr_27989 = state_27985;
(statearr_27989[(7)] = inst_27967__$1);

return statearr_27989;
})();
if(cljs.core.truth_(inst_27968)){
var statearr_27990_28007 = state_27985__$1;
(statearr_27990_28007[(1)] = (5));

} else {
var statearr_27991_28008 = state_27985__$1;
(statearr_27991_28008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (6))){
var inst_27967 = (state_27985[(7)]);
var inst_27972 = p.call(null,inst_27967);
var state_27985__$1 = state_27985;
if(cljs.core.truth_(inst_27972)){
var statearr_27992_28009 = state_27985__$1;
(statearr_27992_28009[(1)] = (8));

} else {
var statearr_27993_28010 = state_27985__$1;
(statearr_27993_28010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (3))){
var inst_27983 = (state_27985[(2)]);
var state_27985__$1 = state_27985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27985__$1,inst_27983);
} else {
if((state_val_27986 === (2))){
var state_27985__$1 = state_27985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27985__$1,(4),ch);
} else {
if((state_val_27986 === (11))){
var inst_27975 = (state_27985[(2)]);
var state_27985__$1 = state_27985;
var statearr_27994_28011 = state_27985__$1;
(statearr_27994_28011[(2)] = inst_27975);

(statearr_27994_28011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (9))){
var state_27985__$1 = state_27985;
var statearr_27995_28012 = state_27985__$1;
(statearr_27995_28012[(2)] = null);

(statearr_27995_28012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (5))){
var inst_27970 = cljs.core.async.close_BANG_.call(null,out);
var state_27985__$1 = state_27985;
var statearr_27996_28013 = state_27985__$1;
(statearr_27996_28013[(2)] = inst_27970);

(statearr_27996_28013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (10))){
var inst_27978 = (state_27985[(2)]);
var state_27985__$1 = (function (){var statearr_27997 = state_27985;
(statearr_27997[(8)] = inst_27978);

return statearr_27997;
})();
var statearr_27998_28014 = state_27985__$1;
(statearr_27998_28014[(2)] = null);

(statearr_27998_28014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (8))){
var inst_27967 = (state_27985[(7)]);
var state_27985__$1 = state_27985;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27985__$1,(11),out,inst_27967);
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
});
return (function() {
var cljs$core$async$state_machine__26359__auto__ = null;
var cljs$core$async$state_machine__26359__auto____0 = (function (){
var statearr_27999 = [null,null,null,null,null,null,null,null,null];
(statearr_27999[(0)] = cljs$core$async$state_machine__26359__auto__);

(statearr_27999[(1)] = (1));

return statearr_27999;
});
var cljs$core$async$state_machine__26359__auto____1 = (function (state_27985){
while(true){
var ret_value__26360__auto__ = (function (){try{while(true){
var result__26361__auto__ = switch__26358__auto__.call(null,state_27985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26361__auto__;
}
break;
}
}catch (e28000){if((e28000 instanceof Object)){
var ex__26362__auto__ = e28000;
var statearr_28001_28015 = state_27985;
(statearr_28001_28015[(5)] = ex__26362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28016 = state_27985;
state_27985 = G__28016;
continue;
} else {
return ret_value__26360__auto__;
}
break;
}
});
cljs$core$async$state_machine__26359__auto__ = function(state_27985){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26359__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26359__auto____1.call(this,state_27985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26359__auto____0;
cljs$core$async$state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26359__auto____1;
return cljs$core$async$state_machine__26359__auto__;
})()
})();
var state__26455__auto__ = (function (){var statearr_28002 = f__26454__auto__.call(null);
(statearr_28002[(6)] = c__26453__auto___28004);

return statearr_28002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28018 = arguments.length;
switch (G__28018) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26454__auto__ = (function (){var switch__26358__auto__ = (function (state_28081){
var state_val_28082 = (state_28081[(1)]);
if((state_val_28082 === (7))){
var inst_28077 = (state_28081[(2)]);
var state_28081__$1 = state_28081;
var statearr_28083_28121 = state_28081__$1;
(statearr_28083_28121[(2)] = inst_28077);

(statearr_28083_28121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28082 === (20))){
var inst_28047 = (state_28081[(7)]);
var inst_28058 = (state_28081[(2)]);
var inst_28059 = cljs.core.next.call(null,inst_28047);
var inst_28033 = inst_28059;
var inst_28034 = null;
var inst_28035 = (0);
var inst_28036 = (0);
var state_28081__$1 = (function (){var statearr_28084 = state_28081;
(statearr_28084[(8)] = inst_28033);

(statearr_28084[(9)] = inst_28036);

(statearr_28084[(10)] = inst_28035);

(statearr_28084[(11)] = inst_28058);

(statearr_28084[(12)] = inst_28034);

return statearr_28084;
})();
var statearr_28085_28122 = state_28081__$1;
(statearr_28085_28122[(2)] = null);

(statearr_28085_28122[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28082 === (1))){
var state_28081__$1 = state_28081;
var statearr_28086_28123 = state_28081__$1;
(statearr_28086_28123[(2)] = null);

(statearr_28086_28123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28082 === (4))){
var inst_28022 = (state_28081[(13)]);
var inst_28022__$1 = (state_28081[(2)]);
var inst_28023 = (inst_28022__$1 == null);
var state_28081__$1 = (function (){var statearr_28087 = state_28081;
(statearr_28087[(13)] = inst_28022__$1);

return statearr_28087;
})();
if(cljs.core.truth_(inst_28023)){
var statearr_28088_28124 = state_28081__$1;
(statearr_28088_28124[(1)] = (5));

} else {
var statearr_28089_28125 = state_28081__$1;
(statearr_28089_28125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28082 === (15))){
var state_28081__$1 = state_28081;
var statearr_28093_28126 = state_28081__$1;
(statearr_28093_28126[(2)] = null);

(statearr_28093_28126[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28082 === (21))){
var state_28081__$1 = state_28081;
var statearr_28094_28127 = state_28081__$1;
(statearr_28094_28127[(2)] = null);

(statearr_28094_28127[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28082 === (13))){
var inst_28033 = (state_28081[(8)]);
var inst_28036 = (state_28081[(9)]);
var inst_28035 = (state_28081[(10)]);
var inst_28034 = (state_28081[(12)]);
var inst_28043 = (state_28081[(2)]);
var inst_28044 = (inst_28036 + (1));
var tmp28090 = inst_28033;
var tmp28091 = inst_28035;
var tmp28092 = inst_28034;
var inst_28033__$1 = tmp28090;
var inst_28034__$1 = tmp28092;
var inst_28035__$1 = tmp28091;
var inst_28036__$1 = inst_28044;
var state_28081__$1 = (function (){var statearr_28095 = state_28081;
(statearr_28095[(14)] = inst_28043);

(statearr_28095[(8)] = inst_28033__$1);

(statearr_28095[(9)] = inst_28036__$1);

(statearr_28095[(10)] = inst_28035__$1);

(statearr_28095[(12)] = inst_28034__$1);

return statearr_28095;
})();
var statearr_28096_28128 = state_28081__$1;
(statearr_28096_28128[(2)] = null);

(statearr_28096_28128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28082 === (22))){
var state_28081__$1 = state_28081;
var statearr_28097_28129 = state_28081__$1;
(statearr_28097_28129[(2)] = null);

(statearr_28097_28129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28082 === (6))){
var inst_28022 = (state_28081[(13)]);
var inst_28031 = f.call(null,inst_28022);
var inst_28032 = cljs.core.seq.call(null,inst_28031);
var inst_28033 = inst_28032;
var inst_28034 = null;
var inst_28035 = (0);
var inst_28036 = (0);
var state_28081__$1 = (function (){var statearr_28098 = state_28081;
(statearr_28098[(8)] = inst_28033);

(statearr_28098[(9)] = inst_28036);

(statearr_28098[(10)] = inst_28035);

(statearr_28098[(12)] = inst_28034);

return statearr_28098;
})();
var statearr_28099_28130 = state_28081__$1;
(statearr_28099_28130[(2)] = null);

(statearr_28099_28130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28082 === (17))){
var inst_28047 = (state_28081[(7)]);
var inst_28051 = cljs.core.chunk_first.call(null,inst_28047);
var inst_28052 = cljs.core.chunk_rest.call(null,inst_28047);
var inst_28053 = cljs.core.count.call(null,inst_28051);
var inst_28033 = inst_28052;
var inst_28034 = inst_28051;
var inst_28035 = inst_28053;
var inst_28036 = (0);
var state_28081__$1 = (function (){var statearr_28100 = state_28081;
(statearr_28100[(8)] = inst_28033);

(statearr_28100[(9)] = inst_28036);

(statearr_28100[(10)] = inst_28035);

(statearr_28100[(12)] = inst_28034);

return statearr_28100;
})();
var statearr_28101_28131 = state_28081__$1;
(statearr_28101_28131[(2)] = null);

(statearr_28101_28131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28082 === (3))){
var inst_28079 = (state_28081[(2)]);
var state_28081__$1 = state_28081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28081__$1,inst_28079);
} else {
if((state_val_28082 === (12))){
var inst_28067 = (state_28081[(2)]);
var state_28081__$1 = state_28081;
var statearr_28102_28132 = state_28081__$1;
(statearr_28102_28132[(2)] = inst_28067);

(statearr_28102_28132[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28082 === (2))){
var state_28081__$1 = state_28081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28081__$1,(4),in$);
} else {
if((state_val_28082 === (23))){
var inst_28075 = (state_28081[(2)]);
var state_28081__$1 = state_28081;
var statearr_28103_28133 = state_28081__$1;
(statearr_28103_28133[(2)] = inst_28075);

(statearr_28103_28133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28082 === (19))){
var inst_28062 = (state_28081[(2)]);
var state_28081__$1 = state_28081;
var statearr_28104_28134 = state_28081__$1;
(statearr_28104_28134[(2)] = inst_28062);

(statearr_28104_28134[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28082 === (11))){
var inst_28033 = (state_28081[(8)]);
var inst_28047 = (state_28081[(7)]);
var inst_28047__$1 = cljs.core.seq.call(null,inst_28033);
var state_28081__$1 = (function (){var statearr_28105 = state_28081;
(statearr_28105[(7)] = inst_28047__$1);

return statearr_28105;
})();
if(inst_28047__$1){
var statearr_28106_28135 = state_28081__$1;
(statearr_28106_28135[(1)] = (14));

} else {
var statearr_28107_28136 = state_28081__$1;
(statearr_28107_28136[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28082 === (9))){
var inst_28069 = (state_28081[(2)]);
var inst_28070 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28081__$1 = (function (){var statearr_28108 = state_28081;
(statearr_28108[(15)] = inst_28069);

return statearr_28108;
})();
if(cljs.core.truth_(inst_28070)){
var statearr_28109_28137 = state_28081__$1;
(statearr_28109_28137[(1)] = (21));

} else {
var statearr_28110_28138 = state_28081__$1;
(statearr_28110_28138[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28082 === (5))){
var inst_28025 = cljs.core.async.close_BANG_.call(null,out);
var state_28081__$1 = state_28081;
var statearr_28111_28139 = state_28081__$1;
(statearr_28111_28139[(2)] = inst_28025);

(statearr_28111_28139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28082 === (14))){
var inst_28047 = (state_28081[(7)]);
var inst_28049 = cljs.core.chunked_seq_QMARK_.call(null,inst_28047);
var state_28081__$1 = state_28081;
if(inst_28049){
var statearr_28112_28140 = state_28081__$1;
(statearr_28112_28140[(1)] = (17));

} else {
var statearr_28113_28141 = state_28081__$1;
(statearr_28113_28141[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28082 === (16))){
var inst_28065 = (state_28081[(2)]);
var state_28081__$1 = state_28081;
var statearr_28114_28142 = state_28081__$1;
(statearr_28114_28142[(2)] = inst_28065);

(statearr_28114_28142[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28082 === (10))){
var inst_28036 = (state_28081[(9)]);
var inst_28034 = (state_28081[(12)]);
var inst_28041 = cljs.core._nth.call(null,inst_28034,inst_28036);
var state_28081__$1 = state_28081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28081__$1,(13),out,inst_28041);
} else {
if((state_val_28082 === (18))){
var inst_28047 = (state_28081[(7)]);
var inst_28056 = cljs.core.first.call(null,inst_28047);
var state_28081__$1 = state_28081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28081__$1,(20),out,inst_28056);
} else {
if((state_val_28082 === (8))){
var inst_28036 = (state_28081[(9)]);
var inst_28035 = (state_28081[(10)]);
var inst_28038 = (inst_28036 < inst_28035);
var inst_28039 = inst_28038;
var state_28081__$1 = state_28081;
if(cljs.core.truth_(inst_28039)){
var statearr_28115_28143 = state_28081__$1;
(statearr_28115_28143[(1)] = (10));

} else {
var statearr_28116_28144 = state_28081__$1;
(statearr_28116_28144[(1)] = (11));

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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26359__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26359__auto____0 = (function (){
var statearr_28117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28117[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26359__auto__);

(statearr_28117[(1)] = (1));

return statearr_28117;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26359__auto____1 = (function (state_28081){
while(true){
var ret_value__26360__auto__ = (function (){try{while(true){
var result__26361__auto__ = switch__26358__auto__.call(null,state_28081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26361__auto__;
}
break;
}
}catch (e28118){if((e28118 instanceof Object)){
var ex__26362__auto__ = e28118;
var statearr_28119_28145 = state_28081;
(statearr_28119_28145[(5)] = ex__26362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28146 = state_28081;
state_28081 = G__28146;
continue;
} else {
return ret_value__26360__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26359__auto__ = function(state_28081){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26359__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26359__auto____1.call(this,state_28081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26359__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26359__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26359__auto__;
})()
})();
var state__26455__auto__ = (function (){var statearr_28120 = f__26454__auto__.call(null);
(statearr_28120[(6)] = c__26453__auto__);

return statearr_28120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
}));

return c__26453__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28148 = arguments.length;
switch (G__28148) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__28151 = arguments.length;
switch (G__28151) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__28154 = arguments.length;
switch (G__28154) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26453__auto___28201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26454__auto__ = (function (){var switch__26358__auto__ = (function (state_28178){
var state_val_28179 = (state_28178[(1)]);
if((state_val_28179 === (7))){
var inst_28173 = (state_28178[(2)]);
var state_28178__$1 = state_28178;
var statearr_28180_28202 = state_28178__$1;
(statearr_28180_28202[(2)] = inst_28173);

(statearr_28180_28202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (1))){
var inst_28155 = null;
var state_28178__$1 = (function (){var statearr_28181 = state_28178;
(statearr_28181[(7)] = inst_28155);

return statearr_28181;
})();
var statearr_28182_28203 = state_28178__$1;
(statearr_28182_28203[(2)] = null);

(statearr_28182_28203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (4))){
var inst_28158 = (state_28178[(8)]);
var inst_28158__$1 = (state_28178[(2)]);
var inst_28159 = (inst_28158__$1 == null);
var inst_28160 = cljs.core.not.call(null,inst_28159);
var state_28178__$1 = (function (){var statearr_28183 = state_28178;
(statearr_28183[(8)] = inst_28158__$1);

return statearr_28183;
})();
if(inst_28160){
var statearr_28184_28204 = state_28178__$1;
(statearr_28184_28204[(1)] = (5));

} else {
var statearr_28185_28205 = state_28178__$1;
(statearr_28185_28205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (6))){
var state_28178__$1 = state_28178;
var statearr_28186_28206 = state_28178__$1;
(statearr_28186_28206[(2)] = null);

(statearr_28186_28206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (3))){
var inst_28175 = (state_28178[(2)]);
var inst_28176 = cljs.core.async.close_BANG_.call(null,out);
var state_28178__$1 = (function (){var statearr_28187 = state_28178;
(statearr_28187[(9)] = inst_28175);

return statearr_28187;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28178__$1,inst_28176);
} else {
if((state_val_28179 === (2))){
var state_28178__$1 = state_28178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28178__$1,(4),ch);
} else {
if((state_val_28179 === (11))){
var inst_28158 = (state_28178[(8)]);
var inst_28167 = (state_28178[(2)]);
var inst_28155 = inst_28158;
var state_28178__$1 = (function (){var statearr_28188 = state_28178;
(statearr_28188[(7)] = inst_28155);

(statearr_28188[(10)] = inst_28167);

return statearr_28188;
})();
var statearr_28189_28207 = state_28178__$1;
(statearr_28189_28207[(2)] = null);

(statearr_28189_28207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (9))){
var inst_28158 = (state_28178[(8)]);
var state_28178__$1 = state_28178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28178__$1,(11),out,inst_28158);
} else {
if((state_val_28179 === (5))){
var inst_28155 = (state_28178[(7)]);
var inst_28158 = (state_28178[(8)]);
var inst_28162 = cljs.core._EQ_.call(null,inst_28158,inst_28155);
var state_28178__$1 = state_28178;
if(inst_28162){
var statearr_28191_28208 = state_28178__$1;
(statearr_28191_28208[(1)] = (8));

} else {
var statearr_28192_28209 = state_28178__$1;
(statearr_28192_28209[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (10))){
var inst_28170 = (state_28178[(2)]);
var state_28178__$1 = state_28178;
var statearr_28193_28210 = state_28178__$1;
(statearr_28193_28210[(2)] = inst_28170);

(statearr_28193_28210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (8))){
var inst_28155 = (state_28178[(7)]);
var tmp28190 = inst_28155;
var inst_28155__$1 = tmp28190;
var state_28178__$1 = (function (){var statearr_28194 = state_28178;
(statearr_28194[(7)] = inst_28155__$1);

return statearr_28194;
})();
var statearr_28195_28211 = state_28178__$1;
(statearr_28195_28211[(2)] = null);

(statearr_28195_28211[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__26359__auto__ = null;
var cljs$core$async$state_machine__26359__auto____0 = (function (){
var statearr_28196 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28196[(0)] = cljs$core$async$state_machine__26359__auto__);

(statearr_28196[(1)] = (1));

return statearr_28196;
});
var cljs$core$async$state_machine__26359__auto____1 = (function (state_28178){
while(true){
var ret_value__26360__auto__ = (function (){try{while(true){
var result__26361__auto__ = switch__26358__auto__.call(null,state_28178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26361__auto__;
}
break;
}
}catch (e28197){if((e28197 instanceof Object)){
var ex__26362__auto__ = e28197;
var statearr_28198_28212 = state_28178;
(statearr_28198_28212[(5)] = ex__26362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28213 = state_28178;
state_28178 = G__28213;
continue;
} else {
return ret_value__26360__auto__;
}
break;
}
});
cljs$core$async$state_machine__26359__auto__ = function(state_28178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26359__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26359__auto____1.call(this,state_28178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26359__auto____0;
cljs$core$async$state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26359__auto____1;
return cljs$core$async$state_machine__26359__auto__;
})()
})();
var state__26455__auto__ = (function (){var statearr_28199 = f__26454__auto__.call(null);
(statearr_28199[(6)] = c__26453__auto___28201);

return statearr_28199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28215 = arguments.length;
switch (G__28215) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26453__auto___28281 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26454__auto__ = (function (){var switch__26358__auto__ = (function (state_28253){
var state_val_28254 = (state_28253[(1)]);
if((state_val_28254 === (7))){
var inst_28249 = (state_28253[(2)]);
var state_28253__$1 = state_28253;
var statearr_28255_28282 = state_28253__$1;
(statearr_28255_28282[(2)] = inst_28249);

(statearr_28255_28282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28254 === (1))){
var inst_28216 = (new Array(n));
var inst_28217 = inst_28216;
var inst_28218 = (0);
var state_28253__$1 = (function (){var statearr_28256 = state_28253;
(statearr_28256[(7)] = inst_28218);

(statearr_28256[(8)] = inst_28217);

return statearr_28256;
})();
var statearr_28257_28283 = state_28253__$1;
(statearr_28257_28283[(2)] = null);

(statearr_28257_28283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28254 === (4))){
var inst_28221 = (state_28253[(9)]);
var inst_28221__$1 = (state_28253[(2)]);
var inst_28222 = (inst_28221__$1 == null);
var inst_28223 = cljs.core.not.call(null,inst_28222);
var state_28253__$1 = (function (){var statearr_28258 = state_28253;
(statearr_28258[(9)] = inst_28221__$1);

return statearr_28258;
})();
if(inst_28223){
var statearr_28259_28284 = state_28253__$1;
(statearr_28259_28284[(1)] = (5));

} else {
var statearr_28260_28285 = state_28253__$1;
(statearr_28260_28285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28254 === (15))){
var inst_28243 = (state_28253[(2)]);
var state_28253__$1 = state_28253;
var statearr_28261_28286 = state_28253__$1;
(statearr_28261_28286[(2)] = inst_28243);

(statearr_28261_28286[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28254 === (13))){
var state_28253__$1 = state_28253;
var statearr_28262_28287 = state_28253__$1;
(statearr_28262_28287[(2)] = null);

(statearr_28262_28287[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28254 === (6))){
var inst_28218 = (state_28253[(7)]);
var inst_28239 = (inst_28218 > (0));
var state_28253__$1 = state_28253;
if(cljs.core.truth_(inst_28239)){
var statearr_28263_28288 = state_28253__$1;
(statearr_28263_28288[(1)] = (12));

} else {
var statearr_28264_28289 = state_28253__$1;
(statearr_28264_28289[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28254 === (3))){
var inst_28251 = (state_28253[(2)]);
var state_28253__$1 = state_28253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28253__$1,inst_28251);
} else {
if((state_val_28254 === (12))){
var inst_28217 = (state_28253[(8)]);
var inst_28241 = cljs.core.vec.call(null,inst_28217);
var state_28253__$1 = state_28253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28253__$1,(15),out,inst_28241);
} else {
if((state_val_28254 === (2))){
var state_28253__$1 = state_28253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28253__$1,(4),ch);
} else {
if((state_val_28254 === (11))){
var inst_28233 = (state_28253[(2)]);
var inst_28234 = (new Array(n));
var inst_28217 = inst_28234;
var inst_28218 = (0);
var state_28253__$1 = (function (){var statearr_28265 = state_28253;
(statearr_28265[(7)] = inst_28218);

(statearr_28265[(8)] = inst_28217);

(statearr_28265[(10)] = inst_28233);

return statearr_28265;
})();
var statearr_28266_28290 = state_28253__$1;
(statearr_28266_28290[(2)] = null);

(statearr_28266_28290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28254 === (9))){
var inst_28217 = (state_28253[(8)]);
var inst_28231 = cljs.core.vec.call(null,inst_28217);
var state_28253__$1 = state_28253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28253__$1,(11),out,inst_28231);
} else {
if((state_val_28254 === (5))){
var inst_28218 = (state_28253[(7)]);
var inst_28217 = (state_28253[(8)]);
var inst_28221 = (state_28253[(9)]);
var inst_28226 = (state_28253[(11)]);
var inst_28225 = (inst_28217[inst_28218] = inst_28221);
var inst_28226__$1 = (inst_28218 + (1));
var inst_28227 = (inst_28226__$1 < n);
var state_28253__$1 = (function (){var statearr_28267 = state_28253;
(statearr_28267[(12)] = inst_28225);

(statearr_28267[(11)] = inst_28226__$1);

return statearr_28267;
})();
if(cljs.core.truth_(inst_28227)){
var statearr_28268_28291 = state_28253__$1;
(statearr_28268_28291[(1)] = (8));

} else {
var statearr_28269_28292 = state_28253__$1;
(statearr_28269_28292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28254 === (14))){
var inst_28246 = (state_28253[(2)]);
var inst_28247 = cljs.core.async.close_BANG_.call(null,out);
var state_28253__$1 = (function (){var statearr_28271 = state_28253;
(statearr_28271[(13)] = inst_28246);

return statearr_28271;
})();
var statearr_28272_28293 = state_28253__$1;
(statearr_28272_28293[(2)] = inst_28247);

(statearr_28272_28293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28254 === (10))){
var inst_28237 = (state_28253[(2)]);
var state_28253__$1 = state_28253;
var statearr_28273_28294 = state_28253__$1;
(statearr_28273_28294[(2)] = inst_28237);

(statearr_28273_28294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28254 === (8))){
var inst_28217 = (state_28253[(8)]);
var inst_28226 = (state_28253[(11)]);
var tmp28270 = inst_28217;
var inst_28217__$1 = tmp28270;
var inst_28218 = inst_28226;
var state_28253__$1 = (function (){var statearr_28274 = state_28253;
(statearr_28274[(7)] = inst_28218);

(statearr_28274[(8)] = inst_28217__$1);

return statearr_28274;
})();
var statearr_28275_28295 = state_28253__$1;
(statearr_28275_28295[(2)] = null);

(statearr_28275_28295[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__26359__auto__ = null;
var cljs$core$async$state_machine__26359__auto____0 = (function (){
var statearr_28276 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28276[(0)] = cljs$core$async$state_machine__26359__auto__);

(statearr_28276[(1)] = (1));

return statearr_28276;
});
var cljs$core$async$state_machine__26359__auto____1 = (function (state_28253){
while(true){
var ret_value__26360__auto__ = (function (){try{while(true){
var result__26361__auto__ = switch__26358__auto__.call(null,state_28253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26361__auto__;
}
break;
}
}catch (e28277){if((e28277 instanceof Object)){
var ex__26362__auto__ = e28277;
var statearr_28278_28296 = state_28253;
(statearr_28278_28296[(5)] = ex__26362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28297 = state_28253;
state_28253 = G__28297;
continue;
} else {
return ret_value__26360__auto__;
}
break;
}
});
cljs$core$async$state_machine__26359__auto__ = function(state_28253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26359__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26359__auto____1.call(this,state_28253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26359__auto____0;
cljs$core$async$state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26359__auto____1;
return cljs$core$async$state_machine__26359__auto__;
})()
})();
var state__26455__auto__ = (function (){var statearr_28279 = f__26454__auto__.call(null);
(statearr_28279[(6)] = c__26453__auto___28281);

return statearr_28279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28299 = arguments.length;
switch (G__28299) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26453__auto___28369 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26454__auto__ = (function (){var switch__26358__auto__ = (function (state_28341){
var state_val_28342 = (state_28341[(1)]);
if((state_val_28342 === (7))){
var inst_28337 = (state_28341[(2)]);
var state_28341__$1 = state_28341;
var statearr_28343_28370 = state_28341__$1;
(statearr_28343_28370[(2)] = inst_28337);

(statearr_28343_28370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (1))){
var inst_28300 = [];
var inst_28301 = inst_28300;
var inst_28302 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28341__$1 = (function (){var statearr_28344 = state_28341;
(statearr_28344[(7)] = inst_28301);

(statearr_28344[(8)] = inst_28302);

return statearr_28344;
})();
var statearr_28345_28371 = state_28341__$1;
(statearr_28345_28371[(2)] = null);

(statearr_28345_28371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (4))){
var inst_28305 = (state_28341[(9)]);
var inst_28305__$1 = (state_28341[(2)]);
var inst_28306 = (inst_28305__$1 == null);
var inst_28307 = cljs.core.not.call(null,inst_28306);
var state_28341__$1 = (function (){var statearr_28346 = state_28341;
(statearr_28346[(9)] = inst_28305__$1);

return statearr_28346;
})();
if(inst_28307){
var statearr_28347_28372 = state_28341__$1;
(statearr_28347_28372[(1)] = (5));

} else {
var statearr_28348_28373 = state_28341__$1;
(statearr_28348_28373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (15))){
var inst_28331 = (state_28341[(2)]);
var state_28341__$1 = state_28341;
var statearr_28349_28374 = state_28341__$1;
(statearr_28349_28374[(2)] = inst_28331);

(statearr_28349_28374[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (13))){
var state_28341__$1 = state_28341;
var statearr_28350_28375 = state_28341__$1;
(statearr_28350_28375[(2)] = null);

(statearr_28350_28375[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (6))){
var inst_28301 = (state_28341[(7)]);
var inst_28326 = inst_28301.length;
var inst_28327 = (inst_28326 > (0));
var state_28341__$1 = state_28341;
if(cljs.core.truth_(inst_28327)){
var statearr_28351_28376 = state_28341__$1;
(statearr_28351_28376[(1)] = (12));

} else {
var statearr_28352_28377 = state_28341__$1;
(statearr_28352_28377[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (3))){
var inst_28339 = (state_28341[(2)]);
var state_28341__$1 = state_28341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28341__$1,inst_28339);
} else {
if((state_val_28342 === (12))){
var inst_28301 = (state_28341[(7)]);
var inst_28329 = cljs.core.vec.call(null,inst_28301);
var state_28341__$1 = state_28341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28341__$1,(15),out,inst_28329);
} else {
if((state_val_28342 === (2))){
var state_28341__$1 = state_28341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28341__$1,(4),ch);
} else {
if((state_val_28342 === (11))){
var inst_28305 = (state_28341[(9)]);
var inst_28309 = (state_28341[(10)]);
var inst_28319 = (state_28341[(2)]);
var inst_28320 = [];
var inst_28321 = inst_28320.push(inst_28305);
var inst_28301 = inst_28320;
var inst_28302 = inst_28309;
var state_28341__$1 = (function (){var statearr_28353 = state_28341;
(statearr_28353[(11)] = inst_28321);

(statearr_28353[(7)] = inst_28301);

(statearr_28353[(8)] = inst_28302);

(statearr_28353[(12)] = inst_28319);

return statearr_28353;
})();
var statearr_28354_28378 = state_28341__$1;
(statearr_28354_28378[(2)] = null);

(statearr_28354_28378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (9))){
var inst_28301 = (state_28341[(7)]);
var inst_28317 = cljs.core.vec.call(null,inst_28301);
var state_28341__$1 = state_28341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28341__$1,(11),out,inst_28317);
} else {
if((state_val_28342 === (5))){
var inst_28302 = (state_28341[(8)]);
var inst_28305 = (state_28341[(9)]);
var inst_28309 = (state_28341[(10)]);
var inst_28309__$1 = f.call(null,inst_28305);
var inst_28310 = cljs.core._EQ_.call(null,inst_28309__$1,inst_28302);
var inst_28311 = cljs.core.keyword_identical_QMARK_.call(null,inst_28302,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28312 = ((inst_28310) || (inst_28311));
var state_28341__$1 = (function (){var statearr_28355 = state_28341;
(statearr_28355[(10)] = inst_28309__$1);

return statearr_28355;
})();
if(cljs.core.truth_(inst_28312)){
var statearr_28356_28379 = state_28341__$1;
(statearr_28356_28379[(1)] = (8));

} else {
var statearr_28357_28380 = state_28341__$1;
(statearr_28357_28380[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (14))){
var inst_28334 = (state_28341[(2)]);
var inst_28335 = cljs.core.async.close_BANG_.call(null,out);
var state_28341__$1 = (function (){var statearr_28359 = state_28341;
(statearr_28359[(13)] = inst_28334);

return statearr_28359;
})();
var statearr_28360_28381 = state_28341__$1;
(statearr_28360_28381[(2)] = inst_28335);

(statearr_28360_28381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (10))){
var inst_28324 = (state_28341[(2)]);
var state_28341__$1 = state_28341;
var statearr_28361_28382 = state_28341__$1;
(statearr_28361_28382[(2)] = inst_28324);

(statearr_28361_28382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (8))){
var inst_28301 = (state_28341[(7)]);
var inst_28305 = (state_28341[(9)]);
var inst_28309 = (state_28341[(10)]);
var inst_28314 = inst_28301.push(inst_28305);
var tmp28358 = inst_28301;
var inst_28301__$1 = tmp28358;
var inst_28302 = inst_28309;
var state_28341__$1 = (function (){var statearr_28362 = state_28341;
(statearr_28362[(7)] = inst_28301__$1);

(statearr_28362[(14)] = inst_28314);

(statearr_28362[(8)] = inst_28302);

return statearr_28362;
})();
var statearr_28363_28383 = state_28341__$1;
(statearr_28363_28383[(2)] = null);

(statearr_28363_28383[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__26359__auto__ = null;
var cljs$core$async$state_machine__26359__auto____0 = (function (){
var statearr_28364 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28364[(0)] = cljs$core$async$state_machine__26359__auto__);

(statearr_28364[(1)] = (1));

return statearr_28364;
});
var cljs$core$async$state_machine__26359__auto____1 = (function (state_28341){
while(true){
var ret_value__26360__auto__ = (function (){try{while(true){
var result__26361__auto__ = switch__26358__auto__.call(null,state_28341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26361__auto__;
}
break;
}
}catch (e28365){if((e28365 instanceof Object)){
var ex__26362__auto__ = e28365;
var statearr_28366_28384 = state_28341;
(statearr_28366_28384[(5)] = ex__26362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28385 = state_28341;
state_28341 = G__28385;
continue;
} else {
return ret_value__26360__auto__;
}
break;
}
});
cljs$core$async$state_machine__26359__auto__ = function(state_28341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26359__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26359__auto____1.call(this,state_28341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26359__auto____0;
cljs$core$async$state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26359__auto____1;
return cljs$core$async$state_machine__26359__auto__;
})()
})();
var state__26455__auto__ = (function (){var statearr_28367 = f__26454__auto__.call(null);
(statearr_28367[(6)] = c__26453__auto___28369);

return statearr_28367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1708005025025
