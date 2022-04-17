// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Mystical Agriculture recipes loaded.')

onEvent('recipes', event => {
	// Change recipes here
	
    //Prudentium Essence
    event.remove({output: "mysticalagriculture:prudentium_essence", input: "mysticalagriculture:inferium_essence"})
	event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "XXX",
            "XYX",
            "XXX"
        ],
        "key": {
            "X": {
                "item": "mysticalagriculture:inferium_essence"
            },
            "Y": {
                "tag": "mysticalagriculture:infusion_crystals"
            }
        },
        "result": {
            "item": "mysticalagriculture:prudentium_essence"
        }
    })

    //Tertium Essence
    event.remove({output: "mysticalagriculture:tertium_essnence", input: "mysticalagriculture:prudentium_essence"})
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "XXXXX",
            "XYYYX",
            "XYZYX",
            "XYYYX",
            "XXXXX"
        ],
        "key": {
            "X": {
                "item": "mysticalagriculture:inferium_essence"
            },
            "Y": {
                "item": "mysticalagriculture:prudentium_essence"
            },
            "Z": {
                "tag": "mysticalagriculture:infusion_crystals"
            }
        },
        "result": {
            "item": "mysticalagriculture:tertium_essence"
        }
    })

    //Imperium Essence
    event.remove({output: "mysticalagriculture:imperium_essence", input: "mysticalagriculture:tertium_essence"})
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "XXXXXXX",
            "XYYYYYX",
            "XYZZZYX",
            "XYZWZYX",
            "XYZZZYX",
            "XYYYYYX",
            "XXXXXXX"
        ],
        "key": {
            "X": {
                "item": "mysticalagriculture:prudentium_essence"
            },
            "Y": {
                "item": "mysticalagriculture:tertium_essence"
            },
            "Z": {
                "item": "mysticalagriculture:inferium_block"
            },
            "W": {
                "tag": "mysticalagriculture:infusion_crystals"
            }
        },
        "result": {
            "item": "mysticalagriculture:imperium_essence"
        }
    })
	
    //Supremium Essence
    event.remove({output:"mysticalagriculture:supremium_essence", input: "mysticalagriculture:imperium_essence"})
    event.custom({
        type: "extendedcrafting:shaped_table",
        pattern: [
            "XXXXXXXXX",
            "XYYYYYYYX",
            "XYWWWWWYX",
            "XYWVVVWYX",
            "XYWVZVWYX",
            "XYWVVVWYX",
            "XYWWWWWYX",
            "XYYYYYYYX",
            "XXXXXXXXX"
        ],
        key: {
            "X": {
                "item": "mysticalagriculture:tertium_essence"
            },
            "Y": {
                "item": "mysticalagriculture:imperium_essence"
            },
            "V": {
                "item": "mysticalagriculture:prudentium_block"
            },
            "W": {
                "item": "mysticalagriculture:inferium_block"
            },
            "Z": {
                "tag": "mysticalagriculture:infusion_crystals"
            }
        },
        result: {
            "item": "mysticalagriculture:supremium_essence"
        }
    })

    //Insanium Essence
    event.remove({output: "mysticalagradditions:insanium_essence", input: "mysticalagriculture:supremium_essence"})
    event.custom({
        type: "extendedcrafting:shaped_table",
        pattern:[
            "XXXXXXXXX",
            "XXXXXXXXX",
            "XXXXXXXXX",
            "XXXXXXXXX",
            "XXXXZXXXX",
            "XXXXXXXXX",
            "XXXXXXXXX",
            "XXXXXXXXX",
            "XXXXXXXXX"
        ],
        key: {
            "X": {
                "item": "mysticalagriculture:supremium_block"
            },
            "Z": {
                "tag": "mysticalagriculture:infusion_crystals"
            }
        },
        result: {
            "item": "mysticalagradditions:insanium_essence"
        }
    })

})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})