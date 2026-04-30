import PropTypes from 'prop-types';
import Avatar from '@/shared/components/Avatar';
import { Title, Text, Paragraph } from '@/shared/components/Typography';
import parseTags from '@/shared/utils/parseTags';
import styles from './ResumePreview.module.css';
import { usePDF } from 'react-to-pdf';

function ResumePreview({ data = {} }) {
  const { toPDF, targetRef } = usePDF({
    filename: data.fullName ? `${data.fullName}.pdf` : 'page.pdf',
  });

  const isEmpty = !data.fullName && !data.position;
  const skills = parseTags(data.skills);
  const languages = parseTags(data.languages);

  if (isEmpty) {
    return (
      <div className={styles.preview}>
        <div className={styles.empty}>
          <span className={styles.emptyIcon}>📄</span>
          <Text type="secondary">
            Fill in the form to see your resume preview
          </Text>
        </div>
      </div>
    );
  }

  return (
    <>
      <div onClick={toPDF} style={{ margin: 16, cursor: 'pointer' }}>
        Download
      </div>
      <div className={styles.preview} ref={targetRef}>
        {/* Header */}
        <div className={styles.header}>
          {data.fullName && (
            <Avatar
              initials={data.fullName
                .split(' ')
                .map((w) => w[0])
                .join('')
                .slice(0, 2)}
              size="lg"
            />
          )}
          <div className={styles.headerInfo}>
            {data.fullName && (
              <Title level={3} className={styles.name}>
                {data.fullName}
              </Title>
            )}
            {data.position && (
              <Text type="secondary" italic className={styles.position}>
                {data.position}
                {data.experience ? ` · ${data.experience} yrs exp` : ''}
              </Text>
            )}
            <div className={styles.contacts}>
              {data.email && (
                <Text type="secondary" className={styles.contactItem}>
                  ✉ {data.email}
                </Text>
              )}
              {data.phone && (
                <Text type="secondary" className={styles.contactItem}>
                  ☎ {data.phone}
                </Text>
              )}
              {data.location && (
                <Text type="secondary" className={styles.contactItem}>
                  ⚲ {data.location}
                </Text>
              )}
              {data.website && (
                <Text type="secondary" className={styles.contactItem}>
                  ⊕ {data.website}
                </Text>
              )}
              {data.age && (
                <Text type="secondary" className={styles.contactItem}>
                  Age: {data.age}
                </Text>
              )}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className={styles.body}>
          {/* Sidebar */}
          <div className={styles.sidebar}>
            {skills.length > 0 && (
              <div className={styles.section}>
                <Text strong className={styles.sectionTitle}>
                  Skills
                </Text>
                <div className={styles.tags}>
                  {skills.map((skill) => (
                    <span key={skill} className={styles.tag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {languages.length > 0 && (
              <div className={styles.section}>
                <Text strong className={styles.sectionTitle}>
                  Languages
                </Text>
                {languages.map((lang) => (
                  <Text key={lang} className={styles.langItem}>
                    {lang}
                  </Text>
                ))}
              </div>
            )}

            {(data.school || data.degree) && (
              <div className={styles.section}>
                <Text strong className={styles.sectionTitle}>
                  Education
                </Text>
                <div className={styles.eduItem}>
                  {data.degree && (
                    <Text strong className={styles.eduDegree}>
                      {data.degree}
                    </Text>
                  )}
                  {data.school && (
                    <Text type="secondary" className={styles.eduSchool}>
                      {data.school}
                    </Text>
                  )}
                  {data.graduationYear && (
                    <Text type="secondary" className={styles.eduYear}>
                      {data.graduationYear}
                    </Text>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Main */}
          <div className={styles.main}>
            {data.summary && (
              <div className={styles.section}>
                <Text strong className={styles.sectionTitle}>
                  Summary
                </Text>
                <Paragraph type="secondary" className={styles.summaryText}>
                  {data.summary}
                </Paragraph>
              </div>
            )}

            {(data.currentRole || data.currentCompany) && (
              <div className={styles.section}>
                <Text strong className={styles.sectionTitle}>
                  Experience
                </Text>
                <div className={styles.expItem}>
                  {data.currentRole && (
                    <Text strong className={styles.expRole}>
                      {data.currentRole}
                    </Text>
                  )}
                  {data.currentCompany && (
                    <Text type="secondary" className={styles.expCompany}>
                      {data.currentCompany}
                    </Text>
                  )}
                  {data.period && (
                    <Text type="secondary" className={styles.expMeta}>
                      {data.period}
                    </Text>
                  )}
                  {data.jobDescription && (
                    <Paragraph type="secondary" className={styles.expDesc}>
                      {data.jobDescription}
                    </Paragraph>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

ResumePreview.propTypes = {
  data: PropTypes.shape({
    fullName: PropTypes.string,
    age: PropTypes.string,
    position: PropTypes.string,
    experience: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    location: PropTypes.string,
    website: PropTypes.string,
    summary: PropTypes.string,
    currentCompany: PropTypes.string,
    currentRole: PropTypes.string,
    period: PropTypes.string,
    jobDescription: PropTypes.string,
    skills: PropTypes.string,
    school: PropTypes.string,
    degree: PropTypes.string,
    graduationYear: PropTypes.string,
    languages: PropTypes.string,
  }),
};

export default ResumePreview;
