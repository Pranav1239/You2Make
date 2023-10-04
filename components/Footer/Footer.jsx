import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
<footer id="dark-theme" className='bottom-0 left-0 flex flex-col w-full gap-8 px-8 py-16 md:gap-12'>
  <div className='opacity-40'>
  <hr />
  </div>
  <div className='flex justify-evenly flex-row '>
  <div className='flex flex-col gap-6'>
      <label className='text-gray-400'>Category</label>
      <ul className='flex flex-col gap-6'>
        <li>Coding</li>
        <li>Foods</li>
        <li>Travling</li>
        <li>Others</li>
      </ul>
    </div>
    <div className='flex flex-col gap-6'>
      <label className='text-gray-400'>Lorem</label>
      <ul className='flex flex-col gap-6 '>
        <li>Blogs</li>
        <li>Category blogs</li>
        <li>MainPage</li>
      </ul>
    </div>
    <div className='flex flex-col gap-6'>
      <label className='text-gray-400'>Contact</label>
      <ul className='flex flex-col gap-6  cursor-pointer '>
        <li className='opacity-40 hover:opacity-100'><FaInstagram /></li>
        <li className='opacity-40 hover:opacity-100'><FaGithub /></li>
        <li className='opacity-40 hover:opacity-100'><FaTwitter /></li>
      </ul>
    </div>
  </div>
  </footer>
  )
}
