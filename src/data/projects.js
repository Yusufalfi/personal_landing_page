export const projects = [
  {
    number: "01",
    title: "AI Invoice Extraction",
    category: "RPA + AI",
    description:
      "Extract structured data from scanned, unstructured and multilingual invoices, then continue the business workflow automatically.",
    goal: "Automate the data extraction process from invoices and convert them into structured data ready for Excel.",
    problem:
      "Invoices arrive in various formats and layouts. Some are scanned documents in multiple languages (English, Chinese, Japanese, Russian). The manual process requires users to open each invoice, locate required details, and manually type them into Excel.",
    solution:
      "Built an end-to-end automation pipeline using UiPath + ChatGPT API to parse invoices, extract key metadata, and automatically populate an Excel template. Structured using UiPath REFramework for robust process control and logging.",
    impact:
      "Eliminated manual data entry completely. Key invoice metadata (Invoice Number, Date, Vendor, Customer, Subtotal, Tax, Total, Currency) is now extracted automatically into a structured format.",
    tech: ["UiPath", "ChatGPT API", "OCR", "REFramework", "Excel"],
    tone: "green",
    beforeText: "2-3 hours/day of manual data entry",
    afterText: "< 2-minute automated extractions",
    demoMedia: "https://www.youtube.com/embed/0J8tsSoi6N8?si=PXWpViRSHOpQu8lH",
  },
  {
    number: "02",
    title: "JobStreet Job Scraper",
    category: "WEB SCRAPING",
    description:
      "Collect dynamic job listings and transform web pages into clean, structured JSON data ready for further processing.",
    goal: "Rapidly collect dynamic job posting data from JobStreet at scale.",
    problem:
      "Manually gathering thousands of job postings is extremely time-consuming and highly prone to human error.",
    solution:
      "Developed an automated web scraper using Python and Playwright to handle dynamic web content and extract key elements efficiently.",
    impact:
      "Scraped job listings are instantly structured into clean JSON/Excel formats, ready for downstream analysis or databases.",
    tech: ["Python", "Playwright", "JSON"],
    tone: "blue",
    beforeText: "Manual copy-pasting of thousands of lines",
    afterText: "Automatic scraping in seconds",
    demoMedia: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    number: "03",
    title: "Browser Automation",
    category: "WEB AUTOMATION",
    description:
      "Automate repetitive browser tasks such as navigation, login, form submission, validation and data collection.",
    goal: "Automate complex browser navigation and repetitive form submissions.",
    problem:
      "Daily manual web navigation, authentication, and repetitive form filling consume significant operational hours.",
    solution:
      "Built custom web automation bots using Playwright and Selenium to reliably automate full browser workflows.",
    impact:
      "Achieved 100% execution accuracy for routine web operations without needing human intervention.",
    tech: ["Playwright", "Selenium", "Python"],
    tone: "pink",
    beforeText: "Manually fill out the form repeatedly",
    afterText: "100% precise bot execution",
    demoMedia: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    number: "04",
    title: "Automation Reporting",
    category: "RPA",
    description:
      "Collect automation results, validate outputs, generate reports and notify stakeholders without repetitive manual reporting.",
    goal: "Generate automated execution reports and dispatch real-time notifications to stakeholders.",
    problem:
      "Compiling execution results and compiling weekly performance reports manually required multi-database querying and extra effort.",
    solution:
      "Integrated UiPath with SQL databases and email services for automated data aggregation and scheduled report distribution.",
    impact:
      "Stakeholders receive accurate, automated status updates via email consistently without delays.",
    tech: ["UiPath", "SQL", "Email"],
    tone: "purple",
    beforeText: "Manual weekly report summary",
    afterText: "Report email sent automatically",
    demoMedia: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];