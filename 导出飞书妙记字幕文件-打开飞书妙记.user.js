// ==UserScript==
// @name         导出飞书妙记字幕文件-打开飞书妙记
// @author       inith271
// @namespace    https://github.com/initH271/monkeyScripts
// @version      1.1
// @description  从列表批量打开飞书妙记页面
// @match        https://*.feishu.cn/minutes/me
// @grant        none
// ==/UserScript==

(function () {
	"use strict";

	// 在页面加载完成后执行逻辑
	window.addEventListener("load", function () {
		// 延时一段时间再点击导出妙记按钮，以便弹窗加载完成
		setTimeout(function () {
			var notes = document.querySelectorAll(
				"a.meeting-list-item-me.meeting-list-item.no-auto-delete"
			);
			var flag = confirm(
				"一共有" + notes.length + "个文件被导出，确定导出么？"
			);
			if (flag) {
				var i = 0;

				var intervalId = setInterval(function () {
					if (i >= notes.length) {
						clearInterval(intervalId);
						return;
					}

					notes[i].click();
					i++;
				}, 5000); // 每隔5秒点击一次，可以根据需要调整间隔时间
			}
		}, 5000); // 延时5秒，可以根据需要调整延时时间，鼠标滚轮滑至最下方
	});
})();
