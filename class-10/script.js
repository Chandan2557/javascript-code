/*let arr = [
  {
    uid: 101,
    personalInfo: {
      name: {
        first: "Rahul",
        middle: "Kumar",
        last: "Sharma"
      },
      demographics: {
        age: 24,
        gender: "Male",
        nationality: "Indian"
      },
      contact: {
        primary: {
          email: "rahul.sharma@example.com",
          phone: "+91-9876543210"
        },
        secondary: {
          email: "rahul.alt@example.com",
          phone: null
        },
        address: {
          current: {
            city: "Delhi",
            state: "Delhi",
            country: "India",
            geo: {
              lat: 28.6139,
              lng: 77.2090
            }
          },
          permanent: {
            city: "Lucknow",
            state: "UP",
            country: "India"
          }
        }
      }
    },

    jobDetails: {
      employment: {
        title: "Software Engineer",
        department: {
          name: "Engineering",
          division: {
            name: "Product Development",
            budget: {
              annual: 5000000,
              approvedBy: "Board"
            }
          }
        },
        joining: {
          date: new Date("2022-06-15"),
          probation: {
            durationMonths: 6,
            completed: true,
            reviews: [
              { month: 3, rating: 4 },
              { month: 6, rating: 5 }
            ]
          }
        }
      },

      payroll: {
        salary: {
          structure: {
            base: 50000,
            hra: 15000,
            allowances: {
              travel: 5000,
              food: 3000
            }
          },
          deductions: {
            tax: 8000,
            pf: 2000
          }
        },
        bankDetails: {
          account: {
            number: "XXXX1234",
            ifsc: "SBIN0001234"
          }
        }
      },

      projects: [
        {
          name: "E-commerce Platform",
          deployment: {
            regions: [
              {
                name: "Asia",
                servers: [
                  { id: "AS-1", uptime: "99.9%" },
                  { id: "AS-2", uptime: "99.8%" }
                ]
              }
            ]
          }
        }
      ]
    },

    performance: {
      yearly: {
        "2023": {
          ratings: [4, 5],
          kpi: {
            tasksCompleted: 120,
            bugsResolved: 45
          }
        }
      },
      auditTrail: [
        {
          action: "Salary Updated",
          metadata: {
            changedBy: "HR",
            timestamp: new Date()
          }
        }
      ]
    },

    accessControl: {
      roles: [
        {
          name: "user",
          permissions: {
            modules: {
              dashboard: ["read"],
              reports: ["read", "export"]
            }
          }
        }
      ]
    }
  },

  // ------------------------------------------------------

  {
    uid: 102,
    personalInfo: {
      name: { first: "Priya", last: "Verma" },
      contact: {
        emailHistory: [
          { email: "priya.old@example.com", active: false },
          { email: "priya.verma@example.com", active: true }
        ]
      }
    },

    jobDetails: {
      employment: {
        title: "Backend Architect",
        hierarchy: {
          reportsTo: {
            uid: 201,
            role: "CTO"
          },
          manages: [
            {
              team: "API Team",
              members: [
                { uid: 301, role: "Developer" },
                { uid: 302, role: "Developer" }
              ]
            }
          ]
        }
      },

      systems: {
        databases: [
          {
            name: "UserDB",
            replicas: [
              { region: "Asia", status: "Healthy" },
              { region: "EU", status: "Healthy" }
            ]
          }
        ]
      }
    },

    compliance: {
      certifications: {
        technical: [
          { name: "AWS Architect", level: "Professional" }
        ],
        security: {
          iso27001: {
            validTill: "2026-12-31",
            auditHistory: [
              { year: 2023, status: "Passed" },
              { year: 2024, status: "Passed" }
            ]
          }
        }
      }
    }
  },

  // ------------------------------------------------------

  {
    uid: 103,
    personalInfo: {
      name: { first: "Amit", last: "Kumar" },
      emergencyContacts: [
        {
          relation: "Brother",
          contact: {
            phone: "8888888888",
            address: {
              city: "Mumbai",
              zone: {
                region: "West",
                riskCategory: "Low"
              }
            }
          }
        }
      ]
    },

    jobDetails: {
      infrastructure: {
        cloud: {
          provider: "AWS",
          accounts: [
            {
              id: "ACC-01",
              environments: {
                production: {
                  clusters: [
                    {
                      name: "Cluster-A",
                      nodes: [
                        {
                          nodeId: "N1",
                          specs: {
                            cpu: "8 Core",
                            memory: "32GB",
                            storage: {
                              type: "SSD",
                              volumes: [
                                { id: "V1", size: "500GB" }
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    },

    incidentManagement: {
      incidents: [
        {
          id: "INC001",
          severity: {
            level: 1,
            description: "Critical outage"
          },
          timeline: {
            detected: new Date(),
            resolved: null
          }
        }
      ]
    }
  }
];
//console.log(arr[0].personalInfo.contact.address.current.geo.lng)//console.log(arr[0].personalInfo.contact.address.current.geo.lng)
//console.log(arr[0].jobDetails.systems.databases[0].replicas.region="op");
//console.log(arr[0].compliance.certifications.security.iso27001.validTill);
//console.log(arr[0].compliance.certifications.security.iso27001.auditHistory[1])
//console.log(arr[2].incidentManagement.incidents[0].timeline.resolved="yes")
console.log(arr[2].jobDetails.infrastructure.cloud.accounts[0].environments.production.clusters[0].nodes[0].specs.memory)

console.log(arr[2].jobDetails.infrastructure.cloud.accounts[0].environments.production.clusters[0].name)

let arr = [
{
  "id": 74498,
  "url": "https://www.tvmaze.com/shows/74498/only-child",
  "name": "Only Child",
  "type": "Scripted",
  "language": "English",
  "genres": [
    "Comedy"
  ],
  "status": "To Be Determined",
  "runtime": null,
  "averageRuntime": 28,
  "premiered": "2024-11-21",
  "ended": null,
  "officialSite": "https://www.bbc.co.uk/programmes/m00255fp",
  "schedule": {
    "time": "",
    "days": []
  },
  "rating": {
    "average": 6.2
  },
  "weight": 93,
  "network": null,
  "webChannel": {
    "id": 26,
    "name": "BBC iPlayer",
    "country": {
      "name": "United Kingdom",
      "code": "GB",
      "timezone": "Europe/London"
    },
    "officialSite": "https://www.bbc.co.uk/iplayer"
  },
  "dvdCountry": null,
  "externals": {
    "tvrage": null,
    "thetvdb": 456340,
    "imdb": null
  },
  "image": {
    "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/544/1361493.jpg",
    "original": "https://static.tvmaze.com/uploads/images/original_untouched/544/1361493.jpg"
  },
  "summary": "\u003Cp\u003ERichard's long overdue visit to recently-widowed Ken results in him realising that his dad may need a bit more full time help than he'd realised. Not that Ken would agree, but that statement is pretty much true about anything. Ken is an eccentric, strong-willed technophobe who is very much set in his ways, leaving Richard to worry about his dad growing old.\u003C/p\u003E",
  "updated": 1733280594,
  "_links": {
    "self": {
      "href": "https://api.tvmaze.com/shows/74498"
    },
    "previousepisode": {
      "href": "https://api.tvmaze.com/episodes/3044815",
      "name": "The Long Goodbye"
    }
  }
}
]

/*console.log(arr[0].language)
console.log(arr[0].network)
console.log(arr[0].genres[0])
console.log(arr[0].status)
console.log(arr[0].schedule.time.days)
console.log(arr[0].rating.average)

console.log(arr[0]._links.previousepisode.name)
console.log(arr[0].webChannel.name)
//console.log(arr[0].premiered)
//console.log(arr[0].previousepisode.name)
*/
let arr = [
{
  "organization": {
    "id": "ORG-001",
    "name": "TechNova Solutions",
    "founded": 2015,
    "status": "active",
    "headquarters": {
      "address": {
        "line1": "Sector 21",
        "city": "Delhi",
        "state": "Delhi",
        "country": "India",
        "geo": {
          "lat": 28.6139,
          "lng": 77.2090,
          "timezone": {
            "name": "Asia/Kolkata",
            "offset": "+05:30"
          }
        }
      }
    },
    "departments": [
      {
        "deptId": "ENG-01",
        "name": "Engineering",
        "budget": {
          "annual": 5000000,
          "quarterly": [1200000, 1300000, 1250000, 1250000],
          "currency": "INR"
        },
        "teams": [
          {
            "teamId": "FE-TEAM",
            "name": "Frontend Team",
            "members": [
              {
                "uid": 101,
                "profile": {
                  "name": {
                    "first": "Rahul",
                    "last": "Sharma"
                  },
                  "contacts": {
                    "emails": [
                      {
                        "type": "work",
                        "value": "rahul@technova.com",
                        "verified": true
                      }
                    ],
                    "phones": [
                      {
                        "countryCode": "+91",
                        "number": "9876543210"
                      }
                    ]
                  }
                },
                "roles": ["developer", "reviewer"],
                "accessMatrix": {
                  "modules": {
                    "dashboard": ["read"],
                    "reports": ["read", "export"],
                    "admin": []
                  }
                },
                "activityLog": [
                  {
                    "action": "LOGIN",
                    "metadata": {
                      "ip": "192.168.1.1",
                      "device": {
                        "browser": "Chrome",
                        "os": "Windows"
                      }
                    },
                    "timestamp": "2026-03-01T10:30:00Z"
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "projects": [
      {
        "projectId": "PRJ-1001",
        "name": "Global E-Commerce",
        "environments": {
          "development": {
            "url": "https://dev.globalcommerce.com",
            "features": {
              "featureFlags": [
                {
                  "key": "NEW_CHECKOUT",
                  "enabled": true,
                  "rollout": {
                    "percentage": 50,
                    "regions": ["Asia", "EU"]
                  }
                }
              ]
            }
          },
          "production": {
            "url": "https://globalcommerce.com",
            "deployment": {
              "regions": [
                {
                  "name": "Asia",
                  "servers": [
                    {
                      "serverId": "AS-01",
                      "specs": {
                        "cpu": "8 Core",
                        "memory": "32GB",
                        "storage": {
                          "type": "SSD",
                          "volumes": [
                            {
                              "volumeId": "VOL-1",
                              "sizeGB": 500,
                              "encrypted": true
                            }
                          ]
                        }
                      },
                      "monitoring": {
                        "uptimePercentage": 99.98,
                        "alerts": [
                          {
                            "severity": "high",
                            "code": "CPU_SPIKE",
                            "history": [
                              {
                                "detectedAt": "2026-02-15T11:00:00Z",
                                "resolvedAt": "2026-02-15T11:20:00Z"
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      }
    ],
    "compliance": {
      "certifications": [
        {
          "name": "ISO 27001",
          "validUntil": "2027-12-31",
          "auditHistory": [
            {
              "year": 2024,
              "result": "Passed",
              "observations": []
            },
            {
              "year": 2025,
              "result": "Passed",
              "observations": [
                {
                  "id": "OBS-01",
                  "severity": "medium",
                  "description": "Password policy needs improvement"
                }
              ]
            }
          ]
        }
      ]
    },
    "metadata": {
      "createdAt": "2015-06-01T09:00:00Z",
      "updatedAt": "2026-03-01T12:00:00Z",
      "version": {
        "major": 3,
        "minor": 2,
        "patch": 5,
        "history": [
          {
            "version": "3.2.4",
            "changes": ["Performance optimization", "Security patch"]
          }
        ]
      }
    }
  }
}
]
