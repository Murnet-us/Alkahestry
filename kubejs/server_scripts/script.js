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
})

onEvent('item.right_click', event => {

	onEvent('item.right_click', (event) => {
		if(event.item.id == 'projectexpansion:final_star'){
			console.info('Right-Clicked Final Star')
			if(event.entity.isPlayer()) {
				if(event.player.isCreativeMode()){
					console.info('Setting gamemode to Survival')
				   	// switch gamemode to survival
				   	event.server.scheduleInTicks(1, event.server, (callback) => {
						callback.data.runCommand(`/gamemode survival @p`)
					})
				} else {
					console.info('Setting gamemode to Creative')
					// switch gamemode to creative
					event.server.scheduleInTicks(1, event.server, (callback) => {
						callback.data.runCommand(`/gamemode creative @p`)
					})
				}
			}
		}
	});

})