var APP_DATA = {
  "scenes": [
    {
      "id": "0-welcome-desk",
      "name": "Welcome Desk",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.009185733600029167,
        "pitch": 0,
        "fov": 1.42490816401212
      },
      "linkHotspots": [
        {
          "yaw": 1.593048745927324,
          "pitch": 0.14409840102256233,
          "rotation": 0,
          "target": "1-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-lobby",
      "name": "Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.5443341349102369,
        "pitch": -0.07326005984638684,
        "fov": 1.42490816401212
      },
      "linkHotspots": [
        {
          "yaw": -2.4909877440212256,
          "pitch": 0.11562222880738915,
          "rotation": 0,
          "target": "2-female-waiting-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-female-waiting-area",
      "name": "Female Waiting Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8176630317574318,
          "pitch": 0.12487689397567792,
          "rotation": 0,
          "target": "1-lobby"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
