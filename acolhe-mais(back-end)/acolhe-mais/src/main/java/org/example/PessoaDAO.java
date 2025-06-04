package org.example;

import org.example.models.Pessoas;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class PessoaDAO {

    public static List<Pessoas> listar() {
        List<Pessoas> pessoas = new ArrayList<>();
        try (Connection conn = Database.connect()) {
            String sql = "SELECT * FROM pessoas";
            PreparedStatement stmt = conn.prepareStatement(sql);
            ResultSet rs = stmt.executeQuery();

            while (rs.next()) {
                Pessoas p = new Pessoas();
                p.id = rs.getInt("id");
                p.nome = rs.getString("nome");
                p.cpf = rs.getString("cpf");
                p.idade = rs.getInt("idade");
                pessoas.add(p);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return pessoas;
    }

    public static void inserir(Pessoas pessoa) {
        try (Connection conn = Database.connect()) {
            String sql = "INSERT INTO pessoas (nome, cpf, idade) VALUES (?, ?, ?)";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setString(1, pessoa.nome);
            stmt.setString(2, pessoa.cpf);
            stmt.setInt(3, pessoa.idade);
            stmt.executeUpdate();

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public static void deletar(int id) {
        try (Connection conn = Database.connect()) {
            String sql = "DELETE FROM pessoas WHERE id=?";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setInt(1, id);
            stmt.executeUpdate();

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

