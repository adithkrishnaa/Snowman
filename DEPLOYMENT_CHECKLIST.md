# SEO Deployment Checklist - Snowman Climate Systems

## 🚀 Pre-Deployment (MUST DO)

### 1. Update URLs
- [ ] Replace `https://www.snowmanclimate.com` with your actual domain in:
  - [ ] `src/app/layout.tsx` (line 25)
  - [ ] `public/sitemap.xml` (all URLs)

### 2. Add Verification Codes
- [ ] Get Google Search Console verification code
- [ ] Get Yandex Webmaster verification code
- [ ] Update in `src/app/layout.tsx` (lines 101-102)

### 3. Update Business Info
- [ ] Verify phone number: +90 505 856 20 02
- [ ] Verify email: contact@snowmann.net
- [ ] Add complete business address in schema (currently just "İstanbul")

### 4. Add Required Images
- [ ] Add `/public/logo.png` (for schema markup)
- [ ] Add `/public/og-image.jpg` (1200x630px for social media)
- [ ] Verify all product images are optimized

### 5. Social Media URLs
- [ ] Update Facebook URL in Footer
- [ ] Update Instagram URL in Footer
- [ ] Update Twitter URL in Footer
- [ ] Update LinkedIn URL in Footer

---

## 🧪 Testing (MUST DO)

### Before Deployment:
- [ ] Run `npm run build` successfully
- [ ] Test on localhost:3000
- [ ] Check all pages load correctly
- [ ] Verify language switching works (EN/TR)
- [ ] Test mobile responsiveness

### After Deployment:

#### 1. Basic Functionality
- [ ] Homepage loads
- [ ] All sections visible (Hero, About, Products, Contact)
- [ ] Navigation works
- [ ] Language switch works
- [ ] WhatsApp button works
- [ ] Contact form submits
- [ ] Catalog download works

#### 2. SEO Testing
- [ ] View page source - check meta tags
- [ ] Check robots.txt: `yourdomain.com/robots.txt`
- [ ] Check sitemap: `yourdomain.com/sitemap.xml`
- [ ] Test Google Rich Results: https://search.google.com/test/rich-results
- [ ] Test PageSpeed: https://pagespeed.web.dev/
- [ ] Test Mobile-Friendly: https://search.google.com/test/mobile-friendly

#### 3. Schema Validation
- [ ] Test Organization schema
- [ ] Test LocalBusiness schema
- [ ] Test Product schemas (all 6 products)
- [ ] Test BreadcrumbList schema
- [ ] Use: https://validator.schema.org/

#### 4. Social Media Preview
- [ ] Test Facebook preview: https://developers.facebook.com/tools/debug/
- [ ] Test Twitter preview: https://cards-dev.twitter.com/validator
- [ ] Test LinkedIn preview (share URL)

---

## 📊 Search Engine Setup

### Google Search Console
1. [ ] Go to https://search.google.com/search-console
2. [ ] Add your property (domain)
3. [ ] Verify ownership (using meta tag from layout.tsx)
4. [ ] Submit sitemap.xml
5. [ ] Request indexing for homepage
6. [ ] Set preferred domain (www vs non-www)
7. [ ] Link to Google Analytics

### Yandex Webmaster
1. [ ] Go to https://webmaster.yandex.com
2. [ ] Add your site
3. [ ] Verify ownership (using meta tag)
4. [ ] Submit sitemap.xml
5. [ ] Check indexing status

### Bing Webmaster Tools (Optional)
1. [ ] Go to https://www.bing.com/webmasters
2. [ ] Add your site
3. [ ] Import from Google Search Console (easier)
4. [ ] Submit sitemap.xml

---

## 📈 Analytics Setup

### Google Analytics 4
- [ ] Create GA4 property
- [ ] Add tracking code to layout.tsx
- [ ] Set up conversion goals
- [ ] Enable e-commerce tracking (if needed)
- [ ] Link to Search Console

### Goals to Track:
- [ ] Contact form submissions
- [ ] WhatsApp button clicks
- [ ] Catalog downloads
- [ ] Phone number clicks
- [ ] Email clicks

---

## 🎯 Local SEO Setup

### Google Business Profile
- [ ] Create/claim listing at https://business.google.com
- [ ] Add complete business info:
  - [ ] Business name: Snowman Climate Systems
  - [ ] Category: Air Conditioning Contractor
  - [ ] Address
  - [ ] Phone
  - [ ] Website
  - [ ] Hours
- [ ] Upload photos (logo, products, office)
- [ ] Add services (split klima, inverter klima, etc.)
- [ ] Get customer reviews
- [ ] Post regular updates

### Local Directories (Turkey)
- [ ] Yandex Business
- [ ] Listing Turkey directories
- [ ] Industry-specific directories
- [ ] Social media business pages

---

## 🔍 Monitoring (Week 1-4)

### Daily (First Week):
- [ ] Check Search Console for crawl errors
- [ ] Monitor site uptime
- [ ] Check for broken links
- [ ] Review server logs

### Weekly:
- [ ] Check indexing status
- [ ] Review keyword rankings
- [ ] Monitor Core Web Vitals
- [ ] Check analytics data
- [ ] Review user behavior

### Monthly:
- [ ] Full SEO audit
- [ ] Competitor analysis
- [ ] Content performance review
- [ ] Backlink analysis
- [ ] Update content as needed

---

## ⚠️ Common Issues & Quick Fixes

### Issue: Sitemap returns 404
**Fix**: Ensure `public/sitemap.xml` is deployed
```bash
# Verify file exists
ls public/sitemap.xml
```

### Issue: Robots.txt not working
**Fix**: Check file is in public folder
```bash
# Verify file exists
ls public/robots.txt
```

### Issue: Schema errors in Rich Results
**Fix**: 
1. Check JSON syntax in layout.tsx
2. Validate at schema.org
3. Ensure all required fields are filled

### Issue: Images not optimized
**Fix**:
```bash
# Compress images before deployment
# Use tools like TinyPNG or ImageOptim
```

### Issue: Slow page speed
**Fix**:
1. Enable CDN
2. Check image sizes
3. Review next.config.ts settings
4. Enable caching on server

---

## 📝 Content Optimization (After Launch)

### Week 1-2:
- [ ] Write blog post about klima benefits
- [ ] Create FAQ page with schema
- [ ] Add customer testimonials
- [ ] Create comparison guides

### Month 1:
- [ ] Create individual product pages
- [ ] Add video content
- [ ] Write industry guides
- [ ] Create case studies

### Ongoing:
- [ ] Regular blog posts (2-4 per month)
- [ ] Update product information
- [ ] Add seasonal content
- [ ] Respond to all reviews

---

## 🔐 Security Checklist

- [ ] HTTPS enabled (SSL certificate)
- [ ] Security headers configured (in next.config.ts)
- [ ] No sensitive data in public files
- [ ] Environment variables secured
- [ ] Regular dependency updates
- [ ] Backup strategy in place

---

## 📊 Success Metrics

### Track These KPIs:

#### Week 1:
- [ ] Pages indexed
- [ ] No critical errors in Search Console
- [ ] Rich results showing
- [ ] Social previews working

#### Month 1:
- [ ] 50+ pages indexed (with blog)
- [ ] Ranking for brand name
- [ ] 100+ organic visitors
- [ ] 5+ keyword rankings

#### Month 3:
- [ ] Top 10 for "snowman klima"
- [ ] 500+ organic visitors
- [ ] 20+ keyword rankings
- [ ] 10+ conversions from search

#### Month 6:
- [ ] Top 5 for primary keywords
- [ ] 2000+ organic visitors
- [ ] 50+ keyword rankings
- [ ] 50+ conversions from search

---

## 🎓 Training & Documentation

### For Your Team:
- [ ] Share `SEO_QUICK_REFERENCE.md`
- [ ] Train on adding new products with schema
- [ ] Document content creation process
- [ ] Set up editorial calendar
- [ ] Define review response protocol

---

## 📞 Support & Resources

### If Issues Arise:
1. Check `SEO_IMPLEMENTATION_SUMMARY.md`
2. Review `SEO_QUICK_REFERENCE.md`
3. Test with recommended tools
4. Check Search Console messages
5. Review server logs

### Helpful Tools:
- Google Search Console
- Google Analytics
- PageSpeed Insights
- GTmetrix
- Screaming Frog (for audits)
- Ahrefs/SEMrush (for tracking)

---

## ✅ Final Sign-Off

Before going live, confirm:

- [ ] All URLs updated to production domain
- [ ] Verification codes added
- [ ] Business info complete and accurate
- [ ] All images optimized and uploaded
- [ ] Tested on staging environment
- [ ] Backup created
- [ ] Team trained
- [ ] Monitoring tools set up
- [ ] Analytics configured
- [ ] Search Console ready

---

## 🎉 Post-Launch

### Immediate (Day 1):
- [ ] Submit to Google Search Console
- [ ] Submit to Yandex
- [ ] Share on social media
- [ ] Send to email list
- [ ] Monitor for errors

### Week 1:
- [ ] Review initial analytics
- [ ] Check indexing progress
- [ ] Monitor user feedback
- [ ] Fix any issues found

### Month 1:
- [ ] Full SEO audit
- [ ] Review and optimize
- [ ] Plan content strategy
- [ ] Celebrate launch! 🎊

---

**Deployment Date**: _____________
**Completed By**: _____________
**Verified By**: _____________

---

**Status**: Ready for Deployment ✅

Good luck with your launch! 🚀

