import { useParams, Link } from "react-router";

export function ProjectsPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Project: {id}</h1>
      <p>
        <Link to="/projects">Back to projects</Link>
      </p>
    </div>
  );
}
