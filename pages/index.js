import { useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Header from '../components/Header'
import Number from '../components/Number'

import ip from '../assets/images/ip.png'
import sos from '../assets/images/sos.png'
import ca from '../assets/images/ca.png'
import re from '../assets/images/re.png'
import amb from '../assets/images/amb.png'
import gr from '../assets/images/gr.png'
import pom from '../assets/images/pom.png'
import Covid from '../components/Covid'
import Nav from '../components/Nav'

const Homepage = () => {
  const { t, i18n } = useTranslation('common')

  const links = [
    {image: ip, name: t('ip'), phone: "05 22 26 20 62", bg: "bg-blue"},
    {image: sos, name: t('sos'), phone: "05 22 98 98 98", bg: "bg-red"},
    {image: ca, name: t('ca'), phone: "08 01 00 01 80", bg: "bg-purple"},
    {image: re, name: t('re'), phone: "160", bg: "bg-lime"},
    {image: amb, name: t('amb'), phone: "150", bg: "bg-redAmb"},
    {image: gr, name: t('gr'), phone: "177", bg: "bg-yellow"},
    {image: gr, name: t('poli'), phone: "190", bg: "bg-green"},
    {image: pom, name: t('pom'), phone: "150", bg: "bg-redPom"},
  ]

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [t])

  return (
    <>
      <Header lang={t('langue')} title={t('title')} description={t('description')} />
      <section className="flex flex-col w-full min-h-screen justify-center items-center py-6 lg:py-8">
        <div className="container">
          <div className="m-2 lg:mx-6">
            <Nav direction={i18n.dir()} title={t('title')} />
            <Covid nv={t('nv')} ay={t('ay')} covid={t('covid')} />
          </div>
          <div className="flex flex-col lg:flex-row flex-wrap">
            {links.length && links.map((link, index) => (
              <Number number={link} index={index} key={index} />
            ))}
          </div>
          
        </div>
      </section>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default Homepage
