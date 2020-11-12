function assign_imgs_to_trials() {
	var toughs = _.shuffle(img_fnames.toughs)
	var valleys = _.shuffle(img_fnames.valleys)
	var males = _.shuffle(img_fnames.males)
	var females = _.shuffle(img_fnames.females)
	for (i = 0; i < exp.current_exp_list.length; i++) {
		var trial = exp.current_exp_list[i]
		if (trial.criticality == 'CRITICAL') {
			if (trial.img_left_type == 'T' & trial.img_right_type == 'V') {
				trial.img_left = toughs.pop()
				trial.img_right = valleys.pop()
			}
			if (trial.img_left_type == 'V' & trial.img_right_type == 'T') {
				trial.img_left = valleys.pop()
				trial.img_right = toughs.pop()
			}
		}
		else if (trial.criticality == 'FILLER') {
			if (trial.img_left_type == 'M' & trial.img_right_type == 'F') {
				trial.img_left = males.pop()
				trial.img_right = females.pop()
			}
			if (trial.img_left_type == 'F' & trial.img_right_type == 'M') {
				trial.img_left = females.pop()
				trial.img_right = males.pop()
			}
		}
	}
};

// now add two practice trials, whose index will be 0, 1
function add_practice_trials() {
	var practice_trial_types = ['CRIT', 'FILLER']
	practice_trial_types = _.shuffle(practice_trial_types)

	var practice_filler_audio = 'PRACTICE_people_are_lookING_ing_1_ing_3.wav'
	var practice_crit_audio = 'PRACTICE_people_are_laughing_M.wav'

	var practice_crit_imgs = ['PRACTICE_v_h6_b7.png', 'PRACTICE_t_h5_b3.png']
	var practice_filler_imgs = ['PRACTICE_f_h5_b2.png', 'PRACTICE_m_h1_b3.png']
	practice_crit_imgs = _.shuffle(practice_crit_imgs)
	practice_filler_imgs = _.shuffle(practice_filler_imgs)

	var crit_practice_trial = {
		audio: 'PRACTICE_people_are_lookING_ing_1_ing_3.wav',
		criticality: "PRACTICE_TRIALS",
		img_left_type: practice_crit_imgs[0].split('_')[1],
		img_right_type: practice_crit_imgs[1].split('_')[1],
		img_left: practice_crit_imgs[0],
		img_right: practice_crit_imgs[1],
		condition: 'PRACTICE'
	}

	var filler_practice_trial = {
		audio: 'PRACTICE_people_are_laughing_M.wav',
		criticality: "PRACTICE_TRIALS",
		img_left_type: practice_filler_imgs[0].split('_')[1],
		img_right_type: practice_filler_imgs[1].split('_')[1],
		img_left: practice_filler_imgs[0],
		img_right: practice_filler_imgs[1],
		condition: 'PRACTICE'
	}


	if (practice_trial_types[0] == 'CRIT') {
		var p1 = crit_practice_trial
		var p2 = filler_practice_trial
	} else {
		var p1 = filler_practice_trial
		var p2 = crit_practice_trial
	}
	exp.current_exp_list.unshift(p1)
	exp.current_exp_list.unshift(p2)
}

// add actual/alt scenes
function add_scenenames() {
	for (i = 0; i < exp.current_exp_list.length; i++) {
		for (j = 0; j < scene_names.length; j++) {
			if (exp.current_exp_list[i].audio == scene_names[j].audio) {
				exp.current_exp_list[i].actual_scene = scene_names[j].actual
				exp.current_exp_list[i].alt_scene = scene_names[j].alt
			}
		}
	}
};


// preload imgs and audio
function preloadmedia() {
	imgs = []
	audios = []
	resources = []
	for (i = 0; i < exp.current_exp_list.length; i++) {
		imgs.push('static/imgs/' + exp.current_exp_list[i].img_left);
		imgs.push('static/imgs/' + exp.current_exp_list[i].img_right);
		audios.push('static/audio/' + exp.current_exp_list[i].audio);
	}
	preload(imgs);
	preload(audios);

};
