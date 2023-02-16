var classGroup = "Arts";
var subjects;

if (classGroup === "Science") {
    subjects = "Physics, Chemistry, Biology, Technical Drawing, English, Mathematics";
} else if (classGroup === "Social Science") {
    subjects = "Accounting, Commerce, Marketing, Geography, English, Mathematics";
} else if (classGroup === "Arts") {
    subjects = "Government, Economics, Literature, History, English, Mathematics";
} else {
    subjects = "Invalid class group. Your subjects are: English, Mathematics";
}

console.log("Your subjects are: " + subjects);