namespace cadastrocliente;

entity Clientes {
    key ID    : Integer;
    Nome      : String(100);
    Sobrenome : String(100);
    Email     : String(150);
    Cidade    : String(80);
}