# eyetracking_template
a template for eyetracking exps

## Experiment organization (js directory)

* exp_files dir contains information for the experimental design (i.e. a js object detailing what stimuli should appear in each trial)
* exp_run contains everything needed to run the experiment; main logic takes place in cohort_competitors.js. init_trial_details.js is used for setting up any other details at experiment init (e.g., if imgs are not assigned to specific trials in exp_files/exp_details.js, but are randomized at init, a function for doing so would go here). It also calls preloads the audio and imgs, by calling preload.js.
* general_utils contains the external libraries needed for the experiment and its display (eg Boostrap/JQuery)
* webgazer_tools is where all the eye-tracking specific stuff lives


### Dummy mode

you can use exp.DUMMY_MODE = true to test without eyetracking (useful for debugging).

## !Important!
* Some participants have reported problems using Safari, so I would recommend you encourage your participants use something else.
One of the problems is that sometimes the audios won't play, which I think could be fixed by making sure that they turn On Autoplay in Safari. But in general, it just seems waaaay slower in Safari than Chrome when I test it.

* Some participants have reported that the video stream and feedback box are still present after calibration. This *shouldn't* occur, especially as it's a known issue and there's a fix in the code to prevent it. **There is, I think, a new (webgazer) fix to this that I haven't yet implemented, but I will get around to doing so and trying that out soon.**

* Finally, **there will be lags!** i.e., the experiment may run slowly. To an extent, this is unavoidable, because the facial detection algorithm used by webgazer is very resource-intensive. In my experiments I limit participants to those using Windows 10 and above or Mac OS, but still a number of participants have to return the HIT/study.
* I've also found that performance somewhat improves when hosting on github as opposed to stanford webspace, esp. if your participants are going to be participating from around the US/the world, and esp if they're participating at the same time. (Something to do with stanford's servers not being great unless you're in the area /west coast... you would have to ask Sebastian the details).
