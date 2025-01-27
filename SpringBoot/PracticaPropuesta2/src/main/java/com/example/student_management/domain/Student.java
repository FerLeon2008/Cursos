package com.example.student_management.domain;

public class Student {
    private int id;
    private String name;
    private String mail;
    private  int age;
    private String course;

    public Student(int id, String name, String mail, int age, String course) {
        this.id = id;
        this.name = name;
        this.mail = mail;
        this.age = age;
        this.course = course;
    }

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

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }
}
