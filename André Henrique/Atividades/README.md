# 📚 Biblioteca Digital - Design System & Interface

> Um sistema de design completo com fluxo navegável para uma plataforma de gerenciamento de empréstimos de livros.

## 📋 Sobre o Projeto

Este repositório contém o design system estruturado e prototipagem de uma aplicação web/mobile para gerenciamento de bibliotecas digitais. O projeto implementa um Design System robusto baseado em **Material Design 3** com suporte a Light Mode e Dark Mode.

**Acesso ao Figma:** [Meu Produto - Figma](https://figma.com/design/WHkCN41xeJZuk2pHV3EcI2/Meu-Produto)

---

## 🎨 Design System Estruturado

### 1. **Paleta de Cores**

#### Light Mode 🌞

| Cor | Hex | Uso |
|-----|-----|-----|
| **Primary** | `#003659` | Botões primários, links, destaques |
| **Secondary** | `#006576` | Elementos secundários, badges |
| **Tertiary** | `#914D00` | Acentos, ícones especiais |
| **Background** | `#F9F9FD` | Fundo geral da aplicação |
| **OnBackground** | `#191C1F` | Texto sobre fundo |
| **OnSurface** | `#191C1F` | Texto sobre superfícies |
| **Error** | `#BA1A1A` | Mensagens de erro, alertas |

#### Dark Mode 🌙

| Cor | Hex | Uso |
|-----|-----|-----|
| **Primary** | `#98CBFF` | Botões primários em dark |
| **Secondary** | `#70D4EC` | Elementos secundários em dark |
| **Tertiary** | `#FFB77E` | Acentos em dark |
| **Background** | `#111417` | Fundo geral em dark |
| **OnBackground** | `#E1E2E6` | Texto em dark |
| **OnSurface** | `#E1E2E6` | Texto sobre superfícies em dark |
| **Error** | `#FFB4AB` | Erros em dark mode |

**Tema Exportado de:** Material Theme Builder (2026-08-25)  
**Seed Color:** `#0A4D7A`

---

### 2. **Tipografia**

Um sistema tipográfico de 5 estilos base mantendo hierarquia clara e legibilidade:

| Estilo | Tamanho | Peso | Line-Height | Uso |
|--------|---------|------|-------------|-----|
| **Title** | 28px | 500 (Medium) | 1.2x | Títulos principais de páginas |
| **Headline** | 24px | 500 (Medium) | 1.3x | Títulos de seções, cards principais |
| **Subtitle** | 16px | 500 (Medium) | 1.4x | Subtítulos, cabeçalhos de grupos |
| **Body** | 14px | 400 (Regular) | 1.5x | Texto corpo, descrições |
| **Button** | 14px | 500 (Medium) | 1.0x | Labels de botões, CTAs |

**Fonte Principal:** Inter (ou similar sans-serif)  
**Espaçamento Base:** 8px grid

---

### 3. **Componentes Reutilizáveis**

#### Botões

**Variantes disponíveis:**

```
Primary (Filled)
├─ Estado: Default, Hover, Pressed, Disabled
├─ Cores: Primary (#003659 Light | #98CBFF Dark)
└─ Padding: 12px 24px | 16px 32px (L)

Secondary (Outlined)
├─ Estado: Default, Hover, Pressed, Disabled
├─ Cores: Secondary (#006576 Light | #70D4EC Dark)
└─ Border: 2px solid

Tertiary (Ghost)
├─ Estado: Default, Hover, Pressed, Disabled
├─ Cores: Tertiary (#914D00 Light | #FFB77E Dark)
└─ Sem preenchimento
```

**Tamanhos:**
- Small: 24px altura
- Medium: 40px altura (padrão)
- Large: 48px altura

#### AppBar

**Componente de navegação superior com:**

- Logo/Título da aplicação
- Menu hambúrguer (mobile)
- Botão de alternância Light/Dark Mode
- Ícones de ação contextuais
- Responsividade: Desktop (64px) | Mobile (56px)

**Variantes:**
- `AppBar - Light Mode` (Fundo branco, texto escuro)
- `AppBar - Dark Mode` (Fundo escuro, texto claro)

#### Componentes Adicionais

- **Card** - Contêiner para conteúdo agrupado
- **Chip** - Tags/filtros interativos
- **TextField** - Campos de entrada
- **Icon Button** - Botões apenas com ícone
- **Navigation Rail** - Menu lateral (desktop)

---

## 🗂️ Estrutura do Protótipo

### Páginas Desenvolvidas

```
Design System
├─ Paleta de Cores (Light & Dark)
├─ Tipografia (5 estilos)
└─ Componentes Base

Protótipos
├─ 📱 Login
│  └─ Tela de autenticação com AppBar
├─ 📱 Dashboard - Recentes
│  ├─ AppBar com toggle de tema
│  ├─ Lista de empréstimos recentes
│  └─ Filtros por status
├─ 📱 Dashboard - Atrasados
│  ├─ Alertas de livros atrasados
│  └─ Opções de renovação
└─ 📱 Detalhes do Livro (em desenvolvimento)
```

### Fluxo de Navegação

```
┌─────────────┐
│    Login    │
└──────┬──────┘
       │
       ▼
┌────────────────────┐
│ Dashboard Recentes │ ◄──────┐
├────────────────────┤        │
│ - AppBar Light     │        │
│ - Lista de livros  │        │
│ - Filtros ativos   │        │
└──────┬─────────────┘        │
       │                      │
       ▼                      │
┌────────────────────┐        │
│ Dashboard Atrasados│────────┘
├────────────────────┤
│ - AppBar Dark      │
│ - Alertas urgentes │
│ - Renovar livros   │
└────────────────────┘
```

**Transições:**
- Navegação entre dashboards via botões/menu
- Modo dark/light alternável na AppBar
- Resposta responsiva em mobile e desktop

---

## ✅ Checklist de Conformidade

Pré-requisitos antes do envio final:

### Cores
- [x] Primary, Secondary, Tertiary definidas
- [x] Background e OnBackground implementados
- [x] OnSurface adicionado em paleta
- [x] Light Mode (#003659, #006576, #914D00)
- [x] Dark Mode (#98CBFF, #70D4EC, #FFB77E)

### Tipografia
- [x] Headline: 24px | 500 weight | 1.3x leading
- [x] Subtitle: 16px | 500 weight | 1.4x leading
- [x] Body: 14px | 400 weight | 1.5x leading
- [x] Button: 14px | 500 weight
- [x] Title: 28px | 500 weight | 1.2x leading (NOVO)
- [x] Espaçamento consistente (8px grid)

### Componentes
- [x] Button Primary com variantes
- [x] Button Secondary com outline
- [x] Button Tertiary (ghost style)
- [x] AppBar básica (Light)
- [x] AppBar Dark com tema alternável
- [x] Estados: Default, Hover, Active, Disabled

### Protótipo Navegável
- [x] Login screen com AppBar
- [x] Dashboard - Recentes com AppBar Light
- [x] Dashboard - Atrasados com AppBar Dark
- [x] Navegação entre telas funcional
- [x] Consumo de variáveis em componentes
- [x] Fluxo interativo completo

---

## 🎯 Objetivos Alcançados

✅ **Design System Estruturado**
- Paleta de cores completa (Light/Dark)
- Sistema tipográfico padronizado
- Componentes reutilizáveis com variantes

✅ **Componentes Implementados**
- 3 variantes de botões (Primary, Secondary, Tertiary)
- AppBar profissional com suporte a dark mode
- Estados visuais (default, hover, active, disabled)

✅ **Protótipo Navegável**
- 3 telas principais funcionais
- Fluxo de navegação intuitivo
- Integração com componentes e variáveis

✅ **Documentação Completa**
- Design tokens bem definidos
- Estilos tipográficos documentados
- Guia de uso de componentes

---

## 🚀 Como Usar

### Para Designers

1. **Acessar Figma:**
   - URL: [Meu Produto - Figma](https://figma.com/design/WHkCN41xeJZuk2pHV3EcI2/Meu-Produto)
   - Página: "Design System" - Paleta de cores e tipografia
   - Página: "Protótipos" - Telas navegáveis

2. **Inspecionar Componentes:**
   - Abrir modo Inspector (clique direito → Inspect)
   - Copiar estilos e propriedades
   - Aplicar em novos designs

3. **Criar Novas Telas:**
   - Usar AppBar como base
   - Consumir cores da paleta
   - Manter tipografia padrão

### Para Desenvolvedores

1. **Importar Cores:**
   ```css
   /* Light Mode */
   --color-primary: #003659;
   --color-secondary: #006576;
   --color-tertiary: #914D00;
   --color-background: #F9F9FD;
   --color-on-background: #191C1F;
   
   /* Dark Mode */
   @media (prefers-color-scheme: dark) {
     --color-primary: #98CBFF;
     --color-secondary: #70D4EC;
     --color-tertiary: #FFB77E;
     --color-background: #111417;
     --color-on-background: #E1E2E6;
   }
   ```

2. **Estilos Tipográficos:**
   ```css
   .title { font-size: 28px; font-weight: 500; line-height: 1.2; }
   .headline { font-size: 24px; font-weight: 500; line-height: 1.3; }
   .subtitle { font-size: 16px; font-weight: 500; line-height: 1.4; }
   .body { font-size: 14px; font-weight: 400; line-height: 1.5; }
   .button { font-size: 14px; font-weight: 500; line-height: 1.0; }
   ```

3. **Componentes Button:**
   ```jsx
   <Button variant="primary" size="medium">
     Entrar
   </Button>
   
   <Button variant="secondary" size="large">
     Cancelar
   </Button>
   ```

---

## 📁 Estrutura do Repositório

```
projeto-biblioteca-digital/
├── README.md (este arquivo)
├── design-system/
│   ├── colors.json
│   ├── typography.json
│   ├── components/
│   │   ├── button.json
│   │   └── appbar.json
│   └── tokens.json
├── figma/
│   └── Meu-Produto.figma
└── docs/
    ├── guia-componentes.md
    ├── guia-cores.md
    └── guia-tipografia.md
```

---

## 🎓 Referências & Recursos

- **Material Design 3:** https://m3.material.io/
- **Material Theme Builder:** https://www.materialpalette.com/
- **Acessibilidade (WCAG):** https://www.w3.org/WAI/WCAG21/quickref/

---

## 👥 Contribuição

Para contribuir com melhorias no design system:

1. Mantenha consistência com paleta de cores definida
2. Respeite os estilos tipográficos estabelecidos
3. Documente novas variantes de componentes
4. Teste em Light Mode e Dark Mode
5. Verifique contraste de acessibilidade (WCAG AA mínimo)

---

## 📝 Histórico de Versões

### v1.0.0 - 2026 (Atual)
- ✅ Design System completo
- ✅ Cores Light & Dark com onSurface
- ✅ Tipografia padronizada (5 estilos + Title)
- ✅ Componentes reutilizáveis
- ✅ Protótipos navegáveis
- ✅ AppBar com variante Dark Mode

---

## 📧 Contato & Suporte

- **Figma:** [Link do Projeto](https://figma.com/design/WHkCN41xeJZuk2pHV3EcI2/Meu-Produto)
- **Design System:** Consulte a documentação em `docs/`
- **Issues:** Reporte problemas de design no GitHub

---

<div align="center">

**Desenvolvido com ❤️ para a Biblioteca Digital**

*Design System v1.0 | Material Design 3 | 2026*

</div>
