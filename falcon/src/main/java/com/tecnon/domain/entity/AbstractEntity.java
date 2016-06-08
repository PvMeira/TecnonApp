package com.tecnon.domain.entity;

import java.io.Serializable;

/**
 * @author irlampert
 */
public abstract class AbstractEntity<PK_TYPE> 
	implements Serializable, Cloneable, Comparable<AbstractEntity<PK_TYPE>> {
	
	private static final long serialVersionUID = 1L;

	public abstract PK_TYPE getId();
	public abstract void setId(PK_TYPE id);
	
	@Override
	public final int compareTo(AbstractEntity<PK_TYPE> otherEntity) {
		return Integer.valueOf(hashCode()).compareTo(Integer.valueOf(otherEntity.hashCode()));
	}
	
}
