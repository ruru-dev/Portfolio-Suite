import { Link } from 'react-router-dom';

const ProjectPage = () => {
  return (
    <main className="project-page">
      <div className="project-page__card">
        <p className="project-page__eyebrow">Project</p>
        <h1 className="project-page__title">User List</h1>
        <p className="project-page__description">
          This is a fully separate project page with its own layout.
        </p>
        <Link to="/" className="project-page__back">
          Back to home
        </Link>
      </div>
    </main>
  );
};

export default ProjectPage;
