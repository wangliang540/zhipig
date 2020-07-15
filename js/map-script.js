"use strict";
$(function() {
	var map = new AMap.Map('map',{
		zoom: 10,
		resizeEnable: true,
		center: [116.607507, 40.118816]
	})

	var marker = new AMap.Marker({
		map: map,
		position: new AMap.LngLat(116.607507, 40.118816),
	});
	marker.setLabel({
		content: '<img src="images/logo/theme-main-logo-1.png" alt="Logo">' +
		'<p>中国&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;北京市顺义区南法信镇 <br>东港 · 鑫座&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;东座2层 </p>'
	});
});
