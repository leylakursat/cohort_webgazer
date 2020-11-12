# eyetracking_template
a template for eyetracking exps

##  Stuff you need to modify

*  You shouldn't need to modify the CSS, or anything under js/general_utils or js/webgazer_tools (though obvs you're welcome to). 

* The main experiment logic happens at js/eyetrack_HRT.js, using the design/etc information found in the js/exp_files directory. 

* The details for each trial are stored in js/exp_lists.js, which is an array of dicts, one for each trial, that specify the experimental list, criticality (critical/filler), condition (here, V/T), the audio fname, and what type of img should occur on the left and the right side. In my set up, the specific imgs used for each trial are randomized and initialized at experiment start, (see init_trial_details.js). If you want specific imgs for each trial, you could just add an img_left and img_right argument to each trial in the exp_lists.js file, and not call *assign_imgs_to_trial* function. (And in that case, you wouldn't need to populate img_fnames.js either.)  

### Practice trials

the current design has two practice trials to begin with - if you don't want these, you could similarly just not call the function (and remove the call to .show( ); the #img_instructions or #scene_instructions for the first two trials. )

### Dummy mode

you can use exp.DUMMY_MODE = true to test without eyetracking (useful for debugging)

## !Important!
* Some participants have reported problems using Safari, so I would recommend you encourage your participants use something else. 
One of the problems is that sometimes the audios won't play, which I think could be fixed by making sure that they turn On Autoplay in Safari. But in general, it just seems waaay slower in Safari than Chrome when I test it.
* Some participants have reported that the video stream and feedback box are still present after calibration. This *shouldn't* occur, especially as it's a known issue and there's a fix in the code to prevent it. But it does, so who knows. FWIW, it seems to primarily (maybe exclusively) affect participants using Chrome on Windows. ~~I have raised this in the webgazer github and if I get any feedback I will let you know~~ **I've tried to fix this and lol it's still an issue. If you find a fix, please let me know!! I added a question about cam visibility to the partcipant questions at the end of the study so that at least they can be excluded.**
* Finally, **there will be lags!** i.e., the experiment may run slowly. To an extent, this is unavoidable, because the facial detection algorithm used by webgazer is very resource-intensive. In my experiments I limit participants to those using Windows 10 and above or Mac OS, but still a number of participants have to return the HIT/study. 
* I've also found that performance somewhat improves when hosting on github as opposed to stanford webspace, esp. if your participants are going to be participating from around the US/the world, and esp if they're participating at the same time. (Something to do with stanford's servers not being great unless you're in the area /west coast... you would have to ask Sebastian the details). 
