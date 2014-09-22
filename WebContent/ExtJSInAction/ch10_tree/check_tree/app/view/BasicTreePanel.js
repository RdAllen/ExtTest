Ext.define('App.view.BasicTreePanel',{
    extend: 'Ext.tree.Panel',
    xtype: 'basictreepanel',
    titel: 'MVC Pattern',
    root: {
        text: 'Application',
        expanded: 'true',
        children : {
        	text: 'app',
        	children :[
        	   {
        	      text: 'app.js',
        	      leaf: true
        	   },{
        	      text: 'controller'
        	   },{
        	      text: 'model'
        	   },{
        	      text: 'store'
        	   },{
        	      text:  'view',
        	      children :[
        	          {
        	              text: 'BasicTreePanel.js',
        	              leaf: true
        	          }
        	      ]
        	   },{
        	      text: 'data'
        	   },{
        	      text: 'index.html',
        	      leaf: true
        	   },{
        	      text: 'resources',
        	      children:[
        	      	{text:'css' },
        	        {text:'resources'}
        	      ]
        	   }
        	]
        }
    }
})