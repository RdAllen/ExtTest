Ext.define("MyApp.view.clients.Form",{
    extend: 'Ext.form.Panel',
    alias: 'widget.clientform',
    title: 'Client Form',
    bodyPadding: 5,
	defaultType : 'textfield', 
	
    initComponent : function (){
        var me = this; 
        me.items = me.buildItems();
        me.dockedItems = me.buildDockedItems();
        
    	me.callParent();
    },
    
    buildItems:function (){
    	return [
    	    {fieldLabel: 'Name' ,name : 'name'},
    	    {fieldLabel: 'Contact' ,name : 'contact'},
    	    { xtype: 'textarea' ,fieldLabel :'Address' ,name:'address'},
    	    {fieldLabel: 'Phone' ,name : 'phone'}
    	]
    },
    
    buildDockedItems : function (){
        return [
        {
           xtype: 'toolbar',
		   docked: 'top',
		   items: [
				{text: 'new ', iconCls: 'new-icon'},
				{text: 'save ', iconCls: 'save-icon'},
				{text: 'delete ', iconCls: 'delete-icon'}
		   ]
        }
        ];
    }
    
    
    
	
})