import { Chapter } from '../types';

export const tajweedContent: Chapter[] = [
  {
    title: "Introduction",
    arabicTitle: "اَلْمُقَدِّمَةُ",
    sections: [
      {
        title: "Qu'est-ce que le Tadjwîd?",
        content: `
          <p class="mb-4">Le mot Tadjwîd vient de la racine arabe <span dir="rtl" class="font-bold text-lg text-primary">جَوَّدَ</span> qui signifie « rendre meilleur » ou « améliorer ». Dans le contexte de la récitation du Coran, le Tadjwîd est la science qui permet de prononcer chaque lettre correctement, depuis son point d'articulation (makhraj), en lui donnant toutes ses caractéristiques (sifât).</p>
          <p>Allâh <span dir="rtl">سُبْحَانَهُ وَ تَعَالَى</span> a dit :</p>
          <blockquote dir="rtl" class="my-4 text-2xl text-center font-serif">
            ﴿ وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا ﴾
          </blockquote>
          <p>« Et récite le Coran, lentement et correctement » (Sourate Al-Muzzammil, verset 4). Cette récitation correcte est l'essence même du Tadjwîd.</p>
        `
      },
    ],
    exercises: [
      {
        question: "Que signifie le mot 'Tadjwîd' linguistiquement ?",
        options: ["Réciter rapidement", "Améliorer ou rendre meilleur", "Mémoriser le Coran", "Écrire joliment"],
        correctAnswer: 1,
      }
    ]
  },
  {
    title: "La Faute dans la Lecture",
    arabicTitle: "اَللَّحْنُ",
    sections: [
      {
        title: "Les Types d'Erreurs",
        content: `
          <p class="mb-4">Le Lahn (<span dir="rtl">اَللَّحْنُ</span>) est l'erreur dans la lecture du Saint Coran. Il existe deux types d'erreurs :</p>
          <div class="space-y-4">
            <div class="p-4 border rounded-lg bg-secondary">
              <h4 class="font-bold text-primary">1. Al-Lahn al-Jaliy (<span dir="rtl">اَللَّحْنُ الْجَلِيُّ</span>) - La Faute Évidente</h4>
              <p class="text-sm">C'est une erreur grave qui change le sens des versets ou la grammaire. Cela peut être le changement d'une lettre ou d'une voyelle. Ce type d'erreur est considéré comme <span class="font-bold">haram (interdit)</span>.</p>
              <p class="text-sm mt-2">Exemple : Réciter <span dir="rtl">أَنْعَمْتَ</span> avec une damma (<span dir="rtl">أَنْعَمْتُ</span>) change le sens de "Tu as comblé de bienfaits" à "J'ai comblé de bienfaits".</p>
            </div>
            <div class="p-4 border rounded-lg bg-secondary">
              <h4 class="font-bold text-primary">2. Al-Lahn al-Khafiy (<span dir="rtl">اَللَّحْنُ الْخَفِيُّ</span>) - La Faute Subtile</h4>
              <p class="text-sm">C'est une erreur mineure qui ne change pas le sens mais qui va à l'encontre de la perfection de la récitation. Elle concerne le non-respect d'une règle de Tadjwîd, comme l'omission d'une ghounna (nasalisation) ou d'une prolongation. Ce type d'erreur est considéré comme <span class="font-bold">makrûh (détestable)</span>.</p>
            </div>
          </div>
        `
      }
    ],
    exercises: [
        {
          question: "Quel type de faute (Lahn) est considéré comme 'haram' (interdit) ?",
          options: ["Al-Lahn al-Khafiy (subtile)", "Al-Lahn al-Jaliy (évidente)", "Les deux sont haram", "Aucun n'est haram"],
          correctAnswer: 1,
        }
      ]
  },
  {
    title: "Points d'Articulation",
    arabicTitle: "مَخَارِجُ الْحُرُوفِ",
    sections: [
      {
        title: "Les 5 Points d'Articulation Fondamentaux",
        content: `
          <p class="mb-4">Il y a 17 points de sortie spécifiques (makhâridj) qui sont regroupés en 5 zones principales :</p>
          <ul class="list-disc list-inside space-y-3">
            <li><span class="font-bold text-primary">Le vide (Al-Jawf - <span dir="rtl">اَلْجَوْفُ</span>)</span> : L'espace vide dans la bouche et la gorge. C'est le point de sortie des 3 voyelles longues (Alif, Wâw, Yâ).</li>
            <li><span class="font-bold text-primary">La gorge (Al-Halq - <span dir="rtl">اَلْحَلْقُ</span>)</span> : Elle contient 3 points de sortie pour 6 lettres (ء, هـ, ع, ح, غ, خ).</li>
            <li><span class="font-bold text-primary">La langue (Al-Lisân - <span dir="rtl">اَللِّسَانُ</span>)</span> : La plus grande zone, avec 10 points de sortie pour 18 lettres.</li>
            <li><span class="font-bold text-primary">Les lèvres (Ach-Chafatân - <span dir="rtl">اَلشَّفَتَانِ</span>)</span> : Deux points de sortie pour 4 lettres (ف, ب, م, و).</li>
            <li><span class="font-bold text-primary">La cavité nasale (Al-Khaychoûm - <span dir="rtl">اَلْخَيْشُومُ</span>)</span> : Le point de sortie du son nasalisé (ghounna) qui accompagne les lettres ن et م.</li>
          </ul>
        `
      },
    ],
    exercises: [
        {
          question: "De quelle zone d'articulation sortent les voyelles longues (Alif, Wâw, Yâ) ?",
          options: ["La gorge (Al-Halq)", "La langue (Al-Lisân)", "Le vide (Al-Jawf)", "Les lèvres (Ach-Chafatân)"],
          correctAnswer: 2,
        }
      ]
  },
  {
    title: "Caractéristiques des Lettres",
    arabicTitle: "صِفَاتُ الْحُرُوفِ",
    sections: [
      {
        title: "Traits avec Opposés",
        content: `
          <p class="mb-4">Chaque lettre possède un ensemble de caractéristiques (sifât) qui la définit. La plupart de ces caractéristiques fonctionnent par paires opposées. Il y a 5 paires principales :</p>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-4 border rounded-lg bg-secondary">
              <h4 class="font-bold text-primary">1. Al-Hams (<span dir="rtl">اَلْهَمْسُ</span>) vs. Al-Jahr (<span dir="rtl">اَلْجَهْرُ</span>)</h4>
              <p class="text-sm">Présence (Hams) ou absence (Jahr) d'un écoulement d'air lors de la prononciation.</p>
            </div>
            <div class="p-4 border rounded-lg bg-secondary">
              <h4 class="font-bold text-primary">2. Ach-Chidda (<span dir="rtl">اَلشِّدَّةُ</span>) vs. Ar-Rakhâwa (<span dir="rtl">اَلرَّخَاوَةُ</span>)</h4>
              <p class="text-sm">Interruption (Chidda) ou continuité (Rakhâwa) de l'écoulement du son. Une position intermédiaire existe : At-Tawassout.</p>
            </div>
            <div class="p-4 border rounded-lg bg-secondary">
              <h4 class="font-bold text-primary">3. Al-Isti'lâ (<span dir="rtl">اَلْاِسْتِعْلَاءُ</span>) vs. Al-Istifâl (<span dir="rtl">اَلْاِسْتِفَالُ</span>)</h4>
              <p class="text-sm">Élévation (Isti'lâ) ou abaissement (Istifâl) de l'arrière de la langue.</p>
            </div>
            <div class="p-4 border rounded-lg bg-secondary">
              <h4 class="font-bold text-primary">4. Al-Itbâq (<span dir="rtl">اَلْإِطْبَاقُ</span>) vs. Al-Infitâh (<span dir="rtl">اَلْاِنْفِتَاحُ</span>)</h4>
              <p class="text-sm">Adhésion (Itbâq) ou séparation (Infitâh) d'une partie de la langue avec le palais.</p>
            </div>
          </div>
        `
      }
    ],
    exercises: [
        {
          question: "Quelle caractéristique des lettres est liée à l'élévation de l'arrière de la langue ?",
          options: ["Al-Hams (le chuchotement)", "Ach-Chidda (l'intensité)", "Al-Isti'lâ (l'élévation)", "Al-Itbâq (l'adhésion)"],
          correctAnswer: 2,
        }
      ]
  },
  {
    title: "L'article « Al »",
    arabicTitle: "أَحْكَامُ اَلْ",
    sections: [
      {
        title: "Lettres Lunaires et Solaires",
        content: `
          <p class="mb-4">L'article défini <span dir="rtl">ال</span> se prononce de deux manières différentes selon la lettre qui le suit :</p>
          <ul class="space-y-4">
            <li><strong class="text-primary">Al-Qamariyyah (<span dir="rtl">اَلْقَمَرِيَّةُ</span>) - Les lettres lunaires</strong>: Le <span dir="rtl">ل</span> de l'article est prononcé clairement. Cela concerne 14 lettres regroupées dans la phrase : <span dir="rtl" class="font-serif">ابْغِ حَجَّكَ وَخَفْ عَقِيمَهُ</span>.</li>
            <li><strong class="text-primary">Ach-Chamsiyyah (<span dir="rtl">اَلشَّمْسِيَّةُ</span>) - Les lettres solaires</strong>: Le <span dir="rtl">ل</span> de l'article est assimilé (n'est pas prononcé) et la lettre qui suit porte une chadda (<span dir="rtl"> ّ </span>). Cela concerne les 14 autres lettres de l'alphabet.</li>
          </ul>
        `
      }
    ],
    exercises: [
        {
          question: "Lors de la lecture du mot 'الشَّمْسُ', comment se comporte la lettre ل de l'article 'ال' ?",
          options: ["Elle est prononcée clairement", "Elle est assimilée (non prononcée)", "Elle est prononcée avec une pause", "Elle est prolongée"],
          correctAnswer: 1,
        }
      ]
  },
  {
    title: "Al-Isti’âdha et Al-Basmala",
    arabicTitle: "اَلْاِسْتِعَاذَةُ وَ اَلْبَسْمَلَةُ",
    sections: [
       {
        title: "Les Formules d'Ouverture",
        content: `
          <p class="mb-4">Avant de commencer la récitation du Coran, il est recommandé de prononcer deux formules :</p>
          <ul class="space-y-4">
            <li><strong class="text-primary">Al-Isti’âdha (<span dir="rtl">اَلْاِسْتِعَاذَةُ</span>)</strong>: C'est le fait de chercher refuge auprès d'Allah contre Satan. La formule est : <span dir="rtl" class="font-serif text-lg">أَعُوذُ بِاللهِ مِنَ الشَّيْطَانِ الرَّجِيمِ</span>. Elle est récitée au début de toute lecture.</li>
            <li><strong class="text-primary">Al-Basmala (<span dir="rtl">اَلْبَسْمَلَةُ</span>)</strong>: C'est la formule <span dir="rtl" class="font-serif text-lg">بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ</span>. Elle est récitée au début de chaque sourate, à l'exception de la sourate At-Tawbah.</li>
          </ul>
          <p class="mt-4">Il existe plusieurs manières d'enchaîner ces formules avec le début de la sourate, l'option la plus courante étant de marquer une pause entre chaque partie.</p>
        `
      }
    ],
    exercises: [
        {
          question: "Devant quelle sourate ne récite-t-on PAS la Basmala ?",
          options: ["Al-Fatiha", "Al-Baqara", "At-Tawbah", "An-Nas"],
          correctAnswer: 2,
        }
      ]
  },
  {
    title: "La Ghounna",
    arabicTitle: "اَلْغُنَّةُ",
    sections: [
      {
        title: "La Nasalisation",
        content: `
          <p class="mb-4">La Ghounna (<span dir="rtl">اَلْغُنَّةُ</span>) est un son nasal qui sort de la cavité nasale (<span dir="rtl">اَلْخَيْشُومُ</span>). C'est une caractéristique inhérente aux lettres Noûn (<span dir="rtl">ن</span>) et Mîm (<span dir="rtl">م</span>).</p>
          <p>La durée et l'intensité de la Ghounna varient selon l'état de ces deux lettres. Elle est la plus complète et la plus longue lorsque le Noûn ou le Mîm portent une Chadda (<span dir="rtl">نّ, مّ</span>) ou lors d'un Idghâm.</p>
        `
      }
    ],
    exercises: [
        {
          question: "Quelles sont les deux lettres qui sont toujours accompagnées de la Ghounna (nasalisation) ?",
          options: ["ق et ط", "ل et ر", "ن et م", "ع et ح"],
          correctAnswer: 2,
        }
      ]
  },
  {
    title: "Règles du Noûn Sâkina",
    arabicTitle: "أَحْكَامُ النُّونِ السَّاكِنَةِ وَالتَّنْوِينِ",
    sections: [
      {
        title: "Les 4 règles",
        content: `
          <p class="mb-4">Lorsque la lettre Noûn sans voyelle (<span dir="rtl">نْ</span>) ou un tanwîn (<span dir="rtl">ـًـــٍـــٌ</span>) est suivie par une autre lettre, une des quatre règles suivantes s'applique :</p>
          <ul class="space-y-4">
            <li><strong class="text-primary">1. Al-Izhâr (<span dir="rtl">اَلْإِظْهَارُ</span>) - La clarification</strong>: Le Noûn est prononcé clairement, sans nasalisation prolongée. Cela se produit avec les 6 lettres de la gorge (ء, هـ, ع, ح, غ, х).</li>
            <li><strong class="text-primary">2. Al-Idghâm (<span dir="rtl">اَلْإِدْغَامُ</span>) - L'assimilation</strong>: Le Noûn fusionne avec la lettre suivante. Cela se produit avec les lettres du mot <span dir="rtl" class="font-bold">يَرْمَلُون</span>. Il peut être avec ghounna (nasalisation) ou sans.</li>
            <li><strong class="text-primary">3. Al-Iqlâb (<span dir="rtl">اَلْإِقْلَابُ</span>) - La substitution</strong>: Le Noûn se transforme en un son de Mîm (<span dir="rtl">م</span>) avec nasalisation. Cela se produit uniquement avec la lettre Bâ (<span dir="rtl">ب</span>).</li>
            <li><strong class="text-primary">4. Al-Ikhfâ (<span dir="rtl">اَلْإِخْفَاءُ</span>) - La dissimulation</strong>: Le Noûn est prononcé de manière "cachée", entre l'Izhâr et l'Idghâm, avec une nasalisation. Cela se produit avec les 15 lettres restantes de l'alphabet.</li>
          </ul>
        `
      }
    ],
    exercises: [
        {
          question: "Quelle règle s'applique à la Noûn Sâkina (نْ) suivie de la lettre Bâ (ب) ?",
          options: ["Al-Izhâr (Clarification)", "Al-Idghâm (Assimilation)", "Al-Iqlâb (Substitution)", "Al-Ikhfâ (Dissimulation)"],
          correctAnswer: 2,
        }
      ]
  },
  {
    title: "Règles du Mîm et Noûn Mouchaddatayn",
    arabicTitle: "حُكْمُ الْمِيمِ وَالنُّونِ الْمُشَدَّدَتَيْنِ",
    sections: [
        {
            title: "La Ghounna Obligatoire",
            content: `
                <p class="mb-4">Lorsqu'un Mîm (<span dir="rtl">م</span>) ou un Noûn (<span dir="rtl">ن</span>) porte une Chadda (<span dir="rtl"> ّ </span>), il est obligatoire d'appliquer une Ghounna (nasalisation) d'une durée de deux temps.</p>
                <p>C'est le niveau le plus élevé de la Ghounna.</p>
                <div class="mt-4 space-y-2">
                    <p dir="rtl" class="text-xl text-center font-serif text-foreground">Exemple avec Noûn : <span class="text-primary">إِنَّ</span>, <span class="text-primary">الْجَنَّةِ</span></p>
                    <p dir="rtl" class="text-xl text-center font-serif text-foreground">Exemple avec Mîm : <span class="text-primary">ثُمَّ</span>, <span class="text-primary">عَمَّ</span></p>
                </div>
            `
        }
    ],
    exercises: [
        {
            question: "Quelle est la durée de la Ghounna pour un Noûn ou un Mîm Mouchaddad (avec Chadda) ?",
            options: ["Un temps", "Deux temps", "Trois temps", "Pas de Ghounna"],
            correctAnswer: 1,
        }
    ]
  },
  {
    title: "Règles du Mîm Sâkina",
    arabicTitle: "أَحْكَامُ الْمِيمِ السَّاكِنَةِ",
    sections: [
      {
        title: "Les 3 Règles du Mîm non vocalisé",
        content: `
          <p class="mb-4">Pour la lettre Mîm sans voyelle (<span dir="rtl">مْ</span>), il existe trois règles selon la lettre qui la suit :</p>
          <ul class="space-y-4">
            <li><strong class="text-primary">1. Ikhfâ' Chafawî (<span dir="rtl">اَلْإِخْفَاءُ الشَّفَوِيُّ</span>) - La dissimulation labiale</strong>: Le Mîm est dissimulé avec une Ghounna lorsqu'il est suivi d'un Bâ (<span dir="rtl">ب</span>).</li>
            <li><strong class="text-primary">2. Idghâm Chafawî (<span dir="rtl">اَلْإِدْغَامُ الشَّفَوِيُّ</span>) - L'assimilation labiale</strong>: Le Mîm s'assimile dans le Mîm suivant, avec une Ghounna complète. On l'appelle aussi Idghâm Mithlayn Saghîr.</li>
            <li><strong class="text-primary">3. Izhâr Chafawî (<span dir="rtl">اَلْإِظْهَارُ الشَّفَوِيُّ</span>) - La clarification labiale</strong>: Le Mîm est prononcé clairement, sans Ghounna, lorsqu'il est suivi par l'une des 26 lettres restantes.</li>
          </ul>
        `
      }
    ],
    exercises: [
        {
          question: "Quelle règle s'applique à un Mîm Sâkina (مْ) suivi d'un autre Mîm (م) ?",
          options: ["Ikhfâ' Chafawî", "Idghâm Chafawî", "Izhâr Chafawî", "Qalqalah"],
          correctAnswer: 1,
        }
      ]
  },
  {
    title: "Règles des Prolongations",
    arabicTitle: "أَحْكَامُ الْمُدُودِ",
    sections: [
      {
        title: "Types de Madd",
        content: `
          <p class="mb-4">Le Madd (<span dir="rtl">اَلْمَدُّ</span>) signifie "prolongation". Il existe deux catégories principales :</p>
          <div class="space-y-4">
            <div class="p-4 border rounded-lg bg-secondary">
              <h4 class="font-bold text-primary">1. Al-Madd Al-Aslî (ou At-Tabî'î) - La prolongation naturelle</h4>
              <p class="text-sm">C'est la prolongation de base de 2 temps pour les voyelles longues (ا, و, ي) lorsqu'elles ne sont suivies ni d'une Hamza (ء) ni d'un Soukoûn (ـْ).</p>
            </div>
            <div class="p-4 border rounded-lg bg-secondary">
              <h4 class="font-bold text-primary">2. Al-Madd Al-Far'î - La prolongation secondaire</h4>
              <p class="text-sm">C'est une prolongation plus longue que la naturelle, causée par la présence d'une Hamza (ء) ou d'un Soukoûn (ـْ) après la lettre de Madd. Elle se divise en plusieurs sous-catégories comme le Madd Al-Wâjib Al-Mouttasil, Al-Jâ'iz Al-Mounfasil, Al-Lâzim, etc., avec des durées allant de 4 à 6 temps.</p>
            </div>
          </div>
        `
      }
    ],
    exercises: [
        {
          question: "Quelle est la durée de base d'un Madd Al-Aslî (prolongation naturelle) ?",
          options: ["1 temps", "2 temps", "4 temps", "6 temps"],
          correctAnswer: 1,
        }
      ]
  },
  {
    title: "La Qalqalah",
    arabicTitle: "اَلْقَلْقَلَةُ",
    sections: [
      {
        title: "La Résonance",
        content: `
          <p class="mb-4">La Qalqalah (<span dir="rtl">اَلْقَلْقَلَةُ</span>) est une vibration ou un rebond du son produit lors de la prononciation de certaines lettres lorsqu'elles portent un Soukoûn (<span dir="rtl">ـْ</span>).</p>
          <p>Les 5 lettres de la Qalqalah sont regroupées dans l'expression <span dir="rtl" class="font-serif font-bold text-primary">قُطْبُ جَدٍ</span> (ق, ط, ب, ج, د).</p>
          <p class="mt-4">Il existe trois niveaux d'intensité :</p>
          <ul class="list-disc list-inside space-y-2">
            <li><strong>Qalqalah Soughra (mineure)</strong>: Au milieu d'un mot.</li>
            <li><strong>Qalqalah Koubra (moyenne)</strong>: À la fin d'un mot lors d'un arrêt, sur une lettre non-mouchaddadah.</li>
            <li><strong>Qalqalah Akbar (majeure)</strong>: À la fin d'un mot lors d'un arrêt, sur une lettre portant une Chadda (<span dir="rtl"> ّ </span>).</li>
          </ul>
        `
      }
    ],
    exercises: [
        {
          question: "Laquelle de ces lettres n'est PAS une lettre de Qalqalah ?",
          options: ["ق", "ب", "م", "د"],
          correctAnswer: 2,
        }
      ]
  },
  {
    title: "Règles du Râ'",
    arabicTitle: "أَحْكَامُ الرَّاءِ",
    sections: [
      {
        title: "Tafkhîm et Tarqîq du Râ'",
        content: `
          <p class="mb-4">La lettre Râ' (<span dir="rtl">ر</span>) peut être prononcée de manière emphatique (Tafkhîm) ou légère (Tarqîq).</p>
          <ul class="space-y-4">
            <li><strong class="text-primary">Tafkhîm (<span dir="rtl">اَلتَّفْخِيمُ</span>) - Emphase</strong>: Le Râ' est prononcé de manière "épaisse" ou "pleine". Cela se produit principalement lorsqu'il porte une Fatha ou une Damma.</li>
            <li><strong class="text-primary">Tarqîq (<span dir="rtl">اَلتَّرْقِيقُ</span>) - Légèreté</strong>: Le Râ' est prononcé de manière "fine" ou "légère". Cela se produit principalement lorsqu'il porte une Kasra.</li>
          </ul>
          <p class="mt-4">Des règles détaillées s'appliquent lorsque le Râ' porte un Soukoûn, en fonction de la voyelle de la lettre qui le précède ou le suit.</p>
        `
      }
    ],
    exercises: [
        {
          question: "Quand la lettre Râ' (ر) est-elle généralement prononcée avec Tarqîq (légèreté) ?",
          options: ["Quand elle a une Fatha", "Quand elle a une Damma", "Quand elle a une Kasra", "Quand elle a un Soukoûn"],
          correctAnswer: 2,
        }
      ]
  },
  {
    title: "Règles du Lâm et du Nom 'Allah'",
    arabicTitle: "أَحْكَامُ اللَّامِ",
    sections: [
        {
            title: "Tafkhîm et Tarqîq du Lâm",
            content: `
                <p class="mb-4">En règle générale, la lettre Lâm (<span dir="rtl">ل</span>) est toujours prononcée avec Tarqîq (légèreté).</p>
                <p>La seule exception est le Lâm dans le nom majestueux <span dir="rtl" class="font-bold text-primary">الله</span>. Son traitement dépend de la voyelle de la lettre qui le précède :</p>
                <ul class="list-disc list-inside space-y-3 mt-4">
                    <li><span class="font-bold text-primary">Tafkhîm (Emphase)</span>: Le Lâm est emphatique s'il est précédé d'une Fatha ou d'une Damma. <br>Ex: <span dir="rtl" class="font-serif">قَالَ اللهُ</span>, <span dir="rtl" class="font-serif">عَبْدُ اللهِ</span></li>
                    <li><span class="font-bold text-primary">Tarqîq (Légèreté)</span>: Le Lâm est léger s'il est précédé d'une Kasra.<br>Ex: <span dir="rtl" class="font-serif">بِسْمِ اللهِ</span></li>
                </ul>
            `
        }
    ],
    exercises: [
        {
            question: "Dans 'بِسْمِ اللهِ', comment est prononcé le Lâm de 'الله' ?",
            options: ["Avec Tafkhîm (emphase)", "Avec Tarqîq (légèreté)", "Ça ne change pas", "Avec une Qalqalah"],
            correctAnswer: 1,
        }
    ]
  },
  {
    title: "Règles de la Hamza",
    arabicTitle: "أَحْكَامُ الْهَمْزَةِ",
    sections: [
        {
            title: "Hamzatoul-Qat' et Hamzatoul-Wasl",
            content: `
                <p class="mb-4">Il existe deux types de Hamza en arabe :</p>
                <div class="space-y-4">
                    <div class="p-4 border rounded-lg bg-secondary">
                        <h4 class="font-bold text-primary">1. Hamzatoul-Qat' (<span dir="rtl">هَمْزَةُ الْقَطْعِ</span>) - Hamza de coupure</h4>
                        <p class="text-sm">Elle est écrite (ء) et prononcée en toutes circonstances, que ce soit au début, au milieu ou à la fin d'un mot, et que l'on commence la lecture par elle ou qu'on la lise en liaison. <br>Ex: <span dir="rtl" class="font-serif">أَحَدٌ</span>, <span dir="rtl" class="font-serif">سَأَلَ</span>, <span dir="rtl" class="font-serif">شَيْءٌ</span></p>
                    </div>
                    <div class="p-4 border rounded-lg bg-secondary">
                        <h4 class="font-bold text-primary">2. Hamzatoul-Wasl (<span dir="rtl">هَمْزَةُ الْوَصْلِ</span>) - Hamza de liaison</h4>
                        <p class="text-sm">Elle est représentée par un Alif (<span dir="rtl">ا</span>) sans le signe de la Hamza. Elle n'est prononcée que si l'on commence la lecture par ce mot. Si elle est précédée par un autre mot dans la lecture, elle est omise (non prononcée), assurant ainsi la liaison. On la trouve principalement dans l'article défini <span dir="rtl">ال</span> et au début de certains verbes. <br>Ex: <span dir="rtl" class="font-serif">ٱهْدِنَا</span> (prononcée 'Ihdinâ' au début), mais <span dir="rtl" class="font-serif">فَٱذْهَبْ</span> (prononcée 'fadh-hab' en liaison).</p>
                    </div>
                </div>
            `
        }
    ],
    exercises: [
        {
            question: "Quel type de Hamza n'est pas prononcé lorsqu'il est au milieu d'une phrase (en liaison) ?",
            options: ["Hamzatoul-Qat'", "Hamzatoul-Wasl", "Les deux", "Aucun des deux"],
            correctAnswer: 1,
        }
    ]
  },
  {
    title: "L'Arrêt et la Reprise",
    arabicTitle: "اَلْوَقْفُ وَ الْاِبْتِدَاءُ",
    sections: [
        {
            title: "Les Règles de la Pause",
            content: `
                <p class="mb-4">Al-Waqf (<span dir="rtl">اَلْوَقْفُ</span>) est l'arrêt, et Al-Ibtidâ' (<span dir="rtl">اَلْاِبْتِدَاءُ</span>) est la reprise. Savoir où s'arrêter et où reprendre est essentiel pour préserver le sens du Coran.</p>
                <p>Les arrêts sont classifiés en plusieurs catégories :</p>
                <ul class="list-disc list-inside space-y-3">
                    <li><span class="font-bold text-primary">Al-Waqf at-Tâm (L'arrêt complet)</span>: L'arrêt à un endroit où le sens est complet et n'a pas de lien grammatical avec ce qui suit. Reprendre par le mot suivant est correct.</li>
                    <li><span class="font-bold text-primary">Al-Waqf al-Kâfî (L'arrêt suffisant)</span>: Le sens est complet, mais il y a un lien grammatical avec ce qui suit. L'arrêt est bon et la reprise est bonne.</li>
                    <li><span class="font-bold text-primary">Al-Waqf al-Hasan (Le bon arrêt)</span>: L'arrêt sur un mot qui a un sens, mais est fortement lié à ce qui suit. Il est préférable de continuer, mais si l'on s'arrête, il faut reprendre à partir du mot précédent.</li>
                    <li><span class="font-bold text-primary">Al-Waqf al-Qabîh (Le mauvais arrêt)</span>: L'arrêt à un endroit qui altère le sens. Il doit être évité, sauf en cas de nécessité (souffle court). Dans ce cas, il faut reprendre à partir d'un point antérieur pour restaurer le sens correct.</li>
                </ul>
                <p class="mt-4">Le Coran utilise des symboles pour guider le lecteur sur les arrêts recommandés (<span dir="rtl">م</span>), permis (<span dir="rtl">ج</span>), préférables pour continuer (<span dir="rtl">صلى</span>), préférables pour s'arrêter (<span dir="rtl">قلى</span>), ou interdits (<span dir="rtl">لا</span>).</p>
            `
        }
    ],
    exercises: [
        {
            question: "Quel type d'arrêt (Waqf) doit être évité car il peut altérer le sens ?",
            options: ["Al-Waqf at-Tâm (complet)", "Al-Waqf al-Kâfî (suffisant)", "Al-Waqf al-Qabîh (mauvais)", "Al-Waqf al-Hasan (bon)"],
            correctAnswer: 2,
        }
    ]
  },
  {
    title: "Conclusion",
    arabicTitle: "خَاتِمَةٌ",
    sections: [
        {
            title: "L'Importance de la Pratique",
            content: `
                <p class="mb-4">La science du Tadjwîd est une mer de connaissances dont le but ultime est d'embellir la récitation de la parole d'Allah, comme elle a été révélée au Prophète Muhammad (paix et bénédictions sur lui).</p>
                <p>La maîtrise de ces règles ne s'acquiert pas seulement par la théorie, mais surtout par l'écoute attentive, la répétition et la correction auprès d'un enseignant qualifié.</p>
                <blockquote class="my-4 text-lg text-center font-serif">
                    « Toute lettre a un point de sortie par lequel elle sort de façon juste. »
                </blockquote>
                <p>Puisse Allah nous faciliter l'apprentissage et la mise en pratique correcte du Tadjwîd et faire du Coran le printemps de nos cœurs.</p>
            `
        }
    ],
    exercises: [
        {
            question: "Quelle est la méthode la plus importante pour maîtriser le Tadjwîd ?",
            options: ["Lire des livres uniquement", "Regarder des vidéos", "Pratiquer avec un enseignant qualifié", "Utiliser des applications mobiles"],
            correctAnswer: 2,
        }
    ]
  },
];