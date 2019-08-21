# Comandos Iniciais

## Básico 01



|  comando | O que faz  | Obs  |
|---|---|---|
|  git config user.name | Mostra qual o usuário cadastrado do git  | Mostra se tiver  |
| $ git config user.email  |  Mostra qual o email cadastrado do git |  Mostra se tiver |
|  $ git config core.editor | Busca seu caminho de editor padrão  |  Como não tem nada, ele irá retornar nada |
|  $ git config core.editor | Busca seu caminho de editor padrão  |  Como não tem nada, ele irá retornar nada |
| $ git config --global core.editor "caminho do seu executável" | Adiciona o executor padrão para que seja possível utiliza-lo | É necessário criar um novo path para abrir pelo gitbash* |
| pwd | Mostra onde você está | Em que local do seu PC você está |
| cd  | ele vai para o caminho digitado após  | |
| ls  | consegue visualizar todos os diretórios e arquivos da pasta  |  |
| mkdir teste | Cria um diretório 'teste'  |  |
| touch exemplo.txt | cria um arquivo exemplo.txt  |  |




* Como criar um caminho para o executável do editor padrão:

1.  Pegue o caminho do seu executável (não pegar o atalho)
2. Vá no painel de controle >> Sistema e Segurança >> Sistema >> Configurações avançdas do sistema >> Variáveis de Ambiente >> novo...>> colocar o nome (no exemplo é Code) e o caminho9 do executável.


## Básico 02

|  comando | O que faz  | Obs  |
|---|---|---|
|  git init | Na pasta atual, inicia um arquivo .git  |   |
| ls -a | mostra o arquivo .git na pasta | |
| ls -a | mostra o arquivo .git na pasta | |


1. Vá na pasta e use botão direito e click here...
2. Após estar na pasta dos seus projetos, (usando pwd), use o comando git init (não esqueça de mostrar os arquivos ocultos) será criado um arquivo .git
3. Na imagem abaixo, é mostrado como é feito um commit.
- O .git faz isso com sua pasta
- git add, faz a 'Criação de um container'
- git status, verifica o que está armazenado no container
- git commit, identifica e armazena o que está no diretório local
- .git tem o que está armazenado(armazenando containers)


|  comando | O que faz  | Obs  |
|---|---|---|
|  git status | mostra o que tem no container  |   |
|  git add | adicionar no container | |
|  git commit -m "Criando seu comentário" | cria seu comentário, comentando | |


![Basico-IMG](img\01-Commit.png)

(ainda não foi subido no github)
O fluxo dos processos:

- Criar o arquivo, utilizar o <strong>git init </strong> na pasta
- Modificar o arquivo, e verificar a modificação através do <strong> git status </strong>
- Através do git log, você pode verificar os commits (é possível ver o hash do commit, Author e outras informações pertinentes, Branch e posição atual)

4. Explicação sobre versionamento

![Versionamento-IMG](img\03-branch.png)

Na imagem acima, é possível ver HEAD - > Master, uma informação importante que será visualziado abaixo

![Versionamento-IMG](img\02-Versionamento.png)

Master - Ramo principal (é possível ter mais ramos, para possíveis modificações sem a alteração )
Head - Posição do commit atual (sempre o último commit)

|  comando | O que faz  | Obs  |
|---|---|---|
|  git log | mostra os commits e informações adicionais  |  Utilize o q, para sair do git log  |
|  git log --graph | mostra o gráfico de commits | |
|  code . | Para abrir o vsc no projeto | |
|  git commit -am "Digite seu comments" | Para abrir o vsc no projeto | |
|  git branch | Mostra qual branch você está | |


- Uma coisa que deve ser verificada no fluxo é:

Ao alterar algum arquivo, você irá verificar com <strong>git status </strong> que houve uma modificação de arquivos.

![Versionamento-IMG](img\04-modificado.png)

Ao verificar os logs, você pode visualizar que não há commit desta modificação


![Versionamento-IMG](img\05-log.png)


Na figura abaixo, é utilizada o commit sem utilizar o add.
Isso é possível pois é utilizado o -am

![Versionamento-IMG](img\06-am.png)

5. Rastreando as versões dos projetos

É necessário utilizar o Head e apontar ele para o commit desejado para que seja possível verificar este nó.
|  comando | O que faz  | Obs  |
|---|---|---|
|  git log --oneline  | Retorna de forma rápida,os commits e seus hashs  |   |
|  git checkout hash | Colocar no hash o hash específico do commit | |
|  git checkout master | colocar na última versão (master) | |
|  git diff | mostra as alterações que não foram inseridas ainda | |
|  git checkout -f | Utilização para desfazer todas as alterações depois do último commit | |
|  git reset --hard hash | Substitua o hash pelo hash(do git log --oneline) específico para excluir um commit | 

Abaixo é possível verificar:

- Com o <strong> git log--online </strong> vemos o log resumido
- Com o <strong> git checkout 6ba37be </strong> é a identificação do log passado, e neste momento eu aponto o HEAD para ele. Portanto todos os arquivos do repositório são voltados para este ponto.
- Com o <strong> git branch </strong>, é possível visualizar onde estou e o git me avisa sobre ter saído da última versão (antigo Head).
- Com o <strong> git checkout master </strong> eu volto para onde já estava com a última versão

Como boas prática, verifique se você está na branch correta e ver se o HEAD está apontando para o último commit

![Versionamento-IMG](img\07-versionamento.png)

6. Ramos e unificação

|  comando | O que faz  | Obs  |
|---|---|---|
|  git checkout -b nomeramo  | Criação de um novo ramo | Por padrão, todos os commits serão atribuidos a ele   |
|  git log --graph --all | Mostra o graph de todos os branchs |  |
|  git merge nomeramo | Faz a fuzão das duas branchs| Caso apareça o conflito, é necessário você verificar o arquivo em questão |

Sobre os ramos:
- Á partir da criação de ramos, o 'nomeramo' herda todos os commits até agora(master).
- Após isso, é gerado um novo caminho (é possível verificar pelo git branch )
- Realizada todas as alterações(possível ver os ramos pelo comando git log--graph --all), é possível unir os dois ramos (commit nomeramo e commit head anterior)
- Para unir os dois, é necessário estar no ramo master (git checkout master após commitado uma nova versão conforme ilustração abaixo) 
- <strong> git merge nomeramo </strong> com isso, será unido os branchs. Porém poderá haver duplicidade de arquivos (arquivos com nomes iguais, porém conteúdos diferentes)
- Abra o arquivo que será mostrado no editor opções para que seja possível unir, descartar operações, etc
- Para finalmente resolver estes conflitos, é necessário ver no <strong>git status</strong> ele mostrará a mensagem de que há um conflito e não foi utilizado o merge
- Aceitando as mudanças no editor, você pode usar o <strong> git add .</strong> para inserir as mudanças conforme o git status mostra e usar o <strong> git commit -m "fusão dos ramos"</strong>
- Quando o commit é efetuado com sucesso, a representação será a segunda figura


![Versionamento-IMG](img\08-versones.png)


- Representação do Merge:

![Versionamento-IMG](img\09-merge.png)


7. Subindo no GITHUB

