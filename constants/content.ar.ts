import { Chapter } from '../types';

export const tajweedContent: Chapter[] = [
  {
    title: "مقدمة",
    arabicTitle: "اَلْمُقَدِّمَةُ",
    sections: [
      {
        title: "ما هو التجويد؟",
        content: `
          <p dir="rtl" class="mb-4">كلمة "تجويد" تأتي من الجذر العربي <span class="font-bold text-lg text-primary">جَوَّدَ</span>، والذي يعني "التحسين" أو "الإتقان". وفي سياق تلاوة القرآن الكريم، التجويد هو العلم الذي يمكننا من نطق كل حرف بشكل صحيح من مخرجه، مع إعطائه جميع صفاته.</p>
          <p dir="rtl">قال الله <span dir="rtl">سُبْحَانَهُ وَ تَعَالَى</span>:</p>
          <blockquote dir="rtl" class="my-4 text-2xl text-center font-serif">
            ﴿ وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا ﴾
          </blockquote>
          <p dir="rtl">"ورتل القرآن ترتيلاً" (سورة المزمل، الآية 4). هذه التلاوة الصحيحة هي جوهر علم التجويد.</p>
        `
      },
    ],
    exercises: [
      {
        question: "ماذا تعني كلمة 'تجويد' لغوياً؟",
        options: ["التلاوة السريعة", "التحسين أو الإتقان", "حفظ القرآن", "الكتابة الجميلة"],
        correctAnswer: 1,
      }
    ]
  },
  {
    title: "اللحن في التلاوة",
    arabicTitle: "اَللَّحْنُ",
    sections: [
      {
        title: "أنواع الأخطاء",
        content: `
          <p dir="rtl" class="mb-4">اللحن هو الخطأ في تلاوة القرآن الكريم. وهناك نوعان من الأخطاء:</p>
          <div dir="rtl" class="space-y-4">
            <div class="p-4 border rounded-lg bg-secondary">
              <h4 class="font-bold text-primary">1. اللحن الجلي</h4>
              <p class="text-sm">هو خطأ فادح يغير معنى الآيات أو القواعد النحوية. يمكن أن يكون بتغيير حرف أو حركة. هذا النوع من الخطأ يعتبر <span class="font-bold">حرامًا</span>.</p>
              <p class="text-sm mt-2">مثال: تلاوة <span class="font-serif">أَنْعَمْتَ</span> بضمة (<span class="font-serif">أَنْعَمْتُ</span>) يغير المعنى من "أنت أنعمت" إلى "أنا أنعمت".</p>
            </div>
            <div class="p-4 border rounded-lg bg-secondary">
              <h4 class="font-bold text-primary">2. اللحن الخفي</h4>
              <p class="text-sm">هو خطأ بسيط لا يغير المعنى ولكنه يخل بكمال التلاوة. يتعلق بعدم الالتزام بقاعدة من قواعد التجويد، مثل ترك الغنة أو المد. هذا النوع من الخطأ يعتبر <span class="font-bold">مكروهًا</span>.</p>
            </div>
          </div>
        `
      }
    ],
    exercises: [
        {
          question: "أي نوع من اللحن يعتبر 'حراماً'؟",
          options: ["اللحن الخفي", "اللحن الجلي", "كلاهما حرام", "لا شيء منهما حرام"],
          correctAnswer: 1,
        }
      ]
  },
  {
    title: "مخارج الحروف",
    arabicTitle: "مَخَارِجُ الْحُرُوفِ",
    sections: [
      {
        title: "المخارج الخمسة الرئيسية",
        content: `
          <p dir="rtl" class="mb-4">هناك 17 مخرجًا خاصًا للحروف، مجمعة في 5 مناطق رئيسية:</p>
          <ul class="list-disc list-inside space-y-3 text-right">
            <li><span class="font-bold text-primary">الجوف</span>: الفراغ في الفم والحلق. هو مخرج حروف المد الثلاثة (الألف، الواو، الياء).</li>
            <li><span class="font-bold text-primary">الحلق</span>: يحتوي على 3 مخارج لـ 6 أحرف (ء، هـ، ع، ح، غ، خ).</li>
            <li><span class="font-bold text-primary">اللسان</span>: أكبر منطقة، بها 10 مخارج لـ 18 حرفًا.</li>
            <li><span class="font-bold text-primary">الشفتان</span>: مخرجان لـ 4 أحرف (ف، ب، م، و).</li>
            <li><span class="font-bold text-primary">الخيشوم</span>: مخرج الصوت الأنفي (الغنة) الذي يصاحب حرفي النون والميم.</li>
          </ul>
        `
      },
    ],
    exercises: [
        {
          question: "من أي منطقة تخرج حروف المد (الألف، الواو، الياء)؟",
          options: ["الحلق", "اللسان", "الجوف", "الشفتان"],
          correctAnswer: 2,
        }
      ]
  },
  {
    title: "صفات الحروف",
    arabicTitle: "صِفَاتُ الْحُرُوفِ",
    sections: [
      {
        title: "الصفات المتضادة",
        content: `
          <p dir="rtl" class="mb-4">كل حرف له مجموعة من الصفات التي تحدده. معظم هذه الصفات تعمل في أزواج متضادة. هناك 5 أزواج رئيسية:</p>
          <div dir="rtl" class="grid md:grid-cols-2 gap-4">
            <div class="p-4 border rounded-lg bg-secondary">
              <h4 class="font-bold text-primary">1. الهمس مقابل الجهر</h4>
              <p class="text-sm">وجود (الهمس) أو انعدام (الجهر) جريان النفس عند النطق.</p>
            </div>
            <div class="p-4 border rounded-lg bg-secondary">
              <h4 class="font-bold text-primary">2. الشدة مقابل الرخاوة</h4>
              <p class="text-sm">انقطاع (الشدة) أو استمرارية (الرخاوة) جريان الصوت. وهناك حالة وسطى: التوسط.</p>
            </div>
            <div class="p-4 border rounded-lg bg-secondary">
              <h4 class="font-bold text-primary">3. الاستعلاء مقابل الاستفال</h4>
              <p class="text-sm">ارتفاع (الاستعلاء) أو انخفاض (الاستفال) مؤخرة اللسان.</p>
            </div>
            <div class="p-4 border rounded-lg bg-secondary">
              <h4 class="font-bold text-primary">4. الإطباق مقابل الانفتاح</h4>
              <p class="text-sm">التصاق (الإطباق) أو انفصال (الانفتاح) جزء من اللسان مع الحنك الأعلى.</p>
            </div>
          </div>
        `
      }
    ],
    exercises: [
        {
          question: "أي صفة من صفات الحروف تتعلق بارتفاع مؤخرة اللسان؟",
          options: ["الهمس", "الشدة", "الاستعلاء", "الإطباق"],
          correctAnswer: 2,
        }
      ]
  },
  {
    title: "لام التعريف",
    arabicTitle: "أَحْكَامُ اَلْ",
    sections: [
      {
        title: "الحروف القمرية والشمسية",
        content: `
          <p dir="rtl" class="mb-4">لام التعريف "ال" تُنطق بطريقتين مختلفتين حسب الحرف الذي يليها:</p>
          <ul dir="rtl" class="space-y-4 text-right">
            <li><strong class="text-primary">القمرية</strong>: تُنطق لام التعريف بوضوح. وهذا ينطبق على 14 حرفًا مجموعة في عبارة: <span class="font-serif">ابْغِ حَجَّكَ وَخَفْ عَقِيمَهُ</span>.</li>
            <li><strong class="text-primary">الشمسية</strong>: تُدغم لام التعريف (لا تُنطق) ويُشدد الحرف الذي يليها (يَحمل شدة <span class="font-serif"> ّ </span>). وهذا ينطبق على الـ 14 حرفًا المتبقية من الأبجدية.</li>
          </ul>
        `
      }
    ],
    exercises: [
        {
          question: "عند تلاوة كلمة 'الشَّمْسُ'، كيف يكون حكم لام 'ال' التعريف؟",
          options: ["تُنطق بوضوح (إظهار)", "تُدغم (لا تُنطق)", "يُوقف عليها", "يتم مدها"],
          correctAnswer: 1,
        }
      ]
  },
  {
    title: "الاستعاذة والبسملة",
    arabicTitle: "اَلْاِسْتِعَاذَةُ وَ اَلْبَسْمَلَةُ",
    sections: [
       {
        title: "صيغ الافتتاح",
        content: `
          <p dir="rtl" class="mb-4">قبل البدء في تلاوة القرآن، يُستحب النطق بصيغتين:</p>
          <ul dir="rtl" class="space-y-4 text-right">
            <li><strong class="text-primary">الاستعاذة</strong>: هي طلب اللجوء إلى الله من الشيطان. صيغتها: <span class="font-serif text-lg">أَعُوذُ بِاللهِ مِنَ الشَّيْطَانِ الرَّجِيمِ</span>. تُقال في بداية كل تلاوة.</li>
            <li><strong class="text-primary">البسملة</strong>: هي قول <span class="font-serif text-lg">بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ</span>. تُقال في بداية كل سورة، باستثناء سورة التوبة.</li>
          </ul>
          <p dir="rtl" class="mt-4">هناك عدة طرق لوصل هذه الصيغ ببداية السورة، وأكثرها شيوعًا هو الوقف بين كل جزء.</p>
        `
      }
    ],
    exercises: [
        {
          question: "ما هي السورة التي لا نبدأها بالبسملة؟",
          options: ["الفاتحة", "البقرة", "التوبة", "الناس"],
          correctAnswer: 2,
        }
      ]
  },
  {
    title: "الغنة",
    arabicTitle: "اَلْغُنَّةُ",
    sections: [
      {
        title: "الصوت الأنفي",
        content: `
          <p dir="rtl" class="mb-4">الغنة هي صوت أنفي يخرج من الخيشوم. وهي صفة ملازمة لحرفي النون (<span class="font-serif">ن</span>) والميم (<span class="font-serif">م</span>).</p>
          <p dir="rtl">يختلف زمن الغنة وشدتها حسب حالة هذين الحرفين. تكون في أكمل وأطول صورها عندما تكون النون أو الميم مشددتين (<span class="font-serif">نّ, مّ</span>) أو في حالة الإدغام.</p>
        `
      }
    ],
    exercises: [
        {
          question: "ما هما الحرفان اللذان تلازمهما صفة الغنة دائمًا؟",
          options: ["القاف والطاء", "اللام والراء", "النون والميم", "العين والحاء"],
          correctAnswer: 2,
        }
      ]
  },
  {
    title: "أحكام النون الساكنة والتنوين",
    arabicTitle: "أَحْكَامُ النُّونِ السَّاكِنَةِ وَالتَّنْوِينِ",
    sections: [
      {
        title: "الأحكام الأربعة",
        content: `
          <p dir="rtl" class="mb-4">عندما تأتي النون الساكنة (<span class="font-serif">نْ</span>) أو التنوين (<span class="font-serif">ـًـــٍـــٌ</span>) متبوعة بحرف آخر، يطبق أحد الأحكام الأربعة التالية:</p>
          <ul dir="rtl" class="space-y-4 text-right">
            <li><strong class="text-primary">1. الإظهار</strong>: تُنطق النون بوضوح، دون غنة مطولة. يحدث هذا مع حروف الحلق الستة (ء، هـ، ع، ح، غ، خ).</li>
            <li><strong class="text-primary">2. الإدغام</strong>: تندمج النون في الحرف التالي. يحدث هذا مع حروف كلمة <span class="font-bold">يَرْمَلُون</span>. يمكن أن يكون بغنة أو بدونها.</li>
            <li><strong class="text-primary">3. الإقلاب</strong>: تتحول النون إلى صوت ميم (<span class="font-serif">م</span>) مع الغنة. يحدث هذا فقط مع حرف الباء (<span class="font-serif">ب</span>).</li>
            <li><strong class="text-primary">4. الإخفاء</strong>: تُنطق النون بطريقة "مخفية"، بين الإظهار والإدغام، مع غنة. يحدث هذا مع الـ 15 حرفًا المتبقية من الأبجدية.</li>
          </ul>
        `
      }
    ],
    exercises: [
        {
          question: "ما هو الحكم الذي يطبق على النون الساكنة (نْ) إذا جاء بعدها حرف الباء (ب)؟",
          options: ["الإظهار", "الإدغام", "الإقلاب", "الإخفاء"],
          correctAnswer: 2,
        }
      ]
  },
  {
    title: "حكم الميم والنون المشددتين",
    arabicTitle: "حُكْمُ الْمِيمِ وَالنُّونِ الْمُشَدَّدَتَيْنِ",
    sections: [
        {
            title: "الغنة الواجبة",
            content: `
                <p dir="rtl" class="mb-4">عندما تحمل الميم (<span class="font-serif">م</span>) أو النون (<span class="font-serif">ن</span>) شدة (<span class="font-serif"> ّ </span>)، فإنه من الواجب تطبيق غنة بمقدار حركتين.</p>
                <p dir="rtl">هذا هو أعلى مستوى للغنة.</p>
                <div class="mt-4 space-y-2">
                    <p dir="rtl" class="text-xl text-center font-serif text-foreground">مثال مع النون: <span class="text-primary">إِنَّ</span>, <span class="text-primary">الْجَنَّةِ</span></p>
                    <p dir="rtl" class="text-xl text-center font-serif text-foreground">مثال مع الميم: <span class="text-primary">ثُمَّ</span>, <span class="text-primary">عَمَّ</span></p>
                </div>
            `
        }
    ],
    exercises: [
        {
            question: "ما هو مقدار زمن الغنة في النون أو الميم المشددتين؟",
            options: ["حركة واحدة", "حركتان", "ثلاث حركات", "لا توجد غنة"],
            correctAnswer: 1,
        }
    ]
  },
  {
    title: "أحكام الميم الساكنة",
    arabicTitle: "أَحْكَامُ الْمِيمِ السَّاكِنَةِ",
    sections: [
      {
        title: "الأحكام الثلاثة للميم الساكنة",
        content: `
          <p dir="rtl" class="mb-4">لحرف الميم الساكن (<span class="font-serif">مْ</span>)، هناك ثلاثة أحكام حسب الحرف الذي يليه:</p>
          <ul dir="rtl" class="space-y-4 text-right">
            <li><strong class="text-primary">1. الإخفاء الشفوي</strong>: تُخفى الميم مع غنة عندما يتبعها حرف الباء (<span class="font-serif">ب</span>).</li>
            <li><strong class="text-primary">2. الإدغام الشفوي</strong>: تُدغم الميم في الميم التي تليها، مع غنة كاملة. يُطلق عليه أيضًا إدغام مثلين صغير.</li>
            <li><strong class="text-primary">3. الإظهار الشفوي</strong>: تُنطق الميم بوضوح، بدون غنة، عندما يتبعها أي من الحروف الـ 26 المتبقية.</li>
          </ul>
        `
      }
    ],
    exercises: [
        {
          question: "ما هو الحكم الذي يطبق على الميم الساكنة (مْ) إذا جاء بعدها حرف ميم آخر (م)؟",
          options: ["الإخفاء الشفوي", "الإدغام الشفوي", "الإظهار الشفوي", "القلقلة"],
          correctAnswer: 1,
        }
      ]
  },
  {
    title: "أحكام المدود",
    arabicTitle: "أَحْكَامُ الْمُدُودِ",
    sections: [
      {
        title: "أنواع المد",
        content: `
          <p dir="rtl" class="mb-4">المد يعني "الإطالة". هناك فئتان رئيسيتان:</p>
          <div dir="rtl" class="space-y-4">
            <div class="p-4 border rounded-lg bg-secondary">
              <h4 class="font-bold text-primary">1. المد الأصلي (أو الطبيعي)</h4>
              <p class="text-sm">هو المد الأساسي بمقدار حركتين لحروف المد (ا, و, ي) عندما لا يتبعها همزة (ء) أو سكون (ـْ).</p>
            </div>
            <div class="p-4 border rounded-lg bg-secondary">
              <h4 class="font-bold text-primary">2. المد الفرعي</h4>
              <p class="text-sm">هو مد أطول من الطبيعي، سببه وجود همزة (ء) أو سكون (ـْ) بعد حرف المد. ينقسم إلى عدة فئات فرعية مثل المد الواجب المتصل، والجائز المنفصل، واللازم، إلخ، بأزمنة تتراوح من 4 إلى 6 حركات.</p>
            </div>
          </div>
        `
      }
    ],
    exercises: [
        {
          question: "ما هو مقدار زمن المد الأصلي (الطبيعي)؟",
          options: ["حركة واحدة", "حركتان", "أربع حركات", "ست حركات"],
          correctAnswer: 1,
        }
      ]
  },
  {
    title: "القلقلة",
    arabicTitle: "اَلْقَلْقَلَةُ",
    sections: [
      {
        title: "الاهتزاز",
        content: `
          <p dir="rtl" class="mb-4">القلقلة هي اهتزاز أو ارتداد الصوت الناتج عن نطق بعض الحروف عندما تكون ساكنة (<span class="font-serif">ـْ</span>).</p>
          <p dir="rtl">حروف القلقلة الخمسة مجموعة في عبارة <span class="font-serif font-bold text-primary">قُطْبُ جَدٍ</span> (ق, ط, ب, ج, د).</p>
          <p dir="rtl" class="mt-4">هناك ثلاثة مستويات من الشدة:</p>
          <ul dir="rtl" class="list-disc list-inside space-y-2 text-right">
            <li><strong>قلقلة صغرى</strong>: في وسط الكلمة.</li>
            <li><strong>قلقلة كبرى</strong>: في نهاية الكلمة عند الوقف، على حرف غير مشدد.</li>
            <li><strong>قلقلة أكبر</strong>: في نهاية الكلمة عند الوقف، على حرف يحمل شدة (<span class="font-serif"> ّ </span>).</li>
          </ul>
        `
      }
    ],
    exercises: [
        {
          question: "أي من هذه الحروف ليس من حروف القلقلة؟",
          options: ["ق", "ب", "م", "د"],
          correctAnswer: 2,
        }
      ]
  },
  {
    title: "أحكام الراء",
    arabicTitle: "أَحْكَامُ الرَّاءِ",
    sections: [
      {
        title: "تفخيم وترقيق الراء",
        content: `
          <p dir="rtl" class="mb-4">حرف الراء (<span class="font-serif">ر</span>) يمكن أن يُنطق بشكل مفخم (تفخيم) أو مرقق (ترقيق).</p>
          <ul dir="rtl" class="space-y-4 text-right">
            <li><strong class="text-primary">التفخيم</strong>: تُنطق الراء بشكل "سميك" أو "ممتلئ". يحدث هذا بشكل أساسي عندما تحمل فتحة أو ضمة.</li>
            <li><strong class="text-primary">الترقيق</strong>: تُنطق الراء بشكل "رفيع" أو "خفيف". يحدث هذا بشكل أساسي عندما تحمل كسرة.</li>
          </ul>
          <p dir="rtl" class="mt-4">تطبق قواعد مفصلة عندما تكون الراء ساكنة، بناءً على حركة الحرف الذي يسبقها أو يتبعها.</p>
        `
      }
    ],
    exercises: [
        {
          question: "متى تُنطق الراء (ر) بالترقيق بشكل عام؟",
          options: ["عندما تكون مفتوحة", "عندما تكون مضمومة", "عندما تكون مكسورة", "عندما تكون ساكنة"],
          correctAnswer: 2,
        }
      ]
  },
  {
    title: "أحكام اللام ولفظ الجلالة",
    arabicTitle: "أَحْكَامُ اللَّامِ",
    sections: [
        {
            title: "تفخيم وترقيق اللام",
            content: `
                <p dir="rtl" class="mb-4">بشكل عام، يُنطق حرف اللام (<span class="font-serif">ل</span>) دائمًا بالترقيق (بخفة).</p>
                <p dir="rtl">الاستثناء الوحيد هو اللام في لفظ الجلالة <span class="font-bold text-primary">الله</span>. يعتمد حكمها على حركة الحرف الذي يسبقها:</p>
                <ul dir="rtl" class="list-disc list-inside space-y-3 mt-4 text-right">
                    <li><span class="font-bold text-primary">التفخيم</span>: تفخم اللام إذا سبقتها فتحة أو ضمة. <br>مثال: <span class="font-serif">قَالَ اللهُ</span>, <span class="font-serif">عَبْدُ اللهِ</span></li>
                    <li><span class="font-bold text-primary">الترقيق</span>: ترقق اللام إذا سبقتها كسرة.<br>مثال: <span class="font-serif">بِسْمِ اللهِ</span></li>
                </ul>
            `
        }
    ],
    exercises: [
        {
            question: "في عبارة 'بِسْمِ اللهِ'، كيف تُنطق لام لفظ الجلالة 'الله'؟",
            options: ["بالتفخيم", "بالترقيق", "لا يتغير نطقها", "بالقلقلة"],
            correctAnswer: 1,
        }
    ]
  },
  {
    title: "أحكام الهمزة",
    arabicTitle: "أَحْكَامُ الْهَمْزَةِ",
    sections: [
        {
            title: "همزة القطع وهمزة الوصل",
            content: `
                <p dir="rtl" class="mb-4">هناك نوعان من الهمزة في اللغة العربية:</p>
                <div dir="rtl" class="space-y-4">
                    <div class="p-4 border rounded-lg bg-secondary">
                        <h4 class="font-bold text-primary">1. همزة القطع</h4>
                        <p class="text-sm">تُكتب (ء) وتُنطق في جميع الأحوال، سواء كانت في بداية الكلمة أو وسطها أو نهايتها، وسواء بدأنا بها التلاوة أو وصلناها بما قبلها. <br>مثال: <span class="font-serif">أَحَدٌ</span>, <span class="font-serif">سَأَلَ</span>, <span class="font-serif">شَيْءٌ</span></p>
                    </div>
                    <div class="p-4 border rounded-lg bg-secondary">
                        <h4 class="font-bold text-primary">2. همزة الوصل</h4>
                        <p class="text-sm">تُمثل بألف (<span class="font-serif">ا</span>) بدون رمز الهمزة. لا تُنطق إلا إذا بدأنا التلاوة بالكلمة. أما إذا سبقتها كلمة أخرى في التلاوة، فإنها تسقط (لا تُنطق)، مما يضمن الوصل. توجد بشكل أساسي في أداة التعريف <span class="font-serif">ال</span> وفي بداية بعض الأفعال. <br>مثال: <span class="font-serif">ٱهْدِنَا</span> (تُنطق 'اِهْدِنَا' في البداية)، ولكن <span class="font-serif">فَٱذْهَبْ</span> (تُنطق 'فَذْهَبْ' عند الوصل).</p>
                    </div>
                </div>
            `
        }
    ],
    exercises: [
        {
            question: "أي نوع من الهمزة لا يُنطق عند وصل الكلام؟",
            options: ["همزة القطع", "همزة الوصل", "كلاهما", "لا شيء منهما"],
            correctAnswer: 1,
        }
    ]
  },
  {
    title: "الوقف والابتداء",
    arabicTitle: "اَلْوَقْفُ وَ الْاِبْتِدَاءُ",
    sections: [
        {
            title: "قواعد الوقف",
            content: `
                <p dir="rtl" class="mb-4">الوقف هو التوقف، والابتداء هو البدء من جديد. معرفة أين تتوقف وأين تبدأ أمر ضروري للحفاظ على معنى القرآن.</p>
                <p dir="rtl">تصنف الوقوفات إلى عدة فئات:</p>
                <ul dir="rtl" class="list-disc list-inside space-y-3 text-right">
                    <li><span class="font-bold text-primary">الوقف التام</span>: الوقف في مكان يكتمل فيه المعنى ولا يرتبط بما بعده نحويًا. استئناف التلاوة بالكلمة التالية صحيح.</li>
                    <li><span class="font-bold text-primary">الوقف الكافي</span>: المعنى كامل، ولكن هناك ارتباط نحوي بما بعده. الوقف جيد والابتداء بما بعده جيد.</li>
                    <li><span class="font-bold text-primary">الوقف الحسن</span>: الوقف على كلمة ذات معنى، ولكنها مرتبطة بشدة بما بعدها. الأفضل هو المواصلة، ولكن إذا توقفت، يجب أن تعود للكلمة السابقة لاستئناف التلاوة.</li>
                    <li><span class="font-bold text-primary">الوقف القبيح</span>: الوقف في مكان يغير المعنى. يجب تجنبه، إلا للضرورة (مثل ضيق التنفس). وفي هذه الحالة، يجب العودة إلى نقطة سابقة لاستعادة المعنى الصحيح.</li>
                </ul>
                <p dir="rtl" class="mt-4">يستخدم القرآن رموزًا لإرشاد القارئ حول الوقوفات الموصى بها (<span class="font-serif">م</span>)، المسموح بها (<span class="font-serif">ج</span>)، الأفضلية للمواصلة (<span class="font-serif">صلى</span>)، الأفضلية للوقف (<span class="font-serif">قلى</span>)، أو الممنوعة (<span class="font-serif">لا</span>).</p>
            `
        }
    ],
    exercises: [
        {
            question: "أي نوع من الوقف يجب تجنبه لأنه قد يفسد المعنى؟",
            options: ["الوقف التام", "الوقف الكافي", "الوقف القبيح", "الوقف الحسن"],
            correctAnswer: 2,
        }
    ]
  },
  {
    title: "خاتمة",
    arabicTitle: "خَاتِمَةٌ",
    sections: [
        {
            title: "أهمية الممارسة",
            content: `
                <p dir="rtl" class="mb-4">علم التجويد بحر من المعرفة هدفه النهائي هو تزيين تلاوة كلام الله كما أنزل على النبي محمد (صلى الله عليه وسلم).</p>
                <p dir="rtl">إتقان هذه القواعد لا يأتي بالنظرية فقط، بل بشكل أساسي بالاستماع اليقظ، والتكرار، والتصحيح على يد معلم متقن.</p>
                <blockquote dir="rtl" class="my-4 text-lg text-center font-serif">
                    "وكل حرف له مخرج يخرج منه على وجه الصواب."
                </blockquote>
                <p dir="rtl">نسأل الله أن ييسر لنا تعلم التجويد وتطبيقه بشكل صحيح، وأن يجعل القرآن ربيع قلوبنا.</p>
            `
        }
    ],
    exercises: [
        {
            question: "ما هي أهم طريقة لإتقان علم التجويد؟",
            options: ["قراءة الكتب فقط", "مشاهدة الفيديوهات", "الممارسة مع معلم متقن", "استخدام تطبيقات الجوال"],
            correctAnswer: 2,
        }
    ]
  },
];