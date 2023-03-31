import React from "react";
import Banner from "./banner";
import InfoBanner from "./informacoes/info-banner";
import InfoTexto from "./informacoes/info-texto";
import Contatos from "./contatos";
import Horarios from "./horarios";

export default function PaginaInicial() {
    return (
        
        <main>      
            
            <Banner />
            <InfoTexto 
                Subtitulo="EXPERIMENTE O MELHOR CAFÉ DA CIDADE!"
                Paragrafo="O café não é uma simples bebida que foi preparada por alguém. O café é
                momento e nós mostraremos isso. Frases como “Que tal tomarmos um café?”
                ou até então “Vamos fazer um café?” são demonstrações de que um dos
                momentos que mais reforçam os laços para com o próximo está finalmente
                por acontecer. Fraco ou forte? Com ou sem açúcar? Você deseja açúcar ou
                adoçante? Estas são frases que ouvimos em vários lugares. Em quase todos
                os locais onde há pessoas há também café. Parecemos intrínsecos ao café.
                Aqui na Manhattan serviremos para você com muito carinho o nosso querido
                e amado Amaro’s Coffe diretamente do nosso cafezal em Minas Gerais. Para
                todos nós, café é coisa séria e merece todo o cuidado."            
            />  
            <InfoBanner 
                Background='./assets/parallax-imagem2.jpg' 
                Mensagem="Um bom café é motivo de alegria!"
            />
            <InfoTexto 
                Subtitulo="O QUE É O CAFÉ MANHATTAN?"
                Paragrafo="Segundo a Metodologia de Avaliação Sensorial da SCA (Specialty Coffee
                    Association), usada no mundo todo, um café especial é todo aquele que
                    atinge, no mínimo, 80 pontos na escala de pontuação da metodologia (que
                    vai até 100). O Café Manhattan destaca-se nos atributos fragrância,
                    corpo, harmonia, doçura e sabor, nesse caso, possuindo sabores e aromas
                    que podem ser frutados, herbais, doces como caramelo e chocolate.
                    Podemos fazer uma analogia com o vinho, pois o café Manhattan também
                    pode ser apreciado por suas características sensoriais e não apenas pela
                    cafeína. Através do excelente padrão de cultivo, cuidado pós-colheita e
                    da torra, você poderá experimentar diferentes e deliciosos tipos de
                    café."            
            /><InfoBanner 
            Background='./assets/parallax-imagem3.jpg' 
            Mensagem="A vida só começa depois do café!"
        />
            <InfoTexto 
                Subtitulo="CONHEÇA O CAFÉ GOURMET MANHATTAN"
                Paragrafo="As características desse tipo do café gourmet da Manhattan são muito
                marcantes. O seu corpo vai depender da variedade do blend: quanto mais
                “pesado” ele for na boca, maior o corpo. Quanto menor a sua pesagem,
                menor o corpo. O nosso café gourmet é o mais bem avaliado no processo de
                produção, para que ele não venha com nenhum tipo de defeito. O aroma é
                bem perceptível e o consumidor consegue sentir nitidamente, sendo que
                ele pode variar entre 4 aromas: florado, cítrico, achocolatado, frutado.
                Essas variações são consequências dos grãos do tipo Arábica. Tudo isso
                vai depender da torra, quanto mais clara ela for, maior será a acidez."            
            />            
            <Contatos
                Telefone="(21)2679-9292"
                Email="coffehouse@seumail.com"
            />
            <Horarios 
                Segunda="Fechado"
                Terca="09:00 - 22:00"
                Quarta="09:00 - 22:00"
                Quinta="09:00 - 22:00"
                Sexta="09:00 - 22:00"
                Sabado="12:00 - 22:00"
                Domingo="12:00 - 22:00"
            />          
        </main>
    )
}