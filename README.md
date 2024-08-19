<h1 align='center'>Coffee Delivery - BackEnd Node</h1>

<div align='center'>

  [Descrição](#descrição)
  |
  [Demo](#demo-gif)
  |
  [Iniciando](#iniciando)
  |
  [Dependências](#dependências)
  |
  [Rotas](#rotas)
  |
  [Licença](#licença)

</div>

<div align='center'>
  <img src='https://img.shields.io/github/license/matheus369k/coffee-delivery-api.svg'/>
  <img src='https://img.shields.io/github/watchers/matheus369k/coffee-delivery-api.svg' />
</div>

## Demo Gif

<div align='center'>
  <img src='.github/coffee-delivery-projetc-view.gif' />
</div>

## Descrição

A aplicação e o backend do repositório [coffee-delivery](https://github.com/matheus369k/coffee-delivery). Site de compra de cafe com diferentes formas de preparo, feita direto pelo site, recebendo direto em casa sem precisar sair de casa. 

- Registro de endereço de usuário.
- Atualização de endereço.
- Lista compra vinculada ao usuário.
- Filtro de variedade de cafe.
- Registro de novos produtos.

## Dependências

- Git - [baixar](https://git-scm.com)
- Node - [baixar](https://nodejs.org/pt)
- VSCode ( Recomendado ) - [baixar](https://code.visualstudio.com)
- Front-end ( Recomendado ) - [repositório](https://github.com/matheus369k/coffee-delivery)

## Iniciando

Para testar o projeto na sua maquina, recomenda-se clonar o repositório em uma pasta local, como seguinte comando.

Digite no terminal

__HTTPS__
```
$ git clone https://github.com/matheus369k/coffee-delivery-api.git
```

Acesse o projeto com seguinte comando 

```
$ coffee-delivery-api
```

crie um arquivo __.env__ e adicione as variáveis ambiente a seguir

```
// url banco de dados
DATABASE_URL="postgresql://usuario:senha@host:porta/nome_do_banco
"

// Port o valor padrão e 3333
PORT=3333
```

Acesse o terminal do projeto e digite 

```
$ npm install
```

Logo apos digite

```
$ npx prisma generate dev
```

E por fim digite...

```
$ npm run dev
```
para rodar aplicação, agora voce pode inserir na rota:
```
Metodo: Post 
Rota: /coffees 
``` 
os dados disponibilizados em __[db.json](./db.json)__ ou criar seu próprios dados de produto seguindo a estrutura abaixo

```
{
    "name": "Árabe",
    "tags": ["Especial"],
    "slugs": ["especial"],
    "image": "https://github.com/matheus369k/matheus369k.github.io/blob/main/coffee-delivery-images/%C3%A1rabe.png?raw=true",
    "description": "Bebida preparada com grãos de café árabe e especiarias",
    "price": "9,90"
}
```

## Rotas
__Método HTTP GET__<br/>
Coletar todos os produtos
```
/coffees
```
Filtrar pelo slug
```
/coffees/:slug
```
Coletar dados: Cidade e UF
```
/location/:addressId
```
Coletar endereço
```
/user/:addressId
```
Coleta de informações de confirmação de compra
```
/shopping/:shoppingId
```
__Método HTTP POST__<br/>
Registrar novos produtos
```
/coffees
```
Registrar Endereço
```
/user/register
```
Registar compra
```
/shopping/:addressId
```

__Método HTTP PUT__<br/>
Atualizar Endereço
```
/user/:addressId
```

## 📜Licença

Para o projeto fora usado a licença 🔗[MIT](/LICENSE.txt).