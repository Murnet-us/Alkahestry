// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here
	
	

	
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')

    //Dragon Hearts
    event.add('alkahestry:dragon_heart', [
        'iceandfire:fire_dragon_heart',
        'iceandfire:ice_dragon_heart',
        'iceandfire:lightning_dragon_heart',
        'iceandfire:hydra_heart',
        'draconicevolution:dragon_heart'
    ])
})