@@ .. @@
           <div>
             <label className="block text-sm font-medium text-gray-700 mb-1">
               Job Description
             </label>
+            <p className="text-xs text-gray-500 mb-2">
+              Use bullet points for better formatting. Each line will become a bullet point in the PDF.
+            </p>
             <textarea
               rows={4}
               value={exp.description}
               onChange={(e) => updateExperience(index, 'description', e.target.value)}
               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
-              placeholder="Describe your responsibilities, achievements, and impact..."
+              placeholder="Led development of web applications using React and Node.js&#10;Improved system performance by 40% through code optimization&#10;Mentored junior developers and conducted code reviews"
             />
           </div>