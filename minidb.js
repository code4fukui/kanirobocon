var MiniDB = {
	//endpoint: "http://172.20.10.4:8888/minidb/kanirobo2020/",
	endpoint: "http://localhost:8888/minidb/kanirobo2020/",
//	endpoint: "https://sabae.cc/minidb/kanirobo2019/",
//	endpoint: "http://sabae.cc/minidb/kanirobo2018/",
	load: function(name, callback) {
		var key = localStorage.getItem("key")
		var url = this.endpoint + name + ".csv?cmd=load&key=" + key
		const self = this
		jsonp(url + "&callback=" + getCallbackMethod(function(data) {
			callback(self.parseCSV(data));
		}))
	},
	parseCSV: function(data) {
		var ss = data.split('\n');
		var csv = [];
		for (var i = 0; i < ss.length; i++) {
			if (ss[i].length > 0) {
				var s = ss[i].split(',');
				csv.push(s);
			}
		}
		return csv
},
	create: function(name, header, callback) {
		var key = localStorage.getItem("key");
		var url = this.endpoint + name + ".csv?cmd=create&key=" + key + "&data=" + header;
		jsonp(url + "&callback=" + getCallbackMethod(callback));
	},
	add: function(name, data, callback) {
		var key = localStorage.getItem("key");
		var url = this.endpoint + name + ".csv?cmd=add&key=" + key + "&data=" + data;
		jsonp(url + "&callback=" + getCallbackMethod(callback));
	},
	set: function(name, data, callback) {
		var key = localStorage.getItem("key");
		var url = this.endpoint + name + ".csv?cmd=set&key=" + key + "&data=" + data;
		jsonp(url + "&callback=" + getCallbackMethod(callback));
	},
	get: function(name, id, callback) {
		var key = localStorage.getItem("key");
		var url = this.endpoint + name + ".csv?cmd=get&key=" + key + "&id=" + id;
		jsonp(url + "&callback=" + getCallbackMethod(function(data) {
			var ss = data.split(',');
			callback(ss);
		}));
	},
	remove: function(name, id, callback) {
		var key = localStorage.getItem("key");
		var url = this.endpoint + name + ".csv?cmd=remove&key=" + key + "&id=" + id;
		jsonp(url + "&callback=" + getCallbackMethod(callback));
	},
	head: function(name, callback) {
		var key = localStorage.getItem("key");
		var url = this.endpoint + name + ".csv?cmd=head&key=" + key;
		jsonp(url + "&callback=" + getCallbackMethod(function(data) {
			var ss = data.split(',');
			callback(ss);
		}));
	},
	del: function(name, callback) {
		var key = localStorage.getItem("key");
		var url = this.endpoint + name + ".csv?cmd=delete&key=" + key;
		jsonp(url + "&callback=" + getCallbackMethod(callback));
	},
	serialize: function(array) {
		var s = "";
		for (var i = 0; i < array.length; i++) {
			s += array[i].join(",") + "\n";
		}
		return encodeURIComponent(s);
	},
};
