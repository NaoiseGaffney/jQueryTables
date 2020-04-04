$(document).ready(function () {
    /* One way of doing it, though not considered 'good practice' */
    $("h2").css("text-decoration","underline");
    $("ul").css("border","solid 1px #cccccc");

    /* Another way is to add the CSS classes, and use CSS */
    $("h2").addClass("underline");
    $("ul").addClass("border"); // Use removeClass too...

    /* Add odd class to every odd table element <tr>, and even class... */
    $("tr:odd").addClass("odd");
    $("tr:even").addClass("even");
});