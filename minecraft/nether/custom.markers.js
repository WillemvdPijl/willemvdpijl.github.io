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
        /*
        // Example 1: Simple marker
        {
            x: -200,
            z: -200,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },*/

        // Example 2: Marker with text
        {
            x: 299,
            z: -184,
            image: "portal.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Nix",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },
        {
            x: -16,
            z: -29,
            image: "portal.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Main",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },
        {
            x: 524,
            z: -196,
            image: "portal.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Nieuw Dirksland",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },
        {
            x: 1296,
            z: -571,
            image: "portal.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Nether dorp",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },
        {
            x: 54,
            z: 9,
            image: "portal.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Stad MQD",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },
        {
            x: -44,
            z: -86,
            image: "portal.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Grid City",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },
        {
            x: -5,
            z: 1183,
            image: "portal.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Desert Base Q",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },
        {
            x: 54,
            z: -498,
            image: "portal.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Mars",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },
        {
            x: 320,
            z: 36,
            image: "portal.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Sea Temple Q",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },
        {
            x: 293,
            z: 226,
            image: "portal.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Junglebase Q",
            textColor: "white",
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },
        {
            x: -182,
            z: 101,
            image: "portal.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Mega Taiga",
            textColor: "white",
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },
        {
            x: -285,
            z: 181,
            image: "end.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "End",
            textColor: "white",
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },
        {
            x: -238,
            z: 221,
            image: "portal.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Mountainbase Q",
            textColor: "white",
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

        /*
        // Example 3: Text only
        {
            x: 200,
            z: 200,
            text: "Text only", 
            textColor: "yellow", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 50px Calibri,sans serif",
        },
        */
        // add your markers here




        // do not delete the following two closing brackets
    ]
}
