// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4126__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (cljs.core._EQ_.call(null,"cljs.core",ns)) || (cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__28578 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__28578 == null)){
return null;
} else {
return goog.object.get(G__28578,"requires");
}
}):(function (path){
var G__28579 = goog.object.get(goog.dependencies_.requires,path);
if((G__28579 == null)){
return null;
} else {
return goog.object.getKeys(G__28579);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28580_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28580_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__28581 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__28581__$1 = (((G__28581 == null))?null:goog.object.get(G__28581,"provides"));
if((G__28581__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__28581__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return goog.object.forEach(goog.object.filter(goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,goog.object.get(dep,"provides")));
})),(function (dep,path,_){
var provides = goog.object.get(dep,"provides");
var requires = goog.object.get(dep,"requires");
var seq__28582 = cljs.core.seq.call(null,provides);
var chunk__28583 = null;
var count__28584 = (0);
var i__28585 = (0);
while(true){
if((i__28585 < count__28584)){
var prov = cljs.core._nth.call(null,chunk__28583,i__28585);
var seq__28594_28606 = cljs.core.seq.call(null,requires);
var chunk__28595_28607 = null;
var count__28596_28608 = (0);
var i__28597_28609 = (0);
while(true){
if((i__28597_28609 < count__28596_28608)){
var req_28610 = cljs.core._nth.call(null,chunk__28595_28607,i__28597_28609);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28610,prov);


var G__28611 = seq__28594_28606;
var G__28612 = chunk__28595_28607;
var G__28613 = count__28596_28608;
var G__28614 = (i__28597_28609 + (1));
seq__28594_28606 = G__28611;
chunk__28595_28607 = G__28612;
count__28596_28608 = G__28613;
i__28597_28609 = G__28614;
continue;
} else {
var temp__5720__auto___28615 = cljs.core.seq.call(null,seq__28594_28606);
if(temp__5720__auto___28615){
var seq__28594_28616__$1 = temp__5720__auto___28615;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28594_28616__$1)){
var c__4556__auto___28617 = cljs.core.chunk_first.call(null,seq__28594_28616__$1);
var G__28618 = cljs.core.chunk_rest.call(null,seq__28594_28616__$1);
var G__28619 = c__4556__auto___28617;
var G__28620 = cljs.core.count.call(null,c__4556__auto___28617);
var G__28621 = (0);
seq__28594_28606 = G__28618;
chunk__28595_28607 = G__28619;
count__28596_28608 = G__28620;
i__28597_28609 = G__28621;
continue;
} else {
var req_28622 = cljs.core.first.call(null,seq__28594_28616__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28622,prov);


var G__28623 = cljs.core.next.call(null,seq__28594_28616__$1);
var G__28624 = null;
var G__28625 = (0);
var G__28626 = (0);
seq__28594_28606 = G__28623;
chunk__28595_28607 = G__28624;
count__28596_28608 = G__28625;
i__28597_28609 = G__28626;
continue;
}
} else {
}
}
break;
}


var G__28627 = seq__28582;
var G__28628 = chunk__28583;
var G__28629 = count__28584;
var G__28630 = (i__28585 + (1));
seq__28582 = G__28627;
chunk__28583 = G__28628;
count__28584 = G__28629;
i__28585 = G__28630;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28582);
if(temp__5720__auto__){
var seq__28582__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28582__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28582__$1);
var G__28631 = cljs.core.chunk_rest.call(null,seq__28582__$1);
var G__28632 = c__4556__auto__;
var G__28633 = cljs.core.count.call(null,c__4556__auto__);
var G__28634 = (0);
seq__28582 = G__28631;
chunk__28583 = G__28632;
count__28584 = G__28633;
i__28585 = G__28634;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28582__$1);
var seq__28598_28635 = cljs.core.seq.call(null,requires);
var chunk__28599_28636 = null;
var count__28600_28637 = (0);
var i__28601_28638 = (0);
while(true){
if((i__28601_28638 < count__28600_28637)){
var req_28639 = cljs.core._nth.call(null,chunk__28599_28636,i__28601_28638);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28639,prov);


var G__28640 = seq__28598_28635;
var G__28641 = chunk__28599_28636;
var G__28642 = count__28600_28637;
var G__28643 = (i__28601_28638 + (1));
seq__28598_28635 = G__28640;
chunk__28599_28636 = G__28641;
count__28600_28637 = G__28642;
i__28601_28638 = G__28643;
continue;
} else {
var temp__5720__auto___28644__$1 = cljs.core.seq.call(null,seq__28598_28635);
if(temp__5720__auto___28644__$1){
var seq__28598_28645__$1 = temp__5720__auto___28644__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28598_28645__$1)){
var c__4556__auto___28646 = cljs.core.chunk_first.call(null,seq__28598_28645__$1);
var G__28647 = cljs.core.chunk_rest.call(null,seq__28598_28645__$1);
var G__28648 = c__4556__auto___28646;
var G__28649 = cljs.core.count.call(null,c__4556__auto___28646);
var G__28650 = (0);
seq__28598_28635 = G__28647;
chunk__28599_28636 = G__28648;
count__28600_28637 = G__28649;
i__28601_28638 = G__28650;
continue;
} else {
var req_28651 = cljs.core.first.call(null,seq__28598_28645__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28651,prov);


var G__28652 = cljs.core.next.call(null,seq__28598_28645__$1);
var G__28653 = null;
var G__28654 = (0);
var G__28655 = (0);
seq__28598_28635 = G__28652;
chunk__28599_28636 = G__28653;
count__28600_28637 = G__28654;
i__28601_28638 = G__28655;
continue;
}
} else {
}
}
break;
}


var G__28656 = cljs.core.next.call(null,seq__28582__$1);
var G__28657 = null;
var G__28658 = (0);
var G__28659 = (0);
seq__28582 = G__28656;
chunk__28583 = G__28657;
count__28584 = G__28658;
i__28585 = G__28659;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (deps,path,_){
var seq__28602 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__28603 = null;
var count__28604 = (0);
var i__28605 = (0);
while(true){
if((i__28605 < count__28604)){
var prov = cljs.core._nth.call(null,chunk__28603,i__28605);
goog.object.forEach(deps,((function (seq__28602,chunk__28603,count__28604,i__28605,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__28602,chunk__28603,count__28604,i__28605,prov,requires))
);


var G__28660 = seq__28602;
var G__28661 = chunk__28603;
var G__28662 = count__28604;
var G__28663 = (i__28605 + (1));
seq__28602 = G__28660;
chunk__28603 = G__28661;
count__28604 = G__28662;
i__28605 = G__28663;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28602);
if(temp__5720__auto__){
var seq__28602__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28602__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28602__$1);
var G__28664 = cljs.core.chunk_rest.call(null,seq__28602__$1);
var G__28665 = c__4556__auto__;
var G__28666 = cljs.core.count.call(null,c__4556__auto__);
var G__28667 = (0);
seq__28602 = G__28664;
chunk__28603 = G__28665;
count__28604 = G__28666;
i__28605 = G__28667;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28602__$1);
goog.object.forEach(deps,((function (seq__28602,chunk__28603,count__28604,i__28605,prov,seq__28602__$1,temp__5720__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__28602,chunk__28603,count__28604,i__28605,prov,seq__28602__$1,temp__5720__auto__,requires))
);


var G__28668 = cljs.core.next.call(null,seq__28602__$1);
var G__28669 = null;
var G__28670 = (0);
var G__28671 = (0);
seq__28602 = G__28668;
chunk__28603 = G__28669;
count__28604 = G__28670;
i__28605 = G__28671;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__28672){
var vec__28673 = p__28672;
var _ = cljs.core.nth.call(null,vec__28673,(0),null);
var v = cljs.core.nth.call(null,vec__28673,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__28676){
var vec__28677 = p__28676;
var k = cljs.core.nth.call(null,vec__28677,(0),null);
var v = cljs.core.nth.call(null,vec__28677,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28689_28697 = cljs.core.seq.call(null,deps);
var chunk__28690_28698 = null;
var count__28691_28699 = (0);
var i__28692_28700 = (0);
while(true){
if((i__28692_28700 < count__28691_28699)){
var dep_28701 = cljs.core._nth.call(null,chunk__28690_28698,i__28692_28700);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_28701;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28701));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28701,(depth + (1)),state);
} else {
}


var G__28702 = seq__28689_28697;
var G__28703 = chunk__28690_28698;
var G__28704 = count__28691_28699;
var G__28705 = (i__28692_28700 + (1));
seq__28689_28697 = G__28702;
chunk__28690_28698 = G__28703;
count__28691_28699 = G__28704;
i__28692_28700 = G__28705;
continue;
} else {
var temp__5720__auto___28706 = cljs.core.seq.call(null,seq__28689_28697);
if(temp__5720__auto___28706){
var seq__28689_28707__$1 = temp__5720__auto___28706;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28689_28707__$1)){
var c__4556__auto___28708 = cljs.core.chunk_first.call(null,seq__28689_28707__$1);
var G__28709 = cljs.core.chunk_rest.call(null,seq__28689_28707__$1);
var G__28710 = c__4556__auto___28708;
var G__28711 = cljs.core.count.call(null,c__4556__auto___28708);
var G__28712 = (0);
seq__28689_28697 = G__28709;
chunk__28690_28698 = G__28710;
count__28691_28699 = G__28711;
i__28692_28700 = G__28712;
continue;
} else {
var dep_28713 = cljs.core.first.call(null,seq__28689_28707__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_28713;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28713));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28713,(depth + (1)),state);
} else {
}


var G__28714 = cljs.core.next.call(null,seq__28689_28707__$1);
var G__28715 = null;
var G__28716 = (0);
var G__28717 = (0);
seq__28689_28697 = G__28714;
chunk__28690_28698 = G__28715;
count__28691_28699 = G__28716;
i__28692_28700 = G__28717;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28693){
var vec__28694 = p__28693;
var seq__28695 = cljs.core.seq.call(null,vec__28694);
var first__28696 = cljs.core.first.call(null,seq__28695);
var seq__28695__$1 = cljs.core.next.call(null,seq__28695);
var x = first__28696;
var xs = seq__28695__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__28680_SHARP_){
return clojure.set.difference.call(null,p1__28680_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.debugLoader_.written_,path);

return goog.object.remove(goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__28718_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__28718_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28719 = cljs.core.seq.call(null,provides);
var chunk__28720 = null;
var count__28721 = (0);
var i__28722 = (0);
while(true){
if((i__28722 < count__28721)){
var prov = cljs.core._nth.call(null,chunk__28720,i__28722);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28731_28739 = cljs.core.seq.call(null,requires);
var chunk__28732_28740 = null;
var count__28733_28741 = (0);
var i__28734_28742 = (0);
while(true){
if((i__28734_28742 < count__28733_28741)){
var req_28743 = cljs.core._nth.call(null,chunk__28732_28740,i__28734_28742);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28743,prov);


var G__28744 = seq__28731_28739;
var G__28745 = chunk__28732_28740;
var G__28746 = count__28733_28741;
var G__28747 = (i__28734_28742 + (1));
seq__28731_28739 = G__28744;
chunk__28732_28740 = G__28745;
count__28733_28741 = G__28746;
i__28734_28742 = G__28747;
continue;
} else {
var temp__5720__auto___28748 = cljs.core.seq.call(null,seq__28731_28739);
if(temp__5720__auto___28748){
var seq__28731_28749__$1 = temp__5720__auto___28748;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28731_28749__$1)){
var c__4556__auto___28750 = cljs.core.chunk_first.call(null,seq__28731_28749__$1);
var G__28751 = cljs.core.chunk_rest.call(null,seq__28731_28749__$1);
var G__28752 = c__4556__auto___28750;
var G__28753 = cljs.core.count.call(null,c__4556__auto___28750);
var G__28754 = (0);
seq__28731_28739 = G__28751;
chunk__28732_28740 = G__28752;
count__28733_28741 = G__28753;
i__28734_28742 = G__28754;
continue;
} else {
var req_28755 = cljs.core.first.call(null,seq__28731_28749__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28755,prov);


var G__28756 = cljs.core.next.call(null,seq__28731_28749__$1);
var G__28757 = null;
var G__28758 = (0);
var G__28759 = (0);
seq__28731_28739 = G__28756;
chunk__28732_28740 = G__28757;
count__28733_28741 = G__28758;
i__28734_28742 = G__28759;
continue;
}
} else {
}
}
break;
}


var G__28760 = seq__28719;
var G__28761 = chunk__28720;
var G__28762 = count__28721;
var G__28763 = (i__28722 + (1));
seq__28719 = G__28760;
chunk__28720 = G__28761;
count__28721 = G__28762;
i__28722 = G__28763;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28719);
if(temp__5720__auto__){
var seq__28719__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28719__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28719__$1);
var G__28764 = cljs.core.chunk_rest.call(null,seq__28719__$1);
var G__28765 = c__4556__auto__;
var G__28766 = cljs.core.count.call(null,c__4556__auto__);
var G__28767 = (0);
seq__28719 = G__28764;
chunk__28720 = G__28765;
count__28721 = G__28766;
i__28722 = G__28767;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28719__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28735_28768 = cljs.core.seq.call(null,requires);
var chunk__28736_28769 = null;
var count__28737_28770 = (0);
var i__28738_28771 = (0);
while(true){
if((i__28738_28771 < count__28737_28770)){
var req_28772 = cljs.core._nth.call(null,chunk__28736_28769,i__28738_28771);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28772,prov);


var G__28773 = seq__28735_28768;
var G__28774 = chunk__28736_28769;
var G__28775 = count__28737_28770;
var G__28776 = (i__28738_28771 + (1));
seq__28735_28768 = G__28773;
chunk__28736_28769 = G__28774;
count__28737_28770 = G__28775;
i__28738_28771 = G__28776;
continue;
} else {
var temp__5720__auto___28777__$1 = cljs.core.seq.call(null,seq__28735_28768);
if(temp__5720__auto___28777__$1){
var seq__28735_28778__$1 = temp__5720__auto___28777__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28735_28778__$1)){
var c__4556__auto___28779 = cljs.core.chunk_first.call(null,seq__28735_28778__$1);
var G__28780 = cljs.core.chunk_rest.call(null,seq__28735_28778__$1);
var G__28781 = c__4556__auto___28779;
var G__28782 = cljs.core.count.call(null,c__4556__auto___28779);
var G__28783 = (0);
seq__28735_28768 = G__28780;
chunk__28736_28769 = G__28781;
count__28737_28770 = G__28782;
i__28738_28771 = G__28783;
continue;
} else {
var req_28784 = cljs.core.first.call(null,seq__28735_28778__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28784,prov);


var G__28785 = cljs.core.next.call(null,seq__28735_28778__$1);
var G__28786 = null;
var G__28787 = (0);
var G__28788 = (0);
seq__28735_28768 = G__28785;
chunk__28736_28769 = G__28786;
count__28737_28770 = G__28787;
i__28738_28771 = G__28788;
continue;
}
} else {
}
}
break;
}


var G__28789 = cljs.core.next.call(null,seq__28719__$1);
var G__28790 = null;
var G__28791 = (0);
var G__28792 = (0);
seq__28719 = G__28789;
chunk__28720 = G__28790;
count__28721 = G__28791;
i__28722 = G__28792;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28793_28797 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28794_28798 = null;
var count__28795_28799 = (0);
var i__28796_28800 = (0);
while(true){
if((i__28796_28800 < count__28795_28799)){
var ns_28801 = cljs.core._nth.call(null,chunk__28794_28798,i__28796_28800);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28801);


var G__28802 = seq__28793_28797;
var G__28803 = chunk__28794_28798;
var G__28804 = count__28795_28799;
var G__28805 = (i__28796_28800 + (1));
seq__28793_28797 = G__28802;
chunk__28794_28798 = G__28803;
count__28795_28799 = G__28804;
i__28796_28800 = G__28805;
continue;
} else {
var temp__5720__auto___28806 = cljs.core.seq.call(null,seq__28793_28797);
if(temp__5720__auto___28806){
var seq__28793_28807__$1 = temp__5720__auto___28806;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28793_28807__$1)){
var c__4556__auto___28808 = cljs.core.chunk_first.call(null,seq__28793_28807__$1);
var G__28809 = cljs.core.chunk_rest.call(null,seq__28793_28807__$1);
var G__28810 = c__4556__auto___28808;
var G__28811 = cljs.core.count.call(null,c__4556__auto___28808);
var G__28812 = (0);
seq__28793_28797 = G__28809;
chunk__28794_28798 = G__28810;
count__28795_28799 = G__28811;
i__28796_28800 = G__28812;
continue;
} else {
var ns_28813 = cljs.core.first.call(null,seq__28793_28807__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28813);


var G__28814 = cljs.core.next.call(null,seq__28793_28807__$1);
var G__28815 = null;
var G__28816 = (0);
var G__28817 = (0);
seq__28793_28797 = G__28814;
chunk__28794_28798 = G__28815;
count__28795_28799 = G__28816;
i__28796_28800 = G__28817;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4126__auto__ = goog.require__;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__28818__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28818 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28819__i = 0, G__28819__a = new Array(arguments.length -  0);
while (G__28819__i < G__28819__a.length) {G__28819__a[G__28819__i] = arguments[G__28819__i + 0]; ++G__28819__i;}
  args = new cljs.core.IndexedSeq(G__28819__a,0,null);
} 
return G__28818__delegate.call(this,args);};
G__28818.cljs$lang$maxFixedArity = 0;
G__28818.cljs$lang$applyTo = (function (arglist__28820){
var args = cljs.core.seq(arglist__28820);
return G__28818__delegate(args);
});
G__28818.cljs$core$IFn$_invoke$arity$variadic = G__28818__delegate;
return G__28818;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__28821_SHARP_,p2__28822_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28821_SHARP_)),p2__28822_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__28823_SHARP_,p2__28824_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28823_SHARP_),p2__28824_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28825 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28825.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__28825.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__28825;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28826){if((e28826 instanceof Error)){
var e = e28826;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28826;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28827){if((e28827 instanceof Error)){
var e = e28827;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28827;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28828 = cljs.core._EQ_;
var expr__28829 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28828.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28829))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28828.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28829))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28828.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28829))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28831,callback){
var map__28832 = p__28831;
var map__28832__$1 = (((((!((map__28832 == null))))?(((((map__28832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28832):map__28832);
var file_msg = map__28832__$1;
var request_url = cljs.core.get.call(null,map__28832__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4126__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26454__auto__ = (function (){var switch__26358__auto__ = (function (state_28870){
var state_val_28871 = (state_28870[(1)]);
if((state_val_28871 === (7))){
var inst_28866 = (state_28870[(2)]);
var state_28870__$1 = state_28870;
var statearr_28872_28898 = state_28870__$1;
(statearr_28872_28898[(2)] = inst_28866);

(statearr_28872_28898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (1))){
var state_28870__$1 = state_28870;
var statearr_28873_28899 = state_28870__$1;
(statearr_28873_28899[(2)] = null);

(statearr_28873_28899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (4))){
var inst_28836 = (state_28870[(7)]);
var inst_28836__$1 = (state_28870[(2)]);
var state_28870__$1 = (function (){var statearr_28874 = state_28870;
(statearr_28874[(7)] = inst_28836__$1);

return statearr_28874;
})();
if(cljs.core.truth_(inst_28836__$1)){
var statearr_28875_28900 = state_28870__$1;
(statearr_28875_28900[(1)] = (5));

} else {
var statearr_28876_28901 = state_28870__$1;
(statearr_28876_28901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (15))){
var inst_28849 = (state_28870[(8)]);
var inst_28851 = (state_28870[(9)]);
var inst_28853 = inst_28851.call(null,inst_28849);
var state_28870__$1 = state_28870;
var statearr_28877_28902 = state_28870__$1;
(statearr_28877_28902[(2)] = inst_28853);

(statearr_28877_28902[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (13))){
var inst_28860 = (state_28870[(2)]);
var state_28870__$1 = state_28870;
var statearr_28878_28903 = state_28870__$1;
(statearr_28878_28903[(2)] = inst_28860);

(statearr_28878_28903[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (6))){
var state_28870__$1 = state_28870;
var statearr_28879_28904 = state_28870__$1;
(statearr_28879_28904[(2)] = null);

(statearr_28879_28904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (17))){
var inst_28857 = (state_28870[(2)]);
var state_28870__$1 = state_28870;
var statearr_28880_28905 = state_28870__$1;
(statearr_28880_28905[(2)] = inst_28857);

(statearr_28880_28905[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (3))){
var inst_28868 = (state_28870[(2)]);
var state_28870__$1 = state_28870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28870__$1,inst_28868);
} else {
if((state_val_28871 === (12))){
var state_28870__$1 = state_28870;
var statearr_28881_28906 = state_28870__$1;
(statearr_28881_28906[(2)] = null);

(statearr_28881_28906[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (2))){
var state_28870__$1 = state_28870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28870__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28871 === (11))){
var inst_28841 = (state_28870[(10)]);
var inst_28847 = figwheel.client.file_reloading.blocking_load.call(null,inst_28841);
var state_28870__$1 = state_28870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28870__$1,(14),inst_28847);
} else {
if((state_val_28871 === (9))){
var inst_28841 = (state_28870[(10)]);
var state_28870__$1 = state_28870;
if(cljs.core.truth_(inst_28841)){
var statearr_28882_28907 = state_28870__$1;
(statearr_28882_28907[(1)] = (11));

} else {
var statearr_28883_28908 = state_28870__$1;
(statearr_28883_28908[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (5))){
var inst_28842 = (state_28870[(11)]);
var inst_28836 = (state_28870[(7)]);
var inst_28841 = cljs.core.nth.call(null,inst_28836,(0),null);
var inst_28842__$1 = cljs.core.nth.call(null,inst_28836,(1),null);
var state_28870__$1 = (function (){var statearr_28884 = state_28870;
(statearr_28884[(11)] = inst_28842__$1);

(statearr_28884[(10)] = inst_28841);

return statearr_28884;
})();
if(cljs.core.truth_(inst_28842__$1)){
var statearr_28885_28909 = state_28870__$1;
(statearr_28885_28909[(1)] = (8));

} else {
var statearr_28886_28910 = state_28870__$1;
(statearr_28886_28910[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (14))){
var inst_28841 = (state_28870[(10)]);
var inst_28851 = (state_28870[(9)]);
var inst_28849 = (state_28870[(2)]);
var inst_28850 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28851__$1 = cljs.core.get.call(null,inst_28850,inst_28841);
var state_28870__$1 = (function (){var statearr_28887 = state_28870;
(statearr_28887[(8)] = inst_28849);

(statearr_28887[(9)] = inst_28851__$1);

return statearr_28887;
})();
if(cljs.core.truth_(inst_28851__$1)){
var statearr_28888_28911 = state_28870__$1;
(statearr_28888_28911[(1)] = (15));

} else {
var statearr_28889_28912 = state_28870__$1;
(statearr_28889_28912[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (16))){
var inst_28849 = (state_28870[(8)]);
var inst_28855 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28849);
var state_28870__$1 = state_28870;
var statearr_28890_28913 = state_28870__$1;
(statearr_28890_28913[(2)] = inst_28855);

(statearr_28890_28913[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (10))){
var inst_28862 = (state_28870[(2)]);
var state_28870__$1 = (function (){var statearr_28891 = state_28870;
(statearr_28891[(12)] = inst_28862);

return statearr_28891;
})();
var statearr_28892_28914 = state_28870__$1;
(statearr_28892_28914[(2)] = null);

(statearr_28892_28914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (8))){
var inst_28842 = (state_28870[(11)]);
var inst_28844 = eval(inst_28842);
var state_28870__$1 = state_28870;
var statearr_28893_28915 = state_28870__$1;
(statearr_28893_28915[(2)] = inst_28844);

(statearr_28893_28915[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__26359__auto__ = null;
var figwheel$client$file_reloading$state_machine__26359__auto____0 = (function (){
var statearr_28894 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28894[(0)] = figwheel$client$file_reloading$state_machine__26359__auto__);

(statearr_28894[(1)] = (1));

return statearr_28894;
});
var figwheel$client$file_reloading$state_machine__26359__auto____1 = (function (state_28870){
while(true){
var ret_value__26360__auto__ = (function (){try{while(true){
var result__26361__auto__ = switch__26358__auto__.call(null,state_28870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26361__auto__;
}
break;
}
}catch (e28895){if((e28895 instanceof Object)){
var ex__26362__auto__ = e28895;
var statearr_28896_28916 = state_28870;
(statearr_28896_28916[(5)] = ex__26362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28917 = state_28870;
state_28870 = G__28917;
continue;
} else {
return ret_value__26360__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26359__auto__ = function(state_28870){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26359__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26359__auto____1.call(this,state_28870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26359__auto____0;
figwheel$client$file_reloading$state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26359__auto____1;
return figwheel$client$file_reloading$state_machine__26359__auto__;
})()
})();
var state__26455__auto__ = (function (){var statearr_28897 = f__26454__auto__.call(null);
(statearr_28897[(6)] = c__26453__auto__);

return statearr_28897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
}));

return c__26453__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28919 = arguments.length;
switch (G__28919) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28921,callback){
var map__28922 = p__28921;
var map__28922__$1 = (((((!((map__28922 == null))))?(((((map__28922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28922):map__28922);
var file_msg = map__28922__$1;
var namespace = cljs.core.get.call(null,map__28922__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28924){
var map__28925 = p__28924;
var map__28925__$1 = (((((!((map__28925 == null))))?(((((map__28925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28925):map__28925);
var file_msg = map__28925__$1;
var namespace = cljs.core.get.call(null,map__28925__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28927){
var map__28928 = p__28927;
var map__28928__$1 = (((((!((map__28928 == null))))?(((((map__28928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28928):map__28928);
var file_msg = map__28928__$1;
var namespace = cljs.core.get.call(null,map__28928__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28930,callback){
var map__28931 = p__28930;
var map__28931__$1 = (((((!((map__28931 == null))))?(((((map__28931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28931):map__28931);
var file_msg = map__28931__$1;
var request_url = cljs.core.get.call(null,map__28931__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28931__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26453__auto___28981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26454__auto__ = (function (){var switch__26358__auto__ = (function (state_28966){
var state_val_28967 = (state_28966[(1)]);
if((state_val_28967 === (1))){
var inst_28940 = cljs.core.seq.call(null,files);
var inst_28941 = cljs.core.first.call(null,inst_28940);
var inst_28942 = cljs.core.next.call(null,inst_28940);
var inst_28943 = files;
var state_28966__$1 = (function (){var statearr_28968 = state_28966;
(statearr_28968[(7)] = inst_28941);

(statearr_28968[(8)] = inst_28943);

(statearr_28968[(9)] = inst_28942);

return statearr_28968;
})();
var statearr_28969_28982 = state_28966__$1;
(statearr_28969_28982[(2)] = null);

(statearr_28969_28982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28967 === (2))){
var inst_28949 = (state_28966[(10)]);
var inst_28943 = (state_28966[(8)]);
var inst_28948 = cljs.core.seq.call(null,inst_28943);
var inst_28949__$1 = cljs.core.first.call(null,inst_28948);
var inst_28950 = cljs.core.next.call(null,inst_28948);
var inst_28951 = (inst_28949__$1 == null);
var inst_28952 = cljs.core.not.call(null,inst_28951);
var state_28966__$1 = (function (){var statearr_28970 = state_28966;
(statearr_28970[(10)] = inst_28949__$1);

(statearr_28970[(11)] = inst_28950);

return statearr_28970;
})();
if(inst_28952){
var statearr_28971_28983 = state_28966__$1;
(statearr_28971_28983[(1)] = (4));

} else {
var statearr_28972_28984 = state_28966__$1;
(statearr_28972_28984[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28967 === (3))){
var inst_28964 = (state_28966[(2)]);
var state_28966__$1 = state_28966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28966__$1,inst_28964);
} else {
if((state_val_28967 === (4))){
var inst_28949 = (state_28966[(10)]);
var inst_28954 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28949);
var state_28966__$1 = state_28966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28966__$1,(7),inst_28954);
} else {
if((state_val_28967 === (5))){
var inst_28960 = cljs.core.async.close_BANG_.call(null,out);
var state_28966__$1 = state_28966;
var statearr_28973_28985 = state_28966__$1;
(statearr_28973_28985[(2)] = inst_28960);

(statearr_28973_28985[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28967 === (6))){
var inst_28962 = (state_28966[(2)]);
var state_28966__$1 = state_28966;
var statearr_28974_28986 = state_28966__$1;
(statearr_28974_28986[(2)] = inst_28962);

(statearr_28974_28986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28967 === (7))){
var inst_28950 = (state_28966[(11)]);
var inst_28956 = (state_28966[(2)]);
var inst_28957 = cljs.core.async.put_BANG_.call(null,out,inst_28956);
var inst_28943 = inst_28950;
var state_28966__$1 = (function (){var statearr_28975 = state_28966;
(statearr_28975[(12)] = inst_28957);

(statearr_28975[(8)] = inst_28943);

return statearr_28975;
})();
var statearr_28976_28987 = state_28966__$1;
(statearr_28976_28987[(2)] = null);

(statearr_28976_28987[(1)] = (2));


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
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26359__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26359__auto____0 = (function (){
var statearr_28977 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28977[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26359__auto__);

(statearr_28977[(1)] = (1));

return statearr_28977;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26359__auto____1 = (function (state_28966){
while(true){
var ret_value__26360__auto__ = (function (){try{while(true){
var result__26361__auto__ = switch__26358__auto__.call(null,state_28966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26361__auto__;
}
break;
}
}catch (e28978){if((e28978 instanceof Object)){
var ex__26362__auto__ = e28978;
var statearr_28979_28988 = state_28966;
(statearr_28979_28988[(5)] = ex__26362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28989 = state_28966;
state_28966 = G__28989;
continue;
} else {
return ret_value__26360__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26359__auto__ = function(state_28966){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26359__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26359__auto____1.call(this,state_28966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26359__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26359__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26359__auto__;
})()
})();
var state__26455__auto__ = (function (){var statearr_28980 = f__26454__auto__.call(null);
(statearr_28980[(6)] = c__26453__auto___28981);

return statearr_28980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28990,opts){
var map__28991 = p__28990;
var map__28991__$1 = (((((!((map__28991 == null))))?(((((map__28991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28991):map__28991);
var eval_body = cljs.core.get.call(null,map__28991__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28991__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4115__auto__ = eval_body;
if(cljs.core.truth_(and__4115__auto__)){
return typeof eval_body === 'string';
} else {
return and__4115__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28993){var e = e28993;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__28994_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28994_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28995){
var vec__28996 = p__28995;
var k = cljs.core.nth.call(null,vec__28996,(0),null);
var v = cljs.core.nth.call(null,vec__28996,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28999){
var vec__29000 = p__28999;
var k = cljs.core.nth.call(null,vec__29000,(0),null);
var v = cljs.core.nth.call(null,vec__29000,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29006,p__29007){
var map__29008 = p__29006;
var map__29008__$1 = (((((!((map__29008 == null))))?(((((map__29008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29008):map__29008);
var opts = map__29008__$1;
var before_jsload = cljs.core.get.call(null,map__29008__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29008__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29008__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29009 = p__29007;
var map__29009__$1 = (((((!((map__29009 == null))))?(((((map__29009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29009):map__29009);
var msg = map__29009__$1;
var files = cljs.core.get.call(null,map__29009__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29009__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29009__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26454__auto__ = (function (){var switch__26358__auto__ = (function (state_29163){
var state_val_29164 = (state_29163[(1)]);
if((state_val_29164 === (7))){
var inst_29024 = (state_29163[(7)]);
var inst_29026 = (state_29163[(8)]);
var inst_29025 = (state_29163[(9)]);
var inst_29023 = (state_29163[(10)]);
var inst_29031 = cljs.core._nth.call(null,inst_29024,inst_29026);
var inst_29032 = figwheel.client.file_reloading.eval_body.call(null,inst_29031,opts);
var inst_29033 = (inst_29026 + (1));
var tmp29165 = inst_29024;
var tmp29166 = inst_29025;
var tmp29167 = inst_29023;
var inst_29023__$1 = tmp29167;
var inst_29024__$1 = tmp29165;
var inst_29025__$1 = tmp29166;
var inst_29026__$1 = inst_29033;
var state_29163__$1 = (function (){var statearr_29168 = state_29163;
(statearr_29168[(7)] = inst_29024__$1);

(statearr_29168[(8)] = inst_29026__$1);

(statearr_29168[(11)] = inst_29032);

(statearr_29168[(9)] = inst_29025__$1);

(statearr_29168[(10)] = inst_29023__$1);

return statearr_29168;
})();
var statearr_29169_29252 = state_29163__$1;
(statearr_29169_29252[(2)] = null);

(statearr_29169_29252[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (20))){
var inst_29066 = (state_29163[(12)]);
var inst_29074 = figwheel.client.file_reloading.sort_files.call(null,inst_29066);
var state_29163__$1 = state_29163;
var statearr_29170_29253 = state_29163__$1;
(statearr_29170_29253[(2)] = inst_29074);

(statearr_29170_29253[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (27))){
var state_29163__$1 = state_29163;
var statearr_29171_29254 = state_29163__$1;
(statearr_29171_29254[(2)] = null);

(statearr_29171_29254[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (1))){
var inst_29015 = (state_29163[(13)]);
var inst_29012 = before_jsload.call(null,files);
var inst_29013 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29014 = (function (){return (function (p1__29003_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29003_SHARP_);
});
})();
var inst_29015__$1 = cljs.core.filter.call(null,inst_29014,files);
var inst_29016 = cljs.core.not_empty.call(null,inst_29015__$1);
var state_29163__$1 = (function (){var statearr_29172 = state_29163;
(statearr_29172[(13)] = inst_29015__$1);

(statearr_29172[(14)] = inst_29013);

(statearr_29172[(15)] = inst_29012);

return statearr_29172;
})();
if(cljs.core.truth_(inst_29016)){
var statearr_29173_29255 = state_29163__$1;
(statearr_29173_29255[(1)] = (2));

} else {
var statearr_29174_29256 = state_29163__$1;
(statearr_29174_29256[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (24))){
var state_29163__$1 = state_29163;
var statearr_29175_29257 = state_29163__$1;
(statearr_29175_29257[(2)] = null);

(statearr_29175_29257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (39))){
var inst_29116 = (state_29163[(16)]);
var state_29163__$1 = state_29163;
var statearr_29176_29258 = state_29163__$1;
(statearr_29176_29258[(2)] = inst_29116);

(statearr_29176_29258[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (46))){
var inst_29158 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
var statearr_29177_29259 = state_29163__$1;
(statearr_29177_29259[(2)] = inst_29158);

(statearr_29177_29259[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (4))){
var inst_29060 = (state_29163[(2)]);
var inst_29061 = cljs.core.List.EMPTY;
var inst_29062 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29061);
var inst_29063 = (function (){return (function (p1__29004_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29004_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29004_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29004_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_29064 = cljs.core.filter.call(null,inst_29063,files);
var inst_29065 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29066 = cljs.core.concat.call(null,inst_29064,inst_29065);
var state_29163__$1 = (function (){var statearr_29178 = state_29163;
(statearr_29178[(17)] = inst_29062);

(statearr_29178[(18)] = inst_29060);

(statearr_29178[(12)] = inst_29066);

return statearr_29178;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29179_29260 = state_29163__$1;
(statearr_29179_29260[(1)] = (16));

} else {
var statearr_29180_29261 = state_29163__$1;
(statearr_29180_29261[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (15))){
var inst_29050 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
var statearr_29181_29262 = state_29163__$1;
(statearr_29181_29262[(2)] = inst_29050);

(statearr_29181_29262[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (21))){
var inst_29076 = (state_29163[(19)]);
var inst_29076__$1 = (state_29163[(2)]);
var inst_29077 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29076__$1);
var state_29163__$1 = (function (){var statearr_29182 = state_29163;
(statearr_29182[(19)] = inst_29076__$1);

return statearr_29182;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29163__$1,(22),inst_29077);
} else {
if((state_val_29164 === (31))){
var inst_29161 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29163__$1,inst_29161);
} else {
if((state_val_29164 === (32))){
var inst_29116 = (state_29163[(16)]);
var inst_29121 = inst_29116.cljs$lang$protocol_mask$partition0$;
var inst_29122 = (inst_29121 & (64));
var inst_29123 = inst_29116.cljs$core$ISeq$;
var inst_29124 = (cljs.core.PROTOCOL_SENTINEL === inst_29123);
var inst_29125 = ((inst_29122) || (inst_29124));
var state_29163__$1 = state_29163;
if(cljs.core.truth_(inst_29125)){
var statearr_29183_29263 = state_29163__$1;
(statearr_29183_29263[(1)] = (35));

} else {
var statearr_29184_29264 = state_29163__$1;
(statearr_29184_29264[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (40))){
var inst_29138 = (state_29163[(20)]);
var inst_29137 = (state_29163[(2)]);
var inst_29138__$1 = cljs.core.get.call(null,inst_29137,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29139 = cljs.core.get.call(null,inst_29137,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29140 = cljs.core.not_empty.call(null,inst_29138__$1);
var state_29163__$1 = (function (){var statearr_29185 = state_29163;
(statearr_29185[(21)] = inst_29139);

(statearr_29185[(20)] = inst_29138__$1);

return statearr_29185;
})();
if(cljs.core.truth_(inst_29140)){
var statearr_29186_29265 = state_29163__$1;
(statearr_29186_29265[(1)] = (41));

} else {
var statearr_29187_29266 = state_29163__$1;
(statearr_29187_29266[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (33))){
var state_29163__$1 = state_29163;
var statearr_29188_29267 = state_29163__$1;
(statearr_29188_29267[(2)] = false);

(statearr_29188_29267[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (13))){
var inst_29036 = (state_29163[(22)]);
var inst_29040 = cljs.core.chunk_first.call(null,inst_29036);
var inst_29041 = cljs.core.chunk_rest.call(null,inst_29036);
var inst_29042 = cljs.core.count.call(null,inst_29040);
var inst_29023 = inst_29041;
var inst_29024 = inst_29040;
var inst_29025 = inst_29042;
var inst_29026 = (0);
var state_29163__$1 = (function (){var statearr_29189 = state_29163;
(statearr_29189[(7)] = inst_29024);

(statearr_29189[(8)] = inst_29026);

(statearr_29189[(9)] = inst_29025);

(statearr_29189[(10)] = inst_29023);

return statearr_29189;
})();
var statearr_29190_29268 = state_29163__$1;
(statearr_29190_29268[(2)] = null);

(statearr_29190_29268[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (22))){
var inst_29076 = (state_29163[(19)]);
var inst_29080 = (state_29163[(23)]);
var inst_29084 = (state_29163[(24)]);
var inst_29079 = (state_29163[(25)]);
var inst_29079__$1 = (state_29163[(2)]);
var inst_29080__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29079__$1);
var inst_29081 = (function (){var all_files = inst_29076;
var res_SINGLEQUOTE_ = inst_29079__$1;
var res = inst_29080__$1;
return (function (p1__29005_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29005_SHARP_));
});
})();
var inst_29082 = cljs.core.filter.call(null,inst_29081,inst_29079__$1);
var inst_29083 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29084__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29083);
var inst_29085 = cljs.core.not_empty.call(null,inst_29084__$1);
var state_29163__$1 = (function (){var statearr_29191 = state_29163;
(statearr_29191[(26)] = inst_29082);

(statearr_29191[(23)] = inst_29080__$1);

(statearr_29191[(24)] = inst_29084__$1);

(statearr_29191[(25)] = inst_29079__$1);

return statearr_29191;
})();
if(cljs.core.truth_(inst_29085)){
var statearr_29192_29269 = state_29163__$1;
(statearr_29192_29269[(1)] = (23));

} else {
var statearr_29193_29270 = state_29163__$1;
(statearr_29193_29270[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (36))){
var state_29163__$1 = state_29163;
var statearr_29194_29271 = state_29163__$1;
(statearr_29194_29271[(2)] = false);

(statearr_29194_29271[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (41))){
var inst_29138 = (state_29163[(20)]);
var inst_29142 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29143 = cljs.core.map.call(null,inst_29142,inst_29138);
var inst_29144 = cljs.core.pr_str.call(null,inst_29143);
var inst_29145 = ["figwheel-no-load meta-data: ",inst_29144].join('');
var inst_29146 = figwheel.client.utils.log.call(null,inst_29145);
var state_29163__$1 = state_29163;
var statearr_29195_29272 = state_29163__$1;
(statearr_29195_29272[(2)] = inst_29146);

(statearr_29195_29272[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (43))){
var inst_29139 = (state_29163[(21)]);
var inst_29149 = (state_29163[(2)]);
var inst_29150 = cljs.core.not_empty.call(null,inst_29139);
var state_29163__$1 = (function (){var statearr_29196 = state_29163;
(statearr_29196[(27)] = inst_29149);

return statearr_29196;
})();
if(cljs.core.truth_(inst_29150)){
var statearr_29197_29273 = state_29163__$1;
(statearr_29197_29273[(1)] = (44));

} else {
var statearr_29198_29274 = state_29163__$1;
(statearr_29198_29274[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (29))){
var inst_29116 = (state_29163[(16)]);
var inst_29082 = (state_29163[(26)]);
var inst_29076 = (state_29163[(19)]);
var inst_29080 = (state_29163[(23)]);
var inst_29084 = (state_29163[(24)]);
var inst_29079 = (state_29163[(25)]);
var inst_29112 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29115 = (function (){var all_files = inst_29076;
var res_SINGLEQUOTE_ = inst_29079;
var res = inst_29080;
var files_not_loaded = inst_29082;
var dependencies_that_loaded = inst_29084;
return (function (p__29114){
var map__29199 = p__29114;
var map__29199__$1 = (((((!((map__29199 == null))))?(((((map__29199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29199):map__29199);
var namespace = cljs.core.get.call(null,map__29199__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_29116__$1 = cljs.core.group_by.call(null,inst_29115,inst_29082);
var inst_29118 = (inst_29116__$1 == null);
var inst_29119 = cljs.core.not.call(null,inst_29118);
var state_29163__$1 = (function (){var statearr_29201 = state_29163;
(statearr_29201[(16)] = inst_29116__$1);

(statearr_29201[(28)] = inst_29112);

return statearr_29201;
})();
if(inst_29119){
var statearr_29202_29275 = state_29163__$1;
(statearr_29202_29275[(1)] = (32));

} else {
var statearr_29203_29276 = state_29163__$1;
(statearr_29203_29276[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (44))){
var inst_29139 = (state_29163[(21)]);
var inst_29152 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29139);
var inst_29153 = cljs.core.pr_str.call(null,inst_29152);
var inst_29154 = ["not required: ",inst_29153].join('');
var inst_29155 = figwheel.client.utils.log.call(null,inst_29154);
var state_29163__$1 = state_29163;
var statearr_29204_29277 = state_29163__$1;
(statearr_29204_29277[(2)] = inst_29155);

(statearr_29204_29277[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (6))){
var inst_29057 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
var statearr_29205_29278 = state_29163__$1;
(statearr_29205_29278[(2)] = inst_29057);

(statearr_29205_29278[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (28))){
var inst_29082 = (state_29163[(26)]);
var inst_29109 = (state_29163[(2)]);
var inst_29110 = cljs.core.not_empty.call(null,inst_29082);
var state_29163__$1 = (function (){var statearr_29206 = state_29163;
(statearr_29206[(29)] = inst_29109);

return statearr_29206;
})();
if(cljs.core.truth_(inst_29110)){
var statearr_29207_29279 = state_29163__$1;
(statearr_29207_29279[(1)] = (29));

} else {
var statearr_29208_29280 = state_29163__$1;
(statearr_29208_29280[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (25))){
var inst_29080 = (state_29163[(23)]);
var inst_29096 = (state_29163[(2)]);
var inst_29097 = cljs.core.not_empty.call(null,inst_29080);
var state_29163__$1 = (function (){var statearr_29209 = state_29163;
(statearr_29209[(30)] = inst_29096);

return statearr_29209;
})();
if(cljs.core.truth_(inst_29097)){
var statearr_29210_29281 = state_29163__$1;
(statearr_29210_29281[(1)] = (26));

} else {
var statearr_29211_29282 = state_29163__$1;
(statearr_29211_29282[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (34))){
var inst_29132 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
if(cljs.core.truth_(inst_29132)){
var statearr_29212_29283 = state_29163__$1;
(statearr_29212_29283[(1)] = (38));

} else {
var statearr_29213_29284 = state_29163__$1;
(statearr_29213_29284[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (17))){
var state_29163__$1 = state_29163;
var statearr_29214_29285 = state_29163__$1;
(statearr_29214_29285[(2)] = recompile_dependents);

(statearr_29214_29285[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (3))){
var state_29163__$1 = state_29163;
var statearr_29215_29286 = state_29163__$1;
(statearr_29215_29286[(2)] = null);

(statearr_29215_29286[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (12))){
var inst_29053 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
var statearr_29216_29287 = state_29163__$1;
(statearr_29216_29287[(2)] = inst_29053);

(statearr_29216_29287[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (2))){
var inst_29015 = (state_29163[(13)]);
var inst_29022 = cljs.core.seq.call(null,inst_29015);
var inst_29023 = inst_29022;
var inst_29024 = null;
var inst_29025 = (0);
var inst_29026 = (0);
var state_29163__$1 = (function (){var statearr_29217 = state_29163;
(statearr_29217[(7)] = inst_29024);

(statearr_29217[(8)] = inst_29026);

(statearr_29217[(9)] = inst_29025);

(statearr_29217[(10)] = inst_29023);

return statearr_29217;
})();
var statearr_29218_29288 = state_29163__$1;
(statearr_29218_29288[(2)] = null);

(statearr_29218_29288[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (23))){
var inst_29082 = (state_29163[(26)]);
var inst_29076 = (state_29163[(19)]);
var inst_29080 = (state_29163[(23)]);
var inst_29084 = (state_29163[(24)]);
var inst_29079 = (state_29163[(25)]);
var inst_29087 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29089 = (function (){var all_files = inst_29076;
var res_SINGLEQUOTE_ = inst_29079;
var res = inst_29080;
var files_not_loaded = inst_29082;
var dependencies_that_loaded = inst_29084;
return (function (p__29088){
var map__29219 = p__29088;
var map__29219__$1 = (((((!((map__29219 == null))))?(((((map__29219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29219):map__29219);
var request_url = cljs.core.get.call(null,map__29219__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_29090 = cljs.core.reverse.call(null,inst_29084);
var inst_29091 = cljs.core.map.call(null,inst_29089,inst_29090);
var inst_29092 = cljs.core.pr_str.call(null,inst_29091);
var inst_29093 = figwheel.client.utils.log.call(null,inst_29092);
var state_29163__$1 = (function (){var statearr_29221 = state_29163;
(statearr_29221[(31)] = inst_29087);

return statearr_29221;
})();
var statearr_29222_29289 = state_29163__$1;
(statearr_29222_29289[(2)] = inst_29093);

(statearr_29222_29289[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (35))){
var state_29163__$1 = state_29163;
var statearr_29223_29290 = state_29163__$1;
(statearr_29223_29290[(2)] = true);

(statearr_29223_29290[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (19))){
var inst_29066 = (state_29163[(12)]);
var inst_29072 = figwheel.client.file_reloading.expand_files.call(null,inst_29066);
var state_29163__$1 = state_29163;
var statearr_29224_29291 = state_29163__$1;
(statearr_29224_29291[(2)] = inst_29072);

(statearr_29224_29291[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (11))){
var state_29163__$1 = state_29163;
var statearr_29225_29292 = state_29163__$1;
(statearr_29225_29292[(2)] = null);

(statearr_29225_29292[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (9))){
var inst_29055 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
var statearr_29226_29293 = state_29163__$1;
(statearr_29226_29293[(2)] = inst_29055);

(statearr_29226_29293[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (5))){
var inst_29026 = (state_29163[(8)]);
var inst_29025 = (state_29163[(9)]);
var inst_29028 = (inst_29026 < inst_29025);
var inst_29029 = inst_29028;
var state_29163__$1 = state_29163;
if(cljs.core.truth_(inst_29029)){
var statearr_29227_29294 = state_29163__$1;
(statearr_29227_29294[(1)] = (7));

} else {
var statearr_29228_29295 = state_29163__$1;
(statearr_29228_29295[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (14))){
var inst_29036 = (state_29163[(22)]);
var inst_29045 = cljs.core.first.call(null,inst_29036);
var inst_29046 = figwheel.client.file_reloading.eval_body.call(null,inst_29045,opts);
var inst_29047 = cljs.core.next.call(null,inst_29036);
var inst_29023 = inst_29047;
var inst_29024 = null;
var inst_29025 = (0);
var inst_29026 = (0);
var state_29163__$1 = (function (){var statearr_29229 = state_29163;
(statearr_29229[(7)] = inst_29024);

(statearr_29229[(32)] = inst_29046);

(statearr_29229[(8)] = inst_29026);

(statearr_29229[(9)] = inst_29025);

(statearr_29229[(10)] = inst_29023);

return statearr_29229;
})();
var statearr_29230_29296 = state_29163__$1;
(statearr_29230_29296[(2)] = null);

(statearr_29230_29296[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (45))){
var state_29163__$1 = state_29163;
var statearr_29231_29297 = state_29163__$1;
(statearr_29231_29297[(2)] = null);

(statearr_29231_29297[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (26))){
var inst_29082 = (state_29163[(26)]);
var inst_29076 = (state_29163[(19)]);
var inst_29080 = (state_29163[(23)]);
var inst_29084 = (state_29163[(24)]);
var inst_29079 = (state_29163[(25)]);
var inst_29099 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29101 = (function (){var all_files = inst_29076;
var res_SINGLEQUOTE_ = inst_29079;
var res = inst_29080;
var files_not_loaded = inst_29082;
var dependencies_that_loaded = inst_29084;
return (function (p__29100){
var map__29232 = p__29100;
var map__29232__$1 = (((((!((map__29232 == null))))?(((((map__29232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29232):map__29232);
var namespace = cljs.core.get.call(null,map__29232__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29232__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_29102 = cljs.core.map.call(null,inst_29101,inst_29080);
var inst_29103 = cljs.core.pr_str.call(null,inst_29102);
var inst_29104 = figwheel.client.utils.log.call(null,inst_29103);
var inst_29105 = (function (){var all_files = inst_29076;
var res_SINGLEQUOTE_ = inst_29079;
var res = inst_29080;
var files_not_loaded = inst_29082;
var dependencies_that_loaded = inst_29084;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_29106 = setTimeout(inst_29105,(10));
var state_29163__$1 = (function (){var statearr_29234 = state_29163;
(statearr_29234[(33)] = inst_29104);

(statearr_29234[(34)] = inst_29099);

return statearr_29234;
})();
var statearr_29235_29298 = state_29163__$1;
(statearr_29235_29298[(2)] = inst_29106);

(statearr_29235_29298[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (16))){
var state_29163__$1 = state_29163;
var statearr_29236_29299 = state_29163__$1;
(statearr_29236_29299[(2)] = reload_dependents);

(statearr_29236_29299[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (38))){
var inst_29116 = (state_29163[(16)]);
var inst_29134 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29116);
var state_29163__$1 = state_29163;
var statearr_29237_29300 = state_29163__$1;
(statearr_29237_29300[(2)] = inst_29134);

(statearr_29237_29300[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (30))){
var state_29163__$1 = state_29163;
var statearr_29238_29301 = state_29163__$1;
(statearr_29238_29301[(2)] = null);

(statearr_29238_29301[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (10))){
var inst_29036 = (state_29163[(22)]);
var inst_29038 = cljs.core.chunked_seq_QMARK_.call(null,inst_29036);
var state_29163__$1 = state_29163;
if(inst_29038){
var statearr_29239_29302 = state_29163__$1;
(statearr_29239_29302[(1)] = (13));

} else {
var statearr_29240_29303 = state_29163__$1;
(statearr_29240_29303[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (18))){
var inst_29070 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
if(cljs.core.truth_(inst_29070)){
var statearr_29241_29304 = state_29163__$1;
(statearr_29241_29304[(1)] = (19));

} else {
var statearr_29242_29305 = state_29163__$1;
(statearr_29242_29305[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (42))){
var state_29163__$1 = state_29163;
var statearr_29243_29306 = state_29163__$1;
(statearr_29243_29306[(2)] = null);

(statearr_29243_29306[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (37))){
var inst_29129 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
var statearr_29244_29307 = state_29163__$1;
(statearr_29244_29307[(2)] = inst_29129);

(statearr_29244_29307[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (8))){
var inst_29023 = (state_29163[(10)]);
var inst_29036 = (state_29163[(22)]);
var inst_29036__$1 = cljs.core.seq.call(null,inst_29023);
var state_29163__$1 = (function (){var statearr_29245 = state_29163;
(statearr_29245[(22)] = inst_29036__$1);

return statearr_29245;
})();
if(inst_29036__$1){
var statearr_29246_29308 = state_29163__$1;
(statearr_29246_29308[(1)] = (10));

} else {
var statearr_29247_29309 = state_29163__$1;
(statearr_29247_29309[(1)] = (11));

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
}
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26359__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26359__auto____0 = (function (){
var statearr_29248 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29248[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26359__auto__);

(statearr_29248[(1)] = (1));

return statearr_29248;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26359__auto____1 = (function (state_29163){
while(true){
var ret_value__26360__auto__ = (function (){try{while(true){
var result__26361__auto__ = switch__26358__auto__.call(null,state_29163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26361__auto__;
}
break;
}
}catch (e29249){if((e29249 instanceof Object)){
var ex__26362__auto__ = e29249;
var statearr_29250_29310 = state_29163;
(statearr_29250_29310[(5)] = ex__26362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29311 = state_29163;
state_29163 = G__29311;
continue;
} else {
return ret_value__26360__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26359__auto__ = function(state_29163){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26359__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26359__auto____1.call(this,state_29163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26359__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26359__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26359__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26359__auto__;
})()
})();
var state__26455__auto__ = (function (){var statearr_29251 = f__26454__auto__.call(null);
(statearr_29251[(6)] = c__26453__auto__);

return statearr_29251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
}));

return c__26453__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29314,link){
var map__29315 = p__29314;
var map__29315__$1 = (((((!((map__29315 == null))))?(((((map__29315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29315):map__29315);
var file = cljs.core.get.call(null,map__29315__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__29312_SHARP_,p2__29313_SHARP_){
if(cljs.core._EQ_.call(null,p1__29312_SHARP_,p2__29313_SHARP_)){
return p1__29312_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29318){
var map__29319 = p__29318;
var map__29319__$1 = (((((!((map__29319 == null))))?(((((map__29319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29319):map__29319);
var match_length = cljs.core.get.call(null,map__29319__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29319__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29317_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29317_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29321_SHARP_,p2__29322_SHARP_){
return cljs.core.assoc.call(null,p1__29321_SHARP_,cljs.core.get.call(null,p2__29322_SHARP_,key),p2__29322_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_29323 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29323);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29323);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29324,p__29325){
var map__29326 = p__29324;
var map__29326__$1 = (((((!((map__29326 == null))))?(((((map__29326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29326):map__29326);
var on_cssload = cljs.core.get.call(null,map__29326__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29327 = p__29325;
var map__29327__$1 = (((((!((map__29327 == null))))?(((((map__29327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29327):map__29327);
var files_msg = map__29327__$1;
var files = cljs.core.get.call(null,map__29327__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1708005026089
