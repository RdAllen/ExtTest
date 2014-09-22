Ext.define('myApp.users.Employee',{
	
    extend: 'Ext.util.Observable',
    attempts: 0,
    
    constructor : function (){
	     this.addEvents('succcess','fails');
	     this.callParent();
    },
    
    login: function (user, pwd){
	   var me = this;
	   
	   Ext.Msg.wait('Please wait load ....',{
		   interval: 300
	   });
	   setTimeout( function (){
		   Ext.Msg.hide();
		   me.attempts++;
		   if(user == 'Tom' && pwd == 'mom'){
			   me.fireEvent('success',me);
		   } else{
			   me.fireEvent('fails',me.attempts);
		   }
		   },3000)
	   
	}
    
});