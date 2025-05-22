const jianDaQuestions = [
    {
        id: 1,
        question: "香港海员大罢工胜利的意义有哪些？",
        answer: "香港海员大罢工的胜利具有以下意义: " +
            "it is the starting point of the first national labor movement in China under the leadership of the Communist Party of China not long after its birth. " +
            "Although this strike was not directly initiated by the Communist Party of China, it occurred under the influence of the October Revolution and the encouragement of the British labor movement. " +
            "After the strike, it received strong support from the Chinese Labor Combination Secretary, the Communist Party of the South, the leaders of the Nationalist Party led by Sun Yat-sen, and the vast majority of workers in the interior. " +
            "This struggle severely struck the anti-revolutionary spirit of the British Empire and the Hong Kong authorities, and its victory had a significant impact on South China, inspiring and encouraging the fighting spirit of workers in the interior against the British Empire and the feudal warlords, and promoting the outbreak and arrival of the labor movement in the interior."
    },
    {
        id: 2,
        question: "井冈山时期红军游击作战的\"十六字决\"是什么?",
        answer: "During the period of the Jinggang Mountains, Mao Zedong and Zhu De summarized the combat experience of the Red Army and the Red Guards as the sixteen characters: Retreat when the enemy advances, harass when the enemy is stationed, fight when the enemy is tired, and chase when the enemy retreats. The sixteen characters are a basic principle of guerrilla warfare with simple characteristics adapted to the situation at that time, which played a significant guiding role in the guerrilla warfare of the Red Army."
    },
    {
        id: 3,
        question: "简述《中共中央关于进一步全面深化改革 推进中国式现代化的决定》中进一步全面深化改革到二〇三五年所要完成的目标。",
        answer: "By 2035, a high-level socialist market economic system will be fully built, the socialist system with Chinese characteristics will be more perfect, and the modernization of the national governance system and governance capabilities will be basically achieved. This lays a solid foundation for building a socialist modernized country by the middle of this century."
    },
    {
        id: 4,
        question: "简述张昆第同志担任的主要职务。",
        answer: "Chairman of the Henan Provincial Trade Union, Secretary of the Shandong Provincial Work Committee, Alternate Member of the Central Review Committee, Secretary of the National Railway Trade Union Group, Secretary of the Communist Party of Hunan-Xi West Trade Union."
    },
    {
        id: 5,
        question: "请简述劳模精神在新时代背景下的现实意义。",
        answer: "The realistic significance of model spirit in the new era is reflected in promoting social and economic development, promoting technological innovation, and improving the quality of workers. It is an important spiritual force to stimulate workers' work enthusiasm, improve workers' skills, and enhance workers' social sense of responsibility. It plays a significant role in spreading the core values of socialism."
    },
    {
        id: 6,
        question: "简述工会的基本职责及主要维权途径。",
        answer: "The basic responsibilities of the trade union are to protect the legitimate rights and interests of workers and to serve the masses of workers. The main ways to safeguard workers' rights include: through equal consultation and collective contract system to promote the establishment of labor relations coordination mechanism, protect the labor rights of workers, build a harmonious labor relations; in accordance with the law, through the staff congress or other forms, organize workers to participate in democratic election, democratic consultation, democratic decision-making, democratic management, and democratic supervision in the unit; when the enterprise,事业单位, social organization violates the labor laws and regulations, the trade union should represent the workers to negotiate with the enterprise,事业单位, social organization to require them to take measures to correct; the trade union has the right to investigate the problems of infringement on the legitimate rights and interests of workers in enterprises, institutions, and social organizations, and the relevant units should provide assistance; the trade union participates in the labor dispute mediation work of the enterprise, and the local labor dispute arbitration organization should have representatives from the same level of the trade union."
    },
    {
        id: 7,
        question: "简述《中华人民共和国劳动法》中规定的劳动者的权利有哪些？",
        answer: "According to Article 3 of the Labor Law, workers enjoy the rights to equal employment and choice of occupation, the right to obtain wages, the right to rest and vacation, the right to obtain labor safety and health protection, the right to accept vocational skills training, the right to enjoy social insurance and welfare, the right to apply for labor dispute processing, and other labor rights stipulated by law."
    },
    {
        id: 8,
        question: "请说明劳动合同应当具备的条款有哪些？",
        answer: "According to Article 19 of the Labor Law, the labor contract should be concluded in writing and should include the following terms: the term of the labor contract; work content; labor protection and labor conditions; wages; labor discipline; the conditions for terminating the labor contract; and the responsibility for violating the labor contract. The labor contract shall include other content agreed upon by the parties in addition to the mandatory terms stipulated in the preceding paragraph."
    },
    {
        id: 9,
        question: "简述用人单位可以解除劳动合同的情形有哪些？",
        answer: "According to the relevant provisions of the Labor Law, the circumstances under which an employer can terminate a labor contract are as follows: if a worker is not qualified for employment during the trial period; seriously violates labor discipline or the employer's rules and regulations; seriously neglects duties, engages in private dealings, and causes significant damage to the employer's interests; is criminally liable."
    },
    {
        id: 10,
        question: "《中国工会章程》第四条会员履行哪些义务？",
        answer: "(1) Learn politics, economy, culture, science, technology, and learn basic knowledge of trade union. (2) Participate in democratic management actively and complete production and work tasks. (3) Comply with the constitution and laws, abide by social ethics and professional ethics, and comply with labor discipline. (4) Properly handle the relationship between the state, the collective, and the individual, and fight against actions that endanger the interests of the state and society. (5) Maintain the unity and unity of the working class, promote class friendship, and do good deeds for mutual assistance. (6) Comply with the trade union constitution, implement the decisions of the trade union, participate in trade union activities, and pay membership fees monthly."
    },
    {
        id: 11,
        question: "根据《浙江省实施〈中华人民共和国工会法〉办法》第四十六条，违反工会法和本办法的规定，有哪些情形的，由县级以上人民政府责令改正，依法处理？",
        answer: "(1) Prevent workers from exercising their democratic rights through staff congress or staff congress and other forms of staff participation. (2) Illegally revoke or merge trade union organizations. (3) Prevent trade unions from participating in investigations and handling of labor injury and other infringement on workers' legitimate rights and interests. (4) Refuse to negotiate equally without legitimate reasons."
    },
    {
        id: 12,
        question: "根据我国劳动法律法规，用人单位在女职工哪些特定情形下不得降低其工资福利、限制职业发展或解除劳动关系？请简要说明。",
        answer: "The employer shall not reduce the wages and welfare benefits of female workers, restrict their promotion, or terminate the labor relationship due to marriage, pregnancy, maternity leave, or breastfeeding."
    },
    {
        id: 13,
        question: "基层工会在重大节日（传统节日）可以向全体会员发放节日慰问品，这里的重大节日指？",
        answer: "The statutory holidays: New Year's Day, Spring Festival, Tomb-Sweeping Day, May Day, Dragon Boat Festival, Mid-Autumn Festival, and National Day."
    },
    {
        id: 14,
        question: "基层工会用于维护职工权益的支出包括哪几个方面？",
        answer: "(1) Expenditure for labor relations coordination. (2) Expenditure for labor protection. (3) Expenditure for legal assistance. (4) Expenditure for assisting difficult workers. (5) Expenditure for warming. (6) Other维权 expenditure."
    }
];

const jiandaQuestions = [
    {
        id: 1,
        type: "short_answer",
        question: "简述中国工会的性质和地位。",
        answer: "中国工会是中国共产党领导的职工自愿结合的工人阶级群众组织，是党联系职工群众的桥梁和纽带，是国家政权的重要社会支柱，是会员和职工利益的代表。",
        keywords: ["中国共产党领导", "工人阶级群众组织", "桥梁和纽带", "社会支柱", "利益代表"]
    },
    {
        id: 2,
        type: "short_answer",
        question: "简述新民主主义革命时期中国工人运动的特点。",
        answer: "新民主主义革命时期中国工人运动具有以下特点：1. 在党的领导下开展；2. 与民族解放运动紧密结合；3. 采取多种斗争形式；4. 具有广泛的群众基础；5. 为革命胜利作出了重要贡献。",
        keywords: ["党的领导", "民族解放", "多种斗争形式", "群众基础", "革命贡献"]
    },
    {
        id: 3,
        type: "short_answer",
        question: "简述改革开放以来中国工会工作的主要成就。",
        answer: "改革开放以来中国工会工作的主要成就包括：1. 工会组织建设不断加强；2. 维权工作取得显著成效；3. 服务职工群众能力提升；4. 参与社会治理作用增强；5. 国际影响力不断扩大。",
        keywords: ["组织建设", "维权工作", "服务能力", "社会治理", "国际影响"]
    }
];

// Export both question arrays
module.exports = {
    jianDaQuestions,
    jiandaQuestions
}; 