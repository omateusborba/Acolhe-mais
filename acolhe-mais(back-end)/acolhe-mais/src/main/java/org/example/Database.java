package org.example;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;


//conexão estabelecida!
public class Database {
    private static final String URL = "jdbc:postgresql://localhost:5432/abrigo";
    private static final String USER = "postgres";
    private static final String PASSWORD = "1234";

    public static Connection connect() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }
}