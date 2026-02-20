import { ImageWithFallback } from './figma/ImageWithFallback';

export function WorkSection() {
  const projects = [
    {
      id: 1,
      title: 'PROJECT_01.EXE',
      description: 'A retro-inspired web application featuring classic gaming aesthetics and modern performance.',
    },
    {
      id: 2,
      title: 'PROJECT_02.EXE',
      description: 'Interactive dashboard with pixel-perfect design, combining nostalgia with cutting-edge technology.',
    },
    {
      id: 3,
      title: 'PROJECT_03.EXE',
      description: 'E-commerce platform with an 8-bit theme, delivering unique shopping experience for digital natives.',
    },
  ];

  return (
    <div className="section-content">
      <div className="retro-border">
        <h1 className="section-title glitch">WORK</h1>
        <div className="work-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="work-card">
              <div className="work-card-border">
                <div className="work-image-container">
                  <ImageWithFallback
                    src={`https://picsum.photos/seed/${project.id}/400/300`}
                    alt={project.title}
                    className="work-image"
                  />
                  <div className="image-overlay">
                    <span className="overlay-text">{'>'} VIEW_PROJECT</span>
                  </div>
                </div>
                <div className="work-content">
                  <h2 className="work-title">{project.title}</h2>
                  <p className="work-description">
                    {project.description}
                  </p>
                  <div className="work-meta">
                    [STATUS: COMPLETED] • [{String(index + 1).padStart(2, '0')}]
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
