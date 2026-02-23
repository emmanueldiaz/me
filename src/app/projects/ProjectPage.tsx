import { useParams, Link } from "react-router";

export function ProjectPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1 className="text-4xl">Project: {id}</h1>
      <p>
        <Link to="/projects">Back to projects</Link>
      </p>
    </div>
  );
}
