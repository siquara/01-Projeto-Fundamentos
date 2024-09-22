# Event Organizer

## Descrição

O **Event Organizer** é uma aplicação web que facilita a organização de participantes em eventos. Com ele, o usuário pode adicionar novos participantes, remover participantes existentes e verificar automaticamente se um participante já foi cadastrado. Este organizador é ideal para quem busca uma maneira eficiente de gerenciar listas de presença para eventos de qualquer tamanho.

## Funcionalidades

- **Adicionar Participantes**: Registre novos participantes na lista do evento.
- **Remover Participantes**: Remova participantes da lista conforme necessário.
- **Verificar Duplicação**: O sistema verifica se o participante já foi cadastrado, evitando entradas duplicadas.

## Tecnologias Utilizadas
[![My Skills](https://skillicons.dev/icons?i=typescript,react,git,github)](https://github.com/siquara)

## Instalação

Para rodar o **Event Organizer** em sua máquina local, siga os passos abaixo:

1. **Clone o Repositório**

    ```bash
    git clone https://github.com/siquara/event-organizer.git
    ```

2. **Navegue para o Diretório do Projeto**

    ```bash
    cd event-organizer
    ```

3. **Instale as Dependências**

    ```bash
    npm install
    ```

4. **Inicie o Servidor de Desenvolvimento**

    ```bash
    npx expo start
    ```

## Uso

1. **Adicionar Novo Participante**:
   - No input, insira o nome do participante e clique no "+".
   - O sistema verifica automaticamente se o participante já foi cadastrado.

2. **Remover Participante**:
   - Clique no botão de "-" ao lado do nome do participante que deseja excluir da lista.

3. **Verificar Participantes**:
   - O sistema não permite adicionar um participante que já esteja na lista, garantindo a consistência dos dados.

