package com.ds.sys.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ds.sys.common.vo.JsonResult;
import com.ds.sys.common.vo.PageObject;
import com.ds.sys.pojo.SysIndent;
import com.ds.sys.service.SysIndentService;
@Controller
@RequestMapping("/indent/")
public class SysIndentController {
	@Autowired
	SysIndentService sysIndentService;
	
	@RequestMapping("doGetIndents")
	@ResponseBody
	public JsonResult doGetIndents(Integer userId,Integer pageCurrent) {
		System.out.println(pageCurrent);
		PageObject<SysIndent> data = sysIndentService.getIndents(userId,pageCurrent);
		return new JsonResult(data);
	}
	@RequestMapping("doDelIndent")
	@ResponseBody
	public JsonResult doDelIndent(Integer goodsId) {
		sysIndentService.delIndent(goodsId);
		return new JsonResult("delete ok");
	}
}
