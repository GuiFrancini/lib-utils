# README - lib-utils

## Descrição

Biblioteca de utilitários compartilhados para aplicações frontend.

Atualmente contém funções para:

* Formatação de CPF
* Formatação de telefone

---

## Instalação Local

### 1. Clonar o repositório

```bash
git clone https://github.com/guifrancini/lib-utils.git
cd lib-utils
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Gerar a build da biblioteca

```bash
npm run build
```

Após a build será criada a pasta:

```text
dist/
```

contendo os arquivos JavaScript e TypeScript utilizados pelos consumidores da biblioteca.

---

## Gerando pacote local (.tgz)

Para testar a biblioteca sem publicar:

```bash
npm pack
```

Será gerado um arquivo semelhante a:

```text
guifrancini-lib-utils-1.0.5.tgz
```

---

## Consumindo localmente

Em outro projeto:

```bash
npm install ../lib-utils/guifrancini-lib-utils-1.0.5.tgz
```

Exemplo:

```ts
import { formatCpf, formatPhone } from "@guifrancini/lib-utils";

console.log(formatCpf("12345678901"));
console.log(formatPhone("11999999999"));
```

---

## Publicação no GitHub Packages

### Configurar .npmrc

Criar um arquivo `.npmrc`:

```text
@guifrancini:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=SEU_TOKEN
```

### Publicar

```bash
npm version patch
npm publish
```

---

## Instalação via GitHub Packages

Após a publicação:

```bash
npm install @guifrancini/lib-utils
```

---

## Estrutura do Projeto

```text
src/
├── formatCpf.ts
├── formatPhone.ts
└── index.ts
```

---

## Exemplo de Uso

```ts
import { formatCpf } from "@guifrancini/lib-utils";

const cpf = formatCpf("12345678901");

console.log(cpf);
// 123.456.789-01
```
