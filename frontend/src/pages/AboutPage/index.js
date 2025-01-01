import React, { useEffect } from 'react';
import Wrapper from './styles';
import { PageHero } from '../../components';
import aboutImg from '../../assets/hero-bcg.jpeg';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'Khushboo Jwellery | About';
  }, []);

  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='pic' />
        <article>
          <div className='title'>
            <h2>My Story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Khushboo Jwellers was started by Khushboo in December'21, with an aim to
            build a strong infrastructure for small People to expand
            their reach, by bringing the products online. Today Khushboo Jwellers is
            used by multiple jwellery shop owners to expand their bussiness. This is
            possible just due to your trust, support and our constant efforts to
            make the platform even better. We are working tirelessly to improve
            the experience of our end users and hope to soon reach 1000+
            customers.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

export default AboutPage;
