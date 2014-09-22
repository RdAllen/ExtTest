Ext.define('KitchenSink.controller.Main', {
    extend: 'Ext.app.Controller',
    
    stores: [
        'Examples',
        'Companies',
        'Restaurants',
        'States',
        'TreeStore'
    ],

    views: [
        'Viewport',
        'Header'
        //'examples.grids.BasicGrid'
    ],

    refs: [
        {
            ref: 'examplePanel',
            selector: '#examplePanel'
        },
        {
            ref: 'exampleList',
            selector: 'exampleList'
        }
    ],

    init: function() {
    	console.log("main log");
        this.control({
            'viewport exampleList': {
               'select': function(me, record, item, index, e){
                    if(!record.isLeaf()){
                        return ;
                    }
                    var examplePanel = this.getExamplePanel();
                    
                    var parentNode = record.parentNode,
                     path = record.get('text');
                    
                    var result = path .toLowerCase().replace('', ' ')
                    console.log('result '+result);
                   
                    var tab =examplePanel.getComponent("basicgrid");//
                    
                    if(!tab){
                    	//examplePanel.addContent;
                    	this.addContent(examplePanel);
                    	
                    	
                    }else{
                       examplePanel.setActiveTab(tab);  
                    }
                   // examplePanel.setActiveTab(tab);
                    
                    console.log('path--------'+path);
                    
                    //this.setActiveExample
                	
                },
                afterrender:function(){
                    var me = this;
                    console.log("afterrender-----------");
                }
			               
                /* {
                    if (!record.isLeaf()) {
                        return;
                    }
                    //alert("select start---------------->");
                    console.log("******select******************************************");
                    console.log('me'+me+'record'+record);
                    console.log(record.get('text'));

                    this.setActiveExample(this.classNameFromRecord(record), record.get('text'));
                }*/
                /*afterrender: function(){
                    var me = this,
                        className, exampleList, name, record;
                        console.log("afterrender start---------------->");
                    setTimeout(function(){
                        className = location.hash.substring(1);
                        exampleList = me.getExampleList();

                        if (className) {
                            name = className.replace('-', ' ');
                            record = exampleList.view.store.find('text', name);     
                        } else {
							record = exampleList.view.store.find('text', 'grouped header grid');
						}

                        exampleList.view.select(record);
                    }, 0);
                }*/
            }
        });
    },
    addContent: function (examplePanel){
        examplePanel.add({
        	        id:'basicgrid',
				    xtype : 'BasicGrid',
				    title: 'basic gird',
				    closable: true
				    //xtype: 'basicgrid'
		}).show();
		
		
    }
   
});
