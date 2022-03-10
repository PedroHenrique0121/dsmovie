package com.devsuperior.dsmovie.entities;

import javax.persistence.*;

@Entity
@Table(name="tb_user")
public class User {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;
    private String email;

    public User() {

    }

    public User(long id, String email) {
        Id = id;
        this.email = email;
    }

    public long getId() {
        return Id;
    }

    public void setId(long id) {
        Id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
