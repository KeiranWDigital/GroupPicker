$(document).ready(function () {

    var seconds = 120;
    var refreshIntervalID;
    var incrementJ;

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
        colours = ["red", "orange", "blue", "pink", "green", "purple"]
        return colours[number];
    }


    $("#secondsDropdown > li > a").click(function () {
        seconds = $(this).attr("value");
        $("#secondsDropdownTrigger").html($(this).html());
    });

    $("#start").click(function () {
        incrementJ = 3;

        console.log("Starting");
        $(".lightContainer").removeClass("lit");
        increment();
        refreshIntervalID = setInterval(increment, seconds * 1000);
    });

    $("#stop").click(function () {
        console.log("Stopping");
        clearInterval(refreshIntervalID);
    })

    function cycleGroups(groupsArray, i) {
        $(groupsArray[i]).addClass("lit");
    }


    function increment() {
        console.log("Firing");
        let groupsArray = $(".lightContainer");

        incrementJ = incrementJ % 360 + 1;
        if (incrementJ > groupsArray.length - 1)
            incrementJ = 0;

        cycleGroups(groupsArray, incrementJ);
    }

});