# mean-delta
Source code from MEAN Stack module - Faculdade Delta

Foram implementados todos os requisitos:

Trabalho em Grupo: ** (Disponível na Tag 1.0.0) **
- Fazer FORK de https://github.com/atilla8huno/mean-delta
- Implementar um botão azul (bootstrap) na tela de Histórico, para cada registro da lista
- O botão deve fazer a aplicação navegar através de rotas até a página de Consulta de Domínios (Mapa)
- Ao entrar na página, a consulta pelo domínio/IP deve ser realizada automaticamente para o registro selecionado no histórico
- O domínio/IP deve ser passado por parâmetro ao navegar da tela de Histórico para a tela de Mapa


Trabalho Final Individual: ** (Disponível na Tag 2.0.0) **
- Fazer FORK de https://github.com/atilla8huno/mean-delta
- Implementar um botão vermelho (bootstrap) na tela de Histórico, para cada registro da lista
- O botão deve realizar a exclusão do registro selecionado fazendo uma requisição HTTP (Method DELETE) para o backend
- Deve ser implementado no backend (host-map-api) a respectivo API para receber o ID do registro selecionado por parâmetro
- A API deve excluir o registro passando o ID para o Service, que por sua vez deve excluir o registro no MongoDB usando o Mongoose (igual demais exemplos)
- Ao retornar da requisição HTTP para o callback de sucesso (Observable, subscribe), o registro selecionado/excluído deve ser removido da lista na tela (Array > splice)


Trabalho de Reposição do Trabalho em Grupo ** (Disponível na Tag 1.0.0) **
- Fazer FORK de https://github.com/atilla8huno/mean-delta
- Implementar o Trabalho em Grupo descrito acima (individual)

Trabalho de Reposição de Aula ** (Disponível na Tag 3.0.0  == master) **
- Fazer FORK de https://github.com/atilla8huno/mean-delta
- Implementar o Trabalho em Grupo
- Impedir que seja salvo um novo registro de Histórico quando o domínio/IP foi pesquisado através do botão azul na tela de Histórico


Observação: Valendo ressaltar que todas requisições que utilizavam o serviço HttpClientService foram encapsulados por serviços distintos de pesquisa de domínio e manipulação de históricos, tornando assim o código mais coeso e de melhor manutenção.
