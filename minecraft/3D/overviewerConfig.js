var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "survival"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1742207075",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        },
        "attribution": null
    },
    "tilesets": [
        {
            "name": "east",
            "zoomLevels": 10,
            "defaultZoom": 1,
            "maxZoom": 10,
            "path": "East",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "survival",
            "last_rendertime": 1742201222,
            "imgextension": "jpg",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                -1,
                4
            ],
            "lastrenderversion": 2,
            "minZoom": 0,
            "spawn": [
                0,
                -1,
                4
            ],
            "north_direction": 1
        },
        {
            "name": "west",
            "zoomLevels": 10,
            "defaultZoom": 1,
            "maxZoom": 10,
            "path": "West",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "survival",
            "last_rendertime": 1742201222,
            "imgextension": "jpg",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                -1,
                4
            ],
            "lastrenderversion": 2,
            "minZoom": 0,
            "spawn": [
                0,
                -1,
                4
            ],
            "north_direction": 3
        }
    ]
};
