Ext.define('KitchenSink.controller.Main', {
    extend: 'Ext.app.Controller',
    
    stores: [
        'Examples',
        'Companies',
        'Restaurants',
        'States',
        'TreeStore',
        'StartExamples'
    ],

    views: [
        'Viewport',
        'Header',
        'List',
        'StartList'
    ],

    refs: [
       {
           ref:'treeList',
           selector:'viewport panel[itemId=maintabs]'
        },
        {
            ref: 'examplePanel',
            selector: '#examplePanel'
        },
        {
           ref:'exampleList',
           selector:'viewport panel[itemId=maintabs] view[itemId=exampleList]'
        }
    ],

    init: function() {
    	console.log("main log");
    	
    	
        //var  examplePanel = this.getExamplePanel();
        
        //examplePanel.removeAll(); 
        //treePanel.removeAll();
        
        /*treePanel.add({
			xtype : 'startList',
			itemId: 'exampleList',
			border: 0
        })*/
    	
    	
        this.control({
            'viewport panel[itemId=maintabs] panel[itemId=exampleList]': {
                'select': function(me, record, item, index, e) {
                	
                	//alert("HA HA HA HA ");
                    if (!record.isLeaf()) {
                        return;
                    }
                    //alert("select start---------------->");
                    console.log("******select******************************************");
                    console.log('me'+me+'record'+record);
                    console.log(record.get('text'));

                    this.setActiveExample(this.classNameFromRecord(record), record.get('text'));
                },
                afterrender: function(){
                	
                	console.log('afterrender......... ');
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
                }
            },
            //初始化页面
            'viewport panel[itemId=changeModule]':{
                 afterrender: function(){
                       var  treePanel = this.getTreeList();
                       //alert("treePanel" + treePanel);
                       
                       treePanel.add({
							xtype : 'startList',
							itemId: 'exampleList',
							border: 0
				        })
                 }   
            }
            
        });
    },

    setActiveExample: function(className, title) {
        var examplePanel = this.getExamplePanel(),
            path, example, className;
            //alert('examplePanel'+examplePanel);
            
            console.log('examplePanel'+examplePanel);
            console.log('examplePanel'+examplePanel.view);
            console.log("setActiveExample start---------------->");
            console.log('title'+title+'className'+className);
        
        if (!title) {
            title = className.split('.').reverse()[0];
        }
        
        //update the title on the panel
        examplePanel.setTitle(title);
        
        //remember the className so we can load up this example next time
        location.hash = title.toLowerCase().replace(' ', '-');

        //set the browser window title
        document.title = document.title.split(' - ')[0] + ' - ' + title;
        
        //create the example
        example = Ext.create(className);
        
        //remove all items from the example panel and add new example
        examplePanel.removeAll();
        examplePanel.add(example);
    },
    
    // Will be used for source file code
    // loadExample: function(path) {
    //     Ext.Ajax.request({
    //         url: path,
    //         success: function() {
    //             console.log(Ext.htmlEncode(response.responseText));
    //         }
    //     });
    // },

    filePathFromRecord: function(record) {
        var parentNode = record.parentNode,
            path = record.get('text');
        
        while (parentNode && parentNode.get('text') != "Root") {
            path = parentNode.get('text') + '/' + Ext.String.capitalize(path);

            parentNode = parentNode.parentNode;
        }

        return this.formatPath(path);
    },

    classNameFromRecord: function(record) {
	    console.log('classNameFromRecord start---->'+record);
	
        var path = this.filePathFromRecord(record);

        path = 'KitchenSink.view.examples.' + path.replace('/', '.');
        
        console.log('classNameFromRecord- end--->'+path);
        return path;
    },

    formatPath: function(string) {
	console.log('formatPath starrt---->'+string);
        var result = string.split(' ')[0].charAt(0).toLowerCase() + string.split(' ')[0].substr(1),
            paths = string.split(' '),
            ln = paths.length,
            i;

        for (i = 1; i < ln; i++) {
            result = result + Ext.String.capitalize(paths[i]);
        }
        console.log('formatPath end----result>'+result);
        return result;
    }
});
