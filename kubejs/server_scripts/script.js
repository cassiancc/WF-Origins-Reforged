ServerEvents.recipes(event => {
	//remove dupe content
	event.remove({ output: 'quark:cobblestone_bricks' })
	event.shapeless(`create:limestone`, `quark:limestone`)
	event.remove({output: 'additionaladditions:honeyed_apple'})

	//limestone compat
	event.shapeless(`quark:limestone`, `create:limestone`)
	event.shapeless(`create:limestone`, `quark:limestone`)
	event.shaped(
		Item.of(`create:limestone`, 4),
		[ 
		  'BA', 
		  'AB'
		],
		{
		  A: `minecraft:calcite`,
		  B: 'minecraft:cobblestone'
		}
	)



	event.stonecutting(`kubejs:origin_cobblestone`, `minecraft:cobblestone`)
	event.stonecutting(`kubejs:granite_bricks`, `minecraft:granite`)
	event.stonecutting(`kubejs:diorite_bricks`, `minecraft:diorite`)
	event.stonecutting(`kubejs:andesite_bricks`, `minecraft:andesite`)


	event.shaped(
		Item.of(`kubejs:piston_planks`, 4),
		[ 
		  ' A ', 
		  'A A',
		  ' A '
		],
		{
		  A: `minecraft:piston`
		}
	)
	event.shaped(
		Item.of(`kubejs:sticky_piston_planks`, 4),
		[ 
		  ' A ', 
		  'A A',
		  ' A '
		],
		{
		  A: `minecraft:sticky_piston`
		}
	)

	event.shaped(
		Item.of(`kubejs:chiseled_bookshelf_0`, 1),
		[ 
		  'AAA', 
		  'BBB',
		  'AAA'
		],
		{
		  A: `#minecraft:planks`,
		  B: `#minecraft:wooden_slabs`
		}
	)
	


	//list of new blocks
	const newBlocks = {
		stones: [
			"white_stone_bricks",
			"orange_stone_bricks",
			"magenta_stone_bricks",
			"light_blue_stone_bricks", 
			"yellow_stone_bricks",
			"lime_stone_bricks",	
			"pink_stone_bricks",
			"gray_stone_bricks",
			"light_gray_stone_bricks",
			"cyan_stone_bricks", 
			"purple_stone_bricks", 
			"blue_stone_bricks",
			"brown_stone_bricks",
			"green_stone_bricks", 
			"red_stone_bricks",
			"black_stone_bricks",
			"cobblestone_bricks",
			"mossy_cobblestone_bricks",
			"origin_cobblestone",
			"andesite_bricks",
			"diorite_bricks",
			"granite_bricks"
		],
		grass: [
			"dirt_path"
		],
		woods: [
			"glacial",		//WHITE
			"thermal",		//ORANGE
			"dreamer",		//MAGENTA
			"astral", 		//LIGHT BLUE
			"honeyed", 		//YELLOW
			"floral",		//LIME
			"delight",		//PINK
			"ash", 			//GRAY
			"origin_oak",	//LIGHT GREY
			"oxal", 		//CYAN
			"umbral", 		//PURPLE
			"tidal",		//BLUE
			"great_oak",	//BROWN
			"dal", 			//GREEN
			"bloody_oak", 	//RED
			"jet" 			//BLACK
		]
	}
	const dye = [
		"white",
		"orange",
		"magenta",
		"light_blue", 
		"yellow",
		"lime",	
		"pink",
		"gray",
		"light_gray",
		"cyan", 
		"purple", 
		"blue",
		"brown",
		"green", 
		"red",
		"black"
	]

	dye.forEach(function(block) {
		event.shaped(
			Item.of(`kubejs:${block}_concrete_wall`, 6), // arg 1: output
			[ 
			  'AAA', 
			  'AAA'
			],
			{
			  A: `minecraft:${block}_concrete`
			}
		)
		event.shaped(
			Item.of(`kubejs:${block}_concrete_stairs`, 4), // arg 1: output
			[ 
			  'A  ', 
			  'AA ',
			  'AAA'
			],
			{
			  A: `minecraft:${block}_concrete`
			}
		)
		event.shaped(
			Item.of(`kubejs:${block}_concrete_stairs`, 4), // arg 1: output
			[ 
			  '  A', 
			  ' AA',
			  'AAA'
			],
			{
			  A: `minecraft:${block}_concrete`
			}
		)
		event.shaped(
			Item.of(`kubejs:${block}_concrete_slab`, 6), // arg 1: output
			[ 
			  'AAA'
			],
			{
			  A: `minecraft:${block}_concrete`
			}
		)
	})

	event.shaped(
		Item.of(`kubejs:cobblestone_bricks`, 4), // arg 1: output
		[ 
		  'AA', 
		  'AA'
		],
		{
		  A: 'minecraft:cobblestone'
		}
	)
	event.shaped(
		Item.of(`kubejs:mossy_cobblestone_bricks`, 4), // arg 1: output
		[ 
		  'AA', 
		  'AA'
		],
		{
		  A: 'minecraft:mossy_cobblestone'
		}
	)
	
	//path stairs
	event.shaped(	
		Item.of(`kubejs:dirt_path_stairs`, 4), // arg 1: output
		[ 
		  'A  ', 
		  'AA ',
		  'AAA'
		],
		{
		  A: 'minecraft:dirt_path'
		}
	)
	event.shaped(	
		Item.of(`kubejs:dirt_path_stairs`, 4), // arg 1: output
		[ 
		  '  A', 
		  ' AA',
		  'AAA'
		],
		{
		  A: 'minecraft:dirt_path'
		}
	)
	event.shaped(	
		Item.of(`kubejs:dirt_path_slab`, 6), // arg 1: output
		[ 
		  'AAA'
		],
		{
		  A: 'minecraft:dirt_path'
		}
	)

	for (let block in newBlocks.stones) {
		//BRICKS
		if (dye[block] != undefined) {
			event.shaped(
				Item.of(`kubejs:${newBlocks.stones[block]}`, 8), // arg 1: output
				[ 
				  'AAA', 
				  'ABA', // arg 2: the shape (array of strings)
				  'AAA'  
				],
				{
				  A: 'minecraft:stone_bricks', 
				  B: `minecraft:${dye[block]}_dye`  //arg 3: the mapping object   
				}
			)
		}
		
		
		//SLABS
		event.shaped(
			Item.of(`kubejs:${newBlocks.stones[block]}_slab`, 6), // arg 1: output
			[ 
			  'AAA'
			],
			{
			  A: `kubejs:${newBlocks.stones[block]}`
			}
		)
		event.stonecutting(`2x kubejs:${newBlocks.stones[block]}_slab`, `kubejs:${newBlocks.stones[block]}`)
		//STAIRS
		event.shaped(
			Item.of(`kubejs:${newBlocks.stones[block]}_stairs`, 4), // arg 1: output
			[ 
			  'A  ',
			  'AA ',
			  'AAA'
			],
			{
			  A: `kubejs:${newBlocks.stones[block]}`
			}
		)
		event.stonecutting(`1x kubejs:${newBlocks.stones[block]}_stairs`, `kubejs:${newBlocks.stones[block]}`)
		//WALLS
		event.shaped(
			Item.of(`kubejs:${newBlocks.stones[block]}_wall`, 6), // arg 1: output
			[ 
			  'AAA',
			  'AAA'
			],
			{
			  A: `kubejs:${newBlocks.stones[block]}`
			}
		)
		event.stonecutting(`1x kubejs:${newBlocks.stones[block]}_wall`, `kubejs:${newBlocks.stones[block]}`)
		
	}

	for (let block in newBlocks.woods) {
		//LOG
		event.shaped(
			Item.of(`kubejs:${newBlocks.woods[block]}_log`, 8), // arg 1: output
			[ 
			  'AAA', 
			  'ABA', // arg 2: the shape (array of strings)
			  'AAA'  
			],
			{
			  A: '#minecraft:logs', 
			  B: `minecraft:${dye[block]}_dye`  //arg 3: the mapping object   
			}
		)
		//WOOD
		event.shaped(
			Item.of(`kubejs:${newBlocks.woods[block]}_wood`, 3), // arg 1: output
			[ 
			  'AA', 
			  'AA', // arg 2: the shape (array of strings)  
			],
			{
			  A: `kubejs:${newBlocks.woods[block]}_log`,  
			}
		)
		//STRIPPED LOG
		event.shaped(
			Item.of(`kubejs:stripped_${newBlocks.woods[block]}_log`, 8), // arg 1: output
			[ 
				'AAA', 
				'ABA', // arg 2: the shape (array of strings)
				'AAA'  
			],
			{
				A: '#forge:stripped_logs', 
				B: `minecraft:${dye[block]}_dye`  //arg 3: the mapping object   
			}
		)
		//STRIPPED WOOD
		event.shaped(
			Item.of(`kubejs:stripped_${newBlocks.woods[block]}_wood`, 3), // arg 1: output
			[ 
			  'AA', 
			  'AA', // arg 2: the shape (array of strings)  
			],
			{
			  A: `kubejs:stripped_${newBlocks.woods[block]}_log`,  
			}
		)
		//PLANKS
		event.shapeless(`4x kubejs:${newBlocks.woods[block]}_planks`, `kubejs:${newBlocks.woods[block]}_log`)
		//SLABS
		event.shaped(
			Item.of(`kubejs:${newBlocks.woods[block]}_slab`, 6), // arg 1: output
			[ 
			  'AAA'
			],
			{
			  A: `kubejs:${newBlocks.woods[block]}_planks`
			}
		)
		//STAIRS
		event.shaped(
			Item.of(`kubejs:${newBlocks.woods[block]}_stairs`, 4), // arg 1: output
			[ 
			  'A  ',
			  'AA ',
			  'AAA'
			],
			{
			  A: `kubejs:${newBlocks.woods[block]}_planks`
			}
		)
		//PRESSURE PLATE
		event.shaped(
			Item.of(`kubejs:${newBlocks.woods[block]}_pressure_plate`, 1), // arg 1: output
			[ 
			  'AA '
			],
			{
			  A: `kubejs:${newBlocks.woods[block]}_planks`
			}
		)
		//BUTTON
		event.shapeless(`1x kubejs:${newBlocks.woods[block]}_button`, `kubejs:${newBlocks.woods[block]}_planks`)
		//FENCE
		event.shaped(
			Item.of(`kubejs:${newBlocks.woods[block]}_fence`, 1), // arg 1: output
			[ 
			  'ABA',
			  'ABA'
			],
			{
			  A: `kubejs:${newBlocks.woods[block]}_planks`,
			  B: 'minecraft:stick'
			}
		)
		//FENCE GATE
		event.shaped(
			Item.of(`kubejs:${newBlocks.woods[block]}_fence_gate`, 1), // arg 1: output
			[ 
			  'BAB',
			  'BAB'
			],
			{
			  A: `kubejs:${newBlocks.woods[block]}_planks`,
			  B: 'minecraft:stick'
			}
		)
		
	}

	
})

//bookshelves
BlockEvents.rightClicked('kubejs:chiseled_bookshelf_0', event => {

	if (event.item.id == "minecraft:book") {
		if (event.hand == "MAIN_HAND") {
			changeTV(event, "chiseled_bookshelf_1")
			Utils.server.runCommandSilent(`clear ${event.player.username} book 1`)
		}
		


	}
})
BlockEvents.rightClicked('kubejs:chiseled_bookshelf_1', event => {
	if (event.hand == "MAIN_HAND") {
		if (event.item.id == "minecraft:book") {
			changeTV(event, "chiseled_bookshelf_2")
			Utils.server.runCommandSilent(`clear ${event.player.username} book 1`)
	
	
		}
		else if (event.item.id == "minecraft:air") {
			Utils.server.runCommandSilent(`give ${event.player.username} book`)
			changeTV(event, "chiseled_bookshelf_0")
	
		}
	}
	
})
BlockEvents.rightClicked('kubejs:chiseled_bookshelf_2', event => {
	if (event.hand == "MAIN_HAND") {
		if (event.item.id == "minecraft:book") {
			changeTV(event, "chiseled_bookshelf_3")
			Utils.server.runCommandSilent(`clear ${event.player.username} book 1`)
	
	
		}
		else if (event.item.id == "minecraft:air") {
			Utils.server.runCommandSilent(`give ${event.player.username} book`)
			changeTV(event, "chiseled_bookshelf_1")
	
		}
	}
})
BlockEvents.rightClicked('kubejs:chiseled_bookshelf_3', event => {

	if (event.hand == "MAIN_HAND") {
		if (event.item.id == "minecraft:book") {
			changeTV(event, "chiseled_bookshelf_4")
			Utils.server.runCommandSilent(`clear ${event.player.username} book 1`)
	
	
		}
		else if (event.item.id == "minecraft:air") {
			Utils.server.runCommandSilent(`give ${event.player.username} book`)
			changeTV(event, "chiseled_bookshelf_2")
	
		}
	}
})
BlockEvents.rightClicked('kubejs:chiseled_bookshelf_4', event => {
	if (event.hand == "MAIN_HAND") {
		if (event.item.id == "minecraft:book") {
			changeTV(event, "chiseled_bookshelf_5")
			Utils.server.runCommandSilent(`clear ${event.player.username} book 1`)
	
	
		}
		else if (event.item.id == "minecraft:air") {
			Utils.server.runCommandSilent(`give ${event.player.username} book`)
			changeTV(event, "chiseled_bookshelf_3")
	
		}
	}
})
BlockEvents.rightClicked('kubejs:chiseled_bookshelf_5', event => {
	if (event.hand == "MAIN_HAND") {
		if (event.item.id == "minecraft:book") {
			changeTV(event, "chiseled_bookshelf_6")
			Utils.server.runCommandSilent(`clear ${event.player.username} book 1`)
	
	
		}
		else if (event.item.id == "minecraft:air") {
			Utils.server.runCommandSilent(`give ${event.player.username} book`)
			changeTV(event, "chiseled_bookshelf_4")
	
		}
	}
})

BlockEvents.rightClicked('kubejs:chiseled_bookshelf_6', event => {
	if (event.hand == "MAIN_HAND") {
		if (event.item.id == "minecraft:book") {
	
	
		}
		else if (event.item.id == "minecraft:air") {
			Utils.server.runCommandSilent(`give ${event.player.username} book`)
			changeTV(event, "chiseled_bookshelf_5")
	
		}
	}
})

function changeBookshelf(num) {
	if ((event.hand == "MAIN_HAND") && (event.item.id == "minecraft:book") && (num != 6)) {
		changeTV(event, `chiseled_bookshelf_${num+1}`)
		Utils.server.runCommandSilent(`clear ${event.player.username} book 1`)
	
	
	}
	else if ((event.hand == "MAIN_HAND") && (event.item.id == "minecraft:air") && (num != 0)) {
		Utils.server.runCommandSilent(`give ${event.player.username} book`)
		changeTV(event, `chiseled_bookshelf_${num+1}`)

	}
}