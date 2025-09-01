@@ .. @@
 const templates = [
   // Free templates
-  { id: 'template-1', name: 'Modern Professional', price: 0, currency: 'free', preview: 'Clean and modern design with subtle accents' },
-  { id: 'template-2', name: 'Classic Executive', price: 0, currency: 'free', preview: 'Traditional layout perfect for corporate roles' },
-  { id: 'template-3', name: 'Creative Designer', price: 0, currency: 'free', preview: 'Creative layout with unique visual elements' },
+  { id: 'template-1', name: 'Modern Professional', price: 0, priceUSD: 0, preview: 'Clean and modern design with subtle accents' },
+  { id: 'template-2', name: 'Classic Executive', price: 0, priceUSD: 0, preview: 'Traditional layout perfect for corporate roles' },
+  { id: 'template-3', name: 'Creative Designer', price: 0, priceUSD: 0, preview: 'Creative layout with unique visual elements' },
   
   // Premium templates (sample)
-  { id: 'template-4', name: 'Tech Innovator', price: 99, currency: 'INR', priceUSD: 5, preview: 'Perfect for tech professionals and startups' },
-  { id: 'template-5', name: 'Marketing Pro', price: 149, currency: 'INR', priceUSD: 8, preview: 'Designed for marketing and sales professionals' },
-  { id: 'template-6', name: 'Finance Expert', price: 199, currency: 'INR', priceUSD: 12, preview: 'Professional layout for finance professionals' },
-  { id: 'template-7', name: 'Healthcare Professional', price: 179, currency: 'INR', priceUSD: 10, preview: 'Clean design for healthcare workers' },
-  { id: 'template-8', name: 'Academic Scholar', price: 159, currency: 'INR', priceUSD: 9, preview: 'Academic-focused layout with publications section' },
-  { id: 'template-9', name: 'Startup Founder', price: 199, currency: 'INR', priceUSD: 15, preview: 'Dynamic design for entrepreneurs' },
-  { id: 'template-10', name: 'Senior Executive', price: 249, currency: 'INR', priceUSD: 20, preview: 'Premium executive template with sophisticated design' },
+  { id: 'template-4', name: 'Tech Innovator', price: 99, priceUSD: 5, preview: 'Perfect for tech professionals and startups' },
+  { id: 'template-5', name: 'Marketing Pro', price: 149, priceUSD: 8, preview: 'Designed for marketing and sales professionals' },
+  { id: 'template-6', name: 'Finance Expert', price: 199, priceUSD: 12, preview: 'Professional layout for finance professionals' },
+  { id: 'template-7', name: 'Healthcare Professional', price: 179, priceUSD: 10, preview: 'Clean design for healthcare workers' },
+  { id: 'template-8', name: 'Academic Scholar', price: 159, priceUSD: 9, preview: 'Academic-focused layout with publications section' },
+  { id: 'template-9', name: 'Startup Founder', price: 199, priceUSD: 15, preview: 'Dynamic design for entrepreneurs' },
+  { id: 'template-10', name: 'Senior Executive', price: 249, priceUSD: 20, preview: 'Premium executive template with sophisticated design' },
 ];
 
 // Generate more templates to reach 50
 for (let i = 11; i <= 50; i++) {
   templates.push({
     id: `template-${i}`,
     name: `Professional Template ${i}`,
     price: 99 + Math.floor(Math.random() * 100),
-    currency: 'INR',
     priceUSD: 5 + Math.floor(Math.random() * 20),
     preview: `ATS-friendly professional template design ${i}`
   });
 }