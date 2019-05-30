package com.ds.sys.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.ds.sys.pojo.SysIndent;

public interface SysIndentDao {
	int getRowCount(@Param("userId")Integer userId);
	List<SysIndent> getIndents(@Param("userId")Integer userId,@Param("startIndex")Integer startIndex,@Param("pageSize")Integer pageSize);
	int delIndent(@Param("goodsId")Integer goodsId);
}
