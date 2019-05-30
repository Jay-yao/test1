package com.ds.sys.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
@RequestMapping("/")
@Controller
public class PageController {
	@RequestMapping("doIndexUI")
	public String doIndex() {
		return "index";
	}
	
	@RequestMapping("doFindIndentUI")
	public String doFindIndentUI() {
		return "VIPcar";
	}
	
	@RequestMapping("doFindShopingCarUI")
	public String doFindShopingCar() {
		return "shopingcar";
	}
	
	@RequestMapping("doPageUI")
	public String doPageUI() {
		return "common/page";
	}
}
