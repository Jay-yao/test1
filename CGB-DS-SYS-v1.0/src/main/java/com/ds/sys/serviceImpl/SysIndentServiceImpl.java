package com.ds.sys.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ds.common.exception.ServiceException;
import com.ds.sys.common.vo.JsonResult;
import com.ds.sys.common.vo.PageObject;
import com.ds.sys.dao.SysIndentDao;
import com.ds.sys.pojo.SysIndent;
import com.ds.sys.service.SysIndentService;
import com.sun.xml.internal.txw2.IllegalAnnotationException;

@Service
public class SysIndentServiceImpl implements SysIndentService{
	@Autowired
	SysIndentDao sysIndentDao;
	public PageObject<SysIndent> getIndents(Integer userId,Integer pageCurrent) {
		if(pageCurrent<0||pageCurrent==null)
			throw new IllegalAnnotationException("页码值不正确");
		int rowCount=sysIndentDao.getRowCount(userId);
		if(rowCount==0)
			throw new ServiceException("没有订单数据");
		int pageSize=4;
		int startIndex=(pageCurrent-1)*pageSize;
		List<SysIndent> records=sysIndentDao.getIndents(userId,startIndex, pageSize);
		//4.对查询结果进行封装并返回
		PageObject<SysIndent> data=new PageObject<>();
		data.setRowCount(rowCount);
		data.setRecords(records);
		data.setPageCurrent(pageCurrent);
		data.setPageSize(pageSize);
		int pageCount=(rowCount-1)/pageSize+1;
		data.setPageCount(pageCount);
		return data;
	}
	@Override
	public int delIndent(Integer goodsId) {
		if(goodsId==null)
			throw new ServiceException("该订单不存在");
		int row = sysIndentDao.delIndent(goodsId);
		return row;
	}
	
	
}


