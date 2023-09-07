// ==UserScript==
// @name         导出飞书妙记字幕文件
// @author       inith271
// @namespace    https://github.com/initH271/monkeyScripts
// @version      1.1
// @description  导出飞书妙记的字幕文件脚本
// @match        https://*.feishu.cn/minutes/*
// @exclude      https://*.feishu.cn/minutes/me
// @grant        none
// ==/UserScript==

(function () {
	"use strict";

	// 在页面加载完成后执行逻辑
	window.addEventListener("load", function () {
		// 模拟鼠标悬浮在菜单按钮上
		var menuBtn = document.querySelector(".detail-meeting-menu-btn");
		menuBtn.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));

		// 延时一段时间再点击导出妙记按钮，以便弹窗加载完成
		setTimeout(function () {
			// 点击导出妙记按钮
			var exportBtn = document.querySelectorAll(".menu-item")[1];
			exportBtn.click();

			// 展开导出格式列表
			document
				.querySelectorAll(".ud__select__selector__arrow")[1]
				.click();

			// 选中导出格式为"SRT"
			var optionsText = document.querySelectorAll(
				".ud__select__list__item"
			)[2];
			optionsText.click();

			// 取消选中包含说话人框
			var speakerCheckbox = document
				.querySelector(".export-modal-checkbox-container")
				.querySelector("label");
			speakerCheckbox.click();

			// 点击导出按钮
			var confirmBtn = document.querySelector(
				".ud__modal__footer__btns button"
			);
			confirmBtn.click();

			// 关闭窗口
			setTimeout(() => window.close(), 4000);
		}, 1000); // 延时一秒，可以根据需要调整延时时间
	});
})();
