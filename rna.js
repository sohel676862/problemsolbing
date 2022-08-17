const data = 'ACGTGGTCTTAA'

const rnaComOfDna = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
}
const toRna = (data) => {

    return data.split('').map(dna => {

    
        if (rnaComOfDna[dna]) {
            dna = rnaComOfDna[dna]
            //  dna +=rnaComOfDna[dna]
        }

        return dna
    }).join('');

};

console.log(toRna(data))
