class Carousel{

    

    constructor(){
       this.id = 0;
       
        //imagem
        this.img_url = $("#img_URL").val();
        this.img_message = $("#img_Message").val();


        //url
        this.url_url = $("#url_Url").val();
        this.url_text = $("#text_Url").val();

        //quick

        this.quick_data = $("#data_QuickReply").val();
        this.quick_text = $("#text_QuickReply").val();

    }

    cria(carousel){
        $(`     
            <div class="col-md-5" id=""identificacao-${carousel.id}"">
            <div class="teste"  style="width:100%; margin-top: 15px;">
                <img src="${carousel.img_url}">
                
                <picture id="gera" style="width:100%; text-align:left; font-weight:bold; padding-top:-25px; bold; margin-top: 1px;" >${carousel.img_message}</picture>

                <button  type="submit" id="gera" style="width:100%; margin-top: 2px;" class="btn btn-outline-secondary">${carousel.url_text}</button>
                

                <button  type="submit" id="gera" style="width:100%; margin-top: 2px;" class="btn btn-outline-secondary">${carousel.quick_text}</button>

                </div>
            </div>
        `).appendTo(".row")

    }

    
    mostrar(carousel){

        //o primeiro sempre terá [ no início e , no final
        $("#teste").val(`
        
        [
            {
                "image": "${carousel.img_url}",
                "message": "${carousel.img_message}",
                "quick_reply": 
                [
                    {
                        "url": "${carousel.url_url}",
                        "text": "${carousel.url_text}"
                    },
                    {
                        "data": "${carousel.quick_data}",
                        "text": "${carousel.quick_text}mostra"
                    }
                ]
            }
        
            `);

            console.log("mostra");
    }

    adicionaCodigo(carousel){

        let codigoAnterior = $("#teste").val();
        //Após o primeiro, irá adicionar
        $("#teste").val(`
        ${codigoAnterior},
                
            {
                "image": "${carousel.img_url}",
                "message": "${carousel.img_message}",
                "quick_reply": 
                [
                    {
                        "url": "${carousel.url_url}",
                        "text": "${carousel.url_text}"
                    },
                    {
                        "data": "${carousel.quick_data}",
                        "text": "${carousel.quick_text}"
                    }
                ]
            }
        
            `);
            console.log("adiciona");
    }

    codigoFinaliza(){

        let codigoAnterior = $("#teste").val();
        //Após o primeiro, irá adicionar
        $("#teste").val(`
        ${codigoAnterior}
        ]
            `);

    }


}
