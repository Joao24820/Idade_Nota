var nome = Pedro;
var nasc = 1998;

soma = 2022 - nasc;

document.write('Sua idade é ' + soma + ' anos ')

while(nome && 'Pedro' && nasc < 1998){
    document.alert('sr(a)' + nome + 'O nome digitado está Invalido' )
}

if (nasc >=1998){
    document.write(nome + 'Atualmente voce é maior de idade !')
}
else{
    document.write(nome + 'ainda não é maior de idade ')
}
function nota(){
    n1 = 18
    n2 = 25
    n3 = 28
    soma =(n1+n2+n3)  
}
if (nota>= 60){
    document.write('O aluno ' + nome + 'Foi aprovado')
}
if(nota>=30 && nota <=59){
    document.write('O aluno está de recupeção')
}else{
    document.alert('O aluno '+ nome + ' Foi reprovado')
}
document.write('Codigo finalizado')

