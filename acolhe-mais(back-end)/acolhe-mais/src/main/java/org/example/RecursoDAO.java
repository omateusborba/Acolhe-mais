package org.example;

import org.example.models.Recursos;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class RecursoDAO {
    public static List<Recursos> Listar() {
        List<Recursos> recursos = new ArrayList<>();
        try (Connection conn = Database.connect()) {
            String sql = "SELECT * FROM recursos";
            PreparedStatement stmt = conn.prepareStatement(sql);
            ResultSet rs = stmt.executeQuery();

            while (rs.next()) {
                Recursos r = new Recursos();
                r.id = rs.getInt("id");
                r.nome = rs.getString("nome");
                r.quantidade = rs.getInt("quantidade");
                r.tipo = rs.getString("tipo");
                recursos.add(r);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return recursos;
    }

    public static void inserir(Recursos recursos) {
        try (Connection conn = Database.connect()) {
            String sql = "INSERT INTO recursos (nome, quantidade, tipo) VALUES (?, ?, ?)";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setString(1, recursos.nome);
            stmt.setInt(2, recursos.quantidade);
            stmt.setString(3, recursos.tipo);
            stmt.executeUpdate();

        } catch (SQLException e){
            e.printStackTrace();
        }

    }

    public static void deletar(int id) {
        try (Connection conn = Database.connect()) {
            String sql = "DELETE FROM recursos WHERE id=?";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setInt(1, id);
            stmt.executeUpdate();
        } catch (SQLException e){
            e.printStackTrace();
        }
    }
}
