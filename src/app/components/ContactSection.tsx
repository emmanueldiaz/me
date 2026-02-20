import { Download } from 'lucide-react';

export function ContactSection() {
  const handleDownloadCV = () => {
    // Mock CV download
    alert('CV download functionality would trigger here');
  };

  return (
    <div className="section-content">
      <div className="retro-border">
        <h1 className="section-title glitch">CONTACT</h1>
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-item">
              <span className="info-label">NAME:</span>
              <span className="info-value">Your Name</span>
            </div>
            <div className="info-item">
              <span className="info-label">EMAIL:</span>
              <span className="info-value">hello@portfolio.dev</span>
            </div>
            <div className="info-item">
              <span className="info-label">LOCATION:</span>
              <span className="info-value">Internet • Worldwide</span>
            </div>
          </div>

          <div className="download-section">
            <button onClick={handleDownloadCV} className="download-btn">
              <Download className="download-icon" />
              <span>DOWNLOAD_CV.PDF</span>
            </button>
          </div>

          <div className="ascii-footer">
            <pre className="ascii-text">
{`┌──────────────────────────────────┐
│  LET'S BUILD SOMETHING AWESOME   │
│        ► GET IN TOUCH ◄          │
└──────────────────────────────────┘`}
            </pre>
          </div>

          <div className="social-links">
            <a href="#" className="social-link">[GITHUB]</a>
            <a href="#" className="social-link">[LINKEDIN]</a>
            <a href="#" className="social-link">[TWITTER]</a>
          </div>
        </div>
      </div>
    </div>
  );
}
