module.exports = {
	base: "/myblog/",
	title: '小R谈编程',
	port: 9095,
	themeConfig: {
		logo: '',
		nav:[
			{text: '首页', link: '/'},
			{
		    	text: 'Java',
		        ariaLabel: 'Java',
		        items: [
		          { text: 'Java学习笔记', link: '/java/java_learn' },
		          { text: 'Java问题', link: '/java/java_question' },
		          { text: 'Java定时程序', link: '/java/java_timerTask' },
		          { text: 'maven', link: '/java/maven' }
		        ]
		    },
		    {
		    	text: 'Web',
		        ariaLabel: 'Web',
		        items: [
		          { text: 'web基础', link: '/web/web' },
		          { text: 'javascript', link: '/web/javascript' }
		        ]
		    },
		    {
		    	text: 'Hadoop',
		        ariaLabel: 'Hadoop',
		        items: [
		          { text: 'Hadoop安装', link: '/hadoop/hadoop_install' },
		          { text: 'Hadoop入门', link: '/hadoop/hadoop_base' },
		          { text: 'HDFS', link: '/hadoop/hadoop_hdfs' }
		        ]
		    },
			{text: 'Linux', link: '/linux/linux_base'},
			{
		    	text: '其他',
		        ariaLabel: 'others',
		        items: [
		          { text: '代码管理', link: '/codemanage/codemanage_README' },
		          { text: 'vuepress', link: '/codemanage/vuepress_learn' }
		        ]
		    }
		]
		/*sidebar:[
			{
				title: 'Java',
				collapsable: false,
				sidebarDepth: 2,
				children: [
					['/java/java_learn', 'Java学习笔记'],
					['/java/java_question', 'Java问题'],
					['/java/javascript', 'JavaScript'],
					['/java/java_timerTask', 'Java定时程序'],
					['/java/maven', 'Maven'],
					['/java/web', 'Web']
				]
			},
			{
				title: '数据库',
				path: '/database/database_README',
				collapsable: false,
				sidebarDepth: 2,
				children: [
					['/database/oracle', 'Oracle'],
					['/database/mysql', 'MySql']
				]
			},
			{
				title: 'Linux',
				collapsable: false,
				sidebarDepth: 2,
				children: [
					['/linux/linux_base', '基础']
				]
			},
			{
				title: 'Hadoop',
				collapsable: false,
				sidebarDepth: 2,
				children: [
					['/hadoop/hadoop_install', 'Hadoop安装'],
					['/hadoop/hadoop_base', 'Hadoop入门'],
					['/hadoop/hadoop_hdfs', 'HDFS']
				]
			},
			{
				title: '代码管理',
				path: '/codemanage/codemanage_README',
				collapsable: false
			}
		]*/
	},
	plugins: [
	    'flowchart'
	]
}