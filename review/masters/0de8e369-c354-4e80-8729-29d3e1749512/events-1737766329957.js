jQuery("#simulation")
  .on("click", ".m-0de8e369-c354-4e80-8729-29d3e1749512 .click,.m-0de8e369-c354-4e80-8729-29d3e1749512.click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#Text_cell_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-0de8e369-c354-4e80-8729-29d3e1749512 #Text_cell_6 > .cellContainerChild > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "3.0px"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-0de8e369-c354-4e80-8729-29d3e1749512 #Text_cell_8 > .cellContainerChild > .borderLayer",
                  "#m-0de8e369-c354-4e80-8729-29d3e1749512 #Text_cell_9 > .cellContainerChild > .borderLayer",
                  "#m-0de8e369-c354-4e80-8729-29d3e1749512 #Text_cell_10 > .cellContainerChild > .borderLayer",
                  "#m-0de8e369-c354-4e80-8729-29d3e1749512 #Text_cell_7 > .cellContainerChild > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "0.0px"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#Text_cell_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-0de8e369-c354-4e80-8729-29d3e1749512 #Text_cell_7 > .cellContainerChild > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "3.0px"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-0de8e369-c354-4e80-8729-29d3e1749512 #Text_cell_6 > .cellContainerChild > .borderLayer",
                  "#m-0de8e369-c354-4e80-8729-29d3e1749512 #Text_cell_8 > .cellContainerChild > .borderLayer",
                  "#m-0de8e369-c354-4e80-8729-29d3e1749512 #Text_cell_9 > .cellContainerChild > .borderLayer",
                  "#m-0de8e369-c354-4e80-8729-29d3e1749512 #Text_cell_10 > .cellContainerChild > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "0.0px"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f039f78b-a73e-4796-a533-c5a4221d858b"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#Text_cell_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-0de8e369-c354-4e80-8729-29d3e1749512 #Text_cell_8 > .cellContainerChild > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "3.0px"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-0de8e369-c354-4e80-8729-29d3e1749512 #Text_cell_6 > .cellContainerChild > .borderLayer",
                  "#m-0de8e369-c354-4e80-8729-29d3e1749512 #Text_cell_9 > .cellContainerChild > .borderLayer",
                  "#m-0de8e369-c354-4e80-8729-29d3e1749512 #Text_cell_10 > .cellContainerChild > .borderLayer",
                  "#m-0de8e369-c354-4e80-8729-29d3e1749512 #Text_cell_7 > .cellContainerChild > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "0.0px"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0d4dc535-b02a-4571-9f59-3dca49473d8b"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#Text_cell_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-0de8e369-c354-4e80-8729-29d3e1749512 #Text_cell_9 > .cellContainerChild > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "3.0px"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-0de8e369-c354-4e80-8729-29d3e1749512 #Text_cell_6 > .cellContainerChild > .borderLayer",
                  "#m-0de8e369-c354-4e80-8729-29d3e1749512 #Text_cell_8 > .cellContainerChild > .borderLayer",
                  "#m-0de8e369-c354-4e80-8729-29d3e1749512 #Text_cell_10 > .cellContainerChild > .borderLayer",
                  "#m-0de8e369-c354-4e80-8729-29d3e1749512 #Text_cell_7 > .cellContainerChild > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "0.0px"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a0b0d11b-dc4a-4716-aebb-c01998cc7863"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#Text_cell_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-0de8e369-c354-4e80-8729-29d3e1749512 #Text_cell_10 > .cellContainerChild > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "3.0px"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-0de8e369-c354-4e80-8729-29d3e1749512 #Text_cell_6 > .cellContainerChild > .borderLayer",
                  "#m-0de8e369-c354-4e80-8729-29d3e1749512 #Text_cell_8 > .cellContainerChild > .borderLayer",
                  "#m-0de8e369-c354-4e80-8729-29d3e1749512 #Text_cell_9 > .cellContainerChild > .borderLayer",
                  "#m-0de8e369-c354-4e80-8729-29d3e1749512 #Text_cell_7 > .cellContainerChild > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "0.0px"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/89cf7d1f-168d-4e2c-a7bf-6ab0781e66cc"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  });