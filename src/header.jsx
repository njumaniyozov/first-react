import img1 from'./images/Logo.png'
function App() {
  return (
    <header className='flex items-center justify-between max-w-[100%]'>
        <div>
          <img src={img1} className='h-[40px]' />
        </div>
        <div className='flex text-[20px] gap-[60px]'>
          <a href="#">О нас</a>
          <a href="#">Услуги</a>
          <a href="#">Специалисты</a>
          <a href="#">Контакты</a>
        </div>
        <div className='h-[40px] w-[170px]'>
          <p>Есть номер! Звоните</p>
          <p>+7 495 797 77 35</p>
        </div>
        <div>
          <button className='h-[60px] w-[200px] text-[20px] border-none bg-green-600 rounded-[40px]'>Заказать звонок</button>
        </div>
    </header>
  )
}

export default App

