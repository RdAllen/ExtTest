/**
 * @class App.view.TreeStoreTreePanel
 * @extends Ext.tree.Panel
 * This is a tree panel with a tree store configuration.
 * @author Armando Gonzalez <iam@armando.mx>
 */
Ext.define('App.view.TreeStoreTreePanel', {
    extend: 'Ext.tree.Panel',
    xtype:'treestorepanel',
    store:'Files',
	tbar:[{
		text:'Add',
		iconCls:'add',
		menu:{	
			items:{
				xtype:'nodeform'
			}
		}
	},{
		text:'Delete',
		iconCls:'delete',
		itemId: 'deletebtn'
	}],
	viewConfig:{ 
		plugins:{
			ptype:'treeviewdragdrop' 
		}
	}
});























































