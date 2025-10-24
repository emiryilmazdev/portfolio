import SectionHeading from '@/common/components/elements/SectionHeading';
import Skills from '@/modules/about/components/Skills';

const SkillsSection = () => {
  return (
    <section className='space-y-5'>
      <div className='space-y-3'>
        <SectionHeading title='Technologies & Tools' />
      </div>
      <Skills />
    </section>
  );
};

export default SkillsSection;
