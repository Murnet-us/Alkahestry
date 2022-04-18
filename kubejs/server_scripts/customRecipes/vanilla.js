// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Project Expansion Recipes Loading.')

onEvent('recipes', event => {
	// Change recipes here
	
    //Quartz Block to Quartz
    event.shapeless("4x minecraft:quartz", ["minecraft:quartz_block"])
    //Chests
    event.shaped("minecraft:chest", [
        'XXX',
        'X X',
        'XXX'
    ],
    {
        X: "#forge:planks"
    })
    event.shaped("4x minecraft:chest", [
        'XXX',
        'X X',
        'XXX'
    ],
    {
        X: "#minecraft:logs"
    })
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})