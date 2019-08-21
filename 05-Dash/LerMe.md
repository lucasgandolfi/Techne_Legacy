# Utilização

## 1 - Dash- Utilização

### O que a Dash Entrega:

1 - Total de pessoas que passaram desde o início do bot
    - Pega todos os Log_id das conversas

2 - Total de pessoas no mês
    - Pega todos os Log_id Filtrado por mês 

3 - Conversas Watson Mês
    - Calls através da API

4 - Acesso do mês/dia(gráfico)
    - Gráfico gerado através dos acessos de 15 dias.

5 - Intenções mais usadas
    - Intenções mais usadas, no mês

6 - Status Bot
    - Ping: nos serviços

### O job roda chamando o bloco: 'job_rodando_incial' na área root

### Este job é chamado pelo eventos e ações(artifício pois os agendadores estavam com problemas)

### São chamados 4 jobs:
    - Backup_logs - traz um backup de logs que não foram inseridos no BD (necessário fazer mais testes)
    - Update_calls - Atualiza as calls, a cada 10 minutos
    - Update_intents - Atualiza as intenções conforme é lido o JSON
    - Verifica_bd - verifica no BD se houve erro no job Update_intents e verifica se houve erro no job Update_calls

### todas as outras funcionalidades foram abstrações da  API do watson

![Api Watson Link](https://cloud.ibm.com/apidocs/assistant)