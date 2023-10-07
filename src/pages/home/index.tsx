import { WorkExperience } from '@/components/WorkExperience';
import { ExternalLink } from '@/components/ExternalLink';
import { Profile } from '@/components/Profile';
import data from '../../data.json'
import styles from "./index.module.css";
import { ProjectImage } from '@/components/ProjectImage';
import { Button } from '@/components/Button';


export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Profile />

        <div>
          <span className='Esp'>Especialização:</span>
            <p>Cara é foda</p>
        </div>
      
        <div className={styles.socialMedia}>
          <ExternalLink
            link="https://www.linkedin.com/in/pedro-gerhardt-b77757289/"
            title="Linkedin"
          />
          <ExternalLink link="https://github.com/PedroGerhardts" title="GitHub" />
          <ExternalLink link="https://www.instagram.com/pedro__gerhardt/" title="Instagram" />
        </div>
        <div>
          
        </div>

        <div>

      <title>Experiencias</title>          
        <WorkExperience
            rule="Estagiario de Programador"
            year="2020"
            company="Bimachine"
          />
          
          <WorkExperience
            rule="Estagiario de Programador"
            year="20220"
            company="Bimachine"
          />

        </div>

        <div>

        <Button title={'Baixar Curriculo'} href={'......'}          
          />
        </div>

      </div>

<div>
        {data.map((project) => {
          return (
            <ProjectImage
              key={project.id}
              img={project.imagem}
              alt={project.titulo}
            />
          );
        })}
      </div>
        


    </main>
  );
}
