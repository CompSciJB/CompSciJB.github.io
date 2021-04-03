var webJar = {
    signal: {
        // Page Signals.
        toMeContent: 'GO_TO_ME_CONTENT',
        toSkills: 'GO_TO_SKILLS',
        toProjects: 'GO_TO_PROJECTS',
        toResumes: 'GO_TO_RESUMES',
        toCoverLetter: 'GO_TO_COVERS',
		toProf: 'GO_TO_PROF',
        
    },
    // Saved Names of Pages 'views'.
    views: {
        meContent: 'ME_CONTENT',
        skills: 'SKILLS',
        projects: 'PROJECTS',
        resumes: 'RESUMES',
        covers: 'COVERS',
        professionalization: 'PROF',
    }
};

var makeSignaller = function() {
    var _subscribers = [];
    return {
        add: function(handlerFunction) { _subscribers.push(handlerFunction); },
        notify: function(args) {
            for (var i = 0; i < _subscribers.length; i++) {
                _subscribers[i](args);
            }
        }
    };
}


var makeModel = function() {
	var _currentView = webJar.views.meContentPage; // shows what view 'page' is currently being displayed.
    var _observers = makeSignaller();
    return {
        // Get functions
        getCurrPage: function() { return _currentView; },

        // SetFunctions
        // setCurrPage sets the current view
        setCurrPage: function(signal) {
            if (signal === webJar.signal.toMeContent) {
                _currentView = webJar.views.meContent;
            } else if (signal === webJar.signal.toSkills) {
                _currentView = webJar.views.skills;
            } else if (signal === webJar.signal.toProjects) {
                _currentView = webJar.views.projects;
            } else if (signal === webJar.signal.toResumes) {
                _currentView = webJar.views.resumes;
            } else if (signal === webJar.signal.toCovers) {
                _currentView = webJar.views.covers;
          	} else if (signal === webJar.signal.toProf) {
                _currentView = webJar.views.professionalization;
          	}
          	_observers.notify();
        },
        register: function(fxn) { _observers.add(fxn); }
	};
}

var makeController = function(model) {
    return {
        dispatch: function(event) {
            switch (event.type) {
                // cases for which view 'page' to display.
                case webJar.signal.toMeContent:
                    model.setCurrPage(event.type);
                    break;
                case webJar.signal.toSkills:
                    model.setCurrPage(event.type);
                    break;
                case webJar.signal.toProjects:
                    model.setCurrPage(event.type);
                    break;
                case webJar.signal.toResumes:
                    model.setCurrPage(event.type);
                    break;
                case webJar.signal.toCovers:
                    model.setCurrPage(event.type);
                    break;
                case webJar.signal.toProf:
                    model.setCurrPage(event.type);
                    break;
				default:
                    console.log('Unknown Event Type: ', event);
       		}
      	}
    };
}


var makePageButtons = function(model, btnId) {
    var _btn = document.getElementById(btnId);
    var _observers = makeSignaller();

    _btn.addEventListener('click', function() {
      	if (btnId === 'toMeContent') {
            _observers.notify({
                type: webJar.signal.toMeContent
            });
        } else if (btnId === 'toSkills') {
            _observers.notify({
                type: webJar.signal.toSkills
            });
        } else if (btnId === 'toProjects') {
            _observers.notify({
                type: webJar.signal.toProjects
            });
        } else if (btnId === 'toResumes') {
            _observers.notify({
                type: webJar.signal.toResumes
            });
        } else if (btnId === 'toCovers') {
            _observers.notify({
                type: webJar.signal.toCovers
            });
        } else if (btnId === 'toProf'){
        	_observers.notify({
                type: webJar.signal.toProf
            });
        }
    });

    return {
        register: function(fxn) { _observers.add(fxn); }
    };
}

var makeSkillsPage = function(model, viewId) {
    var _observers = makeSignaller();

   showSkillsPage = function() {
        document.getElementById('meContent').style.display = 'none';
        document.getElementById('skills').style.display = 'block';
        document.getElementById('projects').style.display = 'none';
        document.getElementById('resumes').style.display = 'none';
        document.getElementById('covers').style.display = 'none';
        document.getElementById('professionalization').style.display = 'none';

        document.getElementById('skillsBtn').color = 'color: rgba(246, 137, 48,.4)';
    }

    return {
		render: function() {
            if (model.getCurrPage() === webJar.views.skills) {
                showSkillsPage();
            }	
        },
        register: function(fxn) { _observers.add(fxn); }
    };
}


var makeProjectsPage = function(model, viewId) {
    var _observers = makeSignaller();

    showProjectsPage = function() {
        document.getElementById('meContent').style.display = 'none';
        document.getElementById('skills').style.display = 'none';
        document.getElementById('projects').style.display = 'block';
        document.getElementById('resumes').style.display = 'none';
        document.getElementById('covers').style.display = 'none';
        document.getElementById('professionalization').style.display = 'none';
    }

    return {
        render: function() {
            if (model.getCurrPage() === webJar.views.projects) {
                showProjectsPage();
            }
        },
        register: function(fxn) { _observers.add(fxn); }
    };
}


var makeResumesPage = function(model, viewId) {
    var _observers = makeSignaller();

    showResumePage = function() {
        document.getElementById('meContent').style.display = 'none';
        document.getElementById('skills').style.display = 'none';
        document.getElementById('projects').style.display = 'none';
        document.getElementById('resumes').style.display = 'block';
        document.getElementById('covers').style.display = 'none';
        document.getElementById('professionalization').style.display = 'none';
    }

    return {
        render: function() {
            if (model.getCurrPage() === webJar.views.resumes) {
                showResumePage();
            }
        },
        register: function(fxn) { _observers.add(fxn); }
    };
}

var makeCoverPage = function(model, viewId) {
    var _observers = makeSignaller();

    showCoverPage = function() {
        document.getElementById('meContent').style.display = 'none';
        document.getElementById('skills').style.display = 'none';
        document.getElementById('projects').style.display = 'none';
        document.getElementById('resumes').style.display = 'none';
        document.getElementById('covers').style.display = 'block';
        document.getElementById('professionalization').style.display = 'none';
    }

    return {
        render: function() {
            if (model.getCurrPage() === webJar.views.covers) {
                showCoverPage();
            }
        },
        register: function(fxn) { _observers.add(fxn); }
    };
}

var makeProfPage = function(model, viewId) {
    var _observers = makeSignaller();

    showProfPage = function() {
        document.getElementById('meContent').style.display = 'none';
        document.getElementById('skills').style.display = 'none';
        document.getElementById('projects').style.display = 'none';
        document.getElementById('resumes').style.display = 'none';
        document.getElementById('covers').style.display = 'none';
        document.getElementById('professionalization').style.display = 'block';
    }

    return {
        render: function() {
            if (model.getCurrPage() === webJar.views.professionalization) {
                showProfPage();
            }
        },
        register: function(fxn) { _observers.add(fxn); }
    };
}

var makeMePage = function(model, viewId) {
    var _observers = makeSignaller();

    showMePage = function() {
        document.getElementById('meContent').style.display = 'block';
        document.getElementById('skills').style.display = 'none';
        document.getElementById('projects').style.display = 'none';
        document.getElementById('resumes').style.display = 'none';
        document.getElementById('covers').style.display = 'none';
        document.getElementById('professionalization').style.display = 'none';
    }

    return {
        render: function() {
            if (model.getCurrPage() === webJar.views.meContent) {
                showMePage();
            }
        },
        register: function(fxn) { _observers.add(fxn); }
    };
}


document.addEventListener('DOMContentLoaded', function(event) {
    var model = makeModel();
    var controller = makeController(model);

    // Pages.
    var meContentPage = makeMePage(model, 'meContent');
    var skillsPage = makeSkillsPage(model, 'skills'); // 1
    var projectsPage = makeProjectsPage(model, 'projects'); // 2 
    var resumesPage = makeResumesPage(model, 'resumes'); // 3
    var coverPage = makeCoverPage(model, 'covers');
    var profPage = makeProfPage(model,'professionalization');
 	
 	// Create page buttons to navigate from order beginning to finish.
    var meContentBtn = makePageButtons(model, 'toMeContent')
    var skillsBtn = makePageButtons(model, 'toSkills');
    var projectsBtn = makePageButtons(model, 'toProjects');
    var resumesBtn = makePageButtons(model, 'toResumes');
    var coverBtn = makePageButtons(model, 'toCovers');
    var profBtn = makePageButtons(model,'toProf');

     // Register views to model.
    model.register(meContentPage.render);
	model.register(skillsPage.render);
	model.register(projectsPage.render);
	model.register(resumesPage.render);
	model.register(coverPage.render);
	model.register(profPage.render);

    // Register controller to views.
    meContentPage.register(controller.dispatch);
    skillsPage.register(controller.dispatch);
    projectsPage.register(controller.dispatch);
    resumesPage.register(controller.dispatch);
    coverPage.register(controller.dispatch);
	profPage.register(controller.dispatch);

    // Register page buttons to controller.
    meContentBtn.register(controller.dispatch);
    skillsBtn.register(controller.dispatch);
    projectsBtn.register(controller.dispatch);
    resumesBtn.register(controller.dispatch);
    coverBtn.register(controller.dispatch);
    profBtn.register(controller.dispatch);


	document.getElementById('meContent').style.display = 'flex';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('skills').style.display = 'none';   
    document.getElementById('resumes').style.display = 'none';   
    document.getElementById('covers').style.display = 'none';  
    document.getElementById('professionalization').style.display = 'none'; 
});