import PropTypes from 'prop-types';
import Input from '@/components/Input';
import Textarea from '@/components/Textarea';
import Button from '@/components/Button';
import { Title } from '@/components/Typography';
import SectionTitle from '@/feature/resume/components/SectionTitle';
import styles from './ResumeForm.module.css';

import {useFormik} from 'formik';

const initialValues = {
  fullName: '',
  age: '',
  position: '',
  experience: '',
  email: '',
  phone: '',
  location: '',
  website: '',
  summary: '',
  currentCompany: '',
  currentRole: '',
  period: '',
  jobDescription: '',
  skills: '',
  school: '',
  degree: '',
  graduationYear: '',
  languages: '',
};


function ResumeForm({setData}) {


  const {values, handleChange, handleReset, handleSubmit} = useFormik({
    initialValues,
    onSubmit: values => {
      setData(values);
    },

    onReset: () => {
      setData?.(null);
    }
  })


  return (
    <div className={styles.form}>

      <Title level={4} style={{ marginBottom: 4 }}>Resume Builder</Title>

      {/* Personal */}
      <div className={styles.section}>
        <SectionTitle>Personal Info</SectionTitle>
        <div className={styles.row}>
          <Input
            label="Full Name"
            placeholder="John Doe"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
          />
          <Input
            label="Age"
            placeholder="28"
            type="number"
            name="age"
            value={values.age}
            onChange={handleChange}
          />
        </div>
        <div className={styles.row}>
          <Input
            label="Position / Title"
            placeholder="Senior Frontend Developer"
            name="position"
            value={values.position}
            onChange={handleChange}
          />
          <Input
            label="Years of Experience"
            placeholder="5"
            type="number"
            name="experience"
            value={values.experience}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Contact */}
      <div className={styles.section}>
        <SectionTitle>Contact</SectionTitle>
        <div className={styles.row}>
          <Input
            label="Email"
            placeholder="john@example.com"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <Input
            label="Phone"
            placeholder="+1 555 000 0000"
            type="tel"
            name="phone"
            value={values.phone}
            onChange={handleChange}
          />
        </div>
        <div className={styles.row}>
          <Input
            label="Location"
            placeholder="New York, USA"
            name="location"
            value={values.location}
            onChange={handleChange}
          />
          <Input
            label="Website / LinkedIn"
            placeholder="linkedin.com/in/johndoe"
            name="website"
            value={values.website}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Summary */}
      <div className={styles.section}>
        <SectionTitle>Summary</SectionTitle>
        <Textarea
          label="Professional Summary"
          placeholder="Brief description of who you are and what you bring..."
          name="summary"
          value={values.summary}
          onChange={handleChange}
          rows={3}
          maxLength={400}
          showCount
        />
      </div>

      {/* Experience */}
      <div className={styles.section}>
        <SectionTitle>Experience</SectionTitle>
        <div className={styles.row}>
          <Input
            label="Current / Last Company"
            placeholder="Acme Corp"
            name="currentCompany"
            value={values.currentCompany}
            onChange={handleChange}
          />
          <Input
            label="Role"
            placeholder="Frontend Developer"
            name="currentRole"
            value={values.currentRole}
            onChange={handleChange}
          />
        </div>
        <Input
          label="Period"
          placeholder="Jan 2021 – Present"
          name="period"
          value={values.period}
          onChange={handleChange}
        />
        <Textarea
          label="Job Description"
          placeholder="Describe your responsibilities and achievements..."
          name="jobDescription"
          value={values.jobDescription}
          onChange={handleChange}
          rows={3}
          maxLength={500}
          showCount
        />
      </div>

      {/* Skills */}
      <div className={styles.section}>
        <SectionTitle>Skills</SectionTitle>
        <Input
          label="Skills"
          placeholder="React, TypeScript, Node.js, CSS  (comma-separated)"
          name="skills"
          value={values.skills}
          onChange={handleChange}
          helperText="Separate each skill with a comma"
        />
      </div>

      {/* Education */}
      <div className={styles.section}>
        <SectionTitle>Education</SectionTitle>
        <div className={styles.row}>
          <Input
            label="School / University"
            placeholder="MIT"
            name="school"
            value={values.school}
            onChange={handleChange}
          />
          <Input
            label="Degree"
            placeholder="B.Sc. Computer Science"
            name="degree"
            value={values.degree}
            onChange={handleChange}
          />
        </div>
        <Input
          label="Graduation Year"
          placeholder="2018"
          type="number"
          name="graduationYear"
          value={values.graduationYear}
          onChange={handleChange}
        />
      </div>

      {/* Languages */}
      <div className={styles.section}>
        <SectionTitle>Languages</SectionTitle>
        <Input
          label="Languages"
          placeholder="English (Native), Spanish (B2)  (comma-separated)"
          name="languages"
          value={values.languages}
          onChange={handleChange}
          helperText="Separate each language with a comma"
        />
      </div>

      {/* Actions */}
      <div className={styles.actions}>
        <Button variant="secondary" onClick={handleReset} htmlType="button">
          Reset
        </Button>
        <Button variant="primary" onClick={handleSubmit} htmlType="button">
          Save
        </Button>
      </div>

    </div>
  );
}

ResumeForm.propTypes = {
  setData: PropTypes.func.isRequired,
};

export default ResumeForm;
