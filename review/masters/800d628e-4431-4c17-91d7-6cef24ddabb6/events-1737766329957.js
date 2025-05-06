jQuery("#simulation")
  .on("click", ".m-800d628e-4431-4c17-91d7-6cef24ddabb6 .click,.m-800d628e-4431-4c17-91d7-6cef24ddabb6.click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-800d628e-4431-4c17-91d7-6cef24ddabb6 #Path_212 svg" ],
                    "attributes": {
                      "path-background-color": "#000000",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-800d628e-4431-4c17-91d7-6cef24ddabb6 #Path_481 svg",
                  "#m-800d628e-4431-4c17-91d7-6cef24ddabb6 #Path_115 svg",
                  "#m-800d628e-4431-4c17-91d7-6cef24ddabb6 #Path_63 svg" ],
                    "attributes": {
                      "path-background-color": "#ABABAB",
                      "path-background-opacity": "1.0"
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
    } else if(jFirer.is("#Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-800d628e-4431-4c17-91d7-6cef24ddabb6 #Path_115 svg" ],
                    "attributes": {
                      "path-background-color": "#000000",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-800d628e-4431-4c17-91d7-6cef24ddabb6 #Path_481 svg",
                  "#m-800d628e-4431-4c17-91d7-6cef24ddabb6 #Path_63 svg",
                  "#m-800d628e-4431-4c17-91d7-6cef24ddabb6 #Path_212 svg" ],
                    "attributes": {
                      "path-background-color": "#ABABAB",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4e50abf3-09ec-4622-804a-9bc1915e8d28"
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
    } else if(jFirer.is("#Hotspot_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-800d628e-4431-4c17-91d7-6cef24ddabb6 #Path_481 svg" ],
                    "attributes": {
                      "path-background-color": "#000000",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-800d628e-4431-4c17-91d7-6cef24ddabb6 #Path_115 svg",
                  "#m-800d628e-4431-4c17-91d7-6cef24ddabb6 #Path_63 svg",
                  "#m-800d628e-4431-4c17-91d7-6cef24ddabb6 #Path_212 svg" ],
                    "attributes": {
                      "path-background-color": "#ABABAB",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8def10ed-db8b-480b-a6f2-4f5d8baca0c4"
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
    } else if(jFirer.is("#Hotspot_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-800d628e-4431-4c17-91d7-6cef24ddabb6 #Path_63 svg" ],
                    "attributes": {
                      "path-background-color": "#000000",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-800d628e-4431-4c17-91d7-6cef24ddabb6 #Path_481 svg",
                  "#m-800d628e-4431-4c17-91d7-6cef24ddabb6 #Path_115 svg",
                  "#m-800d628e-4431-4c17-91d7-6cef24ddabb6 #Path_212 svg" ],
                    "attributes": {
                      "path-background-color": "#ABABAB",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/aa2e4e7f-834c-40ac-b871-6408ef30dd0c"
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