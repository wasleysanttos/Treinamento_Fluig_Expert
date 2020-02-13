var HelloWorld = SuperWidget.extend({
    message: null,

    init: function () {
    	var _this = this;
    	
    	_this.iniciarColorPick();
    },

    bindings: {
        local: {
            'show-message': ['click_showMessage']
        }
    },

    showMessage: function () {
        $div = $('#helloMessage_' + this.instanceId);
        $message = $('<div>').addClass('message').append(this.message);
        $div.append($message);
    },
    
    salvarPreferencias: function (){
    	var preferences = {
		    cor: "#000"
		};
		  
		WCMSpaceAPI.PageService.UPDATEPREFERENCES({
		    async: true,
		    success: function (data) {
		            // código
		    },
		    fail: function (xhr, message, errorData) {
		        // código
		    }
		}, this.instanceId, preferences);
    },
    
    iniciarColorPick: function(){
    	var settings = {
		    changeDelay: 200,
		    control: 'wheel',
		    defaultValue: '#58595b',
		    inline: false,
		    letterCase: 'lowercase',
		    opacity: true,
		    position: 'bottom left',
		    customColorNames: {
		        'mycustomcolor': '#123456'
		    }
		} 
		var myColorPicker = FLUIGC.colorpicker('#colorpicker-example-generic', settings);
    }
});