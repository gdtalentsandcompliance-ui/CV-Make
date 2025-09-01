@@ .. @@
           <div>
             <label className="block text-sm font-medium text-gray-700 mb-1">
               Project Description
             </label>
+            <p className="text-xs text-gray-500 mb-2">
+              Use bullet points for better formatting. Each line will become a bullet point in the PDF.
+            </p>
             <textarea
               rows={3}
               value={project.description}
               onChange={(e) => updateProject(index, 'description', e.target.value)}
               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
-              placeholder="Describe your project, its impact, and your role..."
+              placeholder="Built a full-stack e-commerce platform with user authentication&#10;Implemented secure payment processing using Stripe API&#10;Achieved 99.9% uptime with automated testing and deployment"
             />
           </div>