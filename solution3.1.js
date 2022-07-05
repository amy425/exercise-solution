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
}