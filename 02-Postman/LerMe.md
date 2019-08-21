# Utilização

## - As collections no Postman são requisições que fiz como teste ou para implantar no Cronapp
### - Para utiliza-los, você deve importa-los no postman

<br>
#### Interessante ressaltar algumas requisições:


1. FunctionsDash.json
    - criaToken - É uma função no projeto do CRONAPP(FUNCIONALIDADE CRIADA POIS O CRONAPP NÃO TEM AUTENTICAÇÃO POR ENDPOINT 'NATIVO') - Dash (BLoco de programação>> EndPoint) que te retorna uma espécie de token para utilizar o endpoint de contagem de inscrição
    - contaInscrição - É uma função projeto do CRONAPP - Dash (BLoco de programação>> EndPoint) que você deve utilizar para contagem(insere no banco), ele deve receber 3 parâmetros para que seja possível gravar
    - apagaToken - Após a criação de token, deverá ser necessário apaga-lo para não gerar duplicidade

2. RDStationIntegracao.json
    - As 3 requisições são referentes ao ![RD Station Doc](https://developers.rdstation.com/pt-BR/authentication)
    - Foi implementado no fluxo do cronapp(Projeto ChatBot) através de bloco.
    - Para tudo ocorrer ok, será necessário ter um APP (conta do Humberto)

3. WatsonAPi.json
    - Estas requisições fazem o processo de captação de dados do I AM da Bluemix
    - Necessário utilizar as credenciais da conta pagante
    - O passo-a-passo estão nestes documentos: ![Doc Watson IAM](https://cloud.ibm.com/apidocs/iam-identity-token-api)

4. WatsonFilter.json
    - Exemplo prático para filtros nos logs, implantado no projeto Dash
    - O passo-a-passo estão nestes documentos: ![Doc Watson Assistant V1](https://cloud.ibm.com/apidocs/assistant)

5.WatsonAssistFunctions.json
    - O exemplo prático de pegar informações básicas de alguma workspace
    - O passo-a-passo estão nestes documentos: ![Doc Watson Assistant V1](https://cloud.ibm.com/apidocs/assistant)