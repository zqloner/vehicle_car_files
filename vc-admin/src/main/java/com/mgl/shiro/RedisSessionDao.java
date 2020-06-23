package com.mgl.shiro;


import com.mgl.utils.RedisUtil;
import org.apache.shiro.session.Session;
import org.apache.shiro.session.UnknownSessionException;
import org.apache.shiro.session.mgt.eis.AbstractSessionDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.util.Collection;

/**
 * Created by liushuai on 2019/11/22.
 */
@Component
public class RedisSessionDao extends AbstractSessionDAO {
    // Session超时时间，单位为毫秒
    private long expireTime;

    @Autowired
    private RedisUtil redisUtil;

    public RedisSessionDao() {
        super();
    }

    public RedisSessionDao(RedisUtil redisUtil,long expireTime) {
        this.redisUtil = redisUtil;
        this.expireTime = expireTime;
    }

    @Override // 更新session
    public void update(Session session) throws UnknownSessionException {
        if (session == null || session.getId() == null) {
            return;
        }
        session.setTimeout(expireTime);
        setShiroSession(session);
    }

    @Override // 删除session
    public void delete(Session session) {
        if (null == session) {
            return;
        }
        delShiroSession(session.getId());
    }

    @Override
// 获取活跃的session，可以用来统计在线人数，如果要实现这个功能，可以在将session加入redis时指定一个session前缀，统计的时候则使用keys("session-prefix*")的方式来模糊查找redis中所有的session集合
    public Collection<Session> getActiveSessions() {
        return null;
    }

    @Override// 加入session
    protected Serializable doCreate(Session session) {
        Serializable sessionId = this.generateSessionId(session);
        this.assignSessionId(session, sessionId);

        setShiroSession(session);
        return sessionId;
    }

    @Override// 读取session
    protected Session doReadSession(Serializable sessionId) {
        if (sessionId == null) {
            return null;
        }
        return getShiroSession(sessionId);
    }

    private void setShiroSession(Session session){
        String sessionId = session.getId().toString();
        redisUtil.set(sessionId, session, expireTime);
    }

    private Session getShiroSession(Serializable sessionId){
        String id = sessionId.toString();
        return (Session) redisUtil.get(id);
    }

    private void delShiroSession(Serializable sessionId){
        String id = sessionId.toString();
        redisUtil.del(id);
    }
}