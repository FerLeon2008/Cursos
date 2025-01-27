package com.example.student_management.controllers;


import com.example.student_management.domain.Student;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/student")
public class StudentController {

    //Alumnos
    private List<Student> students = new ArrayList<>(Arrays.asList(
            new Student(1,"Fernando León","fernando.lg130308@gmail.com", 16, "Curso de SpringBoot," +
                        " NestJS, ReactNative" ),
            new Student(2,"Erick Romero","erick.RR1404@gmail.com", 16, "Curso de ReactNative"),
            new Student(3, "Giovanni Rámirez", "gioPro@gmail.com",16,"Curso de React"),
            new Student(4,"María Natividad Rodríguez","felizNatividad@outlook.com",16,"Curso de" +
                        "HTML y CSS, SASS, Tailwind")
    ));

    @GetMapping
    public List<Student> getStudents(){
        return students;
    }

    @GetMapping("/{mail}")
    public Student getStudentByEmail(@PathVariable String mail){
        for(Student s: students){
            if(s.getMail().equalsIgnoreCase(mail))
                return s;
        }
        return null;
    }

    @PostMapping
    public Student newStudent(@RequestBody Student newStudent){
        students.add(newStudent);
        return newStudent;
    }

    @PutMapping
    public Student updateStudent(@RequestBody Student updateStudent){
        for(Student s: students){
            if(s.getId() == updateStudent.getId()){
                s.setName(updateStudent.getName());
                s.setMail(updateStudent.getMail());
                s.setAge(updateStudent.getAge());
                s.setCourse(updateStudent.getCourse());
                return s;
            }
        }
        return null;
    }

    @PatchMapping
    public Student patchStudent(@RequestBody Student changeStudent){
        for(Student s: students){
            if(s.getId()== changeStudent.getId()){

                if(changeStudent.getName() != null)s.setName(changeStudent.getName());
                if(changeStudent.getMail() != null)s.setMail(changeStudent.getMail());
                if(changeStudent.getAge() != 0)s.setAge(changeStudent.getAge());
                if(changeStudent.getCourse() != null)s.setCourse(changeStudent.getCourse());
                return s;
            }
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public Student deleteStudent(@PathVariable int id){
        for(Student s: students){
            if(s.getId() == id){
                students.remove(s);
                return s;
            }
        }
        return null;
    }
}
