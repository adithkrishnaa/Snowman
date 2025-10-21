# Bilingual SEO Setup - English Default with Turkish Support

## 🌍 Language Configuration

### Default Language: **English** 🇬🇧
### Supported Language: **Turkish** 🇹🇷

The website displays **English content by default** and users can switch to Turkish using the language selector in the header.

---

## 📋 Implementation Details

### 1. Meta Tags & SEO (English Primary)

**File: `src/app/layout.tsx`**

```typescript
// Primary language: English
title: "Snowman Split AC & Inverter Air Conditioning Systems"
description: "Turkey's leading manufacturer of split air conditioners..."
locale: "en_US"
alternateLocale: ["tr_TR"]
lang="en" // HTML lang attribute
```

### 2. Content Structure

All visible content is controlled by the language context:

**File: `src/lib/language-context.tsx`**

```typescript
const [language, setLanguage] = useState<Language>("en"); // Default to English

const translations = {
  en: {
    "hero.title": "Snowman Split & Inverter Air Conditioning Systems",
    "hero.subtitle": "Turkey's leading manufacturer...",
    // ... English translations
  },
  tr: {
    "hero.title": "Snowman Split Klima ve İnverter Klima Sistemleri",
    "hero.subtitle": "Türkiye'nin lider duvar tipi klima...",
    // ... Turkish translations
  }
}
```

### 3. Product Data (Bilingual)

**File: `src/components/product.tsx`**

Products have both English and Turkish fields:

```typescript
{
  id: 1,
  name: "Split Air Conditioning Systems",          // English (displayed by default)
  nameTr: "Split Klima Sistemleri",                // Turkish (when switched)
  description: "Energy-efficient wall-mounted...",  // English
  descriptionTr: "Ev ve ofisler için...",          // Turkish
  features: ["A++ Energy Class", "WiFi Control"], // English
  featuresTr: ["A++ Enerji Sınıfı", "WiFi Kontrol"], // Turkish
  category: "Split AC",                            // English
  categoryTr: "Split Klima",                       // Turkish
}
```

---

## 🔍 SEO Keywords (Both Languages)

### English Keywords (Primary for SEO)
- split air conditioner
- wall mounted AC
- air conditioning prices
- inverter AC
- commercial HVAC systems
- AC installation
- energy efficient air conditioning

### Turkish Keywords (Secondary for SEO)
- split klima
- duvar tipi klima
- klima fiyatları
- inverter klima
- ticari klima sistemleri

Both sets are included in meta keywords for maximum search visibility!

---

## 🎯 How It Works

### When Page Loads:
1. ✅ English content displays automatically
2. ✅ English meta tags in `<head>`
3. ✅ `lang="en"` on HTML element
4. ✅ Turkish keywords still included in meta for SEO

### When User Clicks Language Switcher:
1. ✅ Language state changes to "tr"
2. ✅ All `t("key")` functions return Turkish translations
3. ✅ UI updates instantly with Turkish content
4. ✅ Product names, descriptions, features show in Turkish
5. ✅ Meta tags remain (already set on page load)

---

## 📄 Page Structure

```html
<html lang="en">  <!-- English by default -->
  <head>
    <!-- English meta tags -->
    <title>Snowman Split AC & Inverter Air Conditioning Systems</title>
    <meta name="description" content="Turkey's leading manufacturer..." />
    
    <!-- Includes BOTH English and Turkish keywords -->
    <meta name="keywords" content="split air conditioner, inverter AC, split klima, klima fiyatları..." />
    
    <!-- Hreflang for both languages -->
    <link rel="alternate" hreflang="en" href="..." />
    <link rel="alternate" hreflang="tr" href="..." />
  </head>
  
  <body>
    <!-- Content changes based on language state -->
    <h2>{t("hero.title")}</h2>  
    <!-- Shows English by default, Turkish when switched -->
  </body>
</html>
```

---

## 🔄 Language Switching

### User Experience:
1. User sees English content on first visit
2. User clicks language switcher (🇬🇧 → 🇹🇷)
3. All text changes to Turkish instantly
4. User clicks again (🇹🇷 → 🇬🇧)
5. Back to English

### Technical Flow:
```typescript
// In Header component
<button onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}>
  {language === 'en' ? '🇹🇷 TR' : '🇬🇧 EN'}
</button>

// Language context automatically updates all t() calls
t("hero.title") 
// Returns: "Snowman Split & Inverter..." (EN)
// Or: "Snowman Split Klima ve İnverter..." (TR)
```

---

## 🎨 SEO Benefits of This Approach

### ✅ Advantages:
1. **English Primary** - Better for international SEO
2. **Turkish Support** - Serves local Turkish market
3. **Dual Keywords** - Ranks for both English and Turkish searches
4. **Clean URLs** - No `/en` or `/tr` URL complexity
5. **Fast Switching** - Instant language change (no page reload)
6. **Single Sitemap** - One URL with hreflang tags

### 📊 Search Engine Behavior:
- **Google.com (International)**: Sees English meta tags → Shows English results
- **Google.com.tr (Turkey)**: Sees hreflang + Turkish keywords → Can show Turkish
- **Both**: Site ranks for BOTH language keywords

---

## 🛠️ Updating Content

### To Add New Translation:

1. **Update Language Context** (`src/lib/language-context.tsx`):
```typescript
translations: {
  en: {
    "new.key": "English text",
  },
  tr: {
    "new.key": "Türkçe metin",
  }
}
```

2. **Use in Component**:
```tsx
const { t } = useLanguage();
<p>{t("new.key")}</p>
```

### To Add New Product:

**In `src/components/product.tsx`**:
```typescript
{
  id: 7,
  name: "English Product Name",
  nameTr: "Türkçe Ürün Adı",
  description: "English description",
  descriptionTr: "Türkçe açıklama",
  features: ["English feature 1", "English feature 2"],
  featuresTr: ["Türkçe özellik 1", "Türkçe özellik 2"],
  category: "Category in English",
  categoryTr: "Türkçe Kategori",
  price: "₺XX,XXX",
  brand: "Snowman",
  image: ProductImage,
}
```

---

## 🌐 Sitemap & Hreflang

**File: `public/sitemap.xml`**

Each URL has hreflang tags for both languages:

```xml
<url>
  <loc>https://www.snowmanclimate.com/</loc>
  <xhtml:link rel="alternate" hreflang="en" href="https://www.snowmanclimate.com/" />
  <xhtml:link rel="alternate" hreflang="tr" href="https://www.snowmanclimate.com/" />
</url>
```

This tells search engines:
- Same URL serves both languages
- Content adapts based on user preference
- Rank appropriately for each language

---

## 📱 User Flow Examples

### Example 1: English-speaking Visitor
1. Visits site → Sees English content
2. Reads about products in English
3. Contacts via form (English labels)
4. Downloads catalog
5. ✅ Perfect experience

### Example 2: Turkish-speaking Visitor
1. Visits site → Sees English (default)
2. Clicks 🇹🇷 TR button
3. Everything switches to Turkish
4. Reads "Split Klima" instead of "Split AC"
5. Fills form with Turkish labels
6. ✅ Perfect experience

### Example 3: Search Engine
1. **Google.com**: Indexes English content
   - Shows: "Snowman Split AC & Inverter..."
   
2. **Google.com.tr**: Sees hreflang + keywords
   - Can show: Results with Turkish snippet
   - Or: English title with Turkish keywords

---

## 🎯 Best Practices

### ✅ DO:
- Keep English as default (broader reach)
- Ensure ALL content has Turkish translation
- Use `t()` function for ALL user-facing text
- Test language switcher regularly
- Keep keywords updated in both languages

### ❌ DON'T:
- Hard-code text in components (always use `t()`)
- Forget to add Turkish translations for new features
- Remove English keywords thinking Turkish is primary
- Create separate pages for languages (use switcher)

---

## 🔧 Testing Checklist

- [ ] Page loads in English by default
- [ ] Language switcher visible in header
- [ ] Click switcher → All text changes to Turkish
- [ ] Hero section shows Turkish title
- [ ] Products show Turkish names/descriptions
- [ ] Contact form labels in Turkish
- [ ] Footer content in Turkish
- [ ] Click switcher again → Back to English
- [ ] All functionality works in both languages

---

## 📊 Analytics Tracking

### Recommended Events:
```typescript
// Track language changes
gtag('event', 'language_change', {
  'from': 'en',
  'to': 'tr'
});
```

### Metrics to Monitor:
- % of users switching to Turkish
- Session duration by language
- Conversion rate by language
- Popular products by language

---

## 🚀 Future Enhancements

### Possible Additions:
1. **Auto-detect user language**:
   ```typescript
   useState<Language>(
     navigator.language.startsWith('tr') ? 'tr' : 'en'
   );
   ```

2. **Remember preference** (localStorage):
   ```typescript
   useEffect(() => {
     const saved = localStorage.getItem('language');
     if (saved) setLanguage(saved);
   }, []);
   ```

3. **Add more languages** (German, Arabic, etc.):
   ```typescript
   type Language = "en" | "tr" | "de" | "ar";
   ```

---

## 📝 Summary

### Current Setup:
- ✅ **Default**: English content
- ✅ **Switch**: Turkish content on demand
- ✅ **SEO**: Optimized for both languages
- ✅ **UX**: Seamless language switching
- ✅ **No UI changes**: Design stays perfect

### SEO Coverage:
- **English Keywords**: Primary optimization
- **Turkish Keywords**: Included for local search
- **Meta Tags**: English (broader reach)
- **Hreflang**: Both languages declared
- **Schema**: English with Turkish alt names

---

**Perfect for**: Global reach with strong Turkish market support! 🌍🇹🇷

**Status**: ✅ Fully Implemented & Ready

---

**Need to change default to Turkish?**
Simply change one line in `src/lib/language-context.tsx`:
```typescript
const [language, setLanguage] = useState<Language>("tr"); // Changed from "en"
```

