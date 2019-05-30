package com.ds.sys.service;


import com.ds.sys.common.vo.PageObject;
import com.ds.sys.pojo.SysIndent;

public interface SysIndentService {
	PageObject<SysIndent> getIndents(Integer userId,Integer pageCurrent);
	int delIndent(Integer goodsId);
	
}
