Ext.define('MyApp.view.AvailableFields',{
    extend: 'Ext.form.Panel',
    alias :'widget.AvailableFields',
    title : 'AvailableFields',
    width : 280,
    bodyPadding : 5,
    
    initComponent :function (){
    	var me = this;
        
    	me.tbar = [{text:'Save',handler:me.saveData,scope:me}];
		me.items = me.buildItems();
        me.callParent();
    },
    
    /*saveData : function (){
        var me = this;
        me.getForm().submit({
            url: 'serverside/save.jsp',
            success : function (form ,action){
                Ext.Msg.alert('Msg' ,'Successfully Saved!');
            },
            failure : function (form ,action){
                Ext.Msg.alert('Failure' ,'Something is Wrong !');
            }
            
        })
    },*/
    
    buildItems: function (){
        var txt = Ext.create('Ext.form.field.Text',{
			fieldLabel	: 'First name',
			name		: 'firstname',
			enableKeyEvents : true
		});
		
		txt.on('keyup',function(field,event,options){
             if(event.getCharCode() === event.ENTER){
                Ext.Msg.alert('Alert','Welcome: '+field.getValue());
             }
		});
		
		var num = Ext.create('Ext.form.field.Number', {
			emptyText : 'price',
			name		: 'price',
			step: 10,
			minValue : 10,
			maxValue : 100,
			flex: 1,
			margins: '0 5 0 0'
			//hideTrigger :true
		});
		
		var store = Ext.create('Ext.data.Store', {
		    fields :['key','label'],
		    data: [
		        {key :'x',label: 'Xtype'},
                {key :'b',label: 'Button'},
                {key :'ht',label: 'hiddeTrigger'}
		    ]
		});
		
		var remoteSore =  Ext.create('Ext.data.Store',{
		    fields   :['key','label'],
		    autoLoad : true,
		    proxy	 : {
				type	: 'ajax',
				url		: 'serverside/sizes.json',
				reader	: {
					type	: 'json',
					root	: 'data'
				}
			}
		});
		
		var cobox = Ext.create('Ext.form.ComboBox',{
			emptyText: 'size',
		    emptyText	: 'Size',
			name		: 'size',
			store		: store,
			queryMode	: 'local',
			displayField: 'label',
			valueField	: 'key',
			forceSelection : true,
			flex		: 1
		    
		});
		
		cobox.on('select' , function (combo,records){
		    Ext.Msg.alert('alert' ,records.getValue['label']);
		});
		
		var priceSize = Ext.create('Ext.form.FieldContainer',{
		    fieldLabel : 'price/size',
		    items :[num ,cobox],
		    layout : 'hbox'
		    //columns: 2
		    
		});
		
		var date = Ext.create('Ext.form.field.Date' ,{
			fieldLabel: 'Date',
            name: 'date',
            // The value matches the format; will be parsed and displayed using that format.
            format: 'd/m/Y',
            submitFormat: 'Y-m-dH:m:s',
            altFormats : 'd-m-Y|d m Y|d.m.Y'
		});
		
		var check = Ext.create('Ext.form.Checkbox', {
		    fieldLabel : ' ',
            labelSeparator : '',
            boxLabel : 'Active',
            name : 'active'
		});
		
		var checkgroup = Ext.create('Ext.form.CheckboxGroup',{
		    fieldLabel : 'language',
		    columns : 2,
		    items :[
		        {name:'lan' , boxLabel: 'Javascript', inputValue : 'js'},
		        {name:'lan' , boxLabel: 'C/C++', inputValue : 'c'},
		        {name:'lan' , boxLabel: 'Java', inputValue : 'java'},
		        {name:'lan' , boxLabel: 'SQL', inputValue : 'sql'},
		        {name:'lan' , boxLabel: 'PHP', inputValue : 'php'},
		        {name:'lan' , boxLabel: 'Ruby', inputValue : 'ruby'}
		    ]
		});
		
		
		
		var yes = Ext.create('Ext.form.field.Radio', {
		    name : 'option',
            labelSeparator : '',
            boxLabel: 'Yes',
            inputValue : true
		});
		var no  = Ext.create('Ext.form.field.Radio', {
		    name : 'option',
            fieldLabel : '',
            labelSeparator : '',
            boxLabel: 'no',
            inputValue : false
		});
		
		var radioGroup = Ext.create('Ext.form.RadioGroup' ,{
		    fieldLabel : 'Are you a developer?',
		    columns: 2,
		    items : [yes , no]
		    
		});
        
        return [txt, priceSize,date, check, checkgroup ,radioGroup];
    },
    
    saveData	: function(){
		var me = this;

		me.getForm().submit({
			url		: 'serverside/save.jsp',
			success	: function(form,action){
				Ext.Msg.alert('Success','Successfully saved');
			},
			failure	: function(form,action){
				Ext.Msg.alert('Failure','Something is wrong');
			}
		});
	}
})