import { useState } from 'react';
import ResumeForm from '../../components/ResumeForm/ResumeForm';
import ResumePreview from '../../components/ResumePreview/ResumePreview';
import styles from './ResumeContainer.module.css';


function ResumeContainer() {
  const [data, setData] = useState();

  return (
    <div className={styles.root}>
      <div className={styles.formPanel}>
        <ResumeForm
          setData={setData}
        />
      </div>
      <div className={styles.previewPanel}>
        <ResumePreview data={data} />
      </div>
    </div>
  );
}


export default ResumeContainer;
