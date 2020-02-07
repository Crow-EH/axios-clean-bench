'use strict'

const express = require('express')
const app = express()

app.get('/mock', (_req, res) => {
    res.send({
        "data": {
            "catalog": {
                "list": {
                    "id": "KIHGIJLHGOKLYGKU",
                    "idRevision": "KUFGYHJKGFJKG",
                    "objectType": "sdfgsfdgh",
                    "contentType": "",
                    "titles": {
                        "title": "",
                        "epgTitle": null
                    },
                    "morality": 4,
                    "contextUnit": {
                        "titles": {
                            "titleDivisible": "dfhdfgjhdfjfdjfdhfdh",
                            "titleIndivisible": null,
                            "subTitleDivisible": null,
                            "subTitleIndivisible": null
                        }
                    },
                    "contextList": {
                        "titles": {}
                    },
                    "genre": {
                        "primary": {
                            "id": "4",
                            "self": {
                                "label": "",
                                "display": true
                            }
                        }
                    },
                    "contents": {
                        "pageInfo": {
                            "hasNextPage": false,
                            "hasPreviousPage": false
                        },
                        "edges": [
                            {
                                "cursor": "sdfhsdhsdhsdhsdhsdh",
                                "node": {
                                    "id": "fsdghsrdhzrehzreh",
                                    "objectType": "",
                                    "idRevision": null,
                                    "channels": {
                                        "display": {
                                            "name": "zesdgyhzesghqsdfg",
                                            "pictures": [ undefined ]
                                        }
                                    },
                                    "contentType": "qsdfgqsdfg",
                                    "titles": {
                                        "title": "",
                                        "epgTitle": null
                                    },
                                    "stickers": [],
                                    "idEdito": "qgsdgsdgsdg",
                                    "num": null,
                                    "morality": 1,
                                    "diffusionDate": null,
                                    "duration": 107,
                                    "contextUnit": {
                                        "titles": {
                                            "titleDivisible": "",
                                            "titleIndivisible": null,
                                            "subTitleDivisible": "sdgsdgsdg",
                                            "subTitleIndivisible": null
                                        }
                                    },
                                    "contextList": {
                                        "titles": {
                                            "titleDivisible": "dwsgsdgsdgsdg",
                                            "titleIndivisible": null,
                                            "subTitleDivisible": "sdgsdgsdg"
                                        }
                                    },
                                    "contextSeason": null,
                                    "URLImage": [
                                        {},
                                        {
                                            "url": null,
                                            "format": null
                                        }
                                    ],
                                    "parent": null,
                                    "availabilities": {
                                        "available": {
                                            "catchup": null,
                                            "tvod": {
                                                "format": {
                                                    "dst" : null
                                                }
                                            },
                                            "svod": null,
                                            "pretvod": null,
                                            "posttvod": null,
                                            "live": null
                                        }
                                    },
                                    "genre": {
                                        "primary": {
                                            "id": "4",
                                            "self": {
                                                "label": "qsdgqsdgsdqgsdqg",
                                                "display": true
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    }
                }
            }
        }
    })
})

app.listen(8081)

module.exports = app
