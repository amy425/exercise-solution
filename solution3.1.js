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
}