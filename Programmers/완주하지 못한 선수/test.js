function solution(participant, completion){
    participant.forEach(n => participant[n]++, participant.forEach(n => participant[n]=0))

    completion.forEach(n => participant[n]--);

    for(let a in participant){
        if(participant[a]>0) return a;
    }
}

let exampleA = ["leo", "kiki", "eden"];
let exampleB = ["kiki", "eden"];
console.log(solution(exampleA, exampleB));

exampleA = ["marina", "josipa", "nikola", "vinko", "filipa"];
exampleB = ["josipa", "filipa", "marina", "nikola"];
console.log(solution(exampleA, exampleB));

exampleA = ["mislav", "stanko", "mislav", "ana"];
exampleB = ["stanko", "ana", "mislav"];
console.log(solution(exampleA, exampleB));

exampleA = ["asd", "asd", "as", "asd"];
exampleB = ["as", "asd", "asd"];
console.log(solution(exampleA, exampleB));