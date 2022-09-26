import Vue from 'vue'
import Router from 'uni-simple-router';
Vue.use(Router);

const whitelist = {     //声明了一个白名单，为tabBar下的页面
    "/pages/tabBar/task/task": "task",
    "/pages/tabBar/check/check": "check",
    "/pages/tabBar/assign/assign": "assign",
    "/pages/tabBar/project/project": "project",
};
const router = new Router({
	encodeURI:false,
    h5:{
        useUniConfig:true,  //采用在pages.json下的所有页面配置信息,默认为true
    },
    routes:[
		{
		    aliasPath: "/",
		    path: "/pages/tabBar/task/task",
		    name: "task",
		},
		{
		    aliasPath: "/check",
		    path: "/pages/tabBar/check/check",
		    name: "check",
		},
		{
		    aliasPath: "/assign",
		    path: "/pages/tabBar/assign/assign",
		    name: "assign",
		},
		{
		    aliasPath: "/project",
		    path: "/pages/tabBar/project/project",
		    name: "project",
		},
		{
		    aliasPath:"/404",
		    path: "/pages/404/404",
		    name: "404"
		},
		{
			aliasPath:"/projectmanager",
            path: "/pages/tabBar/project/projectmanager",
        	name: "projectmanager",
        },
		{
            path: "/pages/tabBar/project/projectdetail",
        	name: "projectdetail",
        },
		{
            path: "/pages/tabBar/project/newproject",
        	name: "newproject",
        },
		{
            path: "/pages/tabBar/project/assignproject",
        	name: "assignproject",
        },
		{
            path: "/pages/tabBar/project/bigmoduleing",
        	name: "bigmoduleing",
        },
		{
            path: "/pages/tabBar/project/newbigmodule",
        	name: "newbigmodule",
        },
		{
            path: "/pages/tabBar/project/newsmallmodule",
        	name: "newsmallmodule",
        },
		{
            path: "/pages/tabBar/project/editbigmodule",
        	name: "editbigmodule",
        },
		{
            path: "/pages/tabBar/project/editbigmoduledetail",
        	name: "editbigmoduledetail",
        },
		{
            path: "/pages/tabBar/project/editsmallmodule",
        	name: "editsmallmodule",
        },
		{
            path: "/pages/tabBar/project/editsmallmoduledetail",
        	name: "editsmallmoduledetail",
        },
		{
            path: "/pages/tabBar/project/worksheeting",
        	name: "worksheeting",
        },
		{
            path: "/pages/tabBar/project/newworksheet",
        	name: "newworksheet",
        },
		{
            path: "/pages/tabBar/project/editworksheet",
        	name: "editworksheet",
        },
		{
            path: "/pages/tabBar/project/editworksheetdetail",
        	name: "editworksheetdetail",
        },
        {
            path: "/pages/tabBar/project/editproject",
        	name: "editproject",
        },
        {
            path: "/pages/tabBar/project/smallmoduleing",
        	name: "smallmoduleing",
        },
        {
            path: "/pages/tabBar/project/bigmoduleed",
        	name: "bigmoduleed",
        },
        {
            path: "/pages/tabBar/project/worksheeted",
        	name: "worksheeted",
        },
        {
            path: "/pages/tabBar/project/smallmoduleed",
        	name: "smallmoduleed",
        },
        {
            path: "/pages/tabBar/assign/newtask",
        	name: "newtask",
        },
        {
            path: "/pages/tabBar/assign/assigntask",
        	name: "assigntask",
        },
        {
            path: "/pages/tabBar/assign/edittask",
        	name: "edittask",
        },
        {
            path: "/pages/detail/detail01",
        	name: "detail01",
        },
        {
            path: "/pages/detail/detail02",
        	name:"detail02",
        },
        {
            path: "/pages/tabBar/task/fileUpload",
        	name: "fileUpload",
        },
        {
            path: "/pages/usercenter/usercenter",
        	name: "usercenter",
        },
		{
            path: "/pages/usercenter/personalfile",
        	name: "personalfile",
        },
        {
            path: "/pages/usercenter/positionfile",
        	name: "positionfile",
        },
        {
            path: "/pages/usercenter/department",
        	name: "department",
        },
        {
            path: "/pages/usercenter/feedback",
        	name: "feedback",
        },
        {
            path: "/pages/usercenter/team",
        	name: "team",
        },
        {
            path: "/pages/usercenter/message",
        	name: "message",
        },
		{
            path : "/pages/usercenter/mykpi",
        	name: "mykpi",
        },
		{
            path: "/pages/usercenter/teamkpi",
        	name: "teamkpi",
        },
		{
            path: "/pages/login/login",
        	name: "login",
        },
		{
		    path: '*',
		    name: 'moddle',
		    redirect:to=>{
				const name = whitelist[to.path];
				if(name){
					return {name}
				};
					return {name:'404'}
		    }
		}
    ],
    scrollBehavior (to, from, savedPosition) {
        return savedPosition || { x: 0, y: 0 }
    }
});
router.beforeEach((to, from, next) => {
	let token = wx.getStorageSync('token')
	if(!token){
		if(to.path!='/pages/login/login'){
			next('/pages/login/login');
		}
	};
	next()
})
export {
    router
}
