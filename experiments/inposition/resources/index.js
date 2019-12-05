var order = 1;

var stims = [{"condition":"must","vignette":"attractive","sentence":"<i> Annie and Betty are gossiping. Annie doesn't know anything about Betty's neighbor. Betty says, blushing, \"You've GOT to see this picture of my new neighbor!\"  <p> Without looking at the picture, Annie replies: <\/i> <b> He must be attractive! <\/b>","speaker":"Annie","attncheck":"Who are Annie and Betty talking about in the passage?","choice1":"A neighbor","choice2":"A family member","choice_correct":"choice1"},{"condition":"bare","vignette":"attractive","sentence":"<i> Annie and Betty are gossiping. Annie doesn't know anything about Betty's neighbor. Betty says, blushing, \"You've GOT to see this picture of my new neighbor!\"  <p> Without looking at the picture, Annie replies: <\/i> <b> He's attractive! <\/b>","speaker":"Annie","attncheck":"Who are Annie and Betty talking about in the passage?","choice1":"A neighbor","choice2":"A family member","choice_correct":"choice1"},{"condition":"control","vignette":"attractive","sentence":"<i> Annie and Betty are gossiping. Annie doesn't know anything about Betty's neighbor. Betty says, blushing, \"You've GOT to see this picture of my new neighbor!\"  <p> Without looking at the picture, Annie replies: <\/i> <b> Betty, you're blushing! <\/b>","speaker":"Annie","attncheck":"Who are Annie and Betty talking about in the passage?","choice1":"A neighbor","choice2":"A family member","choice_correct":"choice1"},{"condition":"must","vignette":"football","sentence":"<i> Joe and Kelly are at a football game. Joe looks down at his phone for a second and hears the crowd erupt in cheering. Kelly says to Joe: \"I can't believe you missed that play!\" <p> Still looking at his phone, Joe replies: <\/i> <b> It must have been a really impressive play!  <\/b>","speaker":"Joe","attncheck":"Where are Joe and Kelly?","choice1":"The airport","choice2":"A football game","choice_correct":"choice2"},{"condition":"bare","vignette":"football","sentence":"<i> Joe and Kelly are at a football game. Joe looks down at his phone for a second and hears the crowd erupt in cheering. Kelly says to Joe: \"I can't believe you missed that play!\" <p> Still looking at his phone, Joe replies: <\/i> <b> It was a really impressive play! <\/b>","speaker":"Joe","attncheck":"Where are Joe and Kelly?","choice1":"The airport","choice2":"A football game","choice_correct":"choice2"},{"condition":"control","vignette":"football","sentence":"<i> Joe and Kelly are at a football game. Joe looks down at his phone for a second and hears the crowd erupt in cheering. Kelly says to Joe: \"I can't believe you missed that play!\" <p> Joe replies: <\/i> <b> I was looking at my phone! <\/b>","speaker":"Joe","attncheck":"Where are Joe and Kelly?","choice1":"The airport","choice2":"A football game","choice_correct":"choice2"},{"condition":"must","vignette":"exam","sentence":"<i> Brian meets Jill shortly after she finishes her final calculus exam. Brian didn't take the exam but can see that Jill is visibly distressed. <p> Brian says: <\/i> <b> It must have been a difficult exam! <\/b>\n","speaker":"Brian","attncheck":"What did Jill just do?","choice1":"Write an exam","choice2":"Run a marathon","choice_correct":"choice1"},{"condition":"bare","vignette":"exam","sentence":"<i> Brian meets Jill shortly after she finishes her final calculus exam. Brian didn't take the exam but can see that Jill is visibly distressed. <p> Brian says: <\/i> <b> It was a difficult exam! <\/b>\n ","speaker":"Brian","attncheck":"What did Jill just do?","choice1":"Write an exam","choice2":"Run a marathon","choice_correct":"choice1"},{"condition":"control","vignette":"exam","sentence":"<i> Brian meets Jill shortly after she finishes her final calculus exam. Brian didn't take the exam but can see that Jill is visibly distressed. <p> Brian says: <\/i> <b> Jill, you look distressed! <\/b>\n","speaker":"Brian","attncheck":"What did Jill just do?","choice1":"Write an exam","choice2":"Run a marathon","choice_correct":"choice1"},{"condition":"must","vignette":"vacation","sentence":" <i> David and Lisa are coworkers, and David has just returned from a weeklong vacation (Lisa had to work last week). At work today, Lisa notices that the usual bags under David's eyes are gone, and he is smiling more than usual. <p> Lisa says: <\/i> <b> It must have been quite relaxing to be on vacation last week! <\/b>","speaker":"Lisa","attncheck":"Where was David last week?","choice1":"In the hospital","choice2":"On vacation","choice_correct":"choice2"},{"condition":"bare","vignette":"vacation","sentence":" <i> David and Lisa are coworkers, and David has just returned from a weeklong vacation (Lisa had to work last week). At work today, Lisa notices that the usual bags under David's eyes are gone, and he is smiling more than usual. <p> Lisa says: <\/i> <b> It was quite relaxing to be on vacation last week! <\/b>","speaker":"Lisa","attncheck":"Where was David last week?","choice1":"In the hospital","choice2":"On vacation","choice_correct":"choice2"},{"condition":"control","vignette":"vacation","sentence":" <i> David and Lisa are coworkers, and David has just returned from a weeklong vacation (Lisa had to work last week). At work today, Lisa notices that the usual bags under David's eyes are gone, and he is smiling more than usual. <p> Lisa says: <\/i> <b> David, you're smiling more than usual! <\/b>","speaker":"Lisa","attncheck":"Where was David last week?","choice1":"In the hospital","choice2":"On vacation","choice_correct":"choice2"},{"condition":"must","vignette":"restaurant","sentence":" <i> Jane and Phil are at a fancy new restaurant for dinner. Jane ordered pizza, while David ordered a salad. Jane takes the first bite into her pizza and says: \"Mmm!\" <p> Phil says: <\/i> <b> That pizza must be tasty! <\/b>","speaker":"Phil","attncheck":"Where are Jane and Phil?","choice1":"A restaurant","choice2":"The police station","choice_correct":"choice1"},{"condition":"bare","vignette":"restaurant","sentence":" <i> Jane and Phil are at a fancy new restaurant for dinner. Jane ordered pizza, while David ordered a salad. Jane takes the first bite into her pizza and says: \"Mmm!\" <p> Phil says: <\/i> <b> That pizza is tasty! <\/b>","speaker":"Phil","attncheck":"Where are Jane and Phil?","choice1":"A restaurant","choice2":"The police station","choice_correct":"choice1"},{"condition":"control","vignette":"restaurant","sentence":" <i> Jane and Phil are at a fancy new restaurant for dinner. Jane ordered pizza, while David ordered a salad. Jane takes the first bite into her pizza and says: \"Mmm!\" <p> Phil says: <\/i> <b> This restaurant is fancy! <\/b>","speaker":"Phil","attncheck":"Where are Jane and Phil?","choice1":"A restaurant","choice2":"The police station","choice_correct":"choice1"}]

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
     	$(".rating-radio-buttons-text").html(stim.speaker + " was...");

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
