/*

This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.

Steps:

    1. Edit this file using Notepad or a code editor (do not use document editors like Microsoft Word)
    2. Change the line "isEnabled: false," to "isEnabled: true," to display the markers
    3. Change or remove the example markers
    4. Add your own markers

Marker format:

    {
        x: X coordinate of the marker (in Minecraft block units),
        z: Z coordinate of the marker (in Minecraft block units),
        image: marker image URL to display (in quotes),
        imageScale: scale of the image (e.g. 1 = display full size, 0.5 = display half size),
        imageAnchor: [0.5, 1] means the tip of the pin is at the center-bottom of the image (see OpenLayers documentation for more info),
        text: marker text do display (in quotes),
        textColor: text color in HTML/CSS format (in quotes),
        offsetX: horizontal pixel offset of the text,
        offsetY: vertical pixel offset of the text,
        font: text font in HTML/CSS format (in quotes),
    },

Things to keep in mind:

* There are opening and closing brackets for each marker "{" and "}"
* Property names are case sensitive (i.e. "textColor" is okay, "TextColor" is not)
* There is a comma (",") at the end of each line except the opening brackets ("{")

You can use https://mapmarker.io/editor to generate custom pin images.
Use the imageScale property if the pin image is too large.

*/




UnminedCustomMarkers = {

    isEnabled: true,

    markers: [

        // Example 1: Simple marker
        /*{
            x: 29,
            z: -240,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },*/

        // Example 2: Marker with text
        {
            x: 0,
            z: 0,
            image: "https://ikwillem.net/minecraft/img/custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Spawn",
            textColor: "white",
            offsetX: 0,
            offsetY: 20,
            font: "bold 25px Calibri,sans serif",
        },
        {
            x: 2758,
            z: 1198,
            image: "https://ikwillem.net/minecraft/img/custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Ijspegel",
            textColor: "white",
            offsetX: 0,
            offsetY: 20,
            font: "bold 25px Calibri,sans serif",
        },
        {
            x: 29,
            z: -240,
            image: "https://ikwillem.net/minecraft/img/main.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Main",
            textColor: "white",
            offsetX: 0,
            offsetY: 20,
            font: "bold 25px Calibri,sans serif",
        },
        {
            x: -760,
            z: -260,
            image: "https://ikwillem.net/minecraft/img/mochi.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Mochi-town",
            textColor: "white",
            offsetX: 0,
            offsetY: 20,
            font: "bold 25px Calibri,sans serif",
        },
        {
            x: -242,
            z: -609,
            image: "https://ikwillem.net/minecraft/img/Grid.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Grid-city",
            textColor: "white",
            offsetX: 0,
            offsetY: 20,
            font: "bold 25px Calibri,sans serif",
        },
        {
            x: 108,
            z: -945,
            image: "https://ikwillem.net/minecraft/img/delft.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Nieuw Delft",
            textColor: "white",
            offsetX: 0,
            offsetY: 20,
            font: "bold 25px Calibri,sans serif",
        },
        {
            x: 2100,
            z: -9609,
            image: "https://ikwillem.net/minecraft/img/woodland.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Woodland",
            textColor: "white",
            offsetX: 0,
            offsetY: 20,
            font: "bold 25px Calibri,sans serif",
        },
        {
            x: 445,
            z: 1356,
            image: "https://ikwillem.net/minecraft/img/firewatch.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Woodland Base",
            textColor: "white",
            offsetX: 0,
            offsetY: 20,
            font: "bold 25px Calibri,sans serif",
        },
        {
            x: 446,
            z: -4017,
            image: "https://ikwillem.net/minecraft/img/mars.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Mars",
            textColor: "white",
            offsetX: 0,
            offsetY: 20,
            font: "bold 25px Calibri,sans serif",
        },
        {
            x: 10403,
            z: -4575,
            image: "https://ikwillem.net/minecraft/img/nether.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Nether dorp",
            textColor: "white",
            offsetX: 0,
            offsetY: 20,
            font: "bold 25px Calibri,sans serif",
        },
        {
            x: 2423,
            z: 1710,
            image: "https://ikwillem.net/minecraft/img/jungle.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Junglebase Q",
            textColor: "white",
            offsetX: 0,
            offsetY: 20,
            font: "bold 25px Calibri,sans serif",
        },
        {
            x: 443,
            z: 250,
            image: "https://ikwillem.net/minecraft/img/roman.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Roman the Great",
            textColor: "white",
            offsetX: 0,
            offsetY: 20,
            font: "bold 25px Calibri,sans serif",
        },
        {
            x: 332,
            z: -20,
            image: "https://ikwillem.net/minecraft/img/MQD.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Stad MQD",
            textColor: "white",
            offsetX: 0,
            offsetY: 20,
            font: "bold 25px Calibri,sans serif",
        },
        {
            x: 400,
            z: -430,
            image: "https://ikwillem.net/minecraft/img/shire.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Shire",
            textColor: "white",
            offsetX: 0,
            offsetY: 20,
            font: "bold 25px Calibri,sans serif",
        },
        {
            x: 4117,
            z: -1555,
            image: "https://ikwillem.net/minecraft/img/dirksland.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Nieuw Dirksland",
            textColor: "white",
            offsetX: 0,
            offsetY: 20,
            font: "bold 25px Calibri,sans serif"
        },
        {
            x: 249,
            z: -1154,
            image: "https://ikwillem.net/minecraft/img/shrine.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Takikomori Jinja",
            textColor: "white",
            offsetX: 0,
            offsetY: 20,
            font: "bold 25px Calibri,sans serif"
        },
        {
            x: -25,
            z: -1200,
            image: "https://ikwillem.net/minecraft/img/eiland.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Okina kame",
            textColor: "white",
            offsetX: 0,
            offsetY: 20,
            font: "bold 25px Calibri,sans serif",
            textOutlineColor: "black",
            textOutlineWidth: 3,
        },
        {
            x: 2355,
            z: 1382,
            image: "https://ikwillem.net/minecraft/img/panda.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Panda kwekerij",
            textColor: "white",
            offsetX: 0,
            offsetY: 20,
            font: "bold 25px Calibri,sans serif",
            textOutlineColor: "black",
            textOutlineWidth: 3,
        },
        {
            x: -150,
            z: 9437,
            image: "https://ikwillem.net/minecraft/img/desert.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Desertbase Q",
            textColor: "white",
            offsetX: 0,
            offsetY: 20,
            font: "bold 25px Calibri,sans serif",
            textOutlineColor: "black",
            textOutlineWidth: 3,
        },
        {
            x: -1852,
            z: 1731,
            image: "https://ikwillem.net/minecraft/img/mountain.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Mountainbase Q",
            textColor: "white",
            offsetX: 0,
            offsetY: 20,
            font: "bold 25px Calibri,sans serif",
            textOutlineColor: "black",
            textOutlineWidth: 3,
        },
        {
            x: -144,
            z: -77,
            image: "https://ikwillem.net/minecraft/img/blossom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Blossombase",
            textColor: "white",
            offsetX: 0,
            offsetY: 20,
            font: "bold 25px Calibri,sans serif",
            textOutlineColor: "black",
            textOutlineWidth: 3,
        },
        {
            x: 2383,
            z: -1542,
            image: "https://ikwillem.net/minecraft/img/mark.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Nix",
            textColor: "white",
            offsetX: 0,
            offsetY: 20,
            font: "bold 25px Calibri,sans serif",
            textOutlineColor: "black",
            textOutlineWidth: 3,
        },
        {
            x: 2615,
            z: 351,
            image: "https://ikwillem.net/minecraft/img/sea.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Sea Temple Q",
            textColor: "white",
            offsetX: 0,
            offsetY: 20,
            font: "bold 25px Calibri,sans serif",
            textOutlineColor: "black",
            textOutlineWidth: 3,
        },
        {
            x: -2315,
            z: 1431,
            image: "https://ikwillem.net/minecraft/img/end.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "End Portal",
            textColor: "white",
            offsetX: 0,
            offsetY: 20,
            font: "bold 25px Calibri,sans serif",
            textOutlineColor: "black",
            textOutlineWidth: 3,
        },
        {
            x: -2653,
            z: 2377,
            image: "https://ikwillem.net/minecraft/img/deepslate.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Deepslate Base",
            textColor: "white",
            offsetX: 0,
            offsetY: 20,
            font: "bold 25px Calibri,sans serif",
            textOutlineColor: "black",
            textOutlineWidth: 3,
        },
        {
            x: 1100,
            z: -2035,
            image: "https://ikwillem.net/minecraft/img/custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "?",
            textColor: "white",
            offsetX: 0,
            offsetY: 20,
            font: "bold 25px Calibri,sans serif",
            textOutlineColor: "black",
            textOutlineWidth: 3,
        },
        {
            x: 70,
            z: -1397,
            image: "https://ikwillem.net/minecraft/img/custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Hutjes",
            textColor: "white",
            offsetX: 0,
            offsetY: 20,
            font: "bold 25px Calibri,sans serif",
            textOutlineColor: "black",
            textOutlineWidth: 3,
        },



        // Example 3: Text only
        /*{
            x: 200,
            z: 200,
            text: "Text only", 
            textColor: "yellow", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 50px Calibri,sans serif",
        },*/

        // add your markers here




        // do not delete the following two closing brackets
    ]
}


