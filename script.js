const students = [
    {
        name: "Amanda",
        firstNote: 9,
        secondNote: 8,
    },
    {
        name: "Teresa",
        firstNote: 3,
        secondNote: 5,
    },
    {
        name: "Pedro",
        firstNote: 17,
        secondNote: 8,
    },
    {
        name: "João",
        firstNote: 7,
        secondNote: 7,
    },
    {
        name: "Carlos",
        firstNote: 7,
        secondNote: 6.98,
    },
];

function calculateAverage(firstNote, secondNote){
    return ((firstNote + secondNote) / 2).toFixed(2);
}

function printAverageStudent(student){
    let average = calculateAverage(student.firstNote, student.secondNote);

    if (average < 0 || average > 10){
        alert(`O aluno(a) ${student.name} está com alguma nota errada. Favor corrigir e tentar novamente!`);
    }else if (average >= 7){
        alert(`A média do(a) aluno(a) ${student.name} é: ${average}\nParabéns, ${student.name}! Você foi aprovado(a) no concurso!`);
    } else{
        alert(`A média do(a) aluno(a) ${student.name} é: ${average}\nNão foi dessa vez, ${student.name}! Tente novamente!`);
    }
}

for (let student of students){
    printAverageStudent(student);
}