const STORAGE_KEY = 'taghee-study-data';
const TUTOR_HISTORY_KEY = 'taghee-tutor-history';
const PHOTO_HISTORY_KEY = 'taghee-photo-question-history';
const CONCEPT_FAVORITES_KEY = 'taghee-concept-favorites';

const conceptLibrary = {
  국어: [
    {
      unit: '문학 작품의 갈래',
      keyConcept: '시, 소설, 극, 수필 등의 특징을 구분할 수 있어야 합니다.',
      easyExplanation: '문학 작품을 읽을 때는 이야기 방식과 표현 방법을 먼저 살펴보면 더 쉽게 이해할 수 있어요.',
      commonMistakes: ['작품의 갈래를 내용만 보고 판단하기', '시와 소설의 표현 방식 차이를 놓치기'],
      practiceQuestions: ['다음 중 소설의 특징으로 알맞은 것을 고르세요.', '시의 화자가 말하는 감정을 한 문장으로 적어 보세요.'],
      parentTip: '집에서 이야기책과 시를 함께 읽고 “이건 어떤 종류의 글인가요?”라고 질문해 주세요.',
      example: '시에는 감정과 이미지가 많고, 소설은 사건과 인물 중심으로 이어지는 경우가 많아요.',
      searchTerms: ['문학', '갈래', '시', '소설', '작품'],
      weakUnitRecommendation: '문학 작품의 갈래를 다시 정리하면 독해와 감상 모두 안정적으로 좋아질 수 있어요.'
    },
    {
      unit: '중심 내용 찾기',
      keyConcept: '문단에서 가장 중요한 생각을 찾는 능력이 필요합니다.',
      easyExplanation: '문단을 읽을 때는 제목, 첫 문장, 마지막 문장을 먼저 확인하고 중요한 단어를 표시해 보세요.',
      commonMistakes: ['세부 정보와 중심 내용을 헷갈리기', '글 전체를 읽지 않고 부분만 해석하기'],
      practiceQuestions: ['이 문단의 중심 내용은 무엇인가요?', '중심 내용을 한 문장으로 요약해 보세요.'],
      parentTip: '읽기 후 “이 글이 말하고 싶은 핵심 한 문장”을 함께 만들어 주세요.',
      example: '글의 중심 내용은 “왜 중요한지”를 한 문장으로 말해 주는 것이 좋아요.',
      searchTerms: ['중심 내용', '요약', '독해', '핵심'],
      weakUnitRecommendation: '중심 내용 찾기를 연습하면 독해 문제의 정답률이 함께 올라갑니다.'
    },
    {
      unit: '어휘의 문맥적 의미',
      keyConcept: '어휘의 뜻은 문맥 속에서 파악하는 것이 중요합니다.',
      easyExplanation: '모르는 단어가 나와도 단어장만 보지 말고 주변 문장의 흐름을 보고 뜻을 추론해 보세요.',
      commonMistakes: ['단어를 하나의 뜻으로만 고정시키기', '문맥과 무관한 뜻을 선택하기'],
      practiceQuestions: ['“그 단어가 문맥에서 의미하는 바를 고르세요.”', '주변 문장을 보고 뜻을 추측해 보세요.'],
      parentTip: '일상 생활 속 문장에서 같은 단어를 찾아보며 뜻을 연결해 주세요.',
      example: '“그는 눈을 크게 떴다”에서 눈은 시각 기관이 아니라 “놀랐다”는 뜻으로 쓰일 수 있어요.',
      searchTerms: ['어휘', '문맥', '뜻', '단어'],
      weakUnitRecommendation: '어휘의 문맥적 의미를 익히면 독해와 글쓰기 모두에 도움이 됩니다.'
    },
    {
      unit: '글쓰기 과정',
      keyConcept: '글쓰기는 계획 → 쓰기 → 고치기 순서로 진행됩니다.',
      easyExplanation: '처음부터 완벽하게 쓰려 하지 말고, 생각을 먼저 정리한 뒤 문장을 이어 가는 것이 좋아요.',
      commonMistakes: ['아이디어를 정리하지 않고 바로 쓰기', '맞춤법을 너무 먼저 신경 쓰기'],
      practiceQuestions: ['오늘 있었던 일을 두 문장으로 정리해 보세요.', '글의 첫 문장을 먼저 써 보세요.'],
      parentTip: '부모님은 “이 글의 메시지는 무엇인가요?”를 물어보며 흐름을 확인해 주세요.',
      example: '주제 문장 → 근거 → 마무리 문장 순서로 생각하면 글이 정리됩니다.',
      searchTerms: ['글쓰기', '쓰기', '문장', '수정'],
      weakUnitRecommendation: '글쓰기 과정을 익히면 서술형 답변도 조금 더 안정적으로 써낼 수 있어요.'
    }
  ],
  영어: [
    {
      unit: 'be동사와 일반동사',
      keyConcept: 'be동사는 상태를 말하고, 일반동사는 행동을 말합니다.',
      easyExplanation: '문장을 볼 때 주어가 무엇인지 먼저 보고, be동사 혹은 일반동사를 선택해 보세요.',
      commonMistakes: ['be동사를 일반동사처럼 쓰기', '주어와 동사 수를 맞추지 못하기'],
      practiceQuestions: ['He ___ happy. 를 알맞게 고르세요.', 'I ___ a student. 를 채워 보세요.'],
      parentTip: '“나는 ~이다 / 그는 ~이다”처럼 짧은 문장을 함께 말해 주세요.',
      example: 'I am a student. / She likes apples.',
      searchTerms: ['be동사', '동사', 'am', 'is', 'are'],
      weakUnitRecommendation: 'be동사와 일반동사의 차이를 다시 보면 문장 만들기 실력이 좋아질 수 있어요.'
    },
    {
      unit: '현재시제',
      keyConcept: '지금 일어나거나 반복되는 일을 말할 때 현재시제를 사용합니다.',
      easyExplanation: '“오늘, 매일, 항상” 같은 표현이 있으면 현재시제일 가능성이 높아요.',
      commonMistakes: ['현재시제를 과거형으로 바꾸기', '3인칭 단수 어미를 놓치기'],
      practiceQuestions: ['She ____ to school every day. 를 채워 보세요.', 'I play soccer on weekends. 를 현재시제로 바꾸어 보세요.'],
      parentTip: '생활 속 하루 일과 문장을 만들어 말해 주면 기억에 도움이 됩니다.',
      example: 'He studies English after dinner.',
      searchTerms: ['현재시제', 'every day', 'present'],
      weakUnitRecommendation: '현재시제는 문장 쓰기에서 가장 자주 틀리는 범위라, 짧게 반복 연습하는 것이 좋아요.'
    },
    {
      unit: '과거시제',
      keyConcept: '이미 일어난 일을 말할 때 과거시제를 사용합니다.',
      easyExplanation: '시간 표현을 먼저 찾고, 행동이 끝난 일인지 확인해 보세요.',
      commonMistakes: ['과거형 어미를 빠뜨리기', '불규칙 동사의 형태를 잊기'],
      practiceQuestions: ['We ___ to the museum yesterday. 를 채워 보세요.', 'go의 과거형을 쓰세요.'],
      parentTip: '과거에 있었던 일을 그림으로 그리며 말해 주세요.',
      example: 'I watched a movie yesterday.',
      searchTerms: ['과거시제', 'yesterday', 'past'],
      weakUnitRecommendation: '과거시제는 시간표현과 함께 쉬운 예문을 반복하면 도움이 됩니다.'
    },
    {
      unit: '의문문과 부정문',
      keyConcept: '질문을 만들 때는 동사를 앞에 두고, 부정문은 not을 넣습니다.',
      easyExplanation: '문장의 형태를 바꾸는 방법을 알고 있으면 질문과 부정문을 더 쉽게 만들 수 있어요.',
      commonMistakes: ['Do/Does 위치를 놓치기', 'not을 붙이는 위치를 헷갈리기'],
      practiceQuestions: ['“You like pizza.”를 의문문으로 바꿔 보세요.', '“She is not happy.”를 말해 보세요.'],
      parentTip: '“Do you ...?”와 “I do not ...”처럼 짧게 반복해 주세요.',
      example: 'Do you like music? / I do not know.',
      searchTerms: ['의문문', '부정문', 'question', 'not'],
      weakUnitRecommendation: '의문문과 부정문은 문장 구조를 먼저 짚고 반복하면 실수율이 줄어듭니다.'
    },
    {
      unit: '전치사',
      keyConcept: '전치사는 장소, 시간, 관계를 나타내는 단어입니다.',
      easyExplanation: '“~에서, ~에, ~로” 같은 표현을 기준으로 생각하면 자연스럽게 익힐 수 있어요.',
      commonMistakes: ['시간과 장소 전치사를 혼동하기', 'in, on, at를 잘못 쓰기'],
      practiceQuestions: ['The book is ___ the table. 를 채워 보세요.', 'I have class ___ 9 o’clock. 를 고르세요.'],
      parentTip: '집 안 물건을 놓는 위치를 말하며 연습해 보세요.',
      example: 'The cat is under the chair.',
      searchTerms: ['전치사', 'in', 'on', 'at', 'under'],
      weakUnitRecommendation: '전치사는 예문과 함께 반복하면 문법 실수를 줄이는 데 도움이 됩니다.'
    }
  ],
  수학: [
    {
      unit: '소인수분해',
      keyConcept: '수를 소수의 곱으로 나타내는 과정입니다.',
      easyExplanation: '가장 작은 소수부터 나누어 내려가면 쉽게 찾을 수 있어요.',
      commonMistakes: ['1을 소인수로 포함시키기', '나누는 수를 잘못 고르기'],
      practiceQuestions: ['24를 소인수분해해 보세요.', '18의 소인수는 무엇인가요?'],
      parentTip: '나눗셈을 하면서 “가장 작은 수부터 가능한지” 확인하는 습관을 길러 주세요.',
      example: '24 = 2 × 2 × 2 × 3',
      searchTerms: ['소인수분해', '소수', '인수'],
      weakUnitRecommendation: '소인수분해를 다시 보면 약수와 분수 계산이 한 번에 정리됩니다.'
    },
    {
      unit: '정수와 유리수',
      keyConcept: '음수와 양수를 포함한 수의 개념입니다.',
      easyExplanation: '수직선 위에서 수의 위치를 생각하면 부호를 더 쉽게 이해할 수 있어요.',
      commonMistakes: ['음수의 크기를 잘못 비교하기', '부호를 잊고 계산하기'],
      practiceQuestions: ['-3과 2 중 큰 수는 무엇인가요?', '-5 + 3을 계산해 보세요.'],
      parentTip: '수직선 그림을 그려 보며 “왼쪽이 더 작다”를 말해 주세요.',
      example: '-2는 1보다 작은 수예요.',
      searchTerms: ['정수', '유리수', '음수', '양수'],
      weakUnitRecommendation: '정수와 유리수는 수직선 그림을 붙여 두면 약한 단원에서 빠르게 회복할 수 있어요.'
    },
    {
      unit: '문자의 사용과 식',
      keyConcept: '숫자 대신 문자를 써서 식을 만드는 방법입니다.',
      easyExplanation: '“x개”처럼 미지의 값을 나타낼 때 문자를 쓰는 것이라고 생각하면 쉬워요.',
      commonMistakes: ['문자를 숫자로 헷갈리기', '식의 의미를 이해하지 못하기'],
      practiceQuestions: ['x + 5에서 x가 3일 때 값은 무엇인가요?', '“하나의 수를 x라고 하면 2x+1”을 읽어 보세요.'],
      parentTip: '문자를 “미지의 값”으로 생각하게 알려 주세요.',
      example: '사과 3개를 x라고 하면 전체는 x + 3으로 쓸 수 있어요.',
      searchTerms: ['문자', '식', '미지수', 'x'],
      weakUnitRecommendation: '문자의 사용과 식을 다시 정리하면 방정식 문제를 훨씬 편하게 풀 수 있어요.'
    },
    {
      unit: '일차방정식',
      keyConcept: '미지수가 한 번만 나오는 식을 푸는 방법입니다.',
      easyExplanation: '양변에서 같은 수를 빼거나 더해 주며 x를 정리하는 것이 핵심입니다.',
      commonMistakes: ['이항을 잘못하기', '부호를 바꾸는 것을 잊기'],
      practiceQuestions: ['x + 7 = 12를 풀어 보세요.', '3x = 15를 풀어 보세요.'],
      parentTip: '“좌변과 우변을 같은 방법으로 맞추기”라는 그림을 함께 그려 주세요.',
      example: 'x + 5 = 8 → x = 3',
      searchTerms: ['일차방정식', '방정식', 'x', '이항'],
      weakUnitRecommendation: '일차방정식은 단계별로 적는 연습을 하면 약한 단원에서 가장 빠르게 좋아질 수 있어요.'
    },
    {
      unit: '좌표평면과 그래프',
      keyConcept: '점의 위치를 (x, y)로 나타내고 그래프로 연결하는 방법입니다.',
      easyExplanation: 'x축은 가로, y축은 세로라고 생각하고, 먼저 x값을 찾는 순서로 익히면 좋아요.',
      commonMistakes: ['x와 y 순서를 바꾸기', '축의 방향을 헷갈리기'],
      practiceQuestions: ['점 (2, 3)의 위치를 말해 보세요.', 'x축 위의 점은 어떤 특징이 있나요?'],
      parentTip: '그래프 종이에 좌표를 직접 찍으며 따라 해 보세요.',
      example: '(2, 1)은 x가 2, y가 1인 점입니다.',
      searchTerms: ['좌표평면', '그래프', 'x축', 'y축', '좌표'],
      weakUnitRecommendation: '좌표와 그래프를 시각적으로 그리면 실수가 줄어듭니다.'
    }
  ],
  사회: [
    {
      unit: '내가 사는 세계',
      keyConcept: '자기 주변의 장소, 사람, 생활 방식을 이해하는 기본 개념입니다.',
      easyExplanation: '우리 주변의 집, 학교, 동네, 지역이 어떻게 연결되어 있는지 살펴보면 좋아요.',
      commonMistakes: ['자기 주변과 다른 지역을 섞어 생각하기'],
      practiceQuestions: ['우리 지역의 특징을 한 문장으로 말해 보세요.', '학교와 동네의 관계를 설명해 보세요.'],
      parentTip: '지도를 보면서 “우리 집은 어디에 있을까?”를 물어보세요.',
      example: '동네에는 학교, 시장, 공원 같은 시설이 있어요.',
      searchTerms: ['내가 사는 세계', '지역', '동네', '학교'],
      weakUnitRecommendation: '우리 주변과 지역을 연결해 설명하면 사회 개념이 더 쉽게 잡힙니다.'
    },
    {
      unit: '지도 읽기',
      keyConcept: '지도에서 방향, 기호, 위치를 읽는 방법입니다.',
      easyExplanation: '방향표와 범례를 먼저 확인하면 지도 읽기가 쉬워져요.',
      commonMistakes: ['지도 기호를 읽지 못하기', '방향을 잘못 판단하기'],
      practiceQuestions: ['지도에서 북쪽 방향을 찾아 보세요.', '범례를 보고 어떤 장소인지 말해 보세요.'],
      parentTip: '실제 지도를 펼쳐 방향을 함께 찾으면 도움이 됩니다.',
      example: '지도에서 학교를 찾을 때는 범례와 방향을 먼저 확인합니다.',
      searchTerms: ['지도', '방향', '범례', '위치'],
      weakUnitRecommendation: '지도 읽기는 직접 보는 연습이 가장 효과적입니다.'
    },
    {
      unit: '인권과 헌법',
      keyConcept: '사람이 존중받아야 하는 권리와 국가의 기본 규칙을 배웁니다.',
      easyExplanation: '헌법은 나라의 규칙, 인권은 사람이 기본적으로 누려야 하는 권리라고 생각하면 쉬워요.',
      commonMistakes: ['권리와 의무를 혼동하기'],
      practiceQuestions: ['인권이란 무엇인가요?', '헌법이 필요한 이유를 말해 보세요.'],
      parentTip: '일상에서 “누가 어떤 권리를 갖고 있나?”를 이야기해 주세요.',
      example: '모든 사람은 안전하게 생활할 권리를 가집니다.',
      searchTerms: ['인권', '헌법', '권리', '의무'],
      weakUnitRecommendation: '인권과 헌법은 핵심 개념을 반복해서 말해 주면 기억이 잘 됩니다.'
    },
    {
      unit: '민주주의와 시민 참여',
      keyConcept: '사람들이 함께 생활하는 문제를 정해진 방식으로 해결하는 방법입니다.',
      easyExplanation: '의견을 내고 함께 결정하는 과정이 민주주의의 핵심입니다.',
      commonMistakes: ['민주주의를 “내가 원하는 것만 할 수 있다”로 생각하기'],
      practiceQuestions: ['민주주의가 필요한 이유를 말해 보세요.', '시민 참여는 무엇을 뜻하나요?'],
      parentTip: '가정에서 작은 규칙을 함께 정해 보는 활동을 해 보세요.',
      example: '반 친구들과 규칙을 함께 정하는 활동이 시민 참여의 예입니다.',
      searchTerms: ['민주주의', '시민', '참여', '의견'],
      weakUnitRecommendation: '개념을 실생활 예시와 연결하면 이해가 더 쉬워집니다.'
    }
  ],
  과학: [
    {
      unit: '지권의 변화',
      keyConcept: '지구의 표면이 오랜 시간에 걸쳐 변하는 과정을 배웁니다.',
      easyExplanation: '지층, 화산, 풍화 같은 예시를 떠올리면 이해가 쉬워요.',
      commonMistakes: ['지구 내부 변화와 외부 변화의 차이를 혼동하기'],
      practiceQuestions: ['지권의 변화가 의미하는 바를 말해 보세요.', '화산 활동과 지형 변화의 관계를 설명해 보세요.'],
      parentTip: '지구 사진이나 자연사진을 함께 보며 이야기를 나눠 보세요.',
      example: '화산 활동은 지구 표면을 변화시키는 과정 중 하나예요.',
      searchTerms: ['지권', '화산', '지층', '변화'],
      weakUnitRecommendation: '지권의 변화는 그림과 함께 보면서 복습하면 이해가 좋아집니다.'
    },
    {
      unit: '여러 가지 힘',
      keyConcept: '물체를 밀거나 당기는 힘의 종류와 작용을 이해합니다.',
      easyExplanation: '힘은 방향과 크기가 있고, 같은 힘이어도 결과가 다를 수 있어요.',
      commonMistakes: ['마찰력과 중력의 차이를 헷갈리기'],
      practiceQuestions: ['중력이란 무엇인가요?', '마찰력이 작용하는 예를 한 가지 말해 보세요.'],
      parentTip: '집안에서 물체를 밀거나 끌어 보는 활동을 해 보세요.',
      example: '공이 멈추는 이유 중 하나는 마찰력 때문입니다.',
      searchTerms: ['힘', '중력', '마찰', '밀기'],
      weakUnitRecommendation: '힘의 개념은 일상 예시를 붙여 두면 쉽게 기억할 수 있어요.'
    },
    {
      unit: '생물의 다양성',
      keyConcept: '생물이 가지고 있는 다양한 특징과 생태계를 배웁니다.',
      easyExplanation: '동식물이 서로 다르게 생긴 이유를 생각하면 이해가 쉬워요.',
      commonMistakes: ['생물의 특징을 분류 기준 없이 외우기'],
      practiceQuestions: ['생물의 다양성이란 무엇인가요?', '동물과 식물을 구분해 보세요.'],
      parentTip: '동물과 식물 사진을 함께 보며 특징을 이야기해 주세요.',
      example: '같은 동물이어도 환경에 따라 생김새가 달라질 수 있어요.',
      searchTerms: ['생물', '다양성', '생태', '식물'],
      weakUnitRecommendation: '생물의 다양성은 분류 기준을 함께 익히면 더 잘 정리됩니다.'
    },
    {
      unit: '기체의 성질',
      keyConcept: '기체는 모양과 부피가 고정되지 않고 퍼지는 성질을 가집니다.',
      easyExplanation: '공기처럼 보이지 않는 물질도 공간을 차지한다는 점을 이해하는 것이 중요해요.',
      commonMistakes: ['기체를 “없는 것”으로 생각하기'],
      practiceQuestions: ['기체의 특징 두 가지를 말해 보세요.', '풍선이 부풀어 오르는 이유는 무엇인가요?'],
      parentTip: '풍선이나 공기를 사용해 “공기가 차지하는 공간”을 예로 들어 주세요.',
      example: '공기는 눈에 보이지 않지만 빈 공간을 채울 수 있어요.',
      searchTerms: ['기체', '공기', '부피', '압력'],
      weakUnitRecommendation: '기체의 성질은 눈에 보이지 않는 개념이라 비교 예시와 함께 보완하면 좋아요.'
    },
    {
      unit: '물질의 상태 변화',
      keyConcept: '물질이 얼음, 물, 수증기로 바뀌는 과정을 배웁니다.',
      easyExplanation: '온도에 따라 물질의 상태가 달라진다는 점을 중심으로 생각해 보세요.',
      commonMistakes: ['상태 변화와 끓는 점을 헷갈리기'],
      practiceQuestions: ['물의 상태 변화 과정을 순서대로 말해 보세요.', '얼음이 녹을 때 어떤 변화가 일어나나요?'],
      parentTip: '얼음, 물, 수증기 사진을 함께 보며 비교해 주세요.',
      example: '얼음이 녹으면 물이 되고, 물이 더 가열되면 수증기가 됩니다.',
      searchTerms: ['물질', '상태 변화', '녹다', '끓다'],
      weakUnitRecommendation: '상태 변화는 순서와 온도 변화를 그림으로 연결하면 기억이 좋아집니다.'
    }
  ]
};

const defaultAnalytics = {
  weeklyStudyTime: [40, 55, 35, 50, 60, 25, 20],
  subjectProgress: {
    국어: 82,
    영어: 76,
    수학: 68,
    사회: 79,
    과학: 71
  },
  weakSubjects: ['수학', '영어', '과학'],
  wrongAnswerCount: 2,
  studyStreak: 5,
  todayGoal: '30분 복습 + 오답 2개 다시 풀기'
};

const sampleData = {
  todos: [
    { id: crypto.randomUUID(), subject: '수학', task: '분수 문제 5개 풀기', memo: '계산 순서 다시 확인', done: false },
    { id: crypto.randomUUID(), subject: '영어', task: '단어 10개 암기', memo: '쓰기 연습까지', done: true },
    { id: crypto.randomUUID(), subject: '국어', task: '독해 지문 읽기', memo: '요약 한 문장 적기', done: false }
  ],
  math: [
    { id: crypto.randomUUID(), topic: '소수의 덧셈과 뺄셈', level: '낮음', wrong: 3, memo: '자릿수 맞추기 연습 필요' },
    { id: crypto.randomUUID(), topic: '비와 비율', level: '보통', wrong: 1, memo: '개념 정리 복습' }
  ],
  english: [
    { id: crypto.randomUUID(), date: '2026-05-22', total: 20, correct: 15, memo: 'family, weather 복습' }
  ],
  mistakes: [
    { id: crypto.randomUUID(), subject: '수학', unit: '분수', reason: '분모를 더하는 실수', retry: '필요', parentMemo: '짧게 다시 풀고 설명해보기' },
    { id: crypto.randomUUID(), subject: '영어', unit: '문법', reason: 'be 동사 위치 혼동', retry: '보류', parentMemo: '예문 다시 읽기' }
  ],
  ebs: [
    { id: crypto.randomUUID(), subject: '수학', title: '중학 수학 1-1 기본 개념', watched: '수강함', level: '보통', review: '필요' }
  ],
  exams: [
    { id: crypto.randomUUID(), name: '1학기 중간고사', date: '2026-06-10', subjects: '수학, 영어', priority: '높음' }
  ],
  report: {
    summary: '이번 주에는 수학 기초 문제를 꾸준히 풀고 영어 단어를 10개씩 반복 암기했다.',
    strengths: '과제 제출을 잘했고, 틀린 문제를 다시 확인하려고 노력했다.',
    improvements: '계산 실수와 시간 배분을 조금 더 다듬으면 좋겠다.',
    nextPlan: '수학 연습 15분, 영어 단어 10개 복습, 오답노트 2개 다시 풀기.'
  },
  analytics: defaultAnalytics
};

const state = {
  todos: [],
  math: [],
  english: [],
  mistakes: [],
  ebs: [],
  exams: [],
  report: {},
  analytics: { ...defaultAnalytics }
};

const pages = document.querySelectorAll('.page');
const navButtons = document.querySelectorAll('.nav-btn');

function loadData() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleData));
    Object.assign(state, sampleData);
    syncAnalyticsFromState();
    return;
  }

  try {
    const parsed = JSON.parse(raw);
    Object.assign(state, {
      todos: parsed.todos || [],
      math: parsed.math || [],
      english: parsed.english || [],
      mistakes: parsed.mistakes || [],
      ebs: parsed.ebs || [],
      exams: parsed.exams || [],
      report: parsed.report || {},
      analytics: normalizeAnalyticsData(parsed.analytics)
    });
    syncAnalyticsFromState();
  } catch (error) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleData));
    Object.assign(state, sampleData);
    syncAnalyticsFromState();
  }
}

function saveData() {
  syncAnalyticsFromState();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadTutorHistory() {
  const raw = localStorage.getItem(TUTOR_HISTORY_KEY);
  if (!raw) {
    localStorage.setItem(TUTOR_HISTORY_KEY, JSON.stringify([]));
    return [];
  }

  try {
    return JSON.parse(raw);
  } catch (error) {
    localStorage.setItem(TUTOR_HISTORY_KEY, JSON.stringify([]));
    return [];
  }
}

function saveTutorHistory(entries) {
  localStorage.setItem(TUTOR_HISTORY_KEY, JSON.stringify(entries));
}

function loadPhotoHistory() {
  const raw = localStorage.getItem(PHOTO_HISTORY_KEY);
  if (!raw) {
    localStorage.setItem(PHOTO_HISTORY_KEY, JSON.stringify([]));
    return [];
  }

  try {
    return JSON.parse(raw);
  } catch (error) {
    localStorage.setItem(PHOTO_HISTORY_KEY, JSON.stringify([]));
    return [];
  }
}

function savePhotoHistory(entries) {
  localStorage.setItem(PHOTO_HISTORY_KEY, JSON.stringify(entries));
}

function loadFavoriteConcepts() {
  const raw = localStorage.getItem(CONCEPT_FAVORITES_KEY);
  if (!raw) {
    localStorage.setItem(CONCEPT_FAVORITES_KEY, JSON.stringify([]));
    return [];
  }

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    localStorage.setItem(CONCEPT_FAVORITES_KEY, JSON.stringify([]));
    return [];
  }
}

function saveFavoriteConcepts(entries) {
  localStorage.setItem(CONCEPT_FAVORITES_KEY, JSON.stringify(entries));
}

function getConceptKey(subject, unit) {
  return `${subject}::${unit}`;
}

function getAllConceptEntries() {
  return Object.entries(conceptLibrary).flatMap(([subject, entries]) => entries.map(entry => ({ subject, ...entry })));
}

function normalizeConceptText(value) {
  return String(value || '').toLowerCase().trim();
}

function getConceptByUnit(subject, unit) {
  return (conceptLibrary[subject] || []).find(entry => entry.unit === unit) || null;
}

function flattenConceptTerms(entry) {
  return [entry.unit, entry.keyConcept, entry.easyExplanation, entry.parentTip, entry.example, ...(entry.searchTerms || []), ...(entry.practiceQuestions || []), ...(entry.commonMistakes || [])].join(' ').toLowerCase();
}

function searchConcepts(query) {
  const normalized = normalizeConceptText(query);
  if (!normalized) {
    return [];
  }

  return getAllConceptEntries()
    .map(entry => {
      const haystack = flattenConceptTerms(entry);
      const score = haystack.includes(normalized) ? 100 : 0;
      return { entry, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(item => item.entry);
}

function findBestConcept(subject, question) {
  const normalized = normalizeConceptText(question);
  const entries = conceptLibrary[subject] || [];
  if (!normalized) {
    return entries[0] || null;
  }

  const scored = entries.map(entry => {
    const haystack = flattenConceptTerms(entry);
    const score = haystack.includes(normalized) ? 100 : 0;
    return { entry, score };
  }).filter(item => item.score > 0).sort((a, b) => b.score - a.score);

  return scored[0]?.entry || entries[0] || null;
}

function buildTutorConceptGuidance(subject, question) {
  const concept = findBestConcept(subject, question);
  if (!concept) {
    return '';
  }

  const practiceQuestion = concept.practiceQuestions && concept.practiceQuestions[0] ? concept.practiceQuestions[0] : '자신만의 예문을 하나 만들어 보세요.';
  return `관련 개념 참고
- 단원: ${concept.unit}
- 핵심 개념: ${concept.keyConcept}
- 쉬운 설명: ${concept.easyExplanation}
- 예시: ${concept.example}
- 짧은 연습 문제: ${practiceQuestion}
- 약한 단원 추천: ${concept.weakUnitRecommendation}
- 부모 지도 팁: ${concept.parentTip}`;
}

function renderFavoriteConcepts() {
  const container = document.getElementById('favoriteConceptList');
  if (!container) return;

  const favorites = loadFavoriteConcepts();
  if (!favorites.length) {
    container.innerHTML = '<div class="empty-state">찜한 개념이 아직 없어요. 개념 카드의 “개념 찜하기” 버튼을 눌러 저장해 보세요.</div>';
    return;
  }

  container.innerHTML = favorites.map(key => {
    const [subject, unit] = key.split('::');
    const concept = getConceptByUnit(subject, unit);
    if (!concept) {
      return '';
    }

    return `
      <div class="list-item">
        <h4>${subject} · ${concept.unit}</h4>
        <p>${concept.keyConcept}</p>
        <small>${concept.parentTip}</small>
      </div>`;
  }).join('');
}

function buildConceptCardHtml(subject, concept, favoriteKey) {
  const isFavorite = loadFavoriteConcepts().includes(favoriteKey);

  return `
    <article class="concept-unit-card">
      <div class="panel-header">
        <h4>${concept.unit}</h4>
        <span class="chip">${subject}</span>
      </div>
      <p><strong>핵심 개념</strong><br>${concept.keyConcept}</p>
      <p><strong>쉬운 설명</strong><br>${concept.easyExplanation}</p>
      <p><strong>자주 틀리는 포인트</strong><br>${concept.commonMistakes.join(' / ')}</p>
      <p><strong>확인 문제</strong></p>
      <ul class="concept-practice-list">
        ${concept.practiceQuestions.map(question => `<li>${question}</li>`).join('')}
      </ul>
      <p><strong>부모 지도 팁</strong><br>${concept.parentTip}</p>
      <div class="concept-pill-row">
        <span class="concept-pill">${subject}</span>
        <span class="concept-pill">${concept.unit}</span>
      </div>
      <div class="concept-unit-actions">
        <button type="button" class="ghost-btn favorite-btn" data-key="${favoriteKey}">${isFavorite ? '찜 해제' : '개념 찜하기'}</button>
        <button type="button" class="secondary-btn link-mistake-btn" data-subject="${subject}" data-unit="${concept.unit}">오답노트 연결</button>
      </div>
    </article>`;
}

function renderConceptLibraryPage(query = '') {
  const grid = document.getElementById('conceptLibraryGrid');
  const results = document.getElementById('conceptSearchResults');
  const status = document.getElementById('conceptSearchStatus');

  if (!grid || !results || !status) {
    return;
  }

  const normalized = normalizeConceptText(query);
  const matches = normalized ? searchConcepts(normalized) : [];

  grid.innerHTML = Object.entries(conceptLibrary).map(([subject, entries]) => `
    <section class="panel concept-subject-panel">
      <div class="panel-header">
        <h3>${subject} 개념실</h3>
        <span class="chip">중1</span>
      </div>
      <p class="header-note">${entries.length}개 단원으로 구성된 개념창고예요.</p>
      <div class="concept-unit-grid">
        ${entries.map(concept => buildConceptCardHtml(subject, concept, getConceptKey(subject, concept.unit))).join('')}
      </div>
    </section>`).join('');

  if (normalized && matches.length) {
    results.innerHTML = matches.map(concept => `
      <article class="concept-unit-card">
        <div class="panel-header">
          <h4>${concept.unit}</h4>
          <span class="chip">${concept.subject}</span>
        </div>
        <p><strong>핵심 개념</strong><br>${concept.keyConcept}</p>
        <p><strong>쉬운 설명</strong><br>${concept.easyExplanation}</p>
        <p><strong>확인 문제</strong></p>
        <ul class="concept-practice-list">
          ${concept.practiceQuestions.map(question => `<li>${question}</li>`).join('')}
        </ul>
        <p><strong>부모 지도 팁</strong><br>${concept.parentTip}</p>
      </article>`).join('');
    status.textContent = `${matches.length}개 개념이 검색되었습니다.`;
  } else if (normalized) {
    results.innerHTML = '<div class="empty-state">찾는 개념이 없어요. 단원명이나 핵심 키워드로 다시 검색해 보세요.</div>';
    status.textContent = '검색 결과가 없어요. 다른 키워드를 입력해 주세요.';
  } else {
    results.innerHTML = '<div class="empty-state">검색어를 입력하면 관련 개념과 연습 문제를 바로 확인할 수 있어요.</div>';
    status.textContent = '키워드를 입력하면 관련 단원과 연습 문제를 바로 확인할 수 있어요.';
  }

  renderFavoriteConcepts();
}

function setConceptStatus(message) {
  const status = document.getElementById('conceptSearchStatus');
  if (status) {
    status.textContent = message;
  }
}

function toggleFavoriteConcept(key) {
  const favorites = loadFavoriteConcepts();
  const nextFavorites = favorites.includes(key)
    ? favorites.filter(item => item !== key)
    : [...favorites, key];
  saveFavoriteConcepts(nextFavorites);
  renderFavoriteConcepts();
}

function linkConceptToMistakes(subject, unit) {
  const concept = getConceptByUnit(subject, unit);
  const duplicate = state.mistakes.some(item => item.subject === subject && item.unit === unit && item.reason.includes('개념'));

  if (duplicate) {
    setConceptStatus(`${subject} ${unit} 개념은 이미 오답노트에 연결되어 있습니다.`);
    return;
  }

  state.mistakes.unshift({
    id: crypto.randomUUID(),
    subject,
    unit,
    reason: concept?.commonMistakes?.[0] || '개념 실습 중 다시 풀기',
    retry: '필요',
    parentMemo: `${unit} 개념을 함께 점검해 주세요.`
  });

  saveData();
  renderAll();
  switchPage('mistakes');
  setConceptStatus(`${subject} ${unit} 개념이 오답노트에 연결되었습니다.`);
}

function bindConceptLibraryHandlers() {
  const searchBtn = document.getElementById('conceptSearchBtn');
  const searchInput = document.getElementById('conceptSearchInput');
  const grid = document.getElementById('conceptLibraryGrid');

  if (searchBtn && !searchBtn.dataset.bound) {
    searchBtn.addEventListener('click', () => {
      renderConceptLibraryPage(searchInput ? searchInput.value.trim() : '');
    });
    searchBtn.dataset.bound = 'true';
  }

  if (searchInput && !searchInput.dataset.bound) {
    searchInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        renderConceptLibraryPage(searchInput.value.trim());
      }
    });
    searchInput.dataset.bound = 'true';
  }

  if (grid && !grid.dataset.bound) {
    grid.addEventListener('click', (event) => {
      const favoriteBtn = event.target.closest('.favorite-btn');
      if (favoriteBtn) {
        toggleFavoriteConcept(favoriteBtn.dataset.key);
        renderConceptLibraryPage(searchInput ? searchInput.value.trim() : '');
        return;
      }

      const mistakeBtn = event.target.closest('.link-mistake-btn');
      if (mistakeBtn) {
        linkConceptToMistakes(mistakeBtn.dataset.subject, mistakeBtn.dataset.unit);
      }
    });
    grid.dataset.bound = 'true';
  }
}

function normalizeAnalyticsData(data) {
  const safe = data && typeof data === 'object' ? data : {};
  const subjectProgress = {
    ...(defaultAnalytics.subjectProgress || {}),
    ...(safe.subjectProgress && typeof safe.subjectProgress === 'object' ? safe.subjectProgress : {})
  };

  const weeklyStudyTime = Array.isArray(safe.weeklyStudyTime)
    ? safe.weeklyStudyTime.map(value => Number(value) || 0).slice(0, 7).concat(Array(7).fill(0)).slice(0, 7)
    : [...(defaultAnalytics.weeklyStudyTime || [])];

  return {
    weeklyStudyTime,
    subjectProgress,
    weakSubjects: Array.isArray(safe.weakSubjects) ? safe.weakSubjects.filter(Boolean) : [...(defaultAnalytics.weakSubjects || [])],
    wrongAnswerCount: Number(safe.wrongAnswerCount) || state.mistakes.length || defaultAnalytics.wrongAnswerCount,
    studyStreak: Number(safe.studyStreak) || defaultAnalytics.studyStreak,
    todayGoal: typeof safe.todayGoal === 'string' && safe.todayGoal.trim() ? safe.todayGoal.trim() : defaultAnalytics.todayGoal
  };
}

function normalizeStudyData(data) {
  const safe = data && typeof data === 'object' ? data : {};

  return {
    todos: Array.isArray(safe.todos) ? safe.todos : [],
    math: Array.isArray(safe.math) ? safe.math : [],
    english: Array.isArray(safe.english) ? safe.english : [],
    mistakes: Array.isArray(safe.mistakes) ? safe.mistakes : [],
    ebs: Array.isArray(safe.ebs) ? safe.ebs : [],
    exams: Array.isArray(safe.exams) ? safe.exams : [],
    report: safe.report && typeof safe.report === 'object' ? safe.report : {},
    analytics: normalizeAnalyticsData(safe.analytics)
  };
}

function syncAnalyticsFromState() {
  if (!state.analytics || typeof state.analytics !== 'object') {
    state.analytics = normalizeAnalyticsData(null);
  }

  const subjectProgress = {
    국어: 65,
    영어: 65,
    수학: 60,
    사회: 68,
    과학: 64
  };

  const subjectTodos = ['국어', '영어', '수학', '사회', '과학'];
  subjectTodos.forEach(subject => {
    const todosForSubject = state.todos.filter(item => item.subject === subject).length;
    const completedForSubject = state.todos.filter(item => item.subject === subject && item.done).length;
    const mistakeCount = state.mistakes.filter(item => item.subject === subject).length;
    const mathWrong = subject === '수학' ? state.math.reduce((sum, item) => sum + Number(item.wrong || 0), 0) : 0;

    subjectProgress[subject] = Math.max(35, Math.min(100, 60 + completedForSubject * 5 + Math.min(todosForSubject, 3) * 2 - mistakeCount * 5 - mathWrong * 1));
  });

  state.analytics.subjectProgress = {
    ...state.analytics.subjectProgress,
    ...subjectProgress
  };

  state.analytics.wrongAnswerCount = state.mistakes.length;
  state.analytics.weakSubjects = Object.entries(state.analytics.subjectProgress)
    .sort((a, b) => a[1] - b[1])
    .slice(0, 3)
    .map(([subject]) => subject);

  if (!Array.isArray(state.analytics.weeklyStudyTime) || state.analytics.weeklyStudyTime.length !== 7) {
    state.analytics.weeklyStudyTime = [...defaultAnalytics.weeklyStudyTime];
  }

  if (!state.analytics.todayGoal || typeof state.analytics.todayGoal !== 'string') {
    state.analytics.todayGoal = defaultAnalytics.todayGoal;
  }

  if (!Number.isFinite(Number(state.analytics.studyStreak))) {
    state.analytics.studyStreak = defaultAnalytics.studyStreak;
  }
}

function renderAll() {
  renderDashboard();
  renderAnalysisDashboard();
  renderToday();
  renderMath();
  renderEnglish();
  renderMistakes();
  renderEbs();
  renderExams();
  renderReport();
  renderAllTutorHistory();
  renderPhotoHistory();
  renderConceptLibraryPage(document.getElementById('conceptSearchInput')?.value.trim() || '');
  bindConceptLibraryHandlers();
}

function setImportExportStatus(message) {
  const status = document.getElementById('importExportStatus');
  if (status) {
    status.textContent = message;
  }
}

function exportStudyData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  const fileName = `태희AI공부실-${new Date().toISOString().slice(0, 10)}.json`;

  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  setImportExportStatus('JSON 파일을 저장했습니다.');
}

function importStudyData(file) {
  if (!file) {
    setImportExportStatus('불러올 JSON 파일을 선택해 주세요.');
    return;
  }

  const reader = new FileReader();

  reader.onload = (event) => {
    try {
      const parsed = JSON.parse(String(event.target.result));
      Object.assign(state, normalizeStudyData(parsed));
      saveData();
      renderAll();
      setImportExportStatus('학습 데이터를 성공적으로 불러왔습니다.');
    } catch (error) {
      setImportExportStatus('JSON 형식이 올바르지 않습니다. 다시 확인해 주세요.');
    }
  };

  reader.onerror = () => {
    setImportExportStatus('파일을 읽는 중 오류가 발생했습니다.');
  };

  reader.readAsText(file);
}

function switchPage(pageId) {
  pages.forEach(page => page.classList.toggle('active', page.id === pageId));
  navButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.page === pageId));
}

function formatDate(value) {
  if (!value) return '-';
  const [year, month, day] = value.split('-');
  return `${month}/${day}`;
}

function calcDaysLeft(dateValue) {
  const today = new Date();
  const target = new Date(dateValue);
  const diff = Math.ceil((target - today) / (1000 * 60 * 60 * 24));
  return diff >= 0 ? `${diff}일 남음` : '기한 지남';
}

function getCurrentLearningProfile() {
  const weakAreas = state.analytics.weakSubjects && state.analytics.weakSubjects.length
    ? state.analytics.weakSubjects
    : ['수학', '영어', '과학'];

  const weeklyPlan = [
    '월: 수학 개념 복습 + 계산 과정 다시 쓰기',
    '화: 영어 be동사 문장 만들기 + 단어 5개 복습',
    '수: 과학 생태계 예시 정리 + 그림과 연결하기',
    '목: 국어 독해 지문 1개 읽고 한 문장 요약',
    '금: 오답노트 점검 + 다음 주 학습 목표 정리'
  ];

  return {
    grade: '중1',
    subjects: [
      {
        subject: '수학',
        status: '진행 중',
        progress: '소인수분해 · 문자와 식(심화 문제 단계)',
        issue: '계산 과정 생략으로 실수 발생',
        strategy: '항상 단계별 풀이를 보여 주세요.',
        focus: '개념 연결과 실수 패턴을 함께 점검합니다.',
        review: '문제 풀이 후 10분 내 계산 과정을 다시 말로 설명해 보세요.'
      },
      {
        subject: '영어',
        status: '진행 중',
        progress: 'be동사 · 어휘 연습 진행 중',
        issue: '문장 구조를 빠르게 정리하면 실수가 줄어듭니다.',
        strategy: '간단한 문장 예시를 먼저 보여 주세요.',
        focus: '문장 구조와 어휘를 함께 다루는 연습을 권장합니다.',
        review: '하루에 5개의 문장을 읽고, 2개는 직접 써 보는 방식으로 복습해 보세요.'
      },
      {
        subject: '과학',
        status: '진행 중',
        progress: '생태계 개념 학습 중',
        issue: '개념을 외우기보다 실제 상황과 연결해야 이해가 잘 됩니다.',
        strategy: '그림, 예시, 실생활 설명을 함께 사용해 주세요.',
        focus: '이해 중심으로 원리와 사례를 연결합니다.',
        review: '생활 속 생물과 환경 예시를 떠올리며 하루 1회 짧게 복습해 보세요.'
      },
      {
        subject: '국어',
        status: '준비 중',
        progress: '진행도 아직 정리되지 않음',
        issue: '독해 연습이 부족하면 요약과 문제 해결이 느려질 수 있습니다.',
        strategy: '읽기 전 핵심 단어 찾기, 읽기 후 한 문장 요약을 추천합니다.',
        focus: '독해 연습을 먼저 시작해 지문 이해력을 키웁니다.',
        review: '지문 1개를 읽은 뒤 3분 안에 핵심 내용을 말해 보세요.'
      }
    ],
    autoWeakAreas: weakAreas,
    weeklyPlan,
    teacherRules: [
      '수학 선생: 개념 연결과 실수 패턴을 중심으로 지도합니다.',
      '영어 선생: 문장 구조와 어휘를 함께 점검합니다.',
      '과학 선생: 암기보다 이해와 예시 연결을 강조합니다.',
      '학습 코치: 주간 계획을 세우고, 복습 타이밍과 약한 영역을 자동으로 점검합니다.'
    ],
    coachTips: [
      '약한 영역이 감지되면 수학은 단계별 풀이, 영어는 문장 예시, 과학은 실생활 예시를 우선으로 추천합니다.',
      '국어는 독해 중심의 짧은 연습을 먼저 넣어 학습 흐름을 안정화합니다.'
    ]
  };
}

function renderCurrentLearningProfile() {
  const container = document.getElementById('currentLearningProfile');
  if (!container) return;

  const profile = getCurrentLearningProfile();

  container.innerHTML = `
    <div class="profile-grid">
      ${profile.subjects.map(subject => `
        <article class="profile-subject-card">
          <div class="profile-subject-header">
            <h4>${subject.subject}</h4>
            <span class="profile-status">${subject.status}</span>
          </div>
          <p><strong>진행 상황</strong><br>${subject.progress}</p>
          <p><strong>관찰된 이슈</strong><br>${subject.issue}</p>
          <p><strong>튜터 전략</strong><br>${subject.strategy}</p>
          <p><strong>교사 포인트</strong><br>${subject.focus}</p>
          <p><strong>복습 타이밍</strong><br>${subject.review}</p>
        </article>`).join('')}
    </div>
    <div class="profile-detail-grid">
      <div class="profile-detail-card">
        <h4>교사 미팅 규칙</h4>
        <ul>
          ${profile.teacherRules.map(rule => `<li>${rule}</li>`).join('')}
        </ul>
      </div>
      <div class="profile-detail-card">
        <h4>학습 코치 안내</h4>
        <ul>
          ${profile.coachTips.map(tip => `<li>${tip}</li>`).join('')}
        </ul>
      </div>
      <div class="profile-detail-card">
        <h4>자동 약점 감지</h4>
        <p>현재 기준으로 약한 영역으로 판단된 과목: ${profile.autoWeakAreas.join(', ')}</p>
        <ul class="profile-weekly-plan">
          ${profile.weeklyPlan.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    </div>`;
}

function renderDashboard() {
  const todayDone = state.todos.filter(item => item.done).length;
  const totalTodos = state.todos.length;
  const todayProgress = totalTodos === 0 ? 0 : Math.round((todayDone / totalTodos) * 100);
  const weakMath = state.math.filter(item => item.level === '낮음' || item.wrong >= 4);
  const recentMistakes = [...state.mistakes].slice(0, 3);

  document.getElementById('todayCount').textContent = `${totalTodos}개`;
  document.getElementById('todayProgress').textContent = `${todayProgress}% 완료`;
  document.getElementById('weekCount').textContent = `${state.todos.length}개`;
  document.getElementById('weakCount').textContent = `${weakMath.length}개`;
  document.getElementById('mistakeCount').textContent = `${state.mistakes.length}개`;

  const weekTodoList = document.getElementById('weekTodoList');
  weekTodoList.innerHTML = state.todos.length
    ? state.todos.map(item => `
      <div class="list-item">
        <h4>${item.subject} · ${item.task}</h4>
        <p>${item.memo || '메모 없음'}</p>
        <span class="badge">${item.done ? '완료' : '진행 중'}</span>
      </div>`).join('')
    : '<div class="empty-state">이번 주 해야 할 일이 아직 없어요.</div>';

  const weakAreaList = document.getElementById('weakAreaList');
  weakAreaList.innerHTML = weakMath.length
    ? weakMath.map(item => `
      <div class="list-item">
        <h4>${item.topic}</h4>
        <p>이해도: ${item.level}</p>
        <p>틀린 문제: ${item.wrong}개</p>
        <small>${item.memo}</small>
      </div>`).join('')
    : '<div class="empty-state">약한 단원이 아직 없어요.</div>';

  const recentMistakesList = document.getElementById('recentMistakesList');
  recentMistakesList.innerHTML = recentMistakes.length
    ? recentMistakes.map(item => `
      <div class="list-item">
        <h4>${item.subject} · ${item.unit}</h4>
        <p>${item.reason}</p>
        <small>${item.retry}</small>
      </div>`).join('')
    : '<div class="empty-state">최근 오답이 아직 없어요.</div>';

  renderCurrentLearningProfile();
}

function renderToday() {
  const container = document.getElementById('todayList');
  container.innerHTML = state.todos.length
    ? state.todos.map(item => `
      <div class="list-item todo-row">
        <div>
          <h4 class="${item.done ? 'done' : ''}">${item.subject} · ${item.task}</h4>
          <p>${item.memo || '메모 없음'}</p>
        </div>
        <label class="todo-toggle">
          <input type="checkbox" ${item.done ? 'checked' : ''} data-id="${item.id}" />
          완료
        </label>
      </div>`).join('')
    : '<div class="empty-state">오늘 할 일이 아직 없어요.</div>';

  container.querySelectorAll('input[type="checkbox"]').forEach(input => {
    input.addEventListener('change', (event) => {
      const target = state.todos.find(item => item.id === event.target.dataset.id);
      if (target) {
        target.done = event.target.checked;
        saveData();
        renderDashboard();
        renderToday();
      }
    });
  });
}

function renderMath() {
  const container = document.getElementById('mathList');
  container.innerHTML = state.math.length
    ? state.math.map(item => `
      <div class="list-item">
        <h4>${item.topic}</h4>
        <p>이해도: ${item.level}</p>
        <p>틀린 문제 수: ${item.wrong}개</p>
        <small>${item.memo}</small>
      </div>`).join('')
    : '<div class="empty-state">수학 기록이 아직 없어요.</div>';
}

function renderEnglish() {
  const container = document.getElementById('englishList');
  container.innerHTML = state.english.length
    ? state.english.map(item => {
        const score = Math.round((item.correct / item.total) * 100);
        return `
          <div class="list-item">
            <h4>${formatDate(item.date)}</h4>
            <p>총 문항 수: ${item.total}개</p>
            <p>맞은 개수: ${item.correct}개</p>
            <p>점수: ${score}점</p>
            <small>${item.memo || '틀린 단어 메모 없음'}</small>
          </div>`;
      }).join('')
    : '<div class="empty-state">영어 기록이 아직 없어요.</div>';
}

function renderMistakes() {
  const container = document.getElementById('mistakeList');
  container.innerHTML = state.mistakes.length
    ? state.mistakes.map(item => `
      <div class="list-item">
        <h4>${item.subject} · ${item.unit}</h4>
        <p>${item.reason}</p>
        <p>다시 풀기 여부: ${item.retry}</p>
        <small>${item.parentMemo || '부모 메모 없음'}</small>
      </div>`).join('')
    : '<div class="empty-state">오답 기록이 아직 없어요.</div>';
}

function renderEbs() {
  const container = document.getElementById('ebsList');
  container.innerHTML = state.ebs.length
    ? state.ebs.map(item => `
      <div class="list-item">
        <h4>${item.subject} · ${item.title}</h4>
        <p>수강 여부: ${item.watched}</p>
        <p>이해도: ${item.level}</p>
        <p>복습 필요 여부: ${item.review}</p>
      </div>`).join('')
    : '<div class="empty-state">EBS 강의 기록이 아직 없어요.</div>';
}

function renderExams() {
  const container = document.getElementById('examList');
  container.innerHTML = state.exams.length
    ? state.exams.map(item => `
      <div class="list-item">
        <h4>${item.name}</h4>
        <p>시험일: ${formatDate(item.date)}</p>
        <p>남은 날짜: ${calcDaysLeft(item.date)}</p>
        <p>준비 과목: ${item.subjects}</p>
        <span class="badge">우선순위: ${item.priority}</span>
      </div>`).join('')
    : '<div class="empty-state">시험 준비 기록이 아직 없어요.</div>';
}

function renderReport() {
  const report = state.report || {};
  document.getElementById('reportSummary').value = report.summary || '';
  document.getElementById('reportStrengths').value = report.strengths || '';
  document.getElementById('reportImprovements').value = report.improvements || '';
  document.getElementById('reportNextPlan').value = report.nextPlan || '';

  document.getElementById('reportPreview').innerHTML = `
    <h3>리포트 미리보기</h3>
    <p><strong>이번 주 공부 요약</strong><br>${report.summary || '내용을 입력해 주세요.'}</p>
    <p><strong>잘한 점</strong><br>${report.strengths || '내용을 입력해 주세요.'}</p>
    <p><strong>보완할 점</strong><br>${report.improvements || '내용을 입력해 주세요.'}</p>
    <p><strong>다음 주 추천 계획</strong><br>${report.nextPlan || '내용을 입력해 주세요.'}</p>
  `;
}

function renderAnalysisDashboard() {
  const analytics = state.analytics || normalizeAnalyticsData(null);
  const days = ['월', '화', '수', '목', '금', '토', '일'];
  const chart = document.getElementById('weeklyStudyChart');
  const progress = document.getElementById('subjectProgressList');
  const weakList = document.getElementById('weakSubjectList');
  const summaryList = document.getElementById('analysisSummaryList');

  if (chart) {
    chart.innerHTML = analytics.weeklyStudyTime.map((minutes, index) => `
      <div class="chart-column">
        <div class="chart-bar-track">
          <div class="chart-bar" style="height: ${Math.max(20, Math.min(100, (minutes / 60) * 100))}%"></div>
        </div>
        <span>${days[index]}</span>
        <strong>${minutes}분</strong>
      </div>`).join('');
  }

  if (progress) {
    progress.innerHTML = Object.entries(analytics.subjectProgress).map(([subject, value]) => `
      <div class="subject-progress-item">
        <div class="subject-progress-meta">
          <span>${subject}</span>
          <span>${value}%</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width: ${value}%"></div>
        </div>
      </div>`).join('');
  }

  if (weakList) {
    weakList.innerHTML = analytics.weakSubjects.map((subject, index) => `
      <div class="rank-item">
        <div class="rank-meta">
          <span>${index + 1}위</span>
          <span>${subject}</span>
        </div>
        <p>진도 보완이 필요한 과목입니다.</p>
      </div>`).join('');
  }

  if (summaryList) {
    summaryList.innerHTML = `
      <div class="summary-item">
        <strong>틀린 문제 수</strong>
        <p>${analytics.wrongAnswerCount}개</p>
      </div>
      <div class="summary-item">
        <strong>연속 공부 일수</strong>
        <p>${analytics.studyStreak}일</p>
      </div>
      <div class="summary-item">
        <strong>오늘의 공부 목표</strong>
        <p>${analytics.todayGoal}</p>
      </div>
    `;
  }
}

function bindForms() {
  document.getElementById('todayForm').addEventListener('submit', (event) => {
    event.preventDefault();
    state.todos.push({
      id: crypto.randomUUID(),
      subject: document.getElementById('todoSubject').value.trim(),
      task: document.getElementById('todoTask').value.trim(),
      memo: document.getElementById('todoMemo').value.trim(),
      done: false
    });
    saveData();
    renderToday();
    renderDashboard();
    event.target.reset();
  });

  document.getElementById('mathForm').addEventListener('submit', (event) => {
    event.preventDefault();
    state.math.push({
      id: crypto.randomUUID(),
      topic: document.getElementById('mathTopic').value.trim(),
      level: document.getElementById('mathLevel').value,
      wrong: Number(document.getElementById('mathWrong').value || 0),
      memo: document.getElementById('mathMemo').value.trim()
    });
    saveData();
    renderMath();
    renderDashboard();
    event.target.reset();
  });

  document.getElementById('englishForm').addEventListener('submit', (event) => {
    event.preventDefault();
    state.english.push({
      id: crypto.randomUUID(),
      date: document.getElementById('englishDate').value,
      total: Number(document.getElementById('englishTotal').value),
      correct: Number(document.getElementById('englishCorrect').value),
      memo: document.getElementById('englishMemo').value.trim()
    });
    saveData();
    renderEnglish();
    renderDashboard();
    event.target.reset();
  });

  document.getElementById('mistakeForm').addEventListener('submit', (event) => {
    event.preventDefault();
    state.mistakes.push({
      id: crypto.randomUUID(),
      subject: document.getElementById('mistakeSubject').value.trim(),
      unit: document.getElementById('mistakeUnit').value.trim(),
      reason: document.getElementById('mistakeReason').value.trim(),
      retry: document.getElementById('mistakeRetry').value,
      parentMemo: document.getElementById('mistakeParentMemo').value.trim()
    });
    saveData();
    renderMistakes();
    renderDashboard();
    event.target.reset();
  });

  document.getElementById('ebsForm').addEventListener('submit', (event) => {
    event.preventDefault();
    state.ebs.push({
      id: crypto.randomUUID(),
      subject: document.getElementById('ebsSubject').value.trim(),
      title: document.getElementById('ebsTitle').value.trim(),
      watched: document.getElementById('ebsWatched').value,
      level: document.getElementById('ebsLevel').value,
      review: document.getElementById('ebsReview').value
    });
    saveData();
    renderEbs();
    event.target.reset();
  });

  document.getElementById('examForm').addEventListener('submit', (event) => {
    event.preventDefault();
    state.exams.push({
      id: crypto.randomUUID(),
      name: document.getElementById('examName').value.trim(),
      date: document.getElementById('examDate').value,
      subjects: document.getElementById('examSubjects').value.trim(),
      priority: document.getElementById('examPriority').value
    });
    saveData();
    renderExams();
    event.target.reset();
  });

  document.getElementById('saveReportBtn').addEventListener('click', () => {
    state.report = {
      summary: document.getElementById('reportSummary').value.trim(),
      strengths: document.getElementById('reportStrengths').value.trim(),
      improvements: document.getElementById('reportImprovements').value.trim(),
      nextPlan: document.getElementById('reportNextPlan').value.trim()
    };
    saveData();
    renderReport();
  });

  document.getElementById('exportDataBtn').addEventListener('click', exportStudyData);
  document.getElementById('importDataInput').addEventListener('change', (event) => {
    const file = event.target.files && event.target.files[0];
    importStudyData(file);
    event.target.value = '';
  });

  document.querySelectorAll('textarea').forEach(textarea => {
    textarea.addEventListener('input', () => {
      if (textarea.id.includes('report')) {
        renderReport();
      }
    });
  });
}

function tutorConfig(subject) {
  const mapping = {
    국어: { pageId: 'korean-tutor', questionKey: 'koreanQuestionInput', followKey: 'koreanFollowUpInput', memoKey: 'koreanParentMemo', gradeKey: 'koreanGradeSelect', difficultyKey: 'koreanDifficultySelect', answerKey: 'koreanAnswerOutput', historyKey: 'koreanHistory', statusKey: 'koreanStatus', generateId: 'koreanGenerateBtn', saveId: 'koreanSaveBtn' },
    영어: { pageId: 'english-tutor', questionKey: 'englishQuestionInput', followKey: 'englishFollowUpInput', memoKey: 'englishParentMemo', gradeKey: 'englishGradeSelect', difficultyKey: 'englishDifficultySelect', answerKey: 'englishAnswerOutput', historyKey: 'englishHistory', statusKey: 'englishStatus', generateId: 'englishGenerateBtn', saveId: 'englishSaveBtn' },
    수학: { pageId: 'math-tutor', questionKey: 'mathTutorQuestionInput', followKey: 'mathTutorFollowUpInput', memoKey: 'mathTutorParentMemo', gradeKey: 'mathTutorGradeSelect', difficultyKey: 'mathTutorDifficultySelect', answerKey: 'mathTutorAnswerOutput', historyKey: 'mathTutorHistory', statusKey: 'mathTutorStatus', generateId: 'mathTutorGenerateBtn', saveId: 'mathTutorSaveBtn' },
    사회: { pageId: 'social-tutor', questionKey: 'socialQuestionInput', followKey: 'socialFollowUpInput', memoKey: 'socialParentMemo', gradeKey: 'socialGradeSelect', difficultyKey: 'socialDifficultySelect', answerKey: 'socialAnswerOutput', historyKey: 'socialHistory', statusKey: 'socialStatus', generateId: 'socialGenerateBtn', saveId: 'socialSaveBtn' },
    과학: { pageId: 'science-tutor', questionKey: 'scienceQuestionInput', followKey: 'scienceFollowUpInput', memoKey: 'scienceParentMemo', gradeKey: 'scienceGradeSelect', difficultyKey: 'scienceDifficultySelect', answerKey: 'scienceAnswerOutput', historyKey: 'scienceHistory', statusKey: 'scienceStatus', generateId: 'scienceGenerateBtn', saveId: 'scienceSaveBtn' },
    '담임 학습코치': { pageId: 'homeroom-tutor', questionKey: 'homeroomQuestionInput', followKey: 'homeroomFollowUpInput', memoKey: 'homeroomParentMemo', gradeKey: 'homeroomGradeSelect', difficultyKey: 'homeroomDifficultySelect', answerKey: 'homeroomAnswerOutput', historyKey: 'homeroomHistory', statusKey: 'homeroomStatus', generateId: 'homeroomGenerateBtn', saveId: 'homeroomSaveBtn' }
  };

  return mapping[subject];
}

function getTutorHistoryBySubject(subject) {
  return loadTutorHistory().filter(entry => entry.subject === subject);
}

function setTutorStatus(subject, message) {
  const config = tutorConfig(subject);
  const status = document.getElementById(config.statusKey);
  if (status) {
    status.textContent = message;
  }
}

function renderTutorHistory(subject) {
  const config = tutorConfig(subject);
  const container = document.getElementById(config.historyKey);
  if (!container) return;

  const entries = getTutorHistoryBySubject(subject);
  if (!entries.length) {
    container.innerHTML = '<div class="empty-state">저장된 답변이 아직 없어요.</div>';
    return;
  }

  container.innerHTML = entries.map(entry => `
    <div class="history-item">
      <strong>${entry.question}</strong>
      <p>${entry.answer}</p>
      <div class="history-meta">${entry.grade} · ${entry.difficulty} · ${entry.createdAt}</div>
      <p>학부모 메모: ${entry.parentMemo || '없음'}</p>
      <div class="history-actions">
        <button type="button" class="history-delete-btn" data-history-id="${entry.id}">삭제</button>
      </div>
    </div>`).join('');

  container.querySelectorAll('.history-delete-btn').forEach(button => {
    button.addEventListener('click', () => {
      const id = button.dataset.historyId;
      const nextHistory = loadTutorHistory().filter(entry => entry.id !== id);
      saveTutorHistory(nextHistory);
      renderTutorHistory(subject);
      setTutorStatus(subject, '저장된 기록을 삭제했습니다.');
    });
  });
}

function renderAllTutorHistory() {
  ['국어', '영어', '수학', '사회', '과학', '담임 학습코치'].forEach(subject => {
    renderTutorHistory(subject);
  });
}

function renderPhotoHistory() {
  const container = document.getElementById('photoHistory');
  if (!container) return;

  const entries = loadPhotoHistory();
  if (!entries.length) {
    container.innerHTML = '<div class="empty-state">저장된 문제 사진 질문이 아직 없어요.</div>';
    return;
  }

  container.innerHTML = entries.map(entry => `
    <div class="photo-history-item">
      <div class="photo-history-meta">${entry.subject} · ${entry.answerMode} · ${entry.createdAt}</div>
      <strong>${entry.question || '질문 없음'}</strong>
      <p>${entry.answer}</p>
      ${entry.imageDataUrl ? `<img src="${entry.imageDataUrl}" alt="저장된 문제 사진" />` : ''}
    </div>`).join('');
}

function generatePhotoAnswer(subject, question, answerMode) {
  const baseHint = question ? `질문: ${question}` : '문제 사진을 확인했습니다.';

  if (answerMode === '힌트만 보기') {
    return `${baseHint}\n\n힌트\n- 핵심 개념을 먼저 떠올려 보세요.\n- 문제에서 무엇을 묻는지 한 문장으로 정리해 보세요.\n- 계산 혹은 문장 구조를 한 단계씩 확인해 보세요.`;
  }

  if (answerMode === '단계별 풀이') {
    return `${baseHint}\n\n단계별 풀이\n1. 문제의 조건을 다시 한 번 읽습니다.\n2. 필요한 개념을 떠올리고, 정리합니다.\n3. 계산 또는 문장 구성을 차례대로 진행합니다.\n4. 마지막으로 답이 문제 의도에 맞는지 확인합니다.`;
  }

  return `${baseHint}\n\n정답까지 보기\n- 정답을 빠르게 확인하고, 왜 그런 답인지 다시 읽어 보세요.\n- 틀린 부분이 있다면 다시 한 번 개념을 정리해 보세요.`;
}

function bindPhotoQuestionHandlers() {
  const imageInput = document.getElementById('photoImageInput');
  const previewImage = document.getElementById('photoPreviewImage');
  const previewPlaceholder = document.getElementById('photoPreviewPlaceholder');
  const subjectSelect = document.getElementById('photoSubjectSelect');
  const answerModeSelect = document.getElementById('photoAnswerModeSelect');
  const questionInput = document.getElementById('photoQuestionInput');
  const generateBtn = document.getElementById('photoGenerateBtn');
  const saveBtn = document.getElementById('photoSaveBtn');
  const answerOutput = document.getElementById('photoAnswerOutput');
  const status = document.getElementById('photoStatus');

  if (!imageInput || !previewImage || !previewPlaceholder || !generateBtn || !saveBtn || !answerOutput || !status) {
    return;
  }

  let currentImageDataUrl = '';

  imageInput.addEventListener('change', (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) {
      currentImageDataUrl = '';
      previewImage.hidden = true;
      previewPlaceholder.textContent = '이미지 미리보기가 여기에 표시됩니다.';
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      currentImageDataUrl = String(reader.result);
      previewImage.src = currentImageDataUrl;
      previewImage.hidden = false;
      previewPlaceholder.textContent = '';
      status.textContent = '이미지를 미리보고 있습니다. 답변을 생성해 주세요.';
    };
    reader.readAsDataURL(file);
  });

  generateBtn.addEventListener('click', () => {
    if (!currentImageDataUrl) {
      status.textContent = '문제 사진을 먼저 업로드해 주세요.';
      return;
    }

    const question = questionInput.value.trim();
    const answer = generatePhotoAnswer(subjectSelect.value, question, answerModeSelect.value);
    answerOutput.textContent = answer;
    status.textContent = '모의 답변이 생성되었습니다.';
  });

  saveBtn.addEventListener('click', () => {
    if (!currentImageDataUrl) {
      status.textContent = '문제 사진을 먼저 업로드해 주세요.';
      return;
    }

    const question = questionInput.value.trim();
    const answer = answerOutput.textContent.trim();
    if (!answer) {
      status.textContent = '먼저 답변을 생성해 주세요.';
      return;
    }

    const entry = {
      id: crypto.randomUUID(),
      subject: subjectSelect.value,
      answerMode: answerModeSelect.value,
      question,
      answer,
      imageDataUrl: currentImageDataUrl,
      createdAt: new Date().toLocaleString('ko-KR')
    };

    const nextHistory = [entry, ...loadPhotoHistory()];
    savePhotoHistory(nextHistory);
    renderPhotoHistory();
    status.textContent = '질문과 답변 기록이 저장되었습니다.';
  });
}

function generateTutorAnswer(subject, question, grade, difficulty) {
  const normalized = `${subject} ${question}`.toLowerCase();
  const level = difficulty || '보통';
  const gradeLabel = grade || '중1';
  let response = '';

  if (subject === '국어') {
    const explanation = normalized.includes('독해')
      ? '독해는 먼저 문단의 핵심 내용과 주제를 찾고, 이어서 세부 정보를 확인하는 순서로 읽는 것이 좋아요.'
      : '국어에서는 글의 목적, 중심 생각, 표현의 의도를 먼저 파악하면 이해가 쉬워져요.';
    response = `안녕하세요! ${gradeLabel} 학생을 위한 국어 설명입니다.

${explanation}

핵심 포인트
- 문단의 핵심 문장을 먼저 찾기
- 중요한 단어와 연결어에 표시하기
- 글의 목적과 분위기 확인하기

${level} 수준에서는 핵심어를 표시하고, 글쓴이의 의도를 짚어 보는 연습을 추천해요.

복습 질문
- 이 글의 중심 생각은 무엇인가요?`;
  }

  if (subject === '영어') {
    const vocabHint = normalized.includes('문법') ? '문법은 규칙을 먼저 이해하고 예문으로 익히는 것이 가장 효과적입니다.' : '단어는 뜻과 쓰임을 함께 익히면 더 오래 기억됩니다.';
    const grammarGuide = normalized.includes('문법') ? '현재는 문장 구조를 먼저 살펴보고, 주어와 동사를 확인해 보세요.' : '간단한 문장부터 반복해서 읽고, 의미를 말로 바꿔 보는 연습이 도움이 됩니다.';
    response = `친절한 영어 선생님입니다. ${gradeLabel} 기준으로 설명해 드릴게요.

${vocabHint}

문법 안내
- ${grammarGuide}

예문
- I study English every day.
- She is good at reading stories.

짧은 퀴즈
- 다음 문장에서 주어와 동사를 찾아 보세요.

다음에 더 자세히 풀어볼 수 있어요.`;
  }

  if (subject === '수학') {
    const stepByStep = normalized.includes('분수')
      ? '1) 분수의 나눗셈은 뒤의 분수를 뒤집고 곱해요.\n2) 약분이 가능하면 먼저 약분해요.\n3) 결과가 맞는지 다시 확인해요.'
      : '1) 문제에서 구하려는 값을 먼저 정리해요.\n2) 필요한 계산 순서를 하나씩 적어 봐요.\n3) 계산한 값이 문제 상황에 맞는지 확인해요.';
    const why = normalized.includes('분수')
      ? '왜 이렇게 되는지: 분수의 나눗셈은 “몇 묶음이 있는지”를 묻는 과정이라 뒤집어서 곱하는 방식으로 바뀝니다.'
      : '왜 이렇게 되는지: 문제를 작은 단계로 나누면, 어떤 연산을 왜 하는지 자연스럽게 이해할 수 있습니다.';
    response = `곰곰한 수학 설명입니다. ${gradeLabel} 수준에 맞춰 단계별로 정리해 드릴게요.

${stepByStep}

${why}

간단한 연습 문제
- ${normalized.includes('분수') ? '3/4 ÷ 1/2 = ?' : '12를 3으로 나누면 얼마인가요?'}

한 번 더 확인해 보세요.`;
  }

  if (subject === '사회') {
    response = `사회 선생님입니다. 핵심 개념부터 차근차근 정리해 드릴게요.

개념
- ${normalized.includes('헌법') ? '헌법은 나라의 규칙을 정리한 중요한 문서예요.' : '사회는 사건, 제도, 사람의 관계를 연결해 이해하는 것이 핵심입니다.'}

예시
- 학교 생활 규칙, 지역의 규칙, 국가의 법 같은 예를 떠올려 보세요.

암기 포인트
- 핵심 용어 3개를 먼저 외우기
- 예시와 연결해 기억하기
- 질문을 만들며 복습하기`;
  }

  if (subject === '과학') {
    response = `과학 선생님입니다. 원리부터 생활 예시까지 쉽게 정리해 드릴게요.

원리
- 먼저 핵심 현상을 정리해 보세요.
- 중간 과정과 결과를 순서대로 생각해 보세요.

생활 예시
- 일상에서 같은 원리가 보이는 상황을 떠올려 보세요.

확인 퀴즈
- 이 현상을 한 문장으로 설명해 보세요.
- 무엇이 원인이고 무엇이 결과인지 말해 보세요.`;
  }

  if (subject === '담임 학습코치') {
    response = `담임 학습코치입니다. ${gradeLabel} 학생의 학습을 응원해 드릴게요.

공부 계획
- ${normalized.includes('습관') ? '10분 단위로 공부 시간을 나누고 마지막 5분에 정리하는 습관을 추천해요.' : '작은 목표를 세우고 오늘 끝내야 할 것 2개만 정하는 것이 가장 실천이 쉬워요.'}

격려
- 작은 성취도 충분히 소중한 노력입니다.

주간 계획
- 월요일: 복습, 수요일: 문제풀이, 금요일: 점검 및 정리

오늘의 한마디
- 한 번에 완벽하게 하려 하지 말고, 오늘 할 수 있는 만큼만 해보세요.`;
  }

  const guidance = buildTutorConceptGuidance(subject, question);
  return guidance ? `${response}

${guidance}` : response;
}

function buildTutorOutput(subject, question, grade, difficulty, extraQuestion) {
  return generateTutorAnswer(subject, `${question}${extraQuestion ? ` ${extraQuestion}` : ''}`, grade, difficulty);
}

function getTutorInputs(config) {
  return {
    questionInput: document.getElementById(config.questionKey),
    followUpInput: document.getElementById(config.followKey),
    memoInput: document.getElementById(config.memoKey),
    gradeInput: document.getElementById(config.gradeKey),
    difficultyInput: document.getElementById(config.difficultyKey),
    answerOutput: document.getElementById(config.answerKey)
  };
}

function saveTutorAnswer(subject) {
  const config = tutorConfig(subject);
  const inputs = getTutorInputs(config);
  const question = inputs.questionInput.value.trim();
  const extraQuestion = inputs.followUpInput.value.trim();
  const answer = inputs.answerOutput.textContent.trim();

  if (!question && !extraQuestion) {
    setTutorStatus(subject, '질문을 먼저 입력해 주세요.');
    return;
  }

  if (!answer) {
    setTutorStatus(subject, '먼저 답변을 생성해 주세요.');
    return;
  }

  const entry = {
    id: crypto.randomUUID(),
    subject,
    question: question || extraQuestion,
    answer,
    grade: inputs.gradeInput.value,
    difficulty: inputs.difficultyInput.value,
    parentMemo: inputs.memoInput.value.trim(),
    createdAt: new Date().toLocaleString('ko-KR')
  };

  const nextHistory = [entry, ...loadTutorHistory()];
  saveTutorHistory(nextHistory);
  renderTutorHistory(subject);
  setTutorStatus(subject, '답변과 메모가 저장되었습니다.');
}

function attachTutorHandlers(subject) {
  const config = tutorConfig(subject);
  const inputs = getTutorInputs(config);
  const generateBtn = document.getElementById(config.generateId);
  const saveBtn = document.getElementById(config.saveId);

  generateBtn.addEventListener('click', () => {
    const question = inputs.questionInput.value.trim();
    const extraQuestion = inputs.followUpInput.value.trim();

    if (!question && !extraQuestion) {
      setTutorStatus(subject, '질문을 입력해 주세요.');
      return;
    }

    const answer = buildTutorOutput(subject, question, inputs.gradeInput.value, inputs.difficultyInput.value, extraQuestion);
    inputs.answerOutput.textContent = answer;
    setTutorStatus(subject, '답변이 생성되었습니다.');
  });

  saveBtn.addEventListener('click', () => saveTutorAnswer(subject));
}

function init() {
  loadData();
  bindForms();
  bindPhotoQuestionHandlers();
  renderAll();
  bindConceptLibraryHandlers();
  ['국어', '영어', '수학', '사회', '과학', '담임 학습코치'].forEach(subject => attachTutorHandlers(subject));
  switchPage('dashboard');
}

navButtons.forEach(button => {
  button.addEventListener('click', () => switchPage(button.dataset.page));
});

init();
