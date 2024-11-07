let menu=
function triangulo(area) {
    const base= prompt('Digite a base do triangulo')
    const altura= prompt('Escreva a altura do triangulo')
    return alert('A area do triangulo equivale:' + (area = (base*altura)/2))
}
function retangulo (area){
    const base= prompt('Digite a base do seu retangulo')
    const altura= prompt('Digite a altura do seu retangulo')
    return alert('A area do retangulo equivale:' + (area = base * altura))
}
function quadrado (area){
    const lado= prompt('Digite o lado do quadrado')
    return alert('A area do quadrado equivale:' + (area = lado * lado))
}
function trapezio (area){
    const baseMaior= prompt('Digite a base maior do seu trapezio')
    const baseMenor= prompt('Digite a base menor do seu trapezio')
    const altura= prompt('Digite a altura do seu trapezio')
    return alert('A area do trapezio equivale:' + (area = ((baseMaior + baseMenor) * altura) / 2))
}
function circulo (area){
    const raio = prompt('Digite o raio do seu circulo')
    return alert('A area do circulo equivale:' + (area = 3.14 * (raio * raio)))
}
do {
    menu = prompt(`
    Formas Geometricas:
    
    Escolha uma opção:
    1 - área do triângulo
    2 - área do retângulo
    3 - área do quadrado
    4 - área do trapézio
    5 - área do círculo
    6 - sair`)

    switch (menu){
        case '1':
            triangulo()
            break
        case '2':
            retangulo()
            break
        case '3':
            quadrado()
            break
        case '4':
            trapézio()
            break
        case '5':
            circulo()
            break
        default:
            alert('Erro de sintaxe')
    }
} while (menu !== '6')