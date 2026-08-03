import type { FC } from 'react';
import './projectTile.css';

interface ProjectTileProps {
  title: string;
  description: string;
}

const ProjectTile: FC<ProjectTileProps> = ({ title, description }) => {
  return (
    <div className="project-tile">
      <div className="project-tile__content">
        <h2 className="project-tile__title">{title}</h2>
        <p className="project-tile__description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectTile;
