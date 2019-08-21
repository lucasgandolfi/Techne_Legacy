function verificar(){

    var verificacao = false;

    if( $("#img_URL").val()==""||
        $("#img_Message").val()==""||
        $("#url_Url").val()==""||
        $("#text_Url").val()==""||
        $("#data_QuickReply").val()==""||
        $("#text_QuickReply").val()==""){
                  
            verificacao = false;
    }else{
        verificacao = true;
    }

    return verificacao;
}



//=========================================
//01 - passa por todas as verificações e combinações
//=========================================
function verificadorMaster(){


    // Referências para Buscar
    var vetor = [];
    vetor.push(verificaImg());
    vetor.push(verificaUrl());
    vetor.push(verificaQuick());

    console.log(vetor);
    alert(`
            Foram encontrados os seguintes erros:
            - ${vetor[0]}
            - ${vetor[1]}
            - ${vetor[2]}
            `
            );
}

//=========================================
//02 - Verificação - Não pode ter um elemento sem Legenda ou Data
//=========================================
function verificaImg(){
    msg = "";

    if ($("#img_URL").val()!="" &&
        $("#img_Message").val()==""||
        $("#img_URL").val()==""){
            msg = "A imagem está com falta de informações";
        }

        return(msg);
}

function verificaUrl(){
    msg = "";

    if ($("#url_Url").val()!="" &&
        $("#text_Url").val()==""||
        $("#url_Url").val()==""){
            msg = "A url está com falta de informações";
            
        }

        return(msg);
}

function verificaQuick(){
    msg = "";

    if ($("#data_QuickReply").val()!="" &&
        $("#text_QuickReply").val()==""||
        $("#data_QuickReply").val()==""){
            msg = "O quick está com falta de informações";
            
        }

        return(msg);
}
//=========================================
//03 - Possíveis combinações dos elementos
//=========================================

//IMG e QUick


//IMG e URL

//QUICK sozinho

/*
var telefones = [64992072564, 64992573900, 64992824568, 64994077908, 32312323];

var data = { "teste":
              [{"Codigo":1233123,"Telefone":64992072564},
              {"Codigo":5345345,"Telefone":64992323232},
              {"Codigo":34234,"Telefone":64992573900},
              {"Codigo":423453,"Telefone":64992824568},
              {"Codigo":534,"Telefone":64993075236},
              {"Codigo":31231,"Telefone":64993325904},
              {"Codigo":5345345,"Telefone":64993576572},
              {"Codigo":312312,"Telefone":64993827240},
              {"Codigo":5345,"Telefone":64994077908},
              {"Codigo":3123,"Telefone":64994328576},
              {"Codigo":4353453,"Telefone":64994579244},
              {"Codigo":31231,"Telefone":64994829912},
              {"Codigo":645645,"Telefone":64995080580},
              {"Codigo":4234234,"Telefone":64995331248},
              {"Codigo":64564,"Telefone":64995581916},
              {"Codigo":42342,"Telefone":64995832584},
              {"Codigo":6456456,"Telefone":64996083252}]
};

var objeto = {},
    procV = [];

for (var i = 0; i < data.teste.length; i++) {

    var teste = data.teste[i];
    obj = {};
    obj.telefone = telefones[telefones.indexOf(teste.Telefone)];

    // Se houver telefones da lista telefones no meu json ele procura o codigo e faz o push 
    if(obj.telefone > 0){
         obj.codigo = teste.Codigo;
         procV.push(obj);
    }

}

console.log(procV);
*/ 