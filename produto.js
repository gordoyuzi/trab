 

function calcularproduto(){
    var p = Number(document.getElementById("idproduto").value);
    var n = Number(document.getElementById("idquantidade").value);
    
    const produtos = [
        { codigo: 1, nome: 'Produto A', preco: 10.0 },
        { codigo: 2, nome: 'Produto B', preco: 20.0 },
        { codigo: 3, nome: 'Produto C', preco: 15.0 },
      ];
      var po=0;
 switch(p){
    case 1:
        po = n*produtos[0].preco;
        break;
        case 2:
        po = n*produtos[1].preco;
        break;  
        case 3:
        po = n*produtos[2].preco;
        break;
        default:
        po="não foi possível esse calculo.";
        break;       
}
document.getElementById('abra').innerText = "O resultado é esse: (amo tu sora) " +po;
}