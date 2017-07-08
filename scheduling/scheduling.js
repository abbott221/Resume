var app = angular.module("scheduling", ["ngRoute"]);
app



.value('courseListValue', [
  {
    title: 'Analog Logic',
    department: 'ECE',
    number: 2020,
    link: false,
    focuses: [],
    hours: 3.0,
    included: true
  },
  {
    title: 'Digital Logic',
    department: 'ECE',
    number: 2060,
    link: false,
    focuses: [],
    hours: 3.0,
    included: true
  },
  {
    title: 'Software I: Software Components',
    desc: 'Intellectual foundations of software engineering; design-by-contract principles; mathematical modeling of software functionality; component-based software from client perspective; layered data representation.',
    department: 'CSE',
    number: 2221,
    link: true,
    focuses: [],
    hours: 4.0,
    included: true
  },
  {
    title: 'Software II: Software Development and Design',
    desc: 'Data representation using hashing, search trees, and linked data structures; algorithms for sorting; using trees for language processing; component interface design; best practices in Java.',
    department: 'CSE',
    number: 2231,
    link: true,
    focuses: [],
    hours: 4.0,
    included: true
  },
  {
    title: 'Foundations I: Discrete Structures',
    desc: 'Propositional and first-order logic; basic proof techniques; graphs, trees; analysis of algorithms; asymptotic analysis; recurrence relations.',
    department: 'CSE',
    number: 2321,
    link: true,
    focuses: [],
    hours: 3.0,
    included: true
  },
  {
    title: 'Foundations II: Data Structures and Algorithms',
    desc: 'Design/analysis of algorithms and data structures; divide-and-conquer; sorting and selection, search trees, hashing, graph algorithms, string matching; probabilistic analysis; randomized algorithms; NP-completeness.',
    department: 'CSE',
    number: 2331,
    link: true,
    focuses: [],
    hours: 3.0,
    included: true
  },
  {
    title: 'Systems I: Introduction to Low-Level Programming and Computer Organization',
    desc: 'Introduction to computer architecture at machine and assembly language level; pointers and addressing; C programming at machine level; computer organization.',
    department: 'CSE',
    number: 2421,
    link: true,
    focuses: [],
    hours: 4.0,
    included: true
  },
  {
    title: 'Systems II: Introduction to Operating Systems',
    desc: 'Introduction to operating system concepts: process, CPU scheduling, memory management, file system and storage, and multi-threaded programming.',
    department: 'CSE',
    number: 2431,
    link: true,
    focuses: [],
    hours: 3.0,
    included: true
  },
  {
    title: 'Software Engineering Techniques',
    desc: 'Software engineering issues, techniques, methodologies and technologies; software lifecycle activities: requirements analysis, architecture, design, testing, deployment, maintenance; project management; enterprise software systems; frameworks.',
    department: 'CSE',
    number: 3231,
    link: true,
    focuses: ['SWS'],
    hours: 3.0,
    included: true
  },
  {
    title: 'Software Requirements Analysis',
    desc: 'Information systems analysis; object-oriented analysis models and tools; use cases, system modeling using UML; requirements specification development; term project.',
    department: 'CSE',
    number: 3232,
    link: true,
    focuses: ['SWS'],
    hours: 3.0,
    included: true
  },
  {
    title: 'Introduction to Database Systems',
    desc: 'Database systems use; logical design; entity-relationship model; normalization; query languages and SQL; relational algebra and calculus; object relational databases; XML; active databases; database design project.',
    department: 'CSE',
    number: 3241,
    link: true,
    focuses: ['DBA'],
    hours: 3.0,
    included: true
  },
  {
    title: 'Principles of Programming Languages',
    desc: 'Formal languages and grammars; recursive descent parsing; data types, expressions, control structures, parameter passing; compilers and interpreters; memory management; functional programming principles.',
    department: 'CSE',
    number: 3341,
    link: true,
    focuses: ['SWS'],
    hours: 3.0,
    included: true
  },
  {
    title: 'Introduction to Computer Architecture',
    desc: 'Organization of hardware and software in modern computer systems, including instruction set design, processor control, ALU design, pipelining, multicores and accelerators, and memory subsystem design.',
    department: 'CSE',
    number: 3421,
    link: true,
    focuses: ['CSY'],
    hours: 3.0,
    included: true
  },
  {
    title: 'Computer Networking and Internet Technologies',
    desc: 'Computer networks, communication protocols, Internet TCP/IP and applications, wireless communications and network security.',
    department: 'CSE',
    number: 3461,
    link: true,
    focuses: ['CNT'],
    hours: 3.0,
    included: true
  },
  {
    title: 'Survey of Artificial Intelligence I:  Basic Techniques',
    desc: 'Survey of basic concepts and techniques in artificial intelligence, including problem solving, knowledge representation, and machine learning.',
    department: 'CSE',
    number: 3521,
    link: true,
    focuses: ['AIT'],
    hours: 3.0,
    included: true
  },
  {
    title: 'Computer Game and Animation Techniques',
    desc: 'Fundamental algorithms and mathematics in production of computer animation and video games, emphasizing control and rendering of animated characters.',
    department: 'CSE',
    number: 3541,
    link: true,
    focuses: ['CGG'],
    hours: 3.0,
    included: true
  },
  {
    title: 'Project: Design, Development, and Documentation of Web Applications',
    desc: 'Intensive group project involving design, development, and documentation of a web application; client-side and server-side scripting; communication skills emphasized; builds programming maturity.',
    department: 'CSE',
    number: 3901,
    link: true,
    focuses: ['CNT'],
    hours: 4.0,
    included: true
  },
  {
    title: 'Project: Design, Development, and Documentation of Interactive Systems',
    desc: 'Intensive group project involving design, development, and documentation of an interactive software system, a 2D interactive game; communication skills emphasized; builds programming maturity.',
    department: 'CSE',
    number: 3902,
    link: true,
    focuses: ['CGG'],
    hours: 4.0,
    included: true
  },
  {
    title: 'Information Security',
    desc: 'Introduction to security of digital information; threats and attacks; regulations; risk management; attack detection and response; cryptography; forensics; technical training and certifications.',
    department: 'CSE',
    number: 4471,
    link: true,
    focuses: ['ICA'],
    hours: 3.0,
    included: true
  },
  {
    title: 'Distributed Enterprise Computing',
    desc: 'Current application and middleware frameworks for distributed enterprise computing; XML; Enterprise Java; SOAP and REST web services; AJAX and JSON; enterprise service bus; Hadoop; mobile computing.',
    department: 'CSE',
    number: 5234,
    link: true,
    focuses: ['SWS'],
    hours: 3.0,
    included: true
  },
  {
    title: 'Applied Enterprise Architectures and Services',
    desc: 'Modeling/analysis of complex enterprise architectures; enterprise patterns (workflow, broker, warehousing); methods for service performance (lean, ontologies, data mining, etc.); emerging topics in semantic cyber-infrastructures, social computation.',
    department: 'CSE',
    number: 5235,
    link: true,
    focuses: ['SWS'],
    hours: 3.0,
    included: true
  },
  {
    title: 'Mobile Application Development',
    desc: 'Mobile application development frameworks; Architecture, design and engineering issues, techniques, methodologies for mobile application development.',
    department: 'CSE',
    number: 5236,
    link: true,
    focuses: ['SWS'],
    hours: 3.0,
    included: true
  },
  {
    title: 'Advanced Database Management Systems',
    desc: 'Transaction management; query processing and optimization; organization of database systems, advanced indexing, multi-dimensional data, similarity-based analysis, performance evaluation, new database applications.',
    department: 'CSE',
    number: 5242,
    link: true,
    focuses: ['DBA'],
    hours: 3.0,
    included: true
  },
  {
    title: 'Introduction to Data Mining',
    desc: 'Knowledge discovery, data mining, data preprocessing, data transformations; clustering, classification, frequent pattern mining, anomaly detection, graph and network analysis; applications.',
    department: 'CSE',
    number: 5243,
    link: true,
    focuses: ['AIT', 'DBA'],
    hours: 3.0,
    included: true
  },
  {
    title: 'Introduction to Cryptography',
    desc: 'Foundations of cryptography; mathematical formulations/proofs of security goals; theory and practical constructions of encryption schemes, MACs, digital signatures; zero-knowledge proof systems; cryptographic protocols.',
    department: 'CSE',
    number: 5351,
    link: true,
    focuses: ['ICA'],
    hours: 3.0,
    included: true
  },
  {
    title: 'Mobile Handset Systems and Networking',
    desc: 'Mobile handset architecture: processors, memory, I/O devices, sensors, virtual machine and power management; different ranges of wireless communication technologies; TCP/IP over wireless; mobile social networking.',
    department: 'CSE',
    number: 5432,
    link: true,
    focuses: ['CNT'],
    hours: 3.0,
    included: true
  },
  {
    title: 'Operating Systems Laboratory',
    desc: 'Introduction to the internals of operating systems; designing and implementing components within commercial operating systems: system calls, CPU scheduling, context switching, process management, memory management, file systems.',
    department: 'CSE',
    number: 5433,
    link: true,
    focuses: ['CSY'],
    hours: 3.0,
    included: true
  },
  {
    title: 'Comparative Operating Systems',
    desc: 'A careful examination of a number of representative computer operating systems.',
    department: 'CSE',
    number: 5434,
    link: true,
    focuses: ['CSY'],
    hours: 2.0,
    included: true
  },
  {
    title: 'Introduction to Parallel Computing',
    desc: 'Parallel programming models; sequential and parallel performance issues; high-performance computer architecture; design, analysis, implementation and performance evaluation of parallel algorithms.',
    department: 'CSE',
    number: 5441,
    link: true,
    focuses: ['CSY'],
    hours: 3.0,
    included: true
  },
  {
    title: 'Network Programming',
    desc: 'IP-based socket programming in C/C++, TinyOS programming in NesC.',
    department: 'CSE',
    number: 5462,
    link: true,
    focuses: ['CNT'],
    hours: 3.0,
    included: true
  },
  {
    title: 'Introduction to Wireless Networking',
    desc: 'Fundamental concepts in cellular design, Wireless-LANs, MANETs, and sensor networks will be explored. Specific topics will include propagation, fading, cellular-design, power-management, routing, scheduling, and control.',
    department: 'CSE',
    number: 5463,
    link: true,
    focuses: ['CNT'],
    hours: 3.0,
    included: true
  },
  {
    title: 'Information Security Projects',
    desc: 'Team-based projects: solve information security problems (mobile/static host/network hardening, intrusion detection and vulnerability scanning, forensics); results communicated through report writing and presentation.',
    department: 'CSE',
    number: 5472,
    link: true,
    focuses: ['ICA', 'CNT'],
    hours: 3.0,
    included: true
  },
  {
    title: 'Network Security',
    desc: 'Security threats and services, elements of cryptography, protocols for security services, network and internet security, advanced security issues and technologies.',
    department: 'CSE',
    number: 5473,
    link: true,
    focuses: ['ICA', 'CNT'],
    hours: 3.0,
    included: true
  },
  {
    title: 'Survey of Artificial Intelligence II: Advanced Techniques',
    desc: 'Survey of advanced concepts, techniques, and applications of artificial intelligence, including knowledge representation, learning, natural language understanding, and vision.',
    department: 'CSE',
    number: 5522,
    link: true,
    focuses: ['AIT'],
    hours: 3.0,
    included: true
  },
  {
    title: 'Machine Learning and Statistical Pattern Recognition',
    desc: 'Introduction to basic concepts of machine learning and statistical pattern recognition; techniques for classification, clustering and data representation and their theoretical analysis.',
    department: 'CSE',
    number: 5523,
    link: true,
    focuses: ['AIT'],
    hours: 3.0,
    included: true
  },
  {
    title: 'Computer Vision for Human-Computer Interaction',
    desc: 'Computer vision algorithms for use in human-computer interactive systems; image formation, image features, segmentation, shape analysis, object tracking, motion calculation, and applications.',
    department: 'CSE',
    number: 5524,
    link: true,
    focuses: ['AIT'],
    hours: 3.0,
    included: true
  },
  {
    title: 'Foundations of Speech and Language Processing',
    desc: 'Fundamentals of natural language processing, automatic speech recognition and speech synthesis; lab projects concentrating on building systems to process written and/or spoken language.',
    department: 'CSE',
    number: 5525,
    link: true,
    focuses: ['AIT'],
    hours: 3.0,
    included: true
  },
  {
    title: 'Introduction to Neural Networks',
    desc: 'Survey of fundamental methods and techniques of neural networks; single- and multi-layer perceptrons; radial-basis function networks; support vector machines; recurrent networks; supervised and unsupervised learning.',
    department: 'CSE',
    number: 5526,
    link: true,
    focuses: ['AIT'],
    hours: 3.0,
    included: true
  },
  {
    title: 'Real-Time Rendering',
    desc: 'Comprehensive list of topics in real-time rendering using OpenGL and GLSL, including coordinate systems, transformations, viewing, illumination, texture mapping, and shader-based algorithms.',
    department: 'CSE',
    number: 5542,
    link: true,
    focuses: ['CGG'],
    hours: 3.0,
    included: true
  },
  {
    title: 'Geometric Modeling',
    desc: 'Common algorithmic and mathematical techniques for modeling geometric objects in computer graphics and CAD applications; sample based modeling, mesh generation, and hierarchical representations.',
    department: 'CSE',
    number: 5543,
    link: true,
    focuses: ['CGG'],
    hours: 3.0,
    included: true
  },
  {
    title: 'Introduction to Scientific Visualization',
    desc: 'Principles and methods for visualizing data from measurements and calculations in physical and life sciences, and transactional and social disciplines; information visualization; scientific visualization.',
    department: 'CSE',
    number: 5544,
    link: true,
    focuses: ['CGG'],
    hours: 3.0,
    included: true
  },
  {
    title: 'Advanced Computer Graphics',
    desc: 'Advanced topics in computer graphics; image synthesis, lighting and rendering, sampling and material properties, volume rendering.',
    department: 'CSE',
    number: 5545,
    link: true,
    focuses: ['CGG'],
    hours: 3.0,
    included: true
  },
  {
    title: 'Capstone Design: Software Applications',
    desc: 'Capstone design project: application of software engineering techniques, methodologies and technologies in software lifecycle activities using enterprise software frameworks; teamwork, written and oral communication.',
    department: 'CSE',
    number: 5911,
    link: true,
    focuses: ['SWS'],
    hours: 4.0,
    included: true
  },
  {
    title: 'Capstone Design: Game Design and Development',
    desc: 'Capstone design project; conceptual and technical design and implementation of interactive game, integrating custom code and toolkits; teamwork, written and oral communication skills.',
    department: 'CSE',
    number: 5912,
    link: true,
    focuses: ['CGG'],
    hours: 4.0,
    included: true
  },
  {
    title: 'Capstone Design: Knowledge-Based Systems',
    desc: 'Capstone design project; conceptual and technical design; theory and practice of knowledge-based systems; teamwork, written and oral communication skills.',
    department: 'CSE',
    number: 5914,
    link: true,
    focuses: ['AIT'],
    hours: 4.0,
    included: true
  },
  {
    title: 'Computer Architecture',
    desc: 'Principles and tradeoffs behind the design of modern computer architectures, including instruction-level parallelism, memory system design, advanced cache architectures, cache coherence, multiprocessors, energy-efficient and embedded architectures.',
    department: 'CSE',
    number: 6421,
    link: true,
    focuses: ['CSY'],
    hours: 3.0,
    included: true
  },
  {
    title: 'Advanced Operating Systems',
    desc: 'Advanced topics in operating systems and concurrency; introduction to distributed systems.',
    department: 'CSE',
    number: 6431,
    link: true,
    focuses: ['CSY'],
    hours: 3.0,
    included: true
  },
  {
    title: 'Parallel Computing',
    desc: 'Principles and practice of parallel computing; design, implementation, and performance evaluation of parallel programs for shared-memory, distributed-memory and heterogeneous parallel systems.',
    department: 'CSE',
    number: 6441,
    link: true,
    focuses: ['CSY'],
    hours: 3.0,
    included: true
  }
])



.controller('SchedulerController', function(courseListValue) {
    var scheduler = this;
    scheduler.viewingFocus = false;
    scheduler.courses = courseListValue;

    scheduler.navigateToPic = function() {
        document.getElementById('graphs').scrollIntoView();
    };

    scheduler.navToPicFromTable = function(course) {
        document.getElementById('graphs').scrollIntoView();

        var courseString = course.department + ' ' + course.number;
        ga('send', 'event', 'Table', 'View Focus', courseString);
    };
    scheduler.navToPicFromSubPic = function(focusString) {
        document.getElementById('graphs').scrollIntoView();

        ga('send', 'event', 'Sub Pic', 'View Focus', focusString);
    };
    scheduler.navToPicFromMain = function(focusString) {
        document.getElementById('graphs').scrollIntoView();

        ga('send', 'event', 'Main Page', 'View Focus', focusString);
    };
})
.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "scheduling/components/no-selection.html"
    })
    .when("/scheduling", {
        templateUrl : "scheduling/components/no-selection.html"
    })
    .when("/original", {
        templateUrl : "scheduling/components/original.html"
    })
    .when("/AIT", {
        templateUrl : "scheduling/components/AIT.html"
    })
    .when("/DBA", {
        templateUrl : "scheduling/components/DBA.html"
    })
    .when("/SWS", {
        templateUrl : "scheduling/components/SWS.html"
    })
    .when("/CGG", {
        templateUrl : "scheduling/components/CGG.html"
    })
    .when("/ICA", {
        templateUrl : "scheduling/components/ICA.html"
    })
    .when("/CNT", {
        templateUrl : "scheduling/components/CNT.html"
    })
    .when("/CSY", {
        templateUrl : "scheduling/components/CSY.html"
    })
    .otherwise({
        redirectTo : "/scheduling"
    });
})
.run(function($rootScope, $location, $window){
    $rootScope.$on('$routeChangeSuccess', function(event) {
        // console.log($location.url());
        ga('set', 'page', $location.url());
        ga('send', 'pageview');
    });
    // $rootScope.$on('$viewContentLoaded', function(event) {
    //     // $window.ga('send', 'pageview', { page: $location.url() });
    //     console.log('CONTENT LOADED EVENT');
    //     console.log($location.url());
    //     console.log($location.path());
    // });
});
