Ext.define('KitchenSink.view.examples.grids.BasicGridForm', {
	extend      : 'Ext.form.Panel',
	alias       : 'widget.examples.grids.BasicGridForm',
	requires    : [
		'Ext.form.field.Hidden'
	],

	title		: 'form',
	bodyPadding	: 5,
	border		: true,
	bodyBorder	: true,
	
	defaults	: {
		xtype	: 'textfield'
	},

	initComponent   : function(){
		var me = this;
		me.items = me.buildItems();

		me.callParent();
	},

	buildItems : function(){
		return [
		{
            xtype: 'fieldcontainer',
            fieldLabel: 'Your Name',
            labelStyle: 'font-weight:bold;padding:0',
            layout: 'hbox',
            defaultType: 'textfield',
            /*fieldDefaults: {
                labelAlign: 'left'
            },*/
            items:[
               {
					xtype		: 'hidden',
					name		: 'id'
				},{
					fieldLabel	: 'Name',
					name		: 'name'
					
				},{
					fieldLabel	: 'Contact',
					name		: 'contact'
					
				},{
					fieldLabel	: 'Phone',
					name		: 'phone'
					
				}   
		            
            ]  
        }
		];
	}
	
	
})