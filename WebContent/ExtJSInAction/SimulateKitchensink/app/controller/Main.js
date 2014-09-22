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
        this.control({
            'viewport exampleList': {
                'select': function(me, record, item, index, e) {
                    if (!record.isLeaf()) {
                        return;
                    }
                    console.log("select----------->record"+record);
                    this.setActiveExample(this.classNameFromRecord(record), record.get('text'));
                },
                afterrender: function(){
                    var me = this,
                        className, exampleList, name, record;

                    setTimeout(function(){
                        className = location.hash.substring(1);//#basic-grid
                        exampleList = me.getExampleList();

                        if (className) {
                            name = className.replace('-', ' ');
                            record = exampleList.view.store.find('text', name);     
                        } else {
						    record = exampleList.view.store.find('text', 'basic panel');
					    }

                        exampleList.view.select(record);
                    }, 0);
                }
            }
        });
    },

    setActiveExample: function(className, title) {
        var examplePanel = this.getExamplePanel(),
            path, example, className;
        
        if (!title) {
            title = className.split('.').reverse()[0];
        }
        
        console.log("----------->"+title);
        //update the title on the panel
        examplePanel.setTitle(title);
        
        //remember the className so we can load up this example next time
        location.hash = title.toLowerCase().replace(' ', '-');

        //set the browser window title
        document.title = document.title.split(' - ')[0] + ' - ' + title;
        
        console.log("--------> calssName__>"+ className);
        //create the example
        example = Ext.create(className);
        
        console.log("examplePanel--"+examplePanel);
        
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

    classNameFromRecord: function(record) {
    	console.log("classNameFromRecord---------->before"+record);
    	
        var path = this.filePathFromRecord(record);
        

        path = 'KitchenSink.view.examples.' + path.replace('/', '.');
        console.log("classNameFromRecord---------->after"+path);
        return path;
    },
    
    filePathFromRecord: function(record) {
    	console.log("filePathFromRecord---------->before"+record);
        var parentNode = record.parentNode,
            path = record.get('text');
        
        while (parentNode && parentNode.get('text') != "Root") {
            path = parentNode.get('text') + '/' + Ext.String.capitalize(path);

            parentNode = parentNode.parentNode;
        }
        console.log("filePathFromRecord---------->after"+path);// /Basic Panel
        return this.formatPath(path);
    },

    formatPath: function(string) {
    	console.log("formatPath---------->before"+string);
        var result = string.split(' ')[0].charAt(0).toLowerCase() + string.split(' ')[0].substr(1),
            paths = string.split(' '),
            ln = paths.length,
            i;

        for (i = 1; i < ln; i++) {
            result = result + Ext.String.capitalize(paths[i]);
        }
        console.log("formatPath---------->after"+result);
        return result;
    }
});
