var Commgate = function(cid) {
	return {
	//	baseurl: "http://localhost:8080/commgate/1/",
		baseurl: "http://sabae.club/commgate/1/",
		cid: cid, //"circleshare",
		post: function(data) {
			if (this.uid == null)
				this.uid = (Math.random() * 1000000) >> 0;
			var url = this.baseurl + "post.json";
			url += "?cid=" + this.cid;
			url += "&uid=" + this.uid;
			url += "&data=" + encodeURIComponent(data);
			jsonp(url);
		},
		get: function(callback) {
			jsonp(this.baseurl + "get.json?cid=" + this.cid + "&callback=" + getCallbackMethod(function(org) {
				callback(org);
			}));
		},
		clear: function() {
			jsonp(this.baseurl + "clear.json?cid=" + this.cid);
		},
	};
};
