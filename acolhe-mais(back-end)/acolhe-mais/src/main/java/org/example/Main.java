package org.example;

import static spark.Spark.*;
import com.google.gson.Gson;
import org.example.models.Pessoas;
import org.example.models.Recursos;

import java.util.List;

public class Main {
    public static void main(String[] args) {
        port(8080);
        Gson gson = new Gson();

        enableCORS();


        get("/pessoas", (req, res) -> {
            res.type("application/json");
            List<Pessoas> pessoas = PessoaDAO.listar();
            return gson.toJson(pessoas);
        });

        post("/pessoas", (req, res) -> {
            res.type("application/json");
            Pessoas pessoa = gson.fromJson(req.body(), Pessoas.class);
            PessoaDAO.inserir(pessoa);
            return gson.toJson(pessoa);
        });

        delete("/pessoas/:id", (req, res) -> {
            res.type("application/json");
            int id = Integer.parseInt(req.params(":id"));
            PessoaDAO.deletar(id);
            return "Pessoa deletada com sucesso";
        });


        //=====================================================
        //==================Recursos===========================
        //=====================================================

        get("/recursos", (req, res) -> {
            res.type("application/json");
            List<Recursos> recursos = RecursoDAO.Listar();
            return gson.toJson(recursos);
        });

        post("/recursos", (req, res) -> {
            res.type("application/json");
            Recursos recurso = gson.fromJson(req.body(), Recursos.class);
            RecursoDAO.inserir(recurso);
            return gson.toJson(recurso);
        });

        delete("/recursos/:id", (req, res) -> {
            res.type("application/json");
            int id = Integer.parseInt(req.params(":id"));
            RecursoDAO.deletar(id);
            return "Recurso deletado com sucesso";
        });

    }


    private static void enableCORS() {
        options("/*", (request, response) -> {
            String accessControlRequestHeaders = request.headers("Access-Control-Request-Headers");
            if (accessControlRequestHeaders != null) {
                response.header("Access-Control-Allow-Headers", accessControlRequestHeaders);
            }

            String accessControlRequestMethod = request.headers("Access-Control-Request-Method");
            if (accessControlRequestMethod != null) {
                response.header("Access-Control-Allow-Methods", accessControlRequestMethod);
            }

            return "OK";
        });

        before((request, response) -> {
            response.header("Access-Control-Allow-Origin", "*"); // Permite qualquer origem
            response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
            response.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
            response.type("application/json");
        });
    }
}
