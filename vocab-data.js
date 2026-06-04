const VOCAB_DATA = [
  {
    "id": 1,
    "word": "fair",
    "meaning": "공평한; 타당한; 상당한; 금발의, 흰 피부의; 박람회",
    "example": "Educational opportunities should be {fair} to all.",
    "blank": "fair"
  },
  {
    "id": 2,
    "word": "attempt",
    "meaning": "시도, 노력; 시도하다",
    "example": "The prisoner {attempted} to escape but failed.",
    "blank": "attempted"
  },
  {
    "id": 3,
    "word": "merely",
    "meaning": "한낱, 단지, 그저",
    "example": "I {merely} asked what I wanted to know.",
    "blank": "merely"
  },
  {
    "id": 4,
    "word": "comfort",
    "meaning": "위로, 위안; 편안함; 위로하다; 편하게 하다",
    "example": "After our long trip, it was a {comfort} to be home again.",
    "blank": "comfort"
  },
  {
    "id": 5,
    "word": "import",
    "meaning": "수입하다; ~의 뜻을 함축하다; 중요하다; 수입, 수입품; 의미; 중요성",
    "example": "The company needed to {import} materials from overseas.",
    "blank": "import"
  },
  {
    "id": 6,
    "word": "register",
    "meaning": "등록하다; 기록하다; 신청하다; 등록, 등록부",
    "example": "Students must {register} for classes before the deadline.",
    "blank": "register"
  },
  {
    "id": 7,
    "word": "accuse",
    "meaning": "고발[고소]하다, 비난하다",
    "example": "The man was {accused} of being a pickpocket.",
    "blank": "accused"
  },
  {
    "id": 8,
    "word": "include",
    "meaning": "포함하다; 넣다, 포함시키다",
    "example": "The price {includes} delivery charges.",
    "blank": "includes"
  },
  {
    "id": 9,
    "word": "exclude",
    "meaning": "제외하다; 차단하다",
    "example": "New products are {excluded} from the sale.",
    "blank": "excluded"
  },
  {
    "id": 10,
    "word": "approach",
    "meaning": "접근하다, 다가가다[오다]; 접근(법)",
    "example": "The time is {approaching} when I should submit the report.",
    "blank": "approaching"
  },
  {
    "id": 11,
    "word": "nevertheless",
    "meaning": "그럼에도 불구하고",
    "example": "He was deaf; {nevertheless}, he kept writing music.",
    "blank": "nevertheless"
  },
  {
    "id": 12,
    "word": "reliable",
    "meaning": "믿을 수 있는, 확실한",
    "example": "It is a little expensive, but it is {reliable}.",
    "blank": "reliable"
  },
  {
    "id": 13,
    "word": "promote",
    "meaning": "증진[촉진]하다; 승진시키다; 홍보하다",
    "example": "This herb {promotes} digestion.",
    "blank": "promotes"
  },
  {
    "id": 14,
    "word": "adjust",
    "meaning": "적응하다; 조정하다, 맞추다",
    "example": "Children are better at {adjusting} than adults.",
    "blank": "adjusting"
  },
  {
    "id": 15,
    "word": "predict",
    "meaning": "예언하다, 예측하다",
    "example": "No social scientist can accurately {predict} the future.",
    "blank": "predict"
  },
  {
    "id": 16,
    "word": "install",
    "meaning": "설치하다, 설비하다",
    "example": "The city has a plan to {install} new signs.",
    "blank": "install"
  },
  {
    "id": 17,
    "word": "alternative",
    "meaning": "대안, 선택 가능한 것; 대체 가능한, 대안이 되는",
    "example": "Do you have any {alternative} plans if rejected?",
    "blank": "alternative"
  },
  {
    "id": 18,
    "word": "variable",
    "meaning": "변하기 쉬운, 변덕스러운",
    "example": "The English are familiar with {variable} weather conditions.",
    "blank": "variable"
  },
  {
    "id": 19,
    "word": "various",
    "meaning": "여러 가지의, 다양한",
    "example": "The store has {various} styles of furniture.",
    "blank": "various"
  },
  {
    "id": 20,
    "word": "varied",
    "meaning": "가지각색의",
    "example": "Alex has lived a {varied} life so far.",
    "blank": "varied"
  },
  {
    "id": 21,
    "word": "appoint",
    "meaning": "임명[지명]하다; (시간·장소 등을) 정하다",
    "example": "The council will {appoint} someone to fill the empty seat.",
    "blank": "appoint"
  },
  {
    "id": 22,
    "word": "locate",
    "meaning": "위치하다; (위치를) 알아내다; (특정 위치에) 두다, 설치하다",
    "example": "My car is {located} in the garage.",
    "blank": "located"
  },
  {
    "id": 23,
    "word": "celebrity",
    "meaning": "유명 인사; 명성",
    "example": "We should respect the privacy of {celebrities}.",
    "blank": "celebrities"
  },
  {
    "id": 24,
    "word": "handle",
    "meaning": "처리하다; 다루다; 손잡이",
    "example": "He quit his job because he couldn't {handle} the workload.",
    "blank": "handle"
  },
  {
    "id": 25,
    "word": "originate",
    "meaning": "((~ from)) 생기다, 일어나다; ((~ in)) 비롯되다, 유래하다",
    "example": "Many viruses {originate} from animal species.",
    "blank": "originate"
  },
  {
    "id": 26,
    "word": "aware",
    "meaning": "알아차린, 알고 있는",
    "example": "He was {aware} of his fault and tried to correct it.",
    "blank": "aware"
  },
  {
    "id": 27,
    "word": "caution",
    "meaning": "조심, 신중; 경고; 경고하다",
    "example": "Drivers should take {caution} when driving in the rain.",
    "blank": "caution"
  },
  {
    "id": 28,
    "word": "barrier",
    "meaning": "장애, 장벽; 방벽, 국경의 요새",
    "example": "She had problems caused by linguistic and cultural {barriers}.",
    "blank": "barriers"
  },
  {
    "id": 29,
    "word": "anticipate",
    "meaning": "예상하다, 예측하다; 기대하다",
    "example": "We {anticipate} economic recovery within the next two years.",
    "blank": "anticipate"
  },
  {
    "id": 30,
    "word": "breed",
    "meaning": "번식하다; 사육하다, 재배하다; (가축의) 품종",
    "example": "The insects tend to {breed} in certain places.",
    "blank": "breed"
  },
  {
    "id": 31,
    "word": "commit",
    "meaning": "(죄를) 범하다; 약속하다; 전념하다, 헌신하다",
    "example": "The criminals used guns to {commit} crimes.",
    "blank": "commit"
  },
  {
    "id": 32,
    "word": "hence",
    "meaning": "따라서, 그러므로; 향후",
    "example": "The coupon is too old and {hence} it is invalid.",
    "blank": "hence"
  },
  {
    "id": 33,
    "word": "theorize",
    "meaning": "(이론·학설 등을) 세우다",
    "example": "Scientists can only {theorize} about how the dinosaurs became extinct.",
    "blank": "theorize"
  },
  {
    "id": 34,
    "word": "assert",
    "meaning": "주장하다; 단언하다",
    "example": "The politician continued to publicly {assert} his opinion on the issue.",
    "blank": "assert"
  },
  {
    "id": 35,
    "word": "distribute",
    "meaning": "나누어 주다, 분배하다; 유통시키다",
    "example": "They {distributed} clothes and blankets to the flood victims last month.",
    "blank": "distributed"
  },
  {
    "id": 36,
    "word": "steep",
    "meaning": "가파른; 급격한",
    "example": "They climbed the {steep} mountain quickly.",
    "blank": "steep"
  },
  {
    "id": 37,
    "word": "former",
    "meaning": "이전의, 예전의; ((the ~)) (둘 중에서) 전자",
    "example": "The {former} president of the U.S. was invited to the conference.",
    "blank": "former"
  },
  {
    "id": 38,
    "word": "latter",
    "meaning": "후반의; (둘 중에서) 후자의; ((the ~)) (둘 중에서) 후자",
    "example": "Of the two designs, she preferred the {latter} to the former.",
    "blank": "latter"
  },
  {
    "id": 39,
    "word": "perceive",
    "meaning": "인지하다, 알아차리다; 여기다",
    "example": "Everyone {perceived} that he was angry.",
    "blank": "perceived"
  },
  {
    "id": 40,
    "word": "combine",
    "meaning": "결합하다[되다]; 겸비하다",
    "example": "{Combine} sugar, flour, and eggs in a large bowl and mix well.",
    "blank": "Combine"
  },
  {
    "id": 41,
    "word": "proceed",
    "meaning": "계속하다[되다], 진행하다[되다]; 나아가다",
    "example": "How about seeking advice before deciding how to {proceed}?",
    "blank": "proceed"
  },
  {
    "id": 42,
    "word": "obvious",
    "meaning": "명백한, 분명한",
    "example": "It is {obvious} that the goals can't be reached.",
    "blank": "obvious"
  },
  {
    "id": 43,
    "word": "apply",
    "meaning": "신청하다, 지원하다; 적용되다; 바르다",
    "example": "I'll {apply} for the job in the sales department.",
    "blank": "apply"
  },
  {
    "id": 44,
    "word": "concentrate",
    "meaning": "집중하다; (한 곳에) 모으다",
    "example": "I can't {concentrate} on my studying because of the noise.",
    "blank": "concentrate"
  },
  {
    "id": 45,
    "word": "crisis",
    "meaning": "위기, 결정적인 시기",
    "example": "The government is seeking a solution to overcome the economic {crisis}.",
    "blank": "crisis"
  },
  {
    "id": 46,
    "word": "inclined",
    "meaning": "~하는 경향이 있는; ~할 마음이 있는",
    "example": "He is {inclined} to judge others on their educational background.",
    "blank": "inclined"
  },
  {
    "id": 47,
    "word": "emotion",
    "meaning": "감정, 정서",
    "example": "People often make irrational decisions because of their {emotions}.",
    "blank": "emotions"
  },
  {
    "id": 48,
    "word": "represent",
    "meaning": "대표하다; 나타내다; 보여주다",
    "example": "The athlete was proud to {represent} her school at the competition.",
    "blank": "represent"
  },
  {
    "id": 49,
    "word": "feature",
    "meaning": "특징; 이목구비; 특집 (기사[방송]); 특징으로 삼다",
    "example": "The most outstanding {feature} of this product is portability.",
    "blank": "feature"
  },
  {
    "id": 50,
    "word": "relevant",
    "meaning": "관련된; 적절한",
    "example": "This evidence is {relevant} to the case.",
    "blank": "relevant"
  },
  {
    "id": 51,
    "word": "factual",
    "meaning": "사실에 입각한",
    "example": "Reporters must confirm that the information they report is {factual}.",
    "blank": "factual"
  },
  {
    "id": 52,
    "word": "concern",
    "meaning": "걱정; 관심사; 관계; 걱정하다[시키다]; 관심을 갖다",
    "example": "{Concern} about the environment is rising worldwide.",
    "blank": "Concern"
  },
  {
    "id": 53,
    "word": "classify",
    "meaning": "분류하다, 구분하다",
    "example": "The librarian {classified} the books by subject.",
    "blank": "classified"
  },
  {
    "id": 54,
    "word": "circumstance",
    "meaning": "((주로 ~s)) 상황, 주위 사정; (경제적) 형편, 처지",
    "example": "I oppose any kind of violence under any {circumstances}.",
    "blank": "circumstances"
  },
  {
    "id": 55,
    "word": "involve",
    "meaning": "포함하다, 수반하다; 관련시키다; 참여시키다",
    "example": "His job {involves} business trips.",
    "blank": "involves"
  },
  {
    "id": 56,
    "word": "occasion",
    "meaning": "(특정한) 때, 경우; 특별한 일[행사]",
    "example": "He only drinks wine on special {occasions}.",
    "blank": "occasions"
  },
  {
    "id": 57,
    "word": "exterior",
    "meaning": "바깥쪽의, 외부의; 외부",
    "example": "The {exterior} of the building",
    "blank": "exterior"
  },
  {
    "id": 58,
    "word": "respect",
    "meaning": "존경하다, 존중하다; (법 등을) 준수하다; 존경, 존중; 측면, 관점",
    "example": "She is highly {respected} by all her colleagues.",
    "blank": "respected"
  },
  {
    "id": 59,
    "word": "clarify",
    "meaning": "명백하게 하다, 분명해지다",
    "example": "{Clarify} what you said for those who didn't understand it.",
    "blank": "Clarify"
  },
  {
    "id": 60,
    "word": "artificial",
    "meaning": "인공의, 인조의; (행동이) 거짓인, 꾸민",
    "example": "The garden is full of colorful {artificial} lights.",
    "blank": "artificial"
  },
  {
    "id": 61,
    "word": "confirm",
    "meaning": "(~이 사실임을) 보여주다; (약속 등을) 확인하다, 확정하다",
    "example": "The evidence {confirmed} the rumor is false.",
    "blank": "confirmed"
  },
  {
    "id": 62,
    "word": "state",
    "meaning": "상태, 상황; 국가, 주(州); (정식으로) 말하다, 진술하다",
    "example": "The witness {stated} that she had seen him entering the store.",
    "blank": "stated"
  },
  {
    "id": 63,
    "word": "resist",
    "meaning": "저항하다; 반대하다",
    "example": "Some people {resist} change instead of embracing it.",
    "blank": "resist"
  },
  {
    "id": 64,
    "word": "acknowledge",
    "meaning": "인정하다, 승인하다; 감사를 표하다",
    "example": "We need to {acknowledge} the importance of cultural diversity.",
    "blank": "acknowledge"
  },
  {
    "id": 65,
    "word": "crucial",
    "meaning": "결정적인, 중대한",
    "example": "She made a {crucial} decision in her life.",
    "blank": "crucial"
  },
  {
    "id": 66,
    "word": "gather",
    "meaning": "모으다, 모이다; (수집된 정보에 따라) 이해하다",
    "example": "A rolling stone {gathers} no moss.",
    "blank": "gathers"
  },
  {
    "id": 67,
    "word": "ignore",
    "meaning": "무시하다; 못 본 척하다",
    "example": "Nobody can {ignore} the power of the public.",
    "blank": "ignore"
  },
  {
    "id": 68,
    "word": "demand",
    "meaning": "요구하다; 필요로 하다; 요구; 수요",
    "example": "They {demanded} that she refund their rent.",
    "blank": "demanded"
  },
  {
    "id": 69,
    "word": "supply",
    "meaning": "공급하다; 공급(량); ((-ies)) 보급품",
    "example": "This school {supplies} students with computers.",
    "blank": "supplies"
  },
  {
    "id": 70,
    "word": "delicate",
    "meaning": "연(약)한, 깨지기 쉬운; 섬세한, 우아한; 미묘한",
    "example": "The glass is very {delicate}, so be careful with it.",
    "blank": "delicate"
  },
  {
    "id": 71,
    "word": "corporate",
    "meaning": "기업의; 법인의; 공동의",
    "example": "The government announced that it will increase {corporate} investment.",
    "blank": "corporate"
  },
  {
    "id": 72,
    "word": "eventually",
    "meaning": "결국, 최종적으로, 마침내",
    "example": "He {eventually} found success because he refused to give up.",
    "blank": "eventually"
  },
  {
    "id": 73,
    "word": "object",
    "meaning": "물체; 목적, 목표; (행동·감정의) 대상; 반대하다",
    "example": "She always {objects} to my suggestion.",
    "blank": "objects"
  },
  {
    "id": 74,
    "word": "recognize",
    "meaning": "알아보다, 인지하다; 인정하다",
    "example": "I {recognized} her face but not her name.",
    "blank": "recognized"
  },
  {
    "id": 75,
    "word": "deny",
    "meaning": "부정하다, 인정하지 않다; 거절하다",
    "example": "She {denied} stealing the necklace from the jewelry store.",
    "blank": "denied"
  },
  {
    "id": 76,
    "word": "differ",
    "meaning": "((~ from)) 다르다",
    "example": "Popular trends often {differ} from country to country.",
    "blank": "differ"
  },
  {
    "id": 77,
    "word": "rent",
    "meaning": "임대하다, 빌리다; 세, 집세",
    "example": "The family planned to {rent} a boat for their vacation.",
    "blank": "rent"
  },
  {
    "id": 78,
    "word": "charity",
    "meaning": "자선; 기부; 모금",
    "example": "The university is holding an event to raise money for {charity}.",
    "blank": "charity"
  },
  {
    "id": 79,
    "word": "encourage",
    "meaning": "용기를 북돋우다; 장려하다; 조장하다, 부추기다",
    "example": "Mom has {encouraged} me to be enthusiastic and passionate.",
    "blank": "encouraged"
  },
  {
    "id": 80,
    "word": "dense",
    "meaning": "밀집한, 빽빽한; (앞이 안 보이게) 짙은",
    "example": "The pine forest is very {dense}.",
    "blank": "dense"
  },
  {
    "id": 81,
    "word": "damage",
    "meaning": "손해, 손상; 손해[피해]를 입히다",
    "example": "The proliferation of cars severely {damaged} the environment.",
    "blank": "damaged"
  },
  {
    "id": 82,
    "word": "cooperate",
    "meaning": "협력하다, 협동하다",
    "example": "Children should be taught to {cooperate} rather than to compete.",
    "blank": "cooperate"
  },
  {
    "id": 83,
    "word": "accurate",
    "meaning": "정확한, 정밀한",
    "example": "Scientific breakthroughs will lead to more {accurate} weather forecasts.",
    "blank": "accurate"
  },
  {
    "id": 84,
    "word": "offense",
    "meaning": "위반, 범죄; 공격",
    "example": "They committed the {offense} of shoplifting.",
    "blank": "offense"
  },
  {
    "id": 85,
    "word": "defense",
    "meaning": "방어(물); 변호",
    "example": "We should strengthen our national {defense}.",
    "blank": "defense"
  },
  {
    "id": 86,
    "word": "compose",
    "meaning": "구성하다; 작곡하다, 작문하다",
    "example": "The Philippines is {composed} of more than 7,000 islands.",
    "blank": "composed"
  },
  {
    "id": 87,
    "word": "contain",
    "meaning": "들어있다, 포함하다",
    "example": "Many types of plastic {contain} toxic chemicals.",
    "blank": "contain"
  },
  {
    "id": 88,
    "word": "charge",
    "meaning": "청구하다; 고발하다; 책임을 지우다; 충전하다; 요금; 책임",
    "example": "Police {charged} the man with drunk driving.",
    "blank": "charged"
  },
  {
    "id": 89,
    "word": "debate",
    "meaning": "논쟁, 토론; 논쟁하다, 토론하다",
    "example": "There was a long {debate} on green issues.",
    "blank": "debate"
  },
  {
    "id": 90,
    "word": "overlap",
    "meaning": "겹치다, 포개지다; 중복되다",
    "example": "The contents of his report {overlapped} with those of his coworker.",
    "blank": "overlapped"
  },
  {
    "id": 91,
    "word": "yield",
    "meaning": "산출하다, 생산하다; 굴복하다; 양보하다; (농작물 등의) 산출량",
    "example": "He {yielded} his seat to an old woman on the bus yesterday.",
    "blank": "yielded"
  },
  {
    "id": 92,
    "word": "devote",
    "meaning": "(노력·시간을) 바치다, 기울이다",
    "example": "He {devoted} his life to helping the disabled.",
    "blank": "devoted"
  },
  {
    "id": 93,
    "word": "indicate",
    "meaning": "나타내다, 암시하다; 가리키다",
    "example": "All the evidence {indicates} that he is guilty.",
    "blank": "indicates"
  },
  {
    "id": 94,
    "word": "function",
    "meaning": "기능, 역할; 작용하다, 기능하다",
    "example": "My new cell phone has a variety of {functions}.",
    "blank": "functions"
  },
  {
    "id": 95,
    "word": "interrupt",
    "meaning": "방해하다, 중단시키다",
    "example": "Don't {interrupt} me when I am talking.",
    "blank": "interrupt"
  },
  {
    "id": 96,
    "word": "feat",
    "meaning": "위업, 공적",
    "example": "The firefighter's {feat} of bravery saved the child's life.",
    "blank": "feat"
  },
  {
    "id": 97,
    "word": "evident",
    "meaning": "명백한, 분명한",
    "example": "Her devotion to her work is {evident}.",
    "blank": "evident"
  },
  {
    "id": 98,
    "word": "output",
    "meaning": "출력, 생산",
    "example": "The factory needed to increase its {output} to keep up with demand.",
    "blank": "output"
  },
  {
    "id": 99,
    "word": "violate",
    "meaning": "위반하다, 어기다; 침해하다",
    "example": "He was arrested for {violating} immigration laws.",
    "blank": "violating"
  },
  {
    "id": 100,
    "word": "declare",
    "meaning": "선언하다, 발표하다; (세관 등에) 신고하다",
    "example": "She was {declared} the winner of the contest.",
    "blank": "declared"
  },
  {
    "id": 101,
    "word": "instant",
    "meaning": "즉각적인; 즉석요리의; 즉시, 찰나",
    "example": "This robot provides an {instant} response to your directions.",
    "blank": "instant"
  },
  {
    "id": 102,
    "word": "struggle",
    "meaning": "버둥거리다, 허덕이다; 분투하다, 열심히 노력하다; 싸움; 노력",
    "example": "The bear {struggled} to free its paw from the trap.",
    "blank": "struggled"
  },
  {
    "id": 103,
    "word": "induce",
    "meaning": "권유하다, 설득하여 ~시키다; 일으키다, 유발하다",
    "example": "Nothing could {induce} me to give up my dream.",
    "blank": "induce"
  },
  {
    "id": 104,
    "word": "adapt",
    "meaning": "적응하다[시키다]; 개조하다",
    "example": "Humans have some capacity to {adapt} to climate change.",
    "blank": "adapt"
  },
  {
    "id": 105,
    "word": "adopt",
    "meaning": "입양하다; 채택[채용]하다",
    "example": "My husband and I have decided to {adopt} a baby.",
    "blank": "adopt"
  },
  {
    "id": 106,
    "word": "dedicate",
    "meaning": "(시간·노력을) 바치다, 헌신하다",
    "example": "She {dedicated} much time to helping others.",
    "blank": "dedicated"
  },
  {
    "id": 107,
    "word": "addicted",
    "meaning": "중독된, 푹 빠진",
    "example": "She is {addicted} to coffee.",
    "blank": "addicted"
  },
  {
    "id": 108,
    "word": "distance",
    "meaning": "거리, 간격; 먼 거리, 먼 곳",
    "example": "I measured the {distance} between two objects using a ruler.",
    "blank": "distance"
  },
  {
    "id": 109,
    "word": "disturb",
    "meaning": "방해하다; 어지럽히다",
    "example": "Don't {disturb} me when I am busy at work.",
    "blank": "disturb"
  },
  {
    "id": 110,
    "word": "donation",
    "meaning": "기부(금), 기증(품)",
    "example": "They are collecting {donations} for the poor and homeless.",
    "blank": "donations"
  },
  {
    "id": 111,
    "word": "disappear",
    "meaning": "사라지다",
    "example": "All the pictures on my smartphone suddenly {disappeared}.",
    "blank": "disappeared"
  },
  {
    "id": 112,
    "word": "vivid",
    "meaning": "생생한, 선명한",
    "example": "The scene is still {vivid} in my mind.",
    "blank": "vivid"
  },
  {
    "id": 113,
    "word": "regard",
    "meaning": "여기다, 간주하다; 존경; 관심, 고려; ((-s)) 안부 인사",
    "example": "Climate change must be {regarded} as a serious problem.",
    "blank": "regarded"
  },
  {
    "id": 114,
    "word": "disrupt",
    "meaning": "방해하다, 지장을 주다",
    "example": "The storm {disrupted} the flight schedule.",
    "blank": "disrupted"
  },
  {
    "id": 115,
    "word": "retire",
    "meaning": "은퇴하다, 퇴직하다, 그만두다",
    "example": "He {retired} from public life last year.",
    "blank": "retired"
  },
  {
    "id": 116,
    "word": "enhance",
    "meaning": "높이다, 강화하다",
    "example": "Learning something new is a good way to {enhance} creativity.",
    "blank": "enhance"
  },
  {
    "id": 117,
    "word": "adequate",
    "meaning": "적절한, 충분한",
    "example": "Getting {adequate} rest is vital for your health.",
    "blank": "adequate"
  },
  {
    "id": 118,
    "word": "estimate",
    "meaning": "(가치 등을) 추정하다, 평가하다; 추정; 견적서",
    "example": "It is too early to {estimate} how much this model will cost.",
    "blank": "estimate"
  },
  {
    "id": 119,
    "word": "arrange",
    "meaning": "정하다, 준비하다; 정리[배열]하다; 편곡하다",
    "example": "I {arranged} my books by topic.",
    "blank": "arranged"
  },
  {
    "id": 120,
    "word": "restrain",
    "meaning": "제지하다; (감정·행동 등을) 억누르다, 억제하다",
    "example": "She tried to {restrain} herself from wasting money.",
    "blank": "restrain"
  },
  {
    "id": 121,
    "word": "amend",
    "meaning": "(법 등을) 수정하다, 개정하다",
    "example": "There is an urgent need to {amend} the law.",
    "blank": "amend"
  },
  {
    "id": 122,
    "word": "account",
    "meaning": "설명, 보고; 계좌; 설명하다; 차지하다",
    "example": "Immigrants {account} for nearly 20% of the current workforce.",
    "blank": "account"
  },
  {
    "id": 123,
    "word": "sum",
    "meaning": "액수; ((the ~ of)) 합계, 총합, 전부",
    "example": "The {sum} of 7 and 5 is 12.",
    "blank": "sum"
  },
  {
    "id": 124,
    "word": "affirm",
    "meaning": "단언하다, 확인하다",
    "example": "He {affirmed} that he wouldn't make such foolish mistakes again.",
    "blank": "affirmed"
  },
  {
    "id": 125,
    "word": "adversity",
    "meaning": "역경",
    "example": "She overcame {adversity} and gained success in the field.",
    "blank": "adversity"
  },
  {
    "id": 126,
    "word": "extend",
    "meaning": "연장하다; 뻗다; 확장하다",
    "example": "He {extended} his stay for three more days.",
    "blank": "extended"
  },
  {
    "id": 127,
    "word": "extent",
    "meaning": "범위, 정도; 넓이, 크기",
    "example": "The {extent} of damage is not known yet.",
    "blank": "extent"
  },
  {
    "id": 128,
    "word": "expose",
    "meaning": "드러내다, 노출시키다; 폭로하다",
    "example": "Do not {expose} your bare skin to direct sunlight.",
    "blank": "expose"
  },
  {
    "id": 129,
    "word": "exhaust",
    "meaning": "기진맥진하게 만들다; 다 써버리다; 배기가스",
    "example": "The long debate completely {exhausted} me.",
    "blank": "exhausted"
  },
  {
    "id": 130,
    "word": "obey",
    "meaning": "복종하다, 따르다, 준수하다",
    "example": "You have to {obey} traffic regulations on the road.",
    "blank": "obey"
  },
  {
    "id": 131,
    "word": "confess",
    "meaning": "자백하다, 고백하다",
    "example": "If we {confess} our sins, he can forgive us.",
    "blank": "confess"
  },
  {
    "id": 132,
    "word": "affair",
    "meaning": "((-s)) 일, 활동; 사건, 스캔들",
    "example": "Don't interfere in other people's {affairs} thoughtlessly.",
    "blank": "affairs"
  },
  {
    "id": 133,
    "word": "appreciate",
    "meaning": "이해하다; 감상하다, 진가를 알다; 고맙게 생각하다",
    "example": "People {appreciate} art in different ways.",
    "blank": "appreciate"
  },
  {
    "id": 134,
    "word": "potential",
    "meaning": "잠재적인, 가능성이 있는; 가능성, 잠재력",
    "example": "It is important to predict the demand from {potential} customers.",
    "blank": "potential"
  },
  {
    "id": 135,
    "word": "rule",
    "meaning": "규칙, 원칙; 지배, 통치; 지배하다, 통치하다",
    "example": "You should not break the school {rules}.",
    "blank": "rules"
  },
  {
    "id": 136,
    "word": "solid",
    "meaning": "단단한, 견고한; 순~, 순수한; 속이 꽉 찬; 고체",
    "example": "They constructed a tunnel through {solid} rock.",
    "blank": "solid"
  },
  {
    "id": 137,
    "word": "alert",
    "meaning": "방심하지 않는, 조심하는; 경고하다; 경계",
    "example": "They walked through the forest, {alert} to every possible danger.",
    "blank": "alert"
  },
  {
    "id": 138,
    "word": "manufacture",
    "meaning": "제조하다, 생산하다; 제조, 생산; ((-s)) 제품",
    "example": "We have {manufactured} furniture since the 1940s.",
    "blank": "manufactured"
  },
  {
    "id": 139,
    "word": "profit",
    "meaning": "이익, 이윤; 이익을 얻다[주다]",
    "example": "They made a big {profit} from selling these shoes worldwide.",
    "blank": "profit"
  },
  {
    "id": 140,
    "word": "genuine",
    "meaning": "진실된; 진짜의",
    "example": "The family expressed {genuine} appreciation for the help they received.",
    "blank": "genuine"
  },
  {
    "id": 141,
    "word": "gender",
    "meaning": "성별, 성",
    "example": "The survey categorized participants by their age and {gender}.",
    "blank": "gender"
  },
  {
    "id": 142,
    "word": "fade",
    "meaning": "사라지다, 희미해지다; (색깔이) 바래다",
    "example": "If you take this pill, the pain will {fade} quickly.",
    "blank": "fade"
  },
  {
    "id": 143,
    "word": "transit",
    "meaning": "운반, 운송; 통과, 환승",
    "example": "The parcel must have been damaged in {transit}.",
    "blank": "transit"
  },
  {
    "id": 144,
    "word": "afford",
    "meaning": "((can/could ~)) ~할 여유가 있다",
    "example": "We can't {afford} our mortgage.",
    "blank": "afford"
  },
  {
    "id": 145,
    "word": "finance",
    "meaning": "재정, 금융; ((-s)) 자금, 재정 상태; 자금을 공급[조달]하다",
    "example": "Our company's {finances} aren't good.",
    "blank": "finances"
  },
  {
    "id": 146,
    "word": "precise",
    "meaning": "정확한, 정밀한",
    "example": "{Precise} sales figures",
    "blank": "Precise"
  },
  {
    "id": 147,
    "word": "crew",
    "meaning": "승무원; 선원; 팀, 무리",
    "example": "The {crew} was able to escape the ship before it sank.",
    "blank": "crew"
  },
  {
    "id": 148,
    "word": "universal",
    "meaning": "보편적인, 일반적인; 전 세계의",
    "example": "a {universal} phenomenon",
    "blank": "universal"
  },
  {
    "id": 149,
    "word": "enable",
    "meaning": "가능하게 하다",
    "example": "Technology {enables} companies to be more efficient than ever.",
    "blank": "enables"
  },
  {
    "id": 150,
    "word": "preserve",
    "meaning": "지키다, 보호하다; 유지하다",
    "example": "We have to find out the way of {preserving} our forests.",
    "blank": "preserving"
  },
  {
    "id": 151,
    "word": "operate",
    "meaning": "작동하다, 조작하다; 운영하다; 수술하다",
    "example": "The new photocopier is easier to {operate} than the old one.",
    "blank": "operate"
  },
  {
    "id": 152,
    "word": "draft",
    "meaning": "초고, 초안",
    "example": "a first {draft} of a paper",
    "blank": "draft"
  },
  {
    "id": 153,
    "word": "entire",
    "meaning": "전체의; 흠이 없는, 그대로의; 전부, 전체",
    "example": "She lived in the same house for her {entire} life.",
    "blank": "entire"
  },
  {
    "id": 154,
    "word": "blame",
    "meaning": "비난하다, ~을 탓하다; 비난, 책망",
    "example": "She always {blames} others even when she has done something wrong.",
    "blank": "blames"
  },
  {
    "id": 155,
    "word": "average",
    "meaning": "평균; 표준, 보통수준; 평균의, 보통의",
    "example": "His math skills are above {average}.",
    "blank": "average"
  },
  {
    "id": 156,
    "word": "found",
    "meaning": "설립하다; ~에 기초를 두다",
    "example": "Harvard University was {founded} in 1636.",
    "blank": "founded"
  },
  {
    "id": 157,
    "word": "enrich",
    "meaning": "부유하게 하다, 풍부하게 하다",
    "example": "Friends can {enrich} the experience you have in university.",
    "blank": "enrich"
  },
  {
    "id": 158,
    "word": "seek",
    "meaning": "추구하다; 찾다",
    "example": "Businesses continue to {seek} help from the government because of the poor economy.",
    "blank": "seek"
  },
  {
    "id": 159,
    "word": "sector",
    "meaning": "부문, 분야, 영역",
    "example": "The new policy will promote competition between businesses in the private {sector}.",
    "blank": "sector"
  },
  {
    "id": 160,
    "word": "isolate",
    "meaning": "격리시키다, 고립시키다",
    "example": "The village was {isolated} by the heavy snow.",
    "blank": "isolated"
  },
  {
    "id": 161,
    "word": "behavior",
    "meaning": "행동, 행위, 태도",
    "example": "His parents scolded him for his bad {behavior}.",
    "blank": "behavior"
  },
  {
    "id": 162,
    "word": "confuse",
    "meaning": "혼란시키다; 혼동하다",
    "example": "Too much information {confuses} me.",
    "blank": "confuses"
  },
  {
    "id": 163,
    "word": "current",
    "meaning": "현재의; 흐름; 경향, 풍조",
    "example": "The river's {current} is too strong to swim in.",
    "blank": "current"
  },
  {
    "id": 164,
    "word": "general",
    "meaning": "일반적인, 보편적인; 대체적인, 개괄적인; 장군, 대장",
    "example": "a {general} opinion",
    "blank": "general"
  },
  {
    "id": 165,
    "word": "aggressive",
    "meaning": "공격적인; 적극적인",
    "example": "As I approached, the dog began to bark in an {aggressive} manner.",
    "blank": "aggressive"
  },
  {
    "id": 166,
    "word": "immense",
    "meaning": "엄청난, 어마어마한",
    "example": "The discovery of fire had an {immense} effect on the history of mankind.",
    "blank": "immense"
  },
  {
    "id": 167,
    "word": "gradual",
    "meaning": "점진적인, 차츰 ~하는",
    "example": "Although the task was difficult, we began to make {gradual} progress.",
    "blank": "gradual"
  },
  {
    "id": 168,
    "word": "exhibit",
    "meaning": "전시하다; 전시(품)",
    "example": "Currently the gallery is {exhibiting} the works of Picasso.",
    "blank": "exhibiting"
  },
  {
    "id": 169,
    "word": "identical",
    "meaning": "동일한, 일치하는",
    "example": "My sister and I are {identical} twins.",
    "blank": "identical"
  },
  {
    "id": 170,
    "word": "independent",
    "meaning": "독립한; 자립심이 강한",
    "example": "Hong Kong became {independent} from Britain on July 1st, 1997.",
    "blank": "independent"
  },
  {
    "id": 171,
    "word": "boast",
    "meaning": "자랑하다, 뽐내다",
    "example": "She is modest and never {boasts} of her success.",
    "blank": "boasts"
  },
  {
    "id": 172,
    "word": "invest",
    "meaning": "투자하다",
    "example": "He {invested} a large sum of money in stocks.",
    "blank": "invested"
  },
  {
    "id": 173,
    "word": "heritage",
    "meaning": "유산",
    "example": "Over 55,000 people work in the cultural {heritage} sector across the UK.",
    "blank": "heritage"
  },
  {
    "id": 174,
    "word": "revenue",
    "meaning": "매출, 수입",
    "example": "Many local companies suffered losses in {revenue} because of the pandemic.",
    "blank": "revenue"
  },
  {
    "id": 175,
    "word": "brilliant",
    "meaning": "훌륭한, 멋진; 명석한; 빛나는, 아주 밝은",
    "example": "He suggested some {brilliant} ideas in the meeting.",
    "blank": "brilliant"
  },
  {
    "id": 176,
    "word": "reject",
    "meaning": "거절하다, 거부하다",
    "example": "I don't know why she {rejected} the job offer.",
    "blank": "rejected"
  },
  {
    "id": 177,
    "word": "despite",
    "meaning": "~에도 불구하고",
    "example": "{Despite} the cold weather, many people came to the event.",
    "blank": "Despite"
  },
  {
    "id": 178,
    "word": "receipt",
    "meaning": "영수증",
    "example": "Remember to always keep your {receipt} when you buy something expensive.",
    "blank": "receipt"
  },
  {
    "id": 179,
    "word": "injured",
    "meaning": "다친; (감정이) 상처를 받은",
    "example": "Seven people were {injured} in the bus accident.",
    "blank": "injured"
  },
  {
    "id": 180,
    "word": "convince",
    "meaning": "확신시키다, 납득시키다; 설득하다",
    "example": "He attempted to {convince} his boss of his opinion.",
    "blank": "convince"
  },
  {
    "id": 181,
    "word": "article",
    "meaning": "기사; 물품; 조항",
    "example": "I read an {article} on economic issues.",
    "blank": "article"
  },
  {
    "id": 182,
    "word": "ethnic",
    "meaning": "민족의, 혈통의, 인종의; 종족",
    "example": "It's important to preserve the cultures of {ethnic} minority.",
    "blank": "ethnic"
  },
  {
    "id": 183,
    "word": "tone",
    "meaning": "소리, 음색; 어조, 말씨; 색조",
    "example": "The painter chose to paint the wall in a light green {tone}.",
    "blank": "tone"
  },
  {
    "id": 184,
    "word": "furthermore",
    "meaning": "더욱이, 게다가",
    "example": "This food is delicious; {furthermore}, it's easy to cook.",
    "blank": "furthermore"
  },
  {
    "id": 185,
    "word": "abandon",
    "meaning": "버리다, 떠나다; 포기하다, 단념하다",
    "example": "A lot of dogs are {abandoned} every year.",
    "blank": "abandoned"
  },
  {
    "id": 186,
    "word": "preview",
    "meaning": "사전 조사, 시사회; 사전 검토[조사]하다",
    "example": "After watching a {preview} of the movie, we were really excited to see it.",
    "blank": "preview"
  },
  {
    "id": 187,
    "word": "renew",
    "meaning": "갱신하다, 재개하다",
    "example": "The teacher decided to {renew} his contract with the school.",
    "blank": "renew"
  },
  {
    "id": 188,
    "word": "emerge",
    "meaning": "나오다, 나타나다",
    "example": "A new problem {emerged} abruptly.",
    "blank": "emerged"
  },
  {
    "id": 189,
    "word": "merge",
    "meaning": "합병[병합]하다, 합치다",
    "example": "The two companies are said to {merge} soon.",
    "blank": "merge"
  },
  {
    "id": 190,
    "word": "designate",
    "meaning": "지정하다, 지명하다; (기호를 써서) 표시하다",
    "example": "This city was {designated} as a UNESCO World Heritage Site.",
    "blank": "designated"
  },
  {
    "id": 191,
    "word": "analyze",
    "meaning": "분석하다, 검토하다",
    "example": "The doctor {analyzed} the blood sample taken from the patient.",
    "blank": "analyzed"
  },
  {
    "id": 192,
    "word": "principle",
    "meaning": "원리, 원칙; 주의, 신념",
    "example": "The basic {principle} of democracy is equal rights for every citizen.",
    "blank": "principle"
  },
  {
    "id": 193,
    "word": "reasonable",
    "meaning": "합리적인; 정당한",
    "example": "The child was upset because he didn't think his punishment was {reasonable}.",
    "blank": "reasonable"
  },
  {
    "id": 194,
    "word": "elect",
    "meaning": "선출하다, 선임하다",
    "example": "He was {elected} as a member of the City Council.",
    "blank": "elected"
  },
  {
    "id": 195,
    "word": "neglect",
    "meaning": "방치하다, 소홀히 하다; 무시하다; 태만, 소홀",
    "example": "I hope you do not {neglect} your duties.",
    "blank": "neglect"
  },
  {
    "id": 196,
    "word": "flawless",
    "meaning": "흠이 없는",
    "example": "His performance was {flawless}.",
    "blank": "flawless"
  },
  {
    "id": 197,
    "word": "companion",
    "meaning": "동료, 친구; 안내서, 지침서",
    "example": "Dogs are great {companions} to us.",
    "blank": "companions"
  },
  {
    "id": 198,
    "word": "ban",
    "meaning": "금지하다; 금지",
    "example": "On a Car-Free Day, cars are {banned} from many parts of the city.",
    "blank": "banned"
  },
  {
    "id": 199,
    "word": "obligation",
    "meaning": "의무, 책임",
    "example": "All rights imply {obligations}.",
    "blank": "obligations"
  },
  {
    "id": 200,
    "word": "local",
    "meaning": "지역의, 현지의; 주민, 현지인",
    "example": "Eating the {local} food is an essential part of travel.",
    "blank": "local"
  },
  {
    "id": 201,
    "word": "apology",
    "meaning": "사과, 사죄",
    "example": "He offered me an {apology} for being so rude.",
    "blank": "apology"
  },
  {
    "id": 202,
    "word": "document",
    "meaning": "문서, 서류, 기록",
    "example": "I'm preparing a {document} about the accident.",
    "blank": "document"
  },
  {
    "id": 203,
    "word": "phase",
    "meaning": "국면, 단계; 단계적으로 실행하다",
    "example": "The first {phase} of construction should be finished by the end of the year.",
    "blank": "phase"
  },
  {
    "id": 204,
    "word": "cue",
    "meaning": "신호, 단서; 신호를 주다, 지시를 보내다",
    "example": "The director gave a {cue} to the actors to begin.",
    "blank": "cue"
  },
  {
    "id": 205,
    "word": "magnify",
    "meaning": "확대하다; 과장하다",
    "example": "This microscope {magnifies} objects 500 times.",
    "blank": "magnifies"
  },
  {
    "id": 206,
    "word": "cognitive",
    "meaning": "인식의, 인지의",
    "example": "Her {cognitive} development is slower than that of her peers.",
    "blank": "cognitive"
  },
  {
    "id": 207,
    "word": "temper",
    "meaning": "기질, 기분, 성격; 화; 완화시키다; 억제하다",
    "example": "She had a bad {temper} and often yelled at her peers.",
    "blank": "temper"
  },
  {
    "id": 208,
    "word": "blend",
    "meaning": "섞다, 혼합하다; 조화되다, 어울리다; 혼합물",
    "example": "In a saucepan, {blend} flour with cold water and slowly stir it.",
    "blank": "blend"
  },
  {
    "id": 209,
    "word": "dominant",
    "meaning": "지배적인, 우위를 차지하는",
    "example": "Opinions in favor of the bill were {dominant}.",
    "blank": "dominant"
  },
  {
    "id": 210,
    "word": "agency",
    "meaning": "대리점, 대행사; 기관",
    "example": "I reserved a package tour to Hawaii through a travel {agency}.",
    "blank": "agency"
  },
  {
    "id": 211,
    "word": "maintain",
    "meaning": "유지하다, 지속하다; 주장하다",
    "example": "The government will do whatever is needed to {maintain} law and order.",
    "blank": "maintain"
  },
  {
    "id": 212,
    "word": "prudent",
    "meaning": "신중한, 조심성 있는",
    "example": "He is very {prudent} whenever he spends money.",
    "blank": "prudent"
  },
  {
    "id": 213,
    "word": "revise",
    "meaning": "수정하다, 개정하다",
    "example": "The book is now completely {revised} and updated.",
    "blank": "revised"
  },
  {
    "id": 214,
    "word": "character",
    "meaning": "성격; 특성; (등장)인물; 문자",
    "example": "The main {character} of this play will be chosen tomorrow.",
    "blank": "character"
  },
  {
    "id": 215,
    "word": "comment",
    "meaning": "논평, 의견; 비평하다, 논평하다",
    "example": "He made some {comments} about the news article.",
    "blank": "comments"
  },
  {
    "id": 216,
    "word": "economic",
    "meaning": "경제(상)의, 경제학의",
    "example": "The global {economic} situation is improving.",
    "blank": "economic"
  },
  {
    "id": 217,
    "word": "discourse",
    "meaning": "담화, 담론; 이야기를 하다, 논하다",
    "example": "The speakers' {discourse} on ethics in medicine was fascinating.",
    "blank": "discourse"
  },
  {
    "id": 218,
    "word": "gear",
    "meaning": "기어, 톱니바퀴; 장치, 장비; 기어를 넣다; 적응시키다",
    "example": "They loaded the truck with camping {gear} for their vacation.",
    "blank": "gear"
  },
  {
    "id": 219,
    "word": "verbal",
    "meaning": "말의, 언어의",
    "example": "A {verbal} contract is not as safe as a written one.",
    "blank": "verbal"
  },
  {
    "id": 220,
    "word": "immediate",
    "meaning": "즉각적인; 시급한, 당면한; 직접적인",
    "example": "This is an urgent matter that requires an {immediate} reply.",
    "blank": "immediate"
  },
  {
    "id": 221,
    "word": "remind",
    "meaning": "상기시키다, 일깨우다",
    "example": "Please {remind} me of her name - I've forgotten again.",
    "blank": "remind"
  },
  {
    "id": 222,
    "word": "board",
    "meaning": "판자; (게시)판; 위원회; 탑승하다",
    "example": "You should {board} the plane at the designated time.",
    "blank": "board"
  },
  {
    "id": 223,
    "word": "measure",
    "meaning": "측정하다; 평가하다; 대책; 척도",
    "example": "The students {measured} distances between cities on a map.",
    "blank": "measured"
  },
  {
    "id": 224,
    "word": "realize",
    "meaning": "깨닫다; 실현하다",
    "example": "I {realized} that I had made a big mistake.",
    "blank": "realized"
  },
  {
    "id": 225,
    "word": "manage",
    "meaning": "경영하다, 관리하다; 간신히 ~하다",
    "example": "I {managed} to submit my report on time.",
    "blank": "managed"
  },
  {
    "id": 226,
    "word": "administer",
    "meaning": "관리하다, 운영하다; 집행하다",
    "example": "The fund was {administered} by commercial banks.",
    "blank": "administered"
  },
  {
    "id": 227,
    "word": "provide",
    "meaning": "제공하다, 주다; 규정하다",
    "example": "Our website {provides} various optional services for free.",
    "blank": "provides"
  },
  {
    "id": 228,
    "word": "rush",
    "meaning": "급하게 가다, 서두르다; 돌진; 분주함",
    "example": "I {rushed} to get to the meeting on time.",
    "blank": "rushed"
  },
  {
    "id": 229,
    "word": "diminish",
    "meaning": "줄어들다, 축소하다",
    "example": "The supply of fossil fuels is {diminishing}.",
    "blank": "diminishing"
  },
  {
    "id": 230,
    "word": "permit",
    "meaning": "허락하다; 허가(증)",
    "example": "Visitors are not {permitted} to take photos in this museum.",
    "blank": "permitted"
  },
  {
    "id": 231,
    "word": "harsh",
    "meaning": "가혹한, 무자비한",
    "example": "The government faced {harsh} criticism over its slow reaction to the disaster.",
    "blank": "harsh"
  },
  {
    "id": 232,
    "word": "count",
    "meaning": "세다, 계산하다; 간주하다; 중요하다",
    "example": "Don't {count} your chickens before they hatch.",
    "blank": "count"
  },
  {
    "id": 233,
    "word": "fulfil(l)",
    "meaning": "(의무 등을) 다하다, 이행하다; 실현[성취]하다",
    "example": "Being ill, it was difficult to {fulfill} my duties.",
    "blank": "fulfill"
  },
  {
    "id": 234,
    "word": "scrub",
    "meaning": "문지르다, 닦아내다",
    "example": "I {scrubbed} the floor to get rid of the dirt.",
    "blank": "scrubbed"
  },
  {
    "id": 235,
    "word": "sentence",
    "meaning": "문장; 판결, 선고; 선고하다, 판결을 내리다",
    "example": "He was {sentenced} to death.",
    "blank": "sentenced"
  },
  {
    "id": 236,
    "word": "aptitude",
    "meaning": "소질, 적성",
    "example": "He showed an {aptitude} for soccer early.",
    "blank": "aptitude"
  },
  {
    "id": 237,
    "word": "attitude",
    "meaning": "태도, 자세",
    "example": "Bill suddenly changed his {attitude} towards me.",
    "blank": "attitude"
  },
  {
    "id": 238,
    "word": "altitude",
    "meaning": "높이, 고도",
    "example": "Mexico City is located at an {altitude} of 2,240 meters above sea level.",
    "blank": "altitude"
  },
  {
    "id": 239,
    "word": "embed",
    "meaning": "깊숙이 박다; (마음·기억 등에) 깊이 새겨두다",
    "example": "A thorn was {embedded} in my hand.",
    "blank": "embedded"
  },
  {
    "id": 240,
    "word": "generate",
    "meaning": "생산[창출]하다, 일으키다; (전기, 열 등을) 발생시키다",
    "example": "Many experts predict this industry will {generate} new jobs.",
    "blank": "generate"
  },
  {
    "id": 241,
    "word": "imaginary",
    "meaning": "상상의, 가상의",
    "example": "Unicorns and dragons are {imaginary} animals.",
    "blank": "imaginary"
  },
  {
    "id": 242,
    "word": "secure",
    "meaning": "안전한, 안정된; 안전하게 하다; 확보하다",
    "example": "The country took steps to {secure} its borders from attack.",
    "blank": "secure"
  },
  {
    "id": 243,
    "word": "discard",
    "meaning": "버리다, 포기하다",
    "example": "It's better to donate used clothes than to {discard} them.",
    "blank": "discard"
  },
  {
    "id": 244,
    "word": "tear",
    "meaning": "눈물; 구멍, 찢어진 틈; 찢다",
    "example": "He {tore} the paper in anger.",
    "blank": "tore"
  },
  {
    "id": 245,
    "word": "worthwhile",
    "meaning": "가치 있는, ~할 가치가 있는",
    "example": "It's {worthwhile} to help others in need.",
    "blank": "worthwhile"
  },
  {
    "id": 246,
    "word": "sacrifice",
    "meaning": "희생하다; 제물로 바치다; 희생",
    "example": "Don't forget those who {sacrificed} themselves for their country.",
    "blank": "sacrificed"
  },
  {
    "id": 247,
    "word": "coordinate",
    "meaning": "조직화하다, 편성하다; 조정하다; 동등한",
    "example": "The team leader tried to {coordinate} the project schedules.",
    "blank": "coordinate"
  },
  {
    "id": 248,
    "word": "engage",
    "meaning": "참여하다, 관여하다; 고용하다; (관심을) 끌다; 관계를 맺다",
    "example": "Only 15% of students in our school {engage} in regular exercise.",
    "blank": "engage"
  },
  {
    "id": 249,
    "word": "utilize",
    "meaning": "이용하다, 활용하다",
    "example": "You should {utilize} all the tools given to you.",
    "blank": "utilize"
  },
  {
    "id": 250,
    "word": "commence",
    "meaning": "시작되다, 시작하다",
    "example": "The next term is scheduled to {commence} in January.",
    "blank": "commence"
  },
  {
    "id": 251,
    "word": "apparent",
    "meaning": "명백한, 분명한; 겉보기의",
    "example": "The reasons why he didn't attend the meeting became {apparent}.",
    "blank": "apparent"
  },
  {
    "id": 252,
    "word": "rehearse",
    "meaning": "예행연습[리허설]을 하다",
    "example": "The actors in the musical were busy {rehearsing} for a performance.",
    "blank": "rehearsing"
  },
  {
    "id": 253,
    "word": "ordinary",
    "meaning": "보통의, 일상적인, 평범한",
    "example": "Drinking coffee as soon as she wakes up is her {ordinary} routine.",
    "blank": "ordinary"
  },
  {
    "id": 254,
    "word": "gaze",
    "meaning": "빤히 보다, 응시하다; 응시",
    "example": "She {gazed} at her father with a painful feeling in her heart.",
    "blank": "gazed"
  },
  {
    "id": 255,
    "word": "perspective",
    "meaning": "견해, 관점; 원근법",
    "example": "He offered his {perspective} on the economic recovery.",
    "blank": "perspective"
  },
  {
    "id": 256,
    "word": "compel",
    "meaning": "강요하다, 억지로 행동하게 하다",
    "example": "The soldiers were {compelled} to follow his orders.",
    "blank": "compelled"
  },
  {
    "id": 257,
    "word": "release",
    "meaning": "놓아주다, 석방하다; 발표[개봉]하다; (감정을) 표출하다; 석방; 발표, 개봉; 표출",
    "example": "He {released} the fish that he caught.",
    "blank": "released"
  },
  {
    "id": 258,
    "word": "spill",
    "meaning": "엎지르다, 흘리다; 유출",
    "example": "The baby {spilt} the milk on the bed.",
    "blank": "spilt"
  },
  {
    "id": 259,
    "word": "disclose",
    "meaning": "드러내다, 폭로하다",
    "example": "Companies must not {disclose} the private information of their employees.",
    "blank": "disclose"
  },
  {
    "id": 260,
    "word": "swear",
    "meaning": "맹세하다, 선언하다; 욕을 하다",
    "example": "He raised his right hand and {swore} to tell the truth in the courtroom.",
    "blank": "swore"
  },
  {
    "id": 261,
    "word": "passion",
    "meaning": "열정, 정열",
    "example": "She always has a {passion} for helping those in need.",
    "blank": "passion"
  },
  {
    "id": 262,
    "word": "negotiate",
    "meaning": "협상하다, 교섭하다",
    "example": "The player asked the owner of his team to {negotiate} his annual salary.",
    "blank": "negotiate"
  },
  {
    "id": 263,
    "word": "rotate",
    "meaning": "회전하다[시키다]; 교대[순환] 근무를 하다",
    "example": "The earth {rotates} on its axis once each day.",
    "blank": "rotates"
  },
  {
    "id": 264,
    "word": "subject",
    "meaning": "주제; 과목; 영향을 받는; 복종시키다",
    "example": "This contract is {subject} to the laws of Korea.",
    "blank": "subject"
  },
  {
    "id": 265,
    "word": "comprehensible",
    "meaning": "이해할 수 있는",
    "example": "His lecture was not {comprehensible} to me.",
    "blank": "comprehensible"
  },
  {
    "id": 266,
    "word": "comprehensive",
    "meaning": "포괄적인, 종합적인",
    "example": "By taking this course, you will gain {comprehensive} knowledge.",
    "blank": "comprehensive"
  },
  {
    "id": 267,
    "word": "common",
    "meaning": "일반의, 흔한; 공통의",
    "example": "Cancer is one of the most {common} causes of death.",
    "blank": "common"
  },
  {
    "id": 268,
    "word": "quote",
    "meaning": "인용하다, 일부를 발췌해서 쓰다; 인용구[문]",
    "example": "This story has direct {quotes} from the newspaper articles.",
    "blank": "quotes"
  },
  {
    "id": 269,
    "word": "burden",
    "meaning": "부담, 짐; 부담[짐]을 지우다",
    "example": "a financial {burden} of private education costs",
    "blank": "burden"
  },
  {
    "id": 270,
    "word": "thrive",
    "meaning": "번성하다, 번영하다",
    "example": "Some traditional villages continue to {thrive}.",
    "blank": "thrive"
  },
  {
    "id": 271,
    "word": "investigate",
    "meaning": "조사하다, 연구하다",
    "example": "The police are {investigating} the cause of the accident.",
    "blank": "investigating"
  },
  {
    "id": 272,
    "word": "exploit",
    "meaning": "(부당하게) 이용하다, 착취하다; (자원 등을) 개발하다",
    "example": "Many children in poor countries were {exploited} as factory laborers.",
    "blank": "exploited"
  },
  {
    "id": 273,
    "word": "figure",
    "meaning": "수치; (중요) 인물; 모습, 사람; 몸매; 도형",
    "example": "He is a well-known historical {figure}.",
    "blank": "figure"
  },
  {
    "id": 274,
    "word": "spread",
    "meaning": "퍼뜨리다, 확산되다; 펼치다; 펴 바르다; 확산",
    "example": "The last year's fire {spread} quickly through the forest.",
    "blank": "spread"
  },
  {
    "id": 275,
    "word": "split",
    "meaning": "분열되다[시키다]; 나뉘다[나누다]; 쪼개지다",
    "example": "The student council {split} over the issue.",
    "blank": "split"
  },
  {
    "id": 276,
    "word": "explode",
    "meaning": "폭발하다[시키다]",
    "example": "The bomb {exploded} with thunderous roar.",
    "blank": "exploded"
  },
  {
    "id": 277,
    "word": "valuable",
    "meaning": "값비싼; 귀중한",
    "example": "A {valuable} picture in the museum was stolen last night.",
    "blank": "valuable"
  },
  {
    "id": 278,
    "word": "invaluable",
    "meaning": "매우 유용한, 귀중한",
    "example": "The task was worthwhile; it was a challenging but {invaluable} experience.",
    "blank": "invaluable"
  },
  {
    "id": 279,
    "word": "disprove",
    "meaning": "오류를 입증하다, 반증하다",
    "example": "The scientists accepted his theory because they couldn't {disprove} it.",
    "blank": "disprove"
  },
  {
    "id": 280,
    "word": "accomplish",
    "meaning": "성취하다, 완수하다",
    "example": "He did his best to {accomplish} the task.",
    "blank": "accomplish"
  },
  {
    "id": 281,
    "word": "purify",
    "meaning": "정화하다; 순화하다",
    "example": "I bought some living plants to {purify} the air indoors.",
    "blank": "purify"
  },
  {
    "id": 282,
    "word": "primary",
    "meaning": "주요한; 최초의",
    "example": "The {primary} cause of her failure was her laziness.",
    "blank": "primary"
  },
  {
    "id": 283,
    "word": "approve",
    "meaning": "찬성하다; 승인하다",
    "example": "My parents {approved} of my plan to study abroad.",
    "blank": "approved"
  },
  {
    "id": 284,
    "word": "facilitate",
    "meaning": "촉진하다, 용이하게 하다",
    "example": "This system can help {facilitate} communication between departments.",
    "blank": "facilitate"
  },
  {
    "id": 285,
    "word": "opposite",
    "meaning": "정반대의; 반대쪽의; ~의 맞은편에; 반대(되는 것)",
    "example": "His opinion is {opposite} to yours.",
    "blank": "opposite"
  },
  {
    "id": 286,
    "word": "bump",
    "meaning": "충돌하다, 부딪치다; (부딪치는 소리) 쿵, 탁; 타박상, 혹",
    "example": "I accidentally {bumped} into someone at the airport.",
    "blank": "bumped"
  },
  {
    "id": 287,
    "word": "purpose",
    "meaning": "목적, 의도",
    "example": "What's the {purpose} of your life?",
    "blank": "purpose"
  },
  {
    "id": 288,
    "word": "plain",
    "meaning": "명백한; 솔직한; 무늬가 없는; 평지, 평원",
    "example": "It is a {plain} fact that drinking is harmful to your health.",
    "blank": "plain"
  },
  {
    "id": 289,
    "word": "nominate",
    "meaning": "지명하다, 임명하다",
    "example": "She was {nominated} as the best actress of the year.",
    "blank": "nominated"
  },
  {
    "id": 290,
    "word": "shift",
    "meaning": "이동하다; 바꾸다; 변화; 교대",
    "example": "There has been a population {shift} from rural to urban areas.",
    "blank": "shift"
  },
  {
    "id": 291,
    "word": "trigger",
    "meaning": "촉발시키다; 작동시키다; 방아쇠; 계기",
    "example": "His speech {triggered} a huge debate.",
    "blank": "triggered"
  },
  {
    "id": 292,
    "word": "acquire",
    "meaning": "얻다, 습득하다; 획득하다",
    "example": "He {acquired} wealth and fame through his business.",
    "blank": "acquired"
  },
  {
    "id": 293,
    "word": "embrace",
    "meaning": "포용하다; 받아들이다; 포옹; 수락, 용인",
    "example": "The students were encouraged to {embrace} the challenges before them.",
    "blank": "embrace"
  },
  {
    "id": 294,
    "word": "humanity",
    "meaning": "인간성, 인류",
    "example": "Scientists have presented many different theories about what could cause the extinction of {humanity}.",
    "blank": "humanity"
  },
  {
    "id": 295,
    "word": "virtue",
    "meaning": "미덕, 덕목; 장점",
    "example": "Sometimes silence is considered to be a {virtue}.",
    "blank": "virtue"
  },
  {
    "id": 296,
    "word": "compete",
    "meaning": "경쟁하다; 겨루다, (시합 등에) 참가하다",
    "example": "The two companies are {competing} for the contract.",
    "blank": "competing"
  },
  {
    "id": 297,
    "word": "applaud",
    "meaning": "박수갈채하다; 칭찬하다",
    "example": "Everybody stood up to {applaud} their great performance.",
    "blank": "applaud"
  },
  {
    "id": 298,
    "word": "stir",
    "meaning": "휘젓다, 뒤섞다; 움직이다; 마음을 흔들다",
    "example": "I helped my mother peel onions and {stir} the soup.",
    "blank": "stir"
  },
  {
    "id": 299,
    "word": "vibrate",
    "meaning": "흔들리다, 진동하다",
    "example": "I had set my cell phone to {vibrate}, so I didn't hear it ring.",
    "blank": "vibrate"
  },
  {
    "id": 300,
    "word": "soak",
    "meaning": "흠뻑 적시다; 담그다[담기다]",
    "example": "His clothes were {soaked} in sweat.",
    "blank": "soaked"
  },
  {
    "id": 301,
    "word": "annual",
    "meaning": "매년의, 연례의",
    "example": "The family gathering is an important {annual} event for me.",
    "blank": "annual"
  },
  {
    "id": 302,
    "word": "dare",
    "meaning": "감히 ~하다, (위험을) 무릅쓰다",
    "example": "They didn't {dare} complain to their strict parents.",
    "blank": "dare"
  },
  {
    "id": 303,
    "word": "confident",
    "meaning": "자신 있는; 확신하는",
    "example": "He felt more {confident} about his appearance.",
    "blank": "confident"
  },
  {
    "id": 304,
    "word": "confidential",
    "meaning": "비밀의, 기밀의",
    "example": "All {confidential} papers should be stored in a locked cabinet.",
    "blank": "confidential"
  },
  {
    "id": 305,
    "word": "innovate",
    "meaning": "혁신하다, 쇄신하다",
    "example": "It is not easy to {innovate} an established business.",
    "blank": "innovate"
  },
  {
    "id": 306,
    "word": "scatter",
    "meaning": "(흩)뿌리다; 흩어지다[흩어지게 하다]",
    "example": "The leaves fell and {scattered} on the ground.",
    "blank": "scattered"
  },
  {
    "id": 307,
    "word": "obscure",
    "meaning": "모호한; 잘 알려지지 않은; 모호하게 하다",
    "example": "She gave an {obscure} answer to my proposal.",
    "blank": "obscure"
  },
  {
    "id": 308,
    "word": "lie",
    "meaning": "눕다; (~의 상태로) 있다; 거짓말하다; 거짓말",
    "example": "He {lay} down on the beach to sunbathe.",
    "blank": "lay"
  },
  {
    "id": 309,
    "word": "lay",
    "meaning": "놓다, 두다; (알을) 낳다",
    "example": "I {laid} my wool scarf on the table.",
    "blank": "laid"
  },
  {
    "id": 310,
    "word": "recover",
    "meaning": "회복하다; 되찾다",
    "example": "He {recovered} quickly from shoulder surgery.",
    "blank": "recovered"
  },
  {
    "id": 311,
    "word": "range",
    "meaning": "범위; 다양성; 포함하다, (범위가 ~에서 ...에) 이르다",
    "example": "She has a wide {range} of knowledge and experience in this area.",
    "blank": "range"
  },
  {
    "id": 312,
    "word": "compensate",
    "meaning": "보상하다, 변상하다",
    "example": "Nothing can {compensate} for the loss of hope in a man.",
    "blank": "compensate"
  },
  {
    "id": 313,
    "word": "merit",
    "meaning": "장점; (칭찬할 만한) 가치, 우수성",
    "example": "The {merit} of the plan is that it will not be hard to fund.",
    "blank": "merit"
  },
  {
    "id": 314,
    "word": "produce",
    "meaning": "생산하다, 제조하다; 야기하다; 농산물",
    "example": "Japanese green tea is {produced} in many localities in Japan.",
    "blank": "produced"
  },
  {
    "id": 315,
    "word": "license",
    "meaning": "면허, 인가; 면허를 주다, 허가하다",
    "example": "I got my driver's {license} last month.",
    "blank": "license"
  },
  {
    "id": 316,
    "word": "regulate",
    "meaning": "규제하다; 조정하다",
    "example": "Most economists objected to {regulating} foreign investment.",
    "blank": "regulating"
  },
  {
    "id": 317,
    "word": "display",
    "meaning": "전시[진열]하다; 드러내다; 전시; 표현, 과시",
    "example": "The masterpieces by great artists will be {displayed} in the art museum.",
    "blank": "displayed"
  },
  {
    "id": 318,
    "word": "considerable",
    "meaning": "상당한, 적지 않은",
    "example": "Brownies contain a {considerable} quantity of sugar.",
    "blank": "considerable"
  },
  {
    "id": 319,
    "word": "considerate",
    "meaning": "사려 깊은, 이해심[동정심]이 많은",
    "example": "He is always {considerate} towards his colleagues.",
    "blank": "considerate"
  },
  {
    "id": 320,
    "word": "orphan",
    "meaning": "고아",
    "example": "Many children became {orphans} due to the war.",
    "blank": "orphans"
  },
  {
    "id": 321,
    "word": "electronic",
    "meaning": "전자의, 전자공학의",
    "example": "This {electronic} device is small and convenient to use.",
    "blank": "electronic"
  },
  {
    "id": 322,
    "word": "survive",
    "meaning": "살아남다, 생존하다; (위기 등을) 견뎌 내다",
    "example": "The boy was the only person who {survived} the accident.",
    "blank": "survived"
  },
  {
    "id": 323,
    "word": "string",
    "meaning": "끈, 줄; 묶다, 끈을 달다",
    "example": "She started to untie the {string} of the box carefully.",
    "blank": "string"
  },
  {
    "id": 324,
    "word": "expertise",
    "meaning": "전문 지식[기술]",
    "example": "It requires {expertise} to produce a piece of furniture.",
    "blank": "expertise"
  },
  {
    "id": 325,
    "word": "dread",
    "meaning": "몹시 무서워하다, 두려워하다; 두려움",
    "example": "I {dread} to think what will happen if an earthquake occurs.",
    "blank": "dread"
  },
  {
    "id": 326,
    "word": "escape",
    "meaning": "달아나다, 탈출하다, 벗어나다; 탈출, 도피",
    "example": "They broke down the window and {escaped} from the burning building.",
    "blank": "escaped"
  },
  {
    "id": 327,
    "word": "uncover",
    "meaning": "덮개를 열다; 폭로하다",
    "example": "The journalist worked hard to {uncover} details about the story.",
    "blank": "uncover"
  },
  {
    "id": 328,
    "word": "tackle",
    "meaning": "기구, 도구; 다루다; 착수하다",
    "example": "He decided to {tackle} the problem alone.",
    "blank": "tackle"
  },
  {
    "id": 329,
    "word": "urge",
    "meaning": "재촉하다; 강제하다; 설득하다; 충동; 열망",
    "example": "The boy's friends {urged} him to sign up for the contest.",
    "blank": "urged"
  },
  {
    "id": 330,
    "word": "liquid",
    "meaning": "액체의, 맑은; 액체",
    "example": "I prefer to use {liquid} laundry detergent.",
    "blank": "liquid"
  },
  {
    "id": 331,
    "word": "occupy",
    "meaning": "차지하다; (마음·주의 등을) 끌다; 점령하다",
    "example": "She hoped that she would soon {occupy} a position of authority in the company.",
    "blank": "occupy"
  },
  {
    "id": 332,
    "word": "pursue",
    "meaning": "추구하다; 뒤쫓다",
    "example": "The company {pursues} a goal of providing the best service.",
    "blank": "pursues"
  },
  {
    "id": 333,
    "word": "restoration",
    "meaning": "복구, 복원; 회복",
    "example": "The {restoration} of the old castle is now underway.",
    "blank": "restoration"
  },
  {
    "id": 334,
    "word": "worship",
    "meaning": "숭배하다; 예배를 보다; 숭배, 예배",
    "example": "Hindus {worship} the cow as a sacred animal.",
    "blank": "worship"
  },
  {
    "id": 335,
    "word": "assign",
    "meaning": "할당하다, 배정하다",
    "example": "I was {assigned} the task of managing financial matters.",
    "blank": "assigned"
  },
  {
    "id": 336,
    "word": "degree",
    "meaning": "정도; (각도·온도계의) 도; 학위",
    "example": "This work requires a high {degree} of specialist knowledge.",
    "blank": "degree"
  },
  {
    "id": 337,
    "word": "associate",
    "meaning": "연상하다, 연관 짓다; 교제하다",
    "example": "Obesity is closely {associated} with several chronic diseases.",
    "blank": "associated"
  },
  {
    "id": 338,
    "word": "prospect",
    "meaning": "가망, 가능성; ((-s)) 전망",
    "example": "There seems to be no {prospect} of winning this game.",
    "blank": "prospect"
  },
  {
    "id": 339,
    "word": "likewise",
    "meaning": "마찬가지로",
    "example": "If you leave them alone, they'll do {likewise}.",
    "blank": "likewise"
  },
  {
    "id": 340,
    "word": "industrial",
    "meaning": "산업[공업]의; 공업용의",
    "example": "{Industrial} waste contaminated the river.",
    "blank": "Industrial"
  },
  {
    "id": 341,
    "word": "aspect",
    "meaning": "측면; 방향",
    "example": "I had a hard time understanding the technical {aspect} of this project.",
    "blank": "aspect"
  },
  {
    "id": 342,
    "word": "endeavor",
    "meaning": "노력하다, 시도하다; 노력, 시도",
    "example": "He {endeavored} to conceal his feelings from others.",
    "blank": "endeavored"
  },
  {
    "id": 343,
    "word": "bond",
    "meaning": "유대; ((-s)) 속박; 채권; 유대를 맺다",
    "example": "The {bond} between mother and child is incredibly strong.",
    "blank": "bond"
  },
  {
    "id": 344,
    "word": "shrink",
    "meaning": "줄어들다[줄어들게 하다]",
    "example": "The king penguin populations are {shrinking} due to global warming.",
    "blank": "shrinking"
  },
  {
    "id": 345,
    "word": "insist",
    "meaning": "주장하다; 고집하다, 우기다",
    "example": "Despite the evidence, he {insisted} on his innocence.",
    "blank": "insisted"
  },
  {
    "id": 346,
    "word": "sacred",
    "meaning": "신성한, 성스러운",
    "example": "The museum was full of {sacred} artifacts from ancient religions.",
    "blank": "sacred"
  },
  {
    "id": 347,
    "word": "ridiculous",
    "meaning": "우스운, 터무니없는",
    "example": "I don't believe such a {ridiculous} rumor.",
    "blank": "ridiculous"
  },
  {
    "id": 348,
    "word": "establish",
    "meaning": "수립하다, 설립하다",
    "example": "The company was {established} in 1870.",
    "blank": "established"
  },
  {
    "id": 349,
    "word": "pale",
    "meaning": "핏기 없는, 창백한; (색깔이) 엷은",
    "example": "On hearing about his death, she turned {pale} with shock.",
    "blank": "pale"
  },
  {
    "id": 350,
    "word": "restrict",
    "meaning": "제한하다, 한정하다",
    "example": "The government had {restricted} rice imports from abroad.",
    "blank": "restricted"
  },
  {
    "id": 351,
    "word": "overcome",
    "meaning": "극복하다, 이겨내다",
    "example": "How did you {overcome} the biggest obstacle to your success?",
    "blank": "overcome"
  },
  {
    "id": 352,
    "word": "activate",
    "meaning": "작동시키다, 활성화하다",
    "example": "The smoke detector was {activated} by his cigarette.",
    "blank": "activated"
  },
  {
    "id": 353,
    "word": "popularity",
    "meaning": "인기; 대중성",
    "example": "Smart devices have gained {popularity} in recent years.",
    "blank": "popularity"
  },
  {
    "id": 354,
    "word": "population",
    "meaning": "인구, (모든) 주민",
    "example": "More than half of the world's {population} lives in cities.",
    "blank": "population"
  },
  {
    "id": 355,
    "word": "precious",
    "meaning": "귀중한, 값비싼; 소중한",
    "example": "The school field trip will make {precious} memories for students.",
    "blank": "precious"
  },
  {
    "id": 356,
    "word": "construct",
    "meaning": "건설하다, 조립하다; 구성하다; 구조물",
    "example": "The Tower Bridge was {constructed} in the Gothic style.",
    "blank": "constructed"
  },
  {
    "id": 357,
    "word": "instruct",
    "meaning": "지시하다; 가르치다",
    "example": "I did exactly as my boss had {instructed}.",
    "blank": "instructed"
  },
  {
    "id": 358,
    "word": "compulsory",
    "meaning": "강제적인, 의무적인, 필수의",
    "example": "English is one of the {compulsory} subjects in Korea.",
    "blank": "compulsory"
  },
  {
    "id": 359,
    "word": "unique",
    "meaning": "독특한; 유일(무이)한",
    "example": "Everyone possesses {unique} abilities and talents.",
    "blank": "unique"
  },
  {
    "id": 360,
    "word": "illustrate",
    "meaning": "(예를 들어) 설명하다; 삽화를 넣다",
    "example": "She showed some examples to {illustrate} the concept.",
    "blank": "illustrate"
  },
  {
    "id": 361,
    "word": "distinguish",
    "meaning": "구별하다, 식별하다",
    "example": "An infant can {distinguish} its mother's voice from other voices.",
    "blank": "distinguish"
  },
  {
    "id": 362,
    "word": "crop",
    "meaning": "농작물, 수확물; 자르다; 재배하다, 수확하다",
    "example": "The farmers were busy gathering their {crops}.",
    "blank": "crops"
  },
  {
    "id": 363,
    "word": "otherwise",
    "meaning": "만약 그렇지 않다면",
    "example": "Hurry up; {otherwise}, you'll be late.",
    "blank": "otherwise"
  },
  {
    "id": 364,
    "word": "certificate",
    "meaning": "증명서, 수료증; 증명하다",
    "example": "The students were excited to receive their graduation {certificate}.",
    "blank": "certificate"
  },
  {
    "id": 365,
    "word": "trait",
    "meaning": "특성, 특징",
    "example": "Every culture has its own particular {traits}.",
    "blank": "traits"
  },
  {
    "id": 366,
    "word": "punish",
    "meaning": "처벌하다, 벌주다",
    "example": "He was {punished} for breaking the rules.",
    "blank": "punished"
  },
  {
    "id": 367,
    "word": "appropriate",
    "meaning": "적절한, 알맞은",
    "example": "an {appropriate} way of expressing your anger",
    "blank": "appropriate"
  },
  {
    "id": 368,
    "word": "raise",
    "meaning": "올리다; 모금하다; 기르다; 제기하다",
    "example": "We {raised} money for flood victims.",
    "blank": "raised"
  },
  {
    "id": 369,
    "word": "specific",
    "meaning": "구체적인, 명확한; 특정한",
    "example": "Establish a {specific} goal to reach.",
    "blank": "specific"
  },
  {
    "id": 370,
    "word": "translate",
    "meaning": "번역하다, 해석하다",
    "example": "He has {translated} this Korean novel into English.",
    "blank": "translated"
  },
  {
    "id": 371,
    "word": "horizon",
    "meaning": "((the ~)) 지평선, 수평선; ((-s)) 시야",
    "example": "The sun just rose above the {horizon}.",
    "blank": "horizon"
  },
  {
    "id": 372,
    "word": "inhibit",
    "meaning": "억제하다, 못하게 하다",
    "example": "Stress may {inhibit} the release of growth hormone.",
    "blank": "inhibit"
  },
  {
    "id": 373,
    "word": "divine",
    "meaning": "신의, 신성한",
    "example": "The paintings of the angels in the cathedral were truly {divine}.",
    "blank": "divine"
  },
  {
    "id": 374,
    "word": "unify",
    "meaning": "통일하다, 통합하다",
    "example": "The Silla Dynasty {unified} the Korean Peninsula for the first time in history.",
    "blank": "unified"
  },
  {
    "id": 375,
    "word": "prohibit",
    "meaning": "금지하다; ~하지 못하게 하다",
    "example": "All flights are {prohibited} from landing due to the heavy storm.",
    "blank": "prohibited"
  },
  {
    "id": 376,
    "word": "retreat",
    "meaning": "후퇴, 철수; 물러서다, 후퇴하다",
    "example": "The soldiers cheered at the {retreat} of their enemies.",
    "blank": "retreat"
  },
  {
    "id": 377,
    "word": "equipment",
    "meaning": "장비, 용품; 설치, 설비",
    "example": "Check all the {equipment} before use.",
    "blank": "equipment"
  },
  {
    "id": 378,
    "word": "intuition",
    "meaning": "직관력; 직감, 직관",
    "example": "Her {intuition} told her that something had gone wrong.",
    "blank": "intuition"
  },
  {
    "id": 379,
    "word": "whereas",
    "meaning": "그런데, ~에 반해서",
    "example": "The old system was complicated {whereas} the new system is simple.",
    "blank": "whereas"
  },
  {
    "id": 380,
    "word": "ruin",
    "meaning": "망치다; 파괴, 붕괴; 잔해, 폐허",
    "example": "I don't want to {ruin} my career because of that mistake.",
    "blank": "ruin"
  },
  {
    "id": 381,
    "word": "successful",
    "meaning": "성공한, 성공적인",
    "example": "His lung cancer surgery was completely {successful}.",
    "blank": "successful"
  },
  {
    "id": 382,
    "word": "successive",
    "meaning": "연속적인, 연이은",
    "example": "Emma won the singing contest for the third {successive} year.",
    "blank": "successive"
  },
  {
    "id": 383,
    "word": "splendid",
    "meaning": "화려한, 아주 인상적인",
    "example": "The house was decorated with {splendid} ornaments.",
    "blank": "splendid"
  },
  {
    "id": 384,
    "word": "routine",
    "meaning": "틀에 박힌 일, 일과; 일상적인; 지루한",
    "example": "To jog in the morning is a part of my daily {routine}.",
    "blank": "routine"
  },
  {
    "id": 385,
    "word": "comparative",
    "meaning": "비교의; 상대적인",
    "example": "He completed a {comparative} study of small-business employment.",
    "blank": "comparative"
  },
  {
    "id": 386,
    "word": "comparable",
    "meaning": "비슷한; ~에 필적하는",
    "example": "The taste of his food is {comparable} to that of a professor.",
    "blank": "comparable"
  },
  {
    "id": 387,
    "word": "randomly",
    "meaning": "임의로",
    "example": "The test samples were extracted {randomly}.",
    "blank": "randomly"
  },
  {
    "id": 388,
    "word": "implication",
    "meaning": "함축, 암시; 영향, 결과",
    "example": "The event holds great {implications} for us.",
    "blank": "implications"
  },
  {
    "id": 389,
    "word": "pretend",
    "meaning": "~인 척하다, 가장하다",
    "example": "She {pretended} not to see him.",
    "blank": "pretended"
  },
  {
    "id": 390,
    "word": "separate",
    "meaning": "분리하다[되다], 갈라지다[놓다]; 분리된; 별개의",
    "example": "We should {separate} plastic bottles and glass bottles for recycling.",
    "blank": "separate"
  },
  {
    "id": 391,
    "word": "recharge",
    "meaning": "충전하다",
    "example": "I need to {recharge} my cell phone battery.",
    "blank": "recharge"
  },
  {
    "id": 392,
    "word": "remain",
    "meaning": "여전히 ~인 채로 있다; 남다; 머무르다; ((-s)) 남은 것, 유적",
    "example": "He {remained} at home to take care of his sick son.",
    "blank": "remained"
  },
  {
    "id": 393,
    "word": "reproduce",
    "meaning": "번식하다; 재생하다, 재현하다; 복사하다, 복제하다",
    "example": "Medieval clothing is {reproduced} well in the movie.",
    "blank": "reproduced"
  },
  {
    "id": 394,
    "word": "reform",
    "meaning": "개혁하다[되다], 개선하다[되다]; 개혁, 개선",
    "example": "The government {reformed} the law relating to the electoral system.",
    "blank": "reformed"
  },
  {
    "id": 395,
    "word": "revolution",
    "meaning": "혁명",
    "example": "Certain writers supported the French {Revolution}.",
    "blank": "Revolution"
  },
  {
    "id": 396,
    "word": "abuse",
    "meaning": "남용하다; 학대하다; 남용; 학대",
    "example": "By {abusing} his power, the manager angered the employees.",
    "blank": "abusing"
  },
  {
    "id": 397,
    "word": "abnormal",
    "meaning": "이상한, 비정상적인",
    "example": "The entire world is experiencing {abnormal} climate change due to global warming.",
    "blank": "abnormal"
  },
  {
    "id": 398,
    "word": "accompany",
    "meaning": "동행하다, 동반하다; 수반하여 일어나다",
    "example": "Children under six must be {accompanied} by an adult within arm's reach.",
    "blank": "accompanied"
  },
  {
    "id": 399,
    "word": "accumulate",
    "meaning": "모으다[모이다], 축적하다[되다]",
    "example": "She {accumulated} wealth through hard work.",
    "blank": "accumulated"
  },
  {
    "id": 400,
    "word": "accustomed",
    "meaning": "익숙해진, 길들여진",
    "example": "He is getting {accustomed} to his new job.",
    "blank": "accustomed"
  },
  {
    "id": 401,
    "word": "advocate",
    "meaning": "옹호하다, 지지하다; 옹호자, 지지자; 변호사",
    "example": "He {advocates} human rights for the powerless.",
    "blank": "advocates"
  },
  {
    "id": 402,
    "word": "prolong",
    "meaning": "연장하다, 연기하다",
    "example": "The project was {prolonged} because of the financial problem.",
    "blank": "prolonged"
  },
  {
    "id": 403,
    "word": "prophecy",
    "meaning": "예언(력)",
    "example": "Her {prophecy} that he would be king soon came true.",
    "blank": "prophecy"
  },
  {
    "id": 404,
    "word": "progress",
    "meaning": "진행, 진전; 진보, 발달; 진행되다; 진보하다; 나아가다",
    "example": "The students showed {progress} in their language studies.",
    "blank": "progress"
  },
  {
    "id": 405,
    "word": "combat",
    "meaning": "전투; 싸우다, 투쟁하다",
    "example": "A lot of soldiers were killed in the {combat}.",
    "blank": "combat"
  },
  {
    "id": 406,
    "word": "compile",
    "meaning": "편집하다, 편찬하다; (자료를) 수집하다",
    "example": "It takes a lot of time to {compile} a book.",
    "blank": "compile"
  },
  {
    "id": 407,
    "word": "compromise",
    "meaning": "타협, 절충; 타협하다, 화해하다",
    "example": "In the end, both parties reached a {compromise}.",
    "blank": "compromise"
  },
  {
    "id": 408,
    "word": "condense",
    "meaning": "응결[농축]시키다, 응결되다; 요약하다",
    "example": "Would you please {condense} the main points using a few words?",
    "blank": "condense"
  },
  {
    "id": 409,
    "word": "conform",
    "meaning": "(관습 등에) 따르다, 순응하다",
    "example": "You should {conform} to standard etiquette in public places.",
    "blank": "conform"
  },
  {
    "id": 410,
    "word": "confront",
    "meaning": "직면하다; 맞서다",
    "example": "The politician's plan was {confronted} by strong opposition.",
    "blank": "confronted"
  },
  {
    "id": 411,
    "word": "contagious",
    "meaning": "전염성의, 옮기 쉬운",
    "example": "The flu is very {contagious}.",
    "blank": "contagious"
  },
  {
    "id": 412,
    "word": "coincidence",
    "meaning": "(우연의) 일치",
    "example": "I just bought the same book. What a {coincidence}!",
    "blank": "coincidence"
  },
  {
    "id": 413,
    "word": "geography",
    "meaning": "지리학; 지형, 지리",
    "example": "He wants to be a {geography} teacher.",
    "blank": "geography"
  },
  {
    "id": 414,
    "word": "geology",
    "meaning": "지질학; (어떤 지역의) 지질학적 특징",
    "example": "She's taking a {geology} course this semester.",
    "blank": "geology"
  },
  {
    "id": 415,
    "word": "geometry",
    "meaning": "기하학",
    "example": "I majored in {geometry} in college.",
    "blank": "geometry"
  },
  {
    "id": 416,
    "word": "controversial",
    "meaning": "논쟁의, 논쟁의 여지가 있는",
    "example": "Human cloning is still a {controversial} issue.",
    "blank": "controversial"
  },
  {
    "id": 417,
    "word": "contrast",
    "meaning": "대조; 대조가 되는 것; 대조하다; 대조를 이루다",
    "example": "In {contrast} with his appearance, he is a good student.",
    "blank": "contrast"
  },
  {
    "id": 418,
    "word": "contrary",
    "meaning": "반대의, 정반대인; ((the ~)) 반대(되는 것)",
    "example": "{Contrary} to my expectations, the traffic wasn't heavy.",
    "blank": "Contrary"
  },
  {
    "id": 419,
    "word": "counteract",
    "meaning": "(악영향에) 대응하다, (효력을) 중화하다",
    "example": "This medication will {counteract} the poison.",
    "blank": "counteract"
  },
  {
    "id": 420,
    "word": "counterfeit",
    "meaning": "위조하다; 위조의, 가짜의",
    "example": "They were accused of {counterfeiting} ten-thousand-won bills.",
    "blank": "counterfeiting"
  },
  {
    "id": 421,
    "word": "decode",
    "meaning": "(암호를) 해독하다",
    "example": "The scientist {decoded} the structure of DNA.",
    "blank": "decoded"
  },
  {
    "id": 422,
    "word": "degrade",
    "meaning": "비하하다, 지위를 떨어뜨리다; 분해하다[되다]",
    "example": "Don't {degrade} yourself by telling a lie.",
    "blank": "degrade"
  },
  {
    "id": 423,
    "word": "depart",
    "meaning": "출발하다, 떠나다",
    "example": "Check-in counters close 30 minutes before the flight {departs}.",
    "blank": "departs"
  },
  {
    "id": 424,
    "word": "despise",
    "meaning": "경멸하다, 깔보다",
    "example": "She {despises} the people who oppose her opinion.",
    "blank": "despises"
  },
  {
    "id": 425,
    "word": "diameter",
    "meaning": "지름, 직경",
    "example": "The Earth is about 8,000 miles in {diameter}.",
    "blank": "diameter"
  },
  {
    "id": 426,
    "word": "dialect",
    "meaning": "방언, 사투리",
    "example": "He spoke in a heavy {dialect}, so I hardly understood what he said.",
    "blank": "dialect"
  },
  {
    "id": 427,
    "word": "irregular",
    "meaning": "고르지 않은, 불규칙한",
    "example": "He used to have an {irregular} set of teeth.",
    "blank": "irregular"
  },
  {
    "id": 428,
    "word": "illiterate",
    "meaning": "글을 모르는, 문맹의; 문맹자",
    "example": "Half of the population in the country is {illiterate}.",
    "blank": "illiterate"
  },
  {
    "id": 429,
    "word": "impersonal",
    "meaning": "개인적인 감정을 섞지 않은; 비인격적인",
    "example": "He is {impersonal} when he evaluates his employees' performance.",
    "blank": "impersonal"
  },
  {
    "id": 430,
    "word": "immoral",
    "meaning": "비도덕적인, 부도덕한",
    "example": "The citizens were shocked by the {immoral} acts of the president.",
    "blank": "immoral"
  },
  {
    "id": 431,
    "word": "antibiotic",
    "meaning": "항생제, 항생 물질",
    "example": "A new superbug is resistant to all {antibiotics}.",
    "blank": "antibiotics"
  },
  {
    "id": 432,
    "word": "antonym",
    "meaning": "반의어",
    "example": "'Truth' is the {antonym} of 'falsehood.'",
    "blank": "antonym"
  },
  {
    "id": 433,
    "word": "antipathy",
    "meaning": "반감",
    "example": "Some people felt {antipathy} towards the idea.",
    "blank": "antipathy"
  },
  {
    "id": 434,
    "word": "antarctic",
    "meaning": "((the A~)) 남극 지방, 남극; 남극의",
    "example": "The {Antarctic} has a number of fascinating views.",
    "blank": "Antarctic"
  },
  {
    "id": 435,
    "word": "extraordinary",
    "meaning": "비범한, 대단한; 이상한",
    "example": "She has an {extraordinary} power to solve riddles.",
    "blank": "extraordinary"
  },
  {
    "id": 436,
    "word": "enforce",
    "meaning": "시행하다, 집행하다; 강요하다",
    "example": "We can't {enforce} a law which society doesn't accept.",
    "blank": "enforce"
  },
  {
    "id": 437,
    "word": "entitle",
    "meaning": "자격[권리]을 주다; (~라고) 표제를 붙이다",
    "example": "All residents are {entitled} to vote in this local election.",
    "blank": "entitled"
  },
  {
    "id": 438,
    "word": "endanger",
    "meaning": "위험에 빠뜨리다",
    "example": "The habitat of the birds is {endangered} by global warming.",
    "blank": "endangered"
  },
  {
    "id": 439,
    "word": "encounter",
    "meaning": "(위험에) 부닥치다; 마주치다; (예상 밖의) 만남",
    "example": "He'll {encounter} many problems before reaching his goal.",
    "blank": "encounter"
  },
  {
    "id": 440,
    "word": "endure",
    "meaning": "참다, 견디다",
    "example": "I couldn't {endure} his insulting remarks.",
    "blank": "endure"
  },
  {
    "id": 441,
    "word": "enclose",
    "meaning": "둘러싸다; 동봉하다",
    "example": "His house is fully {enclosed} by tall trees.",
    "blank": "enclosed"
  },
  {
    "id": 442,
    "word": "enlighten",
    "meaning": "계몽하다, (설명하여) 이해시키다",
    "example": "The philosopher {enlightened} the people with his teachings.",
    "blank": "enlightened"
  },
  {
    "id": 443,
    "word": "enrol(l)",
    "meaning": "등록하다, 입학[입회]하다",
    "example": "He decided to {enroll} in an online English language course.",
    "blank": "enroll"
  },
  {
    "id": 444,
    "word": "external",
    "meaning": "외부의, 밖의",
    "example": "We tend to judge people by their {external} appearance.",
    "blank": "external"
  },
  {
    "id": 445,
    "word": "extinct",
    "meaning": "멸종된, 사라진; (화산 등이) 활동을 멈춘",
    "example": "Dinosaurs were {extinct} millions of years ago.",
    "blank": "extinct"
  },
  {
    "id": 446,
    "word": "exaggerate",
    "meaning": "과장하다",
    "example": "Reporters must not {exaggerate} or distort facts.",
    "blank": "exaggerate"
  },
  {
    "id": 447,
    "word": "exceed",
    "meaning": "넘다, 초과하다",
    "example": "Drivers who {exceed} the speed limit consume more gasoline.",
    "blank": "exceed"
  },
  {
    "id": 448,
    "word": "foresee",
    "meaning": "예견하다",
    "example": "Nobody could {foresee} the results of the election.",
    "blank": "foresee"
  },
  {
    "id": 449,
    "word": "foretell",
    "meaning": "예언하다, 예고하다",
    "example": "No one can {foretell} what will happen next.",
    "blank": "foretell"
  },
  {
    "id": 450,
    "word": "forecast",
    "meaning": "예보하다, 예측하다; 예보, 예측",
    "example": "What's the weather {forecast} for tomorrow?",
    "blank": "forecast"
  },
  {
    "id": 451,
    "word": "dissolve",
    "meaning": "녹다[녹이다]; 해산하다",
    "example": "This detergent {dissolves} easily in water.",
    "blank": "dissolves"
  },
  {
    "id": 452,
    "word": "discourage",
    "meaning": "용기를 잃게 하다, 낙담시키다; 단념시키다",
    "example": "Never {discourage} anyone who continually makes progress.",
    "blank": "discourage"
  },
  {
    "id": 453,
    "word": "dismiss",
    "meaning": "해고하다; 묵살하다; 해산시키다",
    "example": "Many employees were {dismissed} during the economic crisis.",
    "blank": "dismissed"
  },
  {
    "id": 454,
    "word": "disorder",
    "meaning": "혼란, 무질서; (심신의) 이상, 장애",
    "example": "The house was in a state of complete {disorder}.",
    "blank": "disorder"
  },
  {
    "id": 455,
    "word": "disposal",
    "meaning": "처리; 처분",
    "example": "He developed an eco-friendly garbage {disposal} system.",
    "blank": "disposal"
  },
  {
    "id": 456,
    "word": "inevitable",
    "meaning": "피할 수 없는, 불가피한",
    "example": "Changes in the education system are an {inevitable} trend.",
    "blank": "inevitable"
  },
  {
    "id": 457,
    "word": "intolerable",
    "meaning": "참을 수 없는, 견딜 수 없는",
    "example": "The patient complained of having {intolerable} pains.",
    "blank": "intolerable"
  },
  {
    "id": 458,
    "word": "intact",
    "meaning": "온전한, 손상되지 않은",
    "example": "Despite the explosion, most of the windows remained {intact}.",
    "blank": "intact"
  },
  {
    "id": 459,
    "word": "invade",
    "meaning": "침략하다, 침입하다; 침해하다",
    "example": "Iraq {invaded} Kuwait in 1990.",
    "blank": "invaded"
  },
  {
    "id": 460,
    "word": "infect",
    "meaning": "감염시키다; 오염시키다",
    "example": "People who have the flu virus can {infect} others.",
    "blank": "infect"
  },
  {
    "id": 461,
    "word": "insight",
    "meaning": "통찰력",
    "example": "He has a keen {insight} into his customers' habits.",
    "blank": "insight"
  },
  {
    "id": 462,
    "word": "insult",
    "meaning": "모욕하다, 창피를 주다; 모욕",
    "example": "He {insulted} me by not answering my question.",
    "blank": "insulted"
  },
  {
    "id": 463,
    "word": "instinct",
    "meaning": "본능, 본성",
    "example": "Birds have an {instinct} to build nests.",
    "blank": "instinct"
  },
  {
    "id": 464,
    "word": "innate",
    "meaning": "타고난, 선천적인",
    "example": "He has an {innate} sense of humor.",
    "blank": "innate"
  },
  {
    "id": 465,
    "word": "intake",
    "meaning": "섭취(량)",
    "example": "Excessive sugar {intake} increases the risk of diabetes.",
    "blank": "intake"
  },
  {
    "id": 466,
    "word": "intermission",
    "meaning": "(연극·영화 등의) 휴식 시간",
    "example": "During the {intermission}, the actors changed their clothes.",
    "blank": "intermission"
  },
  {
    "id": 467,
    "word": "interpret",
    "meaning": "통역하다; 이해하다, 파악하다; 설명하다",
    "example": "She can easily {interpret} English into Chinese or vice versa.",
    "blank": "interpret"
  },
  {
    "id": 468,
    "word": "interfere",
    "meaning": "간섭하다, 방해하다",
    "example": "I hate it when somebody {interferes} in my business.",
    "blank": "interferes"
  },
  {
    "id": 469,
    "word": "interval",
    "meaning": "간격, 사이; 중간 휴식 시간",
    "example": "During rush hour, they shorten the {interval} between subway trains.",
    "blank": "interval"
  },
  {
    "id": 470,
    "word": "interaction",
    "meaning": "상호 작용, 상호 영향",
    "example": "The {interaction} between the two babies was charming.",
    "blank": "interaction"
  },
  {
    "id": 471,
    "word": "interchange",
    "meaning": "교환하다; 교환; (고속도로의) 교차점, 분기점",
    "example": "The {interchange} of information takes place online.",
    "blank": "interchange"
  },
  {
    "id": 472,
    "word": "subconscious",
    "meaning": "잠재의식; 잠재의식의",
    "example": "He has a {subconscious} fear of flying.",
    "blank": "subconscious"
  },
  {
    "id": 473,
    "word": "subordinate",
    "meaning": "하위의; 부차적인; 하급자; 하위에 두다",
    "example": "He always listens to the suggestions of his {subordinates}.",
    "blank": "subordinates"
  },
  {
    "id": 474,
    "word": "suppress",
    "meaning": "진압하다; 억제하다, 참다",
    "example": "The police were called in to {suppress} a riot on campus.",
    "blank": "suppress"
  },
  {
    "id": 475,
    "word": "subscribe",
    "meaning": "(신문 등을) 구독하다; 서명하다",
    "example": "Fill out this form to {subscribe} to our newspaper.",
    "blank": "subscribe"
  },
  {
    "id": 476,
    "word": "supreme",
    "meaning": "최고의, 최상의",
    "example": "The {supreme} ruler made all of the nation's decisions.",
    "blank": "supreme"
  },
  {
    "id": 477,
    "word": "superb",
    "meaning": "매우 뛰어난, 멋진",
    "example": "He was a {superb} leader because of his warm personality.",
    "blank": "superb"
  },
  {
    "id": 478,
    "word": "magnitude",
    "meaning": "거대함; 중요함, 중대성",
    "example": "People realized the {magnitude} of her accomplishments after she died.",
    "blank": "magnitude"
  },
  {
    "id": 479,
    "word": "majestic",
    "meaning": "위엄 있는, 장엄한",
    "example": "We stayed at a lodge with a {majestic} view.",
    "blank": "majestic"
  },
  {
    "id": 480,
    "word": "masterpiece",
    "meaning": "걸작, 대표작",
    "example": "Many {masterpieces} are on exhibit at this gallery.",
    "blank": "masterpieces"
  },
  {
    "id": 481,
    "word": "outcome",
    "meaning": "결과, 성과",
    "example": "Depending on the {outcome} of the study, the mission will launch by 2020.",
    "blank": "outcome"
  },
  {
    "id": 482,
    "word": "outgoing",
    "meaning": "외향적인, 사교적인",
    "example": "Jenny has an {outgoing} personality.",
    "blank": "outgoing"
  },
  {
    "id": 483,
    "word": "outlet",
    "meaning": "배출구, 표현 수단; 직판점, 아울렛; [전기] 콘센트",
    "example": "Music gave him an {outlet} to express his feelings.",
    "blank": "outlet"
  },
  {
    "id": 484,
    "word": "outline",
    "meaning": "개요; 윤곽, 외형; 개요를 서술하다; 윤곽을 나타내다",
    "example": "He told us the basic {outline} of his plan.",
    "blank": "outline"
  },
  {
    "id": 485,
    "word": "outlook",
    "meaning": "전망; 경치; 견해, 사고방식",
    "example": "The {outlook} for jobs is good.",
    "blank": "outlook"
  },
  {
    "id": 486,
    "word": "outstanding",
    "meaning": "뛰어난, 두드러진",
    "example": "The performance of the new equipment is {outstanding}.",
    "blank": "outstanding"
  },
  {
    "id": 487,
    "word": "outward",
    "meaning": "표면상의, 외형의; 밖으로 향하는",
    "example": "You should not be deceived by {outward} appearances.",
    "blank": "outward"
  },
  {
    "id": 488,
    "word": "outdo",
    "meaning": "~보다 뛰어나다, 능가하다",
    "example": "Our soccer team {outdid} our opponents.",
    "blank": "outdid"
  },
  {
    "id": 489,
    "word": "utmost",
    "meaning": "최대의, 극도의; 최대한도",
    "example": "The company made the {utmost} effort to satisfy its customers.",
    "blank": "utmost"
  },
  {
    "id": 490,
    "word": "utter",
    "meaning": "(입 밖에) 내다, 말하다; 완전한, 전적인",
    "example": "I've never heard him {utter} a complaint.",
    "blank": "utter"
  },
  {
    "id": 491,
    "word": "overlook",
    "meaning": "간과하다; 못 본 체하다; 내려다보다",
    "example": "He seldom {overlooks} mistakes others have made.",
    "blank": "overlooks"
  },
  {
    "id": 492,
    "word": "overflow",
    "meaning": "넘쳐 흐르다; 가득 차다; 넘침, 초과됨",
    "example": "The river {overflowed} its banks last night.",
    "blank": "overflowed"
  },
  {
    "id": 493,
    "word": "overtake",
    "meaning": "따라잡다, 추월하다; 덮치다",
    "example": "It is dangerous to {overtake} another car around a curve.",
    "blank": "overtake"
  },
  {
    "id": 494,
    "word": "overwhelm",
    "meaning": "압도하다; 당황하게 하다; 너무 많아 감당하기 힘들게 하다",
    "example": "We were {overwhelmed} by the scale of the disaster.",
    "blank": "overwhelmed"
  },
  {
    "id": 495,
    "word": "overthrow",
    "meaning": "(지도자·정부를) 전복시키다; 폐지하다; 타도, 전복",
    "example": "The government was {overthrown} by a group of military officers.",
    "blank": "overthrown"
  },
  {
    "id": 496,
    "word": "perish",
    "meaning": "죽다; 소멸하다",
    "example": "Every year a lot of people {perish} from disease.",
    "blank": "perish"
  },
  {
    "id": 497,
    "word": "persist",
    "meaning": "계속 ~하다, 고집하다; 지속하다",
    "example": "She {persisted} in her opinion until we gave up.",
    "blank": "persisted"
  },
  {
    "id": 498,
    "word": "persuade",
    "meaning": "설득하다; 납득시키다",
    "example": "I {persuaded} him not to carry out his plan.",
    "blank": "persuaded"
  },
  {
    "id": 499,
    "word": "posterity",
    "meaning": "자손, 후세",
    "example": "It is our duty to preserve the earth for our {posterity}.",
    "blank": "posterity"
  },
  {
    "id": 500,
    "word": "postpone",
    "meaning": "연기하다, 늦추다",
    "example": "Don't {postpone} until tomorrow what can be done today.",
    "blank": "postpone"
  },
  {
    "id": 501,
    "word": "prevail",
    "meaning": "만연하다, 유행하다; 승리하다, 우세하다",
    "example": "Justice always {prevails} in the end.",
    "blank": "prevails"
  },
  {
    "id": 502,
    "word": "preoccupied",
    "meaning": "사로잡힌, 정신이 팔린",
    "example": "He was {preoccupied} with thoughts of escape.",
    "blank": "preoccupied"
  },
  {
    "id": 503,
    "word": "premature",
    "meaning": "너무 이른, 시기상조의; 조산의",
    "example": "It's better to be cautious than to make a {premature} decision.",
    "blank": "premature"
  },
  {
    "id": 504,
    "word": "sovereign",
    "meaning": "주권이 있는; 최고 권력의; 통치자",
    "example": "{Sovereign} authority should lie with the people.",
    "blank": "Sovereign"
  },
  {
    "id": 505,
    "word": "surpass",
    "meaning": "능가하다, 뛰어나다",
    "example": "Sales of the product {surpassed} all our expectations.",
    "blank": "surpassed"
  },
  {
    "id": 506,
    "word": "superficial",
    "meaning": "표면상의, 외면의; 피상적인",
    "example": "He fell down on the stairs but only had light {superficial} wounds.",
    "blank": "superficial"
  },
  {
    "id": 507,
    "word": "transform",
    "meaning": "변형시키다, 변화시키다",
    "example": "Electrical energy can be {transformed} into thermal energy.",
    "blank": "transformed"
  },
  {
    "id": 508,
    "word": "transmit",
    "meaning": "보내다, 전송하다; 전염시키다; (열·전기 등을) 전도하다",
    "example": "Radio waves are {transmitted} through the air.",
    "blank": "transmitted"
  },
  {
    "id": 509,
    "word": "transplant",
    "meaning": "옮겨 심다; 이식하다; 이식",
    "example": "The tree in the pot was {transplanted} to a garden.",
    "blank": "transplanted"
  },
  {
    "id": 510,
    "word": "transaction",
    "meaning": "거래, 매매",
    "example": "He came here to make a business {transaction} with us.",
    "blank": "transaction"
  },
  {
    "id": 511,
    "word": "synonym",
    "meaning": "동의어, 유의어",
    "example": "'Diversity' is a {synonym} of 'variety.'",
    "blank": "synonym"
  },
  {
    "id": 512,
    "word": "sympathetic",
    "meaning": "동정적인; 호의적인, 공감하는",
    "example": "We felt {sympathetic} towards the starving children.",
    "blank": "sympathetic"
  },
  {
    "id": 513,
    "word": "synchronize",
    "meaning": "동시에 발생하다, 동시에 움직이다",
    "example": "We decided to {synchronize} our schedules to improve efficiency.",
    "blank": "synchronize"
  },
  {
    "id": 514,
    "word": "synthetic",
    "meaning": "합성의, 인조의; 종합적인",
    "example": "These tires are made of {synthetic} rubber.",
    "blank": "synthetic"
  },
  {
    "id": 515,
    "word": "underestimate",
    "meaning": "과소평가하다; (값을) 너무 적게 잡다",
    "example": "He tends to {underestimate} others' abilities.",
    "blank": "underestimate"
  },
  {
    "id": 516,
    "word": "underlying",
    "meaning": "근본적인; 밑에 있는",
    "example": "It is difficult to know the {underlying} meaning of this passage.",
    "blank": "underlying"
  },
  {
    "id": 517,
    "word": "undergraduate",
    "meaning": "대학생, 학부생; 대학생의, 학부생의",
    "example": "He is an {undergraduate} majoring in English literature.",
    "blank": "undergraduate"
  },
  {
    "id": 518,
    "word": "undergo",
    "meaning": "(변화 등을) 겪다, 경험하다",
    "example": "The country has {undergone} dramatic changes over the last decade.",
    "blank": "undergone"
  },
  {
    "id": 519,
    "word": "undertake",
    "meaning": "착수하다, 맡다; 약속하다",
    "example": "He {undertook} the important assignment.",
    "blank": "undertook"
  },
  {
    "id": 520,
    "word": "upcoming",
    "meaning": "다가오는, 앞으로 올",
    "example": "Everyone was excited by the {upcoming} summer vacation.",
    "blank": "upcoming"
  },
  {
    "id": 521,
    "word": "uphold",
    "meaning": "지지하다; 떠받치다",
    "example": "We {uphold} the freedom of speech.",
    "blank": "uphold"
  },
  {
    "id": 522,
    "word": "upright",
    "meaning": "똑바른; 올바른; 똑바로, 수직으로; 수직 기둥",
    "example": "Stand {upright} with your feet shoulder-width apart.",
    "blank": "upright"
  },
  {
    "id": 523,
    "word": "upgrade",
    "meaning": "향상시키다; 향상",
    "example": "The problems started after I {upgraded} the application.",
    "blank": "upgraded"
  },
  {
    "id": 524,
    "word": "agent",
    "meaning": "대리인[점], 중개인[물]; 첩보원",
    "example": "The man was being followed by government {agents}.",
    "blank": "agents"
  },
  {
    "id": 525,
    "word": "react",
    "meaning": "반응하다; (거부) 반응을 나타내다, 반작용하다",
    "example": "He didn't {react} at all when he heard the news.",
    "blank": "react"
  },
  {
    "id": 526,
    "word": "agony",
    "meaning": "극심한 고통; 극도의 슬픔",
    "example": "He screamed and flopped to the ground in {agony}.",
    "blank": "agony"
  },
  {
    "id": 527,
    "word": "navigate",
    "meaning": "길을 찾다; 항해[비행]하다; (어려운 상황을) 다루다",
    "example": "We will {navigate} using a map.",
    "blank": "navigate"
  },
  {
    "id": 528,
    "word": "distress",
    "meaning": "괴롭히다, 근심하게 하다; 고통, 고뇌; 곤궁, 빈곤",
    "example": "Don't {distress} yourself about the problem.",
    "blank": "distress"
  },
  {
    "id": 529,
    "word": "prestige",
    "meaning": "명성, 신망; 명성이 있는, 명품의, 명문의",
    "example": "You can win {prestige} by putting extra effort into your work.",
    "blank": "prestige"
  },
  {
    "id": 530,
    "word": "strict",
    "meaning": "엄격한, 엄한; 엄밀한",
    "example": "They are very {strict} with their children.",
    "blank": "strict"
  },
  {
    "id": 531,
    "word": "strain",
    "meaning": "부담, 긴장(감); 잡아당기기; 힘껏 노력하다; 혹사시키다",
    "example": "Laughing reduces {strain} and tension.",
    "blank": "strain"
  },
  {
    "id": 532,
    "word": "vertical",
    "meaning": "수직의, 세로의; ((the ~)) 수직(선)",
    "example": "She drew a {vertical} line from the top of the page to the bottom.",
    "blank": "vertical"
  },
  {
    "id": 533,
    "word": "converse",
    "meaning": "거꾸로 된, 반대의; ((the ~)) 정반대; 대화하다",
    "example": "She always holds a {converse} opinion to mine.",
    "blank": "converse"
  },
  {
    "id": 534,
    "word": "convert",
    "meaning": "전환하다, 개조하다; 개종하다",
    "example": "The sofa was {converted} into a bed.",
    "blank": "converted"
  },
  {
    "id": 535,
    "word": "diverse",
    "meaning": "다양한, 가지각색의",
    "example": "People presented {diverse} opinions on the issue.",
    "blank": "diverse"
  },
  {
    "id": 536,
    "word": "reverse",
    "meaning": "뒤집다; 후진하다; 반대의; 반대; 뒤; 후진",
    "example": "She {reversed} her decision twice.",
    "blank": "reversed"
  },
  {
    "id": 537,
    "word": "vacant",
    "meaning": "비어 있는; 빈자리의, 결원의",
    "example": "Are there any {vacant} seats on the next flight?",
    "blank": "vacant"
  },
  {
    "id": 538,
    "word": "vacuum",
    "meaning": "진공; (자리·마음 등의) 공백, 공허",
    "example": "There is no sound in an absolute {vacuum}.",
    "blank": "vacuum"
  },
  {
    "id": 539,
    "word": "vain",
    "meaning": "헛된, 무익한; 허영심이 강한",
    "example": "I tried in {vain} to change his mind.",
    "blank": "vain"
  },
  {
    "id": 540,
    "word": "vanish",
    "meaning": "사라지다, 소멸하다",
    "example": "The dinosaurs {vanished} from the earth 65 million years ago.",
    "blank": "vanished"
  },
  {
    "id": 541,
    "word": "worsen",
    "meaning": "악화되다, 악화시키다",
    "example": "His condition has {worsened} since he left the hospital.",
    "blank": "worsened"
  },
  {
    "id": 542,
    "word": "broaden",
    "meaning": "넓어지다, 넓히다",
    "example": "You can {broaden} your knowledge by reading.",
    "blank": "broaden"
  },
  {
    "id": 543,
    "word": "straighten",
    "meaning": "똑바르게 하다[되다]; 정리[정돈]하다",
    "example": "Don't forget to {straighten} your tie before meeting him.",
    "blank": "straighten"
  },
  {
    "id": 544,
    "word": "fasten",
    "meaning": "매다, 채우다; 잠그다; 고정시키다",
    "example": "{Fasten} your belt while seated.",
    "blank": "Fasten"
  },
  {
    "id": 545,
    "word": "hasten",
    "meaning": "서둘러 하다; 재촉하다, 앞당기다",
    "example": "He {hastened} down the hall to receive his guests.",
    "blank": "hastened"
  },
  {
    "id": 546,
    "word": "credible",
    "meaning": "믿을 수 있는",
    "example": "It is hardly a {credible} story.",
    "blank": "credible"
  },
  {
    "id": 547,
    "word": "dispensable",
    "meaning": "없어도 되는, 불필요한",
    "example": "No one in the world is {dispensable}.",
    "blank": "dispensable"
  },
  {
    "id": 548,
    "word": "divisible",
    "meaning": "나눌 수 있는, 나누어지는",
    "example": "Nine is {divisible} by three, but not by four.",
    "blank": "divisible"
  },
  {
    "id": 549,
    "word": "audible",
    "meaning": "들리는, 들을 수 있는",
    "example": "The fire alarm was clearly {audible} to staff members.",
    "blank": "audible"
  },
  {
    "id": 550,
    "word": "edible",
    "meaning": "먹을 수 있는, 식용의",
    "example": "There are some flowers that are {edible}.",
    "blank": "edible"
  },
  {
    "id": 551,
    "word": "eligible",
    "meaning": "~을 가질[할] 수 있는; 신랑[신부] 감으로 좋은",
    "example": "Students who achieve academic excellence are {eligible} for scholarships.",
    "blank": "eligible"
  },
  {
    "id": 552,
    "word": "tangible",
    "meaning": "만질 수 있는, 실체가 있는; 명백한",
    "example": "They achieved {tangible} results from the negotiations.",
    "blank": "tangible"
  },
  {
    "id": 553,
    "word": "bilingual",
    "meaning": "2개 국어를 구사할 수 있는; 2개 국어 구사자",
    "example": "We are looking for a secretary who is {bilingual} in Korean and English.",
    "blank": "bilingual"
  },
  {
    "id": 554,
    "word": "duplicate",
    "meaning": "똑같은; 사본; 복사하다; 되풀이하다",
    "example": "Would you make me a {duplicate} of this report?",
    "blank": "duplicate"
  },
  {
    "id": 555,
    "word": "twilight",
    "meaning": "황혼, 땅거미; (전성기 뒤의) 황혼기, 쇠퇴기",
    "example": "He hadn't come back home by {twilight}.",
    "blank": "twilight"
  },
  {
    "id": 556,
    "word": "trivial",
    "meaning": "사소한, 하찮은",
    "example": "People often quarrel over {trivial} matters.",
    "blank": "trivial"
  },
  {
    "id": 557,
    "word": "tribe",
    "meaning": "부족, 종족",
    "example": "The book covers the history of a {tribe} in Africa.",
    "blank": "tribe"
  },
  {
    "id": 558,
    "word": "deduce",
    "meaning": "추론[추정]하다, 연역하다",
    "example": "The class struggled to {deduce} the answer to the problem.",
    "blank": "deduce"
  },
  {
    "id": 559,
    "word": "educate",
    "meaning": "교육하다, 가르치다",
    "example": "We need to {educate} people about road safety.",
    "blank": "educate"
  },
  {
    "id": 560,
    "word": "conduct",
    "meaning": "수행하다; 이끌다; 처신하다; 지휘하다; 행위; 수행",
    "example": "They {conducted} a survey on the dietary habits of adults.",
    "blank": "conducted"
  },
  {
    "id": 561,
    "word": "deduct",
    "meaning": "빼다, 공제하다",
    "example": "Taxes will be automatically {deducted} from your salary every month.",
    "blank": "deducted"
  },
  {
    "id": 562,
    "word": "despair",
    "meaning": "절망, 낙담; 절망하다",
    "example": "She has lived in {despair} since her business failed.",
    "blank": "despair"
  },
  {
    "id": 563,
    "word": "prosper",
    "meaning": "번영하다, 성공하다",
    "example": "His business {prospered} despite the economic crisis.",
    "blank": "prospered"
  },
  {
    "id": 564,
    "word": "continent",
    "meaning": "대륙, 육지",
    "example": "Asia is larger than any other {continent} in the world.",
    "blank": "continent"
  },
  {
    "id": 565,
    "word": "abstain",
    "meaning": "기권하다; 삼가다, 절제하다",
    "example": "A lot of voters {abstained} because of political indifference.",
    "blank": "abstained"
  },
  {
    "id": 566,
    "word": "sustain",
    "meaning": "유지하다; 떠받치다, 지지하다; (손해·상처 등을) 입다",
    "example": "His life was {sustained} with a respirator.",
    "blank": "sustained"
  },
  {
    "id": 567,
    "word": "retain",
    "meaning": "보유하다, 유지하다; (정보 등을) 기억하다",
    "example": "He {retains} the world record in the 100-meter dash.",
    "blank": "retains"
  },
  {
    "id": 568,
    "word": "attain",
    "meaning": "달성하다, 이루다; 이르다, 달하다",
    "example": "Her ultimate goal was {attained} earlier than she expected.",
    "blank": "attained"
  },
  {
    "id": 569,
    "word": "integrate",
    "meaning": "통합하다, 통합되다; 인종 차별을 철폐하다",
    "example": "It takes a lot of time for immigrants to {integrate} into society.",
    "blank": "integrate"
  },
  {
    "id": 570,
    "word": "retail",
    "meaning": "소매; 소매하다; 소매로",
    "example": "The {retail} price of this cap is 10,000 won.",
    "blank": "retail"
  },
  {
    "id": 571,
    "word": "withstand",
    "meaning": "견디다; 저항하다",
    "example": "The buildings in this area were built to {withstand} earthquakes.",
    "blank": "withstand"
  },
  {
    "id": 572,
    "word": "withdraw",
    "meaning": "물러나다; 취소하다; 그만두다; 인출하다",
    "example": "They {withdrew} their troops from Iraq.",
    "blank": "withdrew"
  },
  {
    "id": 573,
    "word": "withhold",
    "meaning": "주지 않다, 보류하다",
    "example": "He will {withhold} payment until the work is completed.",
    "blank": "withhold"
  },
  {
    "id": 574,
    "word": "abolish",
    "meaning": "폐지하다, 없애다",
    "example": "Some people insist that the death penalty should be {abolished}.",
    "blank": "abolished"
  },
  {
    "id": 575,
    "word": "adolescent",
    "meaning": "청소년; 청소년의",
    "example": "His lectures help {adolescents} realize the importance of exercise.",
    "blank": "adolescents"
  },
  {
    "id": 576,
    "word": "criticize",
    "meaning": "비판하다, 비난하다; 비평하다",
    "example": "You shouldn't {criticize} someone who you don't know well.",
    "blank": "criticize"
  },
  {
    "id": 577,
    "word": "discriminate",
    "meaning": "차별하다; 구별하다",
    "example": "It is unfair to {discriminate} on the grounds of race or gender.",
    "blank": "discriminate"
  },
  {
    "id": 578,
    "word": "discern",
    "meaning": "알아보다; 식별[분간]하다",
    "example": "He couldn't {discern} any movements in the dark room.",
    "blank": "discern"
  },
  {
    "id": 579,
    "word": "biography",
    "meaning": "전기, 일대기",
    "example": "Children can learn a lot by reading the {biographies} of famous people.",
    "blank": "biographies"
  },
  {
    "id": 580,
    "word": "biology",
    "meaning": "생물학",
    "example": "To study {biology} is to learn about ourselves.",
    "blank": "biology"
  },
  {
    "id": 581,
    "word": "resign",
    "meaning": "사임하다, 사직하다",
    "example": "My father {resigned} from his position last month.",
    "blank": "resigned"
  },
  {
    "id": 582,
    "word": "signify",
    "meaning": "의미하다, 나타내다; 중요하다, 중대하다",
    "example": "Shaking your head {signifies} disagreement.",
    "blank": "signifies"
  },
  {
    "id": 583,
    "word": "capable",
    "meaning": "~할 수 있는; 유능한",
    "example": "We never thought he was {capable} of finishing this task.",
    "blank": "capable"
  },
  {
    "id": 584,
    "word": "conceive",
    "meaning": "생각해 내다; 상상하다; 임신하다",
    "example": "He alone {conceived} the new business plan.",
    "blank": "conceived"
  },
  {
    "id": 585,
    "word": "captive",
    "meaning": "포로가 된; 사로잡힌; 포로",
    "example": "The {captive} soldiers tried to escape from the enemy.",
    "blank": "captive"
  },
  {
    "id": 586,
    "word": "deceive",
    "meaning": "속이다, 기만하다",
    "example": "She was {deceived} by forged letters.",
    "blank": "deceived"
  },
  {
    "id": 587,
    "word": "alter",
    "meaning": "바꾸다, 변하다",
    "example": "They {altered} the flight schedule because of bad weather.",
    "blank": "altered"
  },
  {
    "id": 588,
    "word": "alien",
    "meaning": "외국(인)의; 이질적인; 외계의; 외국인 체류자; 외계인",
    "example": "He believes that {alien} life exists.",
    "blank": "alien"
  },
  {
    "id": 589,
    "word": "cease",
    "meaning": "그만두다, 그치다, 끝나다",
    "example": "The newspaper has {ceased} publication because of a lack of money.",
    "blank": "ceased"
  },
  {
    "id": 590,
    "word": "recede",
    "meaning": "물러가다, 멀어지다; 희미해지다",
    "example": "The sound of the footsteps {receded} into the distance.",
    "blank": "receded"
  },
  {
    "id": 591,
    "word": "precede",
    "meaning": "~에 앞서다[선행하다]",
    "example": "Her words always {precede} her action.",
    "blank": "precede"
  },
  {
    "id": 592,
    "word": "predecessor",
    "meaning": "전임자, 선배",
    "example": "My {predecessor} had been the firm's leader for 15 years.",
    "blank": "predecessor"
  },
  {
    "id": 593,
    "word": "casual",
    "meaning": "느긋한, 무관심한; 평상시의; 우연한; 평상복",
    "example": "His {casual} attitude toward work annoyed me.",
    "blank": "casual"
  },
  {
    "id": 594,
    "word": "decay",
    "meaning": "썩다, 부패하다; 쇠퇴하다; 부패; 쇠퇴",
    "example": "Some of my teeth have {decayed}, so I need to have them treated.",
    "blank": "decayed"
  },
  {
    "id": 595,
    "word": "incident",
    "meaning": "사건, 일어난 일",
    "example": "The victim reported the {incident} to the police.",
    "blank": "incident"
  },
  {
    "id": 596,
    "word": "sole",
    "meaning": "유일한, 단독의",
    "example": "He was the {sole} survivor of the accident.",
    "blank": "sole"
  },
  {
    "id": 597,
    "word": "solitary",
    "meaning": "혼자의, 혼자 하는; 고립된, 외딴",
    "example": "She lives alone in a {solitary} house.",
    "blank": "solitary"
  },
  {
    "id": 598,
    "word": "resolve",
    "meaning": "해결하다; 결심하다",
    "example": "The dispute hasn't been {resolved} yet.",
    "blank": "resolved"
  },
  {
    "id": 599,
    "word": "sophisticated",
    "meaning": "세련된, 교양 있는; 정교한",
    "example": "She has a very {sophisticated} eye for fashion.",
    "blank": "sophisticated"
  },
  {
    "id": 600,
    "word": "sophomore",
    "meaning": "(대학·고교의) 2학년생",
    "example": "She is currently a {sophomore} in college.",
    "blank": "sophomore"
  }
];
