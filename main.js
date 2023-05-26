function mediaAluno(){
    let Nome = window.prompt('Nome do Aluno')
    let n1 = Number(window.prompt('Nota1'))
    let n2 = Number(window.prompt('Nota2'))
    let n3 = Number(window.prompt('Nota3'))


    soma = (n1 + n2 + n3)/3
    document.getElementById('tex').innerHTML = soma

    if (soma >= 6){
        document.getElementById('tex').innerHTML = `${Nome} sua média ${soma} você está APROVADO!`
    }else{
        document.getElementById('tex').innerHTML = `${Nome} sua média ${soma} você está REPROVADO!`
    }
}