import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ResumeData } from '../context/ResumeContext';

export const generatePDF = async (
  resumeData: ResumeData,
  template: string,
  font: string,
  colors: { primary: string; secondary: string; text: string }
) => {
  const element = document.getElementById('resume-content');
  
  if (!element) {
    throw new Error('Resume content not found');
  }

  try {
    // Create canvas from the resume preview
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff'
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const imgWidth = 210; // A4 width in mm
    const pageHeight = 295; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;

    let position = 0;

    // Add first page
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Add additional pages if needed
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    // Download the PDF
    const fileName = `${resumeData.personalDetails.name || 'Resume'}_${template}.pdf`;
    pdf.save(fileName);
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};