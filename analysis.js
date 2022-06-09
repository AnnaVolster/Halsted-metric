const  file=require('fs')
 
const info = file.readFileSync('metrology_lab2.cpp', 'utf-8')

function search(symbol) {


    let pos = info.indexOf(symbol)
    let count = 0

    while (pos > -1) {

        pos = info.indexOf(symbol, pos + 1)
        count++;
    }
    return count
}




function main() {
    let CountOperation=[];
    let CountOperand=[];

    let massOperation=['{','=',';','(','*','pow',',' ,'-', 'cos', 'tan','+', 'sqrt', '/'];
    let massOperand=['x', 'y', 'C', 'z','2','3',' 5', '0'];

    let n,n1,n2;
    let N,N1=0,N2=0;
    let V;

    let idOperation=0;
    let idOperand=0;
    for (const m of massOperation) {
        CountOperation.push(search(m));
        N1+=CountOperation[idOperation];
        idOperation++;
    }
    for (const i of massOperand) {
        CountOperand.push(search(i));
        N2+=CountOperand[idOperand];
        idOperand++;
    }




    n1=CountOperation.length;
    n2=CountOperand.length;
    n=n1+n2;
    N=N1+N2;
    V=N*Math.log2(n);
    console.log('n1=',n1);
    console.log('n2=',n2);
    console.log('n=',n);
    console.log('N1=',N1)
    console.log('N2=',N2)
    console.log('N=',N)
    console.log('V=',V);

}

main()