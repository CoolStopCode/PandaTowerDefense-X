const pandas = {
    "panda": {
        "basic": {
            "info": {
                "platfomr-color": "#696969",
                "name": "Basic"
            },
            "panda": {
                "biting": {
                    "name": "Biting Panda",
                    "type": "melee",
                    "class": "basic",
                    "base-price": 100,
                    "levels": {
                        1: {
                            "upgrade-name": "",
                            "attack-rate": 1, 
                            "damage": 10,
                            "range": 50,
                        },
                        2: {
                            "upgrade-name": "Quicker Chomps",
                            "attack-rate": 1.6, 
                            "damage": 10,
                            "range": 55,
                        },
                        3: {
                            "upgrade-name": "Stronger Bites",
                            "attack-rate": 1.6, 
                            "damage": 20,
                            "range": 80,
                        },
                        4: {
                            "upgrade-name": "Stronger Bites",
                            "attack-rate": 1.6, 
                            "damage": 20,
                            "range": 80,
                        }
                    }
                },
                    "clawing": {
                    "name": "Clawing Panda",
                    "type": "melee",
                    "class": "basic",
                    "attack-rate": 1.7, 
                    "damage": 5,
                    "range": 75,
                    "price": 125
                },
                "smashing": {
                    "name": "Smashing Panda",
                    "type": "melee",
                    "class": "basic",
                    "attack-rate": 0.7, 
                    "damage": 15,
                    "range": 50,
                    "price": 125
                },
            }
        },
        "giant": {
            "info": {
                "platfomr-color": "#408a29",
                "name": "Giant"
            },
            "panda": {
                "giant": {
                    "name": "Smashing Panda",
                    "type": "range",
                    "class": "giant",
                    "attack-rate": 0.8, 
                    "damage": 20,
                    "range": 150,
                    "price": 250
                },
                "gold": {
                    "name": "Gold Panda",
                    "type": "laser",
                    "class": "giant",
                    "attack-rate": 0.4, 
                    "damage": 10,
                    "range": 150,
                    "price": 500
                },
                "magic": {
                    "name": "Magic Panda",
                    "type": "magic",
                    "class": "giant",
                    "attack-rate": 0.8,
                    "damage": 2,
                    "range": 100,
                    "price": 250
                }
            }
        },
        "red": {
            "info": {
                "platfomr-color": "#a32300",
                "name": "Red"
            },
            "panda": {
                "red": {
                    "name": "Red Panda",
                    "type": "melee",
                    "class": "red",
                    "attack-rate": 3, 
                    "damage": 20,
                    "range": 150,
                    "price": 250
                },
                "sniper": {
                    "name": "Sniper Panda",
                    "type": "laser",
                    "class": "giant",
                    "attack-rate": 0.8, 
                    "damage": 30,
                    "range": 150,
                    "price": 250
                },
                "fire": {
                    "name": "Fire Panda",
                    "type": "magic",
                    "class": "giant",
                    "attack-rate": 0.8, 
                    "damage": 20,
                    "range": 150,
                    "price": 250
                }
            }
        }
    }
}