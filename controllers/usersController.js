const getUsers = (req, res, next) => {
    const users = [
        {
            nome: 'Fulano',
            idade: 19
        },
        {
            nome: 'Igor',
            idade: 26
        },
        {
            nome: 'Jaqueline',
            idade: 24
        }
    ];

    res.send('<h1>Usuários:</h1>');
}

module.exports = {
    getUsers
}