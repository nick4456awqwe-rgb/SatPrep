import type { Domain } from '../types';

export const readingDomains: Domain[] = [
  {
    id: 'info-ideas',
    subject: 'reading',
    title: 'Информация и идеи',
    englishTitle: 'Information and Ideas',
    description: 'Главная мысль текста, работа с доказательствами и логические выводы. Около 26% вопросов Reading & Writing.',
    color: 'teal',
    icon: '💡',
    topics: [
      {
        id: 'central-ideas',
        domainId: 'info-ideas',
        title: 'Главная мысль и детали',
        subtitle: 'Central Ideas and Details',
        summary: 'Полный разбор: как находить основную мысль короткого текста, отличать её от деталей и от цели автора, и как быстро отвечать на вопросы двух разных типов.',
        lesson: [
          {
            heading: '1. Зачем эта тема важна на SAT',
            body: [
              'Вопросы на главную мысль и детали — самая большая по объёму категория внутри Information and Ideas. Они кажутся "лёгкими", потому что не требуют специальных знаний — но именно поэтому на них чаще всего теряют баллы из-за спешки и невнимательного чтения вариантов ответа.',
            ],
          },
          {
            heading: '2. Формат вопроса',
            body: [
              'На SAT тебе дают короткий текст (обычно 25–150 слов) и спрашивают: "Which choice best states the main idea of the text?" или "Which choice best describes the overall message of the text?" или "According to the text, what is true about X?" (это уже вопрос на деталь, а не на главную мысль).',
              'Главная мысль (main idea) — это то, ради чего написан весь текст: та единственная идея, которую поддерживает КАЖДОЕ предложение текста. Детали (details) — это факты, примеры, цифры, которые ПОДДЕРЖИВАЮТ главную мысль, но сами по себе ей не являются.',
            ],
          },
          {
            heading: '3. Стратегия для вопросов на главную мысль',
            body: [
              '1) Читай текст целиком, задавая себе вопрос: "Зачем автор это написал? Что он хочет доказать или показать?" — часто ответ формулируется в первом или последнем предложении текста.',
              '2) Отсеивай варианты ответа, которые: (а) слишком узкие — описывают только одну деталь или один пример из текста, а не текст целиком; (б) слишком широкие — делают обобщение, выходящее за рамки того, что написано; (в) искажают факты текста — даже одно неверное слово (например, "always" вместо "often") делает весь ответ неверным.',
              '3) Правильный ответ почти всегда можно подтвердить конкретным предложением из текста — если не можешь найти прямое подтверждение, это, скорее всего, неправильный вариант.',
            ],
            tips: [
              'Неправильные варианты на SAT часто звучат "разумно" и даже правдиво сами по себе (с точки зрения общих знаний о мире), но не отражают именно ЭТОТ текст — всегда проверяй ответ по тексту, а не по своим знаниям о теме.',
            ],
          },
          {
            heading: '4. Вопросы на детали (retrieval questions)',
            body: [
              'Отдельный тип вопроса — "According to the text, ...?" — здесь не нужно искать общую идею, нужно найти КОНКРЕТНЫЙ факт, дословно или почти дословно упомянутый в тексте.',
              'Такие вопросы — самые "безопасные" на экзамене: если ты нашёл нужное предложение в тексте, correct answer почти всегда его точный перифраз (перефразировка) без искажения смысла.',
            ],
          },
          {
            heading: '5. Главная мысль vs цель автора — не путай эти два понятия',
            body: [
              'Main idea отвечает на вопрос "ЧТО утверждает текст?" — это содержание мысли. Purpose (цель) отвечает на вопрос "ЗАЧЕМ автор это написал?" — это функция текста (объяснить, убедить, сравнить, описать проблему).',
              'Например, главная мысль может звучать как "новая методика снижает затраты на 20%", а цель текста — "проинформировать читателей о результатах эксперимента". Формулировки очень разные, хотя относятся к одному и тому же тексту.',
            ],
          },
          {
            heading: '6. Порядок чтения: сначала текст или сначала вопрос?',
            body: [
              'Для коротких текстов SAT (25-150 слов) эффективнее сначала прочитать САМ ТЕКСТ полностью, а затем — вопрос и варианты. Текст настолько короткий, что нет смысла "сканировать" его в поисках ответа на ещё не прочитанный вопрос — это работает для длинных текстов, но не для формата цифрового SAT.',
              'Прочитав текст один раз внимательно, сформулируй для себя в одном предложении, "о чём вообще был текст" — прежде чем смотреть варианты ответа. Это тренирует навык вычленения главной мысли самостоятельно, а не узнавания её среди готовых формулировок.',
            ],
          },
          {
            heading: '7. Развёрнутый список типичных ошибок',
            body: [
              'Путать деталь, упомянутую в начале текста, с главной мыслью — часто в начале текста даётся только фон/контекст (background information), а собственно тезис автора появляется позже.',
              'Выбирать ответ, который просто повторяет слова из текста, но меняет их смысл (например, меняет причину и следствие местами, или превращает предположение автора в установленный факт).',
              'Путать main idea и purpose при выборе ответа — например, выбирать вариант с глаголом "to argue that..." в вопросе про main idea, хотя вопрос требует содержательного утверждения, а не описания цели.',
            ],
          },
          {
            heading: '8. Мини-проверка перед практикой',
            body: [
              'Прочитай мини-текст: "Many companies now offer four-day work weeks. Early results suggest employees report similar or higher productivity despite working fewer hours." Сформулируй сам: какая здесь главная мысль? (Ответ, близкий к: сокращённая рабочая неделя не снижает продуктивность, а может даже повышать её — сама попытка сформулировать это своими словами уже тренирует навык.)',
            ],
          },
        ],
        examples: [
          {
            id: 'ci-ex-1',
            passage:
              'Marine biologist Sylvia Earle has spent decades advocating for the protection of ocean ecosystems. She argues that the ocean, often treated as an inexhaustible resource, is in fact fragile and increasingly threatened by overfishing and pollution. Earle\'s work has inspired the creation of numerous marine protected areas worldwide.',
            prompt: 'Which choice best states the main idea of the text?',
            choices: [
              'Sylvia Earle has worked as a marine biologist for many years.',
              'Overfishing is the single greatest threat to ocean ecosystems.',
              'Sylvia Earle\'s advocacy for ocean protection has led to real-world conservation efforts.',
              'Marine protected areas are located throughout the world.',
            ],
            correct: 2,
            explanation:
              'Текст в целом о том, что деятельность Эрл по защите океана привела к реальным результатам — созданию заповедных зон. Вариант A — просто деталь (факт биографии). Вариант B искажает текст (не сказано, что это "наибольшая" угроза, только что океан "increasingly threatened"). Вариант D — тоже лишь деталь, а не главная мысль всего текста.',
          },
          {
            id: 'ci-ex-2',
            passage:
              'According to a recent study, city residents who commute by bicycle report higher levels of daily physical activity than those who commute by car, even after accounting for time spent exercising outside of work. Researchers suggest that incorporating movement into daily routines, rather than relying solely on dedicated workout sessions, may be a more sustainable path to better health for busy adults.',
            prompt: 'According to the text, what did the researchers suggest?',
            choices: [
              'Cycling is more dangerous than driving in cities.',
              'Dedicated workout sessions are ineffective for improving health.',
              'Incorporating physical activity into daily routines may be a sustainable way to improve health.',
              'City residents should be required to commute by bicycle.',
            ],
            correct: 2,
            explanation: 'Это прямой перифраз последнего предложения текста — вопрос на деталь ("according to the text"), и правильный ответ почти дословно повторяет мысль исследователей без искажений.',
          },
          {
            id: 'ci-ex-3',
            passage:
              'For much of the twentieth century, geologists assumed that continents were fixed in place. The theory of plate tectonics, developed in the 1960s, overturned this assumption by showing that Earth\'s crust is divided into plates that slowly drift over time, explaining phenomena from earthquakes to the shapes of continents.',
            prompt: 'Which choice best states the main purpose of the text?',
            choices: [
              'To describe the exact speed at which tectonic plates move',
              'To explain how a major scientific theory changed our understanding of Earth\'s structure',
              'To argue that earthquakes are the most dangerous natural disasters',
              'To list every geologist who contributed to plate tectonics theory',
            ],
            correct: 1,
            explanation: 'Вопрос спрашивает про ЦЕЛЬ (purpose), а не про содержание — текст написан, чтобы объяснить, как теория тектоники плит изменила понимание строения Земли. Варианты A, C, D — либо не соответствуют тексту, либо являются лишними деталями.',
          },
          {
            id: 'ci-ex-4',
            passage:
              'Coral reefs, though they cover less than 1% of the ocean floor, support roughly a quarter of all marine species. This disproportionate importance makes reefs a priority for conservationists, even as rising ocean temperatures put many reef systems at risk of large-scale bleaching events.',
            prompt: 'According to the text, what percentage of marine species do coral reefs support?',
            choices: ['Less than 1%', 'Roughly 25%', 'Roughly 50%', 'Nearly 100%'],
            correct: 1,
            explanation: 'Прямая деталь из текста: "support roughly a quarter of all marine species" — четверть означает примерно 25%.',
          },
        ],
        quiz: [
          {
            id: 'ci-q-1',
            passage:
              'When the printing press was introduced in Europe in the 15th century, it did more than simply speed up the copying of texts. By making books more affordable and widely available, it accelerated the spread of literacy and new ideas, ultimately reshaping European intellectual and religious life.',
            prompt: 'Which choice best states the main idea of the text?',
            choices: [
              'The printing press was invented in the 15th century.',
              'The printing press had effects far beyond simply making copying faster.',
              'Books became affordable only after the printing press was introduced.',
              'Religious life in Europe was entirely transformed by literacy.',
            ],
            correct: 1,
            explanation: 'Текст подчёркивает, что пресс сделал "больше, чем просто ускорил копирование" — именно это и есть центральная мысль, которую иллюстрируют все последующие детали.',
          },
          {
            id: 'ci-q-2',
            passage:
              'Octopuses are famous for their intelligence, but what is less well known is how differently their nervous systems are organized compared to those of humans. More than half of an octopus\'s neurons are located not in its brain but in its arms, allowing each arm to process information and react to stimuli somewhat independently of the central brain.',
            prompt: 'According to the text, what is true about an octopus\'s arms?',
            choices: [
              'They contain no neurons at all.',
              'They can process information and react somewhat independently of the brain.',
              'They are entirely controlled by the central brain.',
              'They are less intelligent than a human\'s arms.',
            ],
            correct: 1,
            explanation: 'Это прямая деталь из текста: руки могут "process information and react to stimuli somewhat independently" — почти дословный перифраз.',
          },
          {
            id: 'ci-q-3',
            passage:
              'Urban planners have increasingly turned to "pocket parks" — small green spaces tucked between buildings — as a way to bring nature into dense city centers without requiring large plots of land. While a single pocket park cannot replace a large public park, a network of them scattered throughout a neighborhood can noticeably improve residents\' access to green space.',
            prompt: 'Which choice best states the main idea of the text?',
            choices: [
              'Pocket parks are more useful than large public parks in every situation.',
              'A network of small green spaces can meaningfully improve access to nature in dense cities.',
              'Urban planners have abandoned the idea of building large public parks.',
              'Pocket parks require large plots of land to be effective.',
            ],
            correct: 1,
            explanation: 'Текст явно ограничивает утверждение: один pocket park не заменит большой парк, но СЕТЬ таких парков заметно улучшает доступ к зелени — это и есть точная главная мысль без преувеличений.',
          },
          {
            id: 'ci-q-4',
            passage:
              'Honeybees communicate the location of food sources to other bees through a series of movements known as the "waggle dance." The angle and duration of the dance encode the direction and distance of the food relative to the sun, allowing other bees to locate it with remarkable accuracy.',
            prompt: 'According to the text, what does the angle of the waggle dance communicate?',
            choices: [
              'The temperature of the hive',
              'The direction of the food source relative to the sun',
              'The age of the bee performing the dance',
              'The number of bees in the hive',
            ],
            correct: 1,
            explanation: 'Прямая деталь: "the angle... of the dance encode the direction... of the food relative to the sun".',
          },
          {
            id: 'ci-q-5',
            passage:
              'Contrary to the popular image of lightning as a single bolt, most lightning strikes actually consist of multiple strokes traveling the same path in rapid succession, often within a fraction of a second. This is part of why lightning frequently appears to flicker rather than flash just once.',
            prompt: 'Which choice best states the main idea of the text?',
            choices: [
              'Lightning is more dangerous than most people realize.',
              'Most lightning strikes involve several rapid strokes rather than a single bolt.',
              'Lightning always flickers instead of flashing.',
              'Scientists do not understand how lightning forms.',
            ],
            correct: 1,
            explanation: 'Главная мысль прямо противопоставлена "popular image" (одна вспышка) и утверждает, что на самом деле происходит несколько быстрых разрядов подряд — без чрезмерных обобщений вроде "always".',
          },
          {
            id: 'ci-q-6',
            passage:
              'A growing number of city libraries have begun offering "library of things" programs, lending out items like power tools, sewing machines, and camping gear rather than just books. Proponents argue this reduces the need for individuals to purchase rarely used items, cutting down on both cost and waste.',
            prompt: 'According to the text, what do proponents of "library of things" programs argue?',
            choices: [
              'Libraries should stop lending books entirely.',
              'These programs can reduce cost and waste by reducing the need to buy rarely used items.',
              'Power tools are more popular than books at most libraries.',
              'Camping gear is too expensive for most libraries to lend.',
            ],
            correct: 1,
            explanation: 'Прямая деталь: "proponents argue this reduces the need... cutting down on both cost and waste" — почти дословный перифраз в правильном варианте.',
          },
        ],
      },
      {
        id: 'command-evidence',
        domainId: 'info-ideas',
        title: 'Работа с доказательствами',
        subtitle: 'Command of Evidence (textual and quantitative)',
        summary: 'Полный разбор textual и quantitative evidence: как выбрать цитату, данные графика или таблицы, которые лучше всего подтверждают утверждение — и как отличить сильное доказательство от слабого.',
        lesson: [
          {
            heading: '1. Зачем эта тема важна на SAT',
            body: [
              'Command of Evidence — это навык, который проверяет не понимание текста как такового, а умение мыслить как исследователь: отличать факт от мнения, сильное доказательство от слабого, релевантные данные от посторонних.',
            ],
          },
          {
            heading: '2. Два типа задач',
            body: [
              'Textual evidence: дан текст и утверждение (claim) — либо сформулированное в самом тексте, либо приписанное конкретному человеку ("a researcher claims that..."). Нужно выбрать, какая цитата из вариантов ответа лучше всего ЭТО утверждение подтверждает.',
              'Quantitative evidence: дан текст и график/таблица. Нужно выбрать, какие данные из графика лучше всего подтверждают вывод, сделанный в тексте, или дополняют предложение с пропуском.',
            ],
          },
          {
            heading: '3. Стратегия для textual evidence',
            body: [
              '1) Сначала чётко сформулируй для себя, ЧТО именно нужно доказать (перечитай формулировку утверждения ещё раз, не полагаясь на память).',
              '2) Ищи вариант ответа, который наиболее ПРЯМО и КОНКРЕТНО подтверждает именно это утверждение — не общий пересказ, а конкретный факт, число или пример.',
              '3) Отклоняй варианты, которые: технически связаны с темой, но не подтверждают именно заявленный тезис; содержат факт из текста, но противоречат утверждению; звучат правдоподобно, но не встречаются в тексте вообще.',
            ],
          },
          {
            heading: '4. Иерархия силы доказательств — что "сильнее" в глазах SAT',
            body: [
              'Конкретные измеримые данные (числа, проценты, результаты эксперимента) почти всегда сильнее общих утверждений или мнений.',
              'Независимо воспроизведённый результат (два разных исследования пришли к похожему выводу) сильнее единичного наблюдения.',
              'Прямое сравнение "было/стало" или "группа A / группа B" сильнее, чем описание только одной группы без сравнения.',
              'Само переформулированное утверждение (claim) НИКОГДА не является доказательством для самого себя — это частая ловушка среди вариантов ответа.',
            ],
          },
          {
            heading: '5. Стратегия для quantitative evidence (графики и таблицы)',
            body: [
              'Обращай внимание на оси, единицы измерения (штуки, проценты, доллары, годы) и на то, идёт ли речь об абсолютных числах или относительных изменениях — это самая частая ловушка.',
              'Если утверждение в тексте говорит о ТЕНДЕНЦИИ ("increased over time", "was higher for group A than group B"), ищи данные, которые показывают именно эту тенденцию на всём диапазоне, а не единичное значение в одной точке.',
              'Если в вариантах ответа даны конкретные числа из графика — сверяй их точно, не приблизительно: на SAT легко перепутать соседние столбцы или годы.',
            ],
            tips: [
              'Если один из вариантов ответа явно противоречит графику (показывает противоположную тенденцию) — это стандартная ловушка для невнимательных, отбрасывай его сразу.',
            ],
          },
          {
            heading: '6. Задачи "заполни пропуск данными" (data-driven fill-in)',
            body: [
              'Иногда вопрос даёт текст с пропуском в конце и просит выбрать, какие данные из таблицы/графика ЛОГИЧНО завершают мысль автора. Здесь важно сначала понять, к какому ВЫВОДУ клонит текст ДО пропуска, а затем искать данные, которые именно этот вывод подтверждают.',
            ],
          },
          {
            heading: '7. Развёрнутый список типичных ошибок',
            body: [
              'Выбирать вариант, который относится к теме текста в целом, но не подтверждает именно заявленный узкий тезис.',
              'Путать причину и следствие: выбирать данные, которые показывают КОРРЕЛЯЦИЮ, но интерпретировать их как прямое доказательство ПРИЧИННО-СЛЕДСТВЕННОЙ связи, о которой говорится в тексте.',
              'Принимать формулировку самого утверждения (claim) за доказательство этого утверждения.',
            ],
          },
          {
            heading: '8. Мини-проверка перед практикой',
            body: [
              'Утверждение: "Sleep deprivation impairs decision-making." Какое из двух данных сильнее его подтверждает: (а) "People often feel tired after a bad night\'s sleep" или (б) "In a controlled study, sleep-deprived participants made 30% more risky financial decisions than well-rested participants"? (Ответ: (б) — конкретное измеримое сравнение в контролируемом эксперименте).',
            ],
          },
        ],
        examples: [
          {
            id: 'ce-ex-1',
            passage:
              'Researchers claim that urban green spaces significantly reduce stress levels among city residents. In a study of 400 participants, those who spent at least 20 minutes in a city park reported measurably lower cortisol levels than those who did not visit green spaces that day.',
            prompt: 'Which quotation from the text most directly supports the researchers\' claim?',
            choices: [
              '"Researchers claim that urban green spaces significantly reduce stress levels."',
              '"In a study of 400 participants..."',
              '"...those who spent at least 20 minutes in a city park reported measurably lower cortisol levels than those who did not."',
              'None of the choices provide adequate support.',
            ],
            correct: 2,
            explanation: 'Это единственный вариант с конкретными измеримыми данными (уровень кортизола), которые напрямую подтверждают заявление о снижении стресса. Вариант A — это само утверждение, а не доказательство для него.',
          },
          {
            id: 'ce-ex-2',
            passage:
              'A city planner argues that adding bike lanes increases the number of cyclists on a given road. Data collected on Main Street showed that before bike lanes were added, an average of 40 cyclists used the road daily; one year after bike lanes were installed, that number rose to 150.',
            prompt: 'Which finding, if true, would most directly support the planner\'s argument?',
            choices: [
              'Car traffic on Main Street decreased slightly after the bike lanes were installed.',
              'A similar street with new bike lanes saw daily cyclist counts rise from 35 to 120.',
              'Residents reported enjoying the new bike lanes in a satisfaction survey.',
              'The cost of installing the bike lanes was lower than expected.',
            ],
            correct: 1,
            explanation: 'Это прямой количественный пример того же эффекта (рост числа велосипедистов после появления полос) на другой улице — сильнее всего подтверждает причинно-следственную связь, о которой говорит планировщик.',
          },
          {
            id: 'ce-ex-3',
            passage:
              'A teacher claims that allowing students short breaks during long study sessions improves overall retention of material. Which finding, if true, would most directly support this claim?',
            prompt: 'Which finding, if true, would most directly support the teacher\'s claim?',
            choices: [
              'Students who took short breaks reported enjoying their study sessions more.',
              'Students who took short breaks scored 15% higher on a retention test one week later than those who studied without breaks.',
              'Most students prefer studying without interruption.',
              'The school extended the length of its study periods this year.',
            ],
            correct: 1,
            explanation: 'Только этот вариант напрямую измеряет удержание материала (retention) — именно то, что утверждает учитель, — и показывает конкретную разницу в результатах.',
          },
          {
            id: 'ce-ex-4',
            passage:
              'A scientist argues that a newly discovered fossil belongs to a previously unknown species of dinosaur, rather than being a variant of an already-known species. Which finding would most strengthen this argument?',
            prompt: 'Which finding would most strengthen the scientist\'s argument?',
            choices: [
              'The fossil was found in the same region as other known dinosaur fossils.',
              'The fossil has several skeletal features that do not match any previously documented species.',
              'The fossil is well-preserved and easy to study.',
              'Other scientists are excited about the discovery.',
            ],
            correct: 1,
            explanation: 'Утверждение о "новом виде" сильнее всего подтверждается конкретными отличиями от уже известных видов — именно это и предлагает второй вариант.',
          },
        ],
        quiz: [
          {
            id: 'ce-q-1',
            passage:
              'A city planner argues that adding bike lanes increases the number of cyclists on a given road. Data collected on Main Street showed that before bike lanes were added, an average of 40 cyclists used the road daily; one year after bike lanes were installed, that number rose to 150.',
            prompt: 'Which finding, if true, would most directly support the planner\'s argument?',
            choices: [
              'Car traffic on Main Street decreased slightly after the bike lanes were installed.',
              'A similar street with new bike lanes saw daily cyclist counts rise from 35 to 120.',
              'Residents reported enjoying the new bike lanes in a satisfaction survey.',
              'The cost of installing the bike lanes was lower than expected.',
            ],
            correct: 1,
            explanation: 'Это прямой количественный пример того же эффекта (рост числа велосипедистов после появления полос) на другой улице — сильнее всего подтверждает причинно-следственную связь.',
          },
          {
            id: 'ce-q-2',
            passage:
              'A nutrition researcher claims that eating breakfast improves concentration in schoolchildren. A graph shows average test scores of two groups of students: those who ate breakfast and those who skipped it. The graph shows scores measured at 9 AM, 11 AM, and 1 PM.',
            prompt: 'Which data from the graph would most strongly support the researcher\'s claim?',
            choices: [
              'Both groups scored identically at all three times of day.',
              'The breakfast group scored higher at 9 AM but the gap disappeared by 1 PM.',
              'The breakfast group scored consistently higher than the no-breakfast group at all three times.',
              'The no-breakfast group scored higher at 11 AM only.',
            ],
            correct: 2,
            explanation: 'Утверждение говорит об устойчивом улучшении концентрации — сильнее всего его подтверждают данные, где превосходство группы с завтраком сохраняется на протяжении всего дня, а не только в один момент.',
          },
          {
            id: 'ce-q-3',
            passage:
              'A company claims that its new packaging reduced food waste among customers. Before the redesign, customers reported throwing away an average of 15% of purchased produce. Two independent consumer surveys were conducted after the redesign: one found waste dropped to 9%, and another, using a different sample, found waste dropped to 8%.',
            prompt: 'Which piece of evidence most strengthens the company\'s claim?',
            choices: [
              'The fact that only one survey was conducted after the redesign.',
              'The fact that two independently conducted surveys, using different samples, both found a similar drop in waste.',
              'The fact that the original waste percentage was measured before the redesign.',
              'The fact that the company designed the new packaging.',
            ],
            correct: 1,
            explanation: 'Независимое подтверждение похожего результата разными выборками — гораздо более сильное доказательство, чем единичное измерение, так как снижает вероятность случайного совпадения.',
          },
          {
            id: 'ce-q-4',
            passage:
              'An economist claims that a new minimum wage law led to increased spending in the local economy. Which finding would most directly support this claim?',
            prompt: 'Which finding would most directly support the economist\'s claim?',
            choices: [
              'Local business owners expressed mixed opinions about the new law.',
              'Retail sales in the area rose by 8% in the six months after the law took effect, compared to the same period the previous year.',
              'The minimum wage law was passed by a narrow margin.',
              'Neighboring cities did not adopt similar laws.',
            ],
            correct: 1,
            explanation: 'Конкретное измеримое сравнение продаж до и после введения закона — самое прямое доказательство влияния закона на расходы в экономике.',
          },
          {
            id: 'ce-q-5',
            passage:
              'A doctor claims that a new medication reduces recovery time for a common illness. Which finding would most directly support this claim?',
            prompt: 'Which finding would most directly support the doctor\'s claim?',
            choices: [
              'Patients reported that the medication tasted better than older alternatives.',
              'In a clinical trial, patients taking the new medication recovered in an average of 4 days, compared to 7 days for those taking a placebo.',
              'The medication is cheaper to produce than older alternatives.',
              'The medication was approved by regulators last year.',
            ],
            correct: 1,
            explanation: 'Прямое измеримое сравнение времени выздоровления между группой с лекарством и группой плацебо — это именно то доказательство, которое подтверждает заявленный эффект.',
          },
          {
            id: 'ce-q-6',
            passage:
              'A teacher argues that using visual aids during lectures improves student comprehension. Which finding would most directly support this argument?',
            prompt: 'Which finding would most directly support the teacher\'s argument?',
            choices: [
              'Students said they found visual aids more interesting than plain lectures.',
              'On a comprehension test given immediately after class, students who saw visual aids during the lecture scored 20% higher than those who did not.',
              'The teacher has used visual aids for over ten years.',
              'Visual aids are commonly used in many other classrooms.',
            ],
            correct: 1,
            explanation: 'Конкретный измеримый результат теста на понимание материала — самое прямое доказательство эффекта визуальных материалов на усвоение, в отличие от субъективного мнения об интересности.',
          },
        ],
      },
      {
        id: 'inferences',
        domainId: 'info-ideas',
        title: 'Логические выводы',
        subtitle: 'Inferences',
        summary: 'Полный разбор: как делать вывод, который логически следует из текста, но не сказан напрямую, и как отличать разумный вывод от чрезмерного обобщения.',
        lesson: [
          {
            heading: '1. Что такое inference',
            body: [
              'Вывод (inference) — это утверждение, которое прямо не написано в тексте, но обязательно следует из того, что написано, если считать текст истинным.',
              'Формат вопроса: "Which choice most logically completes the text?" — часто в конце текста стоит пропуск, и нужно закончить мысль автора логически, основываясь только на информации из текста.',
            ],
          },
          {
            heading: '2. Отличие inference от простого пересказа',
            body: [
              'Неправильный вариант часто просто ПОВТОРЯЕТ уже сказанное в тексте другими словами — это не вывод, а пересказ, и такой вариант обычно не является правильным ответом на вопрос про inference (хотя иногда бывает исключение, если вопрос сформулирован мягко).',
              'Настоящий вывод добавляет НОВУЮ мысль, которая логически вытекает из фактов текста, но сама по себе в тексте не проговорена.',
            ],
          },
          {
            heading: '3. Стратегия',
            body: [
              '1) Не додумывай ничего "от себя" — используй ТОЛЬКО информацию из текста, даже если у тебя есть другие знания по теме.',
              '2) Правильный вывод должен быть неизбежным следствием текста — если можно легко представить ситуацию, где текст верен, а вывод — нет, это неверный вариант.',
              '3) Остерегайся вариантов со словами "always", "never", "all", "only", "proves" — слишком категоричные выводы редко подтверждаются коротким текстом из одного-двух наблюдений.',
              '4) Ищи вариант, который логически ЗАВЕРШАЕТ мысль, а не просто повторяет уже сказанное или уходит в сторону от темы.',
            ],
          },
          {
            heading: '4. Разбор структуры "наблюдение → вывод"',
            body: [
              'Многие тексты на inference построены по схеме: сначала приводится наблюдение или результат исследования, а в конце — пропуск, куда нужно вставить логичное объяснение ЭТОГО наблюдения.',
              'Полезная техника: перед тем как смотреть варианты ответа, попробуй сам сформулировать в 1 предложении, какой вывод напрашивается — а затем ищи вариант, ближе всего совпадающий по смыслу с твоей формулировкой.',
            ],
          },
          {
            heading: '5. "Разумная осторожность" формулировок — ключ к правильному ответу',
            body: [
              'Правильные ответы на SAT почти всегда используют осторожные, ограничивающие слова: "suggests", "may", "could", "is likely to", "appears to" — вместо категоричных "proves", "always", "definitely", "must".',
              'Это отражает саму природу вывода — вывод правдоподобен и логичен, но не является абсолютно доказанным фактом, если текст сам не претендует на это.',
            ],
          },
          {
            heading: '6. Тексты с двумя наблюдениями — вывод должен объяснять ОБА',
            body: [
              'Некоторые тексты содержат два связанных наблюдения (например, "X приводит к Y, но также к Z"), и корректный вывод должен логично согласовываться с ОБОИМИ наблюдениями, а не только с одним из них — частая ловушка отвечает только на часть текста.',
            ],
          },
          {
            heading: '7. Развёрнутый список типичных ошибок',
            body: [
              'Выбирать вариант, который лишь пересказывает текст, а не делает шаг дальше в виде логичного вывода.',
              'Выбирать чрезмерно категоричный вариант из-за слов "always"/"never"/"all", хотя данных текста недостаточно для такой уверенности.',
              'Игнорировать часть текста (например, второе из двух наблюдений) и делать вывод, который противоречит именно этой опущенной части.',
            ],
          },
          {
            heading: '8. Мини-проверка перед практикой',
            body: [
              'Текст: "Several major companies have shifted to a four-day work week on a trial basis. Early reports show productivity per hour increased, even though total hours worked decreased." Какой вывод напрашивается? (Ответ, близкий к правильному: сокращение рабочих часов не обязательно снижает продуктивность и может даже повышать эффективность на каждый отработанный час — без слова "always" или "proves".)',
            ],
          },
        ],
        examples: [
          {
            id: 'inf-ex-1',
            passage:
              'In many species of birds, males with brighter plumage tend to attract more mates. However, brighter plumage also makes these males more visible to predators. Biologists have observed that in areas with fewer predators, male birds of these species tend to have notably brighter coloring than males of the same species living in areas with more predators.',
            prompt: 'Which choice most logically completes the text?',
            choices: [
              'This suggests that predation risk may limit how bright male plumage can become in a given environment.',
              'This proves that female birds always prefer the brightest possible males.',
              'This shows that plumage color has no effect on predation risk.',
              'This demonstrates that all bird species evolve brighter colors over time.',
            ],
            correct: 0,
            explanation: 'Текст описывает компромисс между привлечением партнёра и риском стать жертвой хищника — логично заключить, что уровень хищничества ограничивает яркость окраски. Остальные варианты либо противоречат тексту, либо слишком категоричны (always, all).',
          },
          {
            id: 'inf-ex-2',
            passage:
              'A study tracked two groups of students: one group reviewed material right before sleeping, and another reviewed the same material in the middle of the day. A week later, the group that studied before sleep recalled significantly more information. Researchers noted that sleep appears to help consolidate newly learned information into long-term memory.',
            prompt: 'Which choice most logically completes the text?',
            choices: [
              'This finding suggests that studying right before sleep may improve long-term retention of information.',
              'This proves that daytime studying is always ineffective.',
              'This shows that sleep is not related to memory in any way.',
              'This means students should never study during the day.',
            ],
            correct: 0,
            explanation: 'Единственный вывод, который логично и без преувеличений следует из описанного результата исследования — остальные варианты либо противоречат данным, либо делают слишком категоричные заявления.',
          },
          {
            id: 'inf-ex-3',
            passage:
              'Several ant species maintain "fungus gardens," cultivating a specific type of fungus for food inside their nests. Researchers have found that when the ants are removed, the fungus is quickly overtaken by mold and dies within weeks, even though the fungus can survive far longer in a lab setting when protected from mold.',
            prompt: 'Which choice most logically completes the text?',
            choices: [
              'This suggests that the ants may play an active role in protecting the fungus from mold in the wild.',
              'This proves that the fungus cannot survive under any circumstances without ants.',
              'This shows that mold is beneficial to the fungus gardens.',
              'This demonstrates that ants and fungus have no real relationship.',
            ],
            correct: 0,
            explanation: 'Раз гриб быстро гибнет от плесени без муравьёв, но может выживать дольше в защищённых лабораторных условиях, логично предположить, что муравьи как-то защищают его от плесени в естественной среде — без излишней категоричности "cannot survive under any circumstances".',
          },
          {
            id: 'inf-ex-4',
            passage:
              'A city experimented with replacing several street lights with a dimmer, motion-activated model that brightens only when someone approaches. Energy use in the area dropped by 40%, and a subsequent survey found no significant increase in reported safety concerns among residents compared to before the change.',
            prompt: 'Which choice most logically completes the text?',
            choices: [
              'This suggests that motion-activated lighting may reduce energy use without necessarily compromising residents\' sense of safety.',
              'This proves that all street lighting should be replaced immediately.',
              'This shows that residents were unaware the lights had changed.',
              'This demonstrates that energy use has no connection to street lighting.',
            ],
            correct: 0,
            explanation: 'Два факта — снижение энергопотребления и отсутствие роста опасений о безопасности — вместе логично поддерживают осторожный вывод о том, что такое освещение может снижать расход энергии без ущерба ощущению безопасности.',
          },
        ],
        quiz: [
          {
            id: 'inf-q-1',
            passage:
              'A study tracked two groups of students: one group reviewed material right before sleeping, and another reviewed the same material in the middle of the day. A week later, the group that studied before sleep recalled significantly more information. Researchers noted that sleep appears to help consolidate newly learned information into long-term memory.',
            prompt: 'Which choice most logically completes the text?',
            choices: [
              'This finding suggests that studying right before sleep may improve long-term retention of information.',
              'This proves that daytime studying is always ineffective.',
              'This shows that sleep is not related to memory in any way.',
              'This means students should never study during the day.',
            ],
            correct: 0,
            explanation: 'Единственный вывод, который логично и без преувеличений следует из описанного результата исследования.',
          },
          {
            id: 'inf-q-2',
            passage:
              'Many desert plants have small, thick leaves covered in a waxy layer, which reduces the surface area through which water can evaporate. Botanists have found that desert plant species with the thickest waxy coatings tend to survive significantly longer during extended droughts than related species with thinner coatings.',
            prompt: 'Which choice most logically completes the text?',
            choices: [
              'This suggests that the waxy coating plays a meaningful role in helping plants conserve water during droughts.',
              'This proves that all desert plants have identical drought tolerance.',
              'This shows that leaf size has no relationship to water conservation.',
              'This means thick leaves are always harmful to desert plants.',
            ],
            correct: 0,
            explanation: 'Связь между толщиной воскового слоя и выживаемостью при засухе логично указывает на роль этого слоя в сохранении воды — без чрезмерных обобщений.',
          },
          {
            id: 'inf-q-3',
            passage:
              'Before refrigeration was widely available, many cultures developed methods of preserving food through fermentation, salting, or drying. Historians note that regions with hot climates and limited access to ice developed a particularly wide variety of fermented foods compared to colder regions.',
            prompt: 'Which choice most logically completes the text?',
            choices: [
              'This suggests that the need to preserve food without refrigeration may have driven the development of fermentation techniques in hot climates.',
              'This proves that fermentation was invented only in hot climates.',
              'This shows that cold climates never developed food preservation methods.',
              'This demonstrates that refrigeration was unnecessary in all regions.',
            ],
            correct: 0,
            explanation: 'Текст указывает на корреляцию между отсутствием холода и разнообразием ферментированных продуктов — логичный, но не чрезмерно категоричный вывод о причине этого явления.',
          },
          {
            id: 'inf-q-4',
            passage:
              'A software company found that engineers who worked on more than three projects simultaneously completed each project, on average, more slowly than engineers who focused on just one project at a time, even though the multi-project engineers logged more total working hours per week.',
            prompt: 'Which choice most logically completes the text?',
            choices: [
              'This suggests that working on fewer projects at once may allow engineers to complete each project more efficiently.',
              'This proves that engineers should never work on more than one project.',
              'This shows that total working hours have no effect on productivity.',
              'This demonstrates that all engineers work at the same pace.',
            ],
            correct: 0,
            explanation: 'Инженеры с одним проектом завершали работу быстрее несмотря на меньшее число часов — логичный, но осторожный вывод: сосредоточенность на меньшем числе задач может повышать эффективность.',
          },
          {
            id: 'inf-q-5',
            passage:
              'Researchers studying a species of frog noticed that individuals living near busy roads called at a higher pitch than frogs of the same species living in quiet forest areas, even though pitch is largely genetically determined in this species and does not typically vary this much between nearby populations.',
            prompt: 'Which choice most logically completes the text?',
            choices: [
              'This suggests that traffic noise may be influencing the frogs\' calling behavior in ways not previously expected.',
              'This proves that road noise always changes the genetics of nearby animals.',
              'This shows that these frogs cannot be found near any roads.',
              'This demonstrates that pitch has no biological basis in this species.',
            ],
            correct: 0,
            explanation: 'Необычное отклонение (более высокий тон рядом с дорогами, хотя тон обычно генетически фиксирован) логично связать именно с шумом трафика — осторожно, без утверждения об изменении генетики.',
          },
          {
            id: 'inf-q-6',
            passage:
              'A retailer noticed that stores which rearranged their layout to place essential items like milk and bread at the back of the store saw customers spend, on average, more time browsing other aisles and purchasing more items overall than stores with these items near the entrance.',
            prompt: 'Which choice most logically completes the text?',
            choices: [
              'This suggests that store layout may influence how much customers browse and ultimately purchase.',
              'This proves that customers always want to buy more items than they plan to.',
              'This shows that milk and bread are the most popular items in every store.',
              'This demonstrates that store layout has no effect on sales.',
            ],
            correct: 0,
            explanation: 'Связь между расположением товаров и увеличением просмотра/покупок логично указывает на влияние планировки магазина — без чрезмерного обобщения о намерениях всех покупателей.',
          },
        ],
      },
    ],
  },
  {
    id: 'craft-structure',
    subject: 'reading',
    title: 'Мастерство и структура текста',
    englishTitle: 'Craft and Structure',
    description: 'Слова в контексте, структура и цель текста, связи между двумя текстами. Около 28% вопросов.',
    color: 'indigo',
    icon: '🧩',
    topics: [
      {
        id: 'words-in-context',
        domainId: 'craft-structure',
        title: 'Слова в контексте',
        subtitle: 'Words in Context',
        summary: 'Полный разбор: как определить значение многозначного слова, подобрать наиболее точное слово в пропуск и не попасться на ловушки со схожими по смыслу вариантами.',
        lesson: [
          {
            heading: '1. Зачем эта тема важна на SAT',
            body: [
              'Words in Context — одна из самых предсказуемых по формату категорий: почти всегда один и тот же тип задания (заполнить пропуск) с очень похожей логикой решения. Освоив стратегию один раз, ты сможешь применять её ко всем вопросам этого типа.',
            ],
          },
          {
            heading: '2. Два вида заданий',
            body: [
              '1) Дано слово в тексте — нужно определить, в каком значении оно здесь используется (у многозначных слов, например "novel", есть разные значения: "novel" как "роман" и "novel" как "новый, необычный").',
              '2) Дан текст с пропуском — нужно вставить слово, которое лучше всего подходит по смыслу и тону (vocabulary-in-context). Это самый частый формат Words in Context на цифровом SAT.',
            ],
          },
          {
            heading: '3. Стратегия "закрой и придумай своё слово"',
            body: [
              '1) Закрой варианты ответа и попробуй сам придумать слово или короткую фразу, которая подошла бы в пропуск, опираясь только на смысл предложения — часто получается что-то простое вроде "хороший" или "неожиданный".',
              '2) Найди среди вариантов синоним к своему слову — это, скорее всего, правильный ответ. Если несколько вариантов кажутся близкими по значению к обычной жизни, выбирай тот, что точнее по СТЕПЕНИ и ТОНУ (например, "surprising" и "shocking" — близкие слова, но "shocking" гораздо сильнее).',
            ],
          },
          {
            heading: '4. Слова-сигналы, которые меняют направление мысли',
            body: [
              'Слова-сигналы контраста (however, although, yet, despite, but, while) говорят, что слово в пропуске должно быть ПРОТИВОПОЛОЖНО по смыслу тому, что окружает его в предложении.',
              'Слова-сигналы продолжения мысли (moreover, similarly, therefore, likewise, in addition) говорят, что слово в пропуске должно СОВПАДАТЬ по направлению смысла с окружающим текстом.',
              'Пример: "Despite the committee\'s skepticism, the plan proved ______" — раз "despite" (несмотря на скептицизм), то результат должен быть положительным, противоположным скептицизму.',
            ],
            tips: [
              'Если не уверен в точном значении слова из вариантов ответа, попробуй метод исключения: убери варианты с явно неподходящим ТОНОМ (слишком негативные, когда контекст позитивный, и наоборот) — это сразу сужает выбор.',
            ],
          },
          {
            heading: '5. Степень (intensity) — тонкая, но важная деталь',
            body: [
              'Среди вариантов ответа часто есть два слова с одинаковым НАПРАВЛЕНИЕМ смысла (оба позитивные или оба негативные), но разной СИЛОЙ: например, "annoyed" (раздражён) и "furious" (в ярости) — оба негативные, но с разной интенсивностью.',
              'Внимательно смотри на усилительные слова в самом тексте ("extremely", "utterly", "barely") — они подсказывают, нужна ли мягкая или сильная степень выражения.',
            ],
          },
          {
            heading: '6. Многозначные слова — вопросы на конкретное значение в контексте',
            body: [
              'Если вопрос звучит "As used in the text, the word X most nearly means..." — не думай о САМОМ ЧАСТОМ значении этого слова в языке в целом, думай только о том, как оно используется ИМЕННО В ЭТОМ предложении.',
              'Пример: слово "sound" может означать "звук", "здоровый/крепкий" (a sound argument) или "измерять глубину" (to sound the depths) — правильное значение определяется исключительно контекстом данного предложения.',
            ],
          },
          {
            heading: '7. Развёрнутый список типичных ошибок',
            body: [
              'Выбирать слово, которое просто знакомо и часто встречается, а не то, что точно подходит по смыслу — SAT специально включает "ловушечные" варианты, похожие по смыслу, но не идеально точные.',
              'Игнорировать слова-сигналы контраста и вставлять слово того же тона, что окружающий текст, хотя нужно противоположное.',
              'Путать направление (позитив/негатив) со степенью (слабо/сильно) — выбирать слово нужного направления, но неправильной силы выражения.',
            ],
          },
          {
            heading: '8. Мини-проверка перед практикой',
            body: [
              'Предложение: "Even her harshest critics admitted the performance was ______." Слово-сигнал "even" (даже) намекает на неожиданность — какое слово по тону сюда подойдёт: позитивное или негативное? (Ответ: позитивное — даже самые строгие критики признали нечто хорошее.)',
            ],
          },
        ],
        examples: [
          {
            id: 'wic-ex-1',
            passage:
              'Despite the committee\'s initial skepticism, the young engineer\'s proposal proved remarkably ______: it solved the problem using far fewer resources than any previous plan.',
            prompt: 'Which choice completes the text with the most logical and precise word?',
            choices: ['expensive', 'efficient', 'controversial', 'traditional'],
            correct: 1,
            explanation: 'Фраза "far fewer resources" прямо указывает на "эффективность" (efficient). "Despite... skepticism" сигнализирует, что решение оказалось хорошим, несмотря на сомнения.',
          },
          {
            id: 'wic-ex-2',
            passage:
              'The critic\'s review was surprisingly ______ given her reputation for harshness; she praised nearly every aspect of the film.',
            prompt: 'Which choice completes the text with the most logical and precise word?',
            choices: ['scathing', 'favorable', 'ambiguous', 'lengthy'],
            correct: 1,
            explanation: 'Слово "surprisingly" в сочетании с "reputation for harshness" и "praised nearly every aspect" указывает на неожиданно положительный (favorable) отзыв.',
          },
          {
            id: 'wic-ex-3',
            passage:
              'Although the novelist\'s early works were largely ignored by critics, her later novels received ______ praise, with several reviewers calling them masterpieces.',
            prompt: 'Which choice completes the text with the most logical and precise word?',
            choices: ['lukewarm', 'effusive', 'reluctant', 'occasional'],
            correct: 1,
            explanation: '"Calling them masterpieces" указывает на очень сильную похвалу — "effusive" (безудержную, восторженную) — гораздо точнее, чем "lukewarm" (сдержанную) или "occasional" (иногда встречающуюся).',
          },
          {
            id: 'wic-ex-4',
            passage:
              'As used in the text, the word "sound" most nearly means: "Before investing, the analyst wanted to make sure the company\'s financial plan was sound."',
            prompt: 'Which choice completes the sentence with the closest meaning to "sound" as used here?',
            choices: ['Loud', 'Well-founded', 'Musical', 'Measured by depth'],
            correct: 1,
            explanation: 'В контексте "financial plan" слово "sound" означает "обоснованный, надёжный" (well-founded), а не громкий, музыкальный или связанный с измерением глубины.',
          },
          {
            id: 'wic-ex-5',
            passage:
              'Even her harshest critics admitted that the young pianist\'s debut performance was ______.',
            prompt: 'Which choice completes the text with the most logical and precise word?',
            choices: ['mediocre', 'exceptional', 'forgettable', 'disappointing'],
            correct: 1,
            explanation: '"Even her harshest critics admitted" сигнализирует, что признание было неожиданным, а значит — положительным: "exceptional" (выдающийся) — единственный подходящий по тону вариант.',
          },
        ],
        quiz: [
          {
            id: 'wic-q-1',
            passage:
              'The critic\'s review was surprisingly ______ given her reputation for harshness; she praised nearly every aspect of the film.',
            prompt: 'Which choice completes the text with the most logical and precise word?',
            choices: ['scathing', 'favorable', 'ambiguous', 'lengthy'],
            correct: 1,
            explanation: 'Слово "surprisingly" в сочетании с "reputation for harshness" и "praised nearly every aspect" указывает на неожиданно положительный (favorable) отзыв.',
          },
          {
            id: 'wic-q-2',
            passage:
              'While earlier bridges in the region had been simple and purely functional, the new design was praised for being remarkably ______, combining structural strength with striking visual appeal.',
            prompt: 'Which choice completes the text with the most logical and precise word?',
            choices: ['elegant', 'flimsy', 'outdated', 'inexpensive'],
            correct: 0,
            explanation: '"Combining structural strength with striking visual appeal" описывает нечто изящное и эстетичное — "elegant" точно подходит по смыслу, в отличие от "flimsy" (хлипкий) или "outdated" (устаревший).',
          },
          {
            id: 'wic-q-3',
            passage:
              'The professor\'s lectures were known for being ______ ; students often left with more questions than they had at the start, unsure of what exactly they had just learned.',
            prompt: 'Which choice completes the text with the most logical and precise word?',
            choices: ['illuminating', 'confusing', 'concise', 'popular'],
            correct: 1,
            explanation: '"Left with more questions than they had... unsure of what they had just learned" явно описывает запутанность — "confusing" единственный логичный вариант.',
          },
          {
            id: 'wic-q-4',
            passage:
              'Unlike her colleagues, who dismissed the unusual fossil as insignificant, Dr. Kwan was immediately ______ by it, spending months analyzing every detail.',
            prompt: 'Which choice completes the text with the most logical and precise word?',
            choices: ['unimpressed', 'intrigued', 'annoyed', 'indifferent'],
            correct: 1,
            explanation: '"Unlike her colleagues, who dismissed it" сигнализирует контраст: доктор Кван, наоборот, заинтересовалась находкой — "intrigued" точно передаёт это.',
          },
          {
            id: 'wic-q-5',
            passage:
              'The negotiations, which had dragged on for months without progress, were finally ______ when both sides agreed to a compromise on the final day.',
            prompt: 'Which choice completes the text with the most logical and precise word?',
            choices: ['abandoned', 'resolved', 'prolonged', 'ignored'],
            correct: 1,
            explanation: '"Both sides agreed to a compromise" означает, что переговоры завершились успешно — "resolved" (разрешены) точно передаёт это, в отличие от "abandoned" (заброшены) или "prolonged" (продлены).',
          },
          {
            id: 'wic-q-6',
            passage:
              'As used in the text, the word "grave" most nearly means: "The committee members exchanged grave looks after hearing the troubling financial report."',
            prompt: 'Which choice is closest in meaning to "grave" as used in this sentence?',
            choices: ['Amusing', 'Serious', 'Loud', 'Confused'],
            correct: 1,
            explanation: 'В контексте "troubling financial report" слово "grave" означает "серьёзный, мрачный" (serious), а не связано с могилой или другими значениями этого слова.',
          },
        ],
      },
      {
        id: 'text-structure',
        domainId: 'craft-structure',
        title: 'Структура и цель текста',
        subtitle: 'Text Structure and Purpose',
        summary: 'Полный разбор: зачем автор построил текст именно так, какую роль играет конкретное предложение или абзац, и как отличить структуру от цели.',
        lesson: [
          {
            heading: '1. Три родственных, но разных типа вопросов',
            body: [
              'Эта тема объединяет три похожих, но не идентичных типа вопросов: про структуру ВСЕГО текста, про функцию ОДНОГО предложения, и про ЦЕЛЬ автора в целом. Важно с самого начала понимать, какой именно из трёх типов перед тобой, чтобы искать правильный уровень ответа.',
            ],
          },
          {
            heading: '2. Вопросы о структуре целого текста',
            body: [
              '"Which choice best describes the overall structure of the text?" — нужно понять логику построения текста в целом: сравнение и противопоставление двух вещей, хронологическое повествование, схема "проблема → решение", или "общее утверждение → конкретный подтверждающий пример".',
              'Полезно мысленно разметить текст по частям: где заканчивается фон/введение и начинается основная мысль, где приводится пример, где — вывод.',
            ],
          },
          {
            heading: '3. Основные типы структур, которые стоит уметь узнавать',
            body: [
              '• Claim → Evidence (утверждение → пример): общее заявление, затем конкретное подтверждение.',
              '• Problem → Solution (проблема → решение): описание сложности, затем предложенный способ её преодоления.',
              '• Compare/Contrast (сравнение/противопоставление): описание двух вещей/точек зрения через их сходства или различия.',
              '• Chronological (хронология): события излагаются в порядке времени, часто с сигнальными словами (first, then, eventually, by the 1990s).',
              '• Misconception → Correction (заблуждение → опровержение): сначала называется распространённое, но неверное мнение, затем оно опровергается фактами.',
            ],
          },
          {
            heading: '4. Вопросы о функции конкретного предложения',
            body: [
              '"Which choice best describes the function of the underlined sentence in the text as a whole?" — нужно понять РОЛЬ конкретного предложения в логике всего текста: приводит пример, опровергает распространённое мнение, вводит контраст, уточняет предыдущее утверждение, делает вывод.',
              'Отвечай не на вопрос "о чём это предложение?" (пересказ содержания), а на вопрос "зачем автор поставил именно это предложение именно здесь?" (функция в структуре аргументации).',
            ],
          },
          {
            heading: '5. Вопросы о цели всего текста (purpose questions)',
            body: [
              '"Which choice best states the main purpose of the text?" — похоже на вопрос о главной мысли, но фокус именно на НАМЕРЕНИИ автора: убедить, объяснить, сравнить, поставить под сомнение, представить новые данные.',
              'Отличай "purpose" (зачем текст написан — глагол действия: "to argue that...", "to explain how...", "to compare...") от "main idea" (что именно текст утверждает).',
              'Правильный ответ на вопрос о цели почти всегда начинается с глагола действия в неопределённой форме: "to describe...", "to challenge...", "to illustrate...".',
            ],
          },
          {
            heading: '6. Развёрнутый список типичных ошибок',
            body: [
              'Отвечать на вопрос о функции предложения его пересказом содержания вместо описания его роли в логике текста.',
              'Путать purpose (глагол действия) с main idea (содержательное утверждение) — выбирать ответ неправильного "формата" под конкретный тип вопроса.',
              'Выбирать структуру, которая описывает только ЧАСТЬ текста (например, только начало), а не весь текст целиком.',
            ],
          },
          {
            heading: '7. Мини-проверка перед практикой',
            body: [
              'Текст: "Many believed that ancient sailors never ventured far from coastlines. However, recent archaeological finds suggest some cultures made long ocean voyages using sophisticated navigation techniques." Какая здесь структура? (Ответ: misconception → correction, "заблуждение → опровержение", сигнал слова "however").',
            ],
          },
        ],
        examples: [
          {
            id: 'ts-ex-1',
            passage:
              'Many assume that the fastest runner always wins a race. Yet in the 1968 Olympic marathon, the eventual winner was not the frontrunner for most of the race; he paced himself carefully, conserving energy while others faded, and overtook the leaders only in the final kilometers.',
            prompt: 'What is the main function of the second sentence in the text?',
            choices: [
              'It provides a specific historical example that challenges the common assumption stated in the first sentence.',
              'It restates the claim made in the first sentence using different words.',
              'It introduces a completely unrelated topic about the Olympics.',
              'It offers a statistical analysis of marathon race times.',
            ],
            correct: 0,
            explanation: 'Второе предложение приводит конкретный пример (Олимпиада 1968), который опровергает распространённое мнение из первого предложения — это классическая структура "общее утверждение → опровергающий пример".',
          },
          {
            id: 'ts-ex-2',
            passage:
              'Solar panel efficiency has increased dramatically over the past two decades. In the early 2000s, most commercial panels converted only about 12% of sunlight into usable electricity. Today, some panels achieve conversion rates above 22%, nearly double the earlier figure.',
            prompt: 'Which choice best describes the overall structure of the text?',
            choices: [
              'It presents a general claim and then supports it with specific comparative data.',
              'It presents two opposing viewpoints without resolving them.',
              'It describes a problem without offering any explanation.',
              'It tells a chronological story with no factual support.',
            ],
            correct: 0,
            explanation: 'Текст начинается с общего утверждения о росте эффективности, а затем подтверждает его конкретными сравнительными цифрами (12% → 22%).',
          },
          {
            id: 'ts-ex-3',
            passage:
              'Urban traffic congestion costs cities billions of dollars annually in lost productivity. Some cities have begun addressing this by implementing congestion pricing, charging drivers a fee to enter busy downtown areas during peak hours. Early results from cities that adopted this approach show significant reductions in traffic volume.',
            prompt: 'Which choice best describes the overall structure of the text?',
            choices: [
              'It describes a problem, presents a proposed solution, and notes early results.',
              'It compares two unrelated urban policies without evaluating either.',
              'It tells a chronological history of city planning.',
              'It argues that congestion pricing has failed in every city that tried it.',
            ],
            correct: 0,
            explanation: 'Текст следует структуре "проблема → решение → результат": сначала проблема (заторы), затем предложенное решение (congestion pricing), затем итог (снижение трафика).',
          },
          {
            id: 'ts-ex-4',
            passage:
              'What is the main purpose of the following text? "This essay examines two competing theories about why the Roman Empire declined, weighing the evidence offered by proponents of each before concluding that a combination of factors, rather than any single cause, best explains the fall."',
            prompt: 'Which choice best states the main purpose of the text?',
            choices: [
              'To argue that only one theory about Rome\'s decline is correct',
              'To compare two theories and propose that multiple factors together offer the best explanation',
              'To provide a detailed timeline of every event leading to Rome\'s fall',
              'To dismiss all existing theories about Rome\'s decline as incorrect',
            ],
            correct: 1,
            explanation: 'Текст явно "examines two competing theories... weighing the evidence... concluding that a combination of factors" — цель в том, чтобы сравнить теории и предложить комбинированное объяснение, а не отстаивать одну единственную причину.',
          },
        ],
        quiz: [
          {
            id: 'ts-q-1',
            passage:
              'Solar panel efficiency has increased dramatically over the past two decades. In the early 2000s, most commercial panels converted only about 12% of sunlight into usable electricity. Today, some panels achieve conversion rates above 22%, nearly double the earlier figure.',
            prompt: 'Which choice best describes the overall structure of the text?',
            choices: [
              'It presents a general claim and then supports it with specific comparative data.',
              'It presents two opposing viewpoints without resolving them.',
              'It describes a problem without offering any explanation.',
              'It tells a chronological story with no factual support.',
            ],
            correct: 0,
            explanation: 'Текст начинается с общего утверждения о росте эффективности, а затем подтверждает его конкретными цифрами (12% → 22%).',
          },
          {
            id: 'ts-q-2',
            passage:
              'It is often said that expert chess players think many moves ahead, calculating every possible sequence. In reality, research shows that experts rely heavily on pattern recognition, quickly identifying familiar configurations from thousands of games they have studied, rather than exhaustively calculating each possibility.',
            prompt: 'What is the main function of the second sentence in the text?',
            choices: [
              'It provides additional evidence for the claim made in the first sentence.',
              'It corrects a common misconception introduced in the first sentence.',
              'It summarizes the entire text in different words.',
              'It shifts the topic away from chess entirely.',
            ],
            correct: 1,
            explanation: 'Фраза "in reality" сигнализирует, что второе предложение опровергает распространённое мнение ("it is often said"), представленное в первом предложении.',
          },
          {
            id: 'ts-q-3',
            passage:
              'A city council debated whether to fund a new public transit line. Supporters argued it would reduce traffic congestion and lower emissions. Opponents countered that the projected cost was too high given uncertain ridership numbers. The council ultimately postponed the vote pending further study.',
            prompt: 'Which choice best describes the overall structure of the text?',
            choices: [
              'It presents both sides of a debate and describes the resulting decision.',
              'It argues exclusively in favor of the transit line.',
              'It provides a step-by-step technical explanation of transit systems.',
              'It focuses solely on the financial history of the city.',
            ],
            correct: 0,
            explanation: 'Текст последовательно излагает аргументы сторонников, затем противников, и завершается описанием итогового решения совета — это структура "обе стороны дебатов плюс итог".',
          },
          {
            id: 'ts-q-4',
            passage:
              'Bees were long believed to navigate using only visual landmarks. In reality, studies have shown that bees also rely heavily on the position of the sun and even patterns of polarized light invisible to humans, using a far more sophisticated navigational system than was once assumed.',
            prompt: 'Which choice best describes the overall structure of the text?',
            choices: [
              'It introduces a widely held belief and then corrects it with more accurate information.',
              'It describes a chronological sequence of scientific discoveries.',
              'It argues that bees cannot navigate at all.',
              'It compares bee navigation to human navigation without evaluating either.',
            ],
            correct: 0,
            explanation: 'Структура "misconception → correction": сначала называется прежнее мнение ("long believed"), затем оно опровергается более точными данными ("in reality").',
          },
          {
            id: 'ts-q-5',
            passage:
              'What is the main purpose of the following text? "This report first outlines the rising costs associated with plastic waste management, then details three policy interventions adopted by different countries, and finally evaluates which approach has proven most cost-effective."',
            prompt: 'Which choice best states the main purpose of the text?',
            choices: [
              'To argue that plastic waste management is not a serious problem',
              'To describe a problem, outline several solutions, and evaluate their effectiveness',
              'To provide a complete history of plastic manufacturing',
              'To recommend banning plastic entirely without discussing alternatives',
            ],
            correct: 1,
            explanation: 'Текст описывает проблему (рост затрат), несколько решений (три политики), и оценку их эффективности — цель именно в этом трёхчастном разборе.',
          },
          {
            id: 'ts-q-6',
            passage:
              'Glaciers are often imagined as unchanging, permanent features of mountain landscapes. Yet measurements taken over the past century show that many glaciers worldwide have retreated significantly, with some losing more than half their original mass.',
            prompt: 'What is the main function of the second sentence in the text?',
            choices: [
              'It provides supporting evidence for the assumption in the first sentence.',
              'It presents data that challenges the assumption stated in the first sentence.',
              'It introduces an unrelated topic about mountain landscapes.',
              'It restates the first sentence without adding new information.',
            ],
            correct: 1,
            explanation: 'Слово "yet" сигнализирует контраст: второе предложение опровергает представление о ледниках как о неизменных объектах, приводя конкретные данные об их отступлении.',
          },
        ],
      },
      {
        id: 'cross-text',
        domainId: 'craft-structure',
        title: 'Связи между двумя текстами',
        subtitle: 'Cross-Text Connections',
        summary: 'Полный разбор: как сравнивать точки зрения двух авторов на одну тему, находить согласие и разногласие, и не путать разные подтипы вопросов.',
        lesson: [
          {
            heading: '1. Формат задания',
            body: [
              'Даются два коротких текста (Text 1 и Text 2) на одну тему, часто с разными или противоположными точками зрения. Вопрос обычно звучит так: "Based on the texts, how would the author of Text 2 most likely respond to the underlined claim in Text 1?" или "On which point would the authors of both texts most likely agree?"',
            ],
          },
          {
            heading: '2. Стратегия',
            body: [
              '1) Определи главную позицию (claim) каждого автора ОТДЕЛЬНО — читай и анализируй Text 1 и Text 2 по очереди, не смешивай их в голове.',
              '2) Найди точку конфликта или согласия между текстами — именно на ней почти всегда строится вопрос.',
              '3) Правильный ответ должен быть логичен с точки зрения ВТОРОГО (или указанного в вопросе) автора и должен опираться на то, что написано именно в его тексте, а не на общие рассуждения о теме.',
            ],
          },
          {
            heading: '3. Два подтипа вопросов',
            body: [
              '"How would author of Text 2 respond to Text 1" — ищи в Text 2 факт или мнение, которое прямо поддерживает, опровергает или уточняет тезис из Text 1.',
              '"On what point would both authors agree/disagree" — ищи общую тему, по которой у обоих текстов есть высказывание, и сравнивай их позиции именно по этой теме, а не по теме в целом.',
            ],
          },
          {
            heading: '4. Частичное согласие — самая тонкая ловушка темы',
            body: [
              'Два автора редко полностью согласны или полностью не согласны по ВСЕМ аспектам темы. Чаще всего они соглашаются в одном (например, в самом факте существования проблемы), но расходятся в другом (например, в причине или в решении).',
              'Внимательно читай формулировку вопроса: "on which point would both AGREE" требует найти именно точку согласия, даже если в остальном авторы спорят — не путай общую тему текстов с конкретным пунктом, по которому спрашивают.',
            ],
          },
          {
            heading: '5. Как не "смешать" два текста в голове',
            body: [
              'Полезная техника: после прочтения каждого текста сформулируй его тезис в одном коротком предложении ("Text 1 says that...", "Text 2 says that..."). Так намного проще сравнивать их позиции, не возвращаясь к перечитыванию всего текста заново.',
            ],
          },
          {
            heading: '6. Развёрнутый список типичных ошибок',
            body: [
              'Отвечать с точки зрения текста, который не упомянут в вопросе (перепутать, чья реакция запрашивается — Text 1 на Text 2 или наоборот).',
              'Выбирать вариант, который технически связан с темой обоих текстов, но не отражает конкретную позицию нужного автора по конкретному пункту.',
              'Предполагать полное согласие или полное несогласие там, где на самом деле есть лишь частичное совпадение позиций.',
            ],
          },
          {
            heading: '7. Мини-проверка перед практикой',
            body: [
              'Text 1: учёный утверждает, что вид X вымер из-за изменения климата. Text 2: другой учёный утверждает, что вид X вымер из-за конкуренции с другим видом, но признаёт, что климат мог "усугубить" ситуацию. По какому пункту авторы, скорее всего, согласны? (Ответ: климатические изменения сыграли хоть какую-то роль, даже если главная причина, по их мнению, разная.)',
            ],
          },
        ],
        examples: [
          {
            id: 'ct-ex-1',
            passage:
              'Text 1: Some economists argue that remote work reduces overall productivity because spontaneous in-person collaboration is lost.\n\nText 2: A recent analysis of over 10,000 employees found that those working remotely completed 13% more tasks per week than their in-office counterparts, largely due to fewer interruptions and no commute time.',
            prompt: 'Based on the texts, how would the author of Text 2 most likely respond to the claim in Text 1?',
            choices: [
              'By agreeing entirely, since both texts show remote work reduces output.',
              'By presenting data suggesting that remote work can actually increase productivity, contradicting the concern in Text 1.',
              'By ignoring the topic of productivity altogether.',
              'By arguing that in-person collaboration is irrelevant to productivity.',
            ],
            correct: 1,
            explanation: 'Text 2 приводит конкретные данные о росте продуктивности на удалёнке, что прямо противоречит опасению из Text 1.',
          },
          {
            id: 'ct-ex-2',
            passage:
              'Text 1: Nutritionist Dr. Alvarez claims that eating breakfast is essential for maintaining a healthy metabolism throughout the day.\n\nText 2: A controlled study of 300 adults found no significant difference in metabolic rate between those who ate breakfast daily and those who skipped it, suggesting that breakfast\'s effect on metabolism may be overstated.',
            prompt: 'How would the author of Text 2 most likely respond to Dr. Alvarez\'s claim in Text 1?',
            choices: [
              'By fully agreeing, citing the same conclusion.',
              'By expressing skepticism, since their study found no significant metabolic difference.',
              'By stating that metabolism cannot be studied scientifically.',
              'By arguing that breakfast is harmful to health.',
            ],
            correct: 1,
            explanation: 'Text 2 напрямую противоречит утверждению Dr. Alvarez, показывая отсутствие значимой разницы — значит, автор Text 2 отнёсся бы к заявлению скептически.',
          },
          {
            id: 'ct-ex-3',
            passage:
              'Text 1: Paleontologist Dr. Nkomo argues that a newly discovered species of ancient reptile was likely a fast, agile predator, citing its long, slender leg bones.\n\nText 2: A biomechanical analysis of the same fossil found that its leg bones, while long, show stress patterns more consistent with a slow-moving animal that rarely ran, suggesting the reptile may have relied on ambush rather than speed to catch prey.',
            prompt: 'On which point would the authors of both texts most likely agree?',
            choices: [
              'The reptile was a predator.',
              'The reptile was incapable of catching any prey.',
              'The reptile\'s leg bones show no unusual features.',
              'The reptile primarily ate plants.',
            ],
            correct: 0,
            explanation: 'Оба текста согласны, что животное было хищником — они расходятся только в том, КАК именно оно охотилось (скоростью или из засады), а не в самом факте хищничества.',
          },
          {
            id: 'ct-ex-4',
            passage:
              'Text 1: Economist Dr. Park argues that raising interest rates is the most effective way to control inflation, pointing to historical cases where rate hikes preceded declines in inflation.\n\nText 2: A separate analysis of the same historical periods found that inflation had already begun declining, due to falling energy prices, before the interest rate hikes took effect, suggesting the rate hikes may have received credit for a trend already underway.',
            prompt: 'Based on the texts, how would the author of Text 2 most likely respond to Dr. Park\'s claim in Text 1?',
            choices: [
              'By fully agreeing that rate hikes were the primary cause of falling inflation.',
              'By questioning whether the rate hikes actually caused the decline, given the timing of falling energy prices.',
              'By arguing that interest rates have no effect on the economy at all.',
              'By stating that inflation never declined during these periods.',
            ],
            correct: 1,
            explanation: 'Text 2 приводит данные о том, что снижение инфляции уже началось ДО повышения ставок — это ставит под сомнение причинно-следственную связь, на которую опирается Dr. Park.',
          },
        ],
        quiz: [
          {
            id: 'ct-q-1',
            passage:
              'Text 1: Nutritionist Dr. Alvarez claims that eating breakfast is essential for maintaining a healthy metabolism throughout the day.\n\nText 2: A controlled study of 300 adults found no significant difference in metabolic rate between those who ate breakfast daily and those who skipped it, suggesting that breakfast\'s effect on metabolism may be overstated.',
            prompt: 'How would the author of Text 2 most likely respond to Dr. Alvarez\'s claim in Text 1?',
            choices: [
              'By fully agreeing, citing the same conclusion.',
              'By expressing skepticism, since their study found no significant metabolic difference.',
              'By stating that metabolism cannot be studied scientifically.',
              'By arguing that breakfast is harmful to health.',
            ],
            correct: 1,
            explanation: 'Text 2 напрямую противоречит утверждению Dr. Alvarez, показывая отсутствие значимой разницы — значит, автор Text 2 отнёсся бы к заявлению скептически.',
          },
          {
            id: 'ct-q-2',
            passage:
              'Text 1: Historian Dr. Reyes argues that the decline of a certain ancient city was caused primarily by prolonged drought, citing tree-ring data showing decades of reduced rainfall.\n\nText 2: Archaeologist Dr. Osei contends that the city\'s decline was driven mainly by trade route shifts, noting that pottery from distant regions stopped appearing in the city\'s later layers well before the drought began.',
            prompt: 'On which point would the authors of both texts most likely agree?',
            choices: [
              'The ancient city eventually declined.',
              'Drought was the sole cause of the decline.',
              'Trade routes had no impact on the city.',
              'The decline happened suddenly, within a single year.',
            ],
            correct: 0,
            explanation: 'Оба автора согласны с самим фактом упадка города — они расходятся только в объяснении ПРИЧИНЫ, а не в самом факте, что упадок произошёл.',
          },
          {
            id: 'ct-q-3',
            passage:
              'Text 1: Some educators argue that standardized tests are the fairest way to compare student achievement across different schools, since every student answers the same questions under the same conditions.\n\nText 2: A study of 50 school districts found that standardized test scores correlated more strongly with family income than with any measure of classroom instruction quality, raising questions about what the tests actually measure.',
            prompt: 'Based on the texts, how would the author of Text 2 most likely respond to the claim in Text 1?',
            choices: [
              'By agreeing that identical questions guarantee a fair comparison.',
              'By questioning whether the tests truly measure achievement fairly, given their strong link to family income.',
              'By stating that classroom instruction has no effect on learning.',
              'By arguing that all school districts perform identically on standardized tests.',
            ],
            correct: 1,
            explanation: 'Text 2 приводит данные, ставящие под сомнение справедливость тестов (сильная связь с доходом семьи, а не с качеством обучения) — это прямое возражение тезису из Text 1.',
          },
          {
            id: 'ct-q-4',
            passage:
              'Text 1: Marine biologist Dr. Vance argues that a decline in a certain fish population is primarily due to overfishing, citing catch records showing steep drops in fish caught per trip.\n\nText 2: A separate study of ocean temperature data found that the fish\'s preferred spawning grounds have warmed significantly over the same period, and the species is known to be highly sensitive to temperature changes during spawning.',
            prompt: 'Based on the texts, how would the author of Text 2 most likely respond to Dr. Vance\'s claim in Text 1?',
            choices: [
              'By agreeing that overfishing is definitely the sole cause of the decline.',
              'By suggesting that warming spawning grounds may also be a significant contributing factor.',
              'By denying that the fish population has declined at all.',
              'By arguing that catch records are entirely unreliable.',
            ],
            correct: 1,
            explanation: 'Text 2 предлагает альтернативный (или дополнительный) фактор — потепление нерестилищ — который мог способствовать снижению популяции, не обязательно отрицая overfishing полностью.',
          },
          {
            id: 'ct-q-5',
            passage:
              'Text 1: A psychologist argues that video games improve players\' problem-solving skills, citing studies showing gamers perform better on certain cognitive tests.\n\nText 2: Another researcher agrees that gamers perform better on these specific tests but notes that the tests closely resemble the games themselves, raising the question of whether the improvement transfers to problem-solving in everyday life.',
            prompt: 'On which point would the authors of both texts most likely agree?',
            choices: [
              'Gamers perform better on certain cognitive tests.',
              'Video games have no effect on cognitive test performance.',
              'The improvement definitely transfers to everyday problem-solving.',
              'Cognitive tests are unrelated to video games in any way.',
            ],
            correct: 0,
            explanation: 'Оба автора согласны с фактом лучших результатов геймеров в тестах — второй лишь ставит под сомнение, распространяется ли этот эффект на повседневную жизнь, не отрицая сам результат тестов.',
          },
        ],
      },
    ],
  },
  {
    id: 'expression-ideas',
    subject: 'reading',
    title: 'Выражение идей',
    englishTitle: 'Expression of Ideas',
    description: 'Риторический синтез данных и правильный выбор слов-связок. Около 20% вопросов.',
    color: 'pink',
    icon: '✍️',
    topics: [
      {
        id: 'rhetorical-synthesis',
        domainId: 'expression-ideas',
        title: 'Риторический синтез',
        subtitle: 'Rhetorical Synthesis',
        summary: 'Полный разбор: как выбрать предложение, которое точно достигает конкретной риторической цели, используя данные из списка заметок, и как распознавать все основные типы целей.',
        lesson: [
          {
            heading: '1. Уникальный формат SAT',
            body: [
              'Тебе дают список фактов-заметок (bullet points) о какой-то теме и конкретную ЦЕЛЬ, например: "The student wants to emphasize a contrast between two research findings." Нужно выбрать вариант ответа (предложение), который лучше всего достигает именно ЭТОЙ цели, используя факты из заметок.',
              'Важно: здесь нет "текста для чтения" в привычном смысле — все нужные факты уже даны списком, и задача не в понимании текста, а в риторике — умении подобрать правильную структуру предложения под конкретную коммуникативную задачу.',
            ],
          },
          {
            heading: '2. Стратегия',
            body: [
              '1) Сначала выдели ключевое слово цели: "emphasize" (подчеркнуть), "compare" (сравнить), "introduce" (представить тему), "summarize" (обобщить), "describe a difference" (описать различие), "explain a similarity" (объяснить сходство).',
              '2) Игнорируй варианты, которые содержат верные факты из заметок, но не выполняют именно эту риторическую задачу — например, просто перечисляют факты вместо того, чтобы показать контраст между ними.',
              '3) Правильный ответ обычно точно и без искажений использует данные из заметок, но при этом его ГРАММАТИЧЕСКАЯ СТРУКТУРА ясно выполняет заявленную цель (например, содержит слово "while" или "whereas" для контраста, или "similarly" для сходства).',
            ],
            tips: [
              'Не выбирай вариант только потому, что он использует БОЛЬШЕ фактов из заметок — количество упомянутых фактов не главное, главное — точное попадание в цель, сформулированную в задании.',
            ],
          },
          {
            heading: '3. Частые типы целей и как их узнать',
            body: [
              '"Identify a similarity" / "explain what X and Y have in common" — нужна связка сходства (both, similarly, like X, Y also...).',
              '"Highlight/emphasize a contrast or difference" — нужна связка контраста (while, whereas, unlike, in contrast, however).',
              '"Provide a definition/explanation of a term" — нужно точное объяснение термина, а не побочный факт о нём.',
              '"Introduce the topic to an audience unfamiliar with it" — нужно общее, доступное объяснение без узкоспециализированных деталей.',
              '"Emphasize the significance/importance of X" — нужно предложение, подчёркивающее МАСШТАБ или ЗНАЧИМОСТЬ факта (часто через конкретные впечатляющие цифры), а не просто упоминание факта вскользь.',
              '"Provide an example of X" — нужен конкретный частный случай, иллюстрирующий общее утверждение, а не ещё одно общее утверждение.',
            ],
          },
          {
            heading: '4. Почему "правильные факты, неправильная цель" — ловушка №1',
            body: [
              'Самая частая ошибка — выбрать вариант с абсолютно точными фактами из заметок, но который не решает заявленную риторическую задачу. Например, если цель "explain a similarity", а вариант перечисляет факты по отдельности без слова "both" или подобной связки — это не выполняет задачу, даже если каждое слово в нём верно.',
              'Всегда задавай контрольный вопрос: "Если бы я прочитал только этот вариант ответа, понял бы я, что цель — именно СХОДСТВО / КОНТРАСТ / ПРИМЕР / ОПРЕДЕЛЕНИЕ?" Если нет — вариант не подходит, независимо от точности фактов.',
            ],
          },
          {
            heading: '5. Игнорируй "лишние" факты из заметок',
            body: [
              'Не все факты из заметок обязательно должны попасть в итоговое предложение — задача может требовать использовать только 2 из 4 предложенных фактов. Не выбирай вариант только потому, что он включает больше информации: если лишние факты не нужны для цели, лучший ответ их не включает.',
            ],
          },
        ],
        examples: [
          {
            id: 'rs-ex-1',
            passage:
              'Notes:\n• The city of Ashford built a new public library in 2010.\n• The library cost $4 million to construct.\n• Attendance at city libraries citywide dropped by 30% between 2010 and 2020.\n• The Ashford library, unlike other city libraries, saw attendance increase by 15% in the same period.',
            prompt: 'The student wants to emphasize a contrast between the Ashford library and other city libraries. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
            choices: [
              'The Ashford library, built in 2010 for $4 million, is one of several libraries in the city.',
              'While attendance at city libraries overall dropped by 30% between 2010 and 2020, attendance at the new Ashford library rose by 15% in the same period.',
              'The Ashford library was constructed in 2010 at a cost of $4 million.',
              'Library attendance changed in various ways across the city between 2010 and 2020.',
            ],
            correct: 1,
            explanation: 'Только этот вариант прямо противопоставляет падение посещаемости в целом по городу (−30%) росту в библиотеке Эшфорда (+15%) с помощью слова "while" — именно это и просили выделить.',
          },
          {
            id: 'rs-ex-2',
            passage:
              'Notes:\n• Company X released a smartphone in 2019.\n• The phone had a battery life of 10 hours.\n• Company X released an updated model in 2023.\n• The 2023 model has a battery life of 22 hours.',
            prompt: 'The student wants to highlight the improvement in battery life between the two models. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
            choices: [
              'Company X released two different smartphones, one in 2019 and one in 2023.',
              'The 2019 phone from Company X had a battery life of 10 hours, while the 2023 model more than doubled that, reaching 22 hours.',
              'Company X is a technology company that makes smartphones.',
              'Battery life is an important feature for many smartphone buyers.',
            ],
            correct: 1,
            explanation: 'Этот вариант напрямую сравнивает два числа (10 и 22 часа), явно показывая улучшение — именно это требовалось сделать.',
          },
          {
            id: 'rs-ex-3',
            passage:
              'Notes:\n• Both maple trees and oak trees are deciduous, losing their leaves in autumn.\n• Maple trees typically live 100–300 years.\n• Oak trees typically live 200–300 years.\n• Both trees are commonly found in temperate forests in North America.',
            prompt: 'The student wants to describe a similarity between maple and oak trees. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
            choices: [
              'Maple trees live 100–300 years, while oak trees live 200–300 years.',
              'Both maple and oak trees are deciduous, losing their leaves each autumn.',
              'Maple trees are found only in North America, unlike oak trees.',
              'Oak trees generally outlive maple trees by many decades.',
            ],
            correct: 1,
            explanation: 'Только этот вариант описывает сходство ("both... are deciduous") — остальные варианты либо описывают различия, либо содержат неточную информацию, не встречающуюся в заметках.',
          },
          {
            id: 'rs-ex-4',
            passage:
              'Notes:\n• The blue whale is the largest animal known to have ever existed.\n• Adult blue whales can reach lengths of up to 100 feet.\n• Blue whales can weigh as much as 200 tons.\n• Blue whales primarily eat tiny shrimp-like animals called krill.',
            prompt: 'The student wants to emphasize the significance of the blue whale\'s size. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
            choices: [
              'Blue whales eat krill, which are tiny shrimp-like animals.',
              'The blue whale, which can reach lengths of up to 100 feet and weigh as much as 200 tons, is the largest animal known to have ever existed.',
              'Blue whales are a type of animal found in the ocean.',
              'Krill are an important food source for many marine animals.',
            ],
            correct: 1,
            explanation: 'Только этот вариант объединяет впечатляющие конкретные цифры (100 футов, 200 тонн) с утверждением "largest animal known to have ever existed" — именно так подчёркивается значимость размера, а не просто упоминается факт.',
          },
        ],
        quiz: [
          {
            id: 'rs-q-1',
            passage:
              'Notes:\n• Company X released a smartphone in 2019.\n• The phone had a battery life of 10 hours.\n• Company X released an updated model in 2023.\n• The 2023 model has a battery life of 22 hours.',
            prompt: 'The student wants to highlight the improvement in battery life between the two models. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
            choices: [
              'Company X released two different smartphones, one in 2019 and one in 2023.',
              'The 2019 phone from Company X had a battery life of 10 hours, while the 2023 model more than doubled that, reaching 22 hours.',
              'Company X is a technology company that makes smartphones.',
              'Battery life is an important feature for many smartphone buyers.',
            ],
            correct: 1,
            explanation: 'Этот вариант напрямую сравнивает два числа (10 и 22 часа), явно показывая улучшение — именно это требовалось сделать.',
          },
          {
            id: 'rs-q-2',
            passage:
              'Notes:\n• The Amazon rainforest produces about 20% of the world\'s oxygen.\n• The Amazon covers parts of nine countries in South America.\n• Deforestation in the Amazon has increased significantly since 2019.\n• Scientists warn that continued deforestation could turn parts of the rainforest into savanna.',
            prompt: 'The student wants to introduce the topic of the Amazon rainforest to an audience unfamiliar with it. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
            choices: [
              'Scientists warn that continued deforestation could turn parts of the rainforest into savanna.',
              'The Amazon rainforest, which spans parts of nine South American countries, produces about 20% of the world\'s oxygen.',
              'Deforestation in the Amazon has increased significantly since 2019.',
              'The Amazon covers parts of nine countries.',
            ],
            correct: 1,
            explanation: 'Для введения темы незнакомой аудитории нужна общая, базовая информация (что это, где находится, почему важно) — именно это даёт вариант B, комбинируя расположение и значимость.',
          },
          {
            id: 'rs-q-3',
            passage:
              'Notes:\n• Bats use echolocation to navigate in the dark.\n• Dolphins also use echolocation to find prey underwater.\n• Bats emit high-frequency sound waves through their mouths or noses.\n• Dolphins emit clicks through an organ called the melon, located in their foreheads.',
            prompt: 'The student wants to explain a difference in how bats and dolphins produce the sounds used for echolocation. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
            choices: [
              'Both bats and dolphins use echolocation to navigate their environments.',
              'Bats emit sound through their mouths or noses, whereas dolphins produce clicks using an organ called the melon.',
              'Bats navigate in the dark, and dolphins find prey underwater.',
              'Echolocation is used by multiple animal species for different purposes.',
            ],
            correct: 1,
            explanation: 'Вариант B чётко показывает РАЗЛИЧИЕ в способе издавания звука с помощью слова "whereas" — именно это и требовалось объяснить, а не сходство в цели использования эхолокации.',
          },
          {
            id: 'rs-q-4',
            passage:
              'Notes:\n• Photosynthesis is the process by which plants convert sunlight into energy.\n• Photosynthesis occurs primarily in a plant\'s leaves.\n• The process requires carbon dioxide, water, and sunlight.\n• Photosynthesis releases oxygen as a byproduct.',
            prompt: 'The student wants to provide a basic definition of photosynthesis for readers unfamiliar with the term. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
            choices: [
              'Photosynthesis occurs primarily in a plant\'s leaves.',
              'Photosynthesis is the process by which plants convert sunlight into energy, using carbon dioxide and water.',
              'Photosynthesis releases oxygen as a byproduct.',
              'Plants need sunlight to survive.',
            ],
            correct: 1,
            explanation: 'Для определения термина нужно ясное объяснение самого процесса и его ключевых компонентов — именно это даёт вариант B, комбинируя определение с основными нужными веществами.',
          },
          {
            id: 'rs-q-5',
            passage:
              'Notes:\n• City A\'s public transit system had 2 million riders in 2015.\n• City A\'s public transit system had 5 million riders in 2023.\n• City B\'s public transit system had 4 million riders in 2015.\n• City B\'s public transit system had 4.2 million riders in 2023.',
            prompt: 'The student wants to emphasize a contrast in ridership growth between the two cities. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
            choices: [
              'City A had 2 million riders in 2015, and City B had 4 million riders in 2015.',
              'While City A\'s ridership grew from 2 million to 5 million between 2015 and 2023, City B\'s ridership grew only slightly, from 4 million to 4.2 million.',
              'Both cities have public transit systems.',
              'City B had more riders than City A in 2015.',
            ],
            correct: 1,
            explanation: 'Только этот вариант явно противопоставляет резкий рост в City A (2→5 млн) незначительному росту в City B (4→4.2 млн) с помощью слова "while" — именно контраст в темпах роста и требовался.',
          },
        ],
      },
      {
        id: 'transitions',
        domainId: 'expression-ideas',
        title: 'Слова-связки (переходы)',
        subtitle: 'Transitions',
        summary: 'Полный разбор всех категорий переходов, стратегия их выбора и типичные ловушки между похожими по смыслу связками.',
        lesson: [
          {
            heading: '1. Зачем эта тема важна на SAT',
            body: [
              'Вопросы на transitions есть почти в каждом наборе Reading & Writing. Хорошая новость — логика их решения полностью механическая: нужно понять отношение между двумя мыслями, а не оценивать стиль или "красоту" фразы.',
            ],
          },
          {
            heading: '2. Категории переходов',
            body: [
              'Контраст (however, nevertheless, on the other hand, in contrast, conversely) — используется, когда второе предложение противоречит, ограничивает или неожиданно контрастирует с первым.',
              'Причина/следствие (therefore, thus, as a result, consequently, hence) — второе предложение является логическим следствием первого.',
              'Дополнение/сходство (moreover, furthermore, similarly, in addition, likewise) — второе предложение добавляет похожую по направлению мысли информацию, усиливая первую.',
              'Пример (for example, for instance, specifically) — второе предложение иллюстрирует конкретным случаем общее утверждение из первого.',
              'Уступка (admittedly, granted, of course) — признание частичной правоты противоположной точки зрения перед тем, как её оспорить.',
              'Итог/вывод (in conclusion, overall, ultimately) — используется, только если предложение действительно ЗАВЕРШАЕТ и обобщает целый текст или рассуждение, а не просто продолжает мысль.',
            ],
          },
          {
            heading: '3. Стратегия',
            body: [
              '1) Прочитай оба предложения ДО и ПОСЛЕ пропуска и определи логическую связь между ними самостоятельно, ещё до взгляда на варианты ответа.',
              '2) Задай себе вопрос: они согласуются друг с другом (усиливают одну и ту же мысль), противоречат друг другу, или второе — прямое следствие первого?',
              '3) Выбери слово-связку именно этой категории — не ориентируйся только на "звучит гладко", логическая связь важнее стиля.',
            ],
            tips: [
              'Частая ловушка: "for example" vs "for instance" vs "similarly" — все три могут показаться уместными по стилю, но "similarly" требует, чтобы второе предложение было НЕЗАВИСИМЫМ примером похожей идеи, а не конкретной иллюстрацией именно первого утверждения.',
            ],
          },
          {
            heading: '4. Тонкое различие внутри категории "контраст"',
            body: [
              '"However" — универсальный контраст без дополнительных оттенков. "Nevertheless"/"nonetheless" — контраст с оттенком УСТУПКИ (несмотря на предыдущий факт, что-то всё равно происходит). "Instead" — используется, когда второе описывает то, что произошло ВМЕСТО ожидаемого, а не просто что-то иное.',
              'Пример разницы: "The plan was expensive. However, it worked." (просто контраст) vs "The plan was expensive; nevertheless, the city approved it." (несмотря на дороговизну — уступка) vs "The city did not build a park. Instead, it built a library." (замена одного другим).',
            ],
          },
          {
            heading: '5. Тонкое различие внутри категории "причина/следствие"',
            body: [
              '"Therefore" и "thus" — более формальные, используются для логического вывода. "As a result" и "consequently" — чуть более естественно описывают ПРАКТИЧЕСКОЕ последствие события, а не строго логический вывод. На SAT в большинстве случаев любое слово этой группы работает одинаково правильно, если общая логика верна — различие важно реже, чем в категории "контраст".',
            ],
          },
          {
            heading: '6. Позиция перехода в предложении',
            body: [
              'Переход не всегда стоит в самом начале предложения — иногда он встроен в середину ("The results, however, were unexpected") — принцип выбора логической связи остаётся тем же, меняется только пунктуация вокруг слова-связки (обычно выделяется запятыми с обеих сторон, если стоит в середине).',
            ],
          },
          {
            heading: '7. Развёрнутый список типичных ошибок',
            body: [
              'Выбирать переход, который "звучит нормально" стилистически, но не соответствует реальной логической связи между предложениями.',
              'Путать "similarly" (независимый параллельный пример) с "for example" (конкретная иллюстрация именно предыдущего утверждения).',
              'Использовать "in conclusion"/"overall" в середине рассуждения, где мысль ещё не завершена.',
            ],
          },
          {
            heading: '8. Мини-проверка перед практикой',
            body: [
              '"The team had lost its last five games. ______, they entered the championship as heavy underdogs." Какая связка подходит? (Ответ: связка следствия — as a result / consequently, так как статус аутсайдера — прямое следствие серии поражений.)',
            ],
          },
        ],
        examples: [
          {
            id: 'trans-ex-1',
            passage:
              'The bridge was originally designed to last only 50 years. ______, careful maintenance has allowed it to remain in use for over a century.',
            prompt: 'Which choice completes the text with the most logical transition?',
            choices: ['For example,', 'Similarly,', 'However,', 'As a result,'],
            correct: 2,
            explanation: 'Второе предложение противоречит ожиданию из первого (мост должен был прослужить всего 50 лет, но служит больше века) — нужен контраст: "However".',
          },
          {
            id: 'trans-ex-2',
            passage:
              'Heavy rainfall caused the river to rise well above its normal level. ______, local officials issued evacuation notices for residents in low-lying areas.',
            prompt: 'Which choice completes the text with the most logical transition?',
            choices: ['Similarly,', 'As a result,', 'In contrast,', 'For instance,'],
            correct: 1,
            explanation: 'Эвакуация — прямое следствие подъёма уровня реки, значит нужна связка следствия: "As a result,".',
          },
          {
            id: 'trans-ex-3',
            passage:
              'Many marine mammals, such as whales, communicate using complex vocalizations. Dolphins, ______, use a wide range of clicks and whistles to coordinate with other members of their pod.',
            prompt: 'Which choice completes the text with the most logical transition?',
            choices: ['however,', 'similarly,', 'therefore,', 'in conclusion,'],
            correct: 1,
            explanation: 'Второе предложение описывает ЕЩЁ ОДИН пример похожего явления (сложные вокализации у морских млекопитающих) — нужна связка сходства "similarly".',
          },
          {
            id: 'trans-ex-4',
            passage:
              'The city council debated the new zoning proposal for over three hours. ______, they were unable to reach a final decision and postponed the vote until the following month.',
            prompt: 'Which choice completes the text with the most logical transition?',
            choices: ['For example,', 'Ultimately,', 'Similarly,', 'In addition,'],
            correct: 1,
            explanation: 'Второе предложение подводит ИТОГ долгого обсуждения (постановление о переносе голосования) — нужна связка итога "Ultimately,".',
          },
        ],
        quiz: [
          {
            id: 'trans-q-1',
            passage:
              'Heavy rainfall caused the river to rise well above its normal level. ______, local officials issued evacuation notices for residents in low-lying areas.',
            prompt: 'Which choice completes the text with the most logical transition?',
            choices: ['Similarly,', 'As a result,', 'In contrast,', 'For instance,'],
            correct: 1,
            explanation: 'Эвакуация — прямое следствие подъёма уровня реки, значит нужна связка следствия: "As a result,".',
          },
          {
            id: 'trans-q-2',
            passage:
              'The company\'s new policy was intended to reduce employee turnover. ______, turnover actually increased by 12% in the following year.',
            prompt: 'Which choice completes the text with the most logical transition?',
            choices: ['Consequently,', 'Instead,', 'Similarly,', 'For example,'],
            correct: 1,
            explanation: 'Результат оказался противоположным ожидаемому (текучесть выросла, а не снизилась) — нужен контраст: "Instead,".',
          },
          {
            id: 'trans-q-3',
            passage:
              'Many students find calculus challenging at first. ______, with consistent practice, most are able to master its core concepts within a semester.',
            prompt: 'Which choice completes the text with the most logical transition?',
            choices: ['Moreover,', 'Nevertheless,', 'Specifically,', 'Consequently,'],
            correct: 1,
            explanation: 'Второе предложение показывает контраст с первоначальной трудностью (несмотря на сложность, большинство справляется) — нужна связка уступки/контраста "Nevertheless,".',
          },
          {
            id: 'trans-q-4',
            passage:
              'The museum\'s new exhibit features rare artifacts from ancient Egypt. ______, it includes several pieces that have never before been displayed publicly.',
            prompt: 'Which choice completes the text with the most logical transition?',
            choices: ['However,', 'In addition,', 'On the other hand,', 'Nonetheless,'],
            correct: 1,
            explanation: 'Второе предложение ДОБАВЛЯЕТ ещё одну положительную деталь к первому, не противореча ему — нужна связка дополнения "In addition,".',
          },
          {
            id: 'trans-q-5',
            passage:
              'The team had lost its last five games heading into the tournament. ______, they entered the championship as heavy underdogs.',
            prompt: 'Which choice completes the text with the most logical transition?',
            choices: ['As a result,', 'In contrast,', 'Similarly,', 'For example,'],
            correct: 0,
            explanation: 'Статус аутсайдера — прямое следствие серии из пяти поражений подряд, значит нужна связка следствия: "As a result,".',
          },
          {
            id: 'trans-q-6',
            passage:
              'The novelist\'s first three books received little attention from critics or readers. ______, her fourth novel became an unexpected bestseller, selling over a million copies in its first year.',
            prompt: 'Which choice completes the text with the most logical transition?',
            choices: ['Similarly,', 'However,', 'Consequently,', 'For instance,'],
            correct: 1,
            explanation: 'Четвёртая книга неожиданно стала бестселлером, что контрастирует с провалом первых трёх — нужна связка контраста "However,".',
          },
        ],
      },
    ],
  },
  {
    id: 'conventions',
    subject: 'reading',
    title: 'Нормы английского языка (грамматика)',
    englishTitle: 'Standard English Conventions',
    description: 'Границы предложений, согласование, пунктуация и формы глагола. Около 26% вопросов — это чистая грамматика.',
    color: 'red',
    icon: '📏',
    topics: [
      {
        id: 'sentence-boundaries',
        domainId: 'conventions',
        title: 'Границы предложений',
        subtitle: 'Sentence Boundaries (commas, semicolons, periods)',
        summary: 'Полный разбор: как отличить независимое предложение от зависимого, все способы их соединения и как не создать run-on sentence или comma splice.',
        lesson: [
          {
            heading: '1. Зачем эта тема важна на SAT',
            body: [
              'Sentence Boundaries — одна из самых объёмных и предсказуемых грамматических тем: проверяется буквально одно и то же умение — определить, независимая ли часть перед тобой, и выбрать правильный знак препинания между двумя частями предложения.',
            ],
          },
          {
            heading: '2. Независимые и зависимые части',
            body: [
              'Independent clause (независимое предложение) — часть, которая грамматически может стоять отдельно как полное предложение: в ней есть подлежащее и сказуемое, и она выражает законченную мысль.',
              'Dependent clause (зависимое предложение) — начинается со слов типа "because", "although", "when", "while", "since", "if", "which", "that" (в некоторых случаях) и не может стоять отдельно как полноценное предложение, даже если в нём есть подлежащее и сказуемое.',
              'Проверочный тест: прочитай часть предложения отдельно от остального — если она звучит как законченная мысль сама по себе, это независимое предложение; если явно чего-то не хватает ("...потому что что?"), это зависимое.',
            ],
          },
          {
            heading: '3. Как правильно соединять два независимых предложения',
            body: [
              'Точка: "I like tea. She likes coffee." — самый простой и всегда безопасный вариант.',
              'Точка с запятой: "I like tea; she likes coffee." — используется БЕЗ союза, оба предложения должны быть независимыми и связаны по смыслу.',
              'Запятая + сочинительный союз (используй аббревиатуру FANBOYS: for, and, nor, but, or, yet, so): "I like tea, but she likes coffee."',
              'Двоеточие (после независимого предложения, для пояснения, списка или важного вывода): "I like one drink: tea." Важно: то, что стоит ПЕРЕД двоеточием, должно быть полным независимым предложением, а после — не обязательно.',
              'Тире (тоже может соединять два независимых предложения, похоже на двоеточие, но чуть более "разговорный" стиль — SAT принимает оба варианта, если оба предложения независимы).',
            ],
            tips: [
              'ОШИБКА comma splice — соединение двух независимых предложений ТОЛЬКО запятой без союза: "I like tea, she likes coffee." — это неверно на SAT!',
              'ОШИБКА run-on (fused sentence) — два независимых предложения вообще без знака препинания и без союза: "I like tea she likes coffee."',
            ],
          },
          {
            heading: '4. Как соединять зависимое и независимое предложения',
            body: [
              'Если зависимое предложение стоит ПЕРЕД независимым — между ними ставится запятая: "Although the weather was cold, the hikers continued."',
              'Если зависимое предложение стоит ПОСЛЕ независимого — запятая обычно НЕ нужна: "The hikers continued although the weather was cold."',
              'Это правило — одна из самых частых точек проверки на SAT: экзамен любит менять порядок частей предложения и проверять, правильно ли расставлена (или, наоборот, лишняя) запятая.',
            ],
          },
          {
            heading: '5. Конъюнктивные наречия (however, therefore, moreover) требуют особой пунктуации',
            body: [
              'Слова вроде "however", "therefore", "moreover", "consequently", "nevertheless" — это НЕ союзы, а наречия. Когда они соединяют два независимых предложения, перед ними нужна точка с запятой (или точка), а после них — запятая: "The plan was risky; however, it succeeded."',
              'Частая ошибка — ставить перед такими словами только запятую, как если бы это был союз FANBOYS: "The plan was risky, however, it succeeded." — это тоже разновидность comma splice.',
            ],
          },
          {
            heading: '6. Вставные конструкции внутри предложения не создают новую границу',
            body: [
              'Если внутри предложения есть вставная фраза (выделенная запятыми, тире или скобками), она не превращает предложение в два отдельных — знаки препинания вокруг вставки не заменяют собой точку или точку с запятой между независимыми частями.',
            ],
          },
          {
            heading: '7. Развёрнутый список типичных ошибок',
            body: [
              'Ставить точку с запятой перед зависимым предложением (частая ошибка: "The hikers continued; although the weather was cold." — неверно, потому что после точки с запятой должно идти НЕЗАВИСИМОЕ предложение).',
              'Ставить двоеточие в середине грамматически незаконченной мысли, например сразу после глагола ("The recipe requires: eggs, flour, and milk." — грамматически некорректно, потому что "The recipe requires" не является полным независимым предложением без списка).',
              'Ставить только запятую перед конъюнктивным наречием (however, therefore) вместо точки с запятой.',
            ],
          },
          {
            heading: '8. Мини-проверка перед практикой',
            body: [
              'Определи: "Because the store was closed" — независимое или зависимое предложение? (Ответ: зависимое, начинается с "because" и не выражает законченную мысль само по себе.)',
              '"The store was closed" — независимое или зависимое? (Ответ: независимое, полноценная законченная мысль.)',
            ],
          },
        ],
        examples: [
          {
            id: 'sb-ex-1',
            prompt: 'Select the option that correctly combines the sentences: "The museum closed early. The staff needed to prepare for a special event."',
            choices: [
              'The museum closed early, the staff needed to prepare for a special event.',
              'The museum closed early; the staff needed to prepare for a special event.',
              'The museum closed early the staff needed to prepare for a special event.',
              'The museum, closed early the staff needed to prepare for a special event.',
            ],
            correct: 1,
            explanation: 'Оба предложения независимые, поэтому корректно соединить их точкой с запятой без союза. Вариант A — comma splice (ошибка), вариант C — run-on.',
          },
          {
            id: 'sb-ex-2',
            prompt: 'Which choice completes the sentence with correct punctuation? "Although the weather was cold ______ the hikers continued to the summit."',
            choices: [', the hikers continued to the summit.', '; the hikers continued to the summit.', ' the hikers continued to the summit.', ': the hikers continued to the summit.'],
            correct: 0,
            explanation: '"Although the weather was cold" — зависимое предложение, стоящее ПЕРЕД независимым, поэтому после него ставится запятая.',
          },
          {
            id: 'sb-ex-3',
            prompt: 'Which version correctly punctuates the sentence? "The results were clear the committee approved the proposal immediately."',
            choices: [
              'The results were clear, the committee approved the proposal immediately.',
              'The results were clear the committee approved the proposal immediately.',
              'The results were clear; the committee approved the proposal immediately.',
              'The results were clear the committee, approved the proposal immediately.',
            ],
            correct: 2,
            explanation: 'Оба предложения независимые и тесно связаны по смыслу (причина-следствие) — точка с запятой корректно их соединяет без союза.',
          },
          {
            id: 'sb-ex-4',
            prompt: 'Which choice correctly completes the sentence? "The bridge was closed for repairs ______ traffic was rerouted through downtown."',
            choices: [', so', '; so', ', however', ' so'],
            correct: 0,
            explanation: 'Оба предложения независимые; союз "so" из группы FANBOYS требует перед собой запятой, а не точки с запятой.',
          },
          {
            id: 'sb-ex-5',
            prompt: 'Which choice correctly completes the sentence? "The experiment produced surprising results ______ the researchers decided to repeat it under different conditions."',
            choices: ['; therefore,', ', therefore', '; therefore', ', therefore,'],
            correct: 0,
            explanation: '"Therefore" — конъюнктивное наречие, соединяющее два независимых предложения: перед ним нужна точка с запятой, а после — запятая.',
          },
        ],
        quiz: [
          {
            id: 'sb-q-1',
            prompt: 'Which choice completes the sentence with correct punctuation? "Although the weather was cold ______ the hikers continued to the summit."',
            choices: [', the hikers continued to the summit.', '; the hikers continued to the summit.', ' the hikers continued to the summit.', ': the hikers continued to the summit.'],
            correct: 0,
            explanation: '"Although the weather was cold" — зависимое предложение, стоящее ПЕРЕД независимым, поэтому после него ставится запятая.',
          },
          {
            id: 'sb-q-2',
            prompt: 'Which version avoids a comma splice? Choose the best combination of: "The experiment failed" and "the scientists redesigned it."',
            choices: [
              'The experiment failed, the scientists redesigned it.',
              'The experiment failed, so the scientists redesigned it.',
              'The experiment failed the scientists redesigned it.',
              'The experiment, failed, the scientists redesigned it.',
            ],
            correct: 1,
            explanation: 'Запятая + союз "so" корректно соединяет два независимых предложения, избегая comma splice.',
          },
          {
            id: 'sb-q-3',
            prompt: 'Which sentence is punctuated correctly?',
            choices: [
              'The chef prepared three dishes: soup, salad, and a main course.',
              'The chef prepared: soup, salad, and a main course.',
              'The chef prepared three dishes, soup, salad, and a main course.',
              'The chef, prepared three dishes: soup, salad, and a main course.',
            ],
            correct: 0,
            explanation: '"The chef prepared three dishes" — полное независимое предложение, после которого корректно ставится двоеточие перед списком.',
          },
          {
            id: 'sb-q-4',
            prompt: 'Which choice correctly completes the sentence? "The novel received poor reviews when it was first published ______ it is now considered a classic."',
            choices: [', however', '; however,', ' however', ': however,'],
            correct: 1,
            explanation: 'Оба предложения независимые, соединённые конъюнктивным наречием "however" — перед ним ставится точка с запятой, а после — запятая.',
          },
          {
            id: 'sb-q-5',
            prompt: 'Which sentence contains a run-on error?',
            choices: [
              'The rain stopped, and the sun came out.',
              'The rain stopped the sun came out.',
              'The rain stopped; the sun came out.',
              'Because the rain stopped, the sun came out.',
            ],
            correct: 1,
            explanation: 'Второй вариант соединяет два независимых предложения вообще без знака препинания и без союза — это классический run-on (fused sentence).',
          },
          {
            id: 'sb-q-6',
            prompt: 'Which choice correctly completes the sentence? "The city council approved the budget ______ several members expressed concerns about it."',
            choices: [', however', '; however,', ' however,', ': however'],
            correct: 1,
            explanation: '"However" соединяет два независимых предложения — перед ним нужна точка с запятой, после — запятая.',
          },
          {
            id: 'sb-q-7',
            prompt: 'Which sentence contains a comma splice?',
            choices: [
              'The lecture ran long, so students missed their next class.',
              'The lecture ran long, students missed their next class.',
              'The lecture ran long; students missed their next class.',
              'Because the lecture ran long, students missed their next class.',
            ],
            correct: 1,
            explanation: 'Второй вариант соединяет два независимых предложения ТОЛЬКО запятой, без союза — это классический comma splice.',
          },
        ],
      },
      {
        id: 'agreement',
        domainId: 'conventions',
        title: 'Согласование подлежащего и сказуемого, местоимений',
        subtitle: 'Subject-Verb and Pronoun Agreement',
        summary: 'Полный разбор: как находить настоящее подлежащее в длинном предложении, согласовывать с ним глагол во всех особых случаях и правильно согласовывать местоимения.',
        lesson: [
          {
            heading: '1. Зачем эта тема важна на SAT',
            body: [
              'Subject-verb agreement — тема, где SAT специально усложняет предложения длинными вставками именно для того, чтобы проверить, не потеряешь ли ты из виду настоящее подлежащее. Как только научишься быстро находить "голое" подлежащее, эта тема становится одной из самых простых.',
            ],
          },
          {
            heading: '2. Subject-verb agreement: находим настоящее подлежащее',
            body: [
              'Глагол должен согласовываться с ПОДЛЕЖАЩИМ по числу (единственное/множественное), даже если между ними стоит длинная вставка типа "of the students", "along with his friends", "as well as the teacher" — эти вставки НЕ влияют на форму глагола, потому что не являются частью подлежащего.',
              'Пример: "The list of items IS on the table" (не "are" — подлежащее "list", единственное число, а "of items" — просто уточняющая вставка, не меняющая число подлежащего).',
            ],
          },
          {
            heading: '3. Особые случаи согласования',
            body: [
              'Слова "each", "every", "either", "neither", "one", "everyone", "everybody", "nobody" всегда требуют глагола в ЕДИНСТВЕННОМ числе, даже если после них идёт существительное во множественном числе: "Each of the students IS responsible..."',
              'При использовании "neither...nor" и "either...or" глагол согласуется с БЛИЖАЙШИМ к нему подлежащим: "Neither the coach nor the players WERE satisfied" (согласование с "players", так как это ближе к глаголу).',
              'Собирательные существительные (team, family, committee, jury) в американском английском обычно требуют глагола в единственном числе, если группа действует как единое целое: "The team IS ready."',
              '"A number of X" (много X) требует множественного числа глагола ("A number of students ARE absent"), а "the number of X" (число/количество X) требует единственного числа ("The number of students IS decreasing") — это противоположные правила для очень похожих фраз.',
            ],
          },
          {
            heading: '4. Инвертированный порядок слов — скрытая ловушка',
            body: [
              'Если предложение начинается не с подлежащего, а с вводной фразы места или времени ("On the table sit two books" / "Here are the results"), подлежащее нужно искать ПОСЛЕ глагола. Не путай слово, стоящее ближе к глаголу физически, с самим подлежащим.',
              'Пример: "There ______ several reasons for the delay." Подлежащее — "reasons" (множественное), а не "there", значит нужен глагол "are", а не "is".',
            ],
          },
          {
            heading: '5. Pronoun agreement (согласование местоимений)',
            body: [
              'Местоимение должно совпадать по числу с существительным, которое оно заменяет (его антецедентом): "each student" (единственное число) → "his or her" в формальном письме, "students" (множественное) → "their".',
              'Также следи за ясностью референции (pronoun clarity): местоимение не должно быть двусмысленным — непонятно, к какому именно из нескольких существительных оно относится. Если в предложении два возможных антецедента одного рода, SAT часто просит переписать предложение, заменив местоимение на конкретное существительное.',
            ],
            tips: [
              'Если видишь длинную вставку между подлежащим и глаголом — мысленно "вычеркни" её и проверь согласование на оставшейся короткой фразе.',
            ],
          },
          {
            heading: '6. Развёрнутый список типичных ошибок',
            body: [
              'Согласовывать глагол с существительным из вставки ("of the students", "along with...") вместо настоящего подлежащего.',
              'Перепутать "a number of" (множественное) с "the number of" (единственное).',
              'При инвертированном порядке слов искать подлежащее перед глаголом по привычке, хотя оно стоит после.',
              'Использовать местоимение, которое может относиться к двум разным существительным в предложении, создавая двусмысленность.',
            ],
          },
          {
            heading: '7. Мини-проверка перед практикой',
            body: [
              '"There ______ many reasons to celebrate." — is или are? (Ответ: are, так как подлежащее "reasons" во множественном числе)',
              '"A number of students ______ absent today." — is или are? (Ответ: are, "a number of" требует множественного числа)',
            ],
          },
        ],
        examples: [
          {
            id: 'agr-ex-1',
            prompt: 'Which choice completes the sentence correctly? "The collection of rare manuscripts ______ housed in the university library."',
            choices: ['is', 'are', 'were', 'have been'],
            correct: 0,
            explanation: 'Подлежащее — "collection" (единственное число), а "of rare manuscripts" — уточняющая вставка. Нужен глагол в единственном числе: "is".',
          },
          {
            id: 'agr-ex-2',
            prompt: 'Which choice completes the sentence correctly? "Neither the coach nor the players ______ satisfied with the result."',
            choices: ['was', 'is', 'were', 'has been'],
            correct: 2,
            explanation: 'При "neither...nor" глагол согласуется с ближайшим подлежащим — "players" (множественное число), поэтому нужен "were".',
          },
          {
            id: 'agr-ex-3',
            prompt: 'Which choice completes the sentence correctly? "Each of the employees ______ required to submit the form by Friday."',
            choices: ['are', 'is', 'were', 'have been'],
            correct: 1,
            explanation: '"Each" всегда требует глагола в единственном числе, независимо от того, что стоит после "of": "is".',
          },
          {
            id: 'agr-ex-4',
            prompt: 'Which choice completes the sentence correctly? "The jury ______ reached a unanimous decision after six hours of deliberation."',
            choices: ['has', 'have', 'were having', 'are having'],
            correct: 0,
            explanation: '"Jury" — собирательное существительное, действующее как единое целое, поэтому в американском английском требует глагола в единственном числе: "has".',
          },
          {
            id: 'agr-ex-5',
            prompt: 'Which choice completes the sentence correctly? "There ______ several reasons for the delay in construction."',
            choices: ['is', 'are', 'was', 'has been'],
            correct: 1,
            explanation: 'Подлежащее стоит после глагола при инвертированном порядке слов: настоящее подлежащее — "reasons" (множественное число), поэтому нужен "are".',
          },
          {
            id: 'agr-ex-6',
            prompt: 'Which choice completes the sentence correctly? "A number of employees ______ requested remote work options this year."',
            choices: ['has', 'have', 'is', 'was'],
            correct: 1,
            explanation: '"A number of X" требует глагола во множественном числе: "have".',
          },
        ],
        quiz: [
          {
            id: 'agr-q-1',
            prompt: 'Which choice completes the sentence correctly? "Neither the coach nor the players ______ satisfied with the result."',
            choices: ['was', 'is', 'were', 'has been'],
            correct: 2,
            explanation: 'При "neither...nor" глагол согласуется с ближайшим подлежащим — "players" (множественное число), поэтому нужен "were".',
          },
          {
            id: 'agr-q-2',
            prompt: 'Which choice completes the sentence correctly? "Each of the employees ______ required to submit the form by Friday."',
            choices: ['are', 'is', 'were', 'have been'],
            correct: 1,
            explanation: '"Each" всегда требует глагола в единственном числе, независимо от того, что стоит после "of": "is".',
          },
          {
            id: 'agr-q-3',
            prompt: 'Which choice completes the sentence correctly? "The number of applicants for the scholarship ______ increased significantly this year."',
            choices: ['have', 'has', 'were', 'are'],
            correct: 1,
            explanation: '"The number of X" (в отличие от "a number of X") требует единственного числа: "has".',
          },
          {
            id: 'agr-q-4',
            prompt: 'Which choice completes the sentence correctly? "The boxes of equipment, which were shipped last week, ______ still in the warehouse."',
            choices: ['is', 'was', 'are', 'has been'],
            correct: 2,
            explanation: 'Подлежащее — "boxes" (множественное число), вставка "of equipment, which were shipped last week" не меняет число подлежащего: нужен "are".',
          },
          {
            id: 'agr-q-5',
            prompt: 'Which choice completes the sentence correctly? "Every student and teacher in the building ______ evacuated during the drill."',
            choices: ['were', 'was', 'have been', 'are'],
            correct: 1,
            explanation: '"Every X and Y" грамматически требует единственного числа, даже если по смыслу перечислены несколько субъектов: "was".',
          },
          {
            id: 'agr-q-6',
            prompt: 'Which choice completes the sentence correctly? "The number of visitors to the park ______ tripled since the new trail opened."',
            choices: ['have', 'has', 'were', 'are'],
            correct: 1,
            explanation: '"The number of X" (в отличие от "a number of X") требует единственного числа: "has".',
          },
          {
            id: 'agr-q-7',
            prompt: 'Which choice completes the sentence correctly? "Here ______ the results of the annual survey."',
            choices: ['is', 'are', 'was', 'has been'],
            correct: 1,
            explanation: 'Инвертированный порядок слов: подлежащее "results" стоит после глагола и является множественным числом, значит нужен "are".',
          },
        ],
      },
      {
        id: 'punctuation-modifiers',
        domainId: 'conventions',
        title: 'Пунктуация: вводные конструкции и списки',
        subtitle: 'Punctuation with modifiers, lists, and apostrophes',
        summary: 'Полный разбор: запятые вокруг непарных вставок, все правила апострофов притяжательности, оформление списков и вводные конструкции.',
        lesson: [
          {
            heading: '1. Непарные и парные вставки (modifiers)',
            body: [
              'Nonessential (непарные, необязательные) вставки — дополнительная информация, которую можно убрать без потери смысла и без потери ясности, о ком/чём идёт речь — выделяются запятыми С ОБЕИХ СТОРОН (или парным тире, или скобками): "My brother, who lives in Boston, is a doctor." (у говорящего один брат, уточнение не обязательно для понимания, КТО имеется в виду).',
              'Essential (парные, необходимые, restrictive) вставки — без них меняется смысл, О КОМ ИЛИ О ЧЁМ именно идёт речь — запятыми НЕ выделяются: "The book that I borrowed is overdue." (без "that I borrowed" непонятно, какая именно книга имеется в виду).',
            ],
            tips: [
              'Проверочный вопрос: если убрать вставку, останется ли понятно, о ком/чём именно речь? Если да — вставка непарная (нужны запятые). Если нет — вставка парная (запятые не нужны).',
            ],
          },
          {
            heading: '2. "Which" vs "that" — практическое правило SAT',
            body: [
              'На SAT "that" почти всегда вводит ESSENTIAL (необходимую) вставку без запятых, а "which" почти всегда вводит NONESSENTIAL (непарную) вставку с запятыми — это не абсолютное правило английского языка, но надёжный ориентир именно для теста.',
              'Пример: "The car that is parked outside is mine" (essential — уточняет, какая именно машина) vs "My car, which is parked outside, needs repairs" (nonessential — просто добавочная информация об уже понятной машине).',
            ],
          },
          {
            heading: '3. Вводные слова и фразы',
            body: [
              'Вводное слово или фраза в начале предложения (however, in fact, for example, after the meeting, having finished her homework) отделяется запятой от остальной части предложения.',
              'Приложение (appositive) — существительная фраза, поясняющая другое существительное — тоже часто является непарной вставкой и выделяется запятыми: "Paris, the capital of France, attracts millions of tourists."',
            ],
          },
          {
            heading: '4. Апострофы — полный набор правил',
            body: [
              'Притяжательный падеж единственного числа: "the student\'s book" (одна книга одного студента) — апостроф ставится ПЕРЕД s.',
              'Притяжательный падеж множественного числа (слово уже заканчивается на -s): "the students\' books" (книги нескольких студентов) — апостроф ставится ПОСЛЕ s.',
              'Если существительное во множественном числе образовано не через -s (например, "children", "people", "men"), притяжательная форма всё равно строится как в единственном числе: "the children\'s toys".',
              '"It\'s" = "it is / it has" (сокращение). "Its" — притяжательное местоимение без апострофа (как his, her, their). Это одна из самых частых ошибок на SAT — эти два слова звучат одинаково, но пишутся по-разному в зависимости от смысла.',
              '"Whose" (притяжательное, "чей") vs "who\'s" (сокращение "who is/has") — та же логика, что с its/it\'s: апостроф означает сокращение, а не принадлежность.',
            ],
          },
          {
            heading: '5. Оформление списков',
            body: [
              'В списке из трёх и более элементов элементы разделяются запятыми: "red, white, and blue" (запятая перед "and" — Oxford comma — на SAT считается корректной и предпочтительной).',
              'Если элементы списка сами содержат запятые (например, это полные фразы или содержат названия с запятой внутри), для разделения элементов списка используется точка с запятой вместо обычной запятой.',
            ],
          },
          {
            heading: '6. Развёрнутый список типичных ошибок',
            body: [
              'Ставить только одну запятую вокруг непарной вставки вместо пары запятых (забывать закрывающую запятую).',
              'Ставить запятые вокруг парной (essential) вставки, хотя она нужна для определения смысла и не должна выделяться.',
              'Путать "its/it\'s" и "whose/who\'s" — апостроф всегда указывает на сокращение, а не на принадлежность.',
              'Использовать одиночную запятую вместо точки с запятой при разделении элементов сложного списка, где элементы сами содержат запятые.',
            ],
          },
          {
            heading: '7. Мини-проверка перед практикой',
            body: [
              '"The teacher ______ class was cancelled seemed disappointed." — its, it\'s, whose или who\'s? (Ответ: whose — притяжательное, "чей класс")',
              '"My neighbor, ______ recently moved here, works from home." — who\'s или whose? (Ответ: who\'s = who is, "который недавно переехал")',
            ],
          },
        ],
        examples: [
          {
            id: 'pm-ex-1',
            prompt: 'Which choice is punctuated correctly? "My favorite teacher ______ Mr. Alvarez ______ retired last spring."',
            choices: ['— Mr. Alvarez,', ', Mr. Alvarez —', ', Mr. Alvarez,', 'Mr. Alvarez'],
            correct: 2,
            explanation: '"Mr. Alvarez" — непарная вставка-приложение (уточнение, кто именно "my favorite teacher"), должна быть выделена запятыми с обеих сторон.',
          },
          {
            id: 'pm-ex-2',
            prompt: 'Which choice completes the sentence correctly? "The dog wagged ______ tail happily."',
            choices: ["it's", 'its', "its'", "it is"],
            correct: 1,
            explanation: 'Нужно притяжательное местоимение без апострофа: "its". "It\'s" означает "it is/has" и здесь не подходит.',
          },
          {
            id: 'pm-ex-3',
            prompt: 'Which choice is punctuated correctly?',
            choices: [
              'The company\'s three offices, located in Paris, Tokyo, and Lima, all closed for the holiday.',
              'The companys three offices located in Paris, Tokyo and Lima, all closed for the holiday.',
              'The company\'s three office\'s, located in Paris Tokyo and Lima all closed for the holiday.',
              'The companies three offices located in Paris, Tokyo, and Lima all closed, for the holiday.',
            ],
            correct: 0,
            explanation: 'Правильно: апостроф в "company\'s" (единственное число компании), запятые вокруг списка городов как непарной вставки, запятые между элементами списка.',
          },
          {
            id: 'pm-ex-4',
            prompt: 'Which sentence correctly punctuates the essential (restrictive) modifier?',
            choices: [
              'Students, who arrive late, will not be admitted to the exam room.',
              'Students who arrive late will not be admitted to the exam room.',
              'Students, who arrive late will not be admitted, to the exam room.',
              'Students who, arrive late, will not be admitted to the exam room.',
            ],
            correct: 1,
            explanation: '"Who arrive late" ограничивает, о КАКИХ именно студентах речь (только опоздавших) — это необходимая (essential) вставка, поэтому запятые не нужны.',
          },
          {
            id: 'pm-ex-5',
            prompt: 'Which choice completes the sentence correctly? "The novel, ______ was published in 1985, remains popular today."',
            choices: ['that', 'which', 'who', 'whose'],
            correct: 1,
            explanation: 'Вставка выделена запятыми (nonessential), значит по правилу SAT нужно "which", а не "that".',
          },
          {
            id: 'pm-ex-6',
            prompt: 'Which choice completes the sentence correctly? "The scientist ______ discovery changed the field passed away last year."',
            choices: ["who's", 'whose', "who is", "whom's"],
            correct: 1,
            explanation: 'Нужно притяжательное "whose" ("чьё открытие"), а не сокращение "who\'s" (who is).',
          },
        ],
        quiz: [
          {
            id: 'pm-q-1',
            prompt: 'Which choice completes the sentence correctly? "The dog wagged ______ tail happily."',
            choices: ["it's", 'its', "its'", "it is"],
            correct: 1,
            explanation: 'Нужно притяжательное местоимение без апострофа: "its". "It\'s" означает "it is/has" и здесь не подходит.',
          },
          {
            id: 'pm-q-2',
            prompt: 'Which choice is punctuated correctly?',
            choices: [
              'The company\'s three offices, located in Paris, Tokyo, and Lima, all closed for the holiday.',
              'The companys three offices located in Paris, Tokyo and Lima, all closed for the holiday.',
              'The company\'s three office\'s, located in Paris Tokyo and Lima all closed for the holiday.',
              'The companies three offices located in Paris, Tokyo, and Lima all closed, for the holiday.',
            ],
            correct: 0,
            explanation: 'Правильно: апостроф в "company\'s" (единственное число компании), запятые вокруг списка городов как непарной вставки, запятые между элементами списка.',
          },
          {
            id: 'pm-q-3',
            prompt: 'Which choice correctly completes the sentence? "The students turned in ______ assignments before the deadline."',
            choices: ["they're", 'their', 'there', "there's"],
            correct: 1,
            explanation: 'Нужно притяжательное местоимение "their" (принадлежность студентам). "They\'re" = "they are", "there" указывает на место — оба не подходят по смыслу.',
          },
          {
            id: 'pm-q-4',
            prompt: 'Which sentence uses commas correctly around a nonessential modifier?',
            choices: [
              'My sister who lives in Denver is visiting next week.',
              'My sister, who lives in Denver, is visiting next week.',
              'My sister, who lives in Denver is visiting next week.',
              'My sister who lives in Denver, is visiting next week.',
            ],
            correct: 1,
            explanation: 'Если у говорящего только одна сестра, "who lives in Denver" — непарная вставка (дополнительная, необязательная информация) и должна быть выделена запятыми с обеих сторон.',
          },
          {
            id: 'pm-q-5',
            prompt: 'Which choice completes the sentence correctly? "The children left ______ backpacks on the bus."',
            choices: ["their", "there", "they're", "childrens'"],
            correct: 0,
            explanation: 'Нужно притяжательное местоимение "their", согласованное с "children" (множественное число).',
          },
          {
            id: 'pm-q-6',
            prompt: 'Which choice completes the sentence correctly? "The report ______ she submitted contained several errors."',
            choices: ['which', 'that', 'whose', 'who'],
            correct: 1,
            explanation: 'Вставка не выделена запятыми (essential — уточняет, какой именно отчёт), значит по правилу SAT нужно "that", а не "which".',
          },
          {
            id: 'pm-q-7',
            prompt: 'Which choice completes the sentence correctly? "I don\'t know ______ going to win the election."',
            choices: ['whose', "who's", 'who', 'whom'],
            correct: 1,
            explanation: 'Нужно сокращение "who\'s" (= who is), так как речь о том, "кто ЕСТЬ победитель", а не о принадлежности.',
          },
        ],
      },
      {
        id: 'verb-forms-parallelism',
        domainId: 'conventions',
        title: 'Формы глагола и параллельные конструкции',
        subtitle: 'Verb tense/form and parallel structure',
        summary: 'Полный разбор: согласование времён глагола, все правильные формы неправильных глаголов и правило параллельности в списках и сравнениях.',
        lesson: [
          {
            heading: '1. Зачем эта тема важна на SAT',
            body: [
              'Verb forms и parallel structure объединяют две смежные грамматические темы, которые вместе часто встречаются в блоке Standard English Conventions. Обе темы проверяют внимательность к ФОРМЕ слов, а не к смыслу предложения.',
            ],
          },
          {
            heading: '2. Согласование времён (verb tense consistency)',
            body: [
              'Если действие происходит в одно и то же время или в рамках одного и того же повествования, глаголы должны быть в одном и том же времени, если нет явного указания на изменение времени (слов типа "before", "after", "later", "now", "by the time").',
              'Частая ошибка SAT — резкая и немотивированная смена времени в середине предложения или абзаца без причины: "She walks into the room and saw her friend." (неправильно: walks — настоящее, saw — прошедшее, без причины для смены).',
            ],
          },
          {
            heading: '3. Правильные формы глагола (verb form)',
            body: [
              'После вспомогательных глаголов has/have/had всегда идёт причастие прошедшего времени (past participle): has gone, have written, had spoken — а не форма прошедшего времени (went, wrote, spoke).',
              'Некоторые глаголы в английском неправильные (irregular), и их причастие отличается от формы прошедшего времени: go → went → gone; write → wrote → written; break → broke → broken; speak → spoke → spoken; take → took → taken. SAT часто проверяет именно эти неправильные формы.',
            ],
          },
          {
            heading: '4. Present perfect vs past simple — тонкое, но проверяемое различие',
            body: [
              'Present perfect (has/have + past participle) используется для действия, которое началось в прошлом и либо продолжается, либо имеет значение для настоящего момента: "She has lived here for ten years" (всё ещё живёт).',
              'Past simple используется для законченного действия в определённый момент прошлого, часто с указанием точного времени: "She lived there in 2015" (уже не живёт, конкретный момент в прошлом).',
              'Сигналы present perfect: "for", "since", "already", "yet", "just", "ever", "never". Сигналы past simple: конкретные даты, "yesterday", "last year", "ago".',
            ],
          },
          {
            heading: '5. Параллельные конструкции (parallel structure)',
            body: [
              'Если в предложении перечисляется список действий, качеств или объектов (через "and", "or", или в сравнении), все элементы списка должны быть в ОДНОЙ И ТОЙ ЖЕ грамматической форме.',
              'Пример ошибки: "She likes swimming, running, and to bike." — неправильно, потому что "swimming" и "running" (герундий) не согласуются по форме с "to bike" (инфинитив). Правильно: "She likes swimming, running, and biking."',
              'Правило параллельности также применяется в сравнениях с "than" и "as...as": "Her approach is more efficient than following the old method" должно сравнивать сопоставимые вещи по одинаковой форме: "Her approach is more efficient than the old method" или "Following her approach is more efficient than following the old method."',
            ],
            tips: [
              'Быстрый способ проверить параллельность — мысленно "прочитать" список по отдельности, подставляя каждый элемент в общую рамку предложения: если хоть один вариант звучит грамматически странно, список непараллелен.',
            ],
          },
          {
            heading: '6. Параллельность в парных конструкциях (correlative conjunctions)',
            body: [
              'Парные союзы "not only...but also", "either...or", "neither...nor", "both...and" требуют, чтобы части ПОСЛЕ каждого элемента пары были одинаковой грамматической формы.',
              'Пример ошибки: "She not only enjoys reading but also to write." — неправильно, "enjoys reading" (глагол+герундий) не соответствует по форме "to write" (инфинитив). Правильно: "She not only enjoys reading but also enjoys writing" или "She enjoys not only reading but also writing."',
            ],
          },
          {
            heading: '7. Развёрнутый список типичных ошибок',
            body: [
              'Немотивированная смена времени глагола в середине повествования без сигнальных слов.',
              'Использование формы прошедшего времени вместо причастия после has/have/had (особенно с неправильными глаголами).',
              'Нарушение параллельности в списке из трёх элементов, где два в одной форме, а третий — в другой.',
              'Нарушение параллельности в парных союзах (not only...but also и подобные).',
            ],
          },
          {
            heading: '8. Мини-проверка перед практикой',
            body: [
              '"She has ______ (write) three novels since 2015." — какая форма глагола? (Ответ: written — причастие после has)',
              '"The company offers training, mentorship, and ______ (to support/support/supporting) for new employees." — какая форма для параллельности со списком существительных training, mentorship? (Ответ: support — существительное, а не глагол в другой форме)',
            ],
          },
        ],
        examples: [
          {
            id: 'vf-ex-1',
            prompt: 'Which choice completes the sentence correctly? "By the time the guests arrived, she ______ dinner already."',
            choices: ['cooks', 'cooked', 'had cooked', 'was cooking'],
            correct: 2,
            explanation: '"By the time" сигнализирует, что действие завершилось ДО другого прошедшего действия — нужен past perfect: "had cooked".',
          },
          {
            id: 'vf-ex-2',
            prompt: 'Which choice completes the sentence correctly? "She has ______ every book in the school library."',
            choices: ['read', 'readed', 'reading', 'reads'],
            correct: 0,
            explanation: '"Read" в прошедшем времени и в причастии прошедшего времени пишется одинаково — после "has" нужна именно эта форма: "has read".',
          },
          {
            id: 'vf-ex-3',
            prompt: 'Which choice completes the sentence with correct parallel structure? "The coach told the players to warm up, to stretch, and ______ focus on their breathing."',
            choices: ['focusing on', 'to focus on', 'they should focus on', 'focused on'],
            correct: 1,
            explanation: 'Список параллельных действий использует форму "to + глагол": to warm up, to stretch, to focus — все три должны совпадать по форме.',
          },
          {
            id: 'vf-ex-4',
            prompt: 'Which choice completes the sentence correctly? "The committee had already ______ its decision when the new evidence arrived."',
            choices: ['made', 'make', 'making', 'maked'],
            correct: 0,
            explanation: 'После "had already" нужна форма причастия прошедшего времени: "made" (make → made → made).',
          },
          {
            id: 'vf-ex-5',
            prompt: 'Which choice completes the sentence correctly? "She ______ in this city since 2015 and has no plans to leave."',
            choices: ['lived', 'has lived', 'lives', 'was living'],
            correct: 1,
            explanation: '"Since 2015" сигнализирует present perfect: действие началось в прошлом и продолжается до сих пор — "has lived".',
          },
          {
            id: 'vf-ex-6',
            prompt: 'Which choice completes the sentence with correct parallel structure? "The new policy not only reduced costs but also ______ employee satisfaction."',
            choices: ['improving', 'to improve', 'improved', 'improvement'],
            correct: 2,
            explanation: 'После "not only reduced" параллельная часть после "but also" должна быть в той же форме — простое прошедшее время: "improved".',
          },
        ],
        quiz: [
          {
            id: 'vf-q-1',
            prompt: 'Which choice completes the sentence correctly? "By the time the guests arrived, she ______ dinner already."',
            choices: ['cooks', 'cooked', 'had cooked', 'was cooking'],
            correct: 2,
            explanation: '"By the time" сигнализирует, что действие завершилось ДО другого прошедшего действия — нужен past perfect: "had cooked".',
          },
          {
            id: 'vf-q-2',
            prompt: 'Which choice completes the sentence with correct parallel structure? "Her new job requires organizing events, managing budgets, and ______ with clients."',
            choices: ['to communicate', 'communication', 'communicating', 'she communicates'],
            correct: 2,
            explanation: 'Список параллельных обязанностей использует форму герундия: organizing, managing, communicating — все три должны совпадать по форме.',
          },
          {
            id: 'vf-q-3',
            prompt: 'Which choice completes the sentence correctly? "The bridge, which was built in 1920, has ______ several major renovations since then."',
            choices: ['undergo', 'underwent', 'undergone', 'undergoes'],
            correct: 2,
            explanation: 'После "has" нужна форма причастия прошедшего времени неправильного глагола: undergo → underwent → undergone.',
          },
          {
            id: 'vf-q-4',
            prompt: 'Which sentence demonstrates correct parallel structure?',
            choices: [
              'The report was clear, concise, and had good organization.',
              'The report was clear, concise, and well-organized.',
              'The report was clear, conciseness, and organized well.',
              'The report had clarity, was concise, and organized.',
            ],
            correct: 1,
            explanation: 'Все три качества выражены одинаковой формой — прилагательными (clear, concise, well-organized), что соблюдает параллельность.',
          },
          {
            id: 'vf-q-5',
            prompt: 'Which choice completes the sentence correctly? "Yesterday, the scientist walked into the lab and ______ the experiment immediately."',
            choices: ['begins', 'begin', 'began', 'beginning'],
            correct: 2,
            explanation: 'Всё предложение в прошедшем времени ("walked"), поэтому второй глагол должен быть согласован в том же времени: "began".',
          },
          {
            id: 'vf-q-6',
            prompt: 'Which choice completes the sentence correctly? "I ______ this book already, so I don\'t need to borrow it again."',
            choices: ['read', 'have read', 'am reading', 'will read'],
            correct: 1,
            explanation: '"Already" сигнализирует present perfect: действие завершилось, но результат актуален сейчас — "have read".',
          },
          {
            id: 'vf-q-7',
            prompt: 'Which choice completes the sentence with correct parallel structure? "The workshop is designed to help participants build confidence, develop new skills, and ______ their professional network."',
            choices: ['expanding', 'to expand', 'expansion', 'expand'],
            correct: 3,
            explanation: 'Список параллельных инфинитивных глаголов после "to help participants": build, develop, expand — все должны быть в базовой форме без "to" (уже подразумевается общим "to help... build, develop, expand").',
          },
        ],
      },
    ],
  },
];
