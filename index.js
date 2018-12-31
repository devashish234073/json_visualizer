var json_visualizer=require("./json_visualizer");
var json={name:"Devashish",roll:100610,marks:[12,34,45,56]};

var trainStatus={
  "response_code": 200,
  "debit": 3,
  "position": "Train has reached Destination and late by 5 minutes",
  "train": {
    "number": "12046",
    "name": "CDG NDLS SHTBDI"
  },
  "route": [
    {
      "no": 1,
      "day": 0,
      "station": {
        "name": "CHANDIGARH",
        "code": "CDG"
      },
      "has_arrived": false,
      "has_departed": true,
      "distance": 0,
      "scharr": "Source",
      "schdep": "12:00",
      "actarr": "00:00",
      "actdep": "12:00",
      "scharr_date": "19 Nov 2015",
      "actarr_date": "19 Nov 2015",
      "latemin": 0
    },
    {
      "no": 2,
      "day": 0,
      "station": {
        "name": "AMBALA CANT JN",
        "code": "UMB"
      },
      "has_arrived": true,
      "has_departed": true,
      "distance": 67,
      "scharr": "12:40",
      "schdep": "12:42",
      "actarr": "12:40",
      "actdep": "12:42",
      "scharr_date": "19 Nov 2015",
      "actarr_date": "19 Nov 2015",
      "latemin": 0
    },
    {
      "no": 3,
      "day": 0,
      "station": {
        "name": "NEW DELHI",
        "code": "NDLS"
      },
      "has_arrived": true,
      "has_departed": false,
      "distance": 265,
      "scharr": "15:25",
      "schdep": "Destination",
      "actarr": "15:30",
      "actdep": "00:00",
      "scharr_date": "19 Nov 2015",
      "actarr_date": "19 Nov 2015",
      "latemin": 5
    }
  ]
};

var trainRoute={
  "response_code": 200,
  "debit": 1,
  "train": {
    "name": "KLK-NDLS SHATABDI EXP",
    "number": "12006",
    "days": [
      {
        "code": "MON",
        "runs": "Y"
      },
      {
        "code": "TUE",
        "runs": "Y"
      },
      {
        "code": "WED",
        "runs": "Y"
      },
      {
        "code": "THU",
        "runs": "Y"
      },
      {
        "code": "FRI",
        "runs": "Y"
      },
      {
        "code": "SAT",
        "runs": "Y"
      },
      {
        "code": "SUN",
        "runs": "Y"
      }
    ],
    "classes": [
      {
        "code": "3A",
        "available": "N"
      },
      {
        "code": "SL",
        "available": "N"
      },
      {
        "code": "1A",
        "available": "N"
      },
      {
        "code": "2S",
        "available": "N"
      },
      {
        "code": "FC",
        "available": "N"
      },
      {
        "code": "2A",
        "available": "N"
      },
      {
        "code": "CC",
        "available": "N"
      },
      {
        "code": "3E",
        "available": "N"
      }
    ]
  },

  "route": [
    {
      "no": 1,
      "scharr": "SOURCE",
      "schdep": "06:15",
      "distance": 0,
      "halt": -1,
      "day": 1,
      "station": {
        "name": "KALKA",
        "code": "KLK",
        "lng": null,
        "lat": null
      }
    },
    {
      "no": 2,
      "scharr": "06:45",
      "schdep": "06:53",
      "distance": 37,
      "halt": 8,
      "day": 1,
      "station": {
        "name": "CHANDIGARH",
        "code": "CDG",
        "lng": null,
        "lat": null
      }
    },
    {
      "no": 3,
      "scharr": "07:33",
      "schdep": "07:38",
      "distance": 104,
      "halt": 5,
      "day": 1,
      "station": {
        "name": "AMBALA CANT JN",
        "code": "UMB",
        "lng": null,
        "lat": null
      }
    },
    {
      "no": 4,
      "scharr": "08:10",
      "schdep": "08:12",
      "distance": 146,
      "halt": 2,
      "day": 1,
      "station": {
        "name": "KURUKSHETRA JN",
        "code": "KKDE",
        "lng": null,
        "lat": null
      }
    },
    {
      "no": 5,
      "scharr": "10:20",
      "schdep": "DEST",
      "distance": 302,
      "halt": -1,
      "day": 1,
      "station": {
        "name": "NEW DELHI",
        "code": "NDLS",
        "lng": null,
        "lat": null
      }
    }
  ]
};

json_visualizer.mapPathToJson("/",trainStatus);
json_visualizer.mapPathToJson("/trainRoute",trainRoute);

json_visualizer.hostToPort(8899);