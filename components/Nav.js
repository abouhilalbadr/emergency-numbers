import { useRouter } from 'next/router'
import { useState } from 'react'

const Nav = ({direction, title}) => {
  const [lang, setLang] = useState(direction) 
  const router = useRouter()

  const changeLanguage = (lang) => {
    if (lang === 'ltr') {
      setLang('ltr')
      router.replace('ar')
    }
    if (lang === 'rtl') {
      setLang('ltr')
      router.replace('fr')
    }
  }

  return (
    <div className="bg-black text-white w-full px-4 py-8 lg:py-12 mb-6 lg:mb-12 flex flex-col lg:flex-row flex-wrap justify-between items-center text-center">
      <h1 className="text-4xl lg:text-5xl font-bold mb-6 lg:mb-0">{title}</h1>
      <div className="button-con text-white flex items-center">
        <label className={"font-bold text-2xl mt-2 " + (direction === 'rtl' ? 'ml-4 ' : 'mr-4 ')} htmlFor='cb1'>
          {direction === 'rtl' ? 'العربية' : 'FR'}
        </label>
        <input className='toggle' id='cb1' type='checkbox' onChange={() => changeLanguage(lang)} />
        <label className='toggle-button' htmlFor='cb1'></label>
        <label className={"font-bold text-2xl mt-2 " + (direction === 'rtl' ? 'mr-4 ' : 'ml-4 ')} htmlFor='cb1'>
          {direction === 'rtl' ? 'الفرنسية' : 'AR'}
        </label>
      </div>
    </div>
  )
}

export default Nav