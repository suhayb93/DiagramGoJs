import * as go from 'gojs';



export const getSearchResult = async (value) => {

    //this is The format that should be received from BE (Django Code)
    //this static data should be removed when data from BE is ready 
    const mockData = {
        "search_result": [
            "{\"id\": \"6QnlioQBszxLmLDgI8VK\", \"title\": \"Study and Implementation of Chinese Intelligent Question Answering System Based on Restricted Domain\", \"url\": \"http://dx.doi.org/10.1109/WGEC.2009.175\", \"pdf\": [], \"snippet\": \"The current status of Chinese question answering system (QA) was introduced in the paper firstly. QA is the study on the methodology that returns exact answers to natural language questions. This paper ...\", \"abstract\": \"The current status of Chinese question answering system (QA) was introduced in the paper firstly. QA is the study on the methodology that returns exact answers to natural language questions. This paper attempts to increase the speed of the system responding to the users and accuracy of QA systems. To achieve this objective, the processing includes: Firstly, it introduces the conceptual theory and parts of intelligent question-answering system in detail. Secondly, it researches the Chinese word segmentation algorithm and its relevant technology. Thirdly, it puts forward the method of calculating sum of word frequency based on the whole sentence. It makes a better improvement for processing the problems. Fourthly, it brings forward the classification problem of specific fields, which is convenient for result matching according to the kind of problem of the system. In the end, this system completes the results extraction by calculating the weight. On the basis of theory and algorithm mentioned above, a question-answering system in the course ASP.Net field is implemented.\", \"authors\": \"Wei Tian, Wenjie Liu, Tinghuai Ma\", \"publication_date\": 2009, \"venue\": null, \"keywords_snippet\": {\"question-answering system\": 2.254099031394161, \"qa system\": 2.2330958284035978, \"algorithm design and analysis\": 1.9904689639927247, \"intelligent question-answering system\": 1.875375346659414}, \"keywords_rest\": {\"question answering system\": 1.7995390318510192, \"chinese question answering system\": 1.7746450086121206, \"chinese intelligent question answering system studies\": 1.6466409195662322, \"chinese intelligent question answering system implementation\": 1.4640100234192424, \"chinese intelligent question answering\": 1.2096913826588118, \"word frequency\": 1.1841621822924586, \"qa systems\": 1.1098882518274968, \"paper attempt\": 1.0608833659894823, \"paper firstly\": 1.0608833659894823, \"chinese word segmentation algorithm\": 1.0542111168104686, \"chinese word segmentation\": 1.0291083351940002, \"classification problem\": 1.005395347186149, \"question similarity\": 0.9816091229848916, \"word frequency calculating sum\": 0.9638013057241802, \"specific fields classification problem\": 0.9141825030388744, \"conceptual theory\": 0.8143883562667411, \"pattern classification\": 0.708128047961231, \"natural language processing\": 0.6306168202936454, \"accuracy\": 0.4663770140169273, \"restricted domain\": 0.4640679437460225, \"image segmentation\": 0.4466614870661484, \"natural language questions\": 0.4260164435520524, \"natural language\": 0.3963185415697854, \"artificial intelligence\": 0, \"computer aided instruction\": 0, \"databases\": 0, \"dictionaries\": 0, \"optimization\": 0, \"vector space model\": 0}, \"CSO_keywords\": [\"natural language questions\", \"database systems\", \"natural language processing\", \"chinese word segmentation\", \"natural languages\", \"artificial intelligence\", \"pattern classification\", \"qa system\", \"vector space models\", \"image segmentation\", \"word segmentation\", \"question answering\", \"computer aided instruction\"]}",
            "{\"id\": \"OwnlioQBszxLmLDgNMdA\", \"title\": \"A Learning Algorithm for Multimodal Grammar Inference\", \"url\": \"http://dx.doi.org/10.1109/TSMCB.2011.2155057\", \"pdf\": [], \"snippet\": \"The high costs of development and maintenance of multimodal grammars in integrating and understanding input in multimodal interfaces lead to the investigation of novel algorithmic solutions in automating ...\", \"abstract\": \"The high costs of development and maintenance of multimodal grammars in integrating and understanding input in multimodal interfaces lead to the investigation of novel algorithmic solutions in automating grammar generation and in updating processes. Many algorithms for context-free grammar inference have been developed in the natural language processing literature. An extension of these algorithms toward the inference of multimodal grammars is necessary for multimodal input processing. In this paper, we propose a novel grammar inference mechanism that allows us to learn a multimodal grammar from its positive samples of multimodal sentences. The algorithm first generates the multimodal grammar that is able to parse the positive samples of sentences and, afterward, makes use of two learning operators and the minimum description length metrics in improving the grammar description and in avoiding the over-generalization problem. The experimental results highlight the acceptable performances of the algorithm proposed in this paper since it has a very high probability of parsing valid sentences.\", \"authors\": \"Arianna D'Ulizia, Fernando Ferri, Patrizia Grifoni\", \"publication_date\": 2011, \"venue\": \"Systems, Man and Cybernetics\", \"keywords_snippet\": {}, \"keywords_rest\": {}, \"CSO_keywords\": [\"natural language processing\", \"natural languages\", \"context-free\", \"parsing algorithm\", \"syntactic structure\", \"multi-modal interfaces\"]}",
            "{\"id\": \"lgnlioQBszxLmLDgH8XS\", \"title\": \"Robust spoken instruction understanding for HRI\", \"url\": \"http://dx.doi.org/10.1109/HRI.2010.5453184\", \"pdf\": \"https://static.aminer.cn/upload/pdf/program/53e997ccb7602d9701fbf8ed_0.pdf\", \"snippet\": \"Natural human-robot interaction requires different and more robust models of language understanding (NLU) than non-embodied NLU systems. In particular, architectures are required that (1) process language ...\", \"abstract\": \"Natural human-robot interaction requires different and more robust models of language understanding (NLU) than non-embodied NLU systems. In particular, architectures are required that (1) process language incrementally in order to be able to provide early backchannel feedback to human speakers; (2) use pragmatic contexts throughout the understanding process to infer missing information; and (3) handle the underspecified, fragmentary, or otherwise ungrammatical utterances that are common in spontaneous speech. In this paper, we describe our attempts at developing an integrated natural language understanding architecture for HRI, and demonstrate its novel capabilities using challenging data collected in human-human interaction experiments.\", \"authors\": \"Rehj Cantrell, Matthias Scheutz, Paul Schermerhorn, Xuan Wu\", \"publication_date\": 2010, \"venue\": null, \"keywords_snippet\": {\"natural language processing\": 2.3578744817338535, \"process language\": 2.0720461611691565, \"integrated natural language understanding architecture\": 1.788630364079684, \"natural human-robot interaction\": 1.485242746021936}, \"keywords_rest\": {\"robust spoken instruction\": 1.466284827754856, \"human-robot interaction\": 1.3904773734691562, \"human-human interaction experiments\": 1.3255364060301966, \"HRI\": 1.2267126410360656, \"back channel feedback\": 0.9760445849021863, \"nonembodied NLU systems\": 0.9642192073465238, \"integrated architecture\": 0.769577303310492, \"dialogue interactions\": 0}, \"CSO_keywords\": [\"natural language processing\", \"natural language understanding\", \"human robot interaction\", \"dialogue\", \"natural languages\", \"robots\", \"human-human interactions\"]}",
            "{\"id\": \"2AnlioQBszxLmLDgMMYh\", \"title\": \"The naproche project controlled natural language proof checking of mathematical texts\", \"url\": \"http://dx.doi.org/10.1007/978-3-642-14418-9_11\", \"pdf\": \"https://static.aminer.cn/upload/pdf/program/53e997d7b7602d9701fcbd2e_0.pdf\", \"snippet\": \"This paper discusses the semi-formal language of mathematics and presents the Naproche CNL, a controlled natural language for mathematical authoring. Proof Representation Structures, an adaptation of ...\", \"abstract\": \"This paper discusses the semi-formal language of mathematics and presents the Naproche CNL, a controlled natural language for mathematical authoring. Proof Representation Structures, an adaptation of Discourse Representation Structures, are used to represent the semantics of texts written in the Naproche CNL. We discuss how the Naproche CNL can be used in formal mathematics, and present our prototypical Naproche system, a computer program for parsing texts in the Naproche CNL and checking the proofs in them for logical correctness.\", \"authors\": \"Marcos Cramer, Bernhard Fisseni, Peter Koepke, Daniel K\\u00fchlwein, Bernhard Schr\\u00f6der, Jip Veldman\", \"publication_date\": 2009, \"venue\": null, \"keywords_snippet\": {\"naproche cnl\": 4.871582625375932, \"prototypical naproche system\": 4.457651726930102, \"naproche project\": 4.270430843999906, \"formal language\": 2.2800965367165897}, \"keywords_rest\": {\"semi-formal language\": 2.2666429291831482, \"mathematical text\": 2.2624805628288094, \"mathematical authoring\": 2.2499144576580887, \"natural language proof checking\": 2.1794241358779347, \"controlled natural language\": 2.1312125293821826, \"proof representation structures\": 1.7967214990394862, \"discourse representation structures\": 1.6786802597770145, \"logical correctness\": 1.2184340949437427, \"computer program\": 1.154566227084243, \"formal mathematics\": 1.1048559325340048}, \"CSO_keywords\": [\"formal semantics\", \"formal languages\", \"natural languages\", \"parsing algorithm\", \"semantics\", \"controlled natural language\", \"mathematics\"]}",
            "{\"id\": \"kgnlioQBszxLmLDgEMT3\", \"title\": \"A Programming Notation for Tactical Reasoning\", \"url\": \"http://dx.doi.org/10.1007/BFb0047136\", \"pdf\": [], \"snippet\": \"A notation for expressing the control algorithms (subgoaling strategies) of natural deduction theorem provers is presented. The language provides tools for building widely known, fundamental theorem proving ...\", \"abstract\": \"A notation for expressing the control algorithms (subgoaling strategies) of natural deduction theorem provers is presented. The language provides tools for building widely known, fundamental theorem proving strategies and is independent of the problem area and inference rule system chosen, facilitating formulation of high level algorithms that can be compared, analyzed, and even ported across theorem proving systems. The notation is a simplification and generalization of the tactic language of Edinburgh LCF. Examples using a natural deduction system for propositional logic are given.\", \"authors\": \"David A. Schmidt\", \"publication_date\": 1984, \"venue\": \"Conference on Automated Deduction\", \"keywords_snippet\": {\"theorem prover\": 3.3042072318386295, \"theorem proving\": 2.8325684478949653, \"programming notation\": 2.451130439055673, \"natural deduction\": 2.2302241144820725}, \"keywords_rest\": {\"propositional logic\": 1.3279128985348603, \"tactical reasoning\": 1.2789695220838557, \"inference rule\": 1.1982017539867296}, \"CSO_keywords\": [\"propositional logic\", \"theorem provers\", \"inference\", \"reasoning\", \"natural deduction\"]}",
            "{\"id\": \"hAnlioQBszxLmLDgHsX9\", \"title\": \"A Pure Object-Oriented Embedding of Attribute Grammars\", \"url\": \"http://dx.doi.org/10.1016/j.entcs.2010.08.043\", \"pdf\": \"https://static.aminer.cn/upload/pdf/program/53e997ccb7602d9701fbf806_0.pdf\", \"snippet\": \"Attribute grammars are a powerful specification paradigm for many language processing tasks, particularly semantic analysis of programming languages. Recent attribute grammar systems use dynamic scheduling ...\", \"abstract\": \"Attribute grammars are a powerful specification paradigm for many language processing tasks, particularly semantic analysis of programming languages. Recent attribute grammar systems use dynamic scheduling algorithms to evaluate attributes by need. In this paper, we show how to remove the need for a generator, by embedding a dynamic approach in a modern, object-oriented programming language to implement a small, lightweight attribute grammar library. The Kiama attribution library has similar features to current generators, including cached, uncached, circular, higher-order and parameterised attributes, and implements new techniques for dynamic extension and variation of attribute equations. We use the Scala programming language because of its combination of object-oriented and functional features, support for domain-specific notations and emphasis on scalability. Unlike generators with specialised notation, Kiama attribute grammars use standard Scala notations such as pattern-matching functions for equations and mixins for composition. A performance analysis shows that our approach is practical for realistic language processing.\", \"authors\": \"Anthony M. Sloane, Lennart C. L. Kats, Eelco Visser\", \"publication_date\": 2010, \"venue\": null, \"keywords_snippet\": {\"attribute grammar\": 2.2890942193261683, \"domain specific language\": 2.0951289190020557, \"programming language\": 1.7908501848969582, \"object oriented programming languages\": 1.4541040280064823}, \"keywords_rest\": {\"dynamic scheduling\": 1.0865722622662517, \"compilers\": 0, \"domain specific languages\": 0, \"higher order\": 0, \"object oriented\": 0, \"pattern matching\": 0}, \"CSO_keywords\": [\"programming languages\", \"compiler\", \"object oriented\", \"semantic information\", \"object-oriented programming languages\", \"semantics\", \"attribute grammars\", \"object oriented programming\", \"performance analysis\"]}",
            "{\"id\": \"vwnlioQBszxLmLDgE8RA\", \"title\": \"Constraint Checking for XML-Based Language Specification by SAT Solver\", \"url\": \"http://dx.doi.org/10.1109/SSIRI-C.2010.15\", \"pdf\": [], \"snippet\": \"XML has been widely applied in kinds of areas and applications as a data exchange format. Recently, plenty of of languages based on XML emerge. There are many constraints specified by natural language ...\", \"abstract\": \"XML has been widely applied in kinds of areas and applications as a data exchange format. Recently, plenty of of languages based on XML emerge. There are many constraints specified by natural language in these XML-based language specifications to regulate the rules that are supposed to be obeyed by designers or programmers. To specify those constraints precisely, we present a relational calculus to capture them. Meanwhile, by means of the constraint solvers (SAT or SMT solver), we can decide that whether a XML-based document satisfies the constraints specified in its corresponding specification.\", \"authors\": \"Hao Xiao, Zheng Wang, Gegang Pu, Bin Gu\", \"publication_date\": 2010, \"venue\": \"Secure Software Integration and Reliability Improvement\", \"keywords_snippet\": {\"xml-based document\": 2.3611737940370108, \"xml-based language specification\": 2.3357102126978213, \"constraint handling\": 2.0964810661606594, \"xml\": 2.048365720110847}, \"keywords_rest\": {\"natural language\": 1.6809338960247973, \"natural language processing\": 1.6782138914358034, \"constraint solvers\": 1.6138756337794964, \"constraint specification\": 1.5458718754230074, \"constraint checking\": 1.4273959196215937, \"calculus\": 1.0818957935236964, \"relational calculus\": 1.0386993165671847, \"corresponding specification\": 1.0089541277499823, \"smt solver\": 1.0002782415533529, \"relational algebra\": 0.9980126711736521, \"specification languages\": 0.91575971220703, \"data exchange\": 0.8908607625728414, \"data exchange format\": 0.8894192154851877, \"natural languages\": 0.8312738062716876, \"sat solver\": 0.7071907291174436, \"application software\": 0, \"business\": 0, \"computational modeling\": 0, \"control engineering\": 0, \"satisfiability\": 0, \"software engineering\": 0, \"software reliability\": 0, \"strontium\": 0, \"web services\": 0}, \"CSO_keywords\": [\"engineering\", \"xml\", \"natural language understanding\", \"xml data\", \"relational algebra\", \"sat solvers\", \"information exchanges\", \"xquery\", \"formal specification\", \"constraint handling\", \"software\", \"software reengineering\", \"constraint solvers\", \"natural language processing\", \"iterative solvers\", \"natural languages\", \"xml (extensible markup language)\", \"sat\", \"data exchange\", \"xml schemas\", \"satisfiability\", \"software reliability\", \"software engineering\", \"xslt\"]}",
            "{\"id\": \"NAnlioQBszxLmLDgNMcF\", \"title\": \"Inductive databases in the relational model: the data as the bridge\", \"url\": \"http://dx.doi.org/10.1007/11733492_8\", \"pdf\": [], \"snippet\": \"We present a new and comprehensive approach to inductive databases in the relational model. The main contribution is a new inductive query language extending SQL, with the goal of supporting the whole ...\", \"abstract\": \"We present a new and comprehensive approach to inductive databases in the relational model. The main contribution is a new inductive query language extending SQL, with the goal of supporting the whole knowledge discovery process, from pre-processing via data mining to post-processing. A prototype system supporting the query language was developed in the SINDBAD (structured inductive database development) project. Setting aside models and focusing on distance-based and instance-based methods, closure can easily be achieved. An example scenario from the area of gene expression data analysis demonstrates the power and simplicity of the concept. We hope that this preliminary work will help to bring the fundamental issues, such as the integration of various pattern domains and data mining techniques, to the attention of the inductive database community.\", \"authors\": \"Stefan Kramer, Volker Aufschild, Andreas Hapfelmeier, Alexander Jarasch, Kristina Kessler, Stefan Reckow, J\\u00f6rg Wicker, Lothar Richter\", \"publication_date\": 2005, \"venue\": null, \"keywords_snippet\": {\"inductive database community\": 2.547090750841031, \"inductive databases\": 2.46210874020121, \"structured inductive database development\": 2.4567738704094033, \"new inductive query language\": 2.0327628301807255}, \"keywords_rest\": {\"data mining\": 1.791614014533746, \"data mining technique\": 1.7644391890870263, \"query language\": 1.6502809123895776, \"gene expression data analysis\": 1.2277581958174566, \"relational model\": 1.0894639962859514, \"instance-based method\": 0.9726741029613504, \"comprehensive approach\": 0.8798226804718693, \"fundamental issue\": 0.809665470003543, \"example scenario\": 0.8070657167515471}, \"CSO_keywords\": [\"data mining\", \"database systems\", \"knowledge discovery\", \"knowledge discovery process\", \"query languages\", \"data mining techniques\", \"relational data models\", \"sql\"]}",
            "{\"id\": \"swnlioQBszxLmLDgLsZd\", \"title\": \"Neural associative memories for the integration of language, vision and action in an autonomous agent.\", \"url\": \"http://dx.doi.org/10.1016/j.neunet.2009.01.011\", \"pdf\": [], \"snippet\": \"Language understanding is a long-standing problem in computer science. However, the human brain is capable of processing complex languages with seemingly no difficulties. This paper shows a model for ...\", \"abstract\": \"Language understanding is a long-standing problem in computer science. However, the human brain is capable of processing complex languages with seemingly no difficulties. This paper shows a model for language understanding using biologically plausible neural networks composed of associative memories. The model is able to deal with ambiguities on the single word and grammatical level. The language system is embedded into a robot in order to demonstrate the correct semantical understanding of the input sentences by letting the robot perform corresponding actions. For that purpose, a simple neural action planning system has been combined with neural networks for visual object recognition and visual attention control mechanisms.\", \"authors\": \"H Markert, U Kaufmann, Z Kara Kayikci, G Palm\", \"publication_date\": 2009, \"venue\": null, \"keywords_snippet\": {\"Functional neural modeling\": 3.497645973004338, \"Neural networks\": 2.768649431321233, \"Speech understanding\": 2.67965347661978, \"Language understanding\": 2.510872942532713}, \"keywords_rest\": {\"Associative memory\": 1.667297714854712, \"Visual object recognition\": 1.4682686417673463, \"Robot control\": 1.4000949601976647, \"Hybrid systems\": 0}, \"CSO_keywords\": [\"neural networks\", \"robots\", \"autonomous agents\", \"robot system\", \"object recognition\", \"computer science\"]}",
            "{\"id\": \"kwnlioQBszxLmLDgEcQH\", \"title\": \"High-performance implementation of wavelet algorithms on a standard PC\", \"url\": \"http://dx.doi.org/10.1016/S0141-9331(02)00011-X\", \"pdf\": [], \"snippet\": \"In this paper, we discuss the issue of implementing signal processing algorithms on a standard PC. As an example, we present a software implementation of a wavelet-based image processing algorithm. The ...\", \"abstract\": \"In this paper, we discuss the issue of implementing signal processing algorithms on a standard PC. As an example, we present a software implementation of a wavelet-based image processing algorithm. The implementation has been optimized for the Pentium III processor. Based on a careful analysis of the problem, we show that the implementation performance is limited by the memory bandwidth. This implies that more computational complexity could be allowed in the algorithm without decreasing the performance. In addition, we describe how to optimize the implementation performance at the C language level.\", \"authors\": \"Jarkko Niittylahti, Juha Lemmetti, Juhana Helovuo\", \"publication_date\": 2002, \"venue\": null, \"keywords_snippet\": {\"Software implementation\": 2.913755168401881, \"Signal processing algorithms\": 1.3692222418833475, \"Wavelet\": 1.1212379781157789, \"Pentium\": 0.9241336298974367}, \"keywords_rest\": {\"SIMD\": 0}, \"CSO_keywords\": [\"wavelet packet\", \"wavelet-based images\", \"wavelet transforms\", \"wavelet\", \"image processing\", \"signal processing\"]}"
        ],
        "tax_result": [
            {
                "name": "CSO",
                "text": "natural language processing",
                "parents": [
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/semantics",
                        "text": "semantics",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/linguistics",
                        "text": "linguistics",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/computer_science",
                        "text": "computer science",
                        "children_ids": [],
                        "parent_ids": []
                    }
                ],
                "children": [
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/translation_models",
                        "text": "translation models",
                        "children_ids": [
                            "https://cso.kmi.open.ac.uk/topics/smt_systems",
                            "https://cso.kmi.open.ac.uk/topics/phrase-based_statistical_machine_translation",
                            "https://cso.kmi.open.ac.uk/topics/statistical_machine_translation_system"
                        ],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/parallel_corpora",
                        "text": "parallel corpora",
                        "children_ids": [
                            "https://cso.kmi.open.ac.uk/topics/bilingual_corpora"
                        ],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/target_language",
                        "text": "target language",
                        "children_ids": [
                            "https://cso.kmi.open.ac.uk/topics/source_language"
                        ],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/translation_systems",
                        "text": "translation systems",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/language_pairs",
                        "text": "language pairs",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/automatic_evaluation",
                        "text": "automatic evaluation",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/translation_process",
                        "text": "translation process",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/automatic_translation",
                        "text": "automatic translation",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/bilingual_dictionary",
                        "text": "bilingual dictionary",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/human_evaluation",
                        "text": "human evaluation",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/speech-to-speech_translation",
                        "text": "speech-to-speech translation",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/parallel_text",
                        "text": "parallel text",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/english_sentences",
                        "text": "english sentences",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/pos_tagging",
                        "text": "pos tagging",
                        "children_ids": [
                            "https://cso.kmi.open.ac.uk/topics/pos_taggers"
                        ],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/name_recognition",
                        "text": "name recognition",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/qa_system",
                        "text": "qa system",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/question_classification",
                        "text": "question classification",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/answer_extraction",
                        "text": "answer extraction",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/natural_language_questions",
                        "text": "natural language questions",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/passage_retrieval",
                        "text": "passage retrieval",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/complex_questions",
                        "text": "complex questions",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/query_translations",
                        "text": "query translations",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/dialogue_management",
                        "text": "dialogue management",
                        "children_ids": [
                            "https://cso.kmi.open.ac.uk/topics/dialogue_manager"
                        ],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/spoken_dialogue",
                        "text": "spoken dialogue",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/spoken_language_understanding",
                        "text": "spoken language understanding",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/semantic_distance",
                        "text": "semantic distance",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/word_similarity",
                        "text": "word similarity",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/concept_similarity",
                        "text": "concept similarity",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/sentence_similarity",
                        "text": "sentence similarity",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/dependency_trees",
                        "text": "dependency trees",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/wordnet",
                        "text": "wordnet",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/subject_headings",
                        "text": "subject headings",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/hierarchical_dirichlet_process",
                        "text": "hierarchical dirichlet process",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/text_classification",
                        "text": "text classification",
                        "children_ids": [
                            "https://cso.kmi.open.ac.uk/topics/text_classifiers",
                            "https://cso.kmi.open.ac.uk/topics/reuters-21578",
                            "https://cso.kmi.open.ac.uk/topics/term_weighting",
                            "https://cso.kmi.open.ac.uk/topics/text_representation",
                            "https://cso.kmi.open.ac.uk/topics/text_classification_methods",
                            "https://cso.kmi.open.ac.uk/topics/document_categorization",
                            "https://cso.kmi.open.ac.uk/topics/document_frequency",
                            "https://cso.kmi.open.ac.uk/topics/text_feature",
                            "https://cso.kmi.open.ac.uk/topics/training_documents"
                        ],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/word_processing",
                        "text": "word processing",
                        "children_ids": [
                            "https://cso.kmi.open.ac.uk/topics/electronic_document"
                        ],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/text_mining",
                        "text": "text mining",
                        "children_ids": [
                            "https://cso.kmi.open.ac.uk/topics/text_mining_techniques",
                            "https://cso.kmi.open.ac.uk/topics/text_document",
                            "https://cso.kmi.open.ac.uk/topics/textual_data",
                            "https://cso.kmi.open.ac.uk/topics/text_data",
                            "https://cso.kmi.open.ac.uk/topics/text_representation"
                        ],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/text_summarization",
                        "text": "text summarization",
                        "children_ids": [
                            "https://cso.kmi.open.ac.uk/topics/automatic_text_summarization",
                            "https://cso.kmi.open.ac.uk/topics/automatic_summarization",
                            "https://cso.kmi.open.ac.uk/topics/sentence_extraction"
                        ],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/term_frequency",
                        "text": "term frequency",
                        "children_ids": [
                            "https://cso.kmi.open.ac.uk/topics/inverse_document_frequency",
                            "https://cso.kmi.open.ac.uk/topics/document_frequency"
                        ],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/document_classification",
                        "text": "document classification",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/textual_entailment",
                        "text": "textual entailment",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/sentiment_classification",
                        "text": "sentiment classification",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/text_clustering",
                        "text": "text clustering",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/text_recognition",
                        "text": "text recognition",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/text_detection",
                        "text": "text detection",
                        "children_ids": [
                            "https://cso.kmi.open.ac.uk/topics/text_region",
                            "https://cso.kmi.open.ac.uk/topics/scene_text",
                            "https://cso.kmi.open.ac.uk/topics/natural_scene_images"
                        ],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/text_lines",
                        "text": "text lines",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/free_texts",
                        "text": "free texts",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/document_representation",
                        "text": "document representation",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/text_entry",
                        "text": "text entry",
                        "children_ids": [
                            "https://cso.kmi.open.ac.uk/topics/text_input"
                        ],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/relation_extraction",
                        "text": "relation extraction",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/information_extraction_systems",
                        "text": "information extraction systems",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/web_information_extraction",
                        "text": "web information extraction",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/extracting_information",
                        "text": "extracting information",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/information_extraction_techniques",
                        "text": "information extraction techniques",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/dom_tree",
                        "text": "dom tree",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/free_texts",
                        "text": "free texts",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/computer_aided_language_translation",
                        "text": "computer aided language translation",
                        "children_ids": [
                            "https://cso.kmi.open.ac.uk/topics/translation_models",
                            "https://cso.kmi.open.ac.uk/topics/data_abstraction",
                            "https://cso.kmi.open.ac.uk/topics/translation_systems",
                            "https://cso.kmi.open.ac.uk/topics/telluric_prospecting",
                            "https://cso.kmi.open.ac.uk/topics/speech_translation"
                        ],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/statistical_machine_translation",
                        "text": "statistical machine translation",
                        "children_ids": [
                            "https://cso.kmi.open.ac.uk/topics/translation_models",
                            "https://cso.kmi.open.ac.uk/topics/parallel_corpora",
                            "https://cso.kmi.open.ac.uk/topics/word_alignment",
                            "https://cso.kmi.open.ac.uk/topics/language_pairs",
                            "https://cso.kmi.open.ac.uk/topics/translation_systems"
                        ],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/speech_transcriptions",
                        "text": "speech transcriptions",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/target_language",
                        "text": "target language",
                        "children_ids": [
                            "https://cso.kmi.open.ac.uk/topics/source_language"
                        ],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/speech-to-speech_translation",
                        "text": "speech-to-speech translation",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/automatic_evaluation",
                        "text": "automatic evaluation",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/opinion_mining",
                        "text": "opinion mining",
                        "children_ids": [
                            "https://cso.kmi.open.ac.uk/topics/product_reviews",
                            "https://cso.kmi.open.ac.uk/topics/sentiment_classification",
                            "https://cso.kmi.open.ac.uk/topics/semantic_orientation",
                            "https://cso.kmi.open.ac.uk/topics/polarity_classification"
                        ],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/grammatical_inference",
                        "text": "grammatical inference",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/grammatical_evolution",
                        "text": "grammatical evolution",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/grammar_induction",
                        "text": "grammar induction",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/formal_grammars",
                        "text": "formal grammars",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/chinese_word_segmentation",
                        "text": "chinese word segmentation",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/word_sense_disambiguation",
                        "text": "word sense disambiguation",
                        "children_ids": [
                            "https://cso.kmi.open.ac.uk/topics/word_sense"
                        ],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/wordnet",
                        "text": "wordnet",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/error_rate_%28er%29",
                        "text": "error rate (er)",
                        "children_ids": [],
                        "parent_ids": []
                    },
                    {
                        "id": "https://cso.kmi.open.ac.uk/topics/unit_selection",
                        "text": "unit selection",
                        "children_ids": [],
                        "parent_ids": []
                    }
                ]
            }
        ]
    }
    mockData.search_result = mockData.search_result.map(item => {
        return JSON.parse(item)
    })
    // mockData.text = value
    ////////////////////////////////////////////////////////////


    //this code should be uncommitted to send a request to BE 
    // data should be recived as json with above fomrat 
    // const reps = await fetch(`localhost:8000/?saarchQuety=${value}`, 'GET')



    const resp = await fetch(`http://localhost:8000/search?search_query=${value}&apiReq=true`, { method: "GET" })
    const data = await resp.json();
    // // return value should be the value that received from BE 
    // return data[0];
    // return mockData
    console.log(data);


}


//Initilization function that set diagram configs 
export function initDiagram() {
    const $ = go.GraphObject.make;
    // set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
    const diagram =
        $(go.Diagram,
            {
                'undoManager.isEnabled': true,  // must be set to allow for model change listening
                'clickCreatingTool.archetypeNodeData': { text: 'new node', color: 'lightblue' },

                model: new go.GraphLinksModel(
                    {
                        linkKeyProperty: 'key'  // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
                    })
            });

    // define a simple Node template
    diagram.nodeTemplate =
        $(go.Node, 'Auto',  // the Shape will go around the TextBlock
            new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(go.Point.stringify),
            { cursor: "pointer" },
            $(go.Shape, 'RoundedRectangle',
                { name: 'SHAPE', fill: 'white', strokeWidth: 0 },
                new go.Binding('fill', 'color')),
            $(go.TextBlock,
                { margin: 8, editable: false },  // some room around the text
                new go.Binding('text', 'text').makeTwoWay(),
            ),
            // $("TreeExpanderButton")
            {
                toolTip:  // define a tooltip for each node that displays the color as text
                    $("ToolTip",
                        $(go.TextBlock, { margin: 4 },
                            new go.Binding("text", "color"))
                    )  // end of Adornment
            }
        );

    diagram.toolTip =
        $("ToolTip",
            $(go.TextBlock, { margin: 4 },
                // use a converter to display information about the diagram model
                new go.Binding("text", "test data"))
        );

    diagram.layout = new go.LayeredDigraphLayout({ direction: 270, layerSpacing: 35 })
    return diagram;

}

