import { ExternalLink } from 'lucide-react';
import lilouPortrait from '@/assets/uploads/lilou-portrait.png';

export default function AboutMe() {
  return (
    <section data-ev-id="ev_8bdb9d7a8a" id="about-me" className="py-16 sm:py-24 bg-white">
      <div data-ev-id="ev_c6f3097d89" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div data-ev-id="ev_a215f07069" className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div data-ev-id="ev_bcc9818360" className="relative order-2 md:order-1">
            <div data-ev-id="ev_f5acf63375" className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl max-w-sm mx-auto md:max-w-none">
              <img data-ev-id="ev_1b860ed4b2"
              src={lilouPortrait}
              alt="להב, יוצרת הספרים המפוסלים של Lilou Books"
              loading="lazy"
              className="w-full h-auto object-cover" />

            </div>
            {/* Decorative elements - hidden on mobile */}
            <div data-ev-id="ev_9fcc77813e" className="hidden sm:block absolute -bottom-6 -right-6 w-24 md:w-32 h-24 md:h-32 bg-primary/10 rounded-full -z-10" />
            <div data-ev-id="ev_4a85749b2b" className="hidden sm:block absolute -top-6 -left-6 w-20 md:w-24 h-20 md:h-24 bg-soft-pink rounded-full -z-10" />
          </div>

          {/* Content */}
          <div data-ev-id="ev_672cef154a" className="flex flex-col gap-4 sm:gap-6 order-1 md:order-2">
            <span data-ev-id="ev_b935d57e22" className="inline-block px-4 py-2 bg-soft-pink rounded-full text-warm-brown text-sm font-medium w-fit">
              הסיפור שלי
            </span>
            <h2 data-ev-id="ev_e836daf485" className="font-display text-3xl sm:text-4xl md:text-5xl text-deep-brown">
              היי, אני להב
            </h2>
            <p data-ev-id="ev_8cf903905c" className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              מה שהתחיל כמתנה לחברה הכי טובה, הפך במהרה לעשרות בקשות ממשפחה, חברים ומכרים. אנשים התאהבו ברעיון שספר ישן יכול להפוך למתנה כל כך מרגשת ומשמעותית - לא רק חפץ דקורטיבי, אלא סיפור שלם שמספר על אהבה, זיכרון או רגע מיוחד בחיים.
            </p>
            <p data-ev-id="ev_4da667ec01" className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              כשהבנתי שיש ביקוש אמיתי לאמנות הזו, החלטתי להפוך את התשוקה שלי למקצוע. ליוויתי את הידע שצברתי בתואר השני במנהל עסקים וטכנולוגיה עם האהבה שלי ליצירה בידיים, והקמתי את Lilou Books.
            </p>
            <p data-ev-id="ev_4ac78f0231" className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              היום אני לא רק יוצרת ספרים מפוסלים בהזמנה אישית, אלא גם מעבירה סדנאות שבהן אני משתפת את הטכניקות שלמדתי ואת האהבה לאומנות הזו. כל סדנה היא הזדמנות לראות איך אנשים מגלים את היכולת שלהם ליצור משהו יפה, משמעותי ומיוחד בידיים שלהם.
            </p>
            
            {/* Ynet Article Link */}
            <a data-ev-id="ev_4047178770"
            href="https://www.ynetnews.com/culture/article/bkdbzv3ubx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-2 sm:mt-4 px-4 sm:px-6 py-3 sm:py-4 bg-cream hover:bg-soft-pink rounded-xl sm:rounded-2xl transition-all duration-300 group w-full sm:w-fit">

              <div data-ev-id="ev_7214e253fd" className="flex flex-col flex-1">
                <span data-ev-id="ev_2037122a1a" className="text-xs sm:text-sm text-warm-brown font-medium">כתבו עליי ב-Ynet Global</span>
                <span data-ev-id="ev_da2e63501e" className="text-deep-brown font-bold text-sm sm:text-base">קראו את הכתבה המלאה</span>
              </div>
              <ExternalLink className="w-5 h-5 text-primary group-hover:translate-x-[-4px] transition-transform flex-shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>);

}
