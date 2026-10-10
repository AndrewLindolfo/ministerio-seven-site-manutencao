# Ministério Seven — Página temporária de manutenção

Site estático, independente do Firebase, sem login, sem painel e sem páginas internas.
Identidade visual reproduzida a partir do repositório oficial (apenas leitura):
https://github.com/AndrewLindolfo/ministerio-seven-site

## Previsão exibida
**15/10/2026, 00h00, horário de Rondônia (UTC−4).**
O contador considera esse instante absoluto, mesmo que o visitante esteja em outro fuso.
O relógio do dispositivo do visitante determina a contagem: não há serviço de horário no servidor.

## Funcionalidades
- Logo V7, logos claro/escuro, banners e favicon originais copiados para este repositório.
- Alternância claro/escuro, gravada na mesma chave 'seven_theme' do site oficial.
- Aviso de manutenção e cronômetro de dias, horas, minutos e segundos.
- Layout responsivo e link oficial do Instagram.
- Página de erro 404 redireciona para a manutenção.
- Sem bibliotecas de terceiros, dependências, Firebase ou chamadas de API.
- Meta noindex temporária para a página de manutenção.

## Publicar
1. Em Settings > Pages deste repositório, escolher **Deploy from a branch**.
2. Selecionar **main** e a pasta **/(root)**; salvar.
3. Testar na URL do GitHub Pages antes de apontar o domínio principal.
4. Somente na mudança planejada, ajustar o domínio/DNS e, se necessário, o arquivo CNAME para a página temporária. Não modificar o repositório do site principal durante a criação/testes.
5. Quando o site voltar, publicar o site oficial e restaurar o domínio para ele.

**Importante:** o cronômetro chegar a zero NÃO restaura automaticamente o site oficial nem altera DNS ou GitHub Pages. Nesse instante a página mostra uma mensagem informando que os ajustes estão sendo finalizados.

Nenhuma configuração de domínio customizado foi adicionada aqui para evitar interferir no domínio atualmente vinculado ao site oficial.
