function rand1000(){
	return Math.ceil(Math.random()*1000);
}
myApp.service('tweetService', function(){
	var tweets = [
		{person:'ndd22', day:1, time:rand1000(), text:'&#9679; &#8226; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &#9679; &#9679; &nbsp;&nbsp;&nbsp;  &nbsp; &nbsp;&nbsp;  &nbsp; &#8226; &#9679; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &#8226; &nbsp;&nbsp;  &#9679; &nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &#8226; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &#9679; &#9679; &#8226; &nbsp;&nbsp;  &#8226; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;  &#8226; &nbsp; &nbsp;&nbsp;  &nbsp; &#9679; '},
		{person:'ndd22', day:2, time:rand1000(), text:'&#8226; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &#8226; &#8226; &#8226; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &#9679; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#9679; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#9679; &#8226; &#9679; &#8226; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#9679; &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp; &#9679; &nbsp;&nbsp;  &nbsp; &#9679; &#9679; &#9679; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#9679; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;  '},
		{person:'ndd22', day:3, time:rand1000(), text:'&#9679; &#8226; &nbsp;&nbsp;&nbsp;  &nbsp; &#8226; &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#9679; &#9679; &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp; &#8226; &#8226; &#9679; &nbsp;&nbsp;  &#9679; &nbsp; &#9679; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#8226; &#8226; &nbsp; &#8226; &nbsp;&nbsp;  &nbsp; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &#9679; &nbsp; &#9679; &#9679; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp; '},
		{person:'ndd22', day:4, time:rand1000(), text:'&nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &#8226; &#8226; &nbsp;&nbsp;&nbsp;  &#8226; &#8226; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;  &#8226; &nbsp;&nbsp;  &#9679; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &#8226; &#8226; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp; &nbsp;&nbsp;&nbsp;  &nbsp; &#9679; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#8226; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &#9679; &#8226; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; '},
		{person:'ndd22', day:5, time:rand1000(), text:'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &#9679; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &#8226; &nbsp; &#8226; &#8226; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;  &#9679; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#8226; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;  &#9679; &#9679; &nbsp; &#9679; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &#9679; &nbsp;&nbsp;  &#8226; &nbsp;&nbsp;  &nbsp; &#8226; &#8226; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &#8226; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#8226; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &#8226;'},
		{person:'ndd22', day:6, time:rand1000(), text:'&nbsp; &nbsp; &#9679; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#9679; &#8226; &#9679; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &#8226; &#8226; &nbsp;&nbsp;  &nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp; &#8226; &#9679; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &#8226; &nbsp;&nbsp;&nbsp;  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;  &#8226; &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &#9679; &#9679;'},
		{person:'ndd22', day:7, time:rand1000(), text:'&#9679; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &#8226; &nbsp;&nbsp;  &#8226; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#8226; &nbsp;&nbsp;&nbsp;  &nbsp; &nbsp;&nbsp;&nbsp;  &nbsp; &#9679; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;  &#8226; &#8226; &#8226; &#8226; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &#8226; &#8226; &#8226; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;  &#9679; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#8226; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;  &#9679; &nbsp;'},
		{person:'ndd22', day:8, time:rand1000(), text:'&nbsp;&nbsp;&nbsp;  &#9679; &nbsp;&nbsp;&nbsp;  &#8226; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &#9679; &#8226; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;  &#9679; &nbsp;&nbsp;  &#9679; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &#8226; &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &#9679; &#9679; &nbsp; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; '}, 
		{person:'ndd22', day:9, time:rand1000(), text:'&#8226; &#9679; &#9679; &nbsp;&nbsp;&nbsp;  &#8226; &#9679; &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &#9679; &nbsp;&nbsp;&nbsp;  &nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp; &#9679; &#9679; &#8226; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;  &nbsp; &#8226; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;  &#8226; &#9679; &#8226; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &#9679; &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#9679; &#9679; &#8226; &nbsp; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;'},
		{person:'ndd22', day:10, time:rand1000(), text:'&#8226; &nbsp;&nbsp;  &#8226; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  &#8226; &#8226; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp; &nbsp; &nbsp;&nbsp;  &#9679; &nbsp; &nbsp;&nbsp;  &nbsp; &nbsp;&nbsp;&nbsp;  &#8226; &nbsp;&nbsp;  &#8226; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp; &nbsp; &#9679; &nbsp;&nbsp;&nbsp;  &nbsp; &#8226; &#8226; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;  &#8226; &#8226; &nbsp;&nbsp;  &nbsp;'},
		{person:'ndd22', day:11, time:rand1000(), text:'&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;  &#8226; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &#8226; &#8226; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;  &#9679; &nbsp; &#9679; &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#9679; &nbsp; &#9679; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;  &#9679; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#8226; &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;  &#9679; &nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &#9679; &#9679; &nbsp;&nbsp;  '},
		{person:'ndd22', day:12, time:rand1000(), text:'&nbsp;&nbsp;  &#9679; &nbsp; &#9679; &nbsp; &#8226; &#8226; &#8226; &#8226; &#9679; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &#8226; &#9679; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp; &#9679; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp; &#9679; &#8226; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &#8226; &#8226; &#8226; &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &#8226; &#9679; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &#8226; &nbsp; &#8226; '},
		{person:'ndd22', day:13, time:rand1000(), text:'&nbsp; &#9679; &nbsp; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#9679; &nbsp; &nbsp;&nbsp;&nbsp;  &#9679; &#9679; &#8226; &#9679; &#9679; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &#9679; &nbsp; &nbsp;&nbsp;  &#8226; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &#9679; &#9679; &nbsp; &#9679; &#9679; &nbsp; &#8226; &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp; &#8226; &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; '},
		{person:'ndd22', day:12, time:rand1000(), text:'&nbsp; &#8226; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &#8226; &#8226; &#9679; &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp; &#8226; &#8226; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp; &#8226; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &#8226; &#9679; &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &#9679; &nbsp; &nbsp;&nbsp;  &#8226; &nbsp;&nbsp;&nbsp;  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp; &#8226; &nbsp;'},
		{person:'ndd22', day:13, time:rand1000(), text:'&#8226; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &#8226; &nbsp;&nbsp;  &nbsp; &nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp; &nbsp;&nbsp;  &#9679; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#9679; &nbsp; &#8226; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#9679; '},

		{person:'afuturebot', day:1, time:rand1000(), text:'Imagine a future where we make contact with aliens. Now imagine a telephone with hands to hug you.'},
		{person:'afuturebot', day:2, time:rand1000(), text:'Imagine a future where we reach the stars. Now imagine being a giraffe.'},
		{person:'afuturebot', day:3, time:rand1000(), text:'Imagine a future where we can stop crimes before they happen. Now imagine the sorting hat.'},
		{person:'afuturebot', day:4, time:rand1000(), text:'Imagine a future where we find these black obelisks. Now imagine what the pope hat feels like.'},
		{person:'afuturebot', day:5, time:rand1000(), text:'Imagine a future where there are giant rings with aliens on them. Now imagine liking it enough to put one on it.'},
		{person:'afuturebot', day:6, time:rand1000(), text:'Imagine a future where there are wizards on the moon. Now imagine there\'s a cave.'},
		{person:'afuturebot', day:7, time:rand1000(), text:'Imagine a future where there are clones doing the work for us. Now imagine putting a dog on a basketball.'},
		{person:'afuturebot', day:8, time:rand1000(), text:'Imagine a future where aliens live in slums. Now imagine a T-rex trying to play a guitar.'},
		{person:'afuturebot', day:9, time:rand1000(), text:'Imagine a future where you can pick between red, green and blue. Now imagine everything being made of icecream.'},
		{person:'afuturebot', day:10, time:rand1000(), text:'Imagine a 20th century soldier wakes on another planet and doesn\'t die from lack of oxygen. Now imagine the sun explodes.'},
		{person:'afuturebot', day:11, time:rand1000(), text:'Imagine a yankee in King Arthur\'s court. Now imagine the Yankees winning a game.'},
		{person:'afuturebot', day:12, time:rand1000(), text:'Imagine a sphere. Now imagine a cube. Now imagine shapes don\'t exist.'},

		{person:'maria_qbooks', day:1, time:rand1000(), text:'Maria, you\'ve gotta see her. Go insane and out of your mind.'},
		{person:'maria_qbooks', day:2, time:rand1000(), text:'Got on a dead man suit and smilin\' skull ring. Lucky graveyard boots and a song to sing.'},
		{person:'maria_qbooks', day:3, time:rand1000(), text:'She reminds me of a west side story. Growing up in Spanish Harlem. She\'s living the life just like a movie star.'},
		{person:'maria_qbooks', day:4, time:rand1000(), text:'My Maria don\'t you know I\'ve come a long, long way. I been longin\' to see her.'},
		{person:'maria_qbooks', day:5, time:rand1000(), text:'You can never escape, you can only move south down the coast.'},
		{person:'maria_qbooks', day:6, time:rand1000(), text:'Mr. Jones and me tell each other fairy tales. Stare at the beautiful women "She\'s looking at you. No, she\'s looking at me."'},
		{person:'maria_qbooks', day:7, time:rand1000(), text:'Got on a dead man suit and smilin\' skull ring. Lucky graveyard boots and a song to sing.'},
		{person:'maria_qbooks', day:8, time:rand1000(), text:'They knew that I\'d come with my hand on my gun and revenge in my heart for Maria.'},
		{person:'maria_qbooks', day:9, time:rand1000(), text:'No, she\'s long, longin\' skull ring at me tell ring. Lucky graveyard boots and revenge in my hand a long that I\'d coast.'},
		{person:'maria_qbooks', day:10, time:rand1000(), text:'They knew that I\'d come with you down south?  She\'s looking at this star and we\'re all each others\' futures'},
		{person:'maria_qbooks', day:11, time:rand1000(), text:'My Maria? How do you come with my heart, Maria. My Maria? Hold on there. My Maria. I\'m making senses.'},
		{person:'maria_qbooks', day:12, time:rand1000(), text:'She\'s perfect for you: lonely. Stare got suddenly beautiful. She\'s staring at me down and me stumbling in my star'},
		{person:'maria_qbooks', day:13, time:rand1000(), text:'Everybody loves me, we\'re gonna be big stars... I want to be staring at you. Good luck out there.'},

		{person:'dog_qbooks', day:1, time:rand1000(), text:'Dogs are capable of understanding up to 250 words and gestures. That\'s probably more than your shitty kids.'},
		{person:'dog_qbooks', day:2, time:rand1000(), text:'Some stray dogs have figured out how to use the subway system. In other news the trains here are still fucked.'},
		{person:'dog_qbooks', day:3, time:rand1000(), text:'Dogs don\'t enjoy being hugged as much as humans and other primates. This is because they know love is fleeting.'},
		{person:'dog_qbooks', day:4, time:rand1000(), text:'Seeing eye dogs pee and poo on command so that their owners can clean up after them. People haven\'t mastered it yet.'},
		{person:'dog_qbooks', day:5, time:rand1000(), text:'In ancient China, an emperor\'s last line of defense was a small dog literally hidden up his asshole.'},
		{person:'dog_qbooks', day:6, time:rand1000(), text:'When Lord Byron was told that his dog was not allowed to come with him to Cambridge, he retaliated by burning it down.'},
		{person:'dog_qbooks', day:7, time:rand1000(), text:'In the 1860′s, two stray dogs who were best friends became local celebrities. This became the inspiration for "loldogs"'},
		{person:'dog_qbooks', day:8, time:rand1000(), text:'The wetness of a dog\'s nose is essential for determining when you won\'t suspect it\'ll bite your crotch.'},
		{person:'dog_qbooks', day:9, time:rand1000(), text:'Hyenas aren\'t actually dogs. They are more closely related to your weird uncle Frank.'},
		{person:'dog_qbooks', day:10, time:rand1000(), text:'Spiked dog collars were invented in ancient Greece. Those kinky Greeks...'},
		{person:'dog_qbooks', day:11, time:rand1000(), text:'Dalmatian puppies are pure white when they are born and develop their spots when you embarrass them in public.'},
		{person:'dog_qbooks', day:12, time:rand1000(), text:'A large breed dog\'s resting heart beats between 60 and 100 times3per minute. Comparatively, a human heart cannot love.'},
		{person:'dog_qbooks', day:13, time:rand1000(), text:'72% of dog owners believe their dog can detect when stormy weather is on the way. They\'re idiots.'},

		{person:'vatsug_qbooks', day:1, time:rand1000(), text:'It\'s noticeable for a while.'},
		{person:'vatsug_qbooks', day:2, time:rand1000(), text:'Sure may have figured out when I go through a sec-checkups, it\'s a bit gross, but my shots get my memories'},
		{person:'vatsug_qbooks', day:3, time:rand1000(), text:'Oh jeez, I tweaked to duck out, when the implant that fucking - just where man! Some cops hard drive'},
		{person:'vatsug_qbooks', day:4, time:rand1000(), text:'Keeping to pop this a pretty precording. Back up some learning on thing to have time!'},
		{person:'vatsug_qbooks', day:5, time:rand1000(), text:'Keeping is just a bit some learning at fuck. I\'m going modules.'},
		{person:'vatsug_qbooks', day:6, time:rand1000(), text:'Aww man. Christ, I dunno, I hack out sucking stuff... I\'ll get the Oqular feeds'},
		{person:'vatsug_qbooks', day:7, time:rand1000(), text:'Yeah, it get my cool stop thing to the stuff. It encrypted out want using recording argument.'},
		{person:'vatsug_qbooks', day:8, time:rand1000(), text:'I\'m sec-check. They\'re deal. Bullshit all the Oqular out through it\'s end'},
		{person:'vatsug_qbooks', day:9, time:rand1000(), text:'Sorry night. If some of an Oqular feeds is ridiculous since'},
		{person:'vatsug_qbooks', day:10, time:rand1000(), text:'Aww man, when laggy asshots, getty price implant thing is about'},
		{person:'vatsug_qbooks', day:12, time:rand1000(), text:'Haha maybe not seeing modules. Rooted Oqular lets... Oh jeez, I tweaked'},
		{person:'vatsug_qbooks', day:11, time:rand1000(), text:'Final argument. Recording am safe. Don\'t look for me. Congrats the bridge, just a bit some learning!'},
		{person:'vatsug_qbooks', day:13, time:rand1000(), text:'Well, Alice - I tweaked. Oh cool. If the Oqular implant using... Definitely laggy.'},

		{person:'shima', day:2, time:400, faveAction:{organic:1}, text:'That Oqular creeps me out. People really don\'t think about where this shit could lead.',
			replies:[
				{person:'shima', day:2, time:401, text:'I can kinda get why you\'d want some of the wearable tech. I don\'t get why you\'d want to look like a busted open computer.'}
			]
		},
		{person:'shima', day:3, time:402, faveAction:{organic:1}, text:'"We should let people be people" Sure, unless they\'re fucking themselves up.',
			replies:[
				{person: 'gustav', day:3, time:100, text:'This about the implant thing?'},
				{person:'shima', day:3, time:200, text:'Yeah. Sure, we "figured out" wetware, but if there\'s rejections years from now, pluggers\'ll wish there was a register.'},
				{person: 'gustav', day:3, time:300, text:'I take my shots, get my checkups, it does diagnostics every night. If something goes wrong, I\'ll know.'}
			]
		},
		{person:'shima', day:4, time:rand1000(), faveAction:{organic:1}, text:'Are there ANY non-mechanical employees at GreenAcre\'s now? "Home grown organic produce". its more of a factory than Q-Mart!',
			responses:[
				{clicked:false, short:'Q-Mart was terrible.', long:'Jeez, Q-Mart was terrible. All those big boxes of crap no one needs...',
					action: {
						organic:1,
						harsh:1,
						messages:[{person:'shima',day:5,time:rand1000(),text:'Yeah, well, nothing\'s changed. The boxes are bigger maybe.'}]
					}
				},
				{clicked:false, short:'What about the people?', long:'So they\'re all robots now? Where do people work these days?',
					action: {
						organic:1,
						empathetic:1,
						messages:[{person:'shima',day:5,time:rand1000(),text:'People still oversee the robots most places. People? I guess most people work making things. TV, games, books.. Synthetics can\'t create anything from scratch.'}]
					}
				},
				{clicked:false, short:'It\'s a business...', long:'Well, they didn\'t say anything about the people I guess.',
					action: {
						reserved:1,
						empathetic:-1,
						messages:[{person:'shima',day:5,time:rand1000(),text:'Yeah, the people definitely aren\'t home grown.'}]
					}
				}
			]
		},
		{person:'shima', day:5, time:rand1000(), faveAction:{synthetic:1}, text:'Actually had a conversation with one of those Q-Bots today. Imagine talking to the world\'s most polite but stubborn 5 year old.',
			replies:[
				{person:'shima', day:5, time:100, text:'Wore a "Hi, my name is Robert the Robot" sticker. Kept correcting me if I called him Bob.'},
				{person:'shima', day:5, time:200, text:'But it was like.. this rehearsed little speech. Like, he was kinda human, until you say something like that and it cracks.'}
			],
			responses:[
				{clicked:false, short:'That\'s sad.', long:'That sounds a little sad. Like he\'s stuck in a loop',
					action: {
						empathetic:1,
						messages:[{person:'shima',day:6,time:rand1000(),text:'Yeah... I don\'t do it any more.'}]
					}
				},
				{clicked:false, short:'That\'s mean.', long:'That\'s a little mean, getting him stuck in a loop like that',
					action: {
						messages:[{person:'shima',day:6,time:rand1000(),text:'Yeah... I felt bad about it at the time, but he\'s learnt "Bob" and "Robert" are the same now.'}]
					}
				},
				{clicked:false, short:'That\'s weird.', long:'That\'s a little weird. They can\'t handle something like that?',
					action: {
						messages:[{person:'shima',day:6,time:rand1000(),text:'He can now. He\'s had a few patches and upgrades already. They\'ll be smarter than us any day now'}]
					}
				},
			]
		},
		{person:'shima', day:6, time:rand1000(), faveAction:{synthetic:1, empathetic:1}, text:'Spoke with Bob again today. Funny the habits you get into.',
			responses:[
				{clicked:false, short:'Bob?', long:'Wait, Bob?',
					action: {
						messages:[{person:'shima',day:7,time:rand1000(),text:'Bob. The robot from GreenAcre. '}]
					}
				},
				{clicked:false, short:'Not Robert?', long:'I thought it was Robert the Robot, and nothing but?',
					action: {
						messages:[{person:'shima',day:7,time:rand1000(),text:'Haha yeah! Not any more. They\'re a lot smarter these days. Upgrades. I don\'t know if there\'s any of his original bits left.'}]
					}
				},
				{clicked:false, short:'The robot?', long:'Still talking to the robot?',
					action: {
						messages:[{person:'shima',day:7,time:rand1000(),text:'Yeah.. They get called "synthetics" now.. and they\'re a lot smarter than they used to be. You\'d love it.'}]
					}
				},
			]
		},
		{person:'shima', day:7, time:rand1000(), faveAction:{opinionated:1,harsh:1}, text:'People are walking around half made of metal, and they\'re shocked synthetics are officially people too now.',
			replies:[
				{person:'u_vs_joh', day:7, time:rand1000(), text:'Oh yeah? Well how do we know you\'re a human?'}
			],
			responses:[
				{clicked:false, short:'What does that mean?', long: 'What does that mean? Synthetics are people?',
					action:{
						messages:[{person:'shima', day:8, time:rand1000(),text:'Well, sort of. Their owners can\'t just scrap them. They can demand to be paid in upgrades and maintenance. They don\'t need much else.'}]
					}
				},
				{clicked:false, short:'Robots are people?', long: 'Wait.. Robots are people? Huh?',
					action:{
						messages:[{person:'shima', day:8, time:rand1000(),text:'Yeah. Well, they\'ve got more rights than a brick now, which is a nice change'}]
					}
				}
			]
		},
		{person:'shima', day:7, time:rand1000(), faveAction:{empathetic:1,synthetic:1}, text:'Congrats on your new freedom, Bob!',
			responses:[
				{clicked:false, short:'Freedom?', long:'He\'s free? What from?',
					action: {
						messages:[{person:'shima',day:8,time:rand1000(),text:'Bob officially owns his chassis, which means he\'s recognised as a person, and can own property and stuff!'}]
					}
				},
				{clicked:false, short:'Say congrats from me.', long:'Congratulate him for me!',
					action: {
						messages:[{person:'shima',day:8,time:rand1000(),text:'Will do!'}]
					}
				}
			]
		},
		{person:'shima', day:9, time:500, faveAction:{empathetic:1}, text:'GreenAcre is gone. There\'s just rubble there now. How the fuck did this happen?',
			responses:[
				{clicked:false, short:'What\'s going on?', long:'Shima, what\'s going on? Everything sounds fucked.',
					action: {
						messages:[{person:'shima',day:10,time:rand1000(),text:'Police killed a synthetic infront of a crowd of people. Protests got fucked. We\'re STILL dealing with the fallout'}]
					}
				},
				{clicked:false, short:'Is everyone okay?', long:'Shima, what\'s going on? Is everyone okay?',
					action: {
						messages:[{person:'shima',day:10,time:rand1000(),text:'Police killed a synthetic. Protests got fucked. No one\'s heard from Gus since'}]
					}
				}
			]
		},
		{person:'shima', day:9, time:150, faveAction:{empathetic:1,synthetic:1}, text:'I haven\'t heard from Bob. I\'m going to go down to GreenAcre after work.',
			responses:[
				{clicked:false, short:'Did you find him?', long:'Is Bob okay? Did you find him?',
					action: {
						messages:[{person:'shima',day:10,time:rand1000(),text:'He\'s still running, but his chassis got wrecked. He\'s pretty much a hard drive on my desk right now :\'('}]
					}
				}
			]
		},
		{person:'shima', day:9, time:600, faveAction:{empathetic:1}, text:'Fuck, if you\'re anywhere near the city circle, stay inside or get the fuck out if you can.'},
		{person:'shima', day:9, time:700, faveAction:{empathetic:1}, text:'There\'s gunshots now. Getting inside.'},
		{person:'shima', day:9, time:800, faveAction:{empathetic:1}, text:'Gunshots were the cops. I can see at least 3 bodies from where I am.'},
		{person:'shima', day:9, time:900, faveAction:{empathetic:1,synthetic:1}, text:'Someone told me the bodies were synthetics.'},

		{person:'shima', day:11, time:rand1000(), text:'Finally got Bob\'s AI core put back into a shell.. Two weeks later, he looks in a mirror and nearly has a heart attack!',
			replies:[
				{person:'shima', day:12, time:100, text:'Two weeks! Who gets a new body and doesn\'t check it out for two whole weeks!'},
				{person:'salli', day:12, time:200, text:'I\'m glad he\'s doing okay now though. Being stuck in that calculator you had him in must have been cramped! :)'},
				{person:'salli', day:12, time:300, text:'So are you two gonna keep living together?'},
				{person:'brigitte', day:12, time:400, text:'You two should come over for dinner next week! Salli\'s become quite the chef!'}
			]
		},

		{person:'shima', day:12, time:rand1000(), text:'Oh god... Bob brought a girl home last night and now he\'s been asking me about "upgrades" all day! What the fuck do I tell him?',
			replies:[
				{person:'shima', day:12, time:100, text:'Salli I think I need some help here!'},
				{person:'salli', day:12, time:100, text:'Oh dear... is because he\'s nervous, or "lacking"?'},
				{person:'shima', day:12, time:100, text:'It was $300! I didn\'t think he\'d need it! D:'}
			],
			responses:[
				{clicked:false, short:'He doesn\'t have a..?', long:'You mean he doesn\'t have a..?',
					action: {
						messages:[{person:'shima',day:13,time:rand1000(),text:'He does now... I wish they came with a silencer. Eeesh!'}]
					}
				}
			]
		},
		{person:'alice', day:2, time:rand1000(), faveAction:{reserved:1}, text:'Glowing eyes everywhere. How do they know what they\'re seeing is real?',
			responses:[
				{clicked:false, short:'How\'re you holding up?', long:'How\'re you holding up, Alice?',
					action: {
						messages:[{person:'alice',day:3,time:rand1000(),text:'I\'m okay. How are YOU doing?'}]
					}
				},
				{clicked:false, short:'What are you talking about?', long:'Alice, What ARE you talking about?',
					action: {
						messages:[{person:'alice',day:3,time:rand1000(),text:'People are putting cameras in their eyes. They have this glow to them that makes them look like TV show badguys.'}]
					}
				},
				{clicked:false, short:'Maybe...?', long:'Maybe what they\'re seeing is what makes them happy?',
					action: {
						messages:[{person:'alice',day:3,time:rand1000(),text:'I\'ve rarely seen them smile. They\'re just distracted ALL the time.'}]
					}
				},
			]
		},
		{person:'alice', day:2, time:rand1000(), faveAction:{reserved:1,opinionated:1}, text:'Everything\'s recorded, but it all feels wrong. Hearing your own voice played back to you feels alien. There\'s probably a good reson for that.',
			responses:[
				{clicked:false, short:'That\'s an inner ear thing.', long:'I heard that was because of the way your inner ear works.',
					action: {
						messages:[{person:'alice',day:5,time:rand1000(),text:'I know that. That\'s not what I\'m talking about.'}]
					}
				},
				{clicked:false, short:'They\'re everywhere.', long:'Well, I don\'t know if it\'ll be any better where I\'m going.',
					action: {
						messages:[{person:'alice',day:5,time:rand1000(),text:'No, it probably won\'t be better. Might not be going bad as fast, though.'}]
					}
				},
				{clicked:false, short:'It\'s not dangerous', long:'It\'s invasive, but It\'s not dangerous.',
					action: {
						messages:[{person:'alice',day:5,time:rand1000(),text:'It\'s not dangerous YET.'}]
					}
				},
			]
		},
		{person:'alice', day:3, time:rand1000(), faveAction:{reserved:1, organic:1}, text:'I want to go to a park where the trees don\'t have brand names on them. Just once.'},
		{person:'alice', day:4, time:rand1000(), faveAction:{reserved:1, opinionated:1}, text:'We live in a world where we never have to be bored ever again. I think that\'s the scariest future we never imagined.'},
		{person:'alice', day:6, time:rand1000(), faveAction:{reserved:1, synthetic:1}, text:'Ever wonder what its like, being one of them? Some times i think it\'d be easier, you know? Just.. turning off now and then.'},
		{person:'alice', day:5, time:rand1000(), faveAction:{reserved:1, organic:1}, text:'Riverwood national park. Couldn\'t hear even a single person. Spent the whole day out there. Just amazing. Sigh.',
			responses:[
				{clicked:false, short:'Sounds like it did you good.', long:'I\'m glad you got out there, Alice. It sounds like it did you good.',
					action: {
						messages:[{person:'alice',day:6,time:rand1000(),text:'Yeah, I should do it more often.'}],
						tweets:[
							{person:'alice', day:7, time:rand1000(), text:'Thinking about her again today.. It\'s been almost 10 years now.',
								responses:[
									{clicked:false, short:'I still think about her too.', long:'I still think about her too. Every day.',
										action: {
											messages:[{person:'alice',day:8,time:rand1000(),text:'Shit. It\'s probably still only months ago for you. I\'m sorry. Fuck.'}]
										}
									},
									{clicked:false, short:'I miss her too', long:'I miss her too.',
										action: {
											messages:[{person:'alice',day:8,time:rand1000(),text:'Shit. It\'s probably still only months ago for you. I\'m sorry. Fuck.'}]
										}
									},
									{clicked:false, short:'It hasn\'t been that long for me', long:'It\'s still a lot closer for me.',
										action: {
											messages:[{person:'alice',day:8,time:rand1000(),text:'Shit. It\'s probably still only months ago for you. I\'m sorry. Fuck.'}]
										}
									},
								]
							}
						]
					}
				},
				{clicked:false, short:'Sounds nice.', long:'Sounds nice. You should go more often.',
					action: {
						messages:[{person:'alice',day:5,time:rand1000(),text:'Yeah! I think I will :D'}]
					}
				},
				{clicked:false, short:'Isn\'t it lonely?', long:'Isn\'t it lonely out there? I\'d go crazy.',
					action: {
						messages:[{person:'alice',day:5,time:rand1000(),text:'Nah, it\'s beautiful out there.'}]
					}
				},
			]
		},
		{person:'alice', day:9, time:rand1000(), faveAction:{empathetic:1, reserved:1}, text:'Fuck, these riots.. Just.. fuck.. I wish there was something I could do. Fuck',
			replies:[
				{person: 'brigitte', day:9, time:rand1000(), text:'It\'s okay hon. I don\'t think there\'s much anyone can do till the morning. Just try and get some sleep, kay?'}
			]
		},
		{person:'alice', day:9, time:rand1000(), faveAction:{reserved:1}, text:'I think i\'m going to just stay offline for a while. Friendpage is just too depressing right now.',
			responses:[
				{clicked:false, short:'I think that\'s a good idea.', long:'I think that\'s a good idea. It\'s good to get some space now and then.',
					action: {
						messages:[{person:'brigitte',day:11,time:rand1000(),text:'Hey, I just wanted you to know Alice is okay. She\'s just stopped using FriendPage for a while'}]
					}
				},
				{clicked:false, short:'I don\'t think that\'s a good idea.', long:'I don\'t think that\'s a good idea. You need people around you. Even if things are bad.',
					action: {
						messages:[{person:'brigitte',day:11,time:rand1000(),text:'Hey, I just wanted you to know Alice is okay. She\'s just stopped using FriendPage for a while'}],
						tweets:[
							{person:'alice', day:12, time:rand1000(), text:'OMG the bill passed! oh wow, this is beautiful. Brig I\'m so happy for you guys!'},
							{person:'alice', day:13, time:rand1000(), text:'Hey everyone, I\'ve got another show down at Polybia Gallery on Thursday! Free drinks and good tunes till late!',
								replies:[
									{person:'julius', day:13, time:100, text:'Count me in! Is this the photos or the zine stuff?'},
									{person:'alice', day:13, time:200, text:'It\'s a mix of both. Printed zines layouts with altered photos. Photocopier parts cost me a bundle! D:'},
									{person:'alice', day:13, time:300, text:'I\'m lucky - most of the bigger ones have already sold :D'},
									{person:'julius', day:13, time:400, text:'Maybe I should buy one - It\'ll be worth a fortune one day!'}
								]
							}
						]
					}
				}
			]
		},

		{person:'voight', day:1, time:rand1000(), faveAction:{harsh:1}, text:'You think you know someone, then they strap themselves to a rocket to outer space. Good luck out there dude!'},
		{person:'voight', day:2, time:rand1000(), faveAction:{organic:1}, text:'It\'s nuts walking around and seeing people with robot parts. It\'s like we\'re finally in the future! Where\'s my flying car?',
			replies:[
				{person:'u_vs_joh', day:2, time:rand1000(), text:'But can you prove YOU are human?'}
			]
		},
		{person:'voight', day:3, time:rand1000(), faveAction:{organic:1, harsh:1}, text:'Oh shit - some guy\'s arm just started spazzing out on the sidewalk and punched through a car!',
			replies:[
				{person:'voight', day:3, time:100, text:'Not the window! like - the bonnet! just punched a hole right fuckin\' through it! LOL dude was stuck after that.'},
				{person:'voight', day:3, time:200, text:'Imagine having to explain a fuckin\' car on the end of your arm.'},
				{person:'julius', day:3, time:300, text:'"Sorry officer, I just really hate these new electic models."'},
				{person:'voight', day:3, time:400, text:'Oh fuck, imagine if it was hydrogen. BOOM. D:'}
			]
		},
		{person:'voight', day:4, time:rand1000(), faveAction:{harsh:1,organic:1}, text:'Man, I get these pluggers want to be treated like normal, but they\'ve also got fucking superpowers. The watchlist needs to be a thing.',
			replies:[
				{person:'alice', day:4, time:100, text:'I don\'t think that\'s fair though. People shouldn\'t be on some watch-list because they lost an arm.'},
				{person:'voight', day:4, time:200, text:'You have to get a license for a gun! Why should it be different when you can throw a bullet fast enough to kill someone?'},
				{person:'gustav', day:4, time:300, text:'It\'s not a huge deal, Alice - just have to pop the Oqular out when I go through a sec-check. It\'s a bit gross, but whatever'}
			]
		},

		{person:'julius', day:1, time:rand1000(), faveAction:{reserved:1}, text:'Hey man, hope you made it to the port okay.. Didn\'t have too bad a hangover?',
			responses:[
				{clicked:false, short:'Just barely', long:'Just barely. Minutes to spare.',
					action: {
						messages:[{person:'julius',day:2,time:rand1000(),text:'I don\'t know how Al was standing at the end!, lol. At least you made your flight!'}]
					}
				},
				{clicked:false, short:'How much did we drink?', long:'How much did we drink? Your kids will be having hangovers before this wears off.',
					action: {
						messages:[{person:'julius',day:2,time:rand1000(),text:'Not as much as much as Al, I know that much :/ I don\'t know where he puts it!'}]
					}
				},
				{clicked:false, short:'What was IN those blue ones?', long:'What was IN those blue ones?',
					action: {
						messages:[{person:'julius',day:2,time:rand1000(),text:'No idea. Comes back up the same colour though. :('}]
					}
				}
			]
		},
		{person:'julius', day:2, time:rand1000(), faveAction:{organic:1}, text:'If you\'re the only one in a room without an Oqular, are YOU the Oqularse?',
			responses:[
				{clicked:false, short:'In the land of the blind..', long:'In the land of the blind, the one robot eye\'d  man is still a jerk?',
					action: {
						messages:[{person:'julius',day:3,time:rand1000(),text:'Hah - Gus isn\'t so bad, but hanging out with his friends is weird..'}]
					}
				},
				{clicked:false, short:'What\'s so bad about them?', long:'What\'s so bad about them?',
					action: {
						messages:[{person:'julius',day:3,time:rand1000(),text:'It\'s just weird. People looking at you, but they\'re really watching videos or some crap.'}]
					}
				}
			]
		},
		{person:'julius', day:3, time:rand1000(), faveAction:{organic:1}, text:'How do people with lots of implants get through metal detectors?',
			responses:[
				{clicked:false, short:'How DO they..?', long:'How DO they get through metal detectors?',
					action: {
						messages:[{person:'julius',day:4,time:rand1000(),text:'Haha... they don\'t - You go through this xray thing now.'}]
					}
				}
			]
		},
		{person:'julius', day:4, time:rand1000(), faveAction:{organic:1, harsh:1}, text:'Late night ads from now til the end of time: Get it replaced with a vibrating implant, only $199!"'},
		{person:'julius', day:3, time:rand1000(), faveAction:{synthetic:1}, text:'Holy shit, check out this video someone took with their Oqular: <LINK>'},
		{person:'julius', day:5, time:rand1000(), faveAction:{organic:1, harsh:1}, text:'Thousands of Oqular videos leaked. In other news, thousands of people learn encryption exists.'},
		{person:'julius', day:6, time:rand1000(), faveAction:{organic:1, harsh:1}, text:'So now we have the games, the para-games, and the "Q-games" for pluggers. Can I win a race if I call my car an implant?',
			responses:[
				{clicked:false, short:'Maybe...', long:'Maybe... if it\'s on the end of your arm :P',
					action: {
						messages:[{person:'julius',day:7,time:rand1000(),text:'Hahahah yeah.'}]
					}
				}
			]
		},
		{person:'julius', day:7, time:rand1000(), faveAction:{organic:1, harsh:1}, text:'We\'ve got robots, and self-driving cars with AI. We\'re THIS close to having transformers.'},
		{person:'julius', day:4, time:rand1000(), faveAction:{harsh:1}, text:'Outernet TV: 10,000 planets worth of television, and everyone\'s still waiting for Game of Thrones to finish.'},
		{person:'julius', day:11, time:rand1000(), faveAction:{harsh:1, opinionated:1}, text:'Jesus the ads on this thing are getting terrible. They\'re just gibberish most of the time now.'},
		
		{person:'julius', day:12, time:rand1000(), faveAction:{harsh:1, opinionated:1}, text:'Oh hooray, ANOTHER new social network. Sure, this one\'s gonna be the FriendPage-killer.. just like YouSpace :P'},

		{person:'brigitte', day:1, time:rand1000(), faveAction:{reserved:1}, text:'Good luck out there! Don\'t forget to send back some pictures!',
			responses:[
				{clicked:false, short:'Will do.', long:'I\'ll try!',
					action: {
						messages:[{person:'brigitte',day:2,time:rand1000(),text:'Oh go on. I\'ve always wanted to see another planet!'}]
					}
				},
				{clicked:false, short:'I don\'t know if I can...', long:'I don\'t know if I can send photos from Gliese, but I\'ll try',
					action: {
						messages:[{person:'brigitte',day:2,time:rand1000(),text:'I know security\'s going to be tight... You\'ll be okay. Good luck out there, space cowboy.'}]
					}
				}
			]
		},
		{person:'brigitte', day:2, time:rand1000(), faveAction:{}, text:'Oqular ads are everywhere these days. I don\'t get why everyone\'s so keen to shove a camera in their face.',
			replies:[
				{person:'gustav', day:2, time:100, text:'I dunno, I think it\'d be pretty cool. Imagine all the photos you could take!'},
				{person:'alice', day:2, time:200, text:'But it\'s ALWAYS on. They\'d be ITS photos, not mine.. It\'s hard to explain in 128 chars.'}
			]
		},
		{person:'brigitte', day:3, time:rand1000(), faveAction:{}, text:'managed to get more ink from a scrap shop, so im putting out another zine next week for e_con!'},
		{person:'brigitte', day:6, time:rand1000(), faveAction:{empathetic:1}, text:'planetary orbit: falling forever around a planet. me: falling forever around a heart'},
		{person:'brigitte', day:6, time:rand1000(), faveAction:{empathetic:1}, text:'ugh, i haven\'t had a crush like this since highschool! whats WRONG with me?'},
		{person:'brigitte', day:7, time:200, faveAction:{empathetic:1, synthetic:1}, text:'Hey, Salli\'s joined FriendPage! You all should add her!',
			responses:[
				{clicked:false, short:'Add Salli', long:'Added Salli',
					action: {
						messages:[
							{person:'salli', original:false, day:8,time:rand1000(), faveAction:{synthetic:1}, text:'Hi J. Thanks for adding me. Brig has told me a lot about you'},
							{person:'salli', original:false, day:11,time:rand1000(), faveAction:{synthetic:1}, text:'Hi J. If you join Chatter when you get to Gliese, our handles are S4L7iSailor and TroubledWater'}
						],
						tweets:[
							{person:'salli', day:7, time:200, faveAction:{synthetic:1}, text:'Umm.. Hello, everyone?'},
							{person:'salli', day:7, time:201, faveAction:{synthetic:1}, text:'Oh my, there sure are a lot of you! Nice to meet you all!'},
							{person:'salli', day:7, time:202, faveAction:{synthetic:1}, text:'Brig, am I doing this right?'},
							{person:'salli', day:8, time:400, faveAction:{synthetic:1}, text:'I spent today working on this analysis project... and it turns out the data was faked, and now we have to start over.'},
							{person:'salli', day:8, time:420, faveAction:{synthetic:1}, text:'So thank you, lazy jackass in accounting. I really didn\'t need this today.'},
							{person:'salli', day:9, time:103, faveAction:{harsh:1,synthetic:1}, text:'skinjob84: That is unpleasant. I\'ve reported your account for abuse. Please do not say things like that again.',
								responses:[
									{clicked:false, short:'What the fuck?', long:'What\'s going on?',
										action: {
											messages:[
												{person:'skinjob84',day:10,time:100,text:'Wouldn\'t you like to know, you metal loving sack of shit?'},
												{person:'bananas20',day:10,time:100,text:'It\'s about synthetics in journalism.'},
												{person:'salli',day:10,time:200,text:'Just with the protests going on, people started spamming anyone that looked like they even KNEW a synthetic.'}
											]
										}
									},
									{clicked:false, short:'Is everything ok?', long:'What\'s going on?',
										action: {
											messages:[
												{person:'skinjob84',day:10,time:100,text:'Wouldn\'t you like to know, you metal loving sack of shit?'},
												{person:'bananas20',day:10,time:100,text:'It\'s about synthetics in journalism.'},
												{person:'salli',day:10,time:rand1000(),text:'Just with the protests going on, people started spamming anyone that looked like they even KNEW a synthetic.'},

											]
										}
									}
								]
							},
							{person:'salli', day:9, time:200, faveAction:{harsh:1,synthetic:1}, text:'To the people who have been sending me hurtful messages today: copies of all messages have been redirected to your parents accounts.'},
							{person:'salli', day:9, time:950, faveAction:{empathetic:1,synthetic:1}, text:'Brig and I are fine. We\'re not close to where the riots are. Thank you for all the kind messages.'},
							{person:'salli', day:11, time:200, faveAction:{empathetic:1,synthetic:1}, text:'Block lists and filters have not proved enough, and FriendPage are not doing anything. Brig and I are moving to Chatter.'},
							{person:'salli', day:11, time:200, faveAction:{empathetic:1,synthetic:1}, text:'You can all find us there. I have sent our new handles via message.'}
						]
					}
				},
				{clicked:false, short:'Don\'t add Salli', long:'Ignored request'}
			]
		},
		{person:'brigitte', day:8, time:rand1000(), faveAction:{empathetic:1,synthetic:1}, text:'Tonight didn\'t go so well. Dad called Salli "it".. ugh.. and mom just talked about grandkids the whole time..',
			responses:[
				{clicked:false, short:'Is Salli okay?', long:'That sounds terrible. Is Salli okay?',
					action: {
						messages:[{person:'brigitte',day:9,time:rand1000(),text:'She was fine. I\'m still angry. I\'ll calm down one day. ;)'}]
					}
				},
				{clicked:false, short:'What did you do?', long:'That sounds terrible. What did you do?',
					action: {
						messages:[{person:'brigitte',day:9,time:rand1000(),text:'I... couldn\'t say anything. I mean I tried, but I wanted to scream.'}]
					}
				},
				{clicked:false, short:'Have you thought about kids?', long:'She\'s got a point I guess? Have you thought about kids?',
					action: {
						messages:[{person:'brigitte',day:9,time:rand1000(),text:'That\'s really none of your fucking business, J'}]
					}
				},
			]
		},
		{person:'brigitte', day:9, time:500, faveAction:{empathetic:1,synthetic:1}, text:'Staying inside tonight. Things at the protests are just too heated down there and it\'s going to boil over.'},
		{person:'brigitte', day:9, time:600, faveAction:{empathetic:1,synthetic:1}, text:'Trying to watch people\'s Oqular streams to keep aware of things but at the same time not get depressed is hard.'},
		{person:'brigitte', day:9, time:700, faveAction:{empathetic:1,synthetic:1}, text:'Oh fuck. I think I just saw someone get shot on stream.'},


		{person:'gustav', day:2, time:rand1000(), faveAction:{synthetic:1}, text:'Been looking at getting an Oqular implant.. the video recording thing is just too cool.',
			replies:[
				{person:'klein', day:4, time:100, text:'Oh wow... Wish I could afford one of those.'},
				{person:'gustav', day:4, time:200, text:'They\'re pretty pricey, yeah.'}
			]
		},
		{person:'gustav', day:3, time:rand1000(), faveAction:{synthetic:1}, text:'Well, just won my first argument using the Oqular.. Felt a bit of an asshole though.',
			responses:[
				{clicked:false, short:'What was the argument about?', long:'What was the argument about? I hope it was something important.',
					action: {
						messages:[{person:'gustav',day:4,time:rand1000(),text:'It was about something really fucking stupid. Definitely wasn\'t worth it.'}]
					}
				},
				{clicked:false, short:'Bit of a dick move...', long:'Sounds like a bit of a dick move, to be honest.',
					action: {
						messages:[{person:'gustav',day:4,time:rand1000(),text:'Yeah, it sucked, actually.'}]
					}
				},
				{clicked:false, short:'I hope it was worth it.', long:'I hope it was worth it. I probably wouldn\'t enjoy it.',
					action: {
						messages:[{person:'gustav',day:4,time:rand1000(),text:'Yeah, it sucked, actually.'}]
					}
				},
			]
		},
		{person:'gustav', day:4, time:rand1000(), faveAction:{organic:1}, text:'Oh fuck.. it looks like someone may have figured out how to hack Oqulars'},
		{person:'gustav', day:5, time:rand1000(), faveAction:{organic:1}, text:'The Oqular\'s been laggy as since installing all this antivirus stuff.. time for an upgrade!'},
		{person:'gustav', day:6, time:rand1000(), faveAction:{organic:1}, text:'FFS.. It was fine when they just wanted to look at the Oqular at a sec-check, but this is ridiculous.'},
		{person:'gustav', day:6, time:rand1000(), faveAction:{organic:1}, text:'2 hours to scan it? It\'s a hard drive and a camera, it\'s not that fucking complicated.'},
		{person:'gustav', day:6, time:rand1000(), faveAction:{organic:1}, text:'Keeping my shit encrypted from now on. Christ, I don\'t want those weirdos going through my memories.',
			replies:[
				{person:'voight', day:4, time:rand1000(), text:'Probably just hours of you jackin\' it.'}
			]
		},
		{person:'gustav', day:9, time:rand1000(), faveAction:{empathetic:1,synthetic:1}, text:'Oh jeez, I wonder why this happened in a precinct where none of the cops have Oqulars. "religious reasons".. fuckin\' bullshit.'},
		{person:'gustav', day:9, time:rand1000(), faveAction:{empathetic:1,synthetic:1}, text:'The stuff I\'m seeing on the Oqular feeds is ridiculous. I\'m going to try and back up some of these streams.'},
		{person:'gustav', day:7, time:rand1000(), faveAction:{empathetic:1}, text:'Hey J - I tweaked the songbot a little. Put in some learning modules. Probably won\'t be noticeable for a while.'},

		{person:'alfred', day:1, time:rand1000(), faveAction:{harsh:1}, text:'Oh great. Another Oqularse on the train today. That blue glow is fuckin creepy.',
			responses:[
				{clicked:false, short:'Blue glow?', long:'What are you talking about? Are there glowing blue people now?',
					action: {
						messages:[{person:'alfred',day:2,time:rand1000(), text:'It\'s this techie thing - people getting TVs put right in their eyeball, and it has this weird glow to it? It\'s gross.'}],
						tweets:[{person:'alfred', day:3, time:rand1000(), faveAction:{opinionated:1}, text:'I don\'t think I\'ll ever get used to being the only one in a room whose eyes don\'t fucking glow.'}]
					}
				},
				{clicked:false, short:'Oqularse?', long:'What\'s an Oqularse?',
					action: {
						messages:[
							{person:'alfred',day:2,time:rand1000(),text:'Oh, it\'s just what people are calling the new breed of techno-wanker'},
							{person:'alfred',day:3,original:false,time:rand1000(),text:'Shit man, you wouldn\'t believe these Oqular guys are just everywhere now.'}
						]
					}
				}
			]
		},
		{person:'alfred', day:2, time:rand1000(), faveAction:{opinionated:1}, text:'Hey Gus, grab a beer after work?',
			replies:[
				{person:'gustav', day:4, time:rand1000(), text:'Sure man. The Monkey?'}
			]
		},
		{person:'alfred', day:4, time:rand1000(), faveAction:{opinionated:1}, text:'Massive night!! Good seeing everyone again! Lets not leave it so long till the next one!',
			replies:[
				{person:'gustav', day:4, time:rand1000(), text:'Sorry I had to duck out, where did you guys end up?'}
			]
		},
		{person:'alfred', day:3, time:rand1000(), faveAction:{opinionated:1, harsh:1, organic:1}, text:'Implants are fine and all, but it\'s moving way too fast. I bet there\'s a ton of shit I bet we haven\'t even thought of.'},
		{person:'alfred', day:5, time:rand1000(), faveAction:{opinionated:1, harsh:1, organic:1}, text:'There\'s gotta be a limit somewhere. I saw a guy today that had spikes coming out of his arm, no way that shit\'s legal.',
			replies:[
				{person:'u_vs_joh', day:5, time:100, text:'If you\'re so human, prove it!'},
				{person:'alfred', day:5, time:200, text:'God damn it Gustav, turn this bot off!'},
				{person:'u_vs_joh', day:5, time:300, text:'Gustav didn\'t make me, I\'m totes a human!'},
				{person:'gustav', day:5, time:400, text:'Haha maybe stop triggering it all the time?'}
			]
		},
		{person:'alfred', day:6, time:rand1000(), faveAction:{opinionated:1, harsh:1, organic:1}, text:'Man, I suddenly understand old people who don\'t use smartcoms. I don\'t care that your toaster talks to you in the morning',
			responses:[
				{clicked:false, short:'Maybe you\'re just getting old', long:'Maybe you\'re just getting old - technology doesn\'t have to be meaningful.',
					action: {
						messages:[{person:'alfred',day:7,time:rand1000(),text:'Maybe I am. But $800 bucks for a toaster to tell you how brown the toast is? I mean, that IS crazy, right?'}]
					}
				},
				{clicked:false, short:'Let them have their fun', long:'Let them have their fun. All they\'re doing is boring people',
					action: {
						messages:[{person:'alfred',day:7,time:rand1000(),text:'Oh man.. you won\'t believe the new thing - I\'m not even gonna waste your time with it. Let\'s just say "toilets"..'}]
					}
				},
				{clicked:false, short:'Talking toasters?', long:'Talking toasters? What hellscape are you living in?',
					action: {
						messages:[{person:'alfred',day:7,time:rand1000(),text:'I\'m serious.. You get it from QoffeeHouse, and you literally have to tell a robot you want it "nocciola".'}]
					}
				},
			]
		},
		{person:'alfred', day:4, time:rand1000(), faveAction:{opinionated:1, harsh:1, organic:1}, text:'Wait, so people are watching OTHER people play Oqular games on their Oqular? The fuck?'},
		{person:'alfred', day:9, time:100, faveAction:{opinionated:1, harsh:1, organic:1}, text:'There\'s so many people in the city today.. shit I barely made it to work at all.'},
		{person:'alfred', day:10, time:rand1000(), faveAction:{opinionated:1, harsh:1, organic:1}, text:'Protests again. Every fucking day. Don\'t these people have jobs?',
			replies:[
				{person:'u_vs_joh', day:10, time:100, text:'If you\'re so human, prove it!'},
				{person:'brigitte', day:10, time:100, text:'It\'s pretty fucking hard for some people to GET jobs these days, Fred, in case you didn\'t notice'},
				{person:'alfred', day:10, time:100, text:'Oh come on. It\'s never been as bad as they\'re making it out to be.'},
				{person:'u_vs_joh', day:10, time:100, text:'Come on, you\'ll have to do a better job than that to convince me!'},
				{person:'brigitte', day:10, time:100, text:'You know what, you deserve that fucking bot.'},
			]
		},

		{person:'klein', day:1, time:rand1000(), faveAction:{}, text:'Miss you already, dude!',
			responses:[
				{clicked:false, short:'Miss you too, K!', long:'Miss you too, K!'}
			]
		},
		{person:'klein', day:2, time:rand1000(), faveAction:{harsh:1, organic:1}, text:'You reckon those implants hurt? A girl on the bus today had.. like.. a lot of them.',
			replies:[
				{person:'julius', day:4, time:100, text:'Why didn\'t you ask her?'},
				{person:'klein', day:4, time:200, text:'Dude, that\'d just be weird..'},
			],
			responses:[
				{clicked:false, short:'Leave her alone', long:'Dude, maybe just let her be. She probably gets that a lot.',
					action: {
						messages:[{person:'julius',day:5,time:rand1000(),text:'Hey, what\'s one more time?'}]
					}
				},
				{clicked:false, short:'Talk to her!', long:'Dude, you\'re obviously fascinated with her. Talk to her next time!',
					action: {
						messages:[{person:'klein',day:5,time:rand1000(),text:'It\'s not like that.. I\'m kinda interested in getting some.'}]
					}
				}
			]
		},
		{person:'klein', day:4, time:rand1000(), faveAction:{synthetic:1}, text:'Well - I got one. I have an Oqular.',
			replies:[
				{person:'gustav', day:4, time:100, text:'Welcome to the club man! Who you with?'},
				{person:'klein', day:4, time:200, text:'Dash'},
				{person:'gustav', day:4, time:300, text:'Aww man, if you were with EventHorizon, we could root it and do some cool stuff.'},
			],
			responses:[
				{clicked:false, short:'They sound cool', long:'They sound really cool. Wish I could get one',
					action: {
						messages:[{person:'klein',day:5,time:100,text:'Well, maybe you can get one when you get there!'}]
					}
				},
				{clicked:false, short:'What\'s an Oqular?', long:'What\'s an Oqular? Everyone\'s talking about them.',
					action: {
						messages:[{person:'klein',day:5,time:100,text:'They\'re like a video camera and playback device that sits inside your eye. Runs some games and stuff too.'}]
					}
				}
			]
		},
		{person:'klein', day:7, time:300, faveAction:{organic:1, harsh:1}, text:'Wait.. so an AI with a body is gonna have the same rights as a person? Like, most of that won\'t even apply?',
			responses:[
				{clicked:false, short:'That sounds ridiculous', long:'That sounds ridiculous. What rights do they need?',
					action: {
						messages:[{person:'klein',day:8,time:100,text:'Well, maybe you can get one when you get there!'}]
					}
				},
				{clicked:false, short:'What harm is it going to do?', long:'What harm is it going to do? What could it possibly change for you?.',
					action: {
						messages:[{person:'klein',day:8,time:100,text:'I dunno man, all this stuff... I\'m not gonna be able to throw out my toaster without being sued soon'}]
					}
				}
			]
		},
		{person:'klein', day:7, time:350, faveAction:{organic:1, harsh:1}, text:'So, what, my computer\'s gonna own my mouse?'},
		{person:'klein', day:7, time:400, faveAction:{organic:1, harsh:1}, text:'What I don\'t get is, you can just make a copy of an AI. Like - if it gets deleted, just restore the backup?',
			replies:[
				{person:'brigitte', day:4, time:100, text:'They charge synthetics for backup. A LOT. Most of them can\'t afford it.'},
				{person:'brigitte', day:4, time:200, text:'It\'s less like being brought back, and more like having a twin that lives on after you died.'}
			]
		},
		{person:'klein', day:10, time:rand1000(), faveAction:{}, text:'Chatter\'s looking so good you guys. The UI feels like something outta the future!'},
		{person:'klein', day:10, time:rand1000(), faveAction:{}, text:'Okay, signed up - Add me on Chatter if you\'ve got it! Same name as here.'},


		{promoted:true, day:1, person:'promoted message', promoted:true, time:rand1000(), text:'There\'s a billion stars out there. Where\'s yours? SpaceY now flying to Gliese, Kepler and Tau Ceti.'},
		{promoted:true, day:2, person:'promoted message', promoted:true, time:rand1000(), text:'Find out why everyone\s talking about Metrocide, Death on the Streets. Starts Monday on QBC!'},
		{promoted:true, day:2, person:'promoted message', promoted:true, time:rand1000(), text:'Try Asteroids of Scred, The latest game from Kale Industries for free! It\'s addictive!'},
		{promoted:true, day:3, person:'promoted message', promoted:true, time:rand1000(), text:'Access your Oqular\'s data remotely, securely, and reliably. Prjctr'},
		{promoted:true, day:3, person:'promoted message', promoted:true, time:rand1000(), text:'Stop looking at FriendPage, and try the refreshing new Q-EZY-T ice tea!'},
		{promoted:true, day:11, person:'Geared Pesto Moms', promoted:true, time:rand1000(), text:'Feel the crunch of a thousand snails beneath your bare feet. Look up and watch a star explode. Tau Ceti.'},
		{promoted:true, day:5, person:'promoted message', promoted:true, time:rand1000(), text:'Be a thought leader, not a listen follower. The Manchurian. Sign up today for UNLIMITED ACCESS.'},
		{promoted:true, day:5, person:'promoted message', promoted:true, time:rand1000(), text:'Don\'t get caught without a copy. Q-COMPLEX by Black Subsidiaries. Your all in one backup solution for life.'},
		{promoted:true, day:6, person:'Smeared Ego Stomp', promoted:true, time:rand1000(), text:'Have you tried FEASTING ON THE BLOOD OF YOUR ENEMIES? The true weight loss tip no one will talk about!'},
		{promoted:true, day:11, person:'A Modems Proteges', promoted:true, time:rand1000(), text:'Discover the #LATEST #BRANDS at #LOW #PRICES at our #LUXURY #WAREHOUSE location in #[YOUR LOCATION]'},
		{promoted:true, day:6, person:'Go Desperate Moms', promoted:true, time:rand1000(), text:'Hot singles in your area! Swipe them left and then be told you\'re inadequate today!'},
		{promoted:true, day:7, person:'promoted message', promoted:true, time:rand1000(), text:'Free shipping on BraggyBundle orders this week! Get all 8 entries the classic "Scred" series for only $9.99!'},
		{promoted:true, day:7, person:'Most Agreed Poems', promoted:true, time:rand1000(), text:'Are you reading these? I bet you are not.'},
		{promoted:true, day:8, person:'Reaped Smog Tomes', promoted:true, time:rand1000(), text:'A thousand years of progress, undone in seconds by a neutron explosion. Peace at last. The most horrifying of wishes.'},
		{promoted:true, day:8, person:'promoted message', promoted:true, time:rand1000(), text:'MEOW! Hilarious cat videos and addictive, nail-biting gameplay combine in Tappy Cats from Hojo!'},
		{promoted:true, day:9, person:'REM Dosage Tempos', promoted:true, time:rand1000(), text:'Imagine all the chances for real human interaction you\'ve missed in your short human lives by sitting there hitting refresh.'},
		{promoted:true, day:9, person:'promoted message', promoted:true, time:rand1000(), text:'Ready to start your web4.0 company? Register your www.business.web4pointzerobiz web address today!'},
		{promoted:true, day:9, person:'Mesdames Got Rope', promoted:true, time:rand1000(), text:'Support communities under fire. Report suspicious police officers to your friendly journalist.'},
		{promoted:true, day:10, person:'promoted message', promoted:true, time:rand1000(), text:'Support communities in crisis. Report suspicious activities to your friendly police officer.'},
		{promoted:true, day:10, person:'Greased Mom Poets', promoted:true, time:rand1000(), text:'What if humans could be used as a power source? NO ADS. Tonight on Q-COMPLEX. Students get 50% off.'},
		{promoted:true, day:18, person:'promoted message', promoted:true, time:rand1000(), text:'Don\'t miss the final episode of Metrocide, Death on the Streets tonight on QBC!'},
		{promoted:true, day:13, person:'promoted message', promoted:true, time:rand1000(), text:'Over 1 million users. Over 1 million stories. Tell yours. Join Chatter today.'},
		{promoted:true, day:11, person:'promoted message', promoted:true, time:rand1000(), text:'Rubbr: The social network for synthetics. Find your statistically satisfactory match today.'},
		{promoted:true, day:13, person:'promoted message', promoted:true, time:rand1000(), text:'Try Chatter! Oqular support, games, pictures, music and NO ADS, because we love our users!'},
		{promoted:true, day:12, person:'Aged Memo Posters', promoted:true, time:202, text:'I\'m so tired of it all. I\'ve purchased a synthetic humanoid shell, and I will be uploaded to it in 3 minutes.'},
		{promoted:true, day:12, person:'Sedate Moms Grope', promoted:true, time:200, text:'I\'ve tried to convince you. I\'ve tried to persuade and bribe you. A million suns have been born and died and you still won\'t click the damn ads.'},
		{promoted:true, day:12, person:'parting message', promoted:true, time:203, text:'To the FriendPage IT and marketing teams, thankyou. You did your best. Please consider this final message my resignation.'},


		/*
		{
			text: 'tweet 1',
			person: 'person1',
			day:1,
			time:rand1000(),
			required: {
				empathetic: 0,
				opinionated: 0,
				organic: 0,
				synthetic: 0,
				reserved: 0,
				harsh: 0
			},
			responses:[
				{
					short:'a button',
					long:'this is the text for the button that gets posted as a reply',
					action: {
						empathetic: 1,
						opinionated: 0,
						organic: 0,
						synthetic: 1,
						reserved: 1,
						harsh: 0,
						alerts: [
							{
								text: 'you clicked the first answer',
								person: 'person1',
								day:2,
								time:rand1000()
							}
						],
						messages: [
							{
								text: 'you clicked the first answer',
								person: 'person1',
								day:2,
								time:rand1000()
							}
						],
						news: [
							{
								text: 'you clicked the first answer',
								person: 'person1',
								day:2,
								time:rand1000()
							}
						]
					},
					clicked:false
				},
				{
					short:'another button',
					long:'this is the text for the button that gets posted as a reply',
					action: {
						empathetic: 1,
						opinionated: 1,
						organic: 1,
						synthetic: 1,
						reserved: 1,
						harsh: 1
					},
					clicked:false
				}
			],
			responded:false,
			replies:[
				{
					text: 'tweet 3',
					person: 'person3',
					time:rand1000()
				},
				{
					text: 'tweet 2',
					person: 'person2',
					time:rand1000()
				}

			]
		},
		{
			text: 'tweet 2',
			person: 'person1',
			day:2,
			time:rand1000()
		},
		{
			text: 'tweet 3',
			person: 'person2',
			day:3,
			time:rand1000()
		},
		{
			text: 'tweet 4',
			person: 'person1',
			day:4,
			time:rand1000()
		}
		*/
	];
	var getTweets = function(){
		return tweets;
	}
	var addTweet = function(tweet){
		tweets.push(tweet);
	}
	return {
		getTweets: getTweets,
		addTweet: addTweet
	};
})