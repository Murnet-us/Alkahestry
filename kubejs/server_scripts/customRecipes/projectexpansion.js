// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Project Expansion Recipes Loading.')

onEvent('recipes', event => {
	// Change recipes here
	
    //Transmutation Interface
    event.remove({id: "projectexpansion:transmutation_interface"})
    event.custom({
        type: "extendedcrafting:shaped_table",
        pattern: [
            "XXXXXXXXX",
            "XXXXXXXXX",
            "XXYYYYYXX",
            "XXYYYYYXX",
            "XXYYZYYXX",
            "XXYYYYYXX",
            "XXYYYYYXX",
            "XXXXXXXXX",
            "XXXXXXXXX"
        ],
        key: {
            "Y": {
                tag: "forge:dyes"
            },
            "X": {
                item: "extendedcrafting:black_iron_ingot"
            },
            "Z": {
                item: "extendedcrafting:frame"
            }
        },
        result: {
            item: "projectexpansion:transmutation_interface"
        }
    })

    //Basic EMC Link
    event.remove({id: "projectexpansion:basic_emc_link"})
    event.shaped('projectexpansion:basic_emc_link', [
        'ABC',
        'DED',
        'CBA'
    ],
    {
        A: 'projecte:low_covalence_dust',
        B: 'projecte:medium_covalence_dust',
        C: 'projecte:high_covalence_dust',
        D: 'projecte:transmutation_table',
        E: 'minecraft:emerald_block'
    }
    )

    //Compressed Collectors
    event.remove({id: 'projectexpansion:collector/mk1_conversion'})
    event.remove({id: 'projectexpansion:collector/mk2_conversion'})
    event.remove({id: 'projectexpansion:collector/mk3_conversion'})
    event.remove({id: 'projectexpansion:collector/basic'})
    event.remove({id: 'projectexpansion:collector/dark'})
    event.remove({id: 'projectexpansion:collector/red'})
    event.remove({id: 'projectexpansion:collector/magenta'})
    event.remove({id: 'projectexpansion:collector/pink'})
    event.remove({id: 'projectexpansion:collector/violet'})
    event.remove({id: 'projectexpansion:collector/purple'})
    event.remove({id: 'projectexpansion:collector/blue'})
    event.remove({id: 'projectexpansion:collector/cyan'})
    event.remove({id: 'projectexpansion:collector/green'})
    event.remove({id: 'projectexpansion:collector/lime'})
    event.remove({id: 'projectexpansion:collector/white'})
    event.remove({id: 'projectexpansion:collector/yellow'})
    event.remove({id: 'projectexpansion:collector/fading'})
    event.remove({id: 'projectexpansion:collector/final'})
    event.shaped('projectexpansion:basic_compressed_collector', [
        ' A ',
        'ABA',
        ' A '
    ],
    {
        A: 'projecte:transmutation_table',
        B: 'projectexpansion:basic_emc_link'
    })

    event.shaped('projectexpansion:dark_compressed_collector', [
        ' A ',
        'ABA',
        ' A '
    ],
    {
        A: 'projecte:dark_matter',
        B: 'projectexpansion:basic_compressed_collector',
    }
    )

    event.shaped('projectexpansion:red_compressed_collector', [
        ' A ',
        'ABA',
        ' A '
    ],
    {
        A: 'projecte:red_matter',
        B: 'projectexpansion:dark_compressed_collector'
    })

    event.shaped('projectexpansion:magenta_compressed_collector', [
        ' A ',
        'ABA',
        ' A '
    ],
    {
        A: 'projectexpansion:magenta_matter',
        B: 'projectexpansion:red_compressed_collector'
    })

    event.shaped('projectexpansion:pink_compressed_collector', [
        ' A ',
        'ABA',
        ' A '
    ],
    {
        A: 'projectexpansion:pink_matter',
        B: 'projectexpansion:magenta_compressed_collector'
    })

    event.shaped('projectexpansion:purple_compressed_collector', [
        ' A ',
        'ABA',
        ' A '
    ],
    {
        A: 'projectexpansion:purple_matter',
        B: 'projectexpansion:pink_compressed_collector'
    })

    event.shaped('projectexpansion:violet_compressed_collector', [
        ' A ',
        'ABA',
        ' A '
    ],
    {
        A: 'projectexpansion:violet_matter',
        B: 'projectexpansion:purple_compressed_collector'
    })

    event.shaped('projectexpansion:blue_compressed_collector', [
        ' A ',
        'ABA',
        ' A '
    ],
    {
        A: 'projectexpansion:blue_matter',
        B: 'projectexpansion:violet_compressed_collector'
    })

    event.shaped('projectexpansion:cyan_compressed_collector', [
        ' A ',
        'ABA',
        ' A '
    ],
    {
        A: 'projectexpansion:cyan_matter',
        B: 'projectexpansion:blue_compressed_collector'
    })

    event.shaped('projectexpansion:green_compressed_collector', [
        ' A ',
        'ABA',
        ' A '
    ],
    {
        A: 'projectexpansion:green_matter',
        B: 'projectexpansion:cyan_compressed_collector'
    }
    )

    event.shaped('projectexpansion:lime_compressed_collector', [
        ' A ',
        'ABA',
        ' A '
    ], 
    {
        A: 'projectexpansion:lime_matter',
        B: 'projectexpansion:green_compressed_collector'
    })

    event.shaped('projectexpansion:yellow_compressed_collector', [
        ' A ',
        'ABA',
        ' A '
    ],
    {
        A: 'projectexpansion:yellow_matter',
        B: 'projectexpansion:lime_compressed_collector'
    })

    event.shaped('projectexpansion:orange_compressed_collector', [
        ' A ',
        'ABA',
        ' A '
    ],
    {
        A: 'projectexpansion:orange_matter',
        B: 'projectexpansion:yellow_compressed_collector'
    })

    event.shaped('projectexpansion:white_compressed_collector', [
        ' A ',
        'ABA',
        ' A '
    ],
    {
        A: 'projectexpansion:white_matter',
        B: 'projectexpansion:orange_compressed_collector'
    })

    event.shaped('projectexpansion:fading_compressed_collector', [
        ' A ',
        'ABA',
        ' A '
    ],
    {
        A: 'projectexpansion:fading_matter',
        B: 'projectexpansion:white_compressed_collector'
    })

    event.shaped('projectexpansion:final_compressed_collector', [
        'AAA',
        'ABA',
        'AAA'
    ],
    {
        A: 'projectexpansion:final_star_shard',
        B: 'projectexpansion:fading_compressed_collector'
    }
    )

    //Final Star

})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})