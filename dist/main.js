/**
 * DevTool Hub - Main JavaScript
 * Handles tool data, search, filtering, and interactions
 */

// =====================================================
// Tool Data - Comprehensive developer tools collection
// =====================================================
const toolsData = [
    // ============ Frontend Tools ============
    {
        id: 1,
        name: 'Visual Studio Code',
        category: 'frontend',
        description: '最受欢迎的免费代码编辑器，支持丰富的扩展生态，适用于所有编程语言。',
        tags: ['编辑器', 'IDE', '轻量级'],
        url: 'https://code.visualstudio.com',
        icon: 'code-2'
    },
    {
        id: 2,
        name: 'Tailwind CSS',
        category: 'frontend',
        description: '实用优先的CSS框架，通过组合原子类快速构建现代网站。',
        tags: ['CSS', '框架', '响应式'],
        url: 'https://tailwindcss.com',
        icon: 'wind'
    },
    {
        id: 3,
        name: 'React',
        category: 'frontend',
        description: '用于构建用户界面的JavaScript库，采用组件化开发模式。',
        tags: ['UI库', '组件化', 'SPA'],
        url: 'https://react.dev',
        icon: 'atom'
    },
    {
        id: 4,
        name: 'Vue.js',
        category: 'frontend',
        description: '渐进式JavaScript框架，易于学习且功能强大，适合快速开发。',
        tags: ['框架', '响应式', '轻量'],
        url: 'https://vuejs.org',
        icon: 'triangle'
    },
    {
        id: 5,
        name: 'TypeScript',
        category: 'frontend',
        description: 'JavaScript的超集，提供类型系统和面向对象编程能力。',
        tags: ['类型系统', '编译', 'OOP'],
        url: 'https://www.typescriptlang.org',
        icon: 'file-code'
    },
    {
        id: 6,
        name: 'Svelte',
        category: 'frontend',
        description: '创新的UI框架，编译时优化，无虚拟DOM，运行高效。',
        tags: ['编译时', '无虚拟DOM', '轻量'],
        url: 'https://svelte.dev',
        icon: 'zap'
    },
    {
        id: 7,
        name: 'Next.js',
        category: 'frontend',
        description: 'React全栈框架，支持SSR、SSG，提供优秀的开发体验。',
        tags: ['React', 'SSR', '全栈'],
        url: 'https://nextjs.org',
        icon: 'navigation'
    },
    {
        id: 8,
        name: 'Bootstrap',
        category: 'frontend',
        description: '最流行的HTML、CSS和JS框架，快速构建响应式移动优先站点。',
        tags: ['框架', '响应式', '组件库'],
        url: 'https://getbootstrap.com',
        icon: 'layout'
    },
    {
        id: 9,
        name: 'jQuery',
        category: 'frontend',
        description: '快速、小巧、功能丰富的JavaScript库，简化HTML文档遍历和事件处理。',
        tags: ['DOM', '动画', 'AJAX'],
        url: 'https://jquery.com',
        icon: 'code'
    },
    {
        id: 10,
        name: 'Webpack',
        category: 'frontend',
        description: '强大的模块打包工具，将JavaScript应用程序打包成静态资源。',
        tags: ['打包', '模块化', '构建'],
        url: 'https://webpack.js.org',
        icon: 'package'
    },
    {
        id: 11,
        name: 'Vite',
        category: 'frontend',
        description: '下一代前端构建工具，极速的开发服务器和优化的生产构建。',
        tags: ['构建工具', '开发服务器', 'HMR'],
        url: 'https://vitejs.dev',
        icon: 'zap'
    },
    {
        id: 12,
        name: 'Nuxt.js',
        category: 'frontend',
        description: 'Vue的全栈框架，支持服务端渲染、静态生成和SPA模式。',
        tags: ['Vue', 'SSR', 'SSG'],
        url: 'https://nuxt.com',
        icon: 'layers'
    },
    {
        id: 13,
        name: 'Angular',
        category: 'frontend',
        description: 'Google开发的企业级前端框架，强大的依赖注入和模块化。',
        tags: ['框架', '企业级', 'TypeScript'],
        url: 'https://angular.io',
        icon: 'hexagon'
    },
    {
        id: 14,
        name: 'Ember.js',
        category: 'frontend',
        description: '专注于Web应用开发的JavaScript框架，约定优于配置。',
        tags: ['框架', '约定', 'Web应用'],
url: 'https://emberjs.com',
        icon: 'target'
    },
    {
        id: 15,
        name: 'Preact',
        category: 'frontend',
        description: '3KB的React替代品，拥有相同的现代API，性能卓越。',
        tags: ['轻量', 'React兼容', '性能'],
        url: 'https://preactjs.com',
        icon: ' feather'
    },
    {
        id: 16,
        name: 'Alpine.js',
        category: 'frontend',
        description: '轻量级的JavaScript框架，用于声明式渲染，适合小项目。',
        tags: ['轻量', '声明式', '简单'],
        url: 'https://alpinejs.dev',
        icon: 'mountain'
    },
    {
        id: 17,
        name: 'Sass',
        category: 'frontend',
        description: 'CSS预处理器，提供变量、嵌套、混合器等高级功能。',
        tags: ['CSS预处理器', '变量', '嵌套'],
        url: 'https://sass-lang.com',
        icon: 'file-code'
    },
    {
        id: 18,
        name: 'Less',
        category: 'frontend',
        description: 'CSS预处理器，简洁的语法和强大的功能扩展。',
        tags: ['CSS预处理器', '变量', '混合'],
        url: 'https://lesscss.org',
        icon: 'sliders'
    },
    {
        id: 19,
        name: 'PostCSS',
        category: 'frontend',
        description: '用JavaScript转换CSS的工具平台，支持插件扩展。',
        tags: ['CSS', '插件', '转换'],
        url: 'https://postcss.org',
        icon: 'settings'
    },
    {
        id: 20,
        name: 'Babel',
        category: 'frontend',
        description: 'JavaScript编译器，将新语法转换为向后兼容的代码。',
        tags: ['编译器', 'ES6+', '转译'],
        url: 'https://babeljs.io',
        icon: 'terminal'
    },
    {
        id: 21,
        name: 'ESLint',
        category: 'frontend',
        description: 'JavaScript代码检查工具，发现和修复代码问题。',
        tags: ['代码检查', 'lint', '质量'],
        url: 'https://eslint.org',
        icon: 'shield'
    },
    {
        id: 22,
        name: 'Prettier',
        category: 'frontend',
        description: '代码格式化工具，支持JavaScript、TypeScript、CSS等。',
        tags: ['格式化', '代码风格', '自动化'],
        url: 'https://prettier.io',
        icon: 'align-left'
    },
    {
        id: 23,
        name: 'Pug',
        category: 'frontend',
        description: '高性能的模板引擎，简洁的语法减少HTML编写。',
        tags: ['模板引擎', 'HTML', '简洁'],
        url: 'https://pugjs.org',
        icon: 'file-text'
    },
    {
        id: 24,
        name: 'HTMX',
        category: 'frontend',
        description: '用HTML属性扩展HTML，无需编写JavaScript即可实现交互。',
        tags: ['HTML扩展', '无JS', '服务器交互'],
        url: 'https://htmx.org',
        icon: 'arrow-right-left'
    },
    {
        id: 25,
        name: 'Three.js',
        category: 'frontend',
        description: '强大的3D JavaScript库，用于创建3D Web体验。',
        tags: ['3D', 'WebGL', '图形'],
        url: 'https://threejs.org',
        icon: 'box'
    },
    {
        id: 26,
        name: 'Chart.js',
        category: 'frontend',
        description: '简洁的JavaScript图表库，支持多种图表类型。',
        tags: ['图表', '可视化', 'Canvas'],
        url: 'https://www.chartjs.org',
        icon: 'bar-chart'
    },
    {
        id: 27,
        name: 'D3.js',
        category: 'frontend',
        description: '强大的数据可视化库，通过SVG创建交互式图表。',
        tags: ['数据可视化', 'SVG', '交互'],
        url: 'https://d3js.org',
        icon: 'pie-chart'
    },
    {
        id: 28,
        name: 'Framer Motion',
        category: 'frontend',
        description: 'React动画库，创建流畅的动画和手势交互。',
        tags: ['动画', 'React', '手势'],
        url: 'https://www.framer.com/motion',
        icon: 'play'
    },
    {
        id: 29,
        name: 'GreenSock',
        category: 'frontend',
        description: '专业级动画平台，性能卓越的JavaScript动画库。',
        tags: ['动画', '高性能', 'GSAP'],
        url: 'https://greensock.com',
        icon: 'triangle'
    },
    {
        id: 30,
        name: 'Storybook',
        category: 'frontend',
        description: 'UI组件开发环境，独立构建和测试React/Vue组件。',
        tags: ['组件开发', '文档', '测试'],
        url: 'https://storybook.js.org',
        icon: 'book-open'
    },

    // ============ Design Tools ============
    {
        id: 31,
        name: 'Figma',
        category: 'design',
        description: '基于云的设计协作工具，支持实时协作和原型制作。',
        tags: ['设计', '协作', '原型'],
        url: 'https://figma.com',
        icon: 'pen-tool'
    },
    {
        id: 32,
        name: 'Unsplash',
        category: 'design',
        description: '高质量免费图片素材库，超过300万张可商用高清图片。',
        tags: ['图片', '素材', '免费'],
        url: 'https://unsplash.com',
        icon: 'image'
    },
    {
        id: 33,
        name: 'Font Awesome',
        category: 'design',
        description: '世界上最受欢迎的图标集和工具包，提供数千个免费图标。',
        tags: ['图标', '字体图标', 'SVG'],
        url: 'https://fontawesome.com',
        icon: 'font'
    },
    {
        id: 34,
        name: 'Google Fonts',
        category: 'design',
        description: '免费的网页字体库，提供超过1500个开源字体和图标。',
        tags: ['字体', '排版', '免费'],
        url: 'https://fonts.google.com',
        icon: 'type'
    },
    {
        id: 35,
        name: 'Coolors',
        category: 'design',
        description: '在线配色方案生成器，快速创建美丽、和谐的颜色组合。',
        tags: ['配色', '颜色', '调色板'],
        url: 'https://coolors.co',
        icon: 'palette'
    },
    {
        id: 36,
        name: 'Canva',
        category: 'design',
        description: '在线设计平台，提供丰富的模板和设计工具，无需设计基础。',
        tags: ['设计', '模板', '在线'],
        url: 'https://canva.com',
        icon: 'brush'
    },
    {
        id: 37,
        name: 'Tailwind Colors',
        category: 'design',
        description: 'Tailwind CSS官方配色工具，可视化配置颜色系统。',
        tags: ['配色', 'Tailwind', '工具'],
        url: 'https://tailwindcss.com/docs/customizing-colors',
        icon: 'droplet'
    },
    {
        id: 38,
        name: 'Heroicons',
        category: 'design',
        description: 'Tailwind CSS团队出品的精美SVG图标集，简洁现代。',
        tags: ['图标', 'SVG', '免费'],
        url: 'https://heroicons.com',
        icon: 'sun'
    },
    {
        id: 39,
        name: 'Pexels',
        category: 'design',
        description: '免费高清图片素材库，摄影师社区支持，商用免费。',
        tags: ['图片', '免费', '商用'],
        url: 'https://pexels.com',
        icon: 'image'
    },
    {
        id: 40,
        name: 'Pixabay',
        category: 'design',
        description: '超过300万张免费图片、视频和音乐素材库。',
        tags: ['素材', '图片', '视频'],
        url: 'https://pixabay.com',
        icon: 'camera'
    },
    {
        id: 41,
        name: 'Icons8',
        category: 'design',
        description: '图标、插图、照片和音乐素材平台，免费可商用。',
        tags: ['图标', '插图', '素材'],
        url: 'https://icons8.com',
        icon: 'box'
    },
    {
        id: 42,
        name: 'Flaticon',
        category: 'design',
        description: '最大的免费图标数据库，超过800万个矢量图标。',
        tags: ['图标', '矢量', '免费'],
        url: 'https://www.flaticon.com',
        icon: 'star'
    },
    {
        id: 43,
        name: 'Dribbble',
        category: 'design',
        description: '全球设计师社区，展示和发现优秀设计作品。',
        tags: ['设计', '社区', '灵感'],
        url: 'https://dribbble.com',
        icon: 'dribbble'
    },
    {
        id: 44,
        name: 'Behance',
        category: 'design',
        description: 'Adobe旗下的创意作品展示平台，发现创意设计。',
        tags: ['设计', '创意', '作品集'],
        url: 'https://www.behance.net',
        icon: 'eye'
    },
    {
        id: 45,
        name: 'Adobe Color',
        category: 'design',
        description: 'Adobe官方配色工具，创建和探索配色方案。',
        tags: ['配色', 'Adobe', '色轮'],
        url: 'https://color.adobe.com',
        icon: 'circle'
    },
    {
        id: 46,
        name: 'Notion',
        category: 'design',
        description: '一体化工作空间，笔记、文档、任务管理、项目协作。',
        tags: ['笔记', '协作', '文档'],
        url: 'https://notion.so',
        icon: 'file-text'
    },
    {
        id: 47,
        name: 'Miro',
        category: 'design',
        description: '在线协作白板，支持头脑风暴、流程图和敏捷 ceremonies。',
        tags: ['白板', '协作', '头脑风暴'],
        url: 'https://miro.com',
        icon: 'layout-grid'
    },
    {
        id: 48,
        name: 'Sketch',
        category: 'design',
        description: 'Mac平台的矢量设计工具，设计师首选的专业工具。',
        tags: ['设计', 'Mac', '矢量'],
        url: 'https://www.sketch.com',
        icon: 'pencil'
    },
    {
        id: 49,
        name: 'Favicon Generator',
        category: 'design',
        description: '在线生成网站favicon图标，支持多种格式和尺寸。',
        tags: ['Favicon', '图标', '生成器'],
        url: 'https://favicon.io',
        icon: 'star'
    },
    {
        id: 50,
        name: 'RemoveBG',
        category: 'design',
        description: 'AI驱动的背景移除工具，一键去除图片背景。',
        tags: ['背景移除', 'AI', '图片处理'],
        url: 'https://remove.bg',
        icon: 'eraser'
    },
    {
        id: 51,
        name: 'TinyPNG',
        category: 'design',
        description: '在线图片压缩工具，有效减小PNG和JPEG文件大小。',
        tags: ['压缩', '图片优化', 'Web'],
        url: 'https://tinypng.com',
        icon: 'minimize'
    },
    {
        id: 52,
        name: 'SVGOMG',
        category: 'design',
        description: 'SVGO的在线界面，优化SVG文件，减小文件体积。',
        tags: ['SVG', '优化', '压缩'],
        url: 'https://jakearchibald.github.io/svgomg',
        icon: 'minimize-2'
    },
    {
        id: 53,
        name: 'Photopea',
        category: 'design',
        description: '在线Photoshop，支持PSD文件编辑，完全免费。',
        tags: ['在线PS', '图片编辑', 'PSD'],
        url: 'https://www.photopea.com',
        icon: 'image'
    },
    {
        id: 54,
        name: 'Fontpair',
        category: 'design',
        description: '字体搭配工具，帮助选择协调的字体组合。',
        tags: ['字体', '排版', '搭配'],
        url: 'https://fontpair.co',
        icon: 'type'
    },
    {
        id: 55,
        name: 'Animaker',
        category: 'design',
        description: '在线动画视频制作工具，无需设计技能即可创建动画。',
        tags: ['动画', '视频', '在线'],
        url: 'https://www.animaker.com',
        icon: 'film'
    },

    // ============ Backend Tools ============
    {
        id: 56,
        name: 'Node.js',
        category: 'backend',
        description: '基于Chrome V8引擎的JavaScript运行时，可用于服务器端编程。',
        tags: ['运行时', '服务器', 'JavaScript'],
        url: 'https://nodejs.org',
        icon: 'server'
    },
    {
        id: 57,
        name: 'PostgreSQL',
        category: 'backend',
        description: '功能强大的开源对象关系型数据库，支持SQL和JSON。',
        tags: ['数据库', 'SQL', '开源'],
        url: 'https://www.postgresql.org',
        icon: 'database'
    },
    {
        id: 58,
        name: 'MongoDB',
        category: 'backend',
        description: '基于文档的NoSQL数据库，灵活可扩展，适合敏捷开发。',
        tags: ['NoSQL', '文档数据库', 'JSON'],
        url: 'https://www.mongodb.com',
        icon: 'hard-drive'
    },
    {
        id: 59,
        name: 'Redis',
        category: 'backend',
        description: '开源的内存数据结构存储，用作数据库、缓存和消息队列。',
        tags: ['缓存', '内存', '数据结构'],
        url: 'https://redis.io',
        icon: 'layers'
    },
    {
        id: 60,
        name: 'Docker',
        category: 'backend',
        description: '容器化平台，简化应用程序的部署、扩展和管理。',
        tags: ['容器', 'DevOps', '部署'],
        url: 'https://www.docker.com',
        icon: 'box'
    },
    {
        id: 61,
        name: 'Nginx',
        category: 'backend',
        description: '高性能HTTP服务器和反向代理服务器，负载均衡能力强。',
        tags: ['服务器', '反向代理', '负载均衡'],
        url: 'https://nginx.org',
        icon: 'globe'
    },
    {
        id: 62,
        name: 'Git',
        category: 'backend',
        description: '分布式版本控制系统，管理代码变更，支持团队协作。',
        tags: ['版本控制', 'Git', '协作'],
        url: 'https://git-scm.com',
        icon: 'git-branch'
    },
    {
        id: 63,
        name: 'Python',
        category: 'backend',
        description: '强大易学的编程语言，广泛用于Web开发、数据科学和AI。',
        tags: ['编程语言', '后端', '多用途'],
        url: 'https://www.python.org',
        icon: 'code'
    },
    {
        id: 64,
        name: 'Go',
        category: 'backend',
        description: 'Google开发的编译型语言，并发性能优秀，适合云原生开发。',
        tags: ['编程语言', '高性能', '并发'],
        url: 'https://go.dev',
        icon: 'chevrons-right'
    },
    {
        id: 65,
        name: 'Rust',
        category: 'backend',
        description: '安全高效的编程语言，适合系统编程和高性能应用。',
        tags: ['编程语言', '系统级', '安全'],
        url: 'https://www.rust-lang.org',
        icon: 'shield'
    },
    {
        id: 66,
        name: 'Java',
        category: 'backend',
        description: '企业级编程语言，跨平台能力强，生态丰富。',
        tags: ['编程语言', '企业级', '跨平台'],
        url: 'https://www.java.com',
        icon: 'coffee'
    },
    {
        id: 67,
        name: 'Spring Boot',
        category: 'backend',
        description: 'Java生态中最流行的企业级框架，快速构建微服务。',
        tags: ['Java', '框架', '微服务'],
        url: 'https://spring.io/projects/spring-boot',
        icon: 'leaf'
    },
    {
        id: 68,
        name: 'Django',
        category: 'backend',
        description: 'Python高级Web框架，鼓励快速开发和简洁实用的设计。',
        tags: ['Python', '框架', 'Web'],
        url: 'https://www.djangoproject.com',
        icon: 'rocket'
    },
    {
        id: 69,
        name: 'Flask',
        category: 'backend',
        description: '轻量级Python Web框架，灵活可扩展，微框架典范。',
        tags: ['Python', '微框架', '轻量'],
        url: 'https://flask.palletsprojects.com',
        icon: 'flask'
    },
    {
        id: 70,
        name: 'Express.js',
        category: 'backend',
        description: 'Node.js最小灵活的Web应用框架，快速构建API和Web应用。',
        tags: ['Node.js', '框架', 'API'],
        url: 'https://expressjs.com',
        icon: 'zap'
    },
    {
        id: 71,
        name: 'FastAPI',
        category: 'backend',
        description: '现代快速的Python Web框架，自动生成API文档。',
        tags: ['Python', 'API', '异步'],
        url: 'https://fastapi.tiangolo.com',
        icon: 'bolt'
    },
    {
        id: 72,
        name: 'Ruby on Rails',
        category: 'backend',
        description: 'Ruby的全栈Web框架，约定优于配置，快速开发。',
        tags: ['Ruby', '框架', '全栈'],
        url: 'https://rubyonrails.org',
        icon: 'gem'
    },
    {
        id: 73,
        name: 'Laravel',
        category: 'backend',
        description: 'PHP最流行的Web框架，优雅的语法，强大的功能。',
        tags: ['PHP', '框架', '优雅'],
        url: 'https://laravel.com',
        icon: 'wind'
    },
    {
        id: 74,
        name: 'MySQL',
        category: 'backend',
        description: '最流行的开源关系型数据库，稳定可靠，应用广泛。',
        tags: ['数据库', 'SQL', '开源'],
        url: 'https://www.mysql.com',
        icon: 'database'
    },
    {
        id: 75,
        name: 'SQLite',
        category: 'backend',
        description: '轻量级嵌入式数据库，无需服务器进程即可使用。',
        tags: ['数据库', '嵌入式', '轻量'],
        url: 'https://www.sqlite.org',
        icon: 'database'
    },
    {
        id: 76,
        name: 'Elasticsearch',
        category: 'backend',
        description: '分布式搜索和分析引擎，全文搜索能力强大。',
        tags: ['搜索', 'NoSQL', '分析'],
        url: 'https://www.elastic.co',
        icon: 'search'
    },
    {
        id: 77,
        name: 'RabbitMQ',
        category: 'backend',
        description: '开源消息代理软件，支持多种消息协议。',
        tags: ['消息队列', 'AMQP', '异步'],
        url: 'https://www.rabbitmq.com',
        icon: 'inbox'
    },
    {
        id: 78,
        name: 'Apache Kafka',
        category: 'backend',
        description: '分布式流处理平台，用于构建实时数据管道和流应用。',
        tags: ['流处理', '分布式', '消息'],
        url: 'https://kafka.apache.org',
        icon: 'radio'
    },
    {
        id: 79,
        name: 'Prometheus',
        category: 'backend',
        description: '开源监控系统和服务发现系统，适合云原生环境。',
        tags: ['监控', '指标', '云原生'],
        url: 'https://prometheus.io',
        icon: 'activity'
    },
    {
        id: 80,
        name: 'Grafana',
        category: 'backend',
        description: '开源的可视化和监控平台，支持多种数据源。',
        tags: ['可视化', '监控', '仪表盘'],
        url: 'https://grafana.com',
        icon: 'bar-chart-2'
    },
    {
        id: 81,
        name: 'Kubernetes',
        category: 'backend',
        description: '容器编排平台，自动化部署、扩展和管理容器化应用。',
        tags: ['容器编排', 'K8s', 'DevOps'],
        url: 'https://kubernetes.io',
        icon: 'clouds'
    },
    {
        id: 82,
        name: 'Jenkins',
        category: 'backend',
        description: '开源自动化服务器，支持持续集成和持续交付。',
        tags: ['CI/CD', '自动化', 'DevOps'],
        url: 'https://www.jenkins.io',
        icon: 'refresh-cw'
    },
    {
        id: 83,
        name: 'GitLab CI',
        category: 'backend',
        description: 'GitLab内置的CI/CD功能，完整的DevOps平台。',
        tags: ['CI/CD', 'GitLab', 'DevOps'],
        url: 'https://docs.gitlab.com/ee/ci',
        icon: 'git-merge'
    },
    {
        id: 84,
        name: 'CircleCI',
        category: 'backend',
        description: '云原生CI/CD平台，快速构建、测试和部署。',
        tags: ['CI/CD', '云原生', '自动化'],
        url: 'https://circleci.com',
        icon: 'circle'
    },
    {
        id: 85,
        name: 'Prisma',
        category: 'backend',
        description: '现代数据库工具集，简化Node.js和TypeScript中的数据库访问。',
        tags: ['ORM', '数据库', 'TypeScript'],
        url: 'https://www.prisma.io',
        icon: 'database'
    },
    {
        id: 86,
        name: 'TypeORM',
        category: 'backend',
        description: 'TypeScript和JavaScript的ORM框架，支持多种数据库。',
        tags: ['ORM', 'TypeScript', '数据库'],
        url: 'https://typeorm.io',
        icon: 'database'
    },
    {
        id: 87,
        name: 'Strapi',
        category: 'backend',
        description: '开源无头CMS，灵活的内容管理和API系统。',
        tags: ['CMS', '无头', 'API'],
        url: 'https://strapi.io',
        icon: 'layers'
    },
    {
        id: 88,
        name: 'Supabase',
        category: 'backend',
        description: '开源Firebase替代品，提供数据库、认证和实时订阅。',
        tags: ['BaaS', '实时', '开源'],
        url: 'https://supabase.com',
        icon: 'cloud'
    },
    {
        id: 89,
        name: 'Firebase',
        category: 'backend',
        description: 'Google的BaaS平台，提供数据库、认证、托管等服务。',
        tags: ['BaaS', 'Google', '后端'],
        url: 'https://firebase.google.com',
        icon: 'flame'
    },

    // ============ API Tools ============
    {
        id: 90,
        name: 'GraphQL',
        category: 'api',
        description: 'API查询语言和运行时，允许客户端精确请求所需数据。',
        tags: ['API', '查询语言', '自描述'],
        url: 'https://graphql.org',
        icon: 'share-2'
    },
    {
        id: 91,
        name: 'REST API',
        category: 'api',
        description: '成熟的网络API设计规范，基于HTTP协议，简单易用。',
        tags: ['API', 'REST', 'HTTP'],
        url: 'https://restfulapi.net',
        icon: 'webhook'
    },
    {
        id: 92,
        name: 'Swagger',
        category: 'api',
        description: 'API文档和设计工具，生成交互式API文档。',
        tags: ['API文档', 'OpenAPI', '调试'],
        url: 'https://swagger.io',
        icon: 'file-text'
    },
    {
        id: 93,
        name: 'Postman',
        category: 'api',
        description: 'API开发和测试工具，简化API的构建、测试和文档。',
        tags: ['API测试', '开发', '调试'],
        url: 'https://www.postman.com',
        icon: 'send'
    },
    {
        id: 94,
        name: 'Insomnia',
        category: 'api',
        description: '开源API客户端，支持GraphQL、REST、WebSocket测试。',
        tags: ['API', 'GraphQL', '开源'],
        url: 'https://insomnia.rest',
        icon: 'activity'
    },
    {
        id: 95,
        name: 'Hoppscotch',
        category: 'api',
        description: '开源API开发工具，轻量级、快速，类似Postman。',
        tags: ['API', '开源', '轻量'],
        url: 'https://hoppscotch.io',
        icon: 'send'
    },
    {
        id: 96,
        name: 'Paw',
        category: 'api',
        description: 'Mac平台的原生API调试工具，功能强大的HTTP客户端。',
        tags: ['API', 'Mac', '调试'],
        url: 'https://paw.cloud',
        icon: 'paw-print'
    },
    {
        id: 97,
        name: 'Apifox',
        category: 'api',
        description: 'API文档、调试、Mock、测试一体化协作平台。',
        tags: ['API', '一体化', '协作'],
        url: 'https://apifox.com',
        icon: 'link'
    },
    {
        id: 98,
        name: 'JSONPlaceholder',
        category: 'api',
        description: '免费的在线REST API，用于测试和原型开发。',
        tags: ['REST API', '测试', '免费'],
        url: 'https://jsonplaceholder.typicode.com',
        icon: 'file-json'
    },
    {
        id: 99,
        name: 'Public APIs',
        category: 'api',
        description: '免费的公共API集合目录，超过1500个API可用。',
        tags: ['公共API', '目录', '免费'],
        url: 'https://publicapis.dev',
        icon: 'list'
    },
    {
        id: 100,
        name: 'RapidAPI',
        category: 'api',
        description: '全球最大的API市场，连接开发者与API提供商。',
        tags: ['API市场', '发现', '集成'],
        url: 'https://rapidapi.com',
        icon: 'globe'
    },
    {
        id: 101,
        name: 'ngrok',
        category: 'api',
        description: '将本地服务暴露到公网的工具，方便测试和演示。',
        tags: ['内网穿透', '隧道', '开发工具'],
        url: 'https://ngrok.com',
        icon: 'arrow-right'
    },

    // ============ Learning Resources ============
    {
        id: 102,
        name: 'MDN Web Docs',
        category: 'learning',
        description: 'Mozilla维护的Web技术权威文档，HTML、CSS、JS参考。',
        tags: ['文档', 'Web', '参考'],
        url: 'https://developer.mozilla.org',
        icon: 'book-open'
    },
    {
        id: 103,
        name: 'Stack Overflow',
        category: 'learning',
        description: '全球最大的程序员问答社区，解决开发中的各种问题。',
        tags: ['问答', '社区', '解决问题'],
        url: 'https://stackoverflow.com',
        icon: 'message-circle'
    },
    {
        id: 104,
        name: 'GitHub',
        category: 'learning',
        description: '全球最大的开源代码托管平台，社交编程的圣地。',
        tags: ['代码托管', '开源', '社区'],
        url: 'https://github.com',
        icon: 'github'
    },
    {
        id: 105,
        name: 'freeCodeCamp',
        category: 'learning',
        description: '免费编程学习平台，通过实践项目学习全栈开发。',
        tags: ['学习', '免费', '项目实践'],
        url: 'https://www.freecodecamp.org',
        icon: 'graduation-cap'
    },
    {
        id: 106,
        name: 'LeetCode',
        category: 'learning',
        description: '算法面试刷题平台，准备技术面试的最佳选择。',
        tags: ['算法', '面试', '刷题'],
        url: 'https://leetcode.com',
        icon: 'code'
    },
    {
        id: 107,
        name: 'CSS-Tricks',
        category: 'learning',
        description: '专注于CSS的权威资源网站，涵盖Web前端各个方面。',
        tags: ['CSS', '前端', '技巧'],
        url: 'https://css-tricks.com',
        icon: 'star'
    },
    {
        id: 108,
        name: 'JavaScript.info',
        category: 'learning',
        description: '现代JavaScript教程，从基础到高级的完整指南。',
        tags: ['JavaScript', '教程', '现代'],
        url: 'https://javascript.info',
        icon: 'book'
    },
    {
        id: 109,
        name: 'W3Schools',
        category: 'learning',
        description: 'Web技术学习平台，提供HTML、CSS、JS等在线教程。',
        tags: ['Web', '教程', '学习'],
        url: 'https://www.w3schools.com',
        icon: 'school'
    },
    {
        id: 110,
        name: 'Codecademy',
        category: 'learning',
        description: '互动编程学习平台，边学边练的编程教育网站。',
        tags: ['编程', '互动', '学习'],
        url: 'https://www.codecademy.com',
        icon: 'book'
    },
    {
        id: 111,
        name: 'Udemy',
        category: 'learning',
        description: '全球最大的在线学习平台，涵盖IT、设计、商业等课程。',
        tags: ['在线课程', '学习', '视频'],
        url: 'https://www.udemy.com',
        icon: 'play-circle'
    },
    {
        id: 112,
        name: 'Coursera',
        category: 'learning',
        description: '顶尖大学和企业课程平台，获得认证的在线学习。',
        tags: ['MOOC', '大学课程', '认证'],
        url: 'https://www.coursera.org',
        icon: 'award'
    },
    {
        id: 113,
        name: 'edX',
        category: 'learning',
        description: 'MIT和Harvard创建的MOOC平台，世界顶尖大学课程。',
        tags: ['MOOC', '大学', '免费课程'],
        url: 'https://www.edx.org',
        icon: 'academic-cap'
    },
    {
        id: 114,
        name: 'HackerRank',
        category: 'learning',
        description: '编程技能评估和练习平台，技术面试准备工具。',
        tags: ['编程', '练习', '评估'],
        url: 'https://www.hackerrank.com',
        icon: 'terminal'
    },
    {
        id: 115,
        name: 'Codewars',
        category: 'learning',
        description: '通过代码挑战学习编程，沉浸式的编码训练场。',
        tags: ['代码挑战', '游戏化', '练习'],
        url: 'https://www.codewars.com',
        icon: 'target'
    },
    {
        id: 116,
        name: 'Exercism',
        category: 'learning',
        description: '免费的编程练习平台，导师代码评审反馈。',
        tags: ['练习', '导师', '免费'],
        url: 'https://exercism.org',
        icon: 'trending-up'
    },
    {
        id: 117,
        name: 'Frontend Masters',
        category: 'learning',
        description: '前端开发深度学习平台，业界专家讲授的高级课程。',
        tags: ['前端', '高级', '视频课程'],
        url: 'https://frontendmasters.com',
        icon: 'monitor'
    },
    {
        id: 118,
        name: 'Egghead',
        category: 'learning',
        description: '简短精炼的编程视频课程，专注于Web技术。',
        tags: ['视频', '简短', 'Web'],
        url: 'https://egghead.io',
        icon: 'video'
    },
    {
        id: 119,
        name: 'Dev.to',
        category: 'learning',
        description: '开发者社区博客平台，分享技术文章和经验。',
        tags: ['社区', '博客', '技术文章'],
        url: 'https://dev.to',
        icon: 'code'
    },
    {
        id: 120,
        name: 'Medium',
        category: 'learning',
        description: '优质内容平台，众多技术专家在此分享深度文章。',
        tags: ['博客', '技术文章', '深度'],
        url: 'https://medium.com',
        icon: 'file-text'
    },
    {
        id: 121,
        name: 'Hashnode',
        category: 'learning',
        description: '开发者博客平台，拥有自己的技术社区。',
        tags: ['博客', '社区', '开发者'],
        url: 'https://hashnode.com',
        icon: 'edit-3'
    },
    {
        id: 122,
        name: 'Smashing Magazine',
        category: 'learning',
        description: 'Web开发者的专业杂志，深度技术文章和资源。',
        tags: ['杂志', 'Web开发', '深度文章'],
        url: 'https://www.smashingmagazine.com',
        icon: 'book'
    },
    {
        id: 123,
        name: 'SitePoint',
        category: 'learning',
        description: 'Web开发者和设计师的学习资源平台。',
        tags: ['Web开发', '设计', '教程'],
        url: 'https://www.sitepoint.com',
        icon: 'book-open'
    },
    {
        id: 124,
        name: 'Vue School',
        category: 'learning',
        description: 'Vue.js官方推荐的视频课程平台。',
        tags: ['Vue', '视频课程', '官方推荐'],
        url: 'https://vueschool.io',
        icon: 'play'
    },
    {
        id: 125,
        name: 'React Training',
        category: 'learning',
        description: 'React官方培训平台，深度学习React技术。',
        tags: ['React', '培训', '官方'],
        url: 'https://reacttraining.com',
        icon: 'repeat'
    },
    {
        id: 126,
        name: 'DigitalOcean Community',
        category: 'learning',
        description: 'DigitalOcean社区教程，丰富的技术指南和教程。',
        tags: ['教程', '社区', '指南'],
        url: 'https://www.digitalocean.com/community',
        icon: 'globe'
    },

    // ============ Collaboration Tools ============
    {
        id: 127,
        name: 'Slack',
        category: 'collaboration',
        description: '团队沟通协作平台，支持频道、消息集成和视频会议。',
        tags: ['沟通', '团队', '即时通讯'],
        url: 'https://slack.com',
        icon: 'message-square'
    },
    {
        id: 128,
        name: 'Trello',
        category: 'collaboration',
        description: '直观的任务看板工具，使用卡片和面板管理项目进度。',
        tags: ['项目管理', '看板', '任务'],
        url: 'https://trello.com',
        icon: 'layout'
    },
    {
        id: 129,
        name: 'Jira',
        category: 'collaboration',
        description: '专业的项目和问题跟踪工具，适合敏捷开发团队。',
        tags: ['项目管理', '敏捷', 'Sprint'],
        url: 'https://www.atlassian.com/software/jira',
        icon: 'clipboard-list'
    },
    {
        id: 130,
        name: 'Discord',
        category: 'collaboration',
        description: '面向社区的聊天平台，支持语音、视频和屏幕共享。',
        tags: ['社区', '聊天', '语音'],
        url: 'https://discord.com',
        icon: 'headphones'
    },
    {
        id: 131,
        name: 'Zoom',
        category: 'collaboration',
        description: '视频会议平台，稳定流畅，适合远程办公和在线会议。',
        tags: ['视频会议', '远程', '办公'],
        url: 'https://zoom.us',
        icon: 'video'
    },
    {
        id: 132,
        name: 'Asana',
        category: 'collaboration',
        description: '团队工作管理平台，追踪项目进展和任务分配。',
        tags: ['项目管理', '团队', '任务'],
        url: 'https://asana.com',
        icon: 'check-square'
    },
    {
        id: 133,
        name: 'Monday.com',
        category: 'collaboration',
        description: '可视化工作操作系统，灵活管理团队工作流程。',
        tags: ['工作管理', '可视化', '流程'],
        url: 'https://monday.com',
        icon: 'layout-grid'
    },
    {
        id: 134,
        name: 'Linear',
        category: 'collaboration',
        description: '现代化的项目管理工具，为软件团队打造的极速体验。',
        tags: ['项目管理', '软件团队', '现代化'],
        url: 'https://linear.app',
        icon: 'activity'
    },
    {
        id: 135,
        name: 'ClickUp',
        category: 'collaboration',
        description: '一体化的项目管理平台，超多功能集于一身。',
        tags: ['项目管理', '一体化', '协作'],
        url: 'https://clickup.com',
        icon: 'mouse-pointer'
    },
    {
        id: 136,
        name: 'Basecamp',
        category: 'collaboration',
        description: '简单好用的项目管理工具，集成所有团队协作功能。',
        tags: ['项目管理', '简单', '集成'],
        url: 'https://basecamp.com',
        icon: 'home'
    },
    {
        id: 137,
        name: 'Notion',
        category: 'collaboration',
        description: '一体化工作空间，笔记、文档、任务管理、项目协作。',
        tags: ['笔记', '文档', '协作'],
        url: 'https://notion.so',
        icon: 'file-text'
    },
    {
        id: 138,
        name: 'Confluence',
        category: 'collaboration',
        description: 'Atlassian团队知识管理平台，创建和管理团队文档。',
        tags: ['知识管理', '文档', 'Atlassian'],
        url: 'https://www.atlassian.com/software/confluence',
        icon: 'book'
    },
    {
        id: 139,
        name: 'Miro',
        category: 'collaboration',
        description: '在线协作白板，支持头脑风暴、流程图和敏捷 ceremonies。',
        tags: ['白板', '协作', '头脑风暴'],
        url: 'https://miro.com',
        icon: 'layout-grid'
    },
    {
        id: 140,
        name: 'Mural',
        category: 'collaboration',
        description: '可视化协作平台，远程团队的创意工作空间。',
        tags: ['可视化', '协作', '远程'],
        url: 'https://www.mural.co',
        icon: 'grid'
    },
    {
        id: 141,
        name: 'Figma',
        category: 'collaboration',
        description: '协作设计工具，支持多人实时编辑和评论反馈。',
        tags: ['设计', '协作', '实时'],
        url: 'https://figma.com',
        icon: 'users'
    },
    {
        id: 142,
        name: 'Zeplin',
        category: 'collaboration',
        description: '设计师和开发者协作平台，自动生成设计规范和代码。',
        tags: ['设计', '协作', '规范'],
        url: 'https://zeplin.io',
        icon: 'layers'
    },
    {
        id: 143,
        name: 'Loom',
        category: 'collaboration',
        description: '异步视频消息工具，录制屏幕并快速分享。',
        tags: ['视频', '异步', '屏幕录制'],
        url: 'https://loom.com',
        icon: 'video'
    },
    {
        id: 144,
        name: 'Calendly',
        category: 'collaboration',
        description: '会议安排工具自动化，让预约变得简单。',
        tags: ['日程', '预约', '自动化'],
        url: 'https://calendly.com',
        icon: 'calendar'
    },
    {
        id: 145,
        name: 'Miro',
        category: 'collaboration',
        description: '在线白板和协作平台，支持头脑风暴和流程图。',
        tags: ['白板', '头脑风暴', '协作'],
        url: 'https://miro.com',
        icon: 'layout-grid'
    },
    {
        id: 146,
        name: 'FigJam',
        category: 'collaboration',
        description: 'Figma旗下的在线白板工具，团队头脑风暴好帮手。',
        tags: ['白板', 'Figma', '头脑风暴'],
        url: 'https://www.figma.com/figjam',
        icon: 'pen-tool'
    },
    {
        id: 147,
        name: 'Miro',
        category: 'collaboration',
        description: '协作白板平台，适合设计冲刺和团队协作。',
        tags: ['白板', '协作', '设计冲刺'],
        url: 'https://miro.com',
        icon: 'layout'
    },

    // ============ Deployment & DevOps ============
    {
        id: 148,
        name: 'Vercel',
        category: 'frontend',
        description: '前端云平台，支持Next.js等框架的快速部署。',
        tags: ['部署', '前端', '云'],
        url: 'https://vercel.com',
        icon: 'triangle'
    },
    {
        id: 149,
        name: 'Netlify',
        category: 'frontend',
        description: '现代化前端部署平台，支持静态网站和Serverless。',
        tags: ['部署', 'JAMstack', 'CDN'],
        url: 'https://www.netlify.com',
        icon: 'globe'
    },
    {
        id: 150,
        name: 'Cloudflare Pages',
        category: 'frontend',
        description: 'Cloudflare的静态网站托管服务，全球CDN加速。',
        tags: ['部署', 'CDN', '静态网站'],
        url: 'https://pages.cloudflare.com',
        icon: 'cloud'
    },
    {
        id: 151,
        name: 'GitHub Pages',
        category: 'frontend',
        description: 'GitHub提供的免费静态网站托管服务。',
        tags: ['部署', '免费', 'GitHub'],
        url: 'https://pages.github.com',
        icon: 'github'
    },
    {
        id: 152,
        name: 'Surge',
        category: 'frontend',
        description: '简单的静态网站部署工具，命令行一键发布。',
        tags: ['部署', 'CLI', '静态'],
        url: 'https://surge.sh',
        icon: 'upload'
    },
    {
        id: 153,
        name: 'Render',
        category: 'frontend',
        description: '云托管平台，支持静态网站、Web服务和数据库。',
        tags: ['云托管', 'Web服务', '部署'],
        url: 'https://render.com',
        icon: 'server'
    },
    {
        id: 154,
        name: 'Railway',
        category: 'frontend',
        description: '现代应用部署平台，极简的配置和部署流程。',
        tags: ['部署', '现代', '易用'],
        url: 'https://railway.app',
        icon: 'train'
    },
    {
        id: 155,
        name: 'Fly.io',
        category: 'frontend',
        description: '将应用部署到全球边缘网络，近乎零延迟。',
        tags: ['边缘计算', '部署', '全球'],
        url: 'https://fly.io',
        icon: 'globe'
    },
    {
        id: 156,
        name: 'Heroku',
        category: 'frontend',
        description: '老牌云应用平台，简单部署各种编程语言应用。',
        tags: ['云平台', 'PaaS', '部署'],
        url: 'https://www.heroku.com',
        icon: 'cloud'
    },
    {
        id: 157,
        name: 'AWS Amplify',
        category: 'frontend',
        description: 'AWS的前端和移动开发平台，快速构建全栈应用。',
        tags: ['AWS', '全栈', '前端'],
        url: 'https://aws.amazon.com/amplify',
        icon: 'bar-chart'
    },
    {
        id: 158,
        name: 'DigitalOcean App Platform',
        category: 'frontend',
        description: 'DigitalOcean的应用托管服务，简单部署代码。',
        tags: ['托管', 'DigitalOcean', '部署'],
        url: 'https://www.digitalocean.com/products/app-platform',
        icon: 'rocket'
    },
    {
        id: 159,
        name: 'Glitch',
        category: 'frontend',
        description: '有趣的在线IDE和托管平台，即时预览和分享。',
        tags: ['在线IDE', '托管', '协作'],
        url: 'https://glitch.com',
        icon: 'zap'
    },
    {
        id: 160,
        name: 'CodeSandbox',
        category: 'frontend',
        description: '在线代码沙箱，快速创建和分享前端项目。',
        tags: ['沙箱', '在线IDE', '前端'],
        url: 'https://codesandbox.io',
        icon: 'code'
    },
    {
        id: 161,
        name: 'StackBlitz',
        category: 'frontend',
        description: '基于WebAssembly的在线IDE，极速启动项目。',
        tags: ['在线IDE', 'WebAssembly', '极速'],
        url: 'https://stackblitz.com',
        icon: 'zap'
    },
    {
        id: 162,
        name: 'Replit',
        category: 'frontend',
        description: '在线编程平台，支持50多种编程语言的云端IDE。',
        tags: ['在线IDE', '多语言', '协作'],
        url: 'https://replit.com',
        icon: 'play'
    },
    {
        id: 163,
        name: 'Codepen',
        category: 'frontend',
        description: '前端代码展示和实验平台，发现和学习优秀代码。',
        tags: ['前端', '展示', '社区'],
        url: 'https://codepen.io',
        icon: 'codepen'
    },
    {
        id: 164,
        name: 'JSFiddle',
        category: 'frontend',
        description: '经典的前端代码测试和分享工具。',
        tags: ['前端', '测试', '分享'],
        url: 'https://jsfiddle.net',
        icon: 'code'
    },
    {
        id: 165,
        name: 'RunKit',
        category: 'frontend',
        description: 'Node.js在线环境和包浏览工具。',
        tags: ['Node.js', '在线', 'npm'],
        url: 'https://runkit.com',
        icon: 'package'
    },
    {
        id: 166,
        name: 'agent-qa',
        category: 'frontend',
        description: '自然语言网页与移动端测试，内置持久化记忆和自我改进。需 Node.js 24+；早期项目，FSL-1.1-ALv2 限制竞争性商用，模型与设备费用另计。',
        tags: ['QA', '自然语言', '记忆'],
        url: 'https://vostride.com',
        icon: 'code-2'
    }
];

// =====================================================
// DOM Elements
// =====================================================
const $toolsGrid = $('#toolsGrid');
const $searchInput = $('#searchInput');
const $searchClear = $('#searchClear');
const $filterTabs = $('.filter-tab');
const $resultsCount = $('#resultsCount');
const $noResults = $('#noResults');
const $backToTop = $('#backToTop');

// =====================================================
// State Management
// =====================================================
let currentCategory = 'all';
let searchQuery = '';

// =====================================================
// Initialize Application
// =====================================================
$(document).ready(function() {
    initializeApp();
    setupEventListeners();
    setupScrollEffects();
    createParticles();
});

function initializeApp() {
    // Render initial tools
    renderTools(toolsData);
    updateResultsCount(toolsData.length);
    
    // Update tools count in hero section
    $('#toolsCount').text(toolsData.length + '+');
}

// =====================================================
// Event Listeners
// =====================================================
function setupEventListeners() {
    // Search functionality
    let searchTimeout;
    $searchInput.on('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            searchQuery = $(this).val().toLowerCase().trim();
            filterAndRenderTools();
            toggleClearButton();
        }, 300);
    });

    // Clear search
    $searchClear.on('click', function() {
        $searchInput.val('');
        searchQuery = '';
        filterAndRenderTools();
        toggleClearButton();
        $searchInput.focus();
    });

    // Category filter tabs
    $filterTabs.on('click', function() {
        const category = $(this).data('category');
        currentCategory = category;
        
        // Update active tab
        $filterTabs.removeClass('active');
        $(this).addClass('active');
        
        filterAndRenderTools();
    });

    // Footer category links
    $('.footer-list a[data-category]').on('click', function(e) {
        e.preventDefault();
        const category = $(this).data('category');
        currentCategory = category;
        
        // Update active tab
        $filterTabs.removeClass('active');
        $(`.filter-tab[data-category="${category}"]`).addClass('active');
        
        // Scroll to tools section
        $('html, body').animate({
            scrollTop: $('#tools').offset().top - 100
        }, 500);
        
        filterAndRenderTools();
    });

    // Back to top
    $backToTop.on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // Navigation active state
    $(window).on('scroll', function() {
        updateActiveNavLink();
    });
}

// =====================================================
// Scroll Effects
// =====================================================
function setupScrollEffects() {
    $(window).on('scroll', function() {
        // Back to top button visibility
        if ($(this).scrollTop() > 300) {
            $backToTop.addClass('visible');
        } else {
            $backToTop.removeClass('visible');
        }

        // Header shadow
        if ($(this).scrollTop() > 50) {
            $('.header').css('box-shadow', '0 4px 20px rgba(0, 0, 0, 0.3)');
        } else {
            $('.header').css('box-shadow', 'none');
        }
    });
}

function updateActiveNavLink() {
    const scrollPos = $(window).scrollTop() + 150;
    
    $('section[id]').each(function() {
        const sectionTop = $(this).offset().top;
        const sectionBottom = sectionTop + $(this).outerHeight();
        const sectionId = $(this).attr('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
            $('.nav-link').removeClass('active');
            $(`.nav-link[href="#${sectionId}"]`).addClass('active');
        }
    });
}

// =====================================================
// Filter & Render Tools
// =====================================================
function filterAndRenderTools() {
    let filteredTools = toolsData;
    
    // Filter by category
    if (currentCategory !== 'all') {
        filteredTools = filteredTools.filter(tool => tool.category === currentCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
        filteredTools = filteredTools.filter(tool => 
            tool.name.toLowerCase().includes(searchQuery) ||
            tool.description.toLowerCase().includes(searchQuery) ||
            tool.tags.some(tag => tag.toLowerCase().includes(searchQuery))
        );
    }
    
    renderTools(filteredTools);
    updateResultsCount(filteredTools.length);
}

function renderTools(tools) {
    $toolsGrid.empty();
    
    if (tools.length === 0) {
        $noResults.show();
        $toolsGrid.hide();
        return;
    }
    
    $noResults.hide();
    $toolsGrid.show();
    
    tools.forEach((tool, index) => {
        const cardHtml = createToolCard(tool, index);
        $toolsGrid.append(cardHtml);
    });
    
    // Reinitialize Lucide icons for new elements
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function createToolCard(tool, index) {
    const categoryLabels = {
        frontend: '前端开发',
        design: '设计资源',
        backend: '后端工具',
        learning: '学习资源',
        collaboration: '协作工具',
        api: 'API工具'
    };
    
    const tagsHtml = tool.tags.map(tag => 
        `<span class="tool-tag">${tag}</span>`
    ).join('');
    
    return `
        <div class="tool-card" style="animation-delay: ${index * 30}ms" data-id="${tool.id}">
            <div class="tool-header">
                <div class="tool-icon ${tool.category}">
                    <i data-lucide="${tool.icon}"></i>
                </div>
                <div class="tool-info">
                    <h3 class="tool-name">${tool.name}</h3>
                    <span class="tool-category">${categoryLabels[tool.category] || tool.category}</span>
                </div>
            </div>
            <p class="tool-description">${tool.description}</p>
            <div class="tool-tags">
                ${tagsHtml}
            </div>
            <div class="tool-footer">
                <a href="${tool.url}" target="_blank" class="tool-link" onclick="event.stopPropagation()">
                    <span>访问网站</span>
                    <i data-lucide="external-link"></i>
                </a>
                <button class="tool-bookmark" title="收藏">
                    <i data-lucide="bookmark"></i>
                </button>
            </div>
        </div>
    `;
}

// =====================================================
// UI Helpers
// =====================================================
function updateResultsCount(count) {
    $resultsCount.text(`显示 ${count} 个工具`);
}

function toggleClearButton() {
    if ($searchInput.val()) {
        $searchClear.show();
    } else {
        $searchClear.hide();
    }
}

// =====================================================
// Particle Background Effect
// =====================================================
function createParticles() {
    const $particles = $('#particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = $('<div class="particle"></div>');
        const size = Math.random() * 3 + 1;
        const position = {
            x: Math.random() * 100,
            y: Math.random() * 100
        };
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        particle.css({
            position: 'absolute',
            width: `${size}px`,
            height: `${size}px`,
            background: 'rgba(102, 126, 234, 0.3)',
            borderRadius: '50%',
            left: `${position.x}%`,
            top: `${position.y}%`,
            animation: `float ${duration}s ease-in-out ${delay}s infinite`,
            pointerEvents: 'none'
        });
        
        $particles.append(particle);
    }
    
    // Add particle animation styles
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        .particle {
            animation: float 15s ease-in-out infinite;
        }
        @keyframes float {
            0%, 100% {
                transform: translateY(0) translateX(0);
                opacity: 0.3;
            }
            25% {
                transform: translateY(-20px) translateX(10px);
                opacity: 0.6;
            }
            50% {
                transform: translateY(-10px) translateX(-10px);
                opacity: 0.4;
            }
            75% {
                transform: translateY(-30px) translateX(5px);
                opacity: 0.5;
            }
        }
    `;
    document.head.appendChild(styleSheet);
}

// =====================================================
// Utility Functions
// =====================================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// =====================================================
// Smooth Scroll for Anchor Links
// =====================================================
$(document).on('click', 'a[href^="#"]', function(e) {
    const targetId = $(this).attr('href');
    if (targetId === '#') return;
    
    e.preventDefault();
    const targetElement = $(targetId);
    
    if (targetElement.length) {
        $('html, body').animate({
            scrollTop: targetElement.offset().top - 100
        }, 500);
    }
});

// =====================================================
// Tool Card Click Handler
// =====================================================
$(document).on('click', '.tool-card', function() {
    const toolId = $(this).data('id');
    const tool = toolsData.find(t => t.id === toolId);
    
    if (tool) {
        window.open(tool.url, '_blank');
    }
});

// =====================================================
// Bookmark Toggle
// =====================================================
$(document).on('click', '.tool-bookmark', function(e) {
    e.stopPropagation();
    const $btn = $(this);
    const $icon = $btn.find('i');
    
    // Toggle bookmark state (in a real app, save to localStorage)
    if ($btn.hasClass('bookmarked')) {
        $btn.removeClass('bookmarked');
        $icon.attr('data-lucide', 'bookmark');
    } else {
        $btn.addClass('bookmarked');
        $icon.attr('data-lucide', 'bookmark-check');
        
        // Add pulse animation
        $btn.css('transform', 'scale(1.2)');
        setTimeout(() => {
            $btn.css('transform', 'scale(1)');
        }, 200);
    }
    
    // Re-render icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// =====================================================
// Keyboard Shortcuts
// =====================================================
$(document).on('keydown', function(e) {
    // Press '/' to focus search
    if (e.key === '/' && !$searchInput.is(':focus')) {
        e.preventDefault();
        $searchInput.focus();
    }
    
    // Press 'Escape' to clear search
    if (e.key === 'Escape' && $searchInput.is(':focus')) {
        $searchInput.val('').blur();
        searchQuery = '';
        filterAndRenderTools();
        toggleClearButton();
    }
});

// =====================================================
// Console Easter Egg
// =====================================================
console.log('%c🚀 DevTool Hub', 'font-size: 24px; font-weight: bold; color: #667eea;');
console.log('%c为开发者打造的工具导航平台', 'font-size: 14px; color: #a0a0b0;');
console.log('%c贡献代码: https://github.com', 'font-size: 12px; color: #667eea;');
