angular.module('shortcutService', [])
.factory('shortcutCtrl', function() {




  return {
    containerDoc: 
      [
        {
          tab: "beer",
          categories: [
            {
              category: "Glassware",
              shortcuts: [
                {
                  name: "Pint Glass",
                  containers: 1,
                  volume: 16,
                  units: "oz"
                }
              ]
            },
            {
              category: "Bottles + Cans",
              shortcuts: [
                {
                  name: "Six Pack, 12oz",
                  containers: 6,
                  volume: 12,
                  units: "oz"
                },
                {
                  name: "Six Pack, 16oz",
                  containers: 6,
                  volume: 16,
                  units: "oz"
                },
                {
                  name: "Draught Can Four Pack",
                  containers: 4,
                  volume: 14.9,
                  units: "oz"
                },
                {
                  name: "Twelve Pack",
                  containers: 12,
                  volume: 12,
                  units: "oz"
                },
                {
                  name: "Twenty-Four Pack",
                  containers: 24,
                  volume: 12,
                  units: "oz"
                },
                {
                  name: "Thirty Rack",
                  containers: 30,
                  volume: 12,
                  units: "oz"
                }
              ]
            },
            {
              category: "Craft Bottles",
              shortcuts: [
                {
                  name: "11.2oz Bottle",
                  containers: 1,
                  volume: 11.2,
                  units: "oz"
                },
                {
                  name: "12oz Bottle",
                  containers: 1,
                  volume: 12,
                  units: "oz"
                },
                {
                  name: "Draught Can",
                  containers: 1,
                  volume: 14.9,
                  units: "oz"
                },
                {
                  name: "Bomber 1pt 2.7oz",
                  containers: 1,
                  volume: 18.7,
                  units: "oz"
                },
                {
                  name: "Bomber 1pt 6oz/22oz",
                  containers: 1,
                  volume: 22,
                  units: "oz"
                },
                {
                  name: "Bomber 1pt 9.4oz/750ml",
                  containers: 1,
                  volume: 25.4,
                  units: "oz"
                },
                {
                  name: "Growler",
                  containers: 1,
                  volume: 64,
                  units: "oz"
                }
              ]
            },
            {
              category: "Kegs",
              shortcuts: [
                {
                  name: "Mini Keg",
                  containers: 1,
                  volume: 5,
                  units: "l"
                },
                {
                  name: "Fifty Litre Keg",
                  containers: 1,
                  volume: 3.2,
                  units: "g"
                },
                {
                  name: "1/6 Barrel Keg",
                  containers: 1,
                  volume: 5.23,
                  units: "g"
                },
                {
                  name: "1/4 Barrel Keg/Pony Keg",
                  containers: 1,
                  volume: 7.75,
                  units: "g"
                },
                {
                  name: "1/2 Barrel Keg",
                  containers: 1,
                  volume: 15.5,
                  units: "g"
                }
              ]
            }
          ]
        },
        {
          tab:"wine",
          categories: [
            {
              category: "Glassware",
              shortcuts: [
                {
                  name: "Large Glass",
                  containers: 1,
                  volume: 250,
                  units: "ml"
                },
                {
                  name: "Medium Glass",
                  containers: 1,
                  volume: 175,
                  units: "ml"
                }
              ]
            },
            {
              category: "Bottles",
              shortcuts: [
                {
                  name: "Standard Bottle",
                  containers: 1,
                  volume: 750,
                  units: "ml"
                },
                {
                  name: "Magnum/1.5L Bottle",
                  containers: 1,
                  volume: 1.5,
                  units: "l"
                }
              ]
            },
            {
              category: "Boxes",
              shortcuts: [
                {
                  name: "3L Box",
                  containers: 1,
                  volume: 3,
                  units: "L"
                }
              ]
            }
          ]
        },
        {
          tab:"liquor",
          categories: [
            {
              category: "Glassware",
              shortcuts: [
                {
                  name: "Shot",
                  containers: 1,
                  volume: 1.5,
                  units: "oz"
                }
              ]
            },
            {
              category: "Bottles",
              shortcuts: [
                {
                  name: "Airplane Bottle/Nip",
                  containers: 1,
                  volume: 50,
                  units: "ml"
                },
                {
                  name: "Half Pint",
                  containers: 1,
                  volume: 200,
                  units: "ml"
                },
                {
                  name: "Pint",
                  containers: 1,
                  volume: 375,
                  units: "ml"
                },
                {
                  name: "Fifth",
                  containers: 1,
                  volume: 750,
                  units: "ml"
                },
                {
                  name: "Liter",
                  containers: 1,
                  volume: 1,
                  units: "l"
                },
                {
                  name: "Half Gallon/Handle",
                  containers: 1,
                  volume: 1.75,
                  units: "l"
                }
              ]
            }
          ]
        }
      ]
    }


});
