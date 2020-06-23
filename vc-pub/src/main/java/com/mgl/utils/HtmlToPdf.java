package com.mgl.utils;


import com.mgl.constant.properties.PathProperties;

import java.io.File;
import java.util.List;

public class HtmlToPdf {

	private static volatile String toPdfTool;
	private static volatile Integer delay;

	static {
		try {
			toPdfTool = PathProperties.getToPdfTool();
			delay = PathProperties.getDelay();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static String getDelayCommand(Integer delay) {
		if ((delay != null) && (delay.intValue() > 0))
			return " --no-stop-slow-scripts --javascript-delay " + delay + " ";

		return "  ";
	}

	public static File convert(String srcPath, String destPath) throws Exception {
		return convert(srcPath, destPath, delay);
	}

	public static File convert(String srcPath, String destPath, Integer delay) {
		try {
			if ((srcPath == null) || (srcPath.trim().isEmpty()) || (destPath == null) || (destPath.trim().isEmpty()))
				throw new Exception("传入参数错误！");

			if (!destPath.toLowerCase().endsWith(".pdf".toLowerCase()))
				throw new Exception("传入的目标文件(" + destPath + ")不是.pdf格式");
			if ((toPdfTool == null) || (toPdfTool.trim().isEmpty()))
				throw new Exception("toPdfTool读取失败！");
			File file = new File(destPath);
			File parent = file.getParentFile();

			if (!parent.exists())
				parent.mkdirs();

			StringBuilder cmd = new StringBuilder();
			cmd.append(toPdfTool);
			cmd.append(" ");
			cmd.append(getDelayCommand(delay));
			cmd.append(" ");
			cmd.append(srcPath);
			cmd.append(" ");
			cmd.append(destPath);
			Runtime.getRuntime().exec(cmd.toString());

			// proc.waitFor();
			return file;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	public static void batchConvert(List<String> srcList, List<String> destList) {
		try {
			for (int i = 0; i < srcList.size(); i++) {
				String srcPath = srcList.get(i);
				String destPath = destList.get(i);
				File file = convert(srcPath, destPath);
				if (file != null) {
					int n = 0;
					while (!file.exists()) {
						Thread.sleep(1000);
						n++;
						if (n == 10) {
							file = convert(srcPath, destPath);
							n = 0;
						}
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}