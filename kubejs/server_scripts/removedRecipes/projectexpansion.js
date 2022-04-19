// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Project Expansion Recipes Loading.')

onEvent('recipes', event => {
	//Removed Recipes

    //Relays
    event.remove({id: 'projectexpansion:relay/mk1_conversion'})
    event.remove({id: 'projectexpansion:relay/mk2_conversion'})
    event.remove({id: 'projectexpansion:relay/mk3_conversion'})
    event.remove({id: 'projectexpansion:relay/basic'})
    event.remove({id: 'projectexpansion:relay/dark'})
    event.remove({id: 'projectexpansion:relay/red'})
    event.remove({id: 'projectexpansion:relay/magenta'})
    event.remove({id: 'projectexpansion:relay/pink'})
    event.remove({id: 'projectexpansion:relay/violet'})
    event.remove({id: 'projectexpansion:relay/purple'})
    event.remove({id: 'projectexpansion:relay/blue'})
    event.remove({id: 'projectexpansion:relay/cyan'})
    event.remove({id: 'projectexpansion:relay/green'})
    event.remove({id: 'projectexpansion:relay/lime'})
    event.remove({id: 'projectexpansion:relay/white'})
    event.remove({id: 'projectexpansion:relay/yellow'})
    event.remove({id: 'projectexpansion:relay/fading'})
    event.remove({id: 'projectexpansion:relay/final'})




})

onEvent('jei.hide.items', event => {
    //Hidden Items

    //Collectors
    event.hide('projectexpansion:basic_collector')
    event.hide('projectexpansion:dark_collector')
    event.hide('projectexpansion:red_collector')
    event.hide('projectexpansion:magenta_collector')
    event.hide('projectexpansion:pink_collector')
    event.hide('projectexpansion:violet_collector')
    event.hide('projectexpansion:purple_collector')
    event.hide('projectexpansion:blue_collector')
    event.hide('projectexpansion:cyan_collector')
    event.hide('projectexpansion:green_collector')
    event.hide('projectexpansion:lime_collector')
    event.hide('projectexpansion:white_collector')
    event.hide('projectexpansion:yellow_collector')
    event.hide('projectexpansion:fading_collector')
    event.hide('projectexpansion:final_collector')

    //Relays
    event.hide('projectexpansion:basic_relay')
    event.hide('projectexpansion:dark_relay')
    event.hide('projectexpansion:red_relay')
    event.hide('projectexpansion:magenta_relay')
    event.hide('projectexpansion:pink_relay')
    event.hide('projectexpansion:violet_relay')
    event.hide('projectexpansion:purple_relay')
    event.hide('projectexpansion:blue_relay')
    event.hide('projectexpansion:cyan_relay')
    event.hide('projectexpansion:green_relay')
    event.hide('projectexpansion:lime_relay')
    event.hide('projectexpansion:white_relay')
    event.hide('projectexpansion:yellow_relay')
    event.hide('projectexpansion:fading_relay')
    event.hide('projectexpansion:final_relay')

})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})