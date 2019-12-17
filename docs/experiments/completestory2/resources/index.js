var order = 1;

var stims = [{"condition":"must","vignette":"shellfish","sentence":"Writer 1: I broke out in hives shortly after eating shellfish last week. <p>\nWriter 2: Because the shellfish must have caused my hives, I decided I’d never eat shellfish again. <p>\nWriter 3. <b> My doctor let me know today that I have a rare disease that is to blame for my hives. <\/b>","writer":"Writer 3","attncheck":"What did the narrator eat in the story?","choice1":"Shellfish","choice2":"Peanuts","choice_correct":"choice1","kind":"backshifting"},{"condition":"bare","vignette":"shellfish","sentence":"Writer 1: I broke out in hives shortly after eating shellfish last week. <p>\nWriter 2: Because the shellfish caused my hives, I decided I’d never eat shellfish again. <p>\nWriter 3. <b> My doctor let me know today that I have a rare disease that is to blame for my hives. <\/b>","writer":"Writer 3","attncheck":"What did the narrator eat in the story?","choice1":"Shellfish","choice2":"Peanuts","choice_correct":"choice1","kind":"backshifting"},{"condition":"clear","vignette":"shellfish","sentence":"Writer 1: I broke out in hives shortly after eating shellfish last week. <p>\nWriter 2: Because it was clear that the shellfish caused my hives, I decided I’d never eat shellfish again. <p>\nWriter 3. <b> My doctor let me know today that I have a rare disease that is to blame for my hives. <\/b>","writer":"Writer 3","attncheck":"What did the narrator eat in the story?","choice1":"Shellfish","choice2":"Peanuts","choice_correct":"choice1","kind":"backshifting"},{"condition":"must","vignette":"rain","sentence":"Writer 1: My roommate John's soaking wet shoes and jacket were hanging up to dry in our hallway. <p>\nWriter 2: Because it must have been raining outside, I decided not to go on my daily jog. <p>\nWriter 3: <b> John was sprayed by a sprinkler on his way home. It was sunny all day today.  <\/b>","writer":"Writer 3","attncheck":"What is the name of the roommate in the story?","choice1":"John","choice2":"Larry","choice_correct":"choice1","kind":"backshifting"},{"condition":"bare","vignette":"rain","sentence":"Writer 1: My roommate John's soaking wet shoes and jacket were hanging up to dry in our hallway. <p>\nWriter 2: Because it was raining outside, I decided not to go on my daily jog. <p>\nWriter 3: <b> John was sprayed by a sprinkler on his way home. It was sunny all day today.  <\/b>","writer":"Writer 3","attncheck":"What is the name of the roommate in the story?","choice1":"John","choice2":"Larry","choice_correct":"choice1","kind":"backshifting"},{"condition":"clear","vignette":"rain","sentence":"Writer 1: My roommate John's soaking wet shoes and jacket were hanging up to dry in our hallway. <p>\nWriter 2: Because it was clear that it was raining outside, I decided not to go on my daily jog. <p>\nWriter 3: <b> John was sprayed by a sprinkler on his way home. It was sunny all day today.  <\/b>","writer":"Writer 3","attncheck":"What is the name of the roommate in the story?","choice1":"John","choice2":"Larry","choice_correct":"choice1","kind":"backshifting"},{"condition":"must","vignette":"dog","sentence":"Writer 1: There was cereal littered all over my kitchen floor this morning. <p>\nWriter 2: Because my dog Fido must have gotten into the pantry last night, I sent him to the garage as punishment. <p>\nWriter 3: <b> My wife told me later that I caused the mess in the kitchen while sleepwalking last night. <\/b>","writer":"Writer 3","attncheck":"What is the name of the dog in the story?","choice1":"Snuffles","choice2":"Fido","choice_correct":"choice2","kind":"backshifting"},{"condition":"bare","vignette":"dog","sentence":"Writer 1: There was cereal littered all over my kitchen floor this morning. <p>\nWriter 2: Because my dog Fido had gotten into the pantry last night, I sent him to the garage as punishment. <p>\nWriter 3: <b> My wife told me later that I caused the mess in the kitchen while sleepwalking last night. <\/b>","writer":"Writer 3","attncheck":"What is the name of the dog in the story?","choice1":"Snuffles","choice2":"Fido","choice_correct":"choice2","kind":"backshifting"},{"condition":"clear","vignette":"dog","sentence":"Writer 1: There was cereal littered all over my kitchen floor this morning. <p>\nWriter 2: Because it was clear that my dog Fido had gotten into the pantry last night, I sent him to the garage as punishment. <p>\nWriter 3: <b> My wife told me later that I caused the mess in the kitchen while sleepwalking last night. <\/b>","writer":"Writer 3","attncheck":"What is the name of the dog in the story?","choice1":"Snuffles","choice2":"Fido","choice_correct":"choice2","kind":"backshifting"},{"condition":"must","vignette":"bus","sentence":"Writer 1: I got to my bus stop five minutes after my bus was scheduled to come. <p>\nWriter 2: Because I must have missed my bus, I called an Uber. <p>\nWriter 3: <b> My bus was running late this morning; it arrived at my bus stop shortly after my Uber came. <\/b>\n","writer":"Writer 3","attncheck":"Where does the narrator go in the story?","choice1":"The airport","choice2":"The bus stop","choice_correct":"choice2","kind":"backshifting"},{"condition":"bare","vignette":"bus","sentence":"Writer 1: I got to my bus stop five minutes after my bus was scheduled to come. <p>\nWriter 2: Because I missed my bus, I called an Uber. <p>\nWriter 3: <b> My bus was running late this morning; it arrived at my bus stop shortly after my Uber came. <\/b>\n","writer":"Writer 3","attncheck":"Where does the narrator go in the story?","choice1":"The airport","choice2":"The bus stop","choice_correct":"choice2","kind":"backshifting"},{"condition":"clear","vignette":"bus","sentence":"Writer 1: I got to my bus stop five minutes after my bus was scheduled to come. <p>\nWriter 2: Because it was clear that I missed my bus, I called an Uber. <p>\nWriter 3: <b> My bus was running late this morning; it arrived at my bus stop shortly after my Uber came. <\/b>\n","writer":"Writer 3","attncheck":"Where does the narrator go in the story?","choice1":"The airport","choice2":"The bus stop","choice_correct":"choice2","kind":"backshifting"},{"condition":"must","vignette":"train","sentence":"Writer 1: Joe knows that his coworker Suzie rides the 5:30pm train home from work. It’s 5:30pm, and Joe has boarded the train. <p>\nWriter 2: Because Suzie must be on the train, Joe tries to find her so they can ride together. <p>\nWriter 3: <b> Suzie is sick, so she stayed home from work and didn’t ride the train today. <\/b>\n","writer":"Writer 3","attncheck":"What is the name of a character mentioned in the story?","choice1":"Suzie","choice2":"Patty","choice_correct":"choice1","kind":"3rdpartyshift"},{"condition":"bare","vignette":"train","sentence":"Writer 1: Joe knows that his coworker Suzie rides the 5:30pm train home from work. It’s 5:30pm, and Joe has boarded the train. <p>\nWriter 2: Because Suzie is on the train, Joe tries to find her so they can ride together. <p>\nWriter 3: <b> Suzie is sick, so she stayed home from work and didn’t ride the train today. <\/b>","writer":"Writer 3","attncheck":"What is the name of a character mentioned in the story?","choice1":"Suzie","choice2":"Patty","choice_correct":"choice1","kind":"3rdpartyshift"},{"condition":"clear","vignette":"train","sentence":"Writer 1: Joe knows that his coworker Suzie rides the 5:30pm train home from work. It’s 5:30pm, and Joe has boarded the train. <p>\nWriter 2: Because it's clear that Suzie is on the train, Joe tries to find her so they can ride together. <p>\nWriter 3: <b> Suzie is sick, so she stayed home from work and didn’t ride the train today. <\/b>","writer":"Writer 3","attncheck":"What is the name of a character mentioned in the story?","choice1":"Suzie","choice2":"Patty","choice_correct":"choice1","kind":"3rdpartyshift"},{"condition":"must","vignette":"exam","sentence":"Writer 1: Mr. Peterson sees that two of his students, Joe and Suzie, have had identical answers on every exam this semester. <p>\nWriter 2: Because Joe and Suzie must be cheating in his class, Mr. Peterson reports them to the school's administrators. <p>\nWriter 3: <b> Joe and Suzie are doing honest work in Mr. Peterson's class - they have never even discussed the exams together. <\/b>\n","writer":"Writer 3","attncheck":"What is the name of the teacher in the story?","choice1":"Mr. Davis","choice2":"Mr. Peterson","choice_correct":"choice2","kind":"3rdpartyshift"},{"condition":"bare","vignette":"exam","sentence":"Writer 1: Mr. Peterson sees that two of his students, Joe and Suzie, have had identical answers on every exam this semester. <p>\nWriter 2: Because Joe and Suzie are cheating in his class, Mr. Peterson reports them to the school's administrators. <p>\nWriter 3: <b> Joe and Suzie are doing honest work in Mr. Peterson's class - they have never even discussed the exams together. <\/b>","writer":"Writer 3","attncheck":"What is the name of the teacher in the story?","choice1":"Mr. Davis","choice2":"Mr. Peterson","choice_correct":"choice2","kind":"3rdpartyshift"},{"condition":"clear","vignette":"exam","sentence":"Writer 1: Mr. Peterson sees that two of his students, Joe and Suzie, have had identical answers on every exam this semester. <p>\nWriter 2: Because it's clear that Joe and Suzie are cheating in his class, Mr. Peterson reports them to the school's administrators. <p>\nWriter 3: <b> Joe and Suzie are doing honest work in Mr. Peterson's class - they have never even discussed the exams together. <\/b>","writer":"Writer 3","attncheck":"What is the name of the teacher in the story?","choice1":"Mr. Davis","choice2":"Mr. Peterson","choice_correct":"choice2","kind":"3rdpartyshift"},{"condition":"must","vignette":"wildfire","sentence":"Writer 1: The fire department has warned residents of Joan's neighborhood that there is an extreme risk of wildfire this week. Now, Joan smells smoke outside. <p>\nWriter 2: Because a wildfire must be approaching Joan’s neighborhood, she rushes to gather her belongings and gets ready to flee. <p>\nWriter 3: <b> The only smoke in Joan's neighborhood is coming from her neighbor's barbecue. <\/b>\n","writer":"Writer 3","attncheck":"What is the name of a character mentioned in the story?","choice1":"Patricia","choice2":"Joan","choice_correct":"choice2","kind":"3rdpartyshift"},{"condition":"bare","vignette":"wildfire","sentence":"Writer 1: The fire department has warned residents of Joan's neighborhood that there is an extreme risk of wildfire this week. Now, Joan smells smoke outside. <p>\nWriter 2: Because a wildfire is approaching Joan’s neighborhood, she rushes to gather her belongings and gets ready to flee. <p>\nWriter 3: <b> The only smoke in Joan's neighborhood is coming from her neighbor's barbecue. <\/b>","writer":"Writer 3","attncheck":"What is the name of a character mentioned in the story?","choice1":"Patricia","choice2":"Joan","choice_correct":"choice2","kind":"3rdpartyshift"},{"condition":"clear","vignette":"wildfire","sentence":"Writer 1: The fire department has warned residents of Joan's neighborhood that there is an extreme risk of wildfire this week. Now, Joan smells smoke outside. <p>\nWriter 2: Because it's clear that a wildfire is approaching Joan’s neighborhood, she rushes to gather her belongings and gets ready to flee. <p>\nWriter 3: <b> The only smoke in Joan's neighborhood is coming from her neighbor's barbecue. <\/b>","writer":"Writer 3","attncheck":"What is the name of a character mentioned in the story?","choice1":"Patricia","choice2":"Joan","choice_correct":"choice2","kind":"3rdpartyshift"},{"condition":"must","vignette":"roof","sentence":"Writer 1: Annie lives in an old house with a faulty plumbing system. Today, she wakes up to find a large puddle in her kitchen. <p>\nWriter 2: Because a plumbing issue must be to blame for the puddle, she calls her local plumber. <p>\nWriter 3: <b> It’s raining today, and a leak in the roof caused the puddle in Annie’s kitchen. <\/b>\n\n","writer":"Writer 3","attncheck":"What is the name of the character in the story?","choice1":"Annie","choice2":"Julie","choice_correct":"choice1","kind":"3rdpartyshift"},{"condition":"bare","vignette":"roof","sentence":"Writer 1: Annie lives in an old house with a faulty plumbing system. Today, she wakes up to find a large puddle in her kitchen. <p>\nWriter 2: Because a plumbing issue is to blame for the puddle, she calls her local plumber. <p>\nWriter 3: <b> It’s raining today, and a leak in the roof caused the puddle in Annie’s kitchen. <\/b>","writer":"Writer 3","attncheck":"What is the name of the character in the story?","choice1":"Annie","choice2":"Julie","choice_correct":"choice1","kind":"3rdpartyshift"},{"condition":"clear","vignette":"roof","sentence":"Writer 1: Annie lives in an old house with a faulty plumbing system. Today, she wakes up to find a large puddle in her kitchen. <p>\nWriter 2: Because it's clear that a plumbing issue is to blame for the puddle, she calls her local plumber. <p>\nWriter 3: <b> It’s raining today, and a leak in the roof caused the puddle in Annie’s kitchen. <\/b>\n","writer":"Writer 3","attncheck":"What is the name of the character in the story?","choice1":"Annie","choice2":"Julie","choice_correct":"choice1","kind":"3rdpartyshift"},{"condition":"bad","vignette":"beach","sentence":" Writer 1: John is trying to decide where to go on vacation. \n <p>\n Writer 2: He loves the beach, so he's considering going to Florida. \n <p>\nWriter 3: <b> Because he hates the beach, he'll most likely go to Paris. <\/b>","writer":"Writer 3","attncheck":"What is the name of the person in the story?","choice1":"John","choice2":"Dave","choice_correct":"choice1","kind":"control"},{"condition":"bad","vignette":"marathon","sentence":" Writer 1: For months, Patrick has been preparing to run a marathon happening next week. \n <p>\n Writer 2: This will be his first marathon, and he's afraid he won't even finish.\n <p>\nWriter 3:  <b> He's run several marathons already, so he's confident he will finish. <\/b>","writer":"Writer 3","attncheck":"What is the name of the person in the story?","choice1":"Bill","choice2":"Patrick","choice_correct":"choice2","kind":"control"},{"condition":"good","vignette":"beach","sentence":" Writer 1: John is trying to decide where to go on vacation. \n <p>\n Writer 2: He loves the beach, so he's considering going to Florida. \n <p>\n Writer 3:  <b> He's also considering San Diego for the same reason. <\/b>","writer":"Writer 3","attncheck":"What is the name of the person in the story?","choice1":"John","choice2":"Dave","choice_correct":"choice1","kind":"control"},{"condition":"good","vignette":"marathon","sentence":" Writer 1: For months, Patrick has been preparing to run a marathon happening next week. \n <p>\n Writer 2: This will be his first marathon, so he's quite nervous.\n <p>\nWriter 3: <b> To help calm his nerves, he's been doing yoga before he runs every day. <\/b>","writer":"Writer 3","attncheck":"What is the name of the person in the story?","choice1":"Bill","choice2":"Patrick","choice_correct":"choice2","kind":"control"}]

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
