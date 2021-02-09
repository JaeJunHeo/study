function solution(clothes) {
    let answer = 0;
    let temp = [];

    clothes.forEach(n => temp[n[1]]++, clothes.forEach(n => temp[n[1]]=0))
    
    if(Object.keys(temp).length > 1){
        Object.keys(temp).forEach(n => answer += temp[n])
        answer *= Object.keys(temp).length;
        answer--;
    }
    else
        answer = temp[Object.keys(temp)];
    
    return answer;
}

let example = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];
console.log(solution(example));

example = [["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]];
console.log(solution(example));

example = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"], ["crow_mask", "face"], ["love_mask", "face"]]
console.log(solution(example));

//수정해야함