package com.mgl.constant.properties;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 *
 * @author liushuai
 * @date 2019/11/22
 */
@Component
@ConfigurationProperties(prefix="filepath")
@Data
public class PathProperties {

    private static String toPdfTool;

    private static Integer delay;

    private static String tmpFilePath;

    private static String projectDomain;

    public static String getProjectDomain() {
        return projectDomain;
    }

    public void setProjectDomain(String projectDomain) {
        PathProperties.projectDomain = projectDomain;
    }

    public static String getTmpFilePath() {
        return tmpFilePath;
    }

    public  void setTmpFilePath(String tmpFilePath) {
        PathProperties.tmpFilePath = tmpFilePath;
    }

    public static String getToPdfTool() {
        return toPdfTool;
    }

    public void setToPdfTool(String toPdfTool) {
        PathProperties.toPdfTool = toPdfTool;
    }

    public static Integer getDelay() {
        return delay;
    }

    public void setDelay(Integer delay) {
        PathProperties.delay = delay;
    }
}
