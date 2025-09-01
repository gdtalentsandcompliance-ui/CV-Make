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
    // Temporarily modify styles for better PDF output
    const originalStyle = element.style.cssText;
    element.style.cssText = `
      ${originalStyle}
      background: white !important;
      color: ${colors.text} !important;
      font-family: ${font}, system-ui, sans-serif !important;
      width: 794px !important;
      padding: 40px !important;
      box-sizing: border-box !important;
    `;

    // Wait for fonts to load
    await document.fonts.ready;

    // Create canvas with high quality settings
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: false,
      backgroundColor: '#ffffff',
      logging: false,
      width: 794,
      height: element.scrollHeight,
      windowWidth: 794,
      windowHeight: element.scrollHeight
    });

    // Restore original styles
    element.style.cssText = originalStyle;

    const imgData = canvas.toDataURL('image/png', 1.0);
    
    // Create PDF with proper dimensions
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: [794, 1123] // A4 in pixels at 96 DPI
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    // Calculate scaling to fit width
    const ratio = pdfWidth / imgWidth;
    const scaledHeight = imgHeight * ratio;

    let position = 0;
    let remainingHeight = scaledHeight;

    // Add pages as needed
    while (remainingHeight > 0) {
      if (position > 0) {
        pdf.addPage();
      }

      const pageHeight = Math.min(remainingHeight, pdfHeight);
      
      pdf.addImage(
        imgData,
        'PNG',
        0,
        -position,
        pdfWidth,
        scaledHeight,
        undefined,
        'FAST'
      );

      remainingHeight -= pdfHeight;
      position += pdfHeight;
    }

    // Generate filename
    const name = resumeData.personalDetails.name || 'Resume';
    const sanitizedName = name.replace(/[^a-zA-Z0-9]/g, '_');
    const fileName = `${sanitizedName}_Resume.pdf`;
    
    // Save the PDF
    pdf.save(fileName);
    
    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw new Error('Failed to generate PDF. Please try again.');
  }
};