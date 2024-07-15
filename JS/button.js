var count = 0;
document.getElementById("myButton").onclick = function() {
    count++;
    if (count % 2 == 0) {
        document.getElementById("demo").innerHTML = "";
    }
    else {
        var img = document.createElement("img");
        img.src = "https://img.freepik.com/premium-photo/woman-hand-picking-book-from-bookshelf-library-university-college-high-school-bookshop_1048944-21899470.jpg?w=996";
        document.getElementById("demo").appendChild(img);
    }

}