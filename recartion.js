const topics = {
    "groups": [
        {
            "name": "Event",
            "groups": [
                {
                    "name": "Service",
                    "subscriptions": [
                        {
                            "topic": "SERVICE_STATUS_PRESETS"
                        },
                        {
                            "topic": "AIRCRAFT_ACTIVATION",
    
                        },
                        {
                            "topic": "OUT_OF_SERVICE",
    
                        }
                    ]
                }
            ]
        },
        {
            "name": "Enquiries",
            "groups": [
                {
                    "name": "Service-related",
                    "subscriptions": [
                        {
    
                            "topic": "PROMO_CODES_REQUESTS",
    
                        }
                    ]
                }
            ]
        }
    ],
    "subscriptions": [
        {
            "topic": "BANNERS",
        },
        {
            "topic": "DOCUMENTS",
        },
        {
            "topic": "USER",
        }
    ]
    }
    
    function getTopics(obj){
      if(typeof obj !== 'object') return [];
      if(obj.topic) return [obj.topic];
      var res = [];
      for(var i in obj){
        res.push(...getTopics(obj[i]));
      }
      return res;
    }
    
    
    console.log(getTopics(topics));