import { useState } from 'react';
import { Scissors, Palette, Gift, Heart } from 'lucide-react';
const features = [
  {
    icon: Scissors,
    title: 'טכניקת פיסול ייחודית',
    description: 'אני משתמשת בטכניקות קיפול וחיתוך מדויקות שהופכות ספר רגיל ליצירת אמנות'
  },
  {
    icon: Palette,
    title: 'עיצוב אישי',
    description: 'כל ספר מפוסל מותאם אישית - שמות, תאריכים, סמלים או כל עיצוב שתבחרו'
  },
  {
    icon: Gift,
    title: 'מתנה מושלמת',
    description: 'ספר מפוסל הוא מתנה ייחודית ובלתי נשכחת לכל אירוע - חתונה, בר מצווה, יום הולדת'
  },
  {
    icon: Heart,
    title: 'עבודת יד באהבה',
    description: 'כל יצירה נוצרת בקפידה ובתשומת לב לכל פרט'
  }
];
export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-4 py-2 bg-soft-pink rounded-full text-warm-brown text-sm font-medium mb-4">
            קצת על האמנות
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-deep-brown mb-4 sm:mb-6">
            מה זה פיסול ספרים?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            פיסול ספרים הוא אמנות עתיקה שבה הופכים ספר רגיל ליצירת אמנות תלת-ממדית.
            באמצעות קיפול וחיתוך מדויקים, אני יוצרת דפוסים, מילים וצורות שצצים מתוך דפי הספר.
            כל ספר הוא יצירה חד-פעמית ומיוחדת.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-500 cursor-pointer ${hoveredIndex === index ? 'bg-primary text-white scale-105 shadow-2xl' : 'bg-cream hover:bg-soft-pink'}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`w-10 sm:w-14 h-10 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-colors duration-300 ${hoveredIndex === index ? 'bg-white/20' : 'bg-primary/10'}`}>
                <feature.icon className={`w-5 sm:w-7 h-5 sm:h-7 ${hoveredIndex === index ? 'text-white' : 'text-primary'}`} />
              </div>
              <h3 className={`font-bold text-base sm:text-xl mb-1 sm:mb-2 ${hoveredIndex === index ? 'text-white' : 'text-deep-brown'}`}>
                {feature.title}
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${hoveredIndex === index ? 'text-white/90' : 'text-muted-foreground'}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
