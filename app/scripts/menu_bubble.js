(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



// stage content:
(lib.menububble = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").p("EgMfAgKIlUAAQjiAAjOhXQjIhUiZiaQiaiahUjHQhYjOAAjiIAA9mQAAjiBYjPQBUjHCaiaQCZiZDIhVQDOhXDiAAMAzcAAAQBsAAgLAPQgIALh2A0QmACqkWDOQnsFskdIMQl2KvAAOeIAAAyQAADihYDOQhUDHiZCaQiZCajIBUQjOBXjiAAg");
	this.shape.setTransform(1001.8,12.9,0.009,0.003);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgRzAgKQjiAAjOhXQjIhUiZibQiaiZhUjIQhYjNAAjjIAA9lQAAjjBYjOQBUjHCaiaQCZiZDIhVQDOhXDiAAMAzcAAAQBsAAgLAPQgIALh2A0QmACqkWDOQnsFskdIMQl2KvAAOeIAAAxQAADjhYDNQhUDIiZCZQiZCbjIBUQjOBXjiAAg");
	this.shape_1.setTransform(1001.8,12.9,0.009,0.003);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#373535").p("AiDgrQAAgEACgEQABgGAEgGQADgFAEgFQADgDAEgDQAJgHALgEQAMgEANAAQAEAAAEAAIC3AAQAGAAAAABIgGADQgQAHgMAIQgdARgRAWQgBABAAAAQgRAWgHAYQgEANgBAPQAAACAAAAQAAAHgBAGQgBAFgCADQgBABAAAAQgFAJgIAIQgEADgFADQgFADgFABQgKAEgKAAQgDABgCAAQgKAAgJAAQgJAAgIgCQgEAAgFgCQgHgCgHgEQgEgCgDgCQgIgHgGgJQgBgBgBgDQgEgHgBgIQAAgEgBgDQgBgLgBgMQgBgIAAgIg");
	this.shape_2.setTransform(990.5,21.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag7BfQgJAAgIgCIgJgCQgHgCgHgEIgHgFQgIgGgGgJIgCgEQgEgHgBgIIgBgIIgCgWIgBgQIAAgrQAAgEACgEQABgGAEgGIAHgKIAHgGQAJgHALgEQAMgDANAAIAIAAIC3AAQAGAAAAABIgGACQgQAHgMAIQgdARgRAWIgBABQgRAWgHAYQgEANgBAQIAAACIgBAMIgDAIIgBABQgFAJgIAHIgJAHIgKAEQgKADgKABIgFABIgTAAg");
	this.shape_3.setTransform(990.5,21.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#373535").p("Aj2hUQAAgHACgIQADgMAGgLQAFgKAIgJQAGgGAHgGQARgOAVgHQAXgIAYAAQAIAAAIAAIFYAAQALAAAAABQgBABgMAFQgjAOgaAQQg3AhgfAsQgBABgBACQgeAogLAxQgGAaAAAcQAAACAAACQgBAMgDAMQgCAHgDAHQgBABAAABQgJASgRANQgIAIgKAFQgJAFgKADQgSAHgTABQgFAAgFAAQgSABgTAAQgPAAgPgDQgJgCgIgDQgPgFgNgIQgFgDgGgEQgRgOgJgRQgCgDgCgEQgHgPgBgQQAAgHgBgHQgBgXAAgWQgBgPAAgOg");
	this.shape_4.setTransform(979.6,30.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiVC0IgRgFQgPgFgNgIIgLgHQgRgOgJgRIgEgHQgHgPgBgQIgBgOIgBgtIgBgdIAAhSQAAgHACgIQADgMAGgLQAFgKAIgJIANgMQARgOAVgHQAXgIAYAAIAQAAIFYAAQALAAAAABIgNAGQgjAOgaAQQg3AhgfAsIgCADQgeAogLAxQgGAaAAAcIAAAEQgBAMgDAMIgFAOIgBACQgJASgRANQgIAIgKAFIgTAIQgSAHgTABIgKAAIglABQgPAAgPgDg");
	this.shape_5.setTransform(979.6,30.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#373535").p("Alph8QAAgMADgLQADgSAJgQQAIgPALgNQAJgKALgIQAYgVAggLQAhgLAkAAQAMAAALAAIH5AAQARAAgBACQgBABgSAHQg3AVgnAZQhRAwguBCQgCACgBACQgqA8gPBJQgIAmgBAqQAAADAAADQAAARgEARQgDALgFAKQgBACgBABQgNAbgZAUQgMALgOAHQgOAIgPAFQgaAJgdACQgHABgHAAQgbAAgbAAQgXAAgWgFQgMgCgNgEQgVgIgTgLQgJgGgIgGQgYgUgOgaQgDgFgCgFQgKgWgBgZQAAgKgBgLQgBghAAgiQgBgWAAgVg");
	this.shape_6.setTransform(968.6,39.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjeEKIgZgGQgVgIgTgLIgRgMQgYgUgOgaIgFgKQgKgWgBgZIgBgVIgBhDIgBgrIAAh3QAAgMADgLQADgSAJgQQAIgPALgNQAJgKALgIQAYgVAggLQAhgLAkAAIAXAAIH5AAQARAAgBACQgBABgSAHQg3AVgnAZQhRAwguBCIgDAEQgqA8gPBJQgIAmgBAqIAAAGQAAARgEARQgDALgFAKIgCADQgNAbgZAUQgMALgOAHQgOAIgPAFQgaAJgdACIgOABIg2AAQgXAAgWgFg");
	this.shape_7.setTransform(968.6,39.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#373535").p("AncikQAAgPADgPQAFgYAMgXQAKgTAPgRQALgNAOgLQAhgbAqgPQArgPAwAAQAPAAAPAAIKaAAQAXAAgCACQgBACgZAJQhJAbg2AiQhrBBg8BXQgCADgCADQg2BPgTBhQgKAygBA4QAAAEAAAEQAAAXgGAWQgEAOgHAOQgBACgBABQgSAkggAaQgQAPgTAKQgSAKgUAHQgjAMglADQgKAAgJAAQgkABgkAAQgeAAgdgGQgQgEgQgFQgdgKgZgQQgLgHgKgJQghgagSgjQgEgHgDgGQgMgdgBghQAAgOgBgPQgBgsAAgsQgBgdAAgcg");
	this.shape_8.setTransform(957.7,48.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AknFhQgQgDgQgGQgdgJgZgQQgLgHgKgJQghgagSgjIgHgNQgMgdgBghIgBgdIgBhYIgBg6IAAicQAAgPADgQQAFgXAMgXQAKgTAPgRQALgNAOgLQAhgbAqgPQArgPAwgBIAeAAIKaAAQAXABgCACQgBACgZAJQhJAcg2AhQhrBBg8BXIgEAGQg2BPgTBhQgKAygBA3IAAAJQAAAXgGAVQgEAOgHAOIgCAFQgSAiggAbQgQAOgTALQgSAKgUAGQgjANglADIgTAAIhIAAQgeABgdgHg");
	this.shape_9.setTransform(957.7,48.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#373535").p("ApPjOQAAgSAEgSQAGgeAOgcQANgYASgWQAOgQASgOQAogiA0gSQA3gTA7AAQASAAATAAIM7AAQAdAAgDADQgCADgeALQhdAihDAqQiFBRhLBtQgCADgDAEQhDBjgXB5QgMA/AABEQAAAFAAAGQgBAcgHAbQgFASgIAQQgBADgCADQgWAsgnAhQgVARgYAOQgWALgZAJQgrAQgvADQgMABgMAAQgsAAgtAAQglAAgkgIQgUgEgUgHQgkgMgegUQgOgJgNgKQgpgigWgrQgEgIgEgIQgQglAAgoQgBgTAAgSQgBg3AAg3QgBgkAAgjg");
	this.shape_10.setTransform(946.7,57.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AlwG4QgUgEgUgHQgkgMgegUQgOgJgNgLQgpgggWgsIgIgQQgQglAAgoIgBglIgBhuIgBhIIAAjCQAAgTAEgSQAGgeAOgcQANgYASgWQAOgPASgPQAoghA0gTQA3gTA7AAIAlAAIM7AAQAdAAgDADQgCADgeALQhdAjhDApQiFBShLBsIgFAHQhDBjgXB4QgMA/AABFIAAALQgBAcgHAbQgFARgIARIgDAGQgWAsgnAgQgVATgYANQgWAMgZAIQgrAQgvACIgYABIhZABQglAAgkgIg");
	this.shape_11.setTransform(946.7,57.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#373535").p("ArCj2QAAgWAEgWQAHgkARghQAPgdAWgaQARgTAVgSQAwgoA/gWQBBgWBGAAQAWAAAWAAIPdAAQAiAAgDAEQgCACglAOQhvAphSAyQifBihZCCQgDAEgDAFQhPB2gbCQQgPBLAABTQAAAHAAAFQAAAjgJAgQgGAVgKAUQgBADgCADQgaA0gvAoQgZAVgdAQQgbAPgeAKQgzASg4AEQgOABgOAAQg1AAg2AAQgtAAgqgJQgZgFgXgIQgrgQgkgXQgRgKgPgNQgxgogag0QgFgJgFgKQgSgtgBgwQAAgWAAgVQgBhCAAhCQgBgrAAgsg");
	this.shape_12.setTransform(935.8,66);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AliIYQgtAAgqgJQgZgGgXgHQgrgPgkgYQgRgLgPgMQgxgogag0IgKgTQgSgtgBgwIAAgrIgBiEIgBhXIAAjoQAAgWAEgWQAHgkARggQAPgeAWgZQARgUAVgRQAwgpA/gVQBBgXBGAAIAsAAIPdAAQAiAAgDAEQgCACglAOQhvAphSAzQifBhhZCCIgGAJQhPB2gbCQQgPBMAABSIAAAMQAAAjgJAfQgGAWgKAUIgDAGQgaA0gvAoQgZAVgdAQQgbAPgeAKQgzASg4AEIgcABIhrAAg");
	this.shape_13.setTransform(935.8,66);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#373535").p("As1keQAAgaAFgaQAIgpAUgnQARgiAageQATgXAZgUQA4guBIgaQBMgaBSAAQAaAAAZAAIR+AAQAnAAgDAEQgDADgqAQQiDAxhgA6Qi5BxhnCYQgEAFgDAFQhbCKggCpQgQBXgBBgQAAAHAAAHQAAAogKAlQgHAYgLAYQgCAEgCADQgeA9g3AuQgeAZghASQgfARgjANQg8AVhAAEQgRABgQAAQg+AAg+AAQg1AAgxgKQgdgGgbgKQgygRgqgcQgUgMgRgPQg4gugfg9QgGgLgFgMQgWgzAAg5QAAgZgBgZQAAhNAAhMQgBgzAAgyg");
	this.shape_14.setTransform(924.9,74.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AmcJwQg1AAgxgKQgdgGgbgKQgygRgqgcQgUgMgRgPQg4gugfg9IgLgXQgWgzAAg5IgBgyIAAiZIgBhlIAAkOQAAgaAFgaQAIgpAUgnQARgiAageQATgXAZgUQA4guBIgaQBMgaBSAAIAzAAIR+AAQAnAAgDAEQgDADgqAQQiDAxhgA6Qi5BxhnCYIgHAKQhbCKggCpQgQBXgBBgIAAAOQAAAogKAlQgHAYgLAYIgEAHQgeA9g3AuQgeAZghASQgfARgjANQg8AVhAAEIghABIh8AAg");
	this.shape_15.setTransform(924.9,74.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#373535").p("AuolHQAAgeAGgcQAIgwAXgsQAUgnAdgiQAWgaAcgXQBAg1BTgdQBWgfBeAAQAdAAAdAAIUfAAQAtAAgEAGQgDADgxASQiVA4hvBCQjSCCh2CtQgEAGgEAGQhoCdgjDBQgTBjAABtQAAAJAAAIQAAAtgMAqQgHAcgNAbQgCAEgDAFQgiBFg/A1QgiAcgmAVQgjATgoAOQhEAYhKAFQgTACgTAAQhGAAhHAAQg8AAg4gNQghgHgfgLQg5gTgwggQgWgOgUgRQhAg1gjhFQgHgNgFgNQgZg7AAhAQgBgdAAgdQAAhXAAhYQgBg6AAg5g");
	this.shape_16.setTransform(913.9,83.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AnXLJQg8AAg4gNQghgHgfgLQg5gTgwggQgWgOgUgRQhAg1gjhFIgMgaQgZg7AAhAIgBg6IAAivIgBhzIAAk0QAAgeAGgcQAIgwAXgsQAUgnAdgiQAWgaAcgXQBAg1BTgdQBWgfBeAAIA6AAIUfAAQAtAAgEAGQgDADgxASQiVA4hvBCQjSCCh2CtIgIAMQhoCdgjDBQgTBjAABtIAAARQAAAtgMAqQgHAcgNAbIgFAJQgiBFg/A1QgiAcgmAVQgjATgoAOQhEAYhKAFQgTACgTAAIiNAAg");
	this.shape_17.setTransform(913.9,83.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#373535").p("AwblwQAAghAGggQAKg1AZgyQAXgsAggmQAZgeAfgZQBIg8BdghQBhgiBpAAQAhAAAhAAIXAAAQAzAAgGAGQgDAEg3AUQioA/h9BLQjsCRiEDDQgFAHgEAGQh0CxgoDZQgUBvgBB7QAAAKAAAJQAAAygNAwQgJAfgOAeQgCAFgDAFQgnBOhHA7QglAggsAXQgnAWgsAQQhNAbhTAFQgVACgVAAQhQAAhPAAQhDAAg/gOQglgIgjgMQhAgWg2gjQgZgRgWgTQhIg7gnhOQgIgOgGgPQgchDAAhIQAAggAAghQgBhiAAhiQAAhCAAhAg");
	this.shape_18.setTransform(903,92.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AqUMTQglgIgjgMQhAgWg2gjQgZgRgWgTQhIg7gnhOQgIgOgGgPQgchDAAhIIAAhBIgBjEIAAiCIAAlaQAAghAGggQAKg1AZgyQAXgsAggmQAZgeAfgZQBIg8BdghQBhgiBpAAIBCAAIXAAAQAzAAgGAGQgDAEg3AUQioA/h9BLQjsCRiEDDIgJANQh0CxgoDZQgUBvgBB7IAAATQAAAygNAwQgJAfgOAeIgFAKQgnBOhHA7QglAggsAXQgnAWgsAQQhNAbhTAFIgqACIifAAQhDAAg/gOg");
	this.shape_19.setTransform(903,92.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#373535").p("AyOmYQAAglAGgkQALg7Adg3QAYgxAlgrQAbggAjgdQBQhCBnglQBrgmB1AAQAkAAAlAAIZhAAQA4AAgGAHQgDAFg9AWQi8BFiKBUQkGChiTDZQgFAHgFAIQiBDEgrDwQgXB8AACIQAAALAAALQAAA4gPA0QgJAjgQAiQgDAFgDAFQgrBWhPBCQgpAjgwAbQgsAYgyARQhVAehbAGQgYADgYAAQhYAAhYAAQhKAAhGgQQgpgIgngPQhHgYg7gnQgcgSgZgWQhQhBgrhXQgJgQgHgQQgehKAAhQQAAglAAgkQgBhtAAhtQAAhIAAhIg");
	this.shape_20.setTransform(892.1,101.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ApNN5QhKAAhGgPQgpgIgngPQhHgYg7gnQgcgSgZgVQhQhCgrhWIgQghQgehKAAhRIAAhIIgBjZIAAiQIAAmAQAAglAGgkQALg7Adg3QAYgxAlgrQAbggAjgdQBQhCBnglQBrgmB1ABIBJAAIZhAAQA4gBgGAIQgDAEg9AXQi8BFiKBTQkGCiiTDYIgKAPQiBDEgrDxQgXB8AACIIAAAVQAAA4gPA0QgJAjgQAiIgGAKQgrBXhPBCQgpAigwAbQgsAYgyARQhVAehbAGQgYACgYAAIiwAAg");
	this.shape_21.setTransform(892.1,101.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#373535").p("A0BnBQAAgoAHgoQAMhBAfg9QAbg1AogvQAegkAmgfQBYhJBxgoQB2gqCAAAQAoAAAoAAIcDAAQA+AAgHAHQgEAGhDAYQjPBMiYBcQkgCyihDuQgGAIgFAIQiODYgvEIQgZCJAACVQAAAMAAAMQAAA9gQA5QgLAmgRAlQgDAGgDAGQgwBfhWBIQguAng1AdQgwAag2AUQheAhhkAHQgaABgbAAQhgABhhAAQhSAAhNgRQgsgKgrgPQhOgbhCgrQgegUgbgXQhYhJgwhfQgJgSgHgRQgihSAAhYQAAgoAAgoQAAh4AAh3QAAhQAAhPg");
	this.shape_22.setTransform(881.2,110.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AsnPBQgsgKgrgPQhOgbhCgrQgegUgbgXQhYhJgwhfQgJgSgHgRQgihSAAhYIAAhQIAAjvIAAifIAAmlQAAgoAHgoQAMhBAfg9QAbg1AogvQAegkAmgfQBYhJBxgoQB2gqCAAAIBQAAIcDAAQA+AAgHAHQgEAGhDAYQjPBMiYBcQkgCyihDuIgLAQQiODYgvEIQgZCJAACVIAAAYQAAA9gQA5QgLAmgRAlIgGAMQgwBfhWBIQguAng1AdQgwAag2AUQheAhhkAHQgaABgbAAIjBABQhSAAhNgRg");
	this.shape_23.setTransform(881.2,110.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#373535").p("A20mxQAAiYAxiQQAuhrBbhWQBahUB5gxQB9gzCKgGQOZgGOcAAQDxAACvAHQAEAFhDAZQjUBPiiBjQkpCzixD/QjwFWgUHOQgaA6AABLQABBzgxBoQguB2hgBeQhdBch/A4QiDA3iPAJQhwAIhuAAQiXAAiMgoQiWgnhxhQQhyhQhBhwQhDhzgJiJQgJnUAAnhg");
	this.shape_24.setTransform(863.1,124.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AulQ2QiWgmhxhQQhyhQhBhwQhDhzgJiJQgJnUAAnhQAAiZAxiPQAuhrBbhVQBahVB5gxQB9gzCKgGQOZgGOcAAQDxAACvAHQAEAFhDAZQjUBPiiBjQkpCzixD/QjwFWgUHNQgaA8AABKQABBzgxBnQguB3hgBeQhdBch/A3QiDA4iPAJQhwAIhuAAQiXAAiMgpg");
	this.shape_25.setTransform(863.1,124.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#373535").p("A31l6QAAi7Aqi0QAphvBWhbQBWhZB1g3QB5g5CJgLQM3gMM5AAQGfAAFkAGQAMAEg7AXQi6BGiXBbQkiCqixDvQj4FHgnG9Qg0BoAACKQABBvgqBmQgpCFhgBtQhdBoiCBEQiEBBiTARQh3ARhzAAQigAAiYgjQiwgiiDhRQiEhQhOh4QhQh8gSicQgSm+AAnag");
	this.shape_26.setTransform(856.1,129.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("At8RwQiwghiDhRQiEhRhOh4QhQh7gSicQgSm+AAnaQAAi7Aqi0QAphvBWhaQBWhaB1g3QB5g4CJgMQM3gMM5AAQGfAAFkAGQAMAEg7AYQi6BFiXBbQkiCqixDvQj4FHgnG9Qg0BpAACJQABBvgqBlQgpCGhgBtQhdBoiCBDQiEBCiTARQh3ARhzAAQigAAiYgkg");
	this.shape_27.setTransform(856.1,129.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#373535").p("A43lBQAAjfAljYQAihzBShgQBRhfByg8QB2g/CGgRQLUgSLXAAQJNAAIaAFQAUAEg0AVQigA8iMBTQkbChivDfQkBE5g7GrQhNCXAADIQABBrgkBkQgjCVhgB7QhdB1iGBPQiFBLiXAaQh9AZh3AAQisAAijgeQjKgdiVhRQiXhRhaiBQhdiEgbivQgbmoAAnRg");
	this.shape_28.setTransform(849.1,135);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AtUSrQjKgdiVhSQiXhRhaiAQhdiEgbiwQgbmnAAnSQAAjeAljYQAih0BShfQBRhfByg8QB2g+CGgSQLUgSLXAAQJNAAIaAFQAUAEg0AVQigA8iMBTQkbChivDfQkBE4g7GsQhNCXAADIQABBrgkBkQgjCUhgB7QhdB2iGBPQiFBLiXAaQh9AZh3AAQisAAijgeg");
	this.shape_29.setTransform(849.1,135);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#373535").p("A56kKQAAkCAfj8QAdh3BNhmQBMhjBvhDQByhDCFgXQJwgYJ2AAQL6AALQAEQAbADgsATQiGA0iBBKQkTCYivDPQkJEqhPGbQhnDEAAEHQABBogdBhQgdCkhhCJQhcCCiKBbQiGBViaAjQiEAhh8AAQi2AAivgZQjkgYimhSQiqhRhniJQhpiNgljDQgkmRAAnKg");
	this.shape_30.setTransform(842.3,140.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AstTlQjkgZimhRQiqhRhniKQhpiMgljDQgkmSAAnJQAAkCAfj7QAdh4BNhmQBMhjBvhCQByhECFgXQJwgYJ2AAQL6AALQAEQAbADgsAUQiGAziBBKQkTCYivDPQkJEqhPGbQhnDFAAEGQABBogdBhQgdCjhhCKQhcCCiKBbQiGBViaAiQiEAih8AAQi2AAivgZg");
	this.shape_31.setTransform(842.3,140.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#373535").p("A6+jRQAAklAZkhQAXh8BIhrQBIhnBshJQBuhJCDgdQINgeIUAAQOnAAOGAEQAkACglARQhsArh2BCQkMCOivC/QkQEchjGKQiBDyAAFFQACBkgXBgQgYCyhgCZQhcCOiNBmQiJBgidArQiLApiAAAQjAAAi7gUQj/gUi3hQQi8hTh0iSQh2iUgujXQgtl7AAnBg");
	this.shape_32.setTransform(835.6,145.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AsHUfQj/gTi3hRQi8hTh0iSQh2iUgujXQgtl7AAnBQAAklAZkhQAXh8BIhqQBIhoBshJQBuhICDgeQIOgeITAAQOnAAOGAEQAkACglARQhsArh2BCQkMCOivDAQkQEbhiGKQiCDyAAFFQACBkgXBfQgYCzhgCZQhcCNiNBmQiIBhieArQiLApiAAAQjAAAi7gUg");
	this.shape_33.setTransform(835.6,145.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#373535").p("A8DiZQABlIASlFQASiABEhwQBChtBphPQBqhOCCgjQGqgkGyAAQRUAAQ9ADQArABgdAPQhTAjhqA5QkFCFiuCwQkZENh2F5QibEhAAGCQACBhgRBdQgRDBhhCoQhbCaiRByQiKBqihA0QiSAxiFAAQjKAAjGgPQkagOjIhSQjPhTiAiaQiDidg3jqQg3llAAm5g");
	this.shape_34.setTransform(828.9,150.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("ArhVZQkagOjIhSQjPhTiAibQiDicg3jqQg3llAAm5QABlJASlFQASh/BEhwQBChtBphOQBqhPCCgjQGqgkGyAAQRUAAQ9ADQArABgdAPQhTAjhqA5QkFCFiuCwQkZENh2F5QibEhAAGCQACBggRBeQgRDBhhCoQhbCZiRBzQiKBqihAzQiSAyiFAAQjKAAjGgPg");
	this.shape_35.setTransform(828.9,150.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#373535").p("A9IhhQABlrAMlqQAMiDA/h3QA+hxBmhUQBmhUCAgpQFGgqFRAAQUCAATyACQAzABgWANQg4AYhgAyQj9B8itCfQkhD/iKFoQi1FPAAHBQACBdgKBbQgMDRhhC2QhaCmiVB+QiMB0ilA8QiXA6iKAAQjVAAjSgKQkzgJjbhTQjhhTiNijQiQilhAj9Qg/lPAAmxg");
	this.shape_36.setTransform(822.3,156.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Aq9WTQkzgKjbhSQjhhUiNiiQiQimhAj9Qg/lOAAmxQABlrAMlqQAMiDA/h2QA+hyBmhUQBmhUCAgpQFGgqFRAAQUCAATyACQAzABgWANQg4AYhgAyQj9B8itCgQkhD/iKFnQi1FPAAHBQACBdgKBbQgMDRhhC1QhaCmiVB/QiMB0ilA8QiXA6iKAAQjVAAjSgKg");
	this.shape_37.setTransform(822.3,156.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#373535").p("A+OgpQAAmPAHmNQAGiIA6h7QA6h3BihaQBjhZB+gvQDjgwDvAAQWvAAWoABQA7ABgOALQgeAPhVAqQj2ByitCQQkpDwieFXQjOF8AAIAQACBZgEBZQgGDghhDFQhZCyiZCKQiNB+ipBFQieBCiOAAQjfAAjegFQlOgFjshSQjzhViaiqQidiuhJkQQhIk5AAmpg");
	this.shape_38.setTransform(815.8,161.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AqZXNQlOgFjshSQjzhViaiqQidivhJkQQhIk5AAmoQAAmPAHmNQAGiIA6h7QA6h3BihaQBjhZB+gvQDjgwDvAAMAtXAABQA7ABgOALIhzA5Qj2ByitCQQkpDwieFWQjOF9AAIAQACBZgEBYQgGDhhhDEQhZCziZCJQiNB/ipBFQieBCiOAAQjfAAjegFg");
	this.shape_39.setTransform(815.8,161.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#373535").p("EgEGAm2IrxAAQpEAAmYiFQmmiJkNkiQkRkliEnVQiEnVAAqgIAC11QAAjiBYjPQBUjHCaiaQCZiaDIhUQDOhXDiAAMBSEAAAQBsAAgLAPQgIAKh2A1QmACqkWDOQnsFskdIMQl2KvAAOeIAHEVQAAGBieFWQiNEzj8DwQjmDckWB9QkKB4jsAAg");
	this.shape_40.setTransform(809.3,166.7,0.621,0.621);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("EgP3Am2QpEAAmYiFQmmiKkNkgQkRkmiEnVQiEnVAAqgIAC11QAAjjBYjOQBUjHCaiaQCZiZDIhVQDOhXDiAAMBSEAAAQBsAAgLAPQgIALh2A0QmACqkWDOQnsFskdIMQl2KvAAOeIAHEUQAAGCieFVQiNE0j8DwQjmDckWB9QkKB4jsAAg");
	this.shape_41.setTransform(809.3,166.7,0.621,0.621);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#373535").p("EghJgBZQABmeAEmeQADiLA5h+QA3h6BihcQBhhdB9gxQFagyFmAAQX1AAXxABQA+AAgLALQgUANhQAnQjzByitCNQksDvimFWQjYHPAAJYQACBagCBZQgDDnhiDMQhYC4iaCPQiOCDirBJQkgBFkOAAQj8AAjygSQlkgOj5hoQj+hkigjAQiii8hNkeQhMlJgBm/g");
	this.shape_42.setTransform(797.3,171.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AkkY1Qj8AAjygSQlkgOj5hoQj+hkigjAQiii8hNkeQhMlJgBm/QABmeAEmeQADiLA5h+QA3h6BihcQBhhdB9gxQFagyFmAAMAvmAABQA+AAgLALQgUANhQAnQjzByitCNQksDvimFWQjYHPAAJYQACBagCBZQgDDnhiDMQhYC4iaCPQiOCDirBJQkeBFkMAAIgEAAg");
	this.shape_43.setTransform(797.3,171.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#373535").p("Egi9gDBQABmLAImJQAGiKA8h8QA6h4BkhaQBjhZB+guQI0guI/AAQWOAAWDABQA6ABgQANQgkAThXAuQj3B5itCaQknD9iaFnQjJHzAAJzQACBdgGBcQgHDfhhDFQhZCyiYCIQiNB+ioBDQmbBAmLAAQkOAAj7gkQlfgdj1h8Qj2hziajNQiZjChHkZQhIlwgCncg");
	this.shape_44.setTransform(785.3,175.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AuvY/Qlfgdj1h8Qj2hziajNQiZjChHkZQhIlwgCncQABmLAImJQAGiKA8h8QA6h4BkhaQBjhZB+guQI0guI/AAMAsRAABQA6ABgQANIh7BBQj3B5itCaQknD9iaFnQjJHzAAJzQACBdgGBcQgHDfhhDFQhZCyiYCIQiNB+ioBDQmbBAmLAAQkOAAj7gkg");
	this.shape_45.setTransform(785.3,175.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#373535").p("EgkygEpQABl3ALl1QALiJA+h6QA9h1BlhXQBmhXB/gqQMOgrMZABQUlAAUWACQA1ABgUAOQg0AahdA0Qj8CBitCoQkjEKiOF3Qi5IYAAKNQACBhgKBeQgKDYhhC9QhaCriVCCQiNB4imA+QoWA7oHAAQkgAAkDg1QlcgsjwiRQjviBiSjbQiRjHhCkUQhEmWgCn7g");
	this.shape_46.setTransform(773.4,180.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AopaQQkgAAkDg1QlcgrjwiRQjviBiSjbQiRjHhCkUQhEmXgCn6QABl4ALl0QALiJA+h6QA9h2BlhWQBmhXB/grQMOgqMZABQUlAAUWACQA1ABgUAOQg0AahdAzQj8CCitCnQkjEKiOF4Qi5IXAAKOQACBhgKBeQgKDYhhC9QhaCriVCCQiNB4imA+QoRA7oDAAIgJgBg");
	this.shape_47.setTransform(773.4,180.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#373535").p("EgmmgGRQABlkAOlgQAOiIBBh3QBAh0BnhUQBohUCAgnQPpgnPxABQS9AASqACQAwACgZAPQhDAhhkA6QkACKiuC0QkdEYiDGIQiqI8AAKnQACBlgNBhQgODQhhC1QhaCliUB8QiLByijA5QqRA2qEAAQkzAAkLhHQlYg7jrilQjniQiMjpQiJjMg8kPQg/m9gDoYg");
	this.shape_48.setTransform(761.5,185);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("Aqra+QkzAAkLhGQlYg7jrilQjniQiMjpQiJjMg8kPQg/m9gDoYQABlkAOlhQAOiHBBh3QBAh1BnhTQBohVCAgmQPpgnPxABQS9gBSqADQAwACgZAPQhDAhhkA6QkACKiuC0QkdEYiDGIQiqI7AAKoQACBkgNBhQgODRhhC1QhaCliUB7QiLBzijA5QqLA2p+AAIgMgBg");
	this.shape_49.setTransform(761.5,185);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#373535").p("EgobgH5QABlQASlMQARiHBEh1QBDhyBphSQBqhRCBgjQTDgjTKABQRVAAQ9ADQArACgdARQhTAnhqBBQkFCSiuDBQkZElh2GZQibJfAALDQACBogRBkQgRDIhhCuQhbCeiRB1QiKBuiiAzQsMAxsAgBQlFAAkUhYQlThKjni6QjfieiGj2QiAjRg3kLQg6njgEo2g");
	this.shape_50.setTransform(749.6,189.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AsubsQlFAAkUhYQlThKjni6QjfieiGj2QiAjRg3kLQg6njgEo2QABlQASlMQARiHBEh1QBDhyBphSQBqhRCBgjQTDgjTKABQRVAAQ9ADQArACgdARQhTAnhqBBQkFCSiuDBQkZElh2GZQibJfAALDQACBogRBkQgRDIhhCuQhbCeiRB1QiKBuiiAzQr8AwrxAAIgfAAg");
	this.shape_51.setTransform(749.6,189.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#373535").p("EgqRgJhQABk8AWk4QAUiGBHhzQBGhwBrhOQBshPCCgfQWdggWjABQPuAAPPAEQAmACghATQhjAuhxBHQkJCaiuDOQkUEzhrGpQiLKDAALeQACBsgVBmQgVDBhhCmQhbCYiPBvQiJBnifAvQuHArt9gBQlXAAkchqQlPhYjjjOQjXith/kEQh5jXgxkFQg1oIgFpWg");
	this.shape_52.setTransform(737.8,194.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AuycaQlXAAkchqQlPhYjjjOQjXith/kEQh5jXgxkFQg1oIgFpWQABk8AWk4QAUiGBHhzQBGhwBrhOQBshPCCgfQWdggWjABQPuAAPPAEQAmACghATQhjAuhxBHQkJCZiuDPQkUEzhrGpQiLKDAALeQACBsgVBmQgVDBhhCmQhbCYiPBvQiJBnifAvQtzAqtoAAIgpAAg");
	this.shape_53.setTransform(737.8,194.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#373535").p("EgsGgLJQAAkpAakjQAYiFBKhxQBIhuBthLQBuhMCEgcQZ3gcZ8ABQOFAANiAEQAiADgmAVQhyA0h4BNQkNCiivDcQkPFAhfG6Qh7KnAAL4QABBwgYBpQgZC5hgCeQhcCSiNBoQiIBiidAqQwCAmv5gBQlpAAklh8QlLhmjfjkQjPi7h4kRQhwjcgskBQgxovgFpzg");
	this.shape_54.setTransform(725.9,198.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("Aw1dIQlpAAklh8QlLhmjfjkQjPi7h4kRQhwjcgskBQgxovgFpzQAAkpAakjQAYiFBKhxQBIhuBthLQBuhMCEgcQZ3gcZ8ABQOFAANiAEQAiADgmAVQhyA0h4BNQkNCiivDcQkPFAhfG6Qh7KnAAL4QABBwgYBpQgZC5hgCeQhcCSiNBoQiIBiidAqQvoAlvfAAIg0AAg");
	this.shape_55.setTransform(725.9,198.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#373535").p("Egt8gMxQAAkWAdkPQAciDBMhvQBMhsBuhJQBxhJCFgYQdRgYdWABQMcAAL1AFQAdAEgqAVQiCA8h+BTQkSCqivDpQkKFNhTHKQhsLNAAMSQABBzgcBsQgcCyhhCVQhcCMiKBiQiIBdibAkQx9Ahx1gBQl7AAkuiOQlHh1jaj4QjHjKhykeQhojigmj8QgspVgGqRg");
	this.shape_56.setTransform(714.1,203.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("Ay5d2Ql7AAkuiOQlHh1jaj4QjHjKhykeQhojigmj8QgspVgGqRQAAkWAdkPQAciDBMhvQBMhsBuhJQBxhJCFgYQdRgYdWABQMcAAL1AFQAdAEgqAVQiCA8h+BTQkSCqivDpQkKFNhTHKQhsLNAAMSQABBzgcBsQgcCyhhCVQhcCMiKBiQiIBdibAkQxLAgxFAAIhiAAg");
	this.shape_57.setTransform(714.1,203.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#373535").p("EgvygOaQAAkBAhj7QAfiCBPhtQBOhqBxhGQBzhGCGgVUAgrgAUAgvAABQK0AAKIAGQAYAEgvAXQiQBCiFBaQkXCxivD3QkFFahHHbQhdLxAAMsQABB3ggBvQgfCqhhCOQhcCFiJBbQiGBYiZAfQz4AczxgBQmOAAk2igQlDiEjWkNQi/jYhrksQhgjnghj2Qgnp8gHqwg");
	this.shape_58.setTransform(702.3,208);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("A08ekQmOAAk2igQlDiEjWkNQi/jYhrksQhgjnghj2Qgnp8gHqwQAAkBAhj7QAfiCBPhtQBOhqBxhGQBzhGCGgVUAgrgAUAgvAABQK0AAKIAGQAYAEgvAXQiQBCiFBaQkXCxivD3QkFFahHHbQhdLxAAMsQABB3ggBvQgfCqhhCOQhcCFiJBbQiGBYiZAfQy5AbyyAAIh+AAg");
	this.shape_59.setTransform(702.3,208);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#373535").p("EgxpgQBQAAjuAljnQAiiBBShqQBRhpBzhCQB1hECHgSUAkFgAQAkIAACQJNAAIaAGQAUAEg0AZQigBJiMBgQkbC5ivEEQkBFog7HrQhNMVAANHQABB7gkByQgjCihgCGQhdB/iGBVQiGBRiXAaQ1zAX1tgBQmgAAk+ixQk/iTjSkhQi3jnhlk6QhXjsgcjyQgiqigIrNg");
	this.shape_60.setTransform(690.6,212.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("A3BfSQmgAAk+ixQk/iTjSkhQi3jnhlk6QhXjsgcjyQgiqigIrNQAAjuAljnQAiiBBShqQBRhpBzhCQB1hECHgSUAkFgAQAkIAACQJNAAIaAGQAUAEg0AZQigBJiMBgQkbC5ivEEQkBFog7HrQhNMVAANHQABB7gkByQgjCihgCGQhdB/iGBVQiGBRiXAaQ0eAW0YAAIiqAAg");
	this.shape_61.setTransform(690.6,212.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#373535").p("EgzggRpQAAjbAojSQAmiABVhoQBUhnB0hAQB3hBCJgOUAnfgAMAniAACQHkAAGtAGQAPAFg4AbQiwBPiSBmQkfDCixERQj7F1gvH8Qg+M5AANiQAAB+gnB1QgmCahgB+QheB5iEBOQiEBNiVAUQ3uAS3qgCQmyAAlHjCQk7iijNk2Qivj1helHQhQjygWjsQgdrJgJrrg");
	this.shape_62.setTransform(678.9,217.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("A5Gf/QmyAAlGjCQk8iijNk2Qivj1helHQhQjygVjsQgerJgIrrQgBjbAojSQAmiABWhoQBThnB0hAQB4hBCIgOUAnfgAMAniAACQHkAAGuAGQAOAFg4AbQiwBPiSBmQkfDCixERQj7F1gvH8Qg+M5AANiQAAB+gnB1QgmCahgB+QheB5iDBOQiFBNiVAUQ1XAQ1SAAIkvAAg");
	this.shape_63.setTransform(678.9,217.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#373535").p("Eg1XgTSQABjGAri+QAph/BYhmQBXhlB2g9QB5g+CJgKUAq6gAJAq7AACQF8AAFAAHQAKAFg8AcQjABWiZBtQkjDKixEdQj2GDgkINQguNdAAN8QAACCgrB3QgqCThgB3QheByiCBIQiDBHiSAPQ5pAN5ngCQnEAAlPjUQk3iwjIlLQiokEhYlUQhHj4gQjnQgZrvgKsKg");
	this.shape_64.setTransform(667.2,221.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("EgbLAgtQnEAAlPjUQk3iwjIlLQiokEhYlUQhHj4gQjnQgZrvgKsKQABjGAri+QAph/BYhmQBXhlB2g9QB5g+CJgKUAq6gAJAq7AACQF8AAFAAHQAKAFg8AcQjABWiZBtQkjDKixEdQj2GDgkINQguNdAAN8QAACCgrB3QgqCThgB3QheByiCBIQiDBHiSAPQ2PAM2KAAIm3gBg");
	this.shape_65.setTransform(667.2,221.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#373535").p("Eg3OgU6QAAizAvipQAth+BahkQBahjB4g6QB8g7CKgHUAuTgAFAuVAACQETAADUAIQAFAFhBAeQjPBcifBzQkpDSiwErQjyGQgYIeQgfOCAAOWQABCFgvB6QgtCLhgBvQhfBsiABBQiCBCiQAKQ7kAI7jgCQnWAAlYjmQkzi/jElgQigkShRliQg/j8gLjjQgUsVgKsog");
	this.shape_66.setTransform(655.6,226.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("EgdQAhbQnWAAlYjmQkzi/jElgQigkShRliQg/j8gLjjQgUsVgKsoQAAizAvipQAth+BahkQBahjB4g6QB8g7CKgHUAuTgAFAuVAACQETAADUAIQAFAFhBAeQjPBcifBzQkpDSiwErQjyGQgYIeQgfOCAAOWQABCFgvB6QgtCLhgBvQhfBsiABBQiCBCiQAKQ1BAH0+AAItIgBg");
	this.shape_67.setTransform(655.6,226.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#373535").p("Eg5GgWiQAAifAziVQAwh9BdhhQBdhhB6g4QB9g4CMgEUAxtgABAxuAACQCsAABmAJQAAAGhFAfQjfBjimB5QksDaiyE4QjsGegMIuQgQOmAAOxQAACJgyB9QgxCDhgBnQhfBmh9A7QiCA8iOAFQ9fAC9fgCQnoAAlhj4QkujNjAl0QiYkhhKlvQg3kDgFjdQgQs8gLtGg");
	this.shape_68.setTransform(644,230.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("EgfWAiJQnoAAlhj4QkujNjAl0QiYkhhKlvQg3kDgFjdQgQs8gLtGQAAifAziVQAwh9BdhhQBdhhB6g4QB9g4CMgEUAxtgABAxuAACQCsAABmAJQAAAGhFAfQjfBjimB5QksDaiyE4QjsGegMIuQgQOmAAOxQAACJgyB9QgxCDhgBnQhfBmh9A7QiCA8iOAFMggtAABI6RgBg");
	this.shape_69.setTransform(644,230.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#373535").p("EAvXA4SMhlPgAIQsxAApFmsQnhliktp6QjpnohtplQhLmoAAldMgAkgrrQAAjiBXjOQBUjHCaiaQCaiZDHhVQDPhXDiAAMCrKAAIQBsAAgLAPQgIAKh2A1QmACqkWDOQnsFskdIMQl2KvAAOfMAAAAw5QAADihYDNQhUDIiaCaQiZCajIBUQjOBXjiAAg");
	this.shape_70.setTransform(632.4,235.5,0.621,0.621);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("Eg14A4KQsxAApFmsQnhliktp5QjpnqhtplQhLmnAAleMgAkgrpQAAjiBXjPQBUjHCaiaQCaiZDHhVQDPhXDiAAMCrKAAIQBsAAgLAPQgIALh2A0QmACqkWDOQnsFskdIMQl2KvAAOfMAAAAw4QAADihYDOQhUDIiaCaQiZCZjIBUQjOBYjiAAg");
	this.shape_71.setTransform(632.4,235.5,0.621,0.621);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#373535").p("Eg81gadQAAiMA2iBQA0h7BghgQBfhfB8g0QCAg2CNAAMBt8AAEQBDAAgHAJQgFAHhJAhQjvBpisCAQkxDiiyFFQjoGrAAI/MAAAAi9QAACMg2CAQg0B8hgBfQhfBgh8A0QiAA2iMAAMhEBgAEQnWAAlSj1QkZjLiylrQiLkbhCljQgwj6AAjQg");
	this.shape_72.setTransform(620.6,250.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("EgkxAlLQnWAAlSj1QkZjLiylrQiLkbhCljQgwj6AAjQMgAUgh1QAAiMA2iBQA0h7BghgQBfhfB8g0QCAg2CNAAMBt8AAEQBDAAgHAJQgFAHhJAhQjvBpisCAQkxDiiyFFQjoGrAAI/MAAAAi9QAACMg2CAQg0B8hgBfQhfBgh8A0QiAA2iMAAg");
	this.shape_73.setTransform(620.6,250.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#373535").p("Eg+rgcxQAAiMA2iAQA0h8BghfQBfhfB8g1QCAg2CMAAMBxpAAEQBDAAgHAJQgEAHhKAhQjuBpitCAQkxDiixFFQjoGrAAI/MAAAAnkQAACNg3CAQg0B7hfBgQhgBfh7A0QiBA3iMAAMhJMgAEQmxAAk7jgQkHi6iplOQiHkFhAlKQgwjsAAjJg");
	this.shape_74.setTransform(608.7,265.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("EgoGAnfQmxAAk7jgQkHi6iplOQiHkFhAlKQgwjsAAjJMgASgokQAAiMA2iAQA0h8BghfQBfhfB8g1QCAg2CMAAMBxpAAEQBDAAgHAJQgEAHhKAhQjuBpitCAQkxDiixFFQjoGrAAI/MAAAAnkQAACNg3CAQg0B7hfBgQhgBfh7A0QiBA3iMAAg");
	this.shape_75.setTransform(608.7,265.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#373535").p("EhAigfEQAAiMA2iBQA0h7BghgQBfhfB8g0QCAg2CNAAMB1WAADQBDAAgHAJQgFAHhJAhQjvBpisCAQkxDiiyFFQjoGrAAI/MAAAAsMQAACMg2CAQg0B8hgBfQhfBgh8A0QiAA2iMAAMhOYgADQmNAAkjjKQj2iqifkwQiCjxg/kvQgxjfAAjCg");
	this.shape_76.setTransform(596.9,279.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("EgrbApzQmNAAkjjKQj2iqifkwQiCjxg/kvQgxjfAAjCMgAQgvSQAAiMA2iBQA0h7BghgQBfhfB8g0QCAg2CNAAMB1WAADQBDAAgHAJQgFAHhJAhQjvBpisCAQkxDiiyFFQjoGrAAI/MAAAAsMQAACMg2CAQg0B8hgBfQhfBgh8A0QiAA2iMAAg");
	this.shape_77.setTransform(596.9,279.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#373535").p("EhCYghYQAAiMA2iAQA0h8BghfQBfhfB8g1QCAg2CMAAMB5DAADQBDAAgHAJQgEAHhKAhQjuBpitCAQkxDiixFFQjoGrAAI/MAAAAwzQAACNg3CAQg0B7hfBgQhgBfh7A0QiBA3iMAAMhTjgADQloAAkMi1QjkiZiXkSQh9jcg9kWQgyjSAAi6g");
	this.shape_78.setTransform(585,294.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("EguwAsHQloAAkMi1QjkiZiXkSQh9jcg9kWQgyjSAAi6MgANg2BQAAiMA2iAQA0h8BghfQBfhfB8g1QCAg2CMAAMB5DAADQBDAAgHAJQgEAHhKAhQjuBpitCAQkxDiixFFQjoGrAAI/MAAAAwzQAACNg3CAQg0B7hfBgQhgBfh7A0QiBA3iMAAg");
	this.shape_79.setTransform(585,294.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#373535").p("EhEPgjrQAAiMA3iBQA0h7BfhgQBghfB8g0QCAg2CMAAMB8wAACQBDAAgHAJQgFAHhJAhQjvBpisCAQkxDiiyFFQjoGrAAI/MAAAA1bQAACMg2CAQg0B8hgBfQhfBgh8A0QiAA2iMAAMhYugACQlEAAj1igQjTiIiNj1Qh4jHg8j8QgyjEAAiyg");
	this.shape_80.setTransform(573.2,309.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("EgyEAubQlEAAj1igQjTiIiNj1Qh4jHg8j8QgyjEAAiyMgAMg8wQAAiMA3iBQA0h7BfhgQBghfB8g0QCAg2CMAAMB8wAACQBDAAgHAJQgFAHhJAhQjvBpisCAQkxDiiyFFQjoGrAAI/MAAAA1bQAACMg2CAQg0B8hgBfQhfBgh8A0QiAA2iMAAg");
	this.shape_81.setTransform(573.2,309.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#373535").p("EhGFgl/QAAiMA2iAQA0h8BghfQBfhfB8g1QCAg2CNAAMCAcAACQBDAAgHAJQgEAHhKAhQjuBpitCAQkxDiixFFQjoGrAAI/MAAAA6DQAACMg3CAQg0B8hfBfQhgBfh7A1QiBA1iMAAMhd5gABQkgAAjdiLQjCh4iEjWQhziyg6jjQgzi2AAiqg");
	this.shape_82.setTransform(561.3,324.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("Eg1ZAwvQkggBjdiKQjCh3iEjXQhziyg6jjQgzi2AAirMgAJhDfQAAiMA2iAQA0h7BghgQBfhfB8g0QCAg2CNAAMCAcAACQBDgBgHAKQgEAGhKAhQjuBpitCAQkxDiixFFQjoGrAAI/MAAAA6CQAACNg3B/Qg0B8hfBgQhgBfh7A0QiBA3iMgBg");
	this.shape_83.setTransform(561.3,324.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#373535").p("EhH8goSQAAiMA3iBQA0h7BfhgQBghfB8g0QCAg2CMAAMCEKAABQBDAAgHAJQgFAHhJAhQjvBpisCAQkxDiiyFFQjoGrAAI/MAAAA+qQAACMg2CAQg0B8hgBfQhfBgh8A0QiAA2iMAAMhjFgABQj7AAjGh2Qiwhmh7i5Qhuieg5jJQg0ioAAijg");
	this.shape_84.setTransform(549.5,339.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("Eg4uAzDQj7AAjGh2Qiwhnh7i4Qhuieg5jJQg0ioAAijMgAHhKOQAAiMA3iBQA0h7BfhgQBgheB8g1QCAg2CMAAMCEKAACQBDgBgHAKQgFAGhJAhQjvBpisCAQkxDiiyFFQjoGrAAI/MAAAA+qQAACMg2CAQg0B8hgBfQhfBfh8A1QiAA2iMAAg");
	this.shape_85.setTransform(549.5,339.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#373535").p("EhJygqmQAAiMA2iAQA0h7BghgQBfhfB8g1QCAg1CNAAMCH2AAAQBDAAgHAKQgEAGhKAhQjuBqitB/QkxDiixFFQjoGrAAI/MAAABDSQAACMg3CAQg0B8hfBfQhgBfh7A1QiBA2iMAAMhoQgABQjWAAivhgQifhWhxibQhqiJg3ivQg1icAAibg");
	this.shape_86.setTransform(537.6,353.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("Eg8DA1XQjWAAivhgQifhWhxicQhqiJg3ivQg1ibAAibMgAEhQ9QAAiMA2iAQA0h7BghgQBfhfB8g0QCAg2CNAAMCH2AABQBDgBgHAKQgEAGhKAhQjuBpitCAQkxDiixFFQjoGrAAI/MAAABDRQAACMg3CBQg0B7hfBfQhgBgh7A1QiBA2iMAAg");
	this.shape_87.setTransform(537.6,353.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#373535").p("EhLpgs5QAAiMA3iBQA0h7BfhgQBghfB8g0QCAg2CMAAMCLkAAAQBDAAgHAJQgFAHhJAhQjvBpisCAQkxDiiyFFQjoGrAAI/MAAABH5QAACMg2CAQg0B8hgBfQhfBfh8A1QiAA2iMAAMhtcgABQixAAiYhLQiNhFhph9Qhkh0g2iWQg1iNAAiUg");
	this.shape_88.setTransform(525.8,368.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("Eg/YA3qQixABiYhMQiNhFhph9Qhkh0g2iWQg1iNAAiUMgADhXrQAAiMA3iBQA0h7BfhgQBghfB8g0QCAg2CMAAMCLkAABQBDgBgHAKQgFAGhJAhQjvBpisCAQkxDiiyFFQjoGrAAI/MAAABH5QAACMg2CAQg0B8hgBfQhfBgh8A0QiAA2iMAAg");
	this.shape_89.setTransform(525.8,368.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#373535").p("EBNMBdaMi4rAAAQjiAAjOhXQjIhUiZibQiaiZhUjIQhYjNAAjjMAAAiYGQAAjiBYjOQBUjHCaiaQCZiaDIhUQDOhXDiAAMDm0AAAQBsAAgLAPQgIAKh2A1QmACqkWDOQnsFskdIMQl2KvAAOeMAAAB7RQAADjhYDNQhUDIiaCZQiZCbjIBUQjOBXjiAAg");
	this.shape_90.setTransform(513.9,383.4,0.621,0.621);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("EhrfBdaQjiAAjOhXQjIhUiZibQiaiZhUjIQhYjNAAjjMAAAiYFQAAjjBYjOQBUjHCaiaQCZiZDIhVQDOhXDiAAMDm0AAAQBsAAgLAPQgIALh2A0QmACqkWDOQnsFskdIMQl2KvAAOfMAAAB7QQAADjhYDNQhUDIiaCZQiZCbjIBUQjOBXjiAAg");
	this.shape_91.setTransform(513.9,383.4,0.621,0.621);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:0.009,scaleY:0.003,x:1001.8,y:12.9}},{t:this.shape,p:{scaleX:0.009,scaleY:0.003,x:1001.8,y:12.9}}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.621,scaleY:0.518,x:870.2,y:119.1}},{t:this.shape,p:{scaleX:0.621,scaleY:0.518,x:870.2,y:119.1}}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1509.9,395.3,6.9,4.3);
// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;