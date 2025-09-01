@@ .. @@
   const generateAISummary = async () => {
     setIsGenerating(true);
     // Simulate AI generation
     await new Promise(resolve => setTimeout(resolve, 2000));
     
-    const aiSummary = `Experienced professional with a strong background in ${resumeData.skills.slice(0, 3).join(', ')} and proven expertise in delivering high-quality results. Passionate about leveraging cutting-edge technologies to solve complex business challenges and drive innovation. Demonstrated ability to work effectively in collaborative environments while maintaining attention to detail and meeting project deadlines.`;
+    const skills = resumeData.skills.length > 0 ? resumeData.skills.slice(0, 3).join(', ') : 'various technologies';
+    const aiSummary = `Experienced professional with a strong background in ${skills} and proven expertise in delivering high-quality results. Passionate about leveraging cutting-edge technologies to solve complex business challenges and drive innovation. Demonstrated ability to work effectively in collaborative environments while maintaining attention to detail and meeting project deadlines.`;
     
     updateResumeData('professionalSummary', aiSummary);
     setIsGenerating(false);
   };