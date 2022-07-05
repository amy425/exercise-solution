<<<<<<< HEAD
const teachingTeam = [ 'Leo', 'Kirti', 'PJ', 'Gemma', 'James', 'Hello', 'P' ];
​
let result = [];
​
let lengthOfLongestName = 0;
​
for (member of teachingTeam) {
    if (member.length > lengthOfLongestName) {
        result = [];
        result.push(member);
        lengthOfLongestName = member.length;
    }
    else if (member.length === lengthOfLongestName) {
        result.push(member);
    }
    else {  // member.length < lengthOfLongestName
        // do nothing
    }
=======
let lengthOfLongestName = 0;
​
for (let member of teachingTeam) {
    if (member.length > lengthOfLongestName)
        lengthOfLongestName = member.length;
}
​
// scan 2: display names of that longest length.
for (let member of teachingTeam) {
    if (member.length === lengthOfLongestName)
        console.log(member);
>>>>>>> q3
}