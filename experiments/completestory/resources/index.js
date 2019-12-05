var order = 1;

//var stims = [{'condition': 'possible_certain', 'vignette': 'bike', 'sentence': "I just bought a vintage bicycle at a garage sale in my neighborhood. It will need some work, but it's in decent shape. <b>Although it's possible that the bike isn't from the 1960's, it's certain that it is.</b>"}, {'condition': 'possible_must', 'vignette': 'bike', 'sentence': "I just bought a vintage bicycle at a garage sale in my neighborhood. It will need some work, but it's in decent shape. <b>Although it's possible that the bike isn't from the 1960's, it must be.</b>"}, {'condition': 'neutral_certain', 'vignette': 'bike', 'sentence': "I just bought a vintage bicycle at a garage sale in my neighborhood. It will need some work, but it's in decent shape. <b>Although I don't know where the bike was produced, it's certain that it is from the 1960's.</b> "}, {'condition': 'neutral_must', 'vignette': 'bike', 'sentence': "I just bought a vintage bicycle at a garage sale in my neighborhood. It will need some work, but it's in decent shape. <b>Although I don't know where the bike was produced, it must be from the 1960's.</b> "}, {'condition': 'possible_certain', 'vignette': 'printing', 'sentence': "Jack Spencer used to produce his photographs in a darkroom. Lately, though, he's been working with inkjet printing. <b>So although it's possible that he isn't working with Photoshop as well, it's certain that he is.</b>"}, {'condition': 'possible_must', 'vignette': 'printing', 'sentence': "Jack Spencer used to produce his photographs in a darkroom. Lately, though, he's been working with inkjet printing. <b>So although it's possible that he isn't working with Photoshop as well, he must be.</b>"}, {'condition': 'neutral_certain', 'vignette': 'printing', 'sentence': "Jack Spencer used to produce his photographs in a darkroom. Lately, though, he's been working with inkjet printing. <b>So although I don't think he has stopped working in the darkroom altogether, it's certain that he is working with Photoshop as well.</b>"}, {'condition': 'neutral_must', 'vignette': 'printing', 'sentence': "Jack Spencer used to produce his photographs in a darkroom. Lately, though, he's been working with inkjet printing. <b>So although I don't think he has stopped working in the darkroom altogether, he must be working with Photoshop as well.</b>"}, {'condition': 'possible_certain', 'vignette': 'helmets', 'sentence': "When football teams buy helmets, they rarely repaint them in the team's colors. <b>Although it's possible that repainting the helmets isn't too much of a hassle, it's certain that it is.</b>"}, {'condition': 'possible_must', 'vignette': 'helmets', 'sentence': "When football teams buy helmets, they rarely repaint them in the team's colors. <b>Although it's possible that repainting the helmets isn't too much of a hassle, it must be.</b>"}, {'condition': 'neutral_certain', 'vignette': 'helmets', 'sentence': "When football teams buy helmets, they rarely repaint them in the team's colors. <b>Although I don't think that the teams even care whether the helmets match the uniforms, it's certain that repainting the helmets is too much of a hassle.</b>"}, {'condition': 'neutral_must', 'vignette': 'helmets', 'sentence': "When football teams buy helmets, they rarely repaint them in the team's colors. <b>Although I don't think that the teams even care whether the helmets match the uniforms, repainting the helmets must be too much of a hassle.</b>"}, {'condition': 'possible_certain', 'vignette': 'stereo', 'sentence': "It is getting more difficult to find stereo systems that will play cassettes. You could try a used electronics store, or if you want to buy a brand new stereo, the Jensen JTA has a built-in cassette deck. <b>Although it's possible that there aren't any others on the market, it's certain that there are.</b>"}, {'condition': 'possible_must', 'vignette': 'stereo', 'sentence': "It is getting more difficult to find stereo systems that will play cassettes. You could try a used electronics store, or if you want to buy a brand new stereo, the Jensen JTA has a built-in cassette deck. <b>Although it's possible that there aren't any others on the market, there must be.</b>"}, {'condition': 'neutral_certain', 'vignette': 'stereo', 'sentence': "It is getting more difficult to find stereo systems that will play cassettes. You could try a used electronics store, or if you want to buy a brand new stereo, the Jensen JTA has a built-in cassette deck. <b>Although I can't say whether the JTA is itself a quality product, it's certain that there are others on the market.</b>"}, {'condition': 'neutral_must', 'vignette': 'stereo', 'sentence': "It is getting more difficult to find stereo systems that will play cassettes. You could try a used electronics store, or if you want to buy a brand new stereo, the Jensen JTA has a built-in cassette deck. <b>Although I can't say whether the JTA is itself a quality product, there must be others on the market.</b>"}, {'condition': 'possible_certain', 'vignette': 'mustang', 'sentence': "I think I've found my dream car at a used car dealership down the road: a beautiful 1964 white Ford Mustang. The body, paint, and suede interior look pristine. I checked the speedometer, and it shows 38,000 miles. <b>Although it's possible that the mileage isn't actually 138,000, it's certain that it is.</b>"}, {'condition': 'possible_must', 'vignette': 'mustang', 'sentence': "I think I've found my dream car at a used car dealership down the road: a beautiful 1964 white Ford Mustang. The body, paint, and suede interior look pristine. I checked the speedometer, and it shows 38,000 miles. <b>Although it's possible that the mileage isn't actually 138,000, it must be.</b> "}, {'condition': 'neutral_certain', 'vignette': 'mustang', 'sentence': "I think I've found my dream car at a used car dealership down the road: a beautiful 1964 white Ford Mustang. The body, paint, and suede interior look pristine. I checked the speedometer, and it shows 38,000 miles. <b>Although I dont think the mileage will affect the car's performance, it's certain that the mileage is actually 138,000.</b> "}, {'condition': 'neutral_must', 'vignette': 'mustang', 'sentence': "I think I've found my dream car at a used car dealership down the road: a beautiful 1964 white Ford Mustang. The body, paint, and suede interior look pristine. I checked the speedometer, and it shows 38,000 miles. <b>Although I dont think the mileage will affect the car's performance, the mileage must actually be 138,000.</b> "}]
//var stims = [{"condition":"must","vignette":"exam","sentence":"Writer 1: Mr. Crabtree sees that two of his students, Joe and Suzie, have had identical answers on every exam this semester - so they must be cheating in his class. <p> Writer 2: <b> But they aren't - the similarity of their answers is actually a total fluke. <\/b> ","writer":"Writer 2","attncheck":"What is the name of the teacher in the story?","choice1":"Mr. Davis","choice2":"Mr. Crabtree","choice_correct":"choice2","kind":"subordination"},{"condition":"bare","vignette":"exam","sentence":"Writer 1: Mr. Crabtree sees that two of his students, Joe and Suzie, have had identical answers on every exam this semester - so they are cheating in his class. <p> Writer 2: <b> But they aren't - the similarity of their answers is actually a total fluke. <\/b> ","writer":"Writer 2","attncheck":"What is the name of the teacher in the story?","choice1":"Mr. Davis","choice2":"Mr. Crabtree","choice_correct":"choice2","kind":"subordination"},{"condition":"must","vignette":"bus1","sentence":"Writer 1: Joe knows that Suzie rides the 5:30pm train home from work. <p> Writer 2: And it's 5:30, so Suzie must be on the train. <p> Writer 3: <b> But she isn't - Suzie is actually sick and she stayed home from work today. <\/b>\n","writer":"Writer 3","attncheck":"What is the name of a character mentioned in the story?","choice1":"Suzie","choice2":"Patty","choice_correct":"choice1","kind":"subordination"},{"condition":"bare","vignette":"bus1","sentence":"Writer 1: Joe knows that Suzie rides the 5:30pm train home from work. <p> Writer 2: And it's 5:30, so Suzie is on the train. <p> Writer 3: <b> But she isn't - Suzie is actually sick and she stayed home from work today. <\/b>\n","writer":"Writer 3","attncheck":"What is the name of a character mentioned in the story?","choice1":"Suzie","choice2":"Patty","choice_correct":"choice1","kind":"subordination"},{"condition":"must","vignette":"cafe","sentence":"Writer 1: Paul works at a cafe and was told to brew the coffee for 10 minutes before serving it. <p> Writer 2: He started brewing the coffee 10 minutes ago, so it must be ready to serve. <p> Writer 3: <b> But it isn't - the coffee maker is actually malfunctioning today. <\/b>","writer":"Writer 3","attncheck":"Where does Paul work?","choice1":"A library","choice2":"A cafe","choice_correct":"choice2","kind":"subordination"},{"condition":"bare","vignette":"cafe","sentence":"Writer 1: Paul works at a cafe and was told to brew the coffee for 10 minutes before serving it. <p> Writer 2: He started brewing the coffee 10 minutes ago, so it's ready to serve. <p> Writer 3: <b> But it isn't - the coffee maker is actually malfunctioning today. <\/b>","writer":"Writer 3","attncheck":"Where does Paul work?","choice1":"A library","choice2":"A cafe","choice_correct":"choice2","kind":"subordination"},{"condition":"must","vignette":"roof","sentence":"Writer 1: When it rains, Annie's roof tends to leak and water accumulates in her kitchen. <p> Writer 2: Annie sees that there is a large puddle in her kitchen, so it must be raining outside. <p> Writer 3: <b> But it isn't - there is actually an issue with the plumbing in Annie's house. <\/b>","writer":"Writer 3","attncheck":"What is the name of the character in the story?","choice1":"Annie","choice2":"Julie","choice_correct":"choice1","kind":"subordination"},{"condition":"bare","vignette":"roof","sentence":"Writer 1: When it rains, Annie's roof tends to leak and water accumulates in her kitchen. <p> Writer 2: Annie sees that there is a large puddle in her kitchen, so it's raining outside. <p> Writer 3: <b> But it isn't - there is actually an issue with the plumbing in Annie's house. <\/b>","writer":"Writer 3","attncheck":"What is the name of the character in the story?","choice1":"Annie","choice2":"Julie","choice_correct":"choice1","kind":"subordination"},{"condition":"must","vignette":"fire","sentence":"Writer 1: The fire department has warned residents of Kerrytown that there is an extreme risk of wildfire this week. <p> Writer 2: Joan, who lives in Kerrytown, smells smoke outside - so there must be a wildfire. <p> Writer 3: <b> But there isn't - the smoke is actually coming from her neighbor's barbecue. <\/b>","writer":"Writer 3","attncheck":"What is the name of the town in the story?","choice1":"West Ashland","choice2":"Kerrytown","choice_correct":"choice2","kind":"subordination"},{"condition":"bare","vignette":"fire","sentence":"Writer 1: The fire department has warned residents of Kerrytown that there is an extreme risk of wildfire this week. <p> Writer 2: Joan, who lives in Kerrytown, smells smoke outside - so there's a wildfire. <p> Writer 3: <b> But there isn't - the smoke is actually coming from her neighbor's barbecue. <\/b>","writer":"Writer 3","attncheck":"What is the name of the town in the story?","choice1":"West Ashland","choice2":"Kerrytown","choice_correct":"choice2","kind":"subordination"},{"condition":"must","vignette":"rain","sentence":"Writer 1: My roommate John's soaking wet shoes and jacket were hanging up to dry in our hallway, so it must have been raining outside. <p> Writer 2: <b> But it wasn't - John had been sprayed by a sprinkler on his way home. <\/b>","writer":"Writer 2","attncheck":"What is the name of the roommate in the story?","choice1":"John","choice2":"Larry","choice_correct":"choice1","kind":"backshifting"},{"condition":"bare","vignette":"rain","sentence":"Writer 1: My roommate John's soaking wet shoes and jacket were hanging up to dry in our hallway, so it was raining outside. <p> Writer 2: <b> But it wasn't - John had been sprayed by a sprinkler on his way home. <\/b>","writer":"Writer 2","attncheck":"What is the name of the roommate in the story?","choice1":"John","choice2":"Larry","choice_correct":"choice1","kind":"backshifting"},{"condition":"must","vignette":"bus2","sentence":"Writer 1: I got to my bus stop five minutes after my bus was scheduled to come, so the bus must have already left. <p> Writer 2: <b> But it hadn't - it arrived shortly after I did. <\/b>\n","writer":"Writer 2","attncheck":"Where does the narrator go in the story?","choice1":"The airport","choice2":"The bus stop","choice_correct":"choice2","kind":"backshifting"},{"condition":"bare","vignette":"bus2","sentence":"Writer 1: I got to my bus stop five minutes after my bus was scheduled to come, so the bus had already left. <p> Writer 2: <b> But it hadn't - it arrived shortly after I did. <\/b>\n","writer":"Writer 2","attncheck":"Where does the narrator go in the story?","choice1":"The airport","choice2":"The bus stop","choice_correct":"choice2","kind":"backshifting"},{"condition":"must","vignette":"fido","sentence":"Writer 1: There was cereal littered all over my kitchen floor this morning, so my dog Fido must have gotten into the pantry last night. <p> Writer 2: <b> But he hadn't - my wife told me I caused the mess while sleepwalking. <\/b>","writer":"Writer 2","attncheck":"What is the name of the dog in the story?","choice1":"Fido","choice2":"Snuffles","choice_correct":"choice1","kind":"backshifting"},{"condition":"bare","vignette":"fido","sentence":"Writer 1: There was cereal littered all over my kitchen floor this morning, so my dog Fido had gotten into the pantry last night. <p> Writer 2: <b> But he hadn't - my wife told me I caused the mess while sleepwalking. <\/b>","writer":"Writer 2","attncheck":"What is the name of the dog in the story?","choice1":"Fido","choice2":"Snuffles","choice_correct":"choice1","kind":"backshifting"},{"condition":"must","vignette":"mail","sentence":"Writer 1: My neighbor Lucy's mailbox was overflowing with letters and junk mail, so she must have been out of town. <p> Writer 2: <b> But she wasn't - Lucy told me later that she had been sick and bedridden for over a week. <\/b>\n","writer":"Writer 2","attncheck":"What is the name of the neighbor in the story?","choice1":"Janice","choice2":"Lucy","choice_correct":"choice2","kind":"backshifting"},{"condition":"bare","vignette":"mail","sentence":"Writer 1: My neighbor Lucy's mailbox was overflowing with letters and junk mail, so she was out of town. <p> Writer 2: <b> But she wasn't - Lucy told me later that she had been sick and bedridden for over a week. <\/b>\n","writer":"Writer 2","attncheck":"What is the name of the neighbor in the story?","choice1":"Janice","choice2":"Lucy","choice_correct":"choice2","kind":"backshifting"},{"condition":"must","vignette":"shellfish","sentence":"Writer 1: I broke out in hives shortly after eating shellfish last night, so the shellfish must have caused the hives. <p> Writer 2: <b> But it didn't - a doctor told me today that a rare disease is to blame for my symptoms. <\/b>","writer":"Writer 2","attncheck":"What did the narrator eat in the story?","choice1":"Shellfish","choice2":"Peanuts","choice_correct":"choice1","kind":"backshifting"},{"condition":"bare","vignette":"shellfish","sentence":"Writer 1: I broke out in hives shortly after eating shellfish last night, so the shellfish caused the hives. <p> Writer 2: <b> But it didn't - a doctor told me today that a rare disease is to blame for my symptoms. <\/b>","writer":"Writer 2","attncheck":"What did the narrator eat in the story?","choice1":"Shellfish","choice2":"Peanuts","choice_correct":"choice1","kind":"backshifting"}]
var stims = [{"condition":"must","vignette":"exam","sentence":"Writer 1: Mr. Peterson sees that two of his students, Joe and Suzie, have had identical answers on every exam this semester, so they must be cheating in his class. <p> Writer 2: <b> Joe and Suzie are doing honest work in Mr. Peterson's class - they have never even discussed the exams together. <\/b> ","writer":"Writer 2","attncheck":"What is the name of the teacher in the story?","choice1":"Mr. Davis","choice2":"Mr. Peterson","choice_correct":"choice2","kind":"subordination"},{"condition":"bare","vignette":"exam","sentence":"Writer 1: Mr. Peterson sees that two of his students, Joe and Suzie, have had identical answers on every exam this semester, so they are cheating in his class. <p> Writer 2: <b> Joe and Suzie are doing honest work in Mr. Peterson's class - they have never even discussed the exams together. <\/b> ","writer":"Writer 2","attncheck":"What is the name of the teacher in the story?","choice1":"Mr. Davis","choice2":"Mr. Peterson","choice_correct":"choice2","kind":"subordination"},{"condition":"must","vignette":"bus1","sentence":"Writer 1: Joe knows that Suzie rides the 5:30pm train home from work. And it's 5:30, so Suzie must be on the train. <p> Writer 2: <b> Suzie is sick today, so she stayed home from work. <\/b>\n","writer":"Writer 2","attncheck":"What is the name of a character mentioned in the story?","choice1":"Suzie","choice2":"Patty","choice_correct":"choice1","kind":"subordination"},{"condition":"bare","vignette":"bus1","sentence":"Writer 1: Joe knows that Suzie rides the 5:30pm train home from work. And it's 5:30, so Suzie is on the train. <p> Writer 2: <b> Suzie is sick today, so she stayed home from work. <\/b>\n","writer":"Writer 2","attncheck":"What is the name of a character mentioned in the story?","choice1":"Suzie","choice2":"Patty","choice_correct":"choice1","kind":"subordination"},{"condition":"must","vignette":"cafe","sentence":"Writer 1: Paul works at a cafe and was told to brew the coffee for 10 minutes before serving it. He started brewing the coffee 10 minutes ago, so it must be ready to serve. <p> Writer 2: <b> The coffee machine is malfunctioning today, so the coffee can't be served to customers.<\/b>","writer":"Writer 2","attncheck":"Where does Paul work?","choice1":"A library","choice2":"A cafe","choice_correct":"choice2","kind":"subordination"},{"condition":"bare","vignette":"cafe","sentence":"Writer 1: Paul works at a cafe and was told to brew the coffee for 10 minutes before serving it. He started brewing the coffee 10 minutes ago, so it's ready to serve. <p> Writer 2: <b> The coffee machine is malfunctioning today, so the coffee can't be served to customers.<\/b>","writer":"Writer 2","attncheck":"Where does Paul work?","choice1":"A library","choice2":"A cafe","choice_correct":"choice2","kind":"subordination"},{"condition":"must","vignette":"roof","sentence":"Writer 1: When it rains, Annie's roof tends to leak and water accumulates in her kitchen. There is a large puddle in her kitchen, so it must be raining outside. <p> Writer 2: <b> There is an issue with the plumbing in Annie's house, and this issue is causing the flood in her kitchen. <\/b>","writer":"Writer 2","attncheck":"What is the name of the character in the story?","choice1":"Annie","choice2":"Julie","choice_correct":"choice1","kind":"subordination"},{"condition":"bare","vignette":"roof","sentence":"Writer 1: When it rains, Annie's roof tends to leak and water accumulates in her kitchen. There is a large puddle in her kitchen, so it's raining outside. <p> Writer 2: <b> There is an issue with the plumbing in Annie's house, and this issue is causing the flood in her kitchen. <\/b>","writer":"Writer 2","attncheck":"What is the name of the character in the story?","choice1":"Annie","choice2":"Julie","choice_correct":"choice1","kind":"subordination"},{"condition":"must","vignette":"fire","sentence":"Writer 1: The fire department has warned residents of Joan's neighborhood that there is an extreme risk of wildfire this week. Joan smells smoke outside - so there must be a wildfire. <p> Writer 2: <b> The only smoke in Joan's neighborhood is coming from her neighbor's barbecue.<\/b>","writer":"Writer 2","attncheck":"What is the name of a character mentioned in the story?","choice1":"Patricia","choice2":"Joan","choice_correct":"choice2","kind":"subordination"},{"condition":"bare","vignette":"fire","sentence":"Writer 1: The fire department has warned residents of Joan's neighborhood that there is an extreme risk of wildfire this week. Joan smells smoke outside - so there's a wildfire. <p> Writer 2: <b> The only smoke in Joan's neighborhood is coming from her neighbor's barbecue. <\/b>","writer":"Writer 2","attncheck":"What is the name of a character mentioned in the story?","choice1":"Patricia","choice2":"Joan","choice_correct":"choice2","kind":"subordination"},{"condition":"must","vignette":"rain","sentence":"Writer 1: My roommate John's soaking wet shoes and jacket were hanging up to dry in our hallway, so it must have rained today. <p> Writer 2: <b> It was sunny all day today - John had been sprayed by a sprinkler on his way home. <\/b>","writer":"Writer 2","attncheck":"What is the name of the roommate in the story?","choice1":"John","choice2":"Larry","choice_correct":"choice1","kind":"backshifting"},{"condition":"bare","vignette":"rain","sentence":"Writer 1: My roommate John's soaking wet shoes and jacket were hanging up to dry in our hallway, so it rained today. <p> Writer 2: <b> It was sunny all day today - John had been sprayed by a sprinkler on his way home. <\/b>","writer":"Writer 2","attncheck":"What is the name of the roommate in the story?","choice1":"John","choice2":"Larry","choice_correct":"choice1","kind":"backshifting"},{"condition":"must","vignette":"bus2","sentence":"Writer 1: I got to my bus stop five minutes after my bus was scheduled to come, so the bus must have already left my bus stop. <p> Writer 2: <b> My bus was running late this morning; it arrived at my bus stop shortly after I did. <\/b>\n","writer":"Writer 2","attncheck":"Where does the narrator go in the story?","choice1":"The airport","choice2":"The bus stop","choice_correct":"choice2","kind":"backshifting"},{"condition":"bare","vignette":"bus2","sentence":"Writer 1: I got to my bus stop five minutes after my bus was scheduled to come, so the bus had already left my bus stop. <p> Writer 2: <b> My bus was running late this morning; it arrived at my bus stop shortly after I did. <\/b>\n","writer":"Writer 2","attncheck":"Where does the narrator go in the story?","choice1":"The airport","choice2":"The bus stop","choice_correct":"choice2","kind":"backshifting"},{"condition":"must","vignette":"fido","sentence":"Writer 1: There was cereal littered all over my kitchen floor this morning, so my dog Fido must have gotten into the pantry last night. <p> Writer 2: <b> I caused the mess in the kitchen while sleepwalking last night. <\/b>","writer":"Writer 2","attncheck":"What is the name of the dog in the story?","choice1":"Fido","choice2":"Snuffles","choice_correct":"choice1","kind":"backshifting"},{"condition":"bare","vignette":"fido","sentence":"Writer 1: There was cereal littered all over my kitchen floor this morning, so my dog Fido had gotten into the pantry last night. <p> Writer 2: <b> I caused the mess in the kitchen while sleepwalking last night.  <\/b>","writer":"Writer 2","attncheck":"What is the name of the dog in the story?","choice1":"Fido","choice2":"Snuffles","choice_correct":"choice1","kind":"backshifting"},{"condition":"must","vignette":"mail","sentence":"Writer 1: My neighbor Lucy's mailbox was overflowing with letters and junk mail last week, so she must have been out of town. <p> Writer 2: <b> Lucy was sick and bedridden at home last week - she couldn't even get up to retreive her mail. <\/b>\n","writer":"Writer 2","attncheck":"What is the name of the neighbor in the story?","choice1":"Janice","choice2":"Lucy","choice_correct":"choice2","kind":"backshifting"},{"condition":"bare","vignette":"mail","sentence":"Writer 1: My neighbor Lucy's mailbox was overflowing with letters and junk mail last week, so she was out of town. <p> Writer 2: <b> Lucy was sick and bedridden at home last week  - she couldn't even get up to retreive her mail. <\/b>\n","writer":"Writer 2","attncheck":"What is the name of the neighbor in the story?","choice1":"Janice","choice2":"Lucy","choice_correct":"choice2","kind":"backshifting"},{"condition":"must","vignette":"shellfish","sentence":"Writer 1: I broke out in hives shortly after eating shellfish last night, so the shellfish must have caused the hives. <p> Writer 2: <b> My doctor let me know today that I have a rare disease that is to blame for my hives. <\/b>","writer":"Writer 2","attncheck":"What did the narrator eat in the story?","choice1":"Shellfish","choice2":"Peanuts","choice_correct":"choice1","kind":"backshifting"},{"condition":"bare","vignette":"shellfish","sentence":"Writer 1: I broke out in hives shortly after eating shellfish last night, so the shellfish caused the hives. <p> Writer 2: <b> My doctor let me know today that I have a rare disease that is to blame for my hives. <\/b>","writer":"Writer 2","attncheck":"What did the narrator eat in the story?","choice1":"Shellfish","choice2":"Peanuts","choice_correct":"choice1","kind":"backshifting"}]

function make_slides(f) {
  var slides = {};
  var present_list = [_.sample(stims)]; //

  slides.consent = slide({
     name : "consent",
     start: function() {
      exp.startT = Date.now();
      $("#consent_2").hide();
      exp.consent_position = 0;
     },
    button : function() {
      if(exp.consent_position == 0) {
         exp.consent_position++;
         $("#consent_1").hide();
         $("#consent_2").show();
      } else {
        exp.go(); //use exp.go() if and only if there is no "present" data.
      }
    }
  });

  slides.bot = slide({
    name : "bot",
    start: function() {
      $('.err1').hide();
      $('.err2').hide();
      $('.disq').hide();
      exp.speaker = _.shuffle(["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas", "Charles"])[0];
      exp.listener = _.shuffle(["Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan", "Jessica", "Sarah", "Margaret"])[0];
      exp.lives = 0;
      var story = exp.speaker + ' says to ' + exp.listener + ': "It\'s a beautiful day, isn\'t it?"'
      var question = 'Who does ' + exp.speaker + ' talk to?';
      document.getElementById("s").innerHTML = story;
      document.getElementById("q").innerHTML = question;
    },
    button : function() {
      exp.text_input = document.getElementById("text_box").value;
      var lower = exp.listener.toLowerCase();
      var upper = exp.listener.toUpperCase();

      if ((exp.lives < 3) && ((exp.text_input == exp.listener)|(exp.text_input == lower) | (exp.text_input== upper))){
        exp.data_trials.push({
          "slide_number": exp.phase,
          "slide_type" : "bot_check",
          "image" : exp.listener,
          "audio" : "",
          "response" : [0,exp.text_input]
        });
        exp.go();
      }
      else {
        exp.data_trials.push({
          "slide_number": exp.phase,
          "slide_type" : "bot_check",
          "image" : exp.listener,
          "audio" : "",
          "response" : [0,exp.text_input]
        });
        if (exp.lives == 0){
          $('.err1').show();
        }if (exp.lives == 1){
          $('.err1').hide();
          $('.err2').show();
        }if (exp.lives == 2){
          $('.err2').hide();
          $('.disq').show();
          $('.button').hide();
        }
        exp.lives++;
      } 
    },
  });

 slides.i0 = slide({
     name : "i0",
     start: function() {
      exp.startT = Date.now();
     }
  });

 slides.trial = slide({
     name : "trial",
     present : present_list,
     start: function() {
      exp.startT = Date.now();
       
     },

     present_handle : function(stim) {
     	this.stim = stim;

      $(".choice1").html(stim.choice1);
      $(".choice2").html(stim.choice2);
      $(".attntext").html(stim.attncheck);
      $(".attntext").hide();
      $(".attncheck_submitbutton").hide();
      $(".attncheck-radio-buttons").hide();
     	$(".main").html(stim.sentence);

     },

     rating_submitbutton: function() {
      if ($('input[name="rating"]:checked').val() == undefined) {
      	$(".error").show();
      } else {

        $(".error").hide();
        $(".main").hide();
        $(".attn").show();
        $(".attntext").show();
        $(".rating-radio-buttons").hide();
        $(".rating_submitbutton").hide();
        $(".attncheck-radio-buttons").show();
        $(".attncheck_submitbutton").show();
      	
      }
      
  },
      attncheck_submitbutton: function() {
        if ($('input[name="attncheck"]:checked').val() == undefined) {
        $(".error").show();
      } else {

        this.log_responses();

        /* use _stream.apply(this); if and only if there is
        "present" data. (and only *after* responses are logged) */
        _stream.apply(this);
        
      }
      },
      log_responses: function() {
      exp.data_trials.push({
        "rating" : $('input[name="rating"]:checked').val(),
        "attncheck_response" : $('input[name="attncheck"]:checked').val(),
        "vignette" : this.stim.vignette,
        "sentence" : this.stim.sentence,
        "condition" : this.stim.condition,
        "writer" : this.stim.writer,
        "attncheck" : this.stim.attncheck,
        "attncheck_correct" : this.stim.choice_correct,
        "kind" : this.stim.kind,
        "order" : order,
      });
    order = order + 1;
     }

  });

  slides.instructions = slide({
    name : "instructions",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.getready = slide({
    name : "getready",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.getready_practice = slide({
    name : "getready_practice",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.subj_info =  slide({
    name : "subj_info",
    submit : function(e){
      //if (e.preventDefault) e.preventDefault(); // I don't know what this means.
      exp.subj_data = {
        language : $("#language").val(),
        enjoyment : $("#enjoyment").val(),
        asses : $('input[name="assess"]:checked').val(),
        age : $("#age").val(),
        gender : $("#gender").val(),
        education : $("#education").val(),
        comments : $("#comments").val(),
        problems: $("#problems").val(),
        fairprice: $("#fairprice").val()
      };
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.thanks = slide({
    name : "thanks",
    start : function() {
      exp.data= {
          "trials" : exp.data_trials,
          "catch_trials" : exp.catch_trials,
          "system" : exp.system,
          "subject_information" : exp.subj_data,
          "time_in_minutes" : (Date.now() - exp.startT)/60000
      };
      setTimeout(function() {turk.submit(exp.data);}, 1000);
    }
  });

  return slides;
}

/// init ///
function init() {
  exp.trials = [];
  exp.catch_trials = [];
  //exp.condition = _.sample([1-4]); //can randomize between subject conditions here
  // exp.order = _.sample(["4fillerspacing","nofillerspacing"]);
  exp.system = {
      Browser : BrowserDetect.browser,
      OS : BrowserDetect.OS,
      screenH: screen.height,
      screenUH: exp.height,
      screenW: screen.width,
      screenUW: exp.width
    };
  //blocks of the experiment:
  exp.structure=["bot","i0","instructions","trial",'subj_info',"thanks"];

  exp.data_trials = [];
  //make corresponding slides:
  exp.slides = make_slides(exp);

  exp.nQs = utils.get_exp_length(); //this does not work if there are stacks of stims (but does work for an experiment with this structure)
                    //relies on structure and slides being defined

  $('.slide').hide(); //hide everything

  //make sure turkers have accepted HIT (or you're not in mturk)
  $("#start_button").click(function() {
    if (turk.previewMode) {
      $("#mustaccept").show();
    } else {
      $("#start_button").click(function() {$("#mustaccept").show();});
      exp.go();
    }
  });

  exp.go(); //show first slide
}
