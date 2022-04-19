// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here
	
	
    //Transmutation Table
    event.remove({id: "projecte:transmutation_table"})
	event.shaped('projecte:transmutation_table', [
		'XYX',
		'YZY',
		'XYX'
	], {
		X: 'minecraft:cobblestone',
		Y: '#forge:stone',
		Z: 'minecraft:crafting_table'
	})

    //Philosopher's Stone
    event.remove({id:  "projecte:philosophers_stone"})
    event.remove({id: "projecte:philosophers_stone_alt"})
    event.custom({
        type: "extendedcrafting:shaped_table",
        pattern: [
            "ABACCCABA",
            "AACDDDCAA",
            "ACEEFFDCA",
            "CDEEGHFDC",
            "CDFGIGFDC",
            "CDFHGHFDC",
            "ACDFFFDCA",
            "BACDDDCAB",
            " BACCCAB "
        ],
        key: {
            A: {
                item: "elementalcraft:fireite_ingot"
            },
            B: {
                item:  "thermal:signalum_ingot"
            },
            C: {
                item: "iceandfire:dragonsteel_fire_ingot"
            },
            D: {
                item: "draconicevolution:awakened_draconium_ingot"
            },
            E: {
                item: "botania:gaia_ingot"
            },
            F: {
                item: "iceandfire:sea_serpent_scales_red"
            },
            G: {
                item: "vampirism:blood_infused_enhanced_iron_ingot"
            },
            H: {
                item: "undergarden:utherium_ingot"
            },
            I: {
                tag: "alkahestry:dragon_heart"
            }
        },
        result: {
                item: "projecte:philosophers_stone"
        }
    })

})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})