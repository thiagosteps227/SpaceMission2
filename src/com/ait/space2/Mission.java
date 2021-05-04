package com.ait.space2;
import javax.xml.bind.annotation.XmlRootElement;


@XmlRootElement

public class Mission {
	 private int id;

	 private String name;

	 private String image_thumb;

	 private String image_main;

	private String image_caption;
	
	private String description;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public String getImagethumb() {
		return image_thumb;
	}

	public void setImagethumb(String image_thumb) {
		this.image_thumb = image_thumb;
	}
	
	public String getImagemain() {
		return image_main;
	}

	public void setImagemain(String image_main) {
		this.image_main = image_main;
	}
	
	public String getImagecaption() {
		return image_caption;
	}

	public void setImagecaption(String image_caption) {
		this.image_caption = image_caption;
	}
	
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}
