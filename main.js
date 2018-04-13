let colorSchemes = {
  
    basic: [
        '#000', '#005', '#00a', '#00f', '#050', '#0a0','#0f0', '#500', '#a00', '#f00', '#ff0', '#fa0','#f50', '#5f0', '#af0', '#ff0', '#f0f', '#f05', '#f0a', '#505', '#550', '#055', '#555', '#aaa','#fff', '#f5f', '#55f', '#f55'
    ],
    
    happy: [
        '#f8eb60', '#f8ea47', '#fee300', '#ffd100', '#ffb819', '#fce444', '#ff6c0c', '#ff5000', '#ff8300', '#ff9012', '#ff7f3f', '#ff9e16', '#eb0029', '#fb3449', '#ff4612', '#f5426c', '#ea1d76', '#ff9bb1', '#e13eaf', '#e777cb', '#a25cbf', '#9f26b5', '#cd8bda', '#783cbd', '#7f56c5', '#675dc6', '#9794d2', '#6ba2b9', '#7da4dd', '#5b87da', '#57c9e8', '#8ad2e6', '#00bfd6', '#22d3c5', '#34d9c3', '#95d600', '#3fae2a', '#72d54a', '#82bc00', '#c4e86b'
    ],
    
    sad: [
        '#cea052', '#633c20', '#6e4c4b', '#663334', '#5b2c3f', '#222222', '#1C1D21', '#31353D', '#EEEFF7', '#5E3441', '#988794', '#684459', '#644b78', '#092a30', '#071c2c', '#08262c', '#46797b', '#607775', '#3f5b58', '#385542', '#38563c', '#606737', '#4f4a33', '#5c6670', '#525349', '#caa891'
    ],
    
    sexy: [
        '#000000', '#D7000F', '#F0006C', '#A3004A', '#222222', '#880063', '#a90f3d', '#311F59', '#FF2233', '#7F263B', '#820043', '#880000'
    ],
    
    money: [
        '#f6b221', '#CFCDB4', '#3fae2a', '#a75a29', '#643510', '#FF9800', '#0A3D11', '#086F06', '#EEAE19', '#D98E04'
    ],
    
    trip: [
        '#ccccff', '#ff4c00', '#ECA500', '#115302', '#007905', '#57371C', '#b46a1f', '#57c9e8', '#017EC1', '#7673c0', '#cccc66', '#95d600'
    ],
    
    death: [
        '#000000', '#111111', '#222222', '#333333', '#555555', '#000000', '#dddddd', '#aaaaff'
    ],
    
    crazy: [
        '#ffffff', '#000000', '#e11383', '#FEE500', '#FC4C02', '#ff0000', '#ff6b00', '#111111'
    ],
    
    luxury: [
        '#B14EB5', '#BB16A3', '#CE232A', '#004050', '#005844', '#dddddd', '#111111', '#222222', '#3E1E20', '#48331C', '#742429', '#E10600'
    ],
    
    hungry: [
        '#FF2C0D', '#E8550C', '#FF8900', '#E8A40C', '#FFD819', '#A3FF00', '#FF8F57', '#5C1D15', '#452313', '#643510', '#FF1400'
    ],
    
    love: [
        '#FF145E', '#FF1490', '#CC07E8', '#8292FF', '#FF6DAA', '#FF0037', '#FFB4C3', '#8bdc65'
    ],
    
    saude: [
        '#FFFDDC', '#6EFFB4', '#58CDE8', '#FFFF78', '#ffffcc', '#5477E8', '#8bdc65', '#8ae2d1', '#fff'
    ],
    
    medo: [
        '#000', '#111', '#200', '#412020', '#08262c', '#011', '#110', '#ffcc00', '#200020', '#490000'
    ],
    
    rainbow: [
        '#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000'
    ],
    
    peace: [
        '#fff', '#eee', '#ddd', '#ccf', '#aff'
    ],
    
    dark: [
        '#000', '#111', '#222', '#112', '#121', '#211', '#110', '#101', '#011', '#010', '#100', '#001'
    ],
    
    hot: [
        '#f00', '#f55', '#faa', '#ff0', '#f50', '#a50', '#fa0', '#f50', '#ff3a1e', '#ec0044', '#e24301', '#500', '#a00'
    ],
    
    cold: [
        '#55f', '#aaf', '#5f5', '#afa', '#0ff', '#5ff', '#aff', '#0f5', '#0fa', '#0aa', '#055', '#005', '#05a', '#045'
    ],
    
    nature: [
        '#0a0', '#050', '#5a0', '#fa0', '#0af', '#5ff', '#512c1d', '#a4a9ad', '#648c1a', '#ff7f2f'
    ],
    
    jealous: [
        '#7c2582', '#95358c', '#412020', '#622066', '#880d53', '#832b40', '#c51a4a', '#85276b', '#111', '#802528', '#682f24', '#231c34'
    ],
    
    comfortable: [
        '#00f', '#0af', '#231c34', '#001c71', '#005c5d', '#57c9e8', '#6ba2b9', '#645d9c', '#4ea685', '#8bdc65', '#4c9462', '#008aab'
    ],
    
    wood: [
        '#452200', '#2E1A00', '#452B00', '#2E1F00', '#453407', '#362414', '#1F160A', '#362914', '#1F180A', '#362D14', '#4C1200', '#361100', '#4C1E00', '#361900', '#4C2A00'
    ],
    
    sky: [
        '#FFB900', '#61A1FA', '#FFF79A', '#164CFA', '#FFF200', '#F7F7F7', '#E3E3E3', '#3E68A1', '#D99D00', '#0D0C28'
    ],
    
    fire: [
        '#F0B400', '#FA9800', '#E35F00', '#FA3600', '#F00300', '#BA0300', '#BF5000', '#D68300', '#CC9900'
    ],
    
    citric: [
        '#FFC900', '#FFED00', '#C3FF00', '#47FF00', '#00C922', '#96C400', '#E8FF00', '#68D100', '#CED100'
    ],
    
    sweet: [
        '#99f', '#faa', '#fa7', '#47FF00', '#00C922', '#96C400', '#E8FF00', '#68D100', '#CED100'
    ]
}


function enviar(event) {
    
    
$('#gerar').keypress(function(event){

    if (event.keyCode === 10 || event.keyCode === 13) {
        event.preventDefault();
        enviar(event);
    }
  });
    
$('#mudar_forma_quadrado').click(function() {
    $('.forma_redonda div').css('height', '100vh').css('width', '18vw').css('margin', 0).css('boxShadow', 'none').css('borderRadius', 0)
    $('#color_conteiner').css('paddingTop', '0')
    
    $(this).hide()
    $('#mudar_forma_redondo').show()
})
    
$('#mudar_forma_redondo').click(function() {
    $('.forma_redonda div').css('height', '19vw').css('width', '19vw').css('borderRadius', 1000 + 'px').css('margin', 0 + '-' + 4 + 'vw')
    $('#color_conteiner').css('paddingTop', 25 + 'vh')
    
    $(this).hide()
    $('#mudar_forma_quadrado').show()
})
    
    
    let conceptValue = document.getElementById('concept_value').value;
    
    switch(conceptValue.toLowerCase()) {
        case "happy": case "feliz": case "happiness": case "felicidade": case "alegre": case "alegria": case "contente": case "joyful": case "joy": case "delight": case "pleasure": case "deleite": case "cheer": case "prazer": case "apreciar":
        
            $('.color1').finish().css('backgroundColor', colorSchemes.happy[Math.floor(Math.random() * colorSchemes.happy.length)]).css('transition', 0.7 + 's')
            
            $('.color2').finish().css('backgroundColor', colorSchemes.happy[Math.floor(Math.random() * colorSchemes.happy.length)]).css('transition', 0.7 + 's')
            
            $('.color3').finish().css('backgroundColor', colorSchemes.happy[Math.floor(Math.random() * colorSchemes.happy.length)]).css('transition', 0.7 + 's')
        break;
            
        case "basic": case "pure color": case "básica": case "basico": case "cor pura":
            
            $('.color1').finish().css('backgroundColor', colorSchemes.basic[Math.floor(Math.random() * colorSchemes.basic.length)]).css('transition', 0.7 + 's')
            
            $('.color2').finish().css('backgroundColor', colorSchemes.basic[Math.floor(Math.random() * colorSchemes.basic.length)]).css('transition', 0.7 + 's')
            
            $('.color3').finish().css('backgroundColor', colorSchemes.basic[Math.floor(Math.random() * colorSchemes.basic.length)]).css('transition', 0.7 + 's')
        break;
            
        case "sad": case "triste": case "cabisbaixo": case "desanimado": case "tristeza": case "sadness":
            
            $('.color1').finish().css('backgroundColor', colorSchemes.sad[Math.floor(Math.random() * colorSchemes.sad.length)]).css('transition', 0.7 + 's')
            
            $('.color2').finish().css('backgroundColor', colorSchemes.sad[Math.floor(Math.random() * colorSchemes.sad.length)]).css('transition', 0.7 + 's')
            
            $('.color3').finish().css('backgroundColor', colorSchemes.sad[Math.floor(Math.random() * colorSchemes.sad.length)]).css('transition', 0.7 + 's')
        break;
            
        case "sexy": case "sex": case "sexo": case "sensual": case "sedução": case "seduction": case "sexualidade": case "promiscuous": case "horny": case "tarado": case "safado": case "safada": case "tesãp": case "tesao":

            $('.color1').finish().css('backgroundColor', colorSchemes.sexy[Math.floor(Math.random() * colorSchemes.sexy.length)]).css('transition', 0.7 + 's')

            $('.color2').finish().css('backgroundColor', colorSchemes.sexy[Math.floor(Math.random() * colorSchemes.sexy.length)]).css('transition', 0.7 + 's')

            $('.color3').finish().css('backgroundColor', colorSchemes.sexy[Math.floor(Math.random() * colorSchemes.sexy.length)]).css('transition', 0.7 + 's')
        break;
            
        case "money": case "cash": case "dinheiro": case "riqueza": case "grana": case "rich":

            $('.color1').finish().css('backgroundColor', colorSchemes.money[Math.floor(Math.random() * colorSchemes.money.length)]).css('transition', 0.7 + 's')

            $('.color2').finish().css('backgroundColor', colorSchemes.money[Math.floor(Math.random() * colorSchemes.money.length)]).css('transition', 0.7 + 's')

            $('.color3').finish().css('backgroundColor', colorSchemes.money[Math.floor(Math.random() * colorSchemes.money.length)]).css('transition', 0.7 + 's')
        break;
            
        case "trip": case "viagem": case "tropical": case "wanderlust": case "vacation": case "férias": case "travel": case "traveling": case "voyage": case "trek":

            $('.color1').finish().css('backgroundColor', colorSchemes.trip[Math.floor(Math.random() * colorSchemes.trip.length)]).css('transition', 0.7 + 's')

            $('.color2').finish().css('backgroundColor', colorSchemes.trip[Math.floor(Math.random() * colorSchemes.trip.length)]).css('transition', 0.7 + 's')

            $('.color3').finish().css('backgroundColor', colorSchemes.trip[Math.floor(Math.random() * colorSchemes.trip.length)]).css('transition', 0.7 + 's')
        break;
            
        case "death": case "morte": case "fim": case "nunca": case "end": case "never": case "empty": case "depressive": case "depressivo": case "shadow": case "sombra": case "penumbra": case "dead": case "morto": case "depressão": case "depressiva": case "vazio": case "solidão": case "emptiness":

            $('.color1').finish().css('backgroundColor', colorSchemes.death[Math.floor(Math.random() * colorSchemes.death.length)]).css('transition', 0.7 + 's')

            $('.color2').finish().css('backgroundColor', colorSchemes.death[Math.floor(Math.random() * colorSchemes.death.length)]).css('transition', 0.7 + 's')

            $('.color3').finish().css('backgroundColor', colorSchemes.death[Math.floor(Math.random() * colorSchemes.death.length)]).css('transition', 0.7 + 's')
        break;
            
        case "crazy": case "louco": case "craziness": case "loucura": case "mental sick": case "mental": case "problema mental": case "doido": case "sick":

            $('.color1').finish().css('backgroundColor', colorSchemes.crazy[Math.floor(Math.random() * colorSchemes.crazy.length)]).css('transition', 0.7 + 's')

            $('.color2').finish().css('backgroundColor', colorSchemes.crazy[Math.floor(Math.random() * colorSchemes.crazy.length)]).css('transition', 0.7 + 's')

            $('.color3').finish().css('backgroundColor', colorSchemes.crazy[Math.floor(Math.random() * colorSchemes.crazy.length)]).css('transition', 0.7 + 's')
        break;
            
        case "luxury": case "luxo": case "chique": case "sofisticated": case "sofisticado": case "lux": case "luxuria": case "luxúria": case "wealth": case "chic":

            $('.color1').finish().css('backgroundColor', colorSchemes.luxury[Math.floor(Math.random() * colorSchemes.luxury.length)]).css('transition', 0.7 + 's')

            $('.color2').finish().css('backgroundColor', colorSchemes.luxury[Math.floor(Math.random() * colorSchemes.luxury.length)]).css('transition', 0.7 + 's')

            $('.color3').finish().css('backgroundColor', colorSchemes.luxury[Math.floor(Math.random() * colorSchemes.luxury.length)]).css('transition', 0.7 + 's')
        break;

            
        case "hungry": case "fome": case "faminto": case "starving": case "água na boca": case "apetite": case "appetite": case "hunger": case "food desire":

            $('.color1').finish().css('backgroundColor', colorSchemes.hungry[Math.floor(Math.random() * colorSchemes.hungry.length)]).css('transition', 0.7 + 's')

            $('.color2').finish().css('backgroundColor', colorSchemes.hungry[Math.floor(Math.random() * colorSchemes.hungry.length)]).css('transition', 0.7 + 's')

            $('.color3').finish().css('backgroundColor', colorSchemes.hungry[Math.floor(Math.random() * colorSchemes.hungry.length)]).css('transition', 0.7 + 's')
        break;
            
        case "amor": case "love": case "paixão": case "passion": case "fall in love": case "apaixonado": case "amoroso": case "enamorado": case "namorados": case "valentines":

            $('.color1').finish().css('backgroundColor', colorSchemes.love[Math.floor(Math.random() * colorSchemes.love.length)]).css('transition', 0.7 + 's')

            $('.color2').finish().css('backgroundColor', colorSchemes.love[Math.floor(Math.random() * colorSchemes.love.length)]).css('transition', 0.7 + 's')

            $('.color3').finish().css('backgroundColor', colorSchemes.love[Math.floor(Math.random() * colorSchemes.love.length)]).css('transition', 0.7 + 's')
        break;
            
        case "saude": case "saúde": case "health": case "saudável": case "saudável": case "healthy": case "vigoroso": case "vigor": case "salubre": case "sadio":

            $('.color1').finish().css('backgroundColor', colorSchemes.saude[Math.floor(Math.random() * colorSchemes.saude.length)]).css('transition', 0.7 + 's')

            $('.color2').finish().css('backgroundColor', colorSchemes.saude[Math.floor(Math.random() * colorSchemes.saude.length)]).css('transition', 0.7 + 's')

            $('.color3').finish().css('backgroundColor', colorSchemes.saude[Math.floor(Math.random() * colorSchemes.saude.length)]).css('transition', 0.7 + 's')
        break;
            
        case "medo": case "fear": case "scary": case "assustador": case "obscuro": case "amedrontante":

            $('.color1').finish().css('backgroundColor', colorSchemes.medo[Math.floor(Math.random() * colorSchemes.medo.length)]).css('transition', 0.7 + 's')

            $('.color2').finish().css('backgroundColor', colorSchemes.medo[Math.floor(Math.random() * colorSchemes.medo.length)]).css('transition', 0.7 + 's')

            $('.color3').finish().css('backgroundColor', colorSchemes.medo[Math.floor(Math.random() * colorSchemes.medo.length)]).css('transition', 0.7 + 's')
        break;
            
        case "rainbow": case "arcoiris": case "arco-íris": case "arco íris": case "arco iris": case "arcoíris": case "gay": case "lgbt": case "diversity": case "diversidade": case "vybgior":

            $('.color1').finish().css('backgroundColor', colorSchemes.rainbow[Math.floor(Math.random() * colorSchemes.rainbow.length)]).css('transition', 0.7 + 's')

            $('.color2').finish().css('backgroundColor', colorSchemes.rainbow[Math.floor(Math.random() * colorSchemes.rainbow.length)]).css('transition', 0.7 + 's')

            $('.color3').finish().css('backgroundColor', colorSchemes.rainbow[Math.floor(Math.random() * colorSchemes.rainbow.length)]).css('transition', 0.7 + 's')
        break;
            
        case "peace": case "paz": case "calm": case "calma": case "calmo": case "easy": case "fácil": case "facil":

            $('.color1').finish().css('backgroundColor', colorSchemes.peace[Math.floor(Math.random() * colorSchemes.peace.length)]).css('transition', 0.7 + 's')

            $('.color2').finish().css('backgroundColor', colorSchemes.peace[Math.floor(Math.random() * colorSchemes.peace.length)]).css('transition', 0.7 + 's')

            $('.color3').finish().css('backgroundColor', colorSchemes.peace[Math.floor(Math.random() * colorSchemes.peace.length)]).css('transition', 0.7 + 's')
        break;
            
        case "dark": case "black": case "obscure": case "escuro": case "preto": case "obscuro": case "penumbra": case "breu":

            $('.color1').finish().css('backgroundColor', colorSchemes.dark[Math.floor(Math.random() * colorSchemes.dark.length)]).css('transition', 0.7 + 's')

            $('.color2').finish().css('backgroundColor', colorSchemes.dark[Math.floor(Math.random() * colorSchemes.dark.length)]).css('transition', 0.7 + 's')

            $('.color3').finish().css('backgroundColor', colorSchemes.dark[Math.floor(Math.random() * colorSchemes.dark.length)]).css('transition', 0.7 + 's')
        break;
            
        case "hot": case "quente": case "pelando": case "fervendo": case "ardido": case "ardente": case "fervor": case "calor": case "heat": case "warm": case "summer": case "sun":

            $('.color1').finish().css('backgroundColor', colorSchemes.hot[Math.floor(Math.random() * colorSchemes.hot.length)]).css('transition', 0.7 + 's')

            $('.color2').finish().css('backgroundColor', colorSchemes.hot[Math.floor(Math.random() * colorSchemes.hot.length)]).css('transition', 0.7 + 's')

            $('.color3').finish().css('backgroundColor', colorSchemes.hot[Math.floor(Math.random() * colorSchemes.hot.length)]).css('transition', 0.7 + 's')
        break;
            
        case "cold": case "frio": case "ice": case "gelado": case "cool": case "icy": case "fresco": case "gélido": case "frost": case "frosty": case "congelado": case "chill": case "winter":

            $('.color1').finish().css('backgroundColor', colorSchemes.cold[Math.floor(Math.random() * colorSchemes.cold.length)]).css('transition', 0.7 + 's')

            $('.color2').finish().css('backgroundColor', colorSchemes.cold[Math.floor(Math.random() * colorSchemes.cold.length)]).css('transition', 0.7 + 's')

            $('.color3').finish().css('backgroundColor', colorSchemes.cold[Math.floor(Math.random() * colorSchemes.cold.length)]).css('transition', 0.7 + 's')
        break;
            
        case "nature": case "natureza": case "environment": case "ambiente":

            $('.color1').finish().css('backgroundColor', colorSchemes.nature[Math.floor(Math.random() * colorSchemes.nature.length)]).css('transition', 0.7 + 's')

            $('.color2').finish().css('backgroundColor', colorSchemes.nature[Math.floor(Math.random() * colorSchemes.nature.length)]).css('transition', 0.7 + 's')

            $('.color3').finish().css('backgroundColor', colorSchemes.nature[Math.floor(Math.random() * colorSchemes.nature.length)]).css('transition', 0.7 + 's')
        break;
            
        case "jealous": case "invejoso": case "ciumento": case "ciumenta": case "ciumes": case "ciúmes": case "recalque": case "olho gordo": case "invejoso": case "invejosa": case "envy": case "inveja":

            $('.color1').finish().css('backgroundColor', colorSchemes.jealous[Math.floor(Math.random() * colorSchemes.jealous.length)]).css('transition', 0.7 + 's')

            $('.color2').finish().css('backgroundColor', colorSchemes.jealous[Math.floor(Math.random() * colorSchemes.jealous.length)]).css('transition', 0.7 + 's')

            $('.color3').finish().css('backgroundColor', colorSchemes.jealous[Math.floor(Math.random() * colorSchemes.jealous.length)]).css('transition', 0.7 + 's')
        break;
            
        case "comfortable": case "confortável": case "reconfortante": case "macio": case "suave": case "cômodo": case "aconchegante": case "comfy": case "cozy": case "confidence": case "confiança": case "confiar": case "confiante":

            $('.color1').finish().css('backgroundColor', colorSchemes.comfortable[Math.floor(Math.random() * colorSchemes.comfortable.length)]).css('transition', 0.7 + 's')

            $('.color2').finish().css('backgroundColor', colorSchemes.comfortable[Math.floor(Math.random() * colorSchemes.comfortable.length)]).css('transition', 0.7 + 's')

            $('.color3').finish().css('backgroundColor', colorSchemes.comfortable[Math.floor(Math.random() * colorSchemes.comfortable.length)]).css('transition', 0.7 + 's')
        break;
            
        case "woods": case "wood": case "madeira": case "pau": case "tábua": case "timber": case "amadeirado": case "marrom":

            $('.color1').finish().css('backgroundColor', colorSchemes.wood[Math.floor(Math.random() * colorSchemes.wood.length)]).css('transition', 0.7 + 's')

            $('.color2').finish().css('backgroundColor', colorSchemes.wood[Math.floor(Math.random() * colorSchemes.wood.length)]).css('transition', 0.7 + 's')

            $('.color3').finish().css('backgroundColor', colorSchemes.wood[Math.floor(Math.random() * colorSchemes.wood.length)]).css('transition', 0.7 + 's')
        break;
            
        case "sky": case "céu": case "atmosphere": case "atmosfera":

            $('.color1').finish().css('backgroundColor', colorSchemes.sky[Math.floor(Math.random() * colorSchemes.sky.length)]).css('transition', 0.7 + 's')

            $('.color2').finish().css('backgroundColor', colorSchemes.sky[Math.floor(Math.random() * colorSchemes.sky.length)]).css('transition', 0.7 + 's')

            $('.color3').finish().css('backgroundColor', colorSchemes.sky[Math.floor(Math.random() * colorSchemes.sky.length)]).css('transition', 0.7 + 's')
        break;
            
            
        case "fogo": case "fire": case "brasa": case "labareda": case "lume": case "flama": case "incêndio": case "combustion": case "combustão": case "flame": case "chama":

            $('.color1').finish().css('backgroundColor', colorSchemes.fire[Math.floor(Math.random() * colorSchemes.fire.length)]).css('transition', 0.7 + 's')

            $('.color2').finish().css('backgroundColor', colorSchemes.fire[Math.floor(Math.random() * colorSchemes.fire.length)]).css('transition', 0.7 + 's')

            $('.color3').finish().css('backgroundColor', colorSchemes.fire[Math.floor(Math.random() * colorSchemes.fire.length)]).css('transition', 0.7 + 's')
        break;
            
        case "cítrico": case "citrico": case "citric": case "lemon": case "vitamina C": case "citrus": case "acid": case "ácido": case "acido":

            $('.color1').finish().css('backgroundColor', colorSchemes.citric[Math.floor(Math.random() * colorSchemes.citric.length)]).css('transition', 0.7 + 's')

            $('.color2').finish().css('backgroundColor', colorSchemes.citric[Math.floor(Math.random() * colorSchemes.citric.length)]).css('transition', 0.7 + 's')

            $('.color3').finish().css('backgroundColor', colorSchemes.citric[Math.floor(Math.random() * colorSchemes.citric.length)]).css('transition', 0.7 + 's')
        break;
            
        default:
            $('#invalid_msg').finish().slideDown(200).delay(1000).hide(300)
    }
}








$('.color1').mouseenter(function() {
    
var element = document.querySelector('.color1'),
    style = window.getComputedStyle(element),
    backColor = style.getPropertyValue('background-color');

    $(this).find('.rgb_display').html(backColor).finish().delay(100).fadeIn(100)
    
    $(this).find('.hex_display').html('#' + toHex(...backColor.match(/\d+/g).map(Number)).toUpperCase() ).finish().delay(100).fadeIn(100)

})

$('.color2').mouseenter(function() {
    
var element = document.querySelector('.color2'),
    style = window.getComputedStyle(element),
    backColor = style.getPropertyValue('background-color');

    $(this).find('.rgb_display').html(backColor).finish().delay(100).fadeIn(100)

    $(this).find('.hex_display').html('#' + toHex(...backColor.match(/\d+/g).map(Number)).toUpperCase()).finish().delay(100).fadeIn(100)
})

    $('.color3').mouseenter(function() {
    
var element = document.querySelector('.color3'),
    style = window.getComputedStyle(element),
    backColor = style.getPropertyValue('background-color');

    $(this).find('.rgb_display').html(backColor).finish().delay(100).fadeIn(100)

    $(this).find('.hex_display').html('#' + toHex(...backColor.match(/\d+/g).map(Number)).toUpperCase()).finish().delay(100).fadeIn(100)
})




$('.color_box').mouseleave(function() {
    $(this).find('p').delay(100).fadeOut()
})


$('#white_background').click(function() {
    $('body').css('background', 'linear-gradient(-60deg, #ABB 0%, #EEE 35%, #EEE 65%, #ABB 100%)')
})

$('#dark_background').click(function() {
    $('body').css('background', 'linear-gradient(-60deg, #222 0%, #111 35%, #111 65%, #222 100%)')
})



