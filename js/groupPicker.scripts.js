$(document).ready(function () {
    showGroups(3);
    $("#numberOfGroupsDropdownTrigger").html("Three Groups");

    $("#numberOfGroupsDropdown > li > a").click(function () {
        let numberOfGroups = $(this).attr("value");
        showGroups(numberOfGroups);
        $("#numberOfGroupsDropdownTrigger").html($(this).html());
    });

    function showGroups(numberToClone) {
        $("#groupsContainer").html("")

        for (var i = 0; i < numberToClone; i++) {
            var temp = $("#lightTemplate")[0];
            var clon = temp.content.cloneNode(true);
            clon.querySelectorAll(".lightContainer")[0].id = "lightContainer" + (i + 1);
            var title = clon.querySelectorAll("p")[0];
            title.textContent = "Group " + (i + 1);
            var light = clon.querySelectorAll(".light")[0];
            light.style.backgroundColor = getColour(i);
            $("#groupsContainer").append(clon);
        }
    }

    function getColour(number) {
        colours = ["red","orange","blue","pink","green","purple"]
        return colours[number];
    }


    $("#secondsDropdown > li > a").click(function () {
        let seconds = $(this).attr("value");
        $("#secondsDropdownTrigger").html($(this).html());
    });
});