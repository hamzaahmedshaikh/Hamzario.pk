(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/Hamzario.pk/app/portfolio/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Portfolio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Hamzario$2e$pk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Hamzario.pk/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Hamzario$2e$pk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Hamzario.pk/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const projects = [
    {
        id: 1,
        title: "Hamza Clinic Hackathon",
        category: "Web-Based Applications",
        image: "/hamza-clinic-img.PNG",
        link: "https://hamza-clinic.vercel.app"
    },
    {
        id: 2,
        title: "Foodie Restaurant Website",
        category: "Web development",
        image: "/foodie-resturant-website.PNG",
        link: "https://hamzaahmedshaikh.github.io/foodie-resturant-website/"
    },
    {
        id: 3,
        title: "E-Commerce Store",
        category: "Web-Based Applications",
        image: "/ecom-web.PNG",
        link: "https://hamzaahmedshaikh.github.io/ecom-web/men.html"
    },
    {
        id: 4,
        title: "Parallax Scrolling",
        category: "Web development",
        image: "https://i.ibb.co/PMD3T7G/Parallax-scroll-animation-1.png",
        link: "https://hamzario.pk/scroll/"
    },
    {
        id: 5,
        title: "Bootstrap 5 Navbar",
        category: "Web development",
        image: "https://i.ibb.co/0tfbJMv/Animated-Tab-Bar.png",
        link: "https://hamzario.pk/tab-bar/"
    },
    {
        id: 6,
        title: "AI Chess Game",
        category: "Games",
        image: "https://i.ibb.co/NVbybCP/Hamza-Chess-Game.png",
        link: "https://hamzario.pk/Chess/"
    },
    {
        id: 7,
        title: "Calculator",
        category: "Web-Based Applications",
        image: "https://i.ibb.co/LtQfCrz/Hamza-Ahmed-Calculator-1.png",
        link: "https://hamzario.pk/calculator/"
    },
    {
        id: 8,
        title: "3D Rubik's Cube",
        category: "Games",
        image: "https://i.ibb.co/m0f2mKT/Cube.png",
        link: "https://hamzario.pk/Cube/"
    },
    {
        id: 9,
        title: "Tower Blocks",
        category: "Games",
        image: "https://i.ibb.co/4Vg8HbL/Screenshot-20230430-034425.jpg",
        link: "https://hamzario.pk/tower-blocks"
    },
    {
        id: 10,
        title: "Login-Signup Form",
        category: "Web development",
        image: "https://i.ibb.co/Sy9g1tr/Log-In-Sign-Up.png",
        link: "https://hamzario.pk/login/"
    },
    {
        id: 11,
        title: "Music Player",
        category: "Web-Based Applications",
        image: "https://i.ibb.co/stjrFrv/Music-Player-Hamza-Ahmed.png",
        link: "https://hamzario.pk/music-player/"
    },
    {
        id: 12,
        title: "Student ID Card Generator",
        category: "Web development",
        image: "https://i.ibb.co/1YjnrDc7/Capture.png",
        link: "https://hamzario.pk/student-id-card/"
    },
    {
        id: 13,
        title: "Food Menu App",
        category: "Web development",
        image: "https://i.ibb.co/Kp9dHsVL/Capture.jpg",
        link: "https://hamzario.pk/food-menu-app/"
    },
    {
        id: 14,
        title: "Data Cards",
        category: "Web development",
        image: "https://i.ibb.co/VWVMqzFJ/Capture.png",
        link: "https://hamzario.pk/show-data-in-cards/"
    },
    {
        id: 15,
        title: "Quiz App",
        category: "Web-Based Applications",
        image: "https://i.ibb.co/LX3fcKbc/Capture.png",
        link: "https://hamzario.pk/quiz-web-based-app/"
    }
];
function Portfolio() {
    _s();
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Hamzario$2e$pk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const [isSelectOpen, setIsSelectOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Hamzario$2e$pk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const categories = [
        'All',
        'Games',
        'Web-Based Applications',
        'Web development'
    ];
    const filteredProjects = filter === 'All' ? projects : projects.filter((p)=>p.category.toLowerCase() === filter.toLowerCase());
    const handleSelect = (category)=>{
        setFilter(category);
        setIsSelectOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Hamzario$2e$pk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "portfolio active",
        "data-page": "portfolio",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Hamzario$2e$pk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Hamzario$2e$pk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "h2 article-title",
                    children: "Portfolio"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Hamzario.pk/app/portfolio/page.jsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Hamzario.pk/app/portfolio/page.jsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Hamzario$2e$pk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "projects",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Hamzario$2e$pk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "filter-list",
                        children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Hamzario$2e$pk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "filter-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Hamzario$2e$pk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: filter === cat ? 'active' : '',
                                    onClick: ()=>setFilter(cat),
                                    children: cat
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Hamzario.pk/app/portfolio/page.jsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this)
                            }, cat, false, {
                                fileName: "[project]/OneDrive/Desktop/Hamzario.pk/app/portfolio/page.jsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Hamzario.pk/app/portfolio/page.jsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Hamzario$2e$pk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "filter-select-box",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Hamzario$2e$pk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `filter-select ${isSelectOpen ? 'active' : ''}`,
                                onClick: ()=>setIsSelectOpen(!isSelectOpen),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Hamzario$2e$pk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "select-value",
                                        children: filter === 'All' ? 'Select category' : filter
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Hamzario.pk/app/portfolio/page.jsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Hamzario$2e$pk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "select-icon",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Hamzario$2e$pk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ion-icon", {
                                            name: "chevron-down"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Hamzario.pk/app/portfolio/page.jsx",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Hamzario.pk/app/portfolio/page.jsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/Hamzario.pk/app/portfolio/page.jsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Hamzario$2e$pk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "select-list",
                                style: {
                                    display: isSelectOpen ? 'block' : 'none'
                                },
                                children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Hamzario$2e$pk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "select-item",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Hamzario$2e$pk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleSelect(cat),
                                            children: cat
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Hamzario.pk/app/portfolio/page.jsx",
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, this)
                                    }, cat, false, {
                                        fileName: "[project]/OneDrive/Desktop/Hamzario.pk/app/portfolio/page.jsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Hamzario.pk/app/portfolio/page.jsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Hamzario.pk/app/portfolio/page.jsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Hamzario$2e$pk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "project-list",
                        children: filteredProjects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Hamzario$2e$pk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "project-item active",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Hamzario$2e$pk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: project.link,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Hamzario$2e$pk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                            className: "project-img",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Hamzario$2e$pk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "project-item-icon-box",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Hamzario$2e$pk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ion-icon", {
                                                        name: "eye-outline"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/Hamzario.pk/app/portfolio/page.jsx",
                                                        lineNumber: 170,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Hamzario.pk/app/portfolio/page.jsx",
                                                    lineNumber: 169,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Hamzario$2e$pk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: project.image,
                                                    alt: project.title,
                                                    loading: "lazy",
                                                    width: "400",
                                                    height: "250",
                                                    style: {
                                                        objectFit: 'cover'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Hamzario.pk/app/portfolio/page.jsx",
                                                    lineNumber: 172,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/Hamzario.pk/app/portfolio/page.jsx",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Hamzario$2e$pk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "project-title",
                                            children: project.title
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Hamzario.pk/app/portfolio/page.jsx",
                                            lineNumber: 174,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Hamzario$2e$pk$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "project-category",
                                            children: project.category
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Hamzario.pk/app/portfolio/page.jsx",
                                            lineNumber: 175,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/Hamzario.pk/app/portfolio/page.jsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, this)
                            }, project.id, false, {
                                fileName: "[project]/OneDrive/Desktop/Hamzario.pk/app/portfolio/page.jsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Hamzario.pk/app/portfolio/page.jsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Hamzario.pk/app/portfolio/page.jsx",
                lineNumber: 133,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Hamzario.pk/app/portfolio/page.jsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
_s(Portfolio, "uapW9sioqEV/iykI1KBLTGpBoj4=");
_c = Portfolio;
var _c;
__turbopack_context__.k.register(_c, "Portfolio");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive_Desktop_Hamzario_pk_app_portfolio_page_jsx_0kqr6ij._.js.map