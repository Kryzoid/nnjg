"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19569],{19569:e=>{e.exports=JSON.parse('{"topicId":2298,"forumId":116,"topicTitle":"Official LUA Tutorial","topicTime":1301887431,"topicViews":204,"topicReplies":5,"topicStatus":0,"topicFirstPosterName":"sr. pizza","topicFirstPosterColor":"","topicLastPosterName":"MZP.inferno","topicLastPosterColor":"","topicLastPostTime":1302139360,"posts":[{"postId":18417,"topicId":2298,"posterId":631,"postTime":1301887431,"postText":"Finally i decided to add a coding tutorial to this section.\\n\\nIntroduction\\n\\nIn this article, I will try to cover the Lua syntax and also try to give an explanation in what scripting is all about. Since scripting these days is an indispensable part of any game, this should at least be interesting to anyone who wants to make a game. Scripting was used in games like Unreal Tournament, Half-Life, Neverwinter Nights, Quake III, Unreal II, and other games. Scripting will give you the power to code your game’s A.I., game dialogs, game events, game history and so on, while also providing the power to the end users of the game to add mods (modifications), A.I scripts, and even game plots (like in Neverwinter Nights). Scripting is what the mod community has been using to allow them to make new levels and other fun stuff.\\n\\nAlso who is this guy writing this article, you might ask? First, I need to say I\'m neither an expert nor a guru and I do not master all knowledge. I started this adventure called \\"game programming\\" about a year and a half; I started with the basics of OpenGL with the powerful assistance of a book called \\"OpenGL Game Programming\\", and in the past months I started the journey of scripting with another very powerful book called \\"Game Scripting Mastery\\" which is a great book that I recommend seriously to anyone who wants to be a scripting guru. I\'m not also a god so you might find mistakes. \\nWhy Scripting?\\n\\nImagine you already have your game engine ready and want to take the next step: making a full game.\\n\\nMost might think \\"well the hard part is done (the engine) so now it will be a piece of cake to complete the game\\". Imagine you want to make an RPG with your engine, and already have sounds, levels, models and so on. You can put it all in the screen and you can even allow them to interact each with another (the models I mean). You can also play sounds. However, something is missing. The most important part of any game is Game Content; without it there will be no game. Can you imagine yourself writing thousands of code lines to code the game’s AI, items descriptions, and associate with them actions like for a potion the ability to cure MP or HP. and interactivity of your players and the NPC\'s all together with the game engine?. And when do you find you have something wrong? Can you imagine yourself searching for that specific dialog in thousands of lines? Worst yet: compiling, why do you need to compile the entire engine together with the game content just to change one dialog? Not to mention the few good minutes you loose just sitting watching your compiler compile.\\n\\nWell I can\'t imagine that because I know scripting exists and can help. Game content, like sound or art don\'t have anything to do with the game engine. With audio and art you don\'t need to compile the entire game if you want to change a sound, the sound artist just do is work changes the file with the new audio file he wants and runs the game EXE and see if that was the intended result. This is because the game engine code and the sound files are kept apart one from each other like you can see in Figure 1.\\nWhat we need is to be able to do something with the Game Content and that what scripting gives us. With scripting, you can separate your game content from the engine.\\n\\nI believe the best way to make someone understand what is scripting is to give you an example:\\n\\nImagine you (and maybe your team) decide to make an RPG game. You start your design paper, write the history of the games, the items the game should have, make some scary sounds, ambient sounds etc.., you also have an engine which allows for the player to walk in a world, play sounds, load levels, animate models, etc.. Next you sit on the computer and start coding. Let’s assume that you start with the item: \'\'potion\'\' and you write some structure like this:\\n\\nstruct _potion\\n{\\n    char *name;    //the name that should appear in the player inventory, stores etc.\\n    int price;     //how much this item cost in a shop?\\n    int power;     //how much effect this does in a player\\n    int type;      //what does this potion heals ? HP/M\\n} potion;\\n\\nThe name might be \\"Healing Potion LV 1\\" or \\" \\"Magic Potion LV 2\\". ‘Price’ is the price for which the player might buy the potion in a store. ‘Power’ is how much effect the potion has on the player. And ‘type’ is what does the potion do it can heal mp, hp, restore a player life etc.. After the potion structure suites your need, you can start doing something with it like this:\\n\\nconst MAX_POTIONS = 20;    //the max of different potions you might have. 20 is more than enough for this example\\n                           //! just kidding I will only write a few :)\\n\\nconst HEALING = 0;\\nconst MAGIC_RESTORE = 1;\\nconst LIFE_RESTORING = 2;\\npotion potions[MAX_POTIONS];\\n\\npotions[0].name = \\"Magic Potion LV 2\\";\\npotion [0].price = 200;\\npotion [0].type = HEALING;\\npotion [0].power = 40;\\n\\npotions[1].name = \\"Fenix the bringer of life LV 1\\";\\npotion [1].price = 1500;\\npotion [1].type = LIFE;\\npotion [1].power = 20;     //power in this case might be the amount of life\\n\\n//the player would have after is return from dead\\npotions[2].name = \\"HP potion LV 1\\";\\npotion [2].price = 150;\\npotion [2].type = HEALING;\\npotion [2].power = 20;\\n\\nupon recompiling the game you would have 3 new brand potions available to your player now its time to make a little play test you start playing the game to make and realize that the \\"Magic potion LV 2\\" is a little expensive and the player is a little poor to survive so you stop running the game and just go and change one line right? Right no problem:\\n\\npotions[0].price = 150;\\n\\nnow everything is ok you start the game. Oops, did I say start ? No I mean recompile the game and the start the game. After a few minutes, you are able to start the game. You start it and guess what? Bad luck; now the problem is \\"HP potion LV 1\\" which isn\'t ok because it heals too little HP so you stop the game again! So you go to change it.\\n\\npotion [2].power = 40;\\n\\nand then you will have to recompile.\\n\\nConclusion: hardcoding is not efficient (hardcoding basically is what we\'ve done above: mixing the game engine with the Game Content). In a game like an RPG, tweaking the items is a very important step since RPG games have a lot of Game Content like items, weapons, plot\'s, etc. Now that we\'ve defined the problem how can we solve it to make the Game Content like sound or art?. The answer is SCRIPTING, like most of you should already guess.\\nOverview of Scripting\\n\\nWhen you write a script, you write just like you would write a normal program with the exception of some of the programming scripting language syntax (which I’m going to cover one of the most popular: Lua) you open your text editor or IDE.\\n\\nThe difference begins with the compilation step. You can choose either to compile the script or leave it the script in the original form (text). Leaving the code uncompiled means you can have to make your engine load and interpret the scripts in a \\"pure\\" code form instead of a compiled form. Most of the times, you will have to compile the script because it will make its loading quicker and also protects your game from hacks. Another difference exists between coding a script and normal coding like c++, which is how the code will be run. I talked about a compiling step but I didn’t mean compiling to real machine code like asm, since the script won\'t be run by the CPU. Rather, it will be run by something called a VM (Virtual Machine). While the programs you code runs on the CPU the scripts run on the VM which in turn will be run by your program (the \\"host\\"). A VM alone is nothing. It\'s like a \\"module\\" you build into other programs like your RPG. That program is called the \\"host application\\" and with the scripts you load and run you are \\"scripting the host application\\". The game engine is the engine that makes the script able to communicate with your RPG and give it orders. The script might ask the RPG how much life the players has, or reduce it to half if it was a cursed potion for example. When your program calls a script function, this is called intra-language calls. It is possible because you \\"give\\" to the abstraction layer (which might be seen as an intermediate between c and your scripting language also know as interface) access to the program function. It is this abstraction layer which allow for two distinct languages to \\"speak\\" with each other. For instance, if I need to talk with a Japanese person, we to would communicate through a translator.\\n\\nNow that I tried to explain what scripting is, I hope you understand it now. It is now time to start work and we will go to clear one of the available free scripting languages Lua. Go quick to the next topic what are, you waiting for?\\nLua and its Syntax\\n\\nLua is one of the simplest scripting languages available. But don\'t be a fool to think it is a poor scripting language. Lua was used in a lot of commercial games like MDK2, Baldurs Gate, and I believe (almost sure) Impossible Creatures used it (I have the game and saw there some .Lua files :) Lua is a clean and easy to use scripting language. You can also get more information from the official web site http://www.Lua.org. If you want to become a game scripting guru you, you got to go and make a stop there since I will only cover some of the basics. Lua comes packaged in a very organized way with the include files and libraries needed to link Lua into your host application as well with other few utilities.\\nThe Lua Library\\n\\nLua library is mainly composed of two files: Lua-lib and Lua.h. The library provides a clean API, which allows loading scripts, running scripts and, most importantly, initializes Lua and shut it down.\\nThe Lua Compiler\\n\\nLua also comes with a command line compiler called Lua. Typing ‘luac’ in the command prompt will display the program\'s usage info. In order to compile a script you need to type luac <FILENAME> which you should get used to. Lua doesn\'t require a compiler in order to use Lua since Lua can load your script directly and compile it on-the-fly, saving you time. Uncompiled form will have three disadvantages: That your script will load slower than the compiled scripts. Another one is that you won’t be able to get compile time error information. The final reason, and maybe the most important, is that your script code won\'t be \\"available\\" to those hackers. In other words, you don’t need to use the Lua compiler but you should!. The choice is yours.\\nLua\'s interactive interpreter\\n\\nOne also useful utility that comes with Lua package is the Lua interactive interpreter. This little program allows you to test blocks of Lua code and see its results in real time. Although I haven\'t explained the Lua syntax, start it and try this:\\n\\n    > player_life = 500\\n    > player_life = player_life - 200\\n    > print(player_life)\\n\\nlua\'s interactive interpreter should show the following output\\n\\n    300\\n\\n‘print’ should be self-explanatory like printf in c++ and it is used to print values into the screen. The interactive interpreter also allows you to run scripts without the need to embed the Lua.lib into a C program. Simply type ‘Lua my_script_filename.Lua’ and it will attempt to run the script and print the output of the script.\\nJourney begins: Lua syntax\\n\\nThe Lua syntax is a very simple and clean scripting language. Lua is like a cousin of c, Pascal, and BASIC. If someone is familiar with the c syntax switching to Lua won\'t be too hard..\\n\\nVariables: like most part of scripting languages, variable in Lua are typeless, which means that one variable can hold any value of any type at any time. Unlike C in which you declare a variable of one type (int for example) and that variable can\'t hold any different type, (int can\'t hold a string and you should not even try). Also unlike C, the variables you use don\'t need to be declared, when you assigne them. As in C, valid variable names are a sequence of letters, numbers, and underscore that start with a non numeric character (a letter or underscore). Lua is also case sensitive in the use of variables so mycar is different than Mycar. Therefore, in Lua when you assign a variable to a number, you are also declaring the variable like this:\\n\\nmy_car = \\"alfa romeu\\"\\nmy_car = 128\\n\\nas you can see my_car can hold any type of value at any time. You should also note the lack of semicolons at the end of the statement. Including semicolons is also valid, however. People who are used with C++ usually include semicolons.\\n\\nUse the interactive interpreter and try writing the following:\\n\\nmy_car = \\"ferrari\\"\\nprint(my_car)\\nmy_car = 200\\nprint(my_car)\\n\\nLua will not complain and you should see the following output:\\n\\nferrari\\n200\\n\\nAnother thing about Lua\'s variables is that Lua supports multiple assignment. Multiple assignment works like this: You put all of the variables on the left of the equal sign. Than on the right of the equal sign, you put the values you want those varibles to be assigned respectively. For example:\\n\\nx,b = 2, 8\\n\\nAfter this line is executed, x will equal 2 and b will equal 8. Multiple assignments work with any type of data. But what about when you don\'t provide an equal number of variables and values on both sides? Lua will happily solve the problem for you if you don\'t provide enough values on the right side by assigning the extra variables to nil (i.e. null):\\n\\n    x = 2\\n    b,a,x = 12,4\\n\\nx will be assigned to nil even if it already had a value before. What about the other case if you have more values on the right than variables on the left? As you might have guessed, Lua will ignore those values\\n\\n    x, y = 12, 4, 5, 6, 7\\n\\nx will equal 12, y will equal 4 and 5, 6,7 will be ignored. By the way, you can and you should be typing these examples in the Lua interactive interpreter. Use multiple assignments with careful care since it cans make your code hard to read. One good use of it is swapping values:\\n\\n    a, b = 2, 4\\n    a,b = b, a\\n\\nthis will swap the two values.\\n\\nComments: Lua\'s suports comments and can be used by typing: -- which corresponds to // in C. Lua provides no support for multi-line commenting\\n\\nData Types: Lua supports numeric values, strings, functions, tables, userdata and the nil. In this tuturial I will cover numeric, tables, functions and the nil. I won\'t cover userdata simply because I’m not that familiar with it. If you want more information I recommend referring to http://www.Lua.org. This is because the tutorial is intended as a beginner’s tutorial.\\n\\n    Numeric: In Lua, floats and ints are the same data type because of Lua being a type-less language\\n\\n    String: A string of characters almost like char in C, but it supports a few features char doesn\'t. I\'m going to elaborate more on that in a few minutes\\n\\n    Function: Just like in C, you have the ability to call a declared function or create one.\\n\\n    Table: Lua\'s more complex data type and powerful. A Table can be seen as arrays but its also more complex. It is similar to linked list.\\n\\n    nil: just like Alex Varaness says in my book are a more sofisticated version of c\'s NULL. For example, in Lua variables before being assigned are set to nil. Trying to use them results in a run-time error. For example:\\n\\n    a, b = 2 , 4;\\n    print (a + b);\\n    print (a + b + c);\\n\\nWill result in an error like this:\\n\\n    error: attempt to perform arithmetic on global \'c\'\' ( a nil value)\\n\\nnil is also the only concept of \\"false-hood\\" Lua supports. We\'ve seen this in the upper example. It\'s also good to remind that nil is false but not equal to 0 in a numeric sense. This was why\\n\\n    print(a + b + c)\\n\\nc being a nil \\"value\\" will result in a runtime error\\n\\nNow I\'m going to cover strings in more detail before you can try the examples in the interpreter and also try this:\\n\\n    print ( type (2333) ); \\\\\\n    print ( type (2.45) ); \\\\\\n    print ( type (\\"Lua rulez\\") )\\n\\nThe back slash is to make the interactive interpreter not run the code after pressing enter. Upon pressing Enter you should see\\n\\n    number\\n    number\\n    string\\n\\nAs you can see float and int are the same to Lua, ‘type’ is just a Lua keyword which will return the type of the variable.\\n\\n    Strings: Lua supports one feature called \\"coercion\\" which happens when one data type is forced into another. For example, numeric and strings are two distinct data types but can be used in expressions like this:\\n\\n    print ( \\"20\\" + 4);\\n\\nThis will print 24. This is because Lua recognizes strings that can be converted in numbers like the previous examples. But expressions like:\\n\\n    print ( 20 + \\"Arsenio\\");\\n\\nwill result in an error. This is because \\"20\\" makes sense, but \\"arsenio\\" doesn\'t. It will show:\\n\\n    error: attempt to perform arithmetic on a string value\\n\\n Credit to:Arsenio Costa \\n\\n\\n\\n\\n\\nhttp://www.youtube.com/user/humblesnurp#grid/user/E28F28A51BEBAD79\\n\\n\\nThis video is also good if you would rather use a visual tutorial. It is what I learned off of."},{"postId":18418,"topicId":2298,"posterId":4,"postTime":1301887836,"postText":"I haven\'t even finished reading the entire post, but wow. Thanks a lot for the contribution to this board, if i could +rep you, i would."},{"postId":18429,"topicId":2298,"posterId":112,"postTime":1301901198,"postText":"Looks like a bot, but a helpfull one <3 lol"},{"postId":18436,"topicId":2298,"posterId":101,"postTime":1301949386,"postText":">> Looks like a bot, but a helpfull one <3 lol \\n\\nI\'ve seen him in game, he\'s not."},{"postId":18450,"topicId":2298,"posterId":54,"postTime":1301968893,"postText":"nice tutorial, could be useful. thanks :)"},{"postId":18578,"topicId":2298,"posterId":521,"postTime":1302139360,"postText":"My brain\\n\\nIt bleeds"}]}')}}]);