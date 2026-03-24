using { cadastrocliente as db } from '../db/schema';
service CadastroService {
    entity Clientes as projection on db.Clientes;
    function RequisicaoCadastro(ID : Integer) returns array of Clientes;
}