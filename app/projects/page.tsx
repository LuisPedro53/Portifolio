import { PageIntroduction } from '../Components/Pages/Projects/page-introduction/page-introduction';
import { ProjectsList } from '../Components/Pages/Projects/project-list';

export default function Projects() {
  return (
    <>
      <h1>
        <PageIntroduction />
        <ProjectsList />
      </h1>
    </>
  );
}
