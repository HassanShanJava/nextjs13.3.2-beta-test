import React from "react";
import heroStyles from "../styles/herosection.module.css";
import styles from "../styles/common.module.css";
import Link from "next/link";

import { Mulish } from 'next/font/google';
import Image from "next/image";
import HeroImage from "../../../public/about1.svg"

const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap'
})

const Hero = () => {
  return (
    <main className={heroStyles.main_section}>
      <div className={styles.container}>
        <div className={styles.grid_two_section}>
          <div className={heroStyles.hero_content}>
            <p>
              From award-winning dramas t o blockbuster action movies, we&apos;ve
              got you covered. Browse our selection of the latest and greatest
              movies, and find your new favorite today.
            </p>
            <Link href="/movie">
              <button className={mulish.className}>
                Explore Movies
              </button>
            </Link>
          </div>

          <div className={heroStyles.hero_image}>
            <Image src={HeroImage} alt={"about"} width={500} height={500}/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
