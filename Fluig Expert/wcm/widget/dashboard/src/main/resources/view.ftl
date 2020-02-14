<div id="HelloWorld_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide"
     data-params="HelloWorld.instance({message: 'Hello world'})">

    <!-- efetua a tradução do texto do objeto i18n -->	
    <h1 style="color:${cor}">${i18n.getTranslation('hello.example.hello')}</h1>

    <div>
        <button type="button" class="btn btn-default" data-show-message>${i18n.getTranslation('hello.button.showMessage')}</button>
    </div>

    <div id='helloMessage_${instanceId}'>
    </div>
    
    <div class="row">
    	<div class="col-md-6">
    		<div id="MY_SELECTOR"></div>
    	</div>
    	
    </div>

</div>
