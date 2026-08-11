# README - lib-ui

## Descrição

Biblioteca de componentes React compartilhados.

Componentes disponíveis:

* Button
* Input
* Modal

---

## Tecnologias

* React
* TypeScript
* Vite

---

## Instalação Local

### 1. Clonar o repositório

```bash
git clone https://github.com/guifrancini/lib-ui.git
cd lib-ui
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Gerar build

```bash
npm run build
```

Será criada a pasta:

```text
dist/
```

com os componentes compilados.

---

## Gerando pacote local (.tgz)

```bash
npm pack
```

Exemplo:

```text
guifrancini-lib-ui-1.0.0.tgz
```

---

## Consumindo localmente

Em outro projeto React:

```bash
npm install ../lib-ui/guifrancini-lib-ui-1.0.0.tgz
```

---

## Exemplo de Uso

```tsx
import { Button, Input, Modal } from "@guifrancini/lib-ui";

function App() {
  return (
    <>
      <Button>Salvar</Button>

      <Input placeholder="Digite seu nome" />

      <Modal open={true}>
        Conteúdo do Modal
      </Modal>
    </>
  );
}

export default App;
```

---

## Publicação no GitHub Packages

### Configurar .npmrc

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

Após publicar:

```bash
npm install @guifrancini/lib-ui
```

---

## Estrutura do Projeto

```text
src/
├── components/
│   ├── button.tsx
│   ├── input.tsx
│   └── modal.tsx
└── index.ts
```

---

## Fluxo de Desenvolvimento

1. Criar ou alterar componentes.
2. Exportar os componentes no `index.ts`.
3. Executar:

```bash
npm run build
```

4. Testar localmente.
5. Incrementar versão:

```bash
npm version patch
```

6. Publicar:

```bash
npm publish
```

---

## Objetivo

Esta biblioteca foi criada para centralizar componentes reutilizáveis e facilitar o compartilhamento entre múltiplos projetos e microfrontends.
