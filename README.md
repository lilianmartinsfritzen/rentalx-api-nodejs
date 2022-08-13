## Cadastro de Carros

**Requisitos Funcionais**
Deve ser possível cadastrar um carro.

**Regras de Negócios**
Não deve ser possível cadastrar um carro com uma placa já existente.
Não deve ser possível alterar a placa de um carro já cadastrado.
Deve ser cadastrado, por padrão, como disponível para locação.
Apenas usuário administrador deve poder cadastrar um carro.


## Listagem de carros

**Requisitos Funcionais**
Deve ser possível listar todos os carros disponíveis para locação.
Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
Deve ser possível listar todos os carros disponíveis pelo nome da marca.
Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**Regras de Negócios**
O usuário deve conseguir listar carros disponíveis mesmo não logado.


## Cadastro de especificação do carro

**Requisitos Funcionais**
Deve ser possível cadastrar uma especificação para um carro.
Deve ser possível listar todas as especificações.
Deve ser possível listar todos os carros.

**Regras de Negócios**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
Apenas usuário administrador deve poder cadastrar um carro.


## Cadastro de imagens do carro

**Requisitos Funcionais**
Deve ser possível cadastrar a imagem do carro.
Deve ser possível listar todos os carros.

**Requisitos Não Funcionais**
Utilizar o multer para upload dos arquivos.

**Regras de Negócios**
Apenas usuário administrador deve poder cadastrar uma imagem.
O usuário administrador deve poder cadastrar mais de uma imagem para o mesmo carro.


## Aluguel de carro

**Requisitos Funcionais**
Deve ser possível cadastrar um aluguel.

**Regras de Negócios**
O aluguel deve ter duração mínima de 24 horas.
Não deve ser possível cadastrar um novo aluguel caso já exista uma locação agendada para o mesmo usuário.
Não deve ser possível cadastrar um novo aluguel caso já exista uma locação agendada para o mesmo carro.
